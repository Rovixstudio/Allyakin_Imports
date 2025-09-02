// Ano automático
document.getElementById("year").textContent = new Date().getFullYear();

// Toast
const toasts = {
  node: document.getElementById("toast"),
  show(msg) {
    this.node.textContent = msg;
    this.node.style.opacity = "1";
    setTimeout(() => {
      this.node.style.opacity = "0";
    }, 2000);
  }
};

// Alternar tema
document.getElementById("themeToggle").addEventListener("click", () => {
  document.documentElement.classList.toggle("alt");
  toasts.show("Tema alterado");
});

// Partículas douradas
(function () {
  const c = document.getElementById("particles");
  const ctx = c.getContext("2d", { alpha: true });
  let w, h, dpr;
  const particles = [];
  const COUNT = 70;

  function resize() {
    dpr = window.devicePixelRatio || 1;
    w = c.width = innerWidth * dpr;
    h = c.height = innerHeight * dpr;
    c.style.width = innerWidth + "px";
    c.style.height = innerHeight + "px";
  }
  function make() {
    return {
      x: Math.random() * w,
      y: h + Math.random() * h * 0.2,
      r: (Math.random() * 1.2 + 0.4) * dpr,
      s: Math.random() * 0.6 + 0.2,
      a: Math.random() * 0.4 + 0.15
    };
  }
  function init() {
    resize();
    particles.length = 0;
    for (let i = 0; i < COUNT; i++) particles.push(make());
    loop();
  }
  function loop() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.y -= p.s * 0.8;
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
      g.addColorStop(0, `rgba(246,196,83,${p.a})`);
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
      ctx.fill();
      if (p.y < -20) Object.assign(p, make());
    }
    requestAnimationFrame(loop);
  }
  addEventListener("resize", resize);
  init();
})();
