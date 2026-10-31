/*
 * Soft, very slow floating movement of the 3D logo on the home page.
 * It moves a wrapper group around the logo (set up in app.js), so it never
 * fights with the logo's own animation. Change the numbers below to adjust.
 */
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  var SPEED = 0.00028;     // lower = slower (about 22 seconds per up-and-down cycle)
  var HEIGHT = 0.11;       // how far up and down the logo moves (scene units)
  var SIDE = 0.05;         // how far it drifts left and right
  var TILT = 0.025;        // a very small rocking angle (radians)

  function frame(now) {
    var wrap = window.EDDINO_LOGO_WRAP;
    if (wrap) {
      wrap.position.y = Math.sin(now * SPEED) * HEIGHT;
      wrap.position.x = Math.sin(now * SPEED * 0.7 + 1.3) * SIDE;
      wrap.rotation.z = Math.sin(now * SPEED * 0.9 + 0.4) * TILT;
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
