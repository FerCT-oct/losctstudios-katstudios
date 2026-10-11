// DOM Element Selectors
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const langToggleBtn = document.getElementById("langToggleBtn");
const downloadButton = document.getElementById("downloadButton");
const toastElement = document.getElementById("toast");
const yearElement = document.getElementById("year");

// Menu Toggle (Mobile)
if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

// Year Display
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Translations Dictionary
const translations = {
  es: {
    "pets-title": "Tus nuevos compañeros de aventura",
    "pets-desc": "Pollito, mini Wither y Among Us: una mascota 3D a tu lado, con combate opcional para defenderte y ayudarte cuando atacas.",
    "pets-note": "Una mascota a la vez · Sin ataques a jugadores",

    "doc-title": "Kat Launcher | Tu aventura empieza aquí",
    "nav-features": "Características",
    "nav-compare": "Comparativa",
    "nav-mods": "Mods",
    "nav-custom": "Personalización",
    "nav-discord": "Discord",
    "nav-download": "Descargar",
    "hero-eyebrow": "Creado para jugadores de Minecraft",
    "hero-title": "Tu Minecraft.<br><em>A tu manera.</em>",
    "hero-desc": "KatLauncher 1.7.1 reúne perfiles aislados, Kat Social, KatCraft, trofeos, capturas, skins y mods en una experiencia completamente personalizable.",
    "hero-download": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" /></svg> Descargar para Windows`,
    "hero-discord": `<svg viewBox="0 0 24 24" aria-hidden="true" class="discord-svg"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.03c-.21.375-.444.807-.608 1.2a18.336 18.336 0 0 0-5.487 0a13.14 13.14 0 0 0-.617-1.2a.077.077 0 0 0-.079-.03A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.077 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.873-.894a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.92 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.099.244.19.372.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.894a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.156-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" fill="currentColor"/></svg> Unirse a la comunidad`,
    "hero-meta-free": "Gratis",
    "hero-meta-fast": "Rápido",
    "hero-meta-loaders": "Fabric, Forge, NeoForge y Quilt",
    "stats-loaders": "Modloaders",
    "stats-profiles": "Perfiles",
    "stats-click": "clic",
    "stats-play": "Para jugar",
    "stats-version": "Versión actual",
    "stats-tokens": "KatTokens · Próximamente",
    "compare-kicker": "Elige con los ojos abiertos",
    "compare-title": "No somos otro botón para abrir Minecraft",
    "compare-desc": "KatLauncher convierte el launcher en una experiencia social, personalizable y conectada con el juego.",
    "compare-features": "Funciones",
    "compare-offline": "Perfil offline sin login obligatorio",
    "compare-instances": "Instancias y perfiles separados",
    "compare-deps": "Mods y dependencias automáticas",
    "compare-social": "Chat global, amigos y mensajes privados",
    "compare-katcraft": "KatCraft e invitaciones dentro del juego",
    "compare-trophies": "Trofeos, rangos y presencia",
    "compare-personality": "Sonidos, easter eggs y temas",
    "compare-partial": "Parcial",
    "compare-note": "“Parcial” indica una función relacionada. “—” significa que no aparece anunciada públicamente. Comparativa informativa, julio de 2026.",
    "feat-kicker": "Más que un launcher",
    "feat-title": "Todo lo que necesitas, sin el menú laberinto",
    "feat-desc": "Funciones potentes con una interfaz clara. Cero caos, puro bloque.",
    "feat-1-title": "Perfiles completamente aislados",
    "feat-1-desc": "Cada perfil guarda su propia versión, loader, mods, mundos, RAM, resolución y argumentos JVM.",
    "feat-2-title": "Mods desde Modrinth",
    "feat-2-desc": "Busca e instala mods compatibles con la versión y el loader del perfil activo.",
    "feat-3-title": "Modpacks y archivos .mrpack",
    "feat-3-desc": "Instala packs de Modrinth o importa un archivo local como perfil independiente.",
    "feat-4-title": "Skins locales",
    "feat-4-desc": "Guarda, previsualiza y activa skins PNG con instalación automática de CustomSkinLoader.",
    "feat-5-title": "Descarga y reparación",
    "feat-5-desc": "Comprueba assets, librerías y archivos de versión antes de iniciar y repara solo lo necesario.",
    "feat-6-title": "Kat Social",
    "feat-6-desc": "Amigos, solicitudes, chat global, mensajes privados, publicaciones, perfiles y presencia en tiempo real.",
    "feat-7-title": "KatCraft y salas públicas",
    "feat-7-desc": "Crea o descubre salas, administra la consola y consulta amigos, perfiles, trofeos y presencia desde el juego.",
    "feat-8-title": "Trofeos, capturas y personalidad",
    "feat-8-desc": "Rangos por tiempo jugado, galería de screenshots, sonidos, easter eggs y cuatro interfaces seleccionables.",
    "mods-kicker": "Compatibilidad real",
    "mods-title": "Fabric, Forge, NeoForge y Quilt",
    "mods-desc": "Cada perfil puede usar su propia versión de Minecraft y su propio modloader. Kat Launcher mantiene las instancias separadas para que los mods y configuraciones no se mezclen.",
    "mods-li-1": "<span>✓</span> Instalación automática del loader",
    "mods-li-2": "<span>✓</span> Mods filtrados por versión y loader en Modrinth",
    "mods-li-3": "<span>✓</span> Perfiles independientes con RAM y resolución propias",
    "mods-li-4": "<span>✓</span> Reparación de assets, librerías y archivos faltantes",
    "loader-fabric-desc": "Ligero y rápido",
    "loader-forge-desc": "El clásico del modding",
    "loader-neo-desc": "Modding moderno",
    "loader-quilt-desc": "Flexible y comunitario",
    "loader-compatible": "Compatible",
    "custom-kicker": "Configuración integrada",
    "custom-title": "Ajusta el launcher a tu instalación",
    "custom-desc": "Elige entre XMBKat, Epic, Kat Modern y Kat Normal. Cambia el color de acento, idioma, Java, memoria y resolución desde un solo lugar.",
    "custom-link": "Ver características <span>→</span>",
    "dl-kicker": "La aventura está esperando",
    "dl-title": "Descarga Kat Launcher",
    "dl-desc": "Instalador oficial para Windows 10 y Windows 11.",
    "dl-btn": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" /></svg> Descargar Kat Launcher`,
    "dl-discord": `<svg viewBox="0 0 24 24" aria-hidden="true" class="discord-svg"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.03c-.21.375-.444.807-.608 1.2a18.336 18.336 0 0 0-5.487 0a13.14 13.14 0 0 0-.617-1.2a.077.077 0 0 0-.079-.03A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.077 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.873-.894a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.92 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.099.244.19.372.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.894a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.156-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" fill="currentColor"/></svg> Unirse al Discord`,
    "dl-meta": "Versión 1.7.1 · Software propietario de código cerrado",
    "footer-desc": "Launcher propietario para Minecraft: Java Edition ✦",
    "toast-download": "Descargando el instalador de Kat Launcher 🐾",
    "toast-lang-changed": "Idioma cambiado a Español 🇪🇸"
  },
  en: {
    "pets-title": "Meet your new adventure companions",
    "pets-desc": "Chicken, mini Wither and Among Us: a 3D pet by your side, with optional combat to defend you and assist your attacks.",
    "pets-note": "One pet at a time · No attacks on players",

    "doc-title": "Kat Launcher | Your adventure starts here",
    "nav-features": "Features",
    "nav-compare": "Comparison",
    "nav-mods": "Mods",
    "nav-custom": "Customization",
    "nav-discord": "Discord",
    "nav-download": "Download",
    "hero-eyebrow": "Created for Minecraft players",
    "hero-title": "Your Minecraft.<br><em>Your way.</em>",
    "hero-desc": "KatLauncher 1.7.1 brings isolated profiles, Kat Social, KatCraft, trophies, screenshots, skins, and mods into one fully customizable experience.",
    "hero-download": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" /></svg> Download for Windows`,
    "hero-discord": `<svg viewBox="0 0 24 24" aria-hidden="true" class="discord-svg"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.03c-.21.375-.444.807-.608 1.2a18.336 18.336 0 0 0-5.487 0a13.14 13.14 0 0 0-.617-1.2a.077.077 0 0 0-.079-.03A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.077 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.873-.894a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.92 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.099.244.19.372.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.894a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.156-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" fill="currentColor"/></svg> Join the community`,
    "hero-meta-free": "Free",
    "hero-meta-fast": "Fast",
    "hero-meta-loaders": "Fabric, Forge, NeoForge, and Quilt",
    "stats-loaders": "Modloaders",
    "stats-profiles": "Profiles",
    "stats-click": "click",
    "stats-play": "To play",
    "stats-version": "Current version",
    "stats-tokens": "KatTokens · Coming soon",
    "compare-kicker": "Choose with your eyes open",
    "compare-title": "We are more than another Minecraft play button",
    "compare-desc": "KatLauncher turns the launcher into a social, customizable experience connected to the game.",
    "compare-features": "Features",
    "compare-offline": "Offline profile with no mandatory login",
    "compare-instances": "Separate instances and profiles",
    "compare-deps": "Automatic mods and dependencies",
    "compare-social": "Global chat, friends, and private messages",
    "compare-katcraft": "KatCraft and in-game invitations",
    "compare-trophies": "Trophies, ranks, and presence",
    "compare-personality": "Sounds, easter eggs, and themes",
    "compare-partial": "Partial",
    "compare-note": "“Partial” means a related feature is available. “—” means it is not publicly advertised. Informational comparison, July 2026.",
    "feat-kicker": "More than a launcher",
    "feat-title": "Everything you need, without the menu maze",
    "feat-desc": "Powerful features with a clean interface. Zero chaos, pure blocks.",
    "feat-1-title": "Completely isolated profiles",
    "feat-1-desc": "Each profile saves its own version, loader, mods, worlds, RAM, resolution, and JVM arguments.",
    "feat-2-title": "Mods from Modrinth",
    "feat-2-desc": "Search and install mods compatible with the active profile's version and loader.",
    "feat-3-title": "Modpacks and .mrpack files",
    "feat-3-desc": "Install packs from Modrinth or import a local file as an independent profile.",
    "feat-4-title": "Local skins",
    "feat-4-desc": "Save, preview, and activate PNG skins with automatic CustomSkinLoader installation.",
    "feat-5-title": "Download and repair",
    "feat-5-desc": "Verify assets, libraries, and version files before launching and repair only what is needed.",
    "feat-6-title": "Kat Social",
    "feat-6-desc": "Friends, requests, global chat, private messages, posts, profiles, and real-time presence.",
    "feat-7-title": "KatCraft and public rooms",
    "feat-7-desc": "Create or discover rooms, manage the console, and view friends, profiles, trophies, and presence in-game.",
    "feat-8-title": "Trophies, screenshots, and personality",
    "feat-8-desc": "Playtime ranks, screenshot gallery, sounds, easter eggs, and four selectable interfaces.",
    "mods-kicker": "True compatibility",
    "mods-title": "Fabric, Forge, NeoForge, and Quilt",
    "mods-desc": "Each profile can use its own Minecraft version and modloader. Kat Launcher keeps instances isolated so that mods and configurations do not get mixed up.",
    "mods-li-1": "<span>✓</span> Automatic loader installation",
    "mods-li-2": "<span>✓</span> Mods filtered by version and loader from Modrinth",
    "mods-li-3": "<span>✓</span> Independent profiles with their own RAM and resolution",
    "mods-li-4": "<span>✓</span> Asset, library, and missing file repair",
    "loader-fabric-desc": "Lightweight and fast",
    "loader-forge-desc": "The classic of modding",
    "loader-neo-desc": "Modern modding",
    "loader-quilt-desc": "Flexible and community-driven",
    "loader-compatible": "Compatible",
    "custom-kicker": "Integrated configuration",
    "custom-title": "Adjust the launcher to your installation",
    "custom-desc": "Choose XMBKat, Epic, Kat Modern, or Kat Normal. Change accent color, language, Java, memory, and resolution in one place.",
    "custom-link": "View features <span>→</span>",
    "dl-kicker": "The adventure is waiting",
    "dl-title": "Download Kat Launcher",
    "dl-desc": "Official installer for Windows 10 and Windows 11.",
    "dl-btn": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" /></svg> Download Kat Launcher`,
    "dl-discord": `<svg viewBox="0 0 24 24" aria-hidden="true" class="discord-svg"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.03c-.21.375-.444.807-.608 1.2a18.336 18.336 0 0 0-5.487 0a13.14 13.14 0 0 0-.617-1.2a.077.077 0 0 0-.079-.03A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.077 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.873-.894a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.92 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.099.244.19.372.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.894a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.156-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" fill="currentColor"/></svg> Join Discord`,
    "dl-meta": "Version 1.7.1 · Closed-source proprietary software",
    "footer-desc": "Proprietary launcher for Minecraft: Java Edition ✦",
    "toast-download": "Downloading the Kat Launcher installer 🐾",
    "toast-lang-changed": "Language changed to English 🇬🇧"
  }
};


Object.assign(translations.es, {"compare-offline": "Cuenta local sin login previo", "compare-instances": "Instancias y perfiles separados", "compare-deps": "Gestión e instalación de mods", "compare-packs": "Instalación de modpacks", "compare-social": "Chat global, amigos y mensajes privados", "compare-katcraft": "KatCraft e invitaciones dentro del juego", "compare-pets": "Mascotas KatPlus 3D y corona opcional", "compare-personality": "Temas o personalización del launcher", "compare-caption": "Comparativa · 7 de octubre de 2026", "compare-yes": "Sí", "compare-unknown": "Sin confirmar", "compare-note": "Revisada el 7 de octubre de 2026 con fuentes oficiales enlazadas en cada launcher. “Parcial” indica soporte relacionado o limitado; “Sin confirmar” significa que las fuentes consultadas no acreditan la función, no que sea imposible. SKlauncher incluye su beta 4.0. KatPlus requiere KatCraft; Mobile continúa en alpha.", "donate-nav": "☕ Donar", "donate-kicker": "APOYA KATLAUNCHER", "donate-title": "Ayúdanos a seguir construyendo KatLauncher", "donate-dev": "🐾 Desarrollo", "donate-features": "🚀 Nuevas funciones", "donate-improvements": "🛠️ Mejoras", "mobile-download": "Descargar KatLauncher Mobile · 0.4.1", "mobile-source": "Código fuente Mobile · LGPL-3.0", "release-link": "Novedades 1.7.1 / What's new", "mock-pack": "Modpack Cósmico", "donate-desc": "KatLauncher es gratis. Si te gusta el proyecto y quieres apoyar su desarrollo, puedes hacerlo directamente a través de Ko-fi.", "donate-btn": "☕ Apoyar en Ko-fi <span>↗</span>", "mobile-desc": "Android 5+ · Minecraft Java, cuentas locales, skins, catálogo Modrinth, modpacks, Wardrobe y KatSocial con Google.<br>Versión alpha: la compatibilidad y el rendimiento dependen del dispositivo.", "a-loading": "Cargando", "a-home": "Kat Launcher, inicio", "a-menu": "Abrir menú", "a-stats": "Estadísticas de Kat Launcher", "a-logo": "Logo de Kat Launcher", "a-cat": "Gato cósmico de Kat Launcher sosteniendo un bloque de césped", "a-language": "Cambiar idioma / Change language", "changelog-combat": "El combate multijugador requiere KatCraft en el servidor y permiso del operador: /katpet grant NOMBRE. Los diseños personalizados son cosméticos.", "changelog-download": "Descargar / Download", "changelog-back": "Volver / Back"});
Object.assign(translations.en, {"compare-offline": "Local account without prior login", "compare-instances": "Separate instances and profiles", "compare-deps": "Mod management and installation", "compare-packs": "Modpack installation", "compare-social": "Global chat, friends and private messages", "compare-katcraft": "KatCraft and in-game invitations", "compare-pets": "3D KatPlus pets and optional crown", "compare-personality": "Launcher themes or customization", "compare-caption": "Comparison · October 7, 2026", "compare-yes": "Yes", "compare-unknown": "Unconfirmed", "compare-note": "Reviewed October 7, 2026 using the official sources linked in each launcher heading. “Partial” means related or limited support; “Unconfirmed” means the sources checked do not establish the feature, not that it is impossible. SKlauncher includes its 4.0 beta. KatPlus requires KatCraft; Mobile remains in alpha.", "donate-nav": "☕ Donate", "donate-kicker": "SUPPORT KATLAUNCHER", "donate-title": "Help us keep building KatLauncher", "donate-dev": "🐾 Development", "donate-features": "🚀 New features", "donate-improvements": "🛠️ Improvements", "mobile-download": "Download KatLauncher Mobile · 0.4.1", "mobile-source": "Mobile source code · LGPL-3.0", "release-link": "What's new in 1.7.1", "mock-pack": "Cosmic Modpack", "donate-desc": "KatLauncher is free. If you enjoy the project and want to support its development, you can contribute through Ko-fi.", "donate-btn": "☕ Support on Ko-fi <span>↗</span>", "mobile-desc": "Android 5+ · Minecraft Java, local accounts, skins, Modrinth catalog, modpacks, Wardrobe and KatSocial with Google.<br>Alpha release: compatibility and performance depend on your device.", "a-loading": "Loading", "a-home": "Kat Launcher, home", "a-menu": "Open menu", "a-stats": "Kat Launcher statistics", "a-logo": "Kat Launcher logo", "a-cat": "Kat Launcher cosmic cat holding a grass block", "a-language": "Change language", "changelog-combat": "Multiplayer combat requires KatCraft on the server and operator permission: /katpet grant NAME. Custom designs are cosmetic.", "changelog-download": "Download", "changelog-back": "Back"});

Object.assign(translations.es, {"hero-desc": "KatLauncher 1.7.1 reúne perfiles aislados, Kat Social, KatCraft y el nuevo Wardrobe: tu skin, tu colección y tu estilo.", "wardrobe-title": "Wardrobe: tu skin, tu estilo.", "wardrobe-desc": "Prueba trajes, capas, coronas, alas, auras y mascotas sobre tu jugador real, sin guardar hasta que estés listo.", "wardrobe-collection": "Trajes Kat y Wither · Capas reales · Gorros festivos · Alas animadas · Auras de mobs · Nuevas mascotas", "wardrobe-note": "Colección KatPlus · Requiere KatCraft · Las capas Mojang dependen de las que posea tu cuenta", "wardrobe-link": "Explorar Wardrobe 1.7.1", "release-link": "Novedades 1.7.1 · Wardrobe", "changelog-title": "KatLauncher 1.7.1 — Emotions Update", "changelog-combat": "La colección requiere KatPlus y KatCraft. Para combate multijugador, actualiza KatCraft también en el servidor y concede permiso con /katpet grant NOMBRE. Los diseños personalizados son cosméticos.", "changelog-0": "Wardrobe de KatCraft: prueba tu colección con tu skin real, vista previa giratoria y selección separada de las piezas equipadas.", "changelog-1": "Trajes Kat y Wither ajustados a tu skin: acompañan brazos, piernas y postura. El traje Wither añade dos copias laterales de tu cabeza.", "changelog-2": "Capas KatLauncher y Wither con textura y movimiento de capa de Minecraft. Mi capa Mojang muestra la capa oficial que tu cuenta ya posee.", "changelog-3": "Corona de rubíes, gorro de brujo y gorro de Santa. Una pieza de cabeza a la vez.", "changelog-4": "Alas cósmicas y alas de luz con aleteo.", "changelog-5": "Auras cósmica, brasas, Enderman, Creeper y Wither.", "changelog-6": "Nuevas mascotas: Gato cósmico y Mini Slime, junto a Pollito, Mini Wither, Among Us y tu diseño personalizado. Una mascota a la vez.", "changelog-7": "Animaciones de reposo y movimiento de mascotas, con opción para desactivarlas.", "changelog-8": "Combate opcional: tus mascotas te defienden y acompañan tus ataques contra enemigos hostiles. Sin ataques a jugadores.", "changelog-9": "Tu colección se guarda en KatPlus y otros usuarios con KatCraft pueden verla.", "changelog-10": "Mejoras de estabilidad de salas y compatibilidad de mods al alojar partidas.", "changelog-11": "Menos mensajes técnicos en el chat y controles de permisos reforzados."});
Object.assign(translations.en, {"hero-desc": "KatLauncher 1.7.1 brings together isolated profiles, Kat Social, KatCraft and the new Wardrobe: your skin, your collection, your style.", "wardrobe-title": "Wardrobe: your skin, your style.", "wardrobe-desc": "Try outfits, capes, crowns, wings, auras and pets on your actual player, saving only when you are ready.", "wardrobe-collection": "Kat and Wither outfits · Real capes · Seasonal hats · Animated wings · Mob auras · New pets", "wardrobe-note": "KatPlus collection · Requires KatCraft · Mojang capes depend on those your account owns", "wardrobe-link": "Explore Wardrobe 1.7.1", "release-link": "What’s new in 1.7.1 · Wardrobe", "changelog-title": "KatLauncher 1.7.1 — Emotions Update", "changelog-combat": "The collection requires KatPlus and KatCraft. For multiplayer combat, update KatCraft on the server too and grant permission with /katpet grant NAME. Custom designs are cosmetic.", "changelog-0": "KatCraft Wardrobe: try your collection with your actual skin, a rotating preview and separate selected and equipped items.", "changelog-1": "Kat and Wither outfits follow your skin, arms, legs and pose. The Wither outfit adds two side copies of your head.", "changelog-2": "KatLauncher and Wither capes use Minecraft cape textures and movement. My Mojang cape displays the official cape your account already owns.", "changelog-3": "Ruby crown, witch hat and Santa hat. One headwear item at a time.", "changelog-4": "Cosmic wings and light wings with flapping animations.", "changelog-5": "Cosmic, ember, Enderman, Creeper and Wither auras.", "changelog-6": "New pets: Cosmic Cat and Mini Slime, alongside Chicken, Mini Wither, Among Us and your custom design. One pet at a time.", "changelog-7": "Pet idle and walking animations, with an option to disable them.", "changelog-8": "Optional combat: pets defend you and assist your attacks against hostile enemies. No attacks on players.", "changelog-9": "Your collection is saved in KatPlus and visible to other KatCraft users.", "changelog-10": "Room stability and hosted mod compatibility improvements.", "changelog-11": "Less technical chat output and stronger permission checks."});
let currentLanguage = localStorage.getItem("katLang") === "en" ? "en" : "es";

// Set Language Function
Object.assign(translations.es, {"patata-0": "Rueda de ocho emotes dentro de KatCraft: abre con B y usa el centro para parar.", "patata-1": "Vestidor → Emotes: asigna animaciones a la rueda, recarga la biblioteca y abre la vista previa con tu skin.", "patata-2": "Importa archivos .emotecraft y JSON de Emotecraft por instancia, sin sobrescribir tus archivos.", "patata-3": "Ocho animaciones iniciales; Emotecraft y dependencias compatibles se instalan como complemento opcional.", "patata-4": "Navegación renovada en PC conservando el estilo clásico.", "patata-5": "Mobile 0.4.1: nuevo inicio con tarjetas, accesos inferiores y botón táctil Emotes en los controles predeterminados.", "patata-6": "Se mantienen las correcciones de lanzamiento, modo seguro, herramientas y códigos KL1.", "release-link": "Novedades 1.7.1 · Emotions Update", "patata-note": "La sincronización requiere Emotecraft compatible en los jugadores y el servidor. Mobile sigue en alpha.", "changelog-title": "KatLauncher 1.7.1 · Emotions Update"});
Object.assign(translations.en, {"patata-0": "Eight-slot KatCraft emote wheel: press B and use the center to stop.", "patata-1": "Wardrobe → Emotes: assign animations, reload the library and preview with your skin.", "patata-2": "Import Emotecraft .emotecraft and JSON files per instance without overwriting files.", "patata-3": "Eight starter animations; compatible Emotecraft and dependencies install as an optional add-on.", "patata-4": "Refreshed PC navigation with the classic style preserved.", "patata-5": "Mobile 0.4.1: new card-based home, bottom shortcuts and an Emotes touch button in default controls.", "patata-6": "Preserves launch, safe mode, tools and KL1 code fixes.", "release-link": "What’s new in 1.7.1 · Emotions Update", "patata-note": "Synchronization requires compatible Emotecraft on players and the server. Mobile remains in alpha.", "changelog-title": "KatLauncher 1.7.1 · Emotions Update"});
Object.assign(translations.es, {"patata-0": "Rueda de ocho emotes dentro de KatCraft: abre con B y usa el centro para parar.", "patata-1": "Vestidor → Emotes: asigna animaciones y prueba la vista previa con tu skin directamente en KatCraft (Emotecraft moderno).", "patata-2": "Importa archivos .emotecraft y JSON de Emotecraft por instancia, sin sobrescribir tus archivos.", "patata-3": "Ocho animaciones iniciales; Emotecraft y dependencias compatibles se instalan como complemento opcional.", "patata-4": "Navegación renovada en PC conservando el estilo clásico.", "patata-5": "Mobile 0.4.1: nuevo inicio con tarjetas, accesos inferiores y botón táctil Emotes en los controles predeterminados.", "patata-6": "Se mantienen las correcciones de lanzamiento, modo seguro, herramientas y códigos KL1.", "release-link": "Novedades 1.7.1 · Emotions Update", "patata-note": "La sincronización requiere Emotecraft compatible en los jugadores y el servidor. Mobile sigue en alpha.", "changelog-title": "KatLauncher 1.7.1 · Emotions Update"});
Object.assign(translations.en, {"patata-0": "Eight-slot KatCraft emote wheel: press B and use the center to stop.", "patata-1": "Wardrobe → Emotes: assign animations and preview your skin directly in KatCraft (modern Emotecraft).", "patata-2": "Import Emotecraft .emotecraft and JSON files per instance without overwriting files.", "patata-3": "Eight starter animations; compatible Emotecraft and dependencies install as an optional add-on.", "patata-4": "Refreshed PC navigation with the classic style preserved.", "patata-5": "Mobile 0.4.1: new card-based home, bottom shortcuts and an Emotes touch button in default controls.", "patata-6": "Preserves launch, safe mode, tools and KL1 code fixes.", "release-link": "What’s new in 1.7.1 · Emotions Update", "patata-note": "Synchronization requires compatible Emotecraft on players and the server. Mobile remains in alpha.", "changelog-title": "KatLauncher 1.7.1 · Emotions Update"});
Object.assign(translations.es, {"emotions-0": "👗 Wardrobe: guarda tus conjuntos favoritos y cambia de estilo con un clic.", "emotions-1": "💃 KatEmote: buscador, importación .emotecraft e invitaciones para bailar con amigos.", "emotions-2": "🐈 Mascotas con animaciones AFK y celebraciones propias.", "emotions-3": "💤 Discord Rich Presence muestra AFK tras 30 segundos sin actividad.", "emotions-4": "👀 Aviso «¿Sigues ahí?» después de 3 horas sin actividad, sin contar pausas.", "emotions-5": "📦 KaBackup corregido: guarda mundos, mods y emotes para llevarlos a otra computadora.", "emotions-6": "🔄 Reset de Launcher conserva mundos, cuentas, instancias, mods, logros, horas y tokens.", "emotions-7": "🛠️ Diagnóstico para tickets, perfiles temporales de sala y correcciones de sesión y órdenes pendientes.", "changelog-title": "🐾 KatLauncher 1.7.1 · Emotions Update", "release-link": "🐾 Novedades 1.7.1 · Emotions Update", "emotions-note": "Actualización oficial de PC. Reinicia Minecraft después de instalar. El APK móvil mantiene su versión actual.", "back-link": "Volver"});
Object.assign(translations.en, {"emotions-0": "👗 Wardrobe: save favorite outfits and switch styles with one click.", "emotions-1": "💃 KatEmote: search, .emotecraft imports and invitations to dance with friends.", "emotions-2": "🐈 Pets with individual AFK animations and celebrations.", "emotions-3": "💤 Discord Rich Presence shows AFK after 30 seconds of inactivity.", "emotions-4": "👀 “Are you still there?” after 3 hours of inactivity, excluding paused time.", "emotions-5": "📦 Fixed KaBackup: move worlds, mods and emotes to another computer.", "emotions-6": "🔄 Launcher Reset preserves worlds, accounts, instances, mods, achievements, playtime and tokens.", "emotions-7": "🛠️ Ticket diagnostics, temporary room profiles and fixes for sessions and pending commands.", "changelog-title": "🐾 KatLauncher 1.7.1 · Emotions Update", "release-link": "🐾 What’s new in 1.7.1 · Emotions Update", "emotions-note": "Official PC update. Restart Minecraft after installation. The Mobile APK remains at its current version.", "back-link": "Back"});
function setLanguage(lang) {
  lang = lang === "en" ? "en" : "es";
  currentLanguage = lang;
  localStorage.setItem("katLang", lang);
  document.documentElement.lang = lang;

  // Apply translations to data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  ["aria-label", "alt", "title", "placeholder"].forEach((attribute) => {
    document.querySelectorAll("[data-i18n-" + attribute + "]").forEach((element) => {
      const value = translations[lang][element.getAttribute("data-i18n-" + attribute)];
      if (value) element.setAttribute(attribute, value);
    });
  });

  // Avisa a otros módulos (ej. auth.js) sin exponer el scope interno.
  window.KatI18n = { lang, translations };
  window.dispatchEvent(new CustomEvent("katlangchange", { detail: { lang } }));
}

// Initialize Language on load
setLanguage(currentLanguage);

// Lang Toggle Listener
if (langToggleBtn) {
  langToggleBtn.addEventListener("click", () => {
    const nextLang = currentLanguage === "es" ? "en" : "es";
    setLanguage(nextLang);
    
    // Show feedback toast
    if (toastElement) {
      toastElement.textContent = translations[nextLang]["toast-lang-changed"];
      toastElement.classList.add("show");
      window.setTimeout(() => toastElement.classList.remove("show"), 2800);
    }
  });
}

// Download Button Listener
if (downloadButton) {
  downloadButton.addEventListener("click", () => {
    if (toastElement) {
      toastElement.textContent = translations[currentLanguage]["toast-download"];
      toastElement.classList.add("show");
      window.setTimeout(() => toastElement.classList.remove("show"), 2800);
    }
  });
}

// Smooth Reveal Animations on Scroll
const revealTargets = document.querySelectorAll(
  ".section-heading, .comparison-shell, .feature-card, .loaders-copy, .loader-card, .custom-panel, .source-panel, .steps-grid article, .download-section"
);

revealTargets.forEach((element) => element.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.13 }
);

revealTargets.forEach((element) => observer.observe(element));
