/*
 * The lazy ring around the cursor reacts to movement speed:
 * it stretches in the direction it travels and squeezes sideways,
 * then goes back to a round shape when the mouse stops.
 * Change the numbers below to adjust the effect.
 */
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !window.matchMedia("(pointer: fine)").matches) return;

  var LAG = 0.22;          // same lag as the cursor itself
  var STRETCH = 0.035;     // how much it stretches per pixel of speed
  var MAX_STRETCH = 0.5;   // upper limit (0.5 = up to 50% longer)
  var SQUEEZE = 0.45;      // sideways squeeze compared with the stretch

  var pointer = { x: -999, y: -999 };
  var lazy = { x: -999, y: -999 };
  var prev = { x: -999, y: -999 };
  var speed = 0, angle = 0, stretch = 0;

  window.addEventListener("pointermove", function (e) {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    if (lazy.x === -999) { lazy.x = pointer.x; lazy.y = pointer.y; prev.x = lazy.x; prev.y = lazy.y; }
  }, { passive: true });

  function frame() {
    var ring = document.querySelector(".cursor-ring");
    if (ring && lazy.x !== -999) {
      lazy.x += (pointer.x - lazy.x) * LAG;
      lazy.y += (pointer.y - lazy.y) * LAG;
      var vx = lazy.x - prev.x, vy = lazy.y - prev.y;
      prev.x = lazy.x; prev.y = lazy.y;

      var moved = Math.sqrt(vx * vx + vy * vy);
      speed += (moved - speed) * 0.25;                  // smooth the speed
      if (moved > 0.5) angle = Math.atan2(vy, vx) * 180 / Math.PI;
      var target = Math.min(speed * STRETCH, MAX_STRETCH);
      stretch += (target - stretch) * 0.2;

      var sx = 1 + stretch;
      var sy = 1 - stretch * SQUEEZE;
      ring.style.rotate = angle.toFixed(1) + "deg";
      ring.style.scale = sx.toFixed(3) + " " + sy.toFixed(3);
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
