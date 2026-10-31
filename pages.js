/*
 * EDDINO CREATIVE LAB - PAGES (readable code, safe to edit)
 * ---------------------------------------------------------
 * Contains:
 *   - the Presentation page (9:16 company video + "request a sample" box)
 *   - the Blog list page (reads blog/posts.js, which is generated from blog/posts/*.html)
 *   - the 3D pencil on the home page "Let's make your brand stand out" box,
 *     which follows the mouse cursor.
 *
 * Texts come from content.js, settings from config.js.
 * app.js (the engine, minified) calls these functions through window.EDDINO_PAGES.
 */
(function () {
  "use strict";

  var ARROW = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  /* ---------- helpers ---------- */

  function lang() {
    return document.documentElement.lang === "fr" ? "fr" : "en";
  }

  // Reads a text from content.js, e.g. T("presentation.ctaButton")
  function T(path) {
    var all = window.EDDINO_CONTENT || {};
    var get = function (obj) {
      return path.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj);
    };
    var value = get(all[lang()]);
    if (value === undefined) value = get(all.en);
    return value === undefined ? "" : value;
  }

  function cfg() {
    return window.EDDINO_CONFIG || {};
  }

  function esc(text) {
    return String(text == null ? "" : text).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // Same word-splitting the rest of the site uses for big titles
  function splitTitle(text) {
    return window.EDDINO_SPLIT ? window.EDDINO_SPLIT(text, { blurLast: true }) : text;
  }

  function pageHead(tape, title, lead) {
    return '<header class="page-head">' +
      '<span class="tape" data-reveal>' + tape + '</span>' +
      '<h1 class="display" data-split>' + splitTitle(title) + '</h1>' +
      (lead ? '<p class="lead" data-reveal data-delay="0.1">' + lead + '</p>' : '') +
      '</header>';
  }

  function whatsappUrl() {
    var wa = cfg().whatsapp || {};
    return wa.number ? "https://wa.me/" + wa.number : "";
  }

  function formatDate(iso) {
    if (!iso) return "";
    var d = new Date(iso + "T12:00:00");
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleDateString(lang() === "fr" ? "fr-FR" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
  }

  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  /* ---------- Presentation page ---------- */

  var presentation = {
    render: function () {
      var video = cfg().presentation || {};
      var wa = whatsappUrl();
      return pageHead(esc(T("presentation.tape")), T("presentation.title"), esc(T("presentation.lead"))) +
        '<section class="section presentation-section"><div class="presentation-grid">' +
          '<figure class="glass video-frame" data-reveal>' +
            '<video class="presentation-video" controls playsinline preload="metadata"' +
              (video.poster ? ' poster="' + esc(video.poster) + '"' : '') + '>' +
              '<source src="' + esc(video.video || "") + '" type="video/mp4" />' +
            '</video>' +
            '<figcaption class="video-missing" hidden>' + esc(T("presentation.missing")) + '</figcaption>' +
          '</figure>' +
          '<aside class="glass presentation-cta" data-reveal data-delay="0.1">' +
            '<h2 class="display">' + esc(T("presentation.ctaTitle")) + '</h2>' +
            '<p>' + esc(T("presentation.ctaText")) + '</p>' +
            '<a class="btn" href="#/contact" data-magnetic>' + esc(T("presentation.ctaButton")) + ' ' + ARROW + '</a>' +
            (wa ? '<a class="link-arrow" href="' + wa + '" target="_blank" rel="noopener">' + esc(T("presentation.ctaWhatsapp")) + ' ' + ARROW + '</a>' : '') +
          '</aside>' +
        '</div></section>';
    },

    mount: function (root) {
      // Start the video as soon as the page opens, at a lower volume (the viewer can turn it up)
      var video = root.querySelector(".presentation-video");
      if (video) {
        video.volume = 0.3;
        var played = video.play();
        if (played && played.catch) {
          // Browsers may block sound on autoplay: start it muted instead, so it still moves
          played.catch(function () { video.muted = true; video.play().catch(function () {}); });
        }
      }

      // If the video file is not there yet, show the "not added yet" note over the frame
      var source = root.querySelector(".presentation-video source");
      var note = root.querySelector(".video-missing");
      if (!source || !note) return;
      source.addEventListener("error", function () { note.hidden = false; });
    }
  };

  /* ---------- Blog list page ---------- */

  var blog = {
    render: function () {
      var posts = window.EDDINO_BLOG_POSTS || [];
      var head = pageHead(esc(T("blog.tape")), T("blog.title"), esc(T("blog.lead")));

      if (!posts.length) {
        return head +
          '<section class="section"><div class="glass blog-empty" data-reveal><p>' +
          esc(T("blog.empty")) + '</p></div></section>';
      }

      var cards = posts.map(function (post, i) {
        return '<a class="card glass post-card" href="' + esc(post.file) + '" data-tilt="4" data-reveal data-delay="' + (i * 0.08).toFixed(2) + '">' +
          (post.category ? '<span class="work-tag">' + esc(post.category) + '</span>' : '') +
          '<h3>' + esc(post.title) + '</h3>' +
          '<p>' + esc(post.description) + '</p>' +
          '<span class="post-meta">' + esc(formatDate(post.date)) + '</span>' +
          '<span class="link-arrow">' + esc(T("blog.readMore")) + ' ' + ARROW + '</span>' +
          '</a>';
      }).join("");

      return head + '<section class="section blog-grid">' + cards + '</section>';
    },

    mount: function () {}
  };

  /* ---------- 3D pencil (home page, "stand out" box) ---------- */

  // Principal (longest) direction of the model's vertices: the pencil's long axis
  function longAxis(model, T3) {
    var pts = [];
    model.updateMatrixWorld(true);
    model.traverse(function (o) {
      if (!o.isMesh) return;
      var pos = o.geometry.attributes.position;
      var v = new T3.Vector3();
      for (var i = 0; i < pos.count; i += 2) {
        pts.push(v.fromBufferAttribute(pos, i).applyMatrix4(o.matrixWorld).clone());
      }
    });
    var mean = new T3.Vector3();
    pts.forEach(function (q) { mean.add(q); });
    mean.divideScalar(Math.max(pts.length, 1));
    var c = [[0,0,0],[0,0,0],[0,0,0]];
    pts.forEach(function (q) {
      var d = [q.x - mean.x, q.y - mean.y, q.z - mean.z];
      for (var r = 0; r < 3; r++) for (var k = 0; k < 3; k++) c[r][k] += d[r] * d[k];
    });
    var a = [1, 1, 1];
    for (var it = 0; it < 60; it++) {
      var b = [0, 0, 0];
      for (var r2 = 0; r2 < 3; r2++) for (var k2 = 0; k2 < 3; k2++) b[r2] += c[r2][k2] * a[k2];
      var n = Math.sqrt(b[0]*b[0] + b[1]*b[1] + b[2]*b[2]) || 1;
      a = [b[0]/n, b[1]/n, b[2]/n];
    }
    return new T3.Vector3(a[0], a[1], a[2]);
  }

  function initPencil(el) {
    var T3 = window.EDDINO_THREE;
    var base64 = window.EDDINO_PENCIL_GLB;
    if (!T3 || !base64) { el.hidden = true; return; }

    var renderer;
    try {
      renderer = new T3.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch (err) {
      el.hidden = true; // no WebGL on this device: the box simply has no pencil
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = T3.SRGBColorSpace;
    renderer.toneMapping = T3.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    el.appendChild(renderer.domElement);
    renderer.domElement.setAttribute("aria-hidden", "true");

    var scene = new T3.Scene();
    var pmrem = new T3.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new T3.RoomEnvironment(), 0.04).texture;
    scene.add(new T3.HemisphereLight(0xffffff, 0x6b5a70, 0.9));
    var key = new T3.DirectionalLight(0xffffff, 1.5);
    key.position.set(3, 5, 6);
    scene.add(key);

    var camera = new T3.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 0, 5.4); // closer = bigger pencil

    var pivot = new T3.Group();
    scene.add(pivot);
    var spinGroup = null; // rotates the pencil around its own long axis

    var target = { yaw: 0, pitch: 0 };
    var current = { yaw: 0, pitch: 0 };
    // Hover zoom: small at rest, closer to the camera when the mouse is over the pencil
    var hovered = false;
    var zoom = 0; // 0 = rest, 1 = fully zoomed
    var REST_Z = 5.4, ZOOM_Z = 4.0;
    el.addEventListener("pointerenter", function () { hovered = true; });
    el.addEventListener("pointerleave", function () { hovered = false; });
    var ready = false;
    var visible = true;
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var raf = 0;
    var io = null;

    function cleanup() {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
      if (io) io.disconnect();
      cancelAnimationFrame(raf);
      renderer.dispose();
    }

    // The pencil leans toward the mouse cursor: left/right = yaw, up/down = pitch
    function onMove(e) {
      var r = el.getBoundingClientRect();
      var dx = (e.clientX - (r.left + r.width / 2)) / Math.max(r.width, 1);
      var dy = (e.clientY - (r.top + r.height / 2)) / Math.max(r.height, 1);
      // rest pose = the Blender pose, where the printed text faces the viewer; the cursor adds a small lean
      if (hovered) {
        // Hovering: keep the printed text facing the viewer (small lean only)
        target.yaw = -1.57 + clamp(dx * 0.3, -0.15, 0.15);   // -1.57 turns the "Design with" text to the viewer
        target.pitch = clamp(-dy * 0.15, -0.1, 0.1);
      } else {
        target.yaw = clamp(dx * 1.6, -1.4, 1.4);   // spin: shows the "Design with" side and the "Passion" side
        target.pitch = clamp(-dy * 0.3, -0.25, 0.25);
      }
    }

    function resize() {
      var w = el.clientWidth || 1;
      var h = el.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }

    // Load the model embedded in pencil-model.js
    var bytes;
    try {
      bytes = Uint8Array.from(atob(base64), function (ch) { return ch.charCodeAt(0); }).buffer;
    } catch (err) {
      el.hidden = true;
      renderer.dispose();
      return;
    }
    new T3.GLTFLoader().parse(bytes, "", function (gltf) {
      var model = gltf.scene;
      var box = new T3.Box3().setFromObject(model);
      var center = box.getCenter(new T3.Vector3());
      var size = box.getSize(new T3.Vector3());
      model.position.sub(center);
      pivot.scale.setScalar(1.5 / Math.max(size.x, size.y, size.z)); // smaller at rest; hover zooms in
      // Align the long axis with local Y, spin around Y, then undo the alignment.
      // At rest (spin = 0) the pencil keeps its Blender pose, so the text faces the viewer.
      var axis = longAxis(model, T3);
      var theta = Math.atan2(axis.x, axis.y);
      var rho = Math.sqrt(axis.x * axis.x + axis.y * axis.y);
      var phi = Math.atan2(-axis.z, rho);
      var steps = [["z", -theta], ["x", -phi], ["y", 0], ["x", phi], ["z", theta]];
      var parent = pivot;
      steps.forEach(function (step) {
        var g = new T3.Group();
        g.rotation[step[0]] = step[1];
        parent.add(g);
        parent = g;
        if (step[0] === "y") spinGroup = g;
      });
      parent.add(model);
      ready = true;
    }, function (err) {
      console.error("Could not load the 3D pencil", err);
      el.hidden = true;
      cleanup();
    });

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("resize", resize);
    resize();

    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(function (entries) { visible = entries[0].isIntersecting; });
      io.observe(el);
    }

    var t0 = performance.now();
    function frame(now) {
      // Page changed and this box was removed: stop the loop
      if (!el.isConnected) { cleanup(); return; }
      raf = requestAnimationFrame(frame);
      if (!ready || !visible) return;

      var t = (now - t0) / 1000;
      var idleYaw = reduceMotion ? 0 : Math.sin(t * 0.8) * 0.05;
      var idlePitch = reduceMotion ? 0 : Math.sin(t * 0.6) * 0.03;
      current.yaw += (target.yaw + idleYaw - current.yaw) * 0.1;
      current.pitch += (target.pitch + idlePitch - current.pitch) * 0.1;
      zoom += ((hovered ? 1 : 0) - zoom) * 0.08;
      camera.position.z = REST_Z + (ZOOM_Z - REST_Z) * zoom;
      pivot.rotation.set(current.pitch, 0, 0);
      if (spinGroup) spinGroup.rotation.y = current.yaw + idleYaw;
      renderer.render(scene, camera);
    }
    raf = requestAnimationFrame(frame);
  }

  function mountHome(root) {
    // Logo above the home title (shown on phones only, centred, see custom.css)
    var copy = root.querySelector(".hero-copy");
    if (copy && !copy.querySelector(".m-logo")) {
      var logo = document.createElement("div");
      logo.className = "m-logo";
      logo.innerHTML = '<img class="m-logo-light" src="brand/logo-mark.png" alt="" width="50" height="50" />' +
        '<img class="m-logo-dark" src="brand/logo-mark-dark.png" alt="" width="50" height="50" />' +
        '<span>Eddino Creative Lab</span>';
      copy.insertBefore(logo, copy.firstChild);
    }
    var boxes = root.querySelectorAll("[data-pencil]");
    for (var i = 0; i < boxes.length; i++) initPencil(boxes[i]);
  }

  window.EDDINO_PAGES = {
    presentation: presentation,
    blog: blog,
    mountHome: mountHome
  };
})();
