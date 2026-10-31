/*
 * EDDINO CREATIVE LAB - CONTACT FORM (sends to Formspree)
 * --------------------------------------------------------
 * The site engine (app.js) draws the contact form, but its own submit handler
 * only shows a fake "thank you". This script runs first, stops that handler,
 * and sends the message to Formspree with fetch (AJAX): the visitor stays on
 * the page and sees the real result (sent, or an error).
 *
 * To change the destination: replace FORMSPREE_ENDPOINT with your own form URL.
 * Messages arrive in the inbox you set up on Formspree.
 */
(function () {
  "use strict";

  var FORMSPREE_ENDPOINT = "https://formspree.io/f/xkjjvdwp";

  function lang() {
    return document.documentElement.lang === "fr" ? "fr" : "en";
  }

  // Reads a text from content.js, e.g. T("contact.sent")
  function T(path) {
    var all = window.EDDINO_CONTENT || {};
    var get = function (obj) {
      return path.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, obj);
    };
    var value = get(all[lang()]);
    if (value === undefined) value = get(all.en);
    return value === undefined ? "" : value;
  }

  function track(name, params) {
    if (typeof window.eddinoTrack === "function") window.eddinoTrack(name, params);
  }

  // Only the contact form has these three fields
  function isContactForm(form) {
    return form instanceof HTMLFormElement &&
      !!form.querySelector("textarea[name='message']") &&
      !!form.querySelector("input[name='email']") &&
      !!form.querySelector("select[name='service']");
  }

  function setNote(form, text, isError) {
    var note = form.querySelector(".form-note");
    if (!note) return;
    note.textContent = text;
    note.classList.toggle("is-error", !!isError);
  }

  function setButton(form, text, disabled) {
    var label = form.querySelector(".btn-label");
    var button = form.querySelector("button[type='submit']");
    if (label) label.textContent = text;
    if (button) button.disabled = !!disabled;
  }

  // Capture phase on document: runs before the form's own listener in app.js
  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (!isContactForm(form)) return;

    event.preventDefault();
    event.stopImmediatePropagation();
    if (form.dataset.sending === "1") return;

    // Check the required fields (same rule as before)
    var missing = Array.from(form.querySelectorAll("[required]")).find(function (field) {
      return !field.value.trim() || (field.type === "email" && !field.checkValidity());
    });
    if (missing) {
      missing.focus();
      setNote(form, T("contact.invalid"), true);
      return;
    }

    var data = new FormData(form);
    var email = String(data.get("email") || "").trim();
    var service = String(data.get("service") || "");

    // Extra fields Formspree understands: reply-to and subject line
    data.append("_replyto", email);
    data.append("_subject", "Eddino Creative Lab contact: " + service);

    form.dataset.sending = "1";
    setButton(form, T("contact.sending"), true);
    setNote(form, "", false);

    fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: data
    })
      .then(function (response) {
        if (response.ok) return;
        throw new Error("Formspree answered " + response.status);
      })
      .then(function () {
        form.reset();
        setButton(form, T("contact.sent"), false);
        setNote(form, T("contact.reply").replace("{email}", email), false);
        track("generate_lead", { form_name: "contact", service: service });
        setTimeout(function () { setButton(form, T("contact.send"), false); }, 6000);
      })
      .catch(function (error) {
        console.error("Contact form was not sent:", error);
        setButton(form, T("contact.send"), false);
        setNote(form, T("contact.error"), true);
      })
      .then(function () {
        delete form.dataset.sending;
      });
  }, true);
})();
