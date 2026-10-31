/*
 * The golden 3D bubble (.orb-b) reacts to the mouse:
 * it drifts gently away from the cursor and its light reflection turns toward it,
 * so it looks like a real glossy object lit from the cursor side.
 * Edit the numbers below to change how strong the effect is.
 */
(function () {
  var STRENGTH_MOVE = 70;   // how far (px) the bubble drifts away from the cursor
  var STRENGTH_LIGHT = 14;  // how far (%) the reflection moves toward the cursor
  var EASE = 0.06;          // smaller = slower, softer movement

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  var target = { x: 0, y: 0 };
  var current = { x: 0, y: 0 };

  window.addEventListener("pointermove", function (e) {
    target.x = e.clientX / Math.max(window.innerWidth, 1) - 0.5;   // -0.5 .. 0.5
    target.y = e.clientY / Math.max(window.innerHeight, 1) - 0.5;
  }, { passive: true });

  function frame() {
    var orb = document.querySelector(".orb-b");
    if (orb) {
      current.x += (target.x - current.x) * EASE;
      current.y += (target.y - current.y) * EASE;
      orb.style.setProperty("--ox", (-current.x * STRENGTH_MOVE).toFixed(1) + "px");
      orb.style.setProperty("--oy", (-current.y * STRENGTH_MOVE).toFixed(1) + "px");
      orb.style.setProperty("--hx", (34 + current.x * STRENGTH_LIGHT * 2).toFixed(1) + "%");
      orb.style.setProperty("--hy", (28 + current.y * STRENGTH_LIGHT * 2).toFixed(1) + "%");
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
