// ---------- advertencia anti self-XSS en la consola ----------
// No evita que alguien vea el código fuente (eso ningún sitio puede evitarlo,
// y no es un riesgo real). Esto protege contra el engaño real: gente que
// convence a otra persona de pegar código en su propia consola para
// "hackear" algo, cuando en realidad se está hackeando a sí misma.
(function () {
  const big = "color:#ff5c5c; font-size:46px; font-weight:900; text-shadow:1px 1px 0 #000;";
  const normal = "color:#eef4ff; font-size:16px; line-height:1.5;";
  const bold = "color:#6fb2ff; font-size:16px; font-weight:700;";
  console.log("%c¡Detente!", big);
  console.log(
    "%cEsta es una función del navegador pensada para desarrolladores. Si alguien te dijo que pegaras algo aquí para \"hackear\" una cuenta, activar algo gratis o desbloquear una función, es un engaño y te está intentando robar el acceso a tu propia cuenta.",
    normal
  );
  console.log("%cNo pegues código aquí que no entiendas ni escribiste tú mismo.", bold);
})();

// The page does not wait for decorative media before becoming usable.
document.getElementById("preloader")?.remove();

// Seasonal brand, based on the visitor's local month.
document.addEventListener('DOMContentLoaded', () => {
  const month = new Date().getMonth() + 1;
  const logo = month === 10 ? 'assets/logo-witch.png' : (month === 11 || month === 12) ? 'assets/logo-santa.png' : 'assets/kat-launcher-logo.png';
  document.querySelectorAll('img[src="assets/kat-launcher-logo.png"]').forEach(img => { img.src = logo; });
});

// Animate only the visible hero; never block the page on the background video.
(() => {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const video = document.getElementById("bgVideo");
  const hero = document.querySelector(".hero");
  if (!video || !hero) return;
  let visible = false;
  function update() {
    const active = visible && !document.hidden && !reduced.matches;
    document.documentElement.classList.toggle("hero-motion", active);
    if (active) {
      if (!video.getAttribute("src")) video.src = "assets/video/bg-cinematic.mp4";
      video.play().catch(() => {});
    } else video.pause();
  }
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; update(); }).observe(hero);
  document.addEventListener("visibilitychange", update);
  reduced.addEventListener("change", update);
})();

// Cursor frames stop as soon as the pointer settles.
(() => {
  if (!matchMedia("(pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const dot = document.getElementById("cursorDot"), label = document.getElementById("cursorLabel");
  if (!dot || !label) return;
  document.documentElement.classList.add("cosmic-pointer");
  let x = -100, y = -100, tx = x, ty = y, frameId = 0;
  function stop() { cancelAnimationFrame(frameId); frameId = 0; }
  function frame() {
    x += (tx - x) * .4; y += (ty - y) * .4;
    dot.style.transform = "translate3d(" + x + "px," + y + "px,0)";
    label.style.transform = "translate3d(" + (x + 26) + "px," + (y + 12) + "px,0)";
    frameId = Math.abs(tx-x) + Math.abs(ty-y) > .4 ? requestAnimationFrame(frame) : 0;
  }
  addEventListener("pointermove", e => {
    tx=e.clientX; ty=e.clientY;
    dot.classList.add("is-visible"); label.classList.add("is-visible");
    if (!frameId && !document.hidden) frameId=requestAnimationFrame(frame);
  }, {passive:true});
  document.documentElement.addEventListener("mouseleave", () => {
    stop(); dot.classList.remove("is-visible"); label.classList.remove("is-visible");
  });
  document.addEventListener("visibilitychange", () => { if (document.hidden) stop(); });
})();
