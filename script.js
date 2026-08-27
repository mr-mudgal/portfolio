(function () {
  "use strict";

  var header = document.querySelector("[data-header]");
  var menuToggle = document.querySelector("[data-menu-toggle]");
  var navigation = document.querySelector("[data-navigation]");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".site-nav a"));
  var revealItems = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
  var year = document.querySelector("[data-year]");
  var themeToggle = document.querySelector("[data-theme-toggle]");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", String(theme === "light"));
      themeToggle.setAttribute("aria-label", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
    }
  }

  var savedTheme = null;
  try {
    savedTheme = window.localStorage.getItem("rishabh-portfolio-theme");
  } catch (error) {
    savedTheme = null;
  }
  applyTheme(savedTheme === "light" ? "light" : "dark");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var nextTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(nextTheme);
      try {
        window.localStorage.setItem("rishabh-portfolio-theme", nextTheme);
      } catch (error) {
        return;
      }
    });
  }

  function closeMenu() {
    if (!menuToggle || !navigation) {
      return;
    }
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    navigation.classList.remove("is-open");
  }

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function () {
      var isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
      navigation.classList.toggle("is-open", !isOpen);
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  function updateHeader() {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    }
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  revealItems.forEach(function (item) {
    var delay = item.getAttribute("data-reveal-delay");
    if (delay) {
      item.style.setProperty("--reveal-delay", delay + "ms");
    }
  });

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" }
    );

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  }

  if ("IntersectionObserver" in window) {
    var sectionLinks = navLinks
      .map(function (link) {
        var target = link.getAttribute("href");
        if (!target || target.charAt(0) !== "#") {
          return null;
        }
        var section = document.querySelector(target);
        if (!section) {
          return null;
        }
        return { link: link, section: section };
      })
      .filter(function (entry) {
        return entry !== null;
      });

    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            sectionLinks.forEach(function (item) {
              item.link.classList.toggle("is-active", item.section === entry.target);
            });
          }
        });
      },
      { rootMargin: "-38% 0px -55% 0px", threshold: 0 }
    );

    sectionLinks.forEach(function (item) {
      sectionObserver.observe(item.section);
    });
  }

  if (!reducedMotion && window.matchMedia("(pointer: fine)").matches) {
    var cursorGlow = document.querySelector(".cursor-glow");
    var frame = null;
    var pointerX = 0;
    var pointerY = 0;

    document.body.classList.add("has-pointer");

    window.addEventListener(
      "pointermove",
      function (event) {
        pointerX = event.clientX;
        pointerY = event.clientY;

        if (frame) {
          return;
        }

        frame = window.requestAnimationFrame(function () {
          if (cursorGlow) {
            cursorGlow.style.transform = "translate(" + pointerX + "px, " + pointerY + "px) translate(-50%, -50%)";
          }
          frame = null;
        });
      },
      { passive: true }
    );

    Array.prototype.slice.call(document.querySelectorAll("[data-tilt]")).forEach(function (card) {
      card.addEventListener("pointermove", function (event) {
        var bounds = card.getBoundingClientRect();
        var x = (event.clientX - bounds.left) / bounds.width;
        var y = (event.clientY - bounds.top) / bounds.height;
        var rotateY = (x - 0.5) * 4;
        var rotateX = (0.5 - y) * 4;
        card.style.transform = "perspective(900px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translateY(-4px)";
      });

      card.addEventListener("pointerleave", function () {
        card.style.transform = "";
      });
    });
  }
})();