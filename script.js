(function () {
  "use strict";

  var header = document.querySelector("[data-header]");
  var menuToggle = document.querySelector("[data-menu-toggle]");
  var navigation = document.querySelector("[data-navigation]");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".site-nav a"));
  var revealItems = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
  var yearElements = Array.prototype.slice.call(document.querySelectorAll("[data-year]"));
  var themeToggleFloats = Array.prototype.slice.call(document.querySelectorAll("[data-theme-toggle]"));
  var backToTopBtn = document.querySelector("[data-back-to-top]");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Set current year
  yearElements.forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // Theme Management
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    themeToggleFloats.forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(theme === "light"));
      btn.setAttribute("aria-label", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
    });
  }

  var savedTheme = null;
  try {
    savedTheme = window.localStorage.getItem("rishabh-portfolio-theme");
  } catch (error) {
    savedTheme = null;
  }
  applyTheme(savedTheme === "dark" ? "dark" : "light");

  themeToggleFloats.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var nextTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(nextTheme);
      try {
        window.localStorage.setItem("rishabh-portfolio-theme", nextTheme);
      } catch (error) {
        return;
      }
    });
  });

  // Mobile Menu
  function closeMenu() {
    if (!menuToggle || !navigation) return;
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
      if (event.key === "Escape") closeMenu();
    });
  }

  // Header & Floating Controls Scroll State
  function updateScrollState() {
    var scrollY = window.scrollY || window.pageYOffset;
    if (header) {
      header.classList.toggle("is-scrolled", scrollY > 24);
    }
    if (backToTopBtn) {
      backToTopBtn.classList.toggle("is-visible", scrollY > 220);
    }

    var scrollBottom = document.documentElement.scrollHeight - (scrollY + window.innerHeight);
    var bottomOffset = scrollBottom < 80 ? (80 - scrollBottom) + 32 : 32;

    themeToggleFloats.forEach(function (el) {
      el.style.bottom = (bottomOffset / 16).toFixed(2) + "rem";
    });
    if (backToTopBtn) {
      backToTopBtn.style.bottom = (bottomOffset / 16).toFixed(2) + "rem";
    }
  }

  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Reveal Animations on Scroll
  var revealObserver = null;
  if (!reducedMotion && ("IntersectionObserver" in window)) {
    revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -2% 0px" }
    );
  }

  function initDynamicReveals() {
    var items = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]:not(.is-visible)"));
    items.forEach(function (item) {
      var delay = item.getAttribute("data-reveal-delay");
      if (delay) {
        item.style.setProperty("--reveal-delay", delay + "ms");
      }
      if (reducedMotion || !revealObserver) {
        item.classList.add("is-visible");
      } else {
        revealObserver.observe(item);
      }
    });
  }

  initDynamicReveals();

  // =========================================================================
  // ULTRA-DENSE GENERATIVE CYBERNETIC MATRIX & TOPOLOGICAL FLOW ENGINE
  // (Interactive Perspective Grid, Holographic Hexagons, PCB Circuit Traces,
  //  TouchDesigner Fluid Waves, Shockwave Energy Pulses, & Data Packets)
  // =========================================================================
  var canvas = document.getElementById("ambient-canvas");
  if (canvas && !reducedMotion) {
    var ctx = canvas.getContext("2d");
    var width = 0;
    var height = 0;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var mouse = { x: -9999, y: -9999, active: false, targetX: -9999, targetY: -9999 };
    var particles = [];
    var particleCount = 85;
    var sparks = [];
    var sparkCount = 45;
    var packets = [];
    var shockwaves = [];
    var startTime = Date.now();

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });

    window.addEventListener("pointermove", function (e) {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      if (!mouse.active) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
      mouse.active = true;
    }, { passive: true });

    window.addEventListener("pointerleave", function () {
      mouse.active = false;
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    });

    // Interactive Shockwave Energy Pulse on Click
    window.addEventListener("pointerdown", function (e) {
      shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 10,
        maxRadius: Math.max(width, height) * 0.45,
        alpha: 0.85,
        speed: 14
      });
    }, { passive: true });

    // Initialize Rich Nodes (Dots, Rotating Hexagons, Microchips)
    for (var p = 0; p < particleCount; p++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.75,
        vy: (Math.random() - 0.5) * 0.75,
        baseRadius: Math.random() * 2.5 + 2,
        radius: 3,
        pulse: Math.random() * Math.PI * 2,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.03,
        type: Math.random() < 0.25 ? "hexagon" : (Math.random() < 0.45 ? "chip" : "node"),
        colorType: Math.floor(Math.random() * 4) // 0: cyan, 1: violet, 2: pink, 3: lime
      });
    }

    // Initialize Ambient Floating Quantum Sparks
    for (var s = 0; s < sparkCount; s++) {
      sparks.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vy: -(Math.random() * 0.45 + 0.2),
        vx: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.6 + 0.8,
        alpha: Math.random() * 0.7 + 0.2,
        phase: Math.random() * Math.PI * 2
      });
    }

    // Helper: Draw Hexagon
    function drawHexagon(context, x, y, size, angle) {
      context.beginPath();
      for (var side = 0; side < 6; side++) {
        var a = angle + (side * Math.PI) / 3;
        var hx = x + size * Math.cos(a);
        var hy = y + size * Math.sin(a);
        if (side === 0) context.moveTo(hx, hy);
        else context.lineTo(hx, hy);
      }
      context.closePath();
    }

    function renderAmbientScene() {
      var isLight = document.documentElement.getAttribute("data-theme") === "light";
      var time = (Date.now() - startTime) * 0.001;

      // Smooth mouse damping
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.15;
        mouse.y += (mouse.targetY - mouse.y) * 0.15;
      } else {
        mouse.x = -9999;
        mouse.y = -9999;
      }

      ctx.clearRect(0, 0, width, height);

      // Dynamic Palette
      var colCyan = isLight ? "rgba(0, 119, 153, " : "rgba(107, 231, 255, ";
      var colViolet = isLight ? "rgba(68, 73, 184, " : "rgba(180, 119, 255, ";
      var colPink = isLight ? "rgba(168, 28, 106, " : "rgba(255, 134, 200, ";
      var colLime = isLight ? "rgba(60, 102, 7, " : "rgba(199, 255, 123, ";
      var colLine = isLight ? "rgba(68, 73, 184, " : "rgba(107, 231, 255, ";

      // ==========================================
      // LAYER 1: DEFORMABLE PERSPECTIVE CYBER MATRIX FLOOR GRID
      // ==========================================
      var gridSpacingX = 80;
      var gridSpacingY = 70;
      ctx.lineWidth = 0.8;
      ctx.strokeStyle = isLight ? "rgba(68, 73, 184, 0.06)" : "rgba(107, 231, 255, 0.07)";

      // Vertical Grid Lines with Mouse Gravity Well Warping
      for (var gx = 0; gx <= width + gridSpacingX; gx += gridSpacingX) {
        ctx.beginPath();
        for (var gy = 0; gy <= height; gy += 25) {
          var px = gx;
          var py = gy;

          if (mouse.active) {
            var gdx = mouse.x - px;
            var gdy = mouse.y - py;
            var gDist = Math.sqrt(gdx * gdx + gdy * gdy);
            if (gDist < 220 && gDist > 1) {
              var warpForce = (1 - gDist / 220) * 22;
              px += (gdx / gDist) * warpForce;
              py += (gdy / gDist) * warpForce;
            }
          }

          if (gy === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // Horizontal Grid Lines
      for (var hy = 0; hy <= height + gridSpacingY; hy += gridSpacingY) {
        ctx.beginPath();
        for (var hx = 0; hx <= width; hx += 25) {
          var px2 = hx;
          var py2 = hy;

          if (mouse.active) {
            var hdx = mouse.x - px2;
            var hdy = mouse.y - py2;
            var hDist = Math.sqrt(hdx * hdx + hdy * hdy);
            if (hDist < 220 && hDist > 1) {
              var warpForce2 = (1 - hDist / 220) * 22;
              px2 += (hdx / hDist) * warpForce2;
              py2 += (hdy / hDist) * warpForce2;
            }
          }

          if (hx === 0) ctx.moveTo(px2, py2);
          else ctx.lineTo(px2, py2);
        }
        ctx.stroke();
      }

      // ==========================================
      // LAYER 2: 4-TIER TOUCHDESIGNER FLUID HARMONIC RIBBONS
      // ==========================================
      ctx.lineWidth = 2.2;
      for (var w = 0; w < 4; w++) {
        ctx.beginPath();
        var waveGrad = ctx.createLinearGradient(0, 0, width, 0);
        if (w === 0) {
          waveGrad.addColorStop(0, colCyan + (isLight ? "0.28)" : "0.45)"));
          waveGrad.addColorStop(0.5, colViolet + (isLight ? "0.35)" : "0.55)"));
          waveGrad.addColorStop(1, colPink + (isLight ? "0.25)" : "0.45)"));
        } else if (w === 1) {
          waveGrad.addColorStop(0, colViolet + (isLight ? "0.22)" : "0.4)"));
          waveGrad.addColorStop(0.5, colPink + (isLight ? "0.3)" : "0.5)"));
          waveGrad.addColorStop(1, colLime + (isLight ? "0.22)" : "0.4)"));
        } else if (w === 2) {
          waveGrad.addColorStop(0, colPink + (isLight ? "0.2)" : "0.35)"));
          waveGrad.addColorStop(0.5, colCyan + (isLight ? "0.28)" : "0.45)"));
          waveGrad.addColorStop(1, colViolet + (isLight ? "0.22)" : "0.38)"));
        } else {
          waveGrad.addColorStop(0, colLime + (isLight ? "0.15)" : "0.3)"));
          waveGrad.addColorStop(0.5, colViolet + (isLight ? "0.22)" : "0.4)"));
          waveGrad.addColorStop(1, colCyan + (isLight ? "0.2)" : "0.35)"));
        }
        ctx.strokeStyle = waveGrad;

        var baseHeight = height * (0.2 + w * 0.22);
        var freq1 = 0.0018 + w * 0.0006;
        var freq2 = 0.0035 + w * 0.0004;
        var amp1 = 55 + w * 18;
        var amp2 = 25 + w * 12;
        var speed = time * (0.65 + w * 0.28);

        for (var x = 0; x <= width; x += 12) {
          var y = baseHeight + Math.sin(x * freq1 + speed) * amp1 + Math.cos(x * freq2 - speed * 0.7) * amp2;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // ==========================================
      // LAYER 3: FLOATING QUANTUM SPARKS
      // ==========================================
      for (var si = 0; si < sparks.length; si++) {
        var sp = sparks[si];
        sp.y += sp.vy;
        sp.x += sp.vx + Math.sin(time * 2 + sp.phase) * 0.4;
        if (sp.y < 0) { sp.y = height; sp.x = Math.random() * width; }
        if (sp.x < 0) sp.x = width;
        if (sp.x > width) sp.x = 0;

        var sparkGlow = sp.alpha * (0.7 + Math.sin(time * 3 + sp.phase) * 0.3);
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
        ctx.fillStyle = (si % 2 === 0 ? colCyan : colViolet) + sparkGlow + ")";
        ctx.fill();
      }

      // ==========================================
      // LAYER 4: INTERACTIVE SHOCKWAVE EXPANSION
      // ==========================================
      for (var sw = shockwaves.length - 1; sw >= 0; sw--) {
        var wave = shockwaves[sw];
        wave.radius += wave.speed;
        wave.alpha = Math.max(0, 1 - wave.radius / wave.maxRadius);

        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.strokeStyle = colCyan + (wave.alpha * 0.75) + ")";
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(wave.x, wave.y, Math.max(0, wave.radius - 18), 0, Math.PI * 2);
        ctx.strokeStyle = colViolet + (wave.alpha * 0.5) + ")";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (wave.radius >= wave.maxRadius || wave.alpha <= 0.01) {
          shockwaves.splice(sw, 1);
        }
      }

      // ==========================================
      // LAYER 5: DENSE NODES, ROTATING HEXAGONS & CIRCUIT TRACES
      // ==========================================
      var maxDist = 160;
      var mouseDistConnect = 220;

      for (var i = 0; i < particles.length; i++) {
        var pi = particles[i];

        // Movement & screen wrapping
        pi.x += pi.vx;
        pi.y += pi.vy;
        pi.rot += pi.rotSpeed;

        if (pi.x < 0) pi.x = width;
        if (pi.x > width) pi.x = 0;
        if (pi.y < 0) pi.y = height;
        if (pi.y > height) pi.y = 0;

        // Shockwave interaction
        for (var sw2 = 0; sw2 < shockwaves.length; sw2++) {
          var wave2 = shockwaves[sw2];
          var swdx = pi.x - wave2.x;
          var swdy = pi.y - wave2.y;
          var swDist = Math.sqrt(swdx * swdx + swdy * swdy);
          if (Math.abs(swDist - wave2.radius) < 30) {
            var push = (1 - Math.abs(swDist - wave2.radius) / 30) * 4;
            pi.x += (swdx / (swDist || 1)) * push;
            pi.y += (swdy / (swDist || 1)) * push;
          }
        }

        // Mouse Magnetism & Connection Beams
        if (mouse.active) {
          var mdx = mouse.x - pi.x;
          var mdy = mouse.y - pi.y;
          var mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < mouseDistConnect && mDist > 1) {
            var force = (mouseDistConnect - mDist) / mouseDistConnect;
            pi.x -= (mdx / mDist) * force * 2.8;
            pi.y -= (mdy / mDist) * force * 2.8;

            // Connect Holographic Laser beam to mouse
            ctx.beginPath();
            ctx.strokeStyle = colCyan + (0.7 * force) + ")";
            ctx.lineWidth = 2 * force;
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();

            // Luminous laser spark on cursor
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 4 * force, 0, Math.PI * 2);
            ctx.fillStyle = "#6be7ff";
            ctx.fill();
          }
        }

        // Circuit Connections & PCB Right-Angle Bus Routing
        for (var j = i + 1; j < particles.length; j++) {
          var pj = particles[j];
          var dx = pi.x - pj.x;
          var dy = pi.y - pj.y;
          var dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            var alpha = (1 - dist / maxDist) * (isLight ? 0.45 : 0.65);

            // Alternate between straight direct lasers and PCB Right-Angle Traces
            if ((i + j) % 3 === 0) {
              // PCB 90-degree trace with 45-degree chamfer
              var midX = pi.x + (pj.x - pi.x) * 0.5;
              ctx.beginPath();
              ctx.strokeStyle = colViolet + alpha + ")";
              ctx.lineWidth = (1 - dist / maxDist) * 1.8;
              ctx.moveTo(pi.x, pi.y);
              ctx.lineTo(midX, pi.y);
              ctx.lineTo(midX, pj.y);
              ctx.lineTo(pj.x, pj.y);
              ctx.stroke();

              // Circuit junction solder point
              ctx.beginPath();
              ctx.arc(midX, pi.y, 1.8, 0, Math.PI * 2);
              ctx.fillStyle = colCyan + alpha + ")";
              ctx.fill();
            } else {
              // Direct neural laser
              ctx.beginPath();
              ctx.strokeStyle = colLine + alpha + ")";
              ctx.lineWidth = (1 - dist / maxDist) * 1.5;
              ctx.moveTo(pi.x, pi.y);
              ctx.lineTo(pj.x, pj.y);
              ctx.stroke();
            }

            // High-density data pulse packet generation
            if (Math.random() < 0.0028 && packets.length < 40) {
              packets.push({
                x1: pi.x, y1: pi.y,
                x2: pj.x, y2: pj.y,
                progress: 0,
                speed: 0.02 + Math.random() * 0.025,
                color: pi.colorType === 0 ? "#6be7ff" : (pi.colorType === 1 ? "#b477ff" : (pi.colorType === 2 ? "#ff86c8" : "#c7ff7b"))
              });
            }
          }
        }

        // Color determination
        var pAlpha = 0.75 + Math.sin(time * 2.5 + pi.pulse) * 0.25;
        var pColor = pi.colorType === 0 ? colCyan : (pi.colorType === 1 ? colViolet : (pi.colorType === 2 ? colPink : colLime));

        // RENDER NODE BY TYPE
        if (pi.type === "hexagon") {
          // Rotating Holographic Hexagon with Crosshair Reticle
          var hexSize = pi.baseRadius * 3.8;
          ctx.save();
          ctx.translate(pi.x, pi.y);
          ctx.rotate(pi.rot);

          // Outer Hexagon
          drawHexagon(ctx, 0, 0, hexSize, 0);
          ctx.strokeStyle = pColor + pAlpha + ")";
          ctx.lineWidth = 1.6;
          ctx.stroke();

          // Inner pulsing core
          ctx.beginPath();
          ctx.arc(0, 0, hexSize * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = pColor + (pAlpha * 0.6) + ")";
          ctx.fill();

          // Crosshair lines
          ctx.beginPath();
          ctx.moveTo(-hexSize * 0.8, 0); ctx.lineTo(hexSize * 0.8, 0);
          ctx.moveTo(0, -hexSize * 0.8); ctx.lineTo(0, hexSize * 0.8);
          ctx.strokeStyle = pColor + (pAlpha * 0.45) + ")";
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.restore();

        } else if (pi.type === "chip") {
          // Holographic Microchip Node
          var chipSize = pi.baseRadius * 4;
          ctx.save();
          ctx.translate(pi.x, pi.y);
          ctx.rotate(pi.rot * 0.5);

          ctx.strokeStyle = pColor + pAlpha + ")";
          ctx.lineWidth = 1.4;
          ctx.strokeRect(-chipSize / 2, -chipSize / 2, chipSize, chipSize);

          ctx.fillStyle = pColor + (pAlpha * 0.5) + ")";
          ctx.fillRect(-chipSize / 4, -chipSize / 4, chipSize / 2, chipSize / 2);

          // Microchip corner solder pins
          ctx.fillStyle = colCyan + "0.9)";
          ctx.fillRect(-chipSize / 2 - 2, -chipSize / 4, 2, 2);
          ctx.fillRect(chipSize / 2, -chipSize / 4, 2, 2);
          ctx.fillRect(-chipSize / 4, -chipSize / 2 - 2, 2, 2);
          ctx.fillRect(-chipSize / 4, chipSize / 2, 2, 2);
          ctx.restore();

        } else {
          // Circular Quantum Node with Specular Glow Ring
          ctx.beginPath();
          ctx.arc(pi.x, pi.y, pi.baseRadius, 0, Math.PI * 2);
          ctx.fillStyle = pColor + pAlpha + ")";
          ctx.fill();

          ctx.beginPath();
          ctx.arc(pi.x, pi.y, pi.baseRadius + 4, 0, Math.PI * 2);
          ctx.strokeStyle = pColor + (pAlpha * 0.45) + ")";
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      // ==========================================
      // LAYER 6: DATA PACKET TRAFFIC WITH PHOTON TRAILS
      // ==========================================
      for (var k = packets.length - 1; k >= 0; k--) {
        var pkt = packets[k];
        pkt.progress += pkt.speed;

        var currX = pkt.x1 + (pkt.x2 - pkt.x1) * pkt.progress;
        var currY = pkt.y1 + (pkt.y2 - pkt.y1) * pkt.progress;
        var trailX = pkt.x1 + (pkt.x2 - pkt.x1) * Math.max(0, pkt.progress - 0.12);
        var trailY = pkt.y1 + (pkt.y2 - pkt.y1) * Math.max(0, pkt.progress - 0.12);

        // Photon glow trail
        ctx.beginPath();
        ctx.moveTo(trailX, trailY);
        ctx.lineTo(currX, currY);
        ctx.strokeStyle = pkt.color;
        ctx.lineWidth = 3.5;
        ctx.stroke();

        // Main packet head
        ctx.beginPath();
        ctx.arc(currX, currY, 3.8, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (pkt.progress >= 1) {
          packets.splice(k, 1);
        }
      }

      requestAnimationFrame(renderAmbientScene);
    }

    renderAmbientScene();
  }

  // Mouse Following Card Glow & 3D Tilt
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

        if (frame) return;

        frame = window.requestAnimationFrame(function () {
          if (cursorGlow) {
            cursorGlow.style.transform = "translate(" + pointerX + "px, " + pointerY + "px) translate(-50%, -50%)";
          }
          frame = null;
        });
      },
      { passive: true }
    );

    initTilt();
  }

  function initTilt() {
    var glowCards = Array.prototype.slice.call(document.querySelectorAll(".glass-card, [data-tilt]"));
    glowCards.forEach(function (card) {
      if (card._hasTiltBound) return;
      card._hasTiltBound = true;

      card.addEventListener("pointermove", function (event) {
        var bounds = card.getBoundingClientRect();
        var x = (event.clientX - bounds.left) / bounds.width;
        var y = (event.clientY - bounds.top) / bounds.height;

        card.style.setProperty("--glow-x", (x * 100).toFixed(1) + "%");
        card.style.setProperty("--glow-y", (y * 100).toFixed(1) + "%");
        card.style.setProperty("--glow-opacity", "0.9");

        if (card.hasAttribute("data-tilt")) {
          var rotateY = (x - 0.5) * 4;
          var rotateX = (0.5 - y) * 4;
          card.style.transform = "perspective(900px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translateY(-4px)";
        }
      });

      card.addEventListener("pointerleave", function () {
        card.style.setProperty("--glow-opacity", "0.45");
        if (card.hasAttribute("data-tilt")) {
          card.style.transform = "";
        }
      });
    });
  }

  // =========================================================================
  // DYNAMIC PROJECT & CERTIFICATE REGISTRIES
  // (Centralized from window.PORTFOLIO_PROJECTS and window.PORTFOLIO_CERTIFICATES)
  // =========================================================================
  var projectDatabase = window.PORTFOLIO_PROJECTS || {};
  var certDatabase = window.PORTFOLIO_CERTIFICATES || {};

  // Cache for asynchronously loaded .txt / .md description files
  var descriptionCache = {};

  function loadDescriptionText(filePath, fallbackText, callback) {
    if (!filePath) {
      callback(fallbackText || "");
      return;
    }
    if (descriptionCache[filePath]) {
      callback(descriptionCache[filePath]);
      return;
    }

    // Try fetching external .txt file (works on web servers, GitHub Pages, localhost)
    if (window.fetch && window.location.protocol !== "file:") {
      fetch(filePath)
        .then(function (response) {
          if (!response.ok) throw new Error("Network response error");
          return response.text();
        })
        .then(function (text) {
          descriptionCache[filePath] = text.trim();
          callback(text.trim());
        })
        .catch(function () {
          // Graceful fallback to inline description
          descriptionCache[filePath] = fallbackText || "";
          callback(fallbackText || "");
        });
    } else {
      // Fallback for file:// protocol or offline
      descriptionCache[filePath] = fallbackText || "";
      callback(fallbackText || "");
    }
  }

  // Detect media type from filename or explicit property
  function detectMediaType(item) {
    if (item.type) return item.type.toLowerCase();
    if (item.isPdf) return "pdf";
    var file = item.file || "";
    var ext = file.split(".").pop().toLowerCase();
    if (ext === "pdf") return "pdf";
    if (["mp4", "webm", "ogg", "mov"].indexOf(ext) !== -1) return "video";
    if (["svg", "png", "jpg", "jpeg", "webp", "gif"].indexOf(ext) !== -1) return "image";
    if (item.svg) return "svg";
    return "image";
  }

  // Render a slide with appropriate HTML element based on media type
  function renderSlideElement(item, isMultiple) {
    var type = detectMediaType(item);
    var fileSrc = item.file || "";
    var timerPill = isMultiple ? '<div class="carousel__timer-pill"><i></i> Auto-playing (2s)</div>' : "";
    var badgeLabel = "";
    var mediaHtml = "";

    if (type === "video") {
      badgeLabel = '<div class="carousel__media-badge">▶ Video Demo</div>';
      mediaHtml =
        '<video class="carousel__video" controls playsinline preload="metadata">' +
        '<source src="' + fileSrc + '" type="video/mp4">' +
        'Your browser does not support HTML5 video.' +
        '</video>';
    } else if (type === "youtube") {
      badgeLabel = '<div class="carousel__media-badge">▶ Video</div>';
      mediaHtml =
        '<iframe class="carousel__video" src="' + fileSrc + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    } else if (type === "pdf") {
      badgeLabel = '<div class="carousel__media-badge">📄 PDF Document</div>';
      mediaHtml =
        '<iframe class="carousel__pdf" src="' + fileSrc + '#toolbar=0&view=FitH" type="application/pdf" style="width: 100%; height: 100%; border: none;">' +
        '<p>PDF Preview. <a href="' + fileSrc + '" target="_blank">Download PDF</a></p>' +
        '</iframe>';
    } else if (type === "svg" && item.svg) {
      badgeLabel = '<div class="carousel__media-badge">✦ Architecture</div>';
      mediaHtml = '<div class="carousel__svg" style="width: 100%; height: 100%;">' + item.svg + '</div>';
    } else {
      badgeLabel = '<div class="carousel__media-badge">✦ Verified Asset</div>';
      if (fileSrc) {
        mediaHtml =
          '<a href="' + fileSrc + '" target="_blank" rel="noopener noreferrer" class="carousel__img-wrapper" title="Click to view full image in new tab">' +
          '<img class="carousel__img" src="' + fileSrc + '" alt="' + (item.label || item.title || 'Media') + '" loading="lazy" />' +
          '</a>';
      } else {
        mediaHtml = '<img class="carousel__img" src="" alt="' + (item.label || item.title || 'Media') + '" loading="lazy" />';
      }
    }

    var openLinkHtml = fileSrc ? (
      '<a href="' + fileSrc + '" target="_blank" rel="noopener noreferrer" class="carousel__open-link" title="Open full resolution media in new tab">' +
      '<span>Open in New Tab</span> ↗' +
      '</a>'
    ) : "";

    return (
      '<div class="carousel__slide" data-media-type="' + type + '" data-file="' + fileSrc + '">' +
      mediaHtml +
      badgeLabel +
      timerPill +
      openLinkHtml +
      '</div>'
    );
  }

  // ==========================================
  // MODAL DOM ELEMENTS & STATE
  // ==========================================
  var modal = document.querySelector("[data-project-modal]");
  var modalBackdrop = document.querySelector("[data-modal-backdrop]");
  var modalClose = document.querySelector("[data-modal-close]");
  var modalBody = document.querySelector("[data-modal-body]");
  var slideTimer = null;
  var currentSlideIndex = 0;
  var totalSlides = 0;
  var isHoveringCarousel = false;

  function pauseAllSlideVideos() {
    if (!modalBody) return;
    var videos = modalBody.querySelectorAll("video");
    videos.forEach(function (v) {
      try { v.pause(); } catch (e) {}
    });
  }

  function closeProjectModal() {
    if (!modal) return;
    pauseAllSlideVideos();
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
    clearInterval(slideTimer);
  }

  // ==========================================
  // PROJECT MODAL
  // ==========================================
  function openProjectModal(projectId) {
    var data = projectDatabase[projectId];
    if (!data || !modal || !modalBody) return;

    var slidesList = data.media || data.slides || [];
    currentSlideIndex = 0;
    totalSlides = slidesList.length;

    var isMultiple = totalSlides > 1;
    var slidesHtml = slidesList.map(function (item) {
      return renderSlideElement(item, isMultiple);
    }).join("");

    var dotsHtml = slidesList.map(function (_, idx) {
      return '<span class="carousel__dot' + (idx === 0 ? " is-active" : "") + '" data-dot="' + idx + '"></span>';
    }).join("");

    var highlightsHtml = (data.highlights || []).map(function (item) {
      return "<li>" + item + "</li>";
    }).join("");

    var roadmapHtml = (data.roadmap || []).map(function (item) {
      return (
        '<div class="roadmap-item">' +
        "<strong>" + item.phase + "</strong>" +
        "<p>" + item.desc + "</p>" +
        "</div>"
      );
    }).join("");

    var tagsHtml = (data.tags || []).map(function (tag) {
      return "<span>" + tag + "</span>";
    }).join("");

    var liveDemoBtn = data.liveUrl
      ? '<a href="' + data.liveUrl + '" target="_blank" rel="noreferrer" class="project-link" style="color: var(--lime);">' + (data.liveUrlText || 'Live Demo ↗') + '</a>'
      : '';

    var actionButtonsHtml = (data.liveUrl || data.github) ? (
      '<div style="margin: 1.2rem 0 1.6rem; display: flex; flex-wrap: wrap; gap: 0.8rem; align-items: center;">' +
      (data.liveUrl ? '<a href="' + data.liveUrl + '" target="_blank" rel="noreferrer" class="button button--primary" style="display: inline-flex; align-items: center; gap: 0.4rem;">' + (data.liveButtonText || 'Launch Live Website') + ' <span>↗</span></a>' : '') +
      (data.github ? '<a href="' + data.github + '" target="_blank" rel="noreferrer" class="button button--secondary" style="display: inline-flex; align-items: center; gap: 0.4rem;">View Source Code <span>↗</span></a>' : '') +
      '</div>'
    ) : '';

    var firstSlide = slidesList[0] || {};
    var firstTitle = firstSlide.title || data.title || "";
    var firstCaption = firstSlide.caption || "";
    var firstFile = firstSlide.file || "";

    var metaBarHtml =
      '<div class="carousel__meta-bar" data-carousel-meta-bar>' +
      '<div class="carousel__meta-text">' +
      '<strong class="carousel__meta-title" data-carousel-title>' + firstTitle + '</strong>' +
      (firstCaption ? '<p class="carousel__meta-caption" data-carousel-caption>' + firstCaption + '</p>' : '<p class="carousel__meta-caption" data-carousel-caption style="display:none;"></p>') +
      '</div>' +
      (firstFile ? (
        '<a href="' + firstFile + '" target="_blank" rel="noopener noreferrer" class="carousel__meta-open-btn" data-carousel-open-btn title="Open full resolution asset in new tab">' +
        '<span>Open in New Tab</span> ↗' +
        '</a>'
      ) : '') +
      '</div>';

    modalBody.innerHTML =
      '<div class="carousel" data-carousel>' +
      '<div class="carousel__track" data-carousel-track>' +
      slidesHtml +
      "</div>" +
      (isMultiple
        ? '<button class="carousel__btn carousel__btn--prev" data-carousel-prev aria-label="Previous Slide">‹</button>' +
          '<button class="carousel__btn carousel__btn--next" data-carousel-next aria-label="Next Slide">›</button>' +
          '<div class="carousel__indicators" data-carousel-dots>' +
          dotsHtml +
          "</div>"
        : "") +
      "</div>" +
      metaBarHtml +
      '<div class="project-modal__header">' +
      '<div class="project-card__meta"><span>' +
      data.meta +
      '</span><div style="display: flex; gap: 0.8rem; align-items: center;">' +
      (data.github ? '<a href="' + data.github + '" target="_blank" rel="noreferrer" class="project-link">View GitHub ↗</a>' : '') +
      liveDemoBtn +
      '</div></div>' +
      "<h2>" +
      data.title +
      "</h2>" +
      '<div class="project-card__tags">' +
      tagsHtml +
      "</div>" +
      "</div>" +
      '<p class="project-modal__desc" data-project-desc>' +
      (data.description || "") +
      "</p>" +
      actionButtonsHtml +
      (highlightsHtml ? (
        '<div class="focus-card" style="min-height: auto; padding: 1.5rem; margin-bottom: 1.5rem;">' +
        '<h4 style="margin: 0 0 0.8rem; font-size: 1rem; color: var(--cyan);">Engineering Highlights &amp; Architecture</h4>' +
        '<ul style="margin: 0; padding-left: 0; display: grid; gap: 0.6rem;">' +
        highlightsHtml +
        "</ul>" +
        "</div>"
      ) : '') +
      (roadmapHtml ? (
        '<div class="roadmap-box">' +
        '<h4><span>✦</span> Future Roadmap &amp; Planned Capabilities</h4>' +
        '<div class="roadmap-grid">' +
        roadmapHtml +
        "</div>" +
        "</div>"
      ) : '');

    // Asynchronously load external .txt description file if configured
    if (data.descriptionFile) {
      loadDescriptionText(data.descriptionFile, data.description, function (fullText) {
        var descEl = modalBody.querySelector("[data-project-desc]");
        if (descEl && fullText) {
          descEl.innerHTML = fullText.replace(/\n\n/g, "<br><br>");
        }
      });
    }

    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";

    initCarousel(slidesList);
  }

  // ==========================================
  // CERTIFICATE MODAL
  // ==========================================
  function openCertificateModal(certId) {
    var cert = certDatabase[certId];
    if (!cert || !modal || !modalBody) return;

    var items = cert.items || [];
    currentSlideIndex = 0;
    totalSlides = items.length;

    var isMultiple = totalSlides > 1;
    var slidesHtml = items.map(function (item) {
      return renderSlideElement(item, isMultiple);
    }).join("");

    var dotsHtml = items.map(function (_, idx) {
      return '<span class="carousel__dot' + (idx === 0 ? " is-active" : "") + '" data-dot="' + idx + '"></span>';
    }).join("");

    var tabsHtml = "";
    if (isMultiple) {
      tabsHtml =
        '<div class="cert-tab-nav">' +
        items.map(function (item, i) {
          return (
            '<button class="cert-tab-btn' +
            (i === 0 ? " is-active" : "") +
            '" type="button" data-cert-tab="' + i + '">' +
            (item.label || ("Credential " + (i + 1))) +
            "</button>"
          );
        }).join("") +
        "</div>";
    }

    var firstFile = (items[0] && items[0].file) ? items[0].file : "#";

    modalBody.innerHTML =
      tabsHtml +
      '<div class="carousel" data-carousel>' +
      '<div class="carousel__track" data-carousel-track>' +
      slidesHtml +
      "</div>" +
      (isMultiple
        ? '<button class="carousel__btn carousel__btn--prev" data-carousel-prev aria-label="Previous Slide">‹</button>' +
          '<button class="carousel__btn carousel__btn--next" data-carousel-next aria-label="Next Slide">›</button>' +
          '<div class="carousel__indicators" data-carousel-dots>' +
          dotsHtml +
          "</div>"
        : "") +
      "</div>" +
      '<div class="project-modal__header">' +
      '<div class="project-card__meta">' +
      '<span class="cert-card__issuer ' +
      (cert.issuerClass || '') +
      '">' +
      (cert.issuer || '') +
      "</span>" +
      '<span style="color: var(--lime); font-weight: 700; font-family: var(--mono);">Active &amp; Verified ✦</span>' +
      "</div>" +
      "<h2>" +
      cert.title +
      "</h2>" +
      "</div>" +
      '<p class="project-modal__desc" data-cert-desc>' +
      (cert.desc || "") +
      "</p>" +
      '<div style="margin-top: 1.5rem; display: flex; flex-wrap: wrap; gap: 1rem;">' +
      '<a id="cert-download-btn" href="' + firstFile + '" target="_blank" class="button button--primary" download>Download Credential <span>↓</span></a>' +
      '<a id="cert-open-btn" href="' + firstFile + '" target="_blank" class="button button--secondary">Open in New Tab <span>↗</span></a>' +
      "</div>";

    // Asynchronously load external .txt description file if configured
    if (cert.descriptionFile) {
      loadDescriptionText(cert.descriptionFile, cert.desc, function (fullText) {
        var descEl = modalBody.querySelector("[data-cert-desc]");
        if (descEl && fullText) {
          descEl.innerHTML = fullText.replace(/\n\n/g, "<br><br>");
        }
      });
    }

    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";

    // Carousel Navigation and Tab sync
    var track = modalBody.querySelector("[data-carousel-track]");
    var dots = modalBody.querySelectorAll("[data-dot]");
    var prevBtn = modalBody.querySelector("[data-carousel-prev]");
    var nextBtn = modalBody.querySelector("[data-carousel-next]");
    var carouselEl = modalBody.querySelector("[data-carousel]");
    var tabBtns = modalBody.querySelectorAll("[data-cert-tab]");
    var downloadBtn = modalBody.querySelector("#cert-download-btn");
    var openBtn = modalBody.querySelector("#cert-open-btn");

    function goToCertSlide(index) {
      pauseAllSlideVideos();
      currentSlideIndex = (index + totalSlides) % totalSlides;
      if (track) {
        track.style.transform = "translateX(-" + currentSlideIndex * 100 + "%)";
      }
      dots.forEach(function (dot, idx) {
        dot.classList.toggle("is-active", idx === currentSlideIndex);
      });
      tabBtns.forEach(function (btn, idx) {
        btn.classList.toggle("is-active", idx === currentSlideIndex);
      });
      var activeItem = items[currentSlideIndex];
      if (downloadBtn && activeItem && activeItem.file) {
        downloadBtn.setAttribute("href", activeItem.file);
      }
      if (openBtn && activeItem && activeItem.file) {
        openBtn.setAttribute("href", activeItem.file);
      }
    }

    if (isMultiple) {
      if (prevBtn) {
        prevBtn.addEventListener("click", function () {
          goToCertSlide(currentSlideIndex - 1);
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener("click", function () {
          goToCertSlide(currentSlideIndex + 1);
        });
      }
      dots.forEach(function (dot) {
        dot.addEventListener("click", function () {
          var idx = parseInt(dot.getAttribute("data-dot"), 10);
          goToCertSlide(idx);
        });
      });
      tabBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
          var idx = parseInt(btn.getAttribute("data-cert-tab"), 10);
          goToCertSlide(idx);
        });
      });

      if (carouselEl) {
        carouselEl.addEventListener("mouseenter", function () {
          isHoveringCarousel = true;
        });
        carouselEl.addEventListener("mouseleave", function () {
          isHoveringCarousel = false;
        });
      }

      clearInterval(slideTimer);
      slideTimer = setInterval(function () {
        if (!isHoveringCarousel) {
          goToCertSlide(currentSlideIndex + 1);
        }
      }, 2000);
    }
  }

  // Resume Modal Preview
  function openResumeModal() {
    if (!modal || !modalBody) return;

    modalBody.innerHTML =
      '<div class="modal-pdf-wrapper" style="max-height: 32rem; aspect-ratio: 8.5 / 11;">' +
      '<iframe src="media/resume.pdf#toolbar=0&view=FitH" type="application/pdf">' +
      '<p>Preview not supported by your browser. <a href="media/resume.pdf" target="_blank">Download Resume</a></p>' +
      "</iframe>" +
      "</div>" +
      '<div class="project-modal__header">' +
      '<div class="project-card__meta"><span>Rishabh Mudgal</span><span style="color: var(--cyan);">Curriculum Vitae</span></div>' +
      "<h2>📄 Rishabh Mudgal — Resume</h2>" +
      "</div>" +
      '<p class="project-modal__desc">Backend Engineer &amp; Applied AI Specialist · Python · FastAPI · RunPod GPU · LLM Orchestration.</p>' +
      '<div style="margin-top: 1.5rem; display: flex; flex-wrap: wrap; gap: 1rem;">' +
      '<a href="media/resume.pdf" target="_blank" class="button button--primary" download>Download Resume <span>↓</span></a>' +
      '<a href="media/resume.pdf" target="_blank" class="button button--secondary">Open in Full View <span>↗</span></a>' +
      "</div>";

    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function initCarousel(slidesList) {
    var track = modalBody.querySelector("[data-carousel-track]");
    var dots = modalBody.querySelectorAll("[data-dot]");
    var prevBtn = modalBody.querySelector("[data-carousel-prev]");
    var nextBtn = modalBody.querySelector("[data-carousel-next]");
    var carouselEl = modalBody.querySelector("[data-carousel]");
    var metaTitleEl = modalBody.querySelector("[data-carousel-title]");
    var metaCapEl = modalBody.querySelector("[data-carousel-caption]");
    var metaOpenBtn = modalBody.querySelector("[data-carousel-open-btn]");
    var list = slidesList || [];

    if (!track || totalSlides <= 1) return;

    function goToSlide(index) {
      pauseAllSlideVideos();
      currentSlideIndex = (index + totalSlides) % totalSlides;
      track.style.transform = "translateX(-" + currentSlideIndex * 100 + "%)";
      dots.forEach(function (dot, idx) {
        dot.classList.toggle("is-active", idx === currentSlideIndex);
      });

      var activeItem = list[currentSlideIndex];
      if (activeItem) {
        if (metaTitleEl) metaTitleEl.textContent = activeItem.title || "";
        if (metaCapEl) {
          if (activeItem.caption) {
            metaCapEl.textContent = activeItem.caption;
            metaCapEl.style.display = "";
          } else {
            metaCapEl.style.display = "none";
          }
        }
        if (metaOpenBtn) {
          if (activeItem.file) {
            metaOpenBtn.setAttribute("href", activeItem.file);
            metaOpenBtn.style.display = "inline-flex";
          } else {
            metaOpenBtn.style.display = "none";
          }
        }
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        goToSlide(currentSlideIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        goToSlide(currentSlideIndex + 1);
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        var idx = parseInt(dot.getAttribute("data-dot"), 10);
        goToSlide(idx);
      });
    });

    if (carouselEl) {
      carouselEl.addEventListener("mouseenter", function () {
        isHoveringCarousel = true;
      });
      carouselEl.addEventListener("mouseleave", function () {
        isHoveringCarousel = false;
      });
    }

    clearInterval(slideTimer);
    slideTimer = setInterval(function () {
      if (!isHoveringCarousel) {
        goToSlide(currentSlideIndex + 1);
      }
    }, 2000);
  }

  if (modalClose) modalClose.addEventListener("click", closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeProjectModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal && modal.classList.contains("is-open")) {
      closeProjectModal();
    }
  });

  // =========================================================================
  // DYNAMIC CARD GENERATOR & FILTER ORCHESTRATION (PROGRESSIVE ENHANCEMENT)
  // =========================================================================

  // Dynamic Certificate Card Icons mapping
  var certIcons = {
    techsaksham: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="1.5" fill="#00A4EF"/><rect x="13" y="3" width="8" height="8" rx="1.5" fill="#7FBA00"/><rect x="3" y="13" width="8" height="8" rx="1.5" fill="#F25022"/><rect x="13" y="13" width="8" height="8" rx="1.5" fill="#FFB900"/></svg>',
    google: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" fill="#8C91FF"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4m-3.1-6.9-2.8 2.8m-8.2 8.2-2.8 2.8m0-13.8 2.8 2.8m8.2 8.2 2.8 2.8" stroke="#8C91FF" stroke-width="2" stroke-linecap="round"/></svg>',
    greatlearning: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="4" fill="#6BE7FF" fill-opacity="0.2" stroke="#6BE7FF" stroke-width="2"/><path d="M9 12h6M12 9v6" stroke="#6BE7FF" stroke-width="2" stroke-linecap="round"/></svg>',
    hackerrank: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 17.5V6.5L12 2l8 4.5v11L12 22l-8-4.5Z" fill="#C7FF7B" fill-opacity="0.15" stroke="#C7FF7B" stroke-width="2"/><path d="M10 8v8M14 8v8M10 12h4" stroke="#C7FF7B" stroke-width="2" stroke-linecap="round"/></svg>',
    aws: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 14a8 8 0 0 0 16 0" stroke="#FF86C8" stroke-width="2" stroke-linecap="round"/><path d="M17 11l3 3-3 3" stroke="#FF86C8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  function getCertIcon(issuerClass) {
    if (!issuerClass) return certIcons.google;
    if (issuerClass.indexOf("techsaksham") !== -1) return certIcons.techsaksham;
    if (issuerClass.indexOf("greatlearning") !== -1) return certIcons.greatlearning;
    if (issuerClass.indexOf("hackerrank") !== -1) return certIcons.hackerrank;
    if (issuerClass.indexOf("aws") !== -1) return certIcons.aws;
    return certIcons.google;
  }

  function getCategoryLabel(category) {
    switch (category) {
      case "ai": return "Applied AI";
      case "data": return "Data & Analytics";
      case "python": return "Python & Backend";
      case "devops": return "DevOps & Cloud";
      case "security": return "Security & QA";
      case "frontend": return "Frontend & Core";
      default: return "Verified Qualification";
    }
  }

  // Render Certificate Cards (100% data-driven from certificates-data.js)
  function initDynamicCertificates() {
    var certGrid = document.querySelector(".cert-grid");
    if (!certGrid) return;

    // Reset grid to ensure pure data-driven generation
    certGrid.innerHTML = "";

    var certKeys = Object.keys(certDatabase);
    var counts = { all: 0, ai: 0, data: 0, python: 0, devops: 0, security: 0, frontend: 0 };

    if (certKeys.length > 0) {
      certKeys.forEach(function (key, index) {
        var cert = certDatabase[key];
        var iconSvg = getCertIcon(cert.issuerClass);
        var categoryTag = getCategoryLabel(cert.category);
        var badgeText = cert.badge || "Verified";
        var cat = cert.category || "all";

        counts.all++;
        if (counts[cat] !== undefined) {
          counts[cat]++;
        }

        var cardEl = document.createElement("article");
        cardEl.className = "cert-card glass-card";
        cardEl.setAttribute("data-cert-id", key);
        cardEl.setAttribute("data-category", cat);
        cardEl.setAttribute("data-tilt", "");
        cardEl.setAttribute("data-reveal", "");
        if (index > 0) {
          cardEl.setAttribute("data-reveal-delay", String((index % 6) * 30));
        }

        cardEl.innerHTML =
          '<div class="cert-card__top">' +
          '<div class="cert-card__header-info">' +
          '<div class="cert-card__tech-icon">' + iconSvg + '</div>' +
          '<div>' +
          '<span class="cert-card__issuer ' + (cert.issuerClass || '') + '">' + (cert.issuer || '') + '</span>' +
          '<h4>' + cert.title + '</h4>' +
          '</div>' +
          '</div>' +
          '<span class="cert-card__badge">' + badgeText + '</span>' +
          '</div>' +
          '<p style="color: var(--muted); font-size: 0.74rem; line-height: 1.5; margin: 0;">' + (cert.desc || '') + '</p>' +
          '<div class="cert-card__footer">' +
          '<span>' + categoryTag + '</span>' +
          '<span>View Credential ↗</span>' +
          '</div>';

        certGrid.appendChild(cardEl);
      });
    }

    // Update filter counts dynamically across all pills
    var filterPills = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
    filterPills.forEach(function (pill) {
      var cat = pill.getAttribute("data-filter");
      var baseName = pill.textContent.split(" (")[0].trim();
      if (cat === "all") {
        pill.textContent = baseName + " (" + counts.all + (counts.all > 0 ? "+" : "") + ")";
      } else if (counts[cat] !== undefined) {
        pill.textContent = baseName + " (" + counts[cat] + ")";
      }
    });

    // Bind event handlers
    bindCertCardEvents();
  }

  function bindCertCardEvents() {
    var certCards = Array.prototype.slice.call(document.querySelectorAll("[data-cert-id]"));
    certCards.forEach(function (card) {
      if (card._hasClickBound) return;
      card._hasClickBound = true;

      card.addEventListener("click", function (e) {
        if (e.target.closest("a")) return;
        var certId = card.getAttribute("data-cert-id");
        if (certId) {
          openCertificateModal(certId);
        }
      });
    });

    initTilt();
    initDynamicReveals();
  }

  // Certificate Category Filtering
  function initCertFilter() {
    var filterPills = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
    if (filterPills.length === 0) return;

    filterPills.forEach(function (pill) {
      pill.addEventListener("click", function () {
        var category = pill.getAttribute("data-filter");

        filterPills.forEach(function (p) {
          p.classList.remove("is-active");
        });
        pill.classList.add("is-active");

        var certCards = Array.prototype.slice.call(document.querySelectorAll("[data-cert-id]"));
        certCards.forEach(function (card) {
          var cardCategory = card.getAttribute("data-category");
          if (category === "all" || cardCategory === category) {
            card.style.display = "";
            card.style.opacity = "0";
            card.style.transform = "translateY(12px)";
            setTimeout(function () {
              card.style.transition = "opacity 0.35s ease, transform 0.35s ease";
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, 20);
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  // Project Visual Stage Generator
  function getProjectVisualHtml(proj) {
    if (proj.visualHtml) return proj.visualHtml;

    if (proj.id === "llm_chatbot") {
      return (
        '<div class="project-card__visual project-card__visual--llm-chatbot" style="display: grid; place-items: center; background: radial-gradient(circle at 45% 38%, #1e1b4b, #090d1a 64%);" aria-hidden="true">' +
        '<div class="visual-window visual-window--pipeline" style="border-color: rgba(56, 189, 248, 0.3);">' +
        '<div class="visual-window__bar"><i></i><i></i><i></i><span style="margin-left:auto; font-family:var(--mono); font-size:0.55rem; color:#38bdf8; font-weight:700;">PRESIDIO PII · OLLAMA SSE STREAMING</span></div>' +
        '<div class="visual-mail" style="border-color:rgba(236, 72, 153, 0.25); background:rgba(236, 72, 153, 0.06);"><span class="visual-mail__sender" style="color:var(--pink);">Presidio PII Analyzer ➔ Redact &lt;PERSON&gt;, &lt;EMAIL&gt;, &lt;PHONE&gt;</span><span class="visual-mail__line" style="background:rgba(236, 72, 153, 0.3);"></span><span class="visual-mail__line visual-mail__line--short" style="background:rgba(236, 72, 153, 0.2);"></span></div>' +
        '<div class="visual-flow" style="color:#bae6fd;"><span>Django REST API</span><b>➔</b><span style="color:var(--lime);">Ollama (Llama 3.2)</span><b>➔</b><span>SSE EventStream</span></div>' +
        '<div class="visual-output" style="border-color:rgba(16, 185, 129, 0.25); background:rgba(16, 185, 129, 0.07); color:#a7f3d0;"><span class="visual-output__pulse" style="background:var(--lime); box-shadow:0 0 0.5rem var(--lime);"></span><span>100% Air-Gapped Local Inference · Zero PII Leakage · React 18 UI</span></div>' +
        '</div>' +
        '</div>'
      );
    }

    if (proj.id === "audio_story") {
      return (
        '<div class="project-card__visual project-card__visual--audio-story" aria-hidden="true">' +
        '<div class="visual-window visual-window--audio">' +
        '<div class="visual-window__bar"><i></i><i></i><i></i><span style="margin-left:auto; font-family:var(--mono); font-size:0.55rem; color:#ffd166; font-weight:700;">QWEN2.5-7B · KOKORO ONNX STUDIO</span></div>' +
        '<div class="visual-mail" style="border-color:rgba(255,209,102,0.25); background:rgba(255,209,102,0.06);"><span class="visual-mail__sender" style="color:var(--yellow);">Qwen2.5-7B Retention Script ➔ VRAM Flush (gc.collect)</span><span class="visual-mail__line" style="background:rgba(255,209,102,0.3);"></span><span class="visual-mail__line visual-mail__line--short" style="background:rgba(255,209,102,0.2);"></span></div>' +
        '<div class="visual-flow" style="color:#fbe4be;"><span>Voice: 70% hf + 30% af</span><b>➔</b><span style="color:var(--pink);">0.82x + 700ms Pause</span><b>➔</b><span>-19dB Ducking</span></div>' +
        '<div class="visual-output" style="border-color:rgba(107,231,255,0.25); background:rgba(107,231,255,0.07); color:#d2f7ff;"><span class="visual-output__pulse" style="background:var(--cyan); box-shadow:0 0 0.5rem var(--cyan);"></span><span>Master WAV Broadcast Ready · Pure Spoken Script Export</span></div>' +
        '</div>' +
        '</div>'
      );
    }

    if (proj.id === "summarizer") {
      return (
        '<div class="project-card__visual project-card__visual--summarizer" aria-hidden="true">' +
        '<div class="visual-window visual-window--pipeline">' +
        '<div class="visual-window__bar"><i></i><i></i><i></i><span style="margin-left:auto; font-family:var(--mono); font-size:0.55rem; color:#4fe0ff; font-weight:700;">JUST-RUN-ME.py · 7:30 AM</span></div>' +
        '<div class="visual-mail"><span class="visual-mail__sender">Gmail IMAP ➔ 30 Medium Articles / Day</span><span class="visual-mail__line"></span><span class="visual-mail__line visual-mail__line--short"></span></div>' +
        '<div class="visual-flow"><span>Freedium Paywall Bypass</span><b>→</b><span style="color:var(--lime);">Ollama deepseek-r1:8b</span><b>→</b><span>SMTP Inbox</span></div>' +
        '<div class="visual-output"><span class="visual-output__pulse"></span><span>100% Offline AI · ~70% Length Compression · Zero Cloud Cost</span></div>' +
        '</div>' +
        '</div>'
      );
    }

    if (proj.id === "multimodal") {
      return (
        '<div class="project-card__visual project-card__visual--multimodal" aria-hidden="true">' +
        '<div class="visual-window visual-window--multimodal">' +
        '<div class="visual-window__bar"><i></i><i></i><i></i><span style="margin-left:auto; font-family:var(--mono); font-size:0.55rem; color:#b477ff; font-weight:700;">DUAL-GPU SDXL · POTRACE VECTOR</span></div>' +
        '<div class="visual-mail" style="border-color:rgba(180,119,255,0.25); background:rgba(180,119,255,0.06);"><span class="visual-mail__sender" style="color:var(--cyan);">Qwen-2.5 (1.5B) JSON Director ➔ VRAM Flush (gc.collect)</span><span class="visual-mail__line" style="background:rgba(180,119,255,0.3);"></span><span class="visual-mail__line visual-mail__line--short" style="background:rgba(180,119,255,0.2);"></span></div>' +
        '<div class="visual-flow" style="color:#e2d6ed;"><span>cuda:0 (Even)</span><b>+</b><span style="color:var(--pink);">cuda:1 (Odd)</span><b>➔</b><span>Potrace SVG</span></div>' +
        '<div class="visual-output" style="border-color:rgba(199,255,123,0.25); background:rgba(199,255,123,0.06); color:#ddffb0;"><span class="visual-output__pulse" style="background:var(--lime); box-shadow:0 0 0.5rem var(--lime);"></span><span>ReportLab A4 Print PDF · 2x Speedup · ControlNet Canny 0.7</span></div>' +
        '</div>' +
        '</div>'
      );
    }

    if (proj.id === "social") {
      return (
        '<div class="project-card__visual project-card__visual--social" aria-hidden="true">' +
        '<div class="visual-window visual-window--social">' +
        '<div class="visual-window__bar"><i></i><i></i><i></i><span style="margin-left:auto; font-family:var(--mono); font-size:0.55rem; color:#ff86c8; font-weight:700;">MATRIX v2.4 · ANTI-BOT ACTIVE</span></div>' +
        '<div class="visual-mail" style="border-color:rgba(255,134,200,0.25); background:rgba(255,134,200,0.06);"><span class="visual-mail__sender" style="color:var(--pink);">Anti-Bot Evasion: Gaussian Jitter (60ms ± 35ms) · Bézier Curves</span><span class="visual-mail__line" style="background:rgba(255,134,200,0.3);"></span><span class="visual-mail__line visual-mail__line--short" style="background:rgba(255,134,200,0.2);"></span></div>' +
        '<div class="visual-flow" style="color:#f3d2f9;"><span>Twitter/X</span><b>→</b><span style="color:var(--pink);">LinkedIn Feed</span><b>→</b><span>Instagram (4:5)</span></div>' +
        '<div class="visual-output" style="border-color:rgba(255,209,102,0.25); background:rgba(255,209,102,0.06); color:#ffe6a3;"><span class="visual-output__pulse" style="background:var(--yellow); box-shadow:0 0 0.5rem var(--yellow);"></span><span>99.8% Session Uptime · 0 Flags · -60% Manual Effort</span></div>' +
        '</div>' +
        '</div>'
      );
    }

    if (proj.id === "amazon") {
      return (
        '<div class="project-card__visual project-card__visual--amazon" aria-hidden="true">' +
        '<div class="visual-data"><span class="visual-data__row"></span><span class="visual-data__row"></span><span class="visual-data__row"></span><span class="visual-data__row"></span></div>' +
        '<div class="visual-chart"><i></i><i></i><i></i><i></i><i></i></div>' +
        '</div>'
      );
    }

    if (proj.id === "comfyui_portrait") {
      return (
        '<div class="project-card__visual project-card__visual--comfyui" aria-hidden="true">' +
        '<div class="visual-window visual-window--comfyui">' +
        '<div class="visual-window__bar"><i></i><i></i><i></i><span style="margin-left:auto; font-family:var(--mono); font-size:0.55rem; color:#4fe0ff; font-weight:700;">COMFYUI · YOLO INPAINT &amp; FACEID</span></div>' +
        '<div class="visual-mail" style="border-color:rgba(79,224,255,0.25); background:rgba(79,224,255,0.06);"><span class="visual-mail__sender" style="color:var(--cyan);">JuggernautXL v9 (DPM++ 2M SDE) ➔ YOLOv8 FaceDetailer (0.24)</span><span class="visual-mail__line" style="background:rgba(79,224,255,0.3);"></span><span class="visual-mail__line visual-mail__line--short" style="background:rgba(79,224,255,0.2);"></span></div>' +
        '<div class="visual-flow" style="color:#e2d6ed;"><span>InsightFace (512D)</span><b>➔</b><span style="color:var(--pink);">IP-Adapter FaceID</span><b>➔</b><span>4x-UltraSharp 2x</span></div>' +
        '<div class="visual-output" style="border-color:rgba(199,255,123,0.25); background:rgba(199,255,123,0.06); color:#ddffb0;"><span class="visual-output__pulse" style="background:var(--lime); box-shadow:0 0 0.5rem var(--lime);"></span><span>16-Bit sRGB Master · Zero Plastic Skin · 99.2% Identity Lock</span></div>' +
        '</div>' +
        '</div>'
      );
    }

    // Fallback for custom added projects
    if (proj.media && proj.media.length > 0) {
      var firstMedia = proj.media[0];
      if (firstMedia.svg) {
        return '<div class="project-card__visual" style="display: grid; place-items: center; padding: 1.5rem;" aria-hidden="true">' + firstMedia.svg + '</div>';
      }
      if (firstMedia.file && detectMediaType(firstMedia) === "image") {
        return '<div class="project-card__visual" style="display: grid; place-items: center; padding: 1.5rem;" aria-hidden="true"><img src="' + firstMedia.file + '" alt="' + proj.title + '" style="max-height: 85%; max-width: 90%; object-fit: contain; border-radius: 0.5rem;" /></div>';
      }
    }

    return (
      '<div class="project-card__visual" style="display: grid; place-items: center; background: radial-gradient(circle at 40% 40%, #1e1b4b, #0c0d1c 70%);" aria-hidden="true">' +
      '<div style="font-family: var(--mono); font-size: 2rem; color: var(--cyan); opacity: 0.7;">✦</div>' +
      '</div>'
    );
  }

  // Render Project Cards (100% data-driven from projects-data.js)
  function initDynamicProjects() {
    var projectGrid = document.querySelector(".project-grid");
    if (!projectGrid) return;

    // Reset grid to ensure pure data-driven generation
    projectGrid.innerHTML = "";

    var projectKeys = Object.keys(projectDatabase);
    if (projectKeys.length === 0) {
      return;
    }

    projectKeys.forEach(function (key, index) {
      var proj = projectDatabase[key];
      var isWide = proj.featured || proj.wide;
      var cardEl = document.createElement("article");
      cardEl.className = "project-card glass-card" + (isWide ? " project-card--wide" : "");
      cardEl.setAttribute("data-project-id", key);
      cardEl.setAttribute("data-tilt", "");
      cardEl.setAttribute("data-reveal", "");
      if (index > 0) {
        cardEl.setAttribute("data-reveal-delay", String(index * 40));
      }

      var visualHtml = getProjectVisualHtml(proj);

      var metaParts = proj.meta ? proj.meta.split(" · ") : [];
      var metaHtml = "";
      if (metaParts.length >= 2) {
        metaHtml = "<span>" + metaParts[0] + "</span><span>" + metaParts.slice(1).join(" · ") + "</span>";
      } else {
        metaHtml = "<span>" + (proj.meta || "") + "</span>";
      }
      if (proj.liveUrl) {
        var badgeLabel = proj.liveBadgeText || "Live Site";
        metaHtml += '<span class="project-badge--live" style="color: var(--lime); font-weight: 700; font-family: var(--mono); font-size: 0.72rem; margin-left: auto; display: inline-flex; align-items: center; gap: 0.35rem;"><i style="display:inline-block; width:6px; height:6px; border-radius:50%; background:var(--lime); box-shadow:0 0 8px var(--lime);"></i> ' + badgeLabel + '</span>';
      }

      var tagsHtml = (proj.tags || []).map(function (t) { return "<span>" + t + "</span>"; }).join("");

      var titleHtml = proj.title;
      if (titleHtml.indexOf("<br>") === -1) {
        titleHtml = titleHtml.replace(/\s+(Automated|Pipeline|Matrix|Scrapper)/g, "<br>$1");
      }

      var actionHtml = proj.liveUrl
        ? '<div class="project-card__action"><span>Explore Project ↗</span><a href="' + proj.liveUrl + '" target="_blank" rel="noreferrer" class="project-link" style="color: var(--lime); margin-left: auto; z-index: 2;" onclick="event.stopPropagation();">' + (proj.liveUrlText || 'Live Demo ↗') + '</a></div>'
        : '<div class="project-card__action">Explore Architecture &amp; Slides <span>↗</span></div>';

      cardEl.innerHTML =
        visualHtml +
        '<div class="project-card__content">' +
        '<div class="project-card__meta">' + metaHtml + '</div>' +
        '<h3>' + titleHtml + '</h3>' +
        '<p>' + (proj.description || '') + '</p>' +
        '<div class="project-card__tags">' + tagsHtml + '</div>' +
        actionHtml +
        '</div>';

      projectGrid.appendChild(cardEl);
    });

    bindProjectCardEvents();
  }

  function bindProjectCardEvents() {
    var projectCards = Array.prototype.slice.call(document.querySelectorAll("[data-project-id]"));
    projectCards.forEach(function (card) {
      if (card._hasClickBound) return;
      card._hasClickBound = true;

      card.addEventListener("click", function (e) {
        if (e.target.closest("a")) return;
        var projectId = card.getAttribute("data-project-id");
        if (projectId) {
          openProjectModal(projectId);
        }
      });
    });

    initTilt();
    initDynamicReveals();
  }

  // Resume Action triggers
  var resumeTriggers = Array.prototype.slice.call(document.querySelectorAll("[data-resume-preview]"));
  resumeTriggers.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      openResumeModal();
    });
  });

  // Service Pill -> Open Project Modal triggers
  document.addEventListener("click", function (e) {
    var pill = e.target.closest("[data-open-project]");
    if (pill) {
      e.preventDefault();
      var projectId = pill.getAttribute("data-open-project");
      if (projectId && projectDatabase && projectDatabase[projectId]) {
        openProjectModal(projectId);
      }
    }
  });

  // Initialize dynamic content & events
  initDynamicCertificates();
  initDynamicProjects();
  initCertFilter();
})();