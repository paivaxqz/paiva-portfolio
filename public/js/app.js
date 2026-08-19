gsap.registerPlugin(ScrollTrigger);

let lenis;
let clockTimer;
let cursorTick;
const delay = (n = 420) => new Promise((r) => setTimeout(r, n));

function isTouch() {
  return window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 720;
}

function initLenis() {
  if (window.__lenisTick) gsap.ticker.remove(window.__lenisTick);
  if (lenis) lenis.destroy();
  if (typeof Lenis !== "function" || isTouch()) {
    lenis = null;
    return;
  }
  try {
    lenis = new Lenis({ lerp: 0.1 });
    lenis.on("scroll", ScrollTrigger.update);
    window.__lenisTick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(window.__lenisTick);
    gsap.ticker.lagSmoothing(0);
  } catch {
    lenis = null;
  }
}

function resetLoader() {
  gsap.set(".loading-screen", { top: "100%" });
  document.documentElement.style.cursor = "auto";
}

function pageIn() {
  gsap.timeline()
    .set(".loading-screen", { top: "100%" })
    .to(".loading-screen", { duration: 0.4, top: "0%", ease: "power4.in" });
}

function pageOut() {
  gsap.timeline()
    .to(".loading-screen", { duration: 0.55, top: "-100%", ease: "power4.inOut" })
    .set(".loading-screen", { top: "100%" });
}

function initNextWord(data) {
  const doc = new DOMParser().parseFromString(data.next.html, "text/html");
  const next = doc.querySelector(".loading-words");
  const cur = document.querySelector(".loading-words");
  if (next && cur) cur.innerHTML = next.innerHTML;
}

function initMagnetic() {
  if (isTouch()) return;
  document.querySelectorAll(".magnetic").forEach((el) => {
    if (el.dataset.mag) return;
    el.dataset.mag = "1";
    el.addEventListener("mousemove", (e) => {
      const b = el.getBoundingClientRect();
      const s = Number(el.dataset.strength || 24);
      gsap.to(el, {
        x: ((e.clientX - b.left) / el.offsetWidth - 0.5) * s,
        y: ((e.clientY - b.top) / el.offsetHeight - 0.5) * s,
        duration: 0.8,
        ease: "power3.out",
      });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.45)" });
    });
  });
}

function hideCursorPreview() {
  document.querySelectorAll(".cursor-img").forEach((box) => {
    box.classList.remove("active");
    box.querySelectorAll("img").forEach((img) => img.classList.remove("show"));
  });
}

function initCursor() {
  const box = document.querySelector(".cursor-img");
  hideCursorPreview();
  if (!box || isTouch()) return;
  if (box.dataset.bound) return;
  box.dataset.bound = "1";
  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  window.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
  });
  if (cursorTick) gsap.ticker.remove(cursorTick);
  cursorTick = () => {
    x += (mx - x) / 8;
    y += (my - y) / 8;
    gsap.set(box, { left: x, top: y });
  };
  gsap.ticker.add(cursorTick);
  document.addEventListener("mouseover", (e) => {
    const link = e.target.closest("[data-cursor]");
    if (!link || document.querySelector(".case-page")) return;
    box.classList.add("active");
    box.querySelectorAll("img").forEach((img) => img.classList.remove("show"));
    const img = box.querySelector(`[data-for="${link.dataset.cursor}"]`);
    if (img) img.classList.add("show");
  });
  document.addEventListener("mouseout", (e) => {
    const link = e.target.closest("[data-cursor]");
    if (!link) return;
    if (e.relatedTarget && link.contains(e.relatedTarget)) return;
    box.classList.remove("active");
  });
}

function initClock() {
  const el = document.querySelector("#time");
  if (!el) return;
  if (clockTimer) clearInterval(clockTimer);
  const fmt = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
  });
  const tick = () => {
    el.textContent = `${fmt.format(new Date())} SP`;
  };
  tick();
  clockTimer = setInterval(tick, 1000);
}

function initMenu() {
  const overlay = document.querySelector(".nav-overlay");
  const btn = document.querySelector(".menu-btn");
  if (!btn || !overlay) return;
  btn.onclick = () => overlay.classList.toggle("open");
  overlay.querySelectorAll("a").forEach((a) => {
    a.onclick = () => overlay.classList.remove("open");
  });
}

function initPage() {
  document.querySelector(".nav-overlay")?.classList.remove("open");
  hideCursorPreview();
  initLenis();
  initMagnetic();
  initCursor();
  initClock();
  initMenu();
  ScrollTrigger.refresh();
}

function boot() {
  if (typeof barba === "undefined") {
    resetLoader();
    initPage();
    return;
  }
  barba.init({
    preventRunning: true,
    timeout: 7000,
    transitions: [
      {
        name: "default",
        once() {
          resetLoader();
          initPage();
        },
        async leave() {
          hideCursorPreview();
          pageIn();
          await delay(420);
        },
        async beforeEnter() {
          ScrollTrigger.getAll().forEach((t) => t.kill());
        },
        enter(data) {
          initNextWord(data);
          initPage();
          pageOut();
        },
      },
    ],
  });
}

try {
  boot();
} catch {
  resetLoader();
  initPage();
}
