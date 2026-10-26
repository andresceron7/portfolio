// Fondo animado: malla de puntos separada 16px. Cerca del cursor, la malla
// se "extiende" — los puntos se empujan radialmente hacia afuera del mouse,
// crecen y cambian de #E7E7E7 (reposo) a #CFCFCF (bajo el cursor).
(function () {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const SPACING = 16;
  const INFLUENCE_RADIUS = 160;
  const MAX_PUSH = 15;
  const BASE_RADIUS = 1;
  const MAX_RADIUS_ADD = 1.3;
  const EASE = 0.12;

  const LIGHT_BASE_COLOR = [231, 231, 231]; // #E7E7E7
  const DARK_BASE_COLOR = [30, 26, 54]; // #1E1A36
  const HOVER_COLOR = [207, 207, 207]; // #CFCFCF
  const DARK_THEME_ALPHA = 0.35;

  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let width = 0;
  let height = 0;
  let cols = 0;
  let rows = 0;
  let themeAlpha = 1;
  let baseColor = LIGHT_BASE_COLOR;
  let baseFill = `rgb(${LIGHT_BASE_COLOR.join(", ")})`;

  function readTheme() {
    const isDark = document.documentElement.dataset.theme === "dark";
    themeAlpha = isDark ? DARK_THEME_ALPHA : 1;
    baseColor = isDark ? DARK_BASE_COLOR : LIGHT_BASE_COLOR;
    baseFill = `rgb(${baseColor.join(", ")})`;
  }

  const mouse = {
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    active: false,
    hasPosition: false,
  };

  function lerpColor(t) {
    const r = Math.round(baseColor[0] + (HOVER_COLOR[0] - baseColor[0]) * t);
    const g = Math.round(baseColor[1] + (HOVER_COLOR[1] - baseColor[1]) * t);
    const b = Math.round(baseColor[2] + (HOVER_COLOR[2] - baseColor[2]) * t);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(width / SPACING);
    rows = Math.ceil(height / SPACING);
  }

  function onMouseMove(e) {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    mouse.active = true;
    mouse.hasPosition = true;
  }

  function onMouseLeave() {
    mouse.active = false;
  }

  function draw() {
    if (mouse.hasPosition) {
      mouse.x += (mouse.targetX - mouse.x) * EASE;
      mouse.y += (mouse.targetY - mouse.y) * EASE;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.globalAlpha = themeAlpha;

    const minCol = Math.max(0, Math.floor((mouse.x - INFLUENCE_RADIUS) / SPACING));
    const maxCol = Math.min(cols, Math.ceil((mouse.x + INFLUENCE_RADIUS) / SPACING));
    const minRow = Math.max(0, Math.floor((mouse.y - INFLUENCE_RADIUS) / SPACING));
    const maxRow = Math.min(rows, Math.ceil((mouse.y + INFLUENCE_RADIUS) / SPACING));
    const hasInfluenceBox = mouse.active || mouse.hasPosition;

    // Malla base (todos los puntos no afectados por el cursor) en un solo trazo.
    ctx.fillStyle = baseFill;
    ctx.beginPath();
    for (let cx = 0; cx <= cols; cx++) {
      const inColRange = hasInfluenceBox && cx >= minCol && cx <= maxCol;
      for (let cy = 0; cy <= rows; cy++) {
        if (inColRange && cy >= minRow && cy <= maxRow) continue;
        const x = cx * SPACING;
        const y = cy * SPACING;
        ctx.moveTo(x + BASE_RADIUS, y);
        ctx.arc(x, y, BASE_RADIUS, 0, Math.PI * 2);
      }
    }
    ctx.fill();

    // Puntos dentro del radio de influencia: se dibujan individualmente para
    // poder variar su desplazamiento, tamaño y color.
    if (hasInfluenceBox) {
      for (let cx = minCol; cx <= maxCol; cx++) {
        for (let cy = minRow; cy <= maxRow; cy++) {
          const x = cx * SPACING;
          const y = cy * SPACING;
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist > INFLUENCE_RADIUS) {
            ctx.beginPath();
            ctx.fillStyle = baseFill;
            ctx.arc(x, y, BASE_RADIUS, 0, Math.PI * 2);
            ctx.fill();
            continue;
          }

          const t = 1 - dist / INFLUENCE_RADIUS;
          const eased = t * t;
          const push = eased * MAX_PUSH;
          const nx = dist === 0 ? 0 : dx / dist;
          const ny = dist === 0 ? 0 : dy / dist;
          const px = x + nx * push;
          const py = y + ny * push;
          const radius = BASE_RADIUS + eased * MAX_RADIUS_ADD;

          ctx.beginPath();
          ctx.fillStyle = lerpColor(eased);
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    if (!prefersReducedMotion) {
      requestAnimationFrame(draw);
    }
  }

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseleave", onMouseLeave);
  window.addEventListener("themechange", readTheme);

  readTheme();
  resize();
  draw();
})();
