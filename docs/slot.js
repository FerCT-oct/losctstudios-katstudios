"use strict";
// KatLauncher · descargas como tragamonedas: los 3 rodillos caen en el logo de tu sistema.
(() => {
  const slot = document.getElementById("slot");
  if (!slot) return;
  const REL = "https://github.com/FerCT-oct/losctstudios-katstudios/releases";
  const ORDER = ["windows", "linux", "android", "kat", "mac", "ios"];  // orden de las celdas en cada rodillo
  const LOOPS = 9;                                         // vueltas dibujadas por rodillo
  const DATA = {
    windows: {
      eyebrow: "Windows · 1.9.0", href: REL + "/download/v1.9.0/KatLauncher-Setup-1.9.0.exe",
      es: { title: "Instalador para Windows", desc: "Windows 10 y 11 (64 bits). Instala sobre la versión anterior: tus perfiles y mundos se conservan.", btn: "Descargar instalador" },
      en: { title: "Windows installer", desc: "Windows 10 and 11 (64-bit). Install over the previous version: your profiles and worlds are kept.", btn: "Download installer" },
      extra: [["Microsoft Store", "https://apps.microsoft.com/detail/9PC3M6KB2LHJ"], [{ es: "KatLite (ligero)", en: "KatLite (lightweight)" }, "#katlite"], [{ es: "Todas las versiones", en: "All versions" }, REL]],
    },
    linux: {
      eyebrow: "Linux · 1.9.0", href: REL + "/download/v1.9.0/KatLauncher-1.9.0-linux-x86_64.tar.gz",
      es: { title: "Paquete para Linux", desc: "Ubuntu 22.04+ y Debian 12+ (64 bits). Descomprime y ejecuta «sh install.sh»: no necesita sudo y se actualiza solo.", btn: "Descargar .tar.gz" },
      en: { title: "Linux package", desc: "Ubuntu 22.04+ and Debian 12+ (64-bit). Extract it and run “sh install.sh”: no sudo needed and it updates itself.", btn: "Download .tar.gz" },
      extra: [[{ es: "Novedades y SHA-256", en: "Release notes and SHA-256" }, REL + "/tag/v1.9.0"], [{ es: "Todas las versiones", en: "All versions" }, REL]],
    },
    mac: {
      eyebrow: "macOS", sad: true,
      es: { title: "Mac aún no tiene KatLauncher", desc: "Por ahora KatLauncher es para Windows, Linux y Android. Si tienes otro equipo, elige su sistema abajo." },
      en: { title: "Mac doesn't have KatLauncher yet", desc: "For now KatLauncher is for Windows, Linux and Android. If you have another device, pick its system below." },
      extra: [[{ es: "Avísame en Discord", en: "Get notified on Discord" }, "https://discord.gg/HqFqWEC8tR"]],
    },
    ios: {
      eyebrow: "iPhone · iPad", sad: true,
      es: { title: "Los iPhone aún no tienen KatLauncher", desc: "Por ahora KatLauncher es para Windows, Linux y Android. Si tienes otro equipo, elige su sistema abajo." },
      en: { title: "iPhones don't have KatLauncher yet", desc: "For now KatLauncher is for Windows, Linux and Android. If you have another device, pick its system below." },
      extra: [[{ es: "Avísame en Discord", en: "Get notified on Discord" }, "https://discord.gg/HqFqWEC8tR"]],
    },
    android: {
      eyebrow: "Android · 0.6.2", href: REL + "/download/mobile-v0.6.2/KatLauncher-Mobile-0.6.2-compact.apk",
      es: { title: "KatLauncher Mobile", desc: "Android 5 o superior. Minecraft Java, skins, modpacks, Kat Social y Easy Control. Versión alpha.", btn: "Descargar APK" },
      en: { title: "KatLauncher Mobile", desc: "Android 5 or newer. Minecraft Java, skins, modpacks, Kat Social and Easy Control. Alpha version.", btn: "Download APK" },
      extra: [[{ es: "Código fuente · GPL-3.0", en: "Source code · GPL-3.0" }, REL + "/download/mobile-v0.6.2/KatLauncher-Mobile-0.6.2-fuentes.zip"]],
    },
  };

  function detect() {
    const ua = navigator.userAgent || "";
    const platform = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || "";
    if (/android/i.test(ua) || /android/i.test(platform)) return "android";
    // iPadOS se presenta como Mac: se distingue por la pantalla táctil.
    if (/iPhone|iPad|iPod/.test(ua) || (/Mac/.test(platform) && navigator.maxTouchPoints > 1)) return "ios";
    if (/Mac/.test(platform) || /Macintosh/.test(ua)) return "mac";
    if (/CrOS/.test(ua)) return "linux";
    if (/linux|x11/i.test(platform) || /linux|x11/i.test(ua)) return "linux";
    return "windows";
  }

  // Celdas de los rodillos.
  const logo = document.querySelector("img.kat-logo");
  const cell = (os) => os === "kat"
    ? `<div class="cell"><img src="${logo ? logo.getAttribute("src") : "assets/kat-launcher-logo.png"}" alt=""></div>`
    : os === "linux" ? `<div class="cell"><img src="assets/tux.svg" alt=""></div>`
    : `<div class="cell"><svg><use href="#os-${os}"/></svg></div>`;
  const reels = [...slot.querySelectorAll(".reel")];
  const strips = reels.map((r) => r.querySelector(".strip"));
  const html = Array.from({ length: LOOPS }, () => ORDER.map(cell).join("")).join("");
  strips.forEach((s) => { s.innerHTML = html; });

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lang = () => (window.KatI18n && window.KatI18n.lang === "en" ? "en" : "es");
  let current = detect(), spinning = false, shown = 3;  // shown: celda visible (3 = Kat)

  function render() {
    const d = DATA[current], t = d[lang()];
    document.getElementById("dlEyebrow").textContent = d.eyebrow;
    document.getElementById("dlTitle").textContent = t.title;
    document.getElementById("dlDesc").textContent = t.desc;
    const btn = document.getElementById("dlBtn");
    btn.hidden = !d.href;
    if (d.href) { btn.textContent = t.btn; btn.href = d.href; }
    slot.classList.toggle("sad", !!d.sad);
    const extra = document.getElementById("dlExtra");
    extra.replaceChildren(...d.extra.map(([label, href]) => {
      const a = document.createElement("a");
      a.className = "link small"; a.href = href; a.rel = "noopener";
      a.textContent = typeof label === "string" ? label : label[lang()];
      return a;
    }));
    slot.querySelectorAll(".chip").forEach((c) => {
      const on = c.dataset.os === current;
      c.classList.toggle("on", on); c.setAttribute("aria-pressed", String(on));
    });
  }

  const cellHeight = () => reels[0].getBoundingClientRect().height;
  function place(strip, index, ms) {
    strip.style.transition = ms ? `transform ${ms}ms cubic-bezier(.15,.85,.25,1.06)` : "none";
    strip.style.transform = `translateY(${-index * cellHeight()}px)`;
  }

  function spin(os) {
    if (spinning) return;
    current = os;
    const target = ORDER.indexOf(os);
    render();
    slot.classList.remove("win");
    if (reduce) { strips.forEach((s, i) => place(s, ORDER.length * (LOOPS - 3 + i) + target, 0)); shown = target; if (!DATA[current].sad) slot.classList.add("win"); return; }
    spinning = true;
    slot.classList.add("spinning");
    strips.forEach((s, i) => {
      place(s, shown, 0);                                              // misma celda arriba del todo: sin salto
      void s.offsetHeight;                                             // fuerza el reinicio antes de girar
      reels[i].classList.add("blur");
      place(s, ORDER.length * (LOOPS - 3 + i) + target, 1300 + i * 450);
      setTimeout(() => reels[i].classList.remove("blur"), 1000 + i * 450);
    });
    setTimeout(() => {
      spinning = false;
      slot.classList.remove("spinning");
      shown = target;
      if (!DATA[current].sad) slot.classList.add("win");
    }, 1300 + 2 * 450 + 80);
  }

  slot.querySelectorAll(".chip").forEach((c) => c.addEventListener("click", () => spin(c.dataset.os)));
  window.addEventListener("katlangchange", render);
  window.addEventListener("resize", () => strips.forEach((s, i) => place(s, ORDER.length * (LOOPS - 3 + i) + ORDER.indexOf(current), 0)));

  // Posición inicial (ya en el resultado, por si no hay JS de animación) y giro al aparecer.
  render();
  strips.forEach((s, i) => place(s, ORDER.length * (LOOPS - 3 + i) + ORDER.indexOf(current), 0));
  shown = ORDER.indexOf(current);
  if ("IntersectionObserver" in window && !reduce) {
    strips.forEach((s) => place(s, 3, 0));  // muestra el logo de Kat antes de girar
    shown = 3;
    const once = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      once.disconnect();
      setTimeout(() => spin(current), 350);
    }, { threshold: 0.45 });
    once.observe(slot);
  } else {
    if (!DATA[current].sad) slot.classList.add("win");
  }
})();
