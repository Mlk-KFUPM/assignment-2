(function () {
  // Year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Greeting by time of day
  const h = new Date().getHours();
  const greeting = document.getElementById("greeting");
  if (greeting) {
    const msg =
      h < 12 ? "Good morning." : h < 18 ? "Good afternoon." : "Good evening.";
    greeting.textContent = msg;
  }

  // Theme toggle (persist to localStorage)
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("theme");
  if (saved === "light") root.classList.add("light");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      root.classList.toggle("light");
      localStorage.setItem(
        "theme",
        root.classList.contains("light") ? "light" : "dark"
      );
    });
  }

  // Mobile nav
  const navToggle = document.getElementById("navToggle");
  const nav = document.querySelector(".nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      const el = id && document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", id);
    });
  });

  // Contact form validation (client-side only)
  const form = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");
  if (form) {
    form.addEventListener("submit", (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
        return;
      }
      e.preventDefault();
      if (formNote) {
        formNote.hidden = false;
        form.reset();
        setTimeout(() => (formNote.hidden = true), 1600);
      }
    });
  }
})();
