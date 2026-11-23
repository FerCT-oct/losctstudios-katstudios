"use strict";
// KatLauncher · web 1.9. Idioma (es/en), menú móvil, logo de temporada y aparición suave.
// Expone window.KatI18n y el evento «katlangchange» que usa auth.js (sesión de Kat Social).
(() => {
  const EN = {
    "skip": "Skip to content",
    "nav-new": "What's new", "nav-features": "Features", "nav-ui": "Interfaces", "nav-download": "Download", "nav-support": "Support", "nav-cta": "Download",
    "hero-eyebrow": "New · KatLauncher 1.9 · Kat Cosmic",
    "hero-title": "Your Minecraft,<br>your way.",
    "hero-lead": "A Minecraft Java launcher for Windows with offline profiles, one-click mods and modpacks, skins, friends and rooms to play together. Free, no account required.",
    "hero-dl": "Download for Windows", "hero-store": "Microsoft Store",
    "fact-1": "Windows 10 / 11", "fact-2": "Free", "fact-3": "Offline profiles, no account",
    "m-play": "Play", "m-profiles": "Profiles", "m-friends": "Friends", "m-settings": "Settings", "m-instances": "INSTANCES", "m-selected": "SELECTED INSTANCE",
    "mock-caption": "Illustration of the Kat Cosmic interface",
    "new-eyebrow": "KatLauncher 1.9.1", "new-title": "Rooms and Calls", "new-lead": "Talk to your friends, play in new rooms and share photos, in a faster launcher.",
    "n1-t": "Voice calls", "n1-d": "Call your friends or your group from Kat Social, with voice effects: robot, high pitch, low pitch, radio and more.",
    "n2-t": "New Rooms", "n2-d": "Winter lobby, your friends in 3D, poses and emotes. “Create room” opens Minecraft in your world and notifies your friends.",
    "n3-t": "KatMods", "n3-d": "The KatMods catalog inside the Mods tab, with one-click install.",
    "n4-t": "Posts with photos", "n4-d": "Upload photos, like and comment on community posts.",
    "n5-t": "HD photos in KatCraft", "n5-d": "Your profile photo and background look sharp inside Minecraft, with a loading animation.",
    "n6-t": "Faster and lighter", "n6-d": "Starts in half the time and uses about 200 MB less RAM. New loading screen and sounds.",
    "new-more": "See all changes →",
    "feat-eyebrow": "Features", "feat-title": "Everything you need, without the maze of menus",
    "f1-t": "Isolated profiles", "f1-d": "Each profile keeps its own version, loader, mods, worlds, RAM and resolution.",
    "f2-t": "Mods and modpacks", "f2-d": "Modrinth and CurseForge with dependencies; import .mrpack files.",
    "f3-t": "Every loader", "f3-d": "Vanilla, Fabric, Forge, NeoForge and Quilt, with automatic download and repair.",
    "f4-t": "Skins and Wardrobe", "f4-d": "3D preview, local skins and cosmetics.",
    "f5-d": "Friends, chat, profiles and presence. Google sign-in, only for social features.",
    "f6-t": "KatCraft and rooms", "f6-d": "Play with friends by code or LAN, with emotes and in-game notices.",
    "f7-d": "Move your mods, worlds and settings to another PC in a single file.",
    "f8-t": "Trophies and KatTokens", "f8-d": "Achievements for playing and 10 KatTokens per hour played.",
    "ui-eyebrow": "Four interfaces", "ui-title": "Choose how it looks", "ui-lead": "Switch instantly from Settings. Kat Classic is the lightest.",
    "tag-new": "New", "ui1": "Sidebar, animated pages and your color.", "ui2": "Horizontal categories, console style.", "ui3": "Big cards and smooth transitions.", "ui4": "Compact tabs, for modest PCs.",
    "kc-title": "Rooms, emotes and friends in game", "kc-lead": "KatLauncher's own mod for Fabric and Forge. Open your world as a room, get friend notices and use emotes without leaving Minecraft.",
    "dl-eyebrow": "Download", "dl-title": "Start playing",
    "dl-win": "Windows installer", "dl-win-d": "Windows 10 and 11 (64-bit). Install over the previous version: your profiles and worlds are kept.", "dl-win-btn": "Download installer", "dl-all": "All versions",
    "dl-linux": "Linux package", "dl-linux-d": "Ubuntu 22.04+ and Debian 12+ (64-bit). Extract it and run \"sh install.sh\"; no sudo needed and it updates itself.", "dl-linux-btn": "Download .tar.gz", "dl-linux-notes": "Release notes and SHA-256",
    "dl-store": "From the Store", "dl-store-d": "Installation and automatic updates handled by Microsoft Store.", "dl-store-btn": "Open in the Store",
    "dl-mobile-d": "Android 5 or newer. Minecraft Java, skins, modpacks, Kat Social and Easy Control. Alpha version.", "dl-mobile-btn": "Download APK", "dl-mobile-src": "Source code · GPL-3.0",
    "dl-lite-t": "KatLite: the lightweight version", "dl-lite-d": "For modest PCs: Play, Instances, Mods, Modpacks, Skins and Friends, without KatCraft, Rooms, music or the built-in browser. Uses about 70 MB of RAM. Portable: extract the .zip and open KatLite.exe.", "dl-lite-btn": "Download KatLite (76 MB)", "dl-lite-notes": "Release notes and SHA-256",
    "dl-note": "To play on premium servers you need a copy of Minecraft. Offline profiles work without a Microsoft or Google account.",
    "sup-eyebrow": "Support the project", "sup-title": "KatLauncher is free", "sup-lead": "If you like it and want it to keep growing, you can support development on Ko-fi or join the community on Discord.",
    "sup-kofi": "Support on Ko-fi", "sup-discord": "Join the Discord",
    "ft-tux": "Tux: Larry Ewing (lewing@isc.tamu.edu) with The GIMP.", "ft-changelog": "Changelog", "ft-legal": "© Los CT Studios · KatLauncher is not an official Minecraft product and is not affiliated with Mojang or Microsoft.",
  };
  // El español es el texto del HTML: se guarda al cargar para poder volver a él.
  const ES = {};
  const nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach((n) => { ES[n.dataset.i18n] = n.innerHTML; });
  const HTML_KEYS = new Set(["hero-title"]);  // únicos textos con <br>; el resto va como texto plano

  function apply(lang) {
    const dict = lang === "en" ? EN : ES;
    nodes.forEach((n) => {
      const value = dict[n.dataset.i18n];
      if (value == null) return;
      if (HTML_KEYS.has(n.dataset.i18n)) n.innerHTML = value; else n.textContent = lang === "en" ? value : textOf(value);
    });
    document.documentElement.lang = lang;
    document.getElementById("lang").textContent = lang === "en" ? "ES" : "EN";
    window.KatI18n = { lang };
    try { localStorage.setItem("katLang", lang); } catch (_) { /* sin almacenamiento: solo esta visita */ }
    window.dispatchEvent(new CustomEvent("katlangchange", { detail: { lang } }));
  }
  function textOf(html) { const t = document.createElement("template"); t.innerHTML = html; return t.content.textContent; }

  let saved = "";
  try { saved = localStorage.getItem("katLang") || ""; } catch (_) { saved = ""; }
  const initial = saved || ((navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en");
  window.KatI18n = { lang: initial };
  if (initial !== "es") apply(initial); else document.getElementById("lang").textContent = "EN";
  document.getElementById("lang").addEventListener("click", () => apply(window.KatI18n.lang === "en" ? "es" : "en"));

  // Logo de temporada, como en el launcher: Kat Brujo en octubre, Kat Santa en noviembre y diciembre.
  const month = new Date().getMonth() + 1;
  const seasonal = month === 10 ? "assets/logo-witch.png" : (month >= 11 ? "assets/logo-santa.png" : "");
  if (seasonal) document.querySelectorAll("img.kat-logo").forEach((img) => { img.src = seasonal; });

  // Menú en pantallas pequeñas.
  const menu = document.getElementById("menuBtn"), nav = document.getElementById("nav");
  menu.addEventListener("click", () => {
    const open = !nav.classList.contains("open");
    nav.classList.toggle("open", open);
    menu.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) { nav.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); } });

  // Borde de la barra al bajar y sección activa en el menú.
  const top = document.getElementById("top");
  const onScroll = () => top.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  const links = [...nav.querySelectorAll("a")];
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        links.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + entry.target.id));
      }
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

    // Aparición suave, escalonada dentro de cada grupo.
    const reveal = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target;
        const siblings = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
        el.style.transitionDelay = Math.min(siblings.indexOf(el), 6) * 60 + "ms";
        el.classList.add("in");
        reveal.unobserve(el);
      }
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));
  } else {
    document.documentElement.classList.add("no-js");
  }
})();
