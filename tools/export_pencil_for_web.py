"""
EDDINO CREATIVE LAB - EXPORT THE 3D PENCIL FOR THE WEBSITE
==========================================================
Run this inside Blender (Scripting tab > Open > this file > Run Script), with your
pencil .blend file open. It:
  1. bakes the colours of the pencil materials into textures (procedural materials
     such as noise or the printed text cannot be exported to the web otherwise),
  2. exports a GLB file,
  3. writes pencil-model.js in your site folder, which the home page loads.

Set SITE_FOLDER below to the folder that contains index.html.
Tested with Blender 5.0. The first run can take a minute.
"""
import base64
import os

import bpy

# >>> Set this to the folder that contains index.html (example: r"C:\Sites\eddino-site")
SITE_FOLDER = ""

OUT_GLB_NAME = "pencil_for_web.glb"
BAKE_SIZE = 512          # small parts (eraser, metal, wood, graphite)
BAKE_SIZE_BODY = 2048   # the yellow body that carries the "Design with Passion" text

if not SITE_FOLDER or not os.path.isfile(os.path.join(SITE_FOLDER, "index.html")):
    raise SystemExit("Set SITE_FOLDER at the top of this script to the folder that contains index.html")

scene = bpy.context.scene
scene.render.engine = "CYCLES"
scene.cycles.device = "CPU"
scene.cycles.samples = 8
scene.render.bake.target = "IMAGE_TEXTURES"
scene.render.bake.margin = 4
scene.render.bake.use_clear = True

meshes = [o for o in scene.objects if o.type == "MESH"]
if not meshes:
    raise SystemExit("No mesh objects found in this scene")

# One private material copy per object and slot, each with an image node the bake writes into
for obj in meshes:
    for i, slot in enumerate(obj.material_slots):
        if slot.material is None:
            continue
        mat = slot.material.copy()
        mat.name = f"{obj.name}_{slot.material.name}_{i}"
        slot.material = mat
        mat.use_nodes = True
        size = BAKE_SIZE_BODY if slot.material.name == "01" else BAKE_SIZE
        image = bpy.data.images.new(f"bake_{mat.name}", size, size, alpha=False)
        node = mat.node_tree.nodes.new("ShaderNodeTexImage")
        node.image = image
        mat.node_tree.nodes.active = node

for obj in meshes:
    bpy.ops.object.select_all(action="DESELECT")
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj
    bpy.ops.object.bake(type="DIFFUSE", pass_filter={"COLOR"}, margin=4, use_clear=True)

# Replace each material by a simple PBR material that uses the baked colour.
# Roughness and metallic values are the ones of the original materials, matched by name.
ROUGHNESS = {"01": (0.25, 0.0), "hazo": (0.76, 0.0), "mine": (0.36, 0.0),
             "metal.001": (0.30, 0.76), "Material.006": (0.73, 0.0)}

for obj in meshes:
    for i, slot in enumerate(obj.material_slots):
        if slot.material is None:
            continue
        name = slot.material.name
        original = name.split("_", 1)[1].rsplit("_", 1)[0] if "_" in name else name
        rough, metal = ROUGHNESS.get(original, (0.5, 0.0))

        image = None
        for node in slot.material.node_tree.nodes:
            if node.type == "TEX_IMAGE" and node.image is not None:
                image = node.image
        image.pack()

        clean = bpy.data.materials.new(name=f"web_{obj.name}_{original}_{i}")
        clean.use_nodes = True
        tree = clean.node_tree
        for n in list(tree.nodes):
            tree.nodes.remove(n)
        out = tree.nodes.new("ShaderNodeOutputMaterial")
        bsdf = tree.nodes.new("ShaderNodeBsdfPrincipled")
        tex = tree.nodes.new("ShaderNodeTexImage")
        tex.image = image
        tree.links.new(tex.outputs["Color"], bsdf.inputs["Base Color"])
        bsdf.inputs["Roughness"].default_value = rough
        bsdf.inputs["Metallic"].default_value = metal
        tree.links.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
        slot.material = clean

# Export only the pencil meshes
bpy.ops.object.select_all(action="DESELECT")
for obj in meshes:
    obj.select_set(True)
bpy.context.view_layer.objects.active = meshes[0]

glb_path = os.path.join(SITE_FOLDER, OUT_GLB_NAME)
bpy.ops.export_scene.gltf(filepath=glb_path, export_format="GLB", use_selection=True,
                          export_apply=True, export_yup=True, export_cameras=False,
                          export_lights=False, export_animations=False)

with open(glb_path, "rb") as f:
    encoded = base64.b64encode(f.read()).decode("ascii")
os.remove(glb_path)

js_path = os.path.join(SITE_FOLDER, "pencil-model.js")
with open(js_path, "w", encoding="ascii") as f:
    f.write("/* 3D pencil, exported from Blender by tools/export_pencil_for_web.py */\n")
    f.write('window.EDDINO_PENCIL_GLB = "' + encoded + '";\n')

print("Done. Refresh index.html in your browser to see the new pencil:", js_path)
