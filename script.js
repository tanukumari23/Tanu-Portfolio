/* ===========================================================
   Tanu Kumari — Portfolio JS
   - Lucide icons
   - Sticky navbar shadow on scroll
   - Mobile menu toggle
   - Scroll reveal animations
   - Contact form (opens visitor's email client via mailto:)
   - Footer year
   =========================================================== */

(function () {
  // ---- Config: edit your email here if it ever changes ----
  const RECIPIENT_EMAIL = "tanu.kumari.2308@gmail.com";

  // ---- Render Lucide icons ----
  function renderIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    } else {
      // Lucide script not loaded yet — try again shortly
      setTimeout(renderIcons, 50);
    }
  }

  // ---- Sticky navbar shadow on scroll ----
  function initNavbar() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;
    const onScroll = () => {
      if (window.scrollY > 20) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ---- Mobile menu toggle ----
  function initMobileMenu() {
    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("mobileMenu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
      const icon = menu.classList.contains("open") ? "x" : "menu";
      toggle.innerHTML = `<i data-lucide="${icon}"></i>`;
      renderIcons();
    });

    // Close menu when clicking a link
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.innerHTML = `<i data-lucide="menu"></i>`;
        renderIcons();
      });
    });
  }

  // ---- Scroll reveal ----
  function initScrollReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
  }

  // ---- Toast helper ----
  function showToast(message) {
    let toast = document.getElementById("toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    requestAnimationFrame(() => toast.classList.add("show"));
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("show"), 3500);
  }

  // ---- Contact form -> opens visitor's email client ----
  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    const submitText = document.getElementById("submitText");

    // form.addEventListener("submit", (e) => {
    //   e.preventDefault();
    //   const data = new FormData(form);
    //   const name = String(data.get("name") || "").trim();
    //   const email = String(data.get("email") || "").trim();
    //   const subject = String(data.get("subject") || "").trim();
    //   const message = String(data.get("message") || "").trim();

    //   if (!name || !email || !subject || !message) {
    //     showToast("Please fill in all fields.");
    //     return;
    //   }

    //   // const mailSubject = subject || `New message from ${name}`;
    //   // const mailBody = [
    //   //   `Name: ${name}`,
    //   //   `Email: ${email}`,
    //   //   "",
    //   //   "Message:",
    //   //   message,
    //   // ].join("\n");

    //   // const mailto =
    //   //   `mailto:${RECIPIENT_EMAIL}` +
    //   //   `?subject=${encodeURIComponent(mailSubject)}` +
    //   //   `&body=${encodeURIComponent(mailBody)}`;

    //   // if (submitText) submitText.textContent = "Opening...";
    //   // window.location.href = mailto;

    //   // setTimeout(() => {
    //   //   if (submitText) submitText.textContent = "Send Message";
    //   //   showToast("Opening your email app — just hit send to deliver.");
    //   //   form.reset();
    //   // }, 500);
    // });


    form.addEventListener("submit", (e) => {
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const number = String(data.get("number") || "").trim();
  const subject = String(data.get("subject") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!name || !number || !subject || !message) {
    e.preventDefault(); // only block if invalid
    showToast("Please fill in all fields.");
    return;
  }
  form.reset();
});
  }

  // ---- Footer year ----
  function initYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  // ---- Init ----
  document.addEventListener("DOMContentLoaded", () => {
    renderIcons();
    initNavbar();
    initMobileMenu();
    initScrollReveal();
    initContactForm();
    initYear();
  });
})();
