/*
 * EDDINO CREATIVE LAB - GOOGLE ANALYTICS 4 (readable, safe to edit)
 * -----------------------------------------------------------------
 * Does nothing until a Measurement ID is pasted in config.js
 * (analytics.measurementId, starts with "G-").
 *
 * Tracks:
 *   - page views, including each menu page (the site uses #/about style links)
 *   - clicks on the email, WhatsApp and social links
 *   - contact form messages sent (event "generate_lead")
 */
(function () {
  "use strict";

  var cfg = (window.EDDINO_CONFIG && window.EDDINO_CONFIG.analytics) || {};
  var ID = String(cfg.measurementId || "").trim();

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

  // Used by other scripts: eddinoTrack("event_name", { key: "value" })
  window.eddinoTrack = function (name, params) {
    try {
      if (ID) window.gtag("event", name, params || {});
    } catch (err) { /* tracking must never break the site */ }
  };

  if (!/^G-[A-Z0-9]+$/i.test(ID)) return; // no valid ID: stay off

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(ID);
  document.head.appendChild(script);

  window.gtag("js", new Date());
  // We send page views ourselves, because the site changes page without reloading
  window.gtag("config", ID, { send_page_view: false });

  function pageView() {
    var route = (location.hash || "#/").replace(/^#/, "") || "/";
    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: location.href,
      page_path: route
    });
  }

  // First visit: wait until the site has set the page title
  window.addEventListener("load", function () { setTimeout(pageView, 300); });
  // Menu clicks: the site sets the new title right away, so read it a moment later
  window.addEventListener("hashchange", function () { setTimeout(pageView, 50); });

  document.addEventListener("click", function (event) {
    var link = event.target && event.target.closest ? event.target.closest("a") : null;
    if (!link) return;
    var href = link.getAttribute("href") || "";
    var where = link.closest("footer") ? "footer" : "page";

    if (href.indexOf("mailto:") === 0) {
      window.eddinoTrack("contact_email_click", { location: where });
    } else if (href.indexOf("https://wa.me/") === 0) {
      window.eddinoTrack("whatsapp_click", { location: where });
    } else if (link.hasAttribute("data-social")) {
      window.eddinoTrack("social_click", { network: link.getAttribute("data-social") });
    }
  });
})();
