const homeView = document.getElementById("home-view");
const projectsView = document.getElementById("projects-view");
const detailView = document.getElementById("detail-view");
const grid = document.getElementById("project-grid");
const filtersEl = document.getElementById("filters");
const searchInput = document.getElementById("project-search");
const searchSubmit = document.getElementById("search-submit");
const searchClear = document.getElementById("search-clear");
const searchStatus = document.getElementById("search-status");
const carouselEl = document.getElementById("home-carousel");
const themeToggle = document.getElementById("theme-toggle");

let activeFilter = "Todos";
let searchQuery = "";

// Proyectos del carrusel del home, en orden (el primero arranca en el centro)
const HOME_CAROUSEL = [
  "nubank-metodo-de-pago-rappi",
  "registro-a-primera-compra-rappi",
  "pildoras-flotantes-promocionales-rappi",
  "post-order-mejorada-rappi",
  "componentes-post-order-rappi",
  "detalle-metodo-pago-rappi",
  "app-a-web-con-ia-rappi",
  "marca-losdebuho",
  "losdebuho-web",
  "merchant-portal-trato",
];

const THEME_KEY = "portfolio-theme";
const CASE_STUDY_CATEGORIES = ["UX/UI", "Product Design", "Design System", "Web", "User Research"];

function initTheme() {
  if (!themeToggle) return;
  const isDark = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
  );

  themeToggle.addEventListener("click", () => {
    const next =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem(THEME_KEY, next);
    themeToggle.setAttribute("aria-pressed", next === "dark" ? "true" : "false");
    themeToggle.setAttribute(
      "aria-label",
      next === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
    );
    window.dispatchEvent(new CustomEvent("themechange", { detail: { theme: next } }));
  });
}

function projectCategories(project) {
  return project.categories || [project.category];
}

function cardCover(project) {
  if (project.cardPhone) {
    return `
      <div class="card-cover card-cover--phone" style="background:${project.gradient}">
        <img src="${project.cardPhone}" alt="Pantalla de ${project.title}" loading="lazy" />
      </div>
    `;
  }
  if (project.cardDesktop) {
    // cardDesktopTop baja la captura cuando las etiquetas quedarían sobre la interfaz
    const top = project.cardDesktopTop ? ` style="top:${project.cardDesktopTop}"` : "";
    return `
      <div class="card-cover card-cover--desktop" style="background:${project.gradient}">
        <img src="${project.cardDesktop}" alt="Pantalla de ${project.title}" loading="lazy"${top} />
      </div>
    `;
  }
  if (project.cardLogo) {
    return `
      <div class="card-cover card-cover--logo" style="background:${project.gradient}">
        <img src="${project.cardLogo}" alt="Logo de ${project.title}" loading="lazy" />
      </div>
    `;
  }
  const bg = project.cardGradient ? ` style="background:${project.gradient}"` : "";
  return `<div class="card-cover"${bg}>${laptopMockup(project)}</div>`;
}

function laptopMockup(project, eager) {
  if (!project.screenshots || !project.screenshots.length) return "";
  const loadingAttr = eager ? "" : ' loading="lazy"';
  return `
    <div class="mockup-stage">
      <div class="mockup-laptop">
        <div class="mockup-screen">
          <img src="${project.screenshots[0]}" alt="Captura de ${project.title}"${loadingAttr} />
        </div>
        <div class="mockup-base"></div>
      </div>
    </div>
  `;
}

function detailCover(project) {
  if (project.coverImage) {
    return `
      <div class="detail-cover detail-cover--image">
        <img src="${project.coverImage}" alt="${project.title}" />
      </div>
    `;
  }
  return `
    <div class="detail-cover" style="background:${project.gradient}">${laptopMockup(project, true)}</div>
  `;
}

function galleryTiles(project) {
  const extra = project.screenshots ? project.screenshots.slice(1, 3) : [];
  if (!extra.length) {
    return `
      <div class="g" style="background:${project.gradient}"></div>
      <div class="g" style="background:${project.gradient}; filter:hue-rotate(20deg)"></div>
    `;
  }
  return extra
    .map(
      (src) =>
        `<img class="g" src="${src}" alt="Detalle de ${project.title}" loading="lazy" />`
    )
    .join("");
}

function caseTile(project, screenshotIndex, hueShift) {
  const src = project.screenshots && project.screenshots[screenshotIndex];
  if (src) {
    return `<img class="case-tile" src="${src}" alt="Detalle de ${project.title}" loading="lazy" />`;
  }
  const filter = hueShift ? ` filter:hue-rotate(${hueShift}deg);` : "";
  return `<div class="case-tile" style="background:${project.gradient};${filter}"></div>`;
}

function statsBand(project) {
  if (!project.metrics || !project.metrics.length) return "";
  const items = project.metrics
    .map(
      (m) => `
        <div class="case-stat">
          <span class="case-stat-value">${m.value}</span>
          <span class="case-stat-label">${m.label}</span>
        </div>
      `
    )
    .join("");
  return `
    <div class="case-stats">
      <div class="wrap case-stats-inner">${items}</div>
    </div>
  `;
}

function bioCard() {
  return `
    <div class="case-bio">
      <div class="case-bio-avatar">AC</div>
      <div class="case-bio-text">
        <h4>Andrés Cerón</h4>
        <p>Diseñador de producto senior especializado en experiencias digitales de UX/UI, branding y desarrollo web.</p>
        <div class="case-bio-links">
          <a class="case-bio-link" href="https://www.linkedin.com/in/andrescerongranados/" target="_blank" rel="noopener noreferrer">
            LinkedIn
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
          </a>
          <a class="case-bio-link" href="mailto:andres.zeron@gmail.com">
            Email
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
          </a>
        </div>
      </div>
    </div>
  `;
}

function renderCaseStudy(project) {
  return `
    <div class="detail">
      <div class="wrap">
        <a class="back-link" href="#/proyectos">&larr; Todos los proyectos</a>
        <div class="detail-head">
          <p class="detail-tag">${project.category} &middot; ${project.year}</p>
          <h1>${project.title}</h1>
          <p>${project.subtitle}</p>
        </div>
      </div>

      <div class="wrap case-hero">
        <p class="case-lead">${project.summary}</p>
        ${detailCover(project)}
      </div>

      <div class="wrap case-columns">
        <div class="case-challenge">
          <h3>El reto</h3>
          <p>${project.challenge}</p>
        </div>
        <div class="case-sidebar">
          <div class="case-sidebar-item">
            <p class="meta-label">Categoría</p>
            <p class="meta-value">${project.category}</p>
          </div>
          <div class="case-sidebar-item">
            <p class="meta-label">Año</p>
            <p class="meta-value">${project.year}</p>
          </div>
          <div class="case-sidebar-item">
            <p class="meta-label">Rol</p>
            <p class="meta-value">${project.role}</p>
          </div>
          <div class="case-sidebar-item">
            <p class="meta-label">Herramientas</p>
            <p class="meta-value">${project.tools}</p>
          </div>
        </div>
      </div>

      ${statsBand(project)}

      <div class="wrap case-section">
        <h3>El enfoque</h3>
        <p class="case-section-sub">${project.approach}</p>
        <div class="case-tiles case-tiles--three">
          ${caseTile(project, 0, 0)}
          ${caseTile(project, 1, 15)}
          ${caseTile(project, 2, 30)}
        </div>
      </div>

      <div class="wrap case-section">
        <h3>El resultado</h3>
        <p class="case-section-sub">${project.result}</p>
        <div class="case-tiles case-tiles--split">
          <div class="case-tile-big">${caseTile({ ...project, screenshots: null }, 0, 10)}</div>
          <div class="case-tile-stack">
            ${caseTile({ ...project, screenshots: null }, 0, 35)}
            ${caseTile({ ...project, screenshots: null }, 0, 55)}
          </div>
        </div>
      </div>

      <div class="wrap case-bio-wrap">
        ${bioCard()}
      </div>
    </div>
  `;
}

function phone(src, alt) {
  return `
    <div class="phone">
      <img src="${src}" alt="${alt || ""}" loading="lazy" />
    </div>
  `;
}

function phoneRow(srcs, alt) {
  const mod = srcs.length >= 4 ? " phone-row--four" : "";
  return `<div class="phone-row${mod}">${srcs
    .map((s) => phone(s, alt))
    .join("")}</div>`;
}

function renderRappiPaymentsCaseStudy(project) {
  const s = project.story;

  const contextChips = s.context
    .map(
      (c) => `
        <div class="rappi-chip">
          <span class="rappi-chip-label">${c.label}</span>
          <span class="rappi-chip-value">${c.value}</span>
        </div>
      `
    )
    .join("");

  const experiencePoints = s.problem.experience.points
    .map((p) => `<li>${p}</li>`)
    .join("");

  const objectives = s.objectives
    .map(
      (o) => `
        <div class="rappi-objective">
          <span class="rappi-objective-n">${o.n}</span>
          <h4>${o.t}</h4>
          <p>${o.d}</p>
        </div>
      `
    )
    .join("");

  const proposalPoints = s.proposal.points
    .map(
      (p) => `
        <div class="rappi-proposal-item">
          <span class="rappi-objective-n">${p.n}</span>
          <h4>${p.t}</h4>
          <p>${p.d}</p>
        </div>
      `
    )
    .join("");

  const proposalEvidence = s.proposal.evidence
    .map(
      (e) => `
        <figure class="rappi-evidence">
          <img src="${e.src}" alt="${e.caption}" loading="lazy" />
          <figcaption>${e.caption}</figcaption>
        </figure>
      `
    )
    .join("");

  const decisions = s.decisions
    .map(
      (d) => `
        <div class="rappi-decision">
          <span class="rappi-decision-law">${d.law}</span>
          <h4>${d.t}</h4>
          <p>${d.d}</p>
        </div>
      `
    )
    .join("");

  const technicalBody = s.technicalChallenge.body
    .map((p) => `<p>${p}</p>`)
    .join("");

  const technicalOutcomes = s.technicalChallenge.outcomes
    .map(
      (o) => `
        <li>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          <span>${o}</span>
        </li>
      `
    )
    .join("");

  const lessons = s.lessons.map((l) => `<li>${l}</li>`).join("");

  return `
    <div class="detail rappi">
      <div class="wrap">
        <a class="back-link" href="#/proyectos">&larr; Todos los proyectos</a>
      </div>

      <div class="wrap rappi-hero">
        <p class="detail-tag">${project.category} &middot; ${project.year}</p>
        <h1>${project.title}</h1>
        <p class="rappi-tagline">${s.tagline}</p>
        <div class="rappi-chips">${contextChips}</div>
        <div class="rappi-stage rappi-stage--single">
          <div class="rappi-mockup">
            <img src="${s.heroMockup}" alt="${project.title}" loading="lazy" />
          </div>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El problema</p>
        <h2>Una pantalla con dos capas de problema: experiencia y negocio.</h2>
        <p class="rappi-lead">${s.problem.intro}</p>
        <div class="rappi-problem-grid">
          <div class="rappi-objective">
            <h4>${s.problem.experience.title}</h4>
            <ul class="rappi-inline-list">${experiencePoints}</ul>
          </div>
          <div class="rappi-objective">
            <h4>${s.problem.business.title}</h4>
            <p>${s.problem.business.text}</p>
          </div>
        </div>
        <div class="rappi-before">
          <div class="rappi-before-image">
            <img src="${s.problem.beforeImage.src}" alt="${s.problem.beforeImage.label}" loading="lazy" />
          </div>
          <div class="rappi-before-text">
            <p class="rappi-before-label">${s.problem.beforeImage.label}</p>
            <p>${s.problem.beforeImage.caption}</p>
          </div>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El objetivo</p>
        <h2>Dos criterios de éxito, al mismo tiempo.</h2>
        <div class="rappi-objectives">${objectives}</div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Research</p>
        <h2>Jerarquizar necesidades reales, no asumirlas.</h2>
        <p class="rappi-lead">${s.research.body}</p>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Proceso de diseño</p>
        <h2>Una fase abierta de exploración antes de converger.</h2>
        <p class="rappi-lead">${s.process.body}</p>
        <figure class="rappi-board">
          <div class="rappi-zoom" data-zoom="1">
            <div class="rappi-zoom-controls">
              <button type="button" class="rappi-zoom-btn" data-zoom-out aria-label="Alejar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              </button>
              <span class="rappi-zoom-level">1x</span>
              <button type="button" class="rappi-zoom-btn" data-zoom-in aria-label="Acercar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              </button>
            </div>
            <div class="rappi-zoom-viewport">
              <img src="${s.process.board.src}" alt="Tablero de exploración de wireframes" loading="lazy" />
            </div>
          </div>
          <figcaption>${s.process.board.caption}</figcaption>
        </figure>
      </div>

      <div class="rappi-acts-band">
        <div class="wrap">
          <p class="rappi-kicker">La propuesta</p>
          <h2>${s.proposal.intro}</h2>
          <div class="rappi-proposal-grid">${proposalPoints}</div>
          ${
            s.proposal.detailsImage
              ? `
          <figure class="rappi-details-figure">
            <div class="rappi-mockup">
              <img src="${s.proposal.detailsImage.src}" alt="Detalles de estados dentro del nuevo diseño" loading="lazy" />
            </div>
            <figcaption>${s.proposal.detailsImage.caption}</figcaption>
          </figure>
          `
              : ""
          }
          <div class="rappi-evidence-row">${proposalEvidence}</div>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Decisiones de diseño clave</p>
        <h2>Cada estado, defendible con un principio.</h2>
        <div class="rappi-decisions">${decisions}</div>
      </div>

      <div class="wrap rappi-section rappi-constraint">
        <div class="rappi-constraint-body">
          <p class="rappi-kicker">${s.technicalChallenge.kicker}</p>
          <h2>${s.technicalChallenge.title}</h2>
          ${technicalBody}
        </div>
        <ul class="rappi-constraint-list">${technicalOutcomes}</ul>
      </div>

      <div class="rappi-impact">
        <div class="wrap rappi-stat-big">
          <p class="rappi-kicker">Impacto</p>
          <span class="rappi-stat-value">${s.impact.value}</span>
          <p class="rappi-stat-label">${s.impact.label}</p>
          <p class="rappi-stat-note">${s.impact.note}</p>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Lecciones aprendidas</p>
        <ul class="rappi-lessons">${lessons}</ul>
      </div>

      <div class="wrap case-bio-wrap">
        ${bioCard()}
      </div>
    </div>
  `;
}

function zoomBoard(board, alt) {
  return `
    <figure class="rappi-board">
      <div class="rappi-zoom" data-zoom="1">
        <div class="rappi-zoom-controls">
          <button type="button" class="rappi-zoom-btn" data-zoom-out aria-label="Alejar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          </button>
          <span class="rappi-zoom-level">1x</span>
          <button type="button" class="rappi-zoom-btn" data-zoom-in aria-label="Acercar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          </button>
        </div>
        <div class="rappi-zoom-viewport">
          <img src="${board.src}" alt="${alt}" loading="lazy" />
        </div>
      </div>
      <figcaption>${board.caption}</figcaption>
    </figure>
  `;
}

function checkList(items, className) {
  return `<ul class="${className}">${items
    .map(
      (o) => `
        <li>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          <span>${o}</span>
        </li>
      `
    )
    .join("")}</ul>`;
}

function renderRappiDetailsCaseStudy(project) {
  const s = project.story;

  const contextChips = s.context
    .map(
      (c) => `
        <div class="rappi-chip">
          <span class="rappi-chip-label">${c.label}</span>
          <span class="rappi-chip-value">${c.value}</span>
        </div>
      `
    )
    .join("");

  const problemPoints = s.problem.points
    .map(
      (p, i) => `
        <div class="rappi-point">
          <span class="rappi-point-index">0${i + 1}</span>
          <div>
            <h4>${p.t}</h4>
            <p>${p.d}</p>
          </div>
        </div>
      `
    )
    .join("");

  const objectives = s.objectives
    .map(
      (o) => `
        <div class="rappi-objective">
          <span class="rappi-objective-n">${o.n}</span>
          <h4>${o.t}</h4>
          <p>${o.d}</p>
        </div>
      `
    )
    .join("");

  const actMedia = (a) => {
    if (a.phones)
      return `<div class="rappi-act-phones">${phoneRow(a.phones, a.title)}</div>`;
    const figures = a.figures
      .map(
        (f) => `
          <figure class="rappi-act-figure${f.wide ? " rappi-act-figure--wide" : ""}">
            <img src="${f.src}" alt="${f.caption}" loading="lazy" />
            <figcaption>${f.caption}</figcaption>
          </figure>
        `
      )
      .join("");
    return `<div class="rappi-act-figures">${figures}</div>`;
  };

  const acts = s.proposal.acts
    .map(
      (a) => `
        <div class="rappi-act">
          <p class="rappi-kicker">${a.kicker}</p>
          <h3>${a.title}</h3>
          <p class="rappi-act-body">${a.body}</p>
          ${actMedia(a)}
        </div>
      `
    )
    .join("");

  const decisions = s.decisions
    .map(
      (d) => `
        <div class="rappi-decision">
          <span class="rappi-decision-law">${d.law}</span>
          <h4>${d.t}</h4>
          <p>${d.d}</p>
        </div>
      `
    )
    .join("");

  const connectorBody = s.connector.body.map((p) => `<p>${p}</p>`).join("");
  const teams = s.connector.teams
    .map((t) => `<li class="rappi-team">${t}</li>`)
    .join("");

  const technicalBody = s.technicalChallenge.body
    .map((p) => `<p>${p}</p>`)
    .join("");

  const lessons = s.lessons.map((l) => `<li>${l}</li>`).join("");

  return `
    <div class="detail rappi">
      <div class="wrap">
        <a class="back-link" href="#/proyectos">&larr; Todos los proyectos</a>
      </div>

      <div class="wrap rappi-hero">
        <p class="detail-tag">${project.category} &middot; ${project.year}</p>
        <h1>${project.title}</h1>
        <p class="rappi-tagline">${s.tagline}</p>
        <div class="rappi-chips">${contextChips}</div>
        <div class="rappi-stage rappi-stage--single">
          <div class="rappi-mockup">
            <img src="${s.heroMockup}" alt="${project.title}" loading="lazy" />
          </div>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El problema</p>
        <h2>Una pantalla que existía, pero casi nadie usaba.</h2>
        <div class="rappi-baseline">
          <span class="rappi-stat-value">${s.problem.baseline.value}</span>
          <p class="rappi-stat-label">${s.problem.baseline.label}</p>
        </div>
        <p class="rappi-lead">${s.problem.body}</p>
        <div class="rappi-points">${problemPoints}</div>
        <div class="rappi-before">
          <div class="rappi-before-image">
            <img src="${s.problem.beforeImage.src}" alt="${s.problem.beforeImage.label}" loading="lazy" />
          </div>
          <div class="rappi-before-text">
            <p class="rappi-before-label">${s.problem.beforeImage.label}</p>
            <p>${s.problem.beforeImage.caption}</p>
          </div>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El objetivo</p>
        <h2>Tres frentes, resueltos a la vez.</h2>
        <div class="rappi-objectives rappi-objectives--three">${objectives}</div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Research</p>
        <h2>Aprender de quienes ya resolvían el detalle de un método de pago.</h2>
        <p class="rappi-lead">${s.research.body}</p>
        ${zoomBoard(s.research.board, "Benchmark y análisis de necesidades")}
      </div>

      <div class="rappi-acts-band">
        <div class="wrap">
          <p class="rappi-kicker">La propuesta</p>
          <h2>${s.proposal.title}</h2>
          <figure class="rappi-details-figure">
            <div class="rappi-mockup">
              <img src="${s.proposal.overview.src}" alt="Pestañas Detalles, Transacciones y Promos" loading="lazy" />
            </div>
            <figcaption>${s.proposal.overview.caption}</figcaption>
          </figure>
          ${acts}
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Decisiones de diseño clave</p>
        <h2>Cada bloque, defendible con un principio.</h2>
        <div class="rappi-decisions">${decisions}</div>
      </div>

      <div class="wrap rappi-section rappi-constraint">
        <div class="rappi-constraint-body">
          <p class="rappi-kicker">${s.connector.kicker}</p>
          <h2>${s.connector.title}</h2>
          ${connectorBody}
        </div>
        <ul class="rappi-constraint-list rappi-teams">${teams}</ul>
      </div>

      <div class="wrap rappi-section rappi-constraint">
        <div class="rappi-constraint-body">
          <p class="rappi-kicker">${s.technicalChallenge.kicker}</p>
          <h2>${s.technicalChallenge.title}</h2>
          ${technicalBody}
        </div>
        ${checkList(s.technicalChallenge.outcomes, "rappi-constraint-list")}
      </div>

      <div class="rappi-impact">
        <div class="wrap">
          <p class="rappi-kicker">Impacto esperado</p>
          <h2>Un caso de negocio sobre una línea base medida.</h2>
          <p class="rappi-lead">${s.impact.body}</p>
          ${checkList(s.impact.hypotheses, "rappi-hypotheses")}
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Lecciones aprendidas</p>
        <ul class="rappi-lessons">${lessons}</ul>
      </div>

      <div class="wrap case-bio-wrap">
        ${bioCard()}
      </div>
    </div>
  `;
}

function statRow(stats, className) {
  return `<div class="${className}">${stats
    .map(
      (st) => `
        <div class="rappi-kpi">
          <span class="rappi-kpi-value">${st.value}</span>
          <span class="rappi-kpi-label">${st.label}</span>
        </div>
      `
    )
    .join("")}</div>`;
}

function renderRappiWebCaseStudy(project) {
  const s = project.story;

  const contextChips = s.context
    .map(
      (c) => `
        <div class="rappi-chip">
          <span class="rappi-chip-label">${c.label}</span>
          <span class="rappi-chip-value">${c.value}</span>
        </div>
      `
    )
    .join("");

  const problemPoints = s.problem.points
    .map(
      (p, i) => `
        <div class="rappi-point">
          <span class="rappi-point-index">0${i + 1}</span>
          <div>
            <h4>${p.t}</h4>
            <p>${p.d}</p>
          </div>
        </div>
      `
    )
    .join("");

  const objectives = s.objectives
    .map(
      (o) => `
        <div class="rappi-objective">
          <span class="rappi-objective-n">${o.n}</span>
          <h4>${o.t}</h4>
          <p>${o.d}</p>
        </div>
      `
    )
    .join("");

  const acts = s.proposal.acts
    .map(
      (a) => `
        <div class="rappi-act">
          <p class="rappi-kicker">${a.kicker}</p>
          <h3>${a.title}</h3>
          <p class="rappi-act-body">${a.body}</p>
          ${a.stats ? statRow(a.stats, "rappi-kpis") : ""}
          <div class="rappi-act-figures rappi-act-figures--even">${a.figures
            .map(
              (f) => `
                <figure class="rappi-act-figure rappi-act-figure--screen${f.wide ? " rappi-act-figure--wide" : ""}">
                  <img src="${f.src}" alt="${f.caption}" loading="lazy" />
                  <figcaption>${f.caption}</figcaption>
                </figure>
              `
            )
            .join("")}</div>
        </div>
      `
    )
    .join("");

  const decisions = s.decisions
    .map(
      (d) => `
        <div class="rappi-decision">
          <span class="rappi-decision-law">${d.law}</span>
          <h4>${d.t}</h4>
          <p>${d.d}</p>
        </div>
      `
    )
    .join("");

  const lessons = s.lessons.map((l) => `<li>${l}</li>`).join("");

  return `
    <div class="detail rappi">
      <div class="wrap">
        <a class="back-link" href="#/proyectos">&larr; Todos los proyectos</a>
      </div>

      <div class="wrap rappi-hero">
        <p class="detail-tag">${project.category} &middot; ${project.year}</p>
        <h1>${project.title}</h1>
        <p class="rappi-tagline">${s.tagline}</p>
        <div class="rappi-chips">${contextChips}</div>
        <div class="rappi-stage rappi-stage--single">
          <div class="rappi-mockup">
            <img src="${s.heroMockup}" alt="${project.title}" loading="lazy" />
          </div>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El problema</p>
        <h2>La deuda de experiencia también era deuda de seguridad.</h2>
        <div class="rappi-baseline">
          <span class="rappi-stat-value">${s.problem.baseline.value}</span>
          <p class="rappi-stat-label">${s.problem.baseline.label}</p>
          <p class="rappi-stat-note">${s.problem.baseline.note}</p>
        </div>
        <p class="rappi-lead">${s.problem.body}</p>
        <div class="rappi-points">${problemPoints}</div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El objetivo</p>
        <h2>Paridad con App, sin multiplicar las horas de diseño.</h2>
        <div class="rappi-objectives rappi-objectives--three">${objectives}</div>
      </div>

      <div class="rappi-acts-band">
        <div class="wrap">
          <p class="rappi-kicker">Mi rol en el proceso</p>
          <h2>${s.proposal.title}</h2>
          <p class="rappi-lead">${s.proposal.intro}</p>
          ${acts}
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Decisiones de diseño clave</p>
        <h2>Consistencia como estrategia de defensa.</h2>
        <div class="rappi-decisions">${decisions}</div>
      </div>

      <div class="rappi-impact">
        <div class="wrap">
          <p class="rappi-kicker">Impacto</p>
          <h2>Lo que ya se puede medir, y lo que falta cerrar.</h2>
          ${statRow(s.impact.stats, "rappi-kpis rappi-kpis--impact")}
          <p class="rappi-lead">${s.impact.body}</p>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Lecciones aprendidas</p>
        <ul class="rappi-lessons">${lessons}</ul>
      </div>

      <div class="wrap case-bio-wrap">
        ${bioCard()}
      </div>
    </div>
  `;
}

function actFigures(figures) {
  return `<div class="rappi-act-figures">${figures
    .map((f) =>
      f.video
        ? `<div class="rappi-act-figure rappi-act-figure--video">${phoneVideo(f.video)}</div>`
        : `
        <figure class="rappi-act-figure${f.wide ? " rappi-act-figure--wide" : ""}">
          <img src="${f.src}" alt="${f.caption}" loading="lazy" />
          <figcaption>${f.caption}</figcaption>
        </figure>
      `
    )
    .join("")}</div>`;
}

function renderRappiNupayCaseStudy(project) {
  const s = project.story;

  const contextChips = s.context
    .map(
      (c) => `
        <div class="rappi-chip">
          <span class="rappi-chip-label">${c.label}</span>
          <span class="rappi-chip-value">${c.value}</span>
        </div>
      `
    )
    .join("");

  const problemPoints = s.problem.points
    .map(
      (p, i) => `
        <div class="rappi-point">
          <span class="rappi-point-index">0${i + 1}</span>
          <div>
            <h4>${p.t}</h4>
            <p>${p.d}</p>
          </div>
        </div>
      `
    )
    .join("");

  const objectives = s.objectives
    .map(
      (o) => `
        <div class="rappi-objective">
          <span class="rappi-objective-n">${o.n}</span>
          <h4>${o.t}</h4>
          <p>${o.d}</p>
        </div>
      `
    )
    .join("");

  const acts = s.proposal.acts
    .map(
      (a) => `
        <div class="rappi-act">
          <p class="rappi-kicker">${a.kicker}</p>
          <h3>${a.title}</h3>
          <p class="rappi-act-body">${a.body}</p>
          ${
            a.phones
              ? `<div class="rappi-act-phones">${phoneRow(a.phones, a.title)}</div>`
              : actFigures(a.figures)
          }
        </div>
      `
    )
    .join("");

  const decisions = s.decisions
    .map(
      (d) => `
        <div class="rappi-decision">
          <span class="rappi-decision-law">${d.law}</span>
          <h4>${d.t}</h4>
          <p>${d.d}</p>
        </div>
      `
    )
    .join("");

  const connectorBody = s.connector.body.map((p) => `<p>${p}</p>`).join("");
  const teams = s.connector.teams
    .map((t) => `<li class="rappi-team">${t}</li>`)
    .join("");

  const challengeBody = s.technicalChallenge.body
    .map((p) => `<p>${p}</p>`)
    .join("");

  const lessons = s.lessons.map((l) => `<li>${l}</li>`).join("");

  return `
    <div class="detail rappi rappi--nu">
      <div class="wrap">
        <a class="back-link" href="#/proyectos">&larr; Todos los proyectos</a>
      </div>

      <div class="wrap rappi-hero">
        <p class="detail-tag">${projectCategories(project).join(" &middot; ")} &middot; ${project.year}</p>
        <h1>${project.title}</h1>
        <p class="rappi-tagline">${s.tagline}</p>
        <div class="rappi-chips">${contextChips}</div>
        <div class="rappi-stage rappi-stage--single">
          <div class="rappi-mockup">
            <img src="${s.heroMockup}" alt="${project.title}" loading="lazy" />
          </div>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El contexto</p>
        <h2>El método de pago que la mayoría ya usaba.</h2>
        ${statRow(s.problem.stats, "rappi-kpis")}
        <p class="rappi-lead">${s.problem.body}</p>
        <div class="rappi-points">${problemPoints}</div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El objetivo</p>
        <h2>Simple, completa y rápida, al mismo tiempo.</h2>
        <div class="rappi-objectives rappi-objectives--three">${objectives}</div>
      </div>

      <div class="wrap rappi-section rappi-constraint">
        <div class="rappi-constraint-body">
          <p class="rappi-kicker">${s.connector.kicker}</p>
          <h2>${s.connector.title}</h2>
          ${connectorBody}
        </div>
        <ul class="rappi-constraint-list rappi-teams">${teams}</ul>
      </div>

      <div class="rappi-acts-band">
        <div class="wrap">
          <p class="rappi-kicker">La propuesta</p>
          <h2>${s.proposal.title}</h2>
          <figure class="rappi-details-figure">
            <div class="rappi-mockup">
              <img src="${s.proposal.overview.src}" alt="Flujo de pago con NuPay en Rappi" loading="lazy" />
            </div>
            <figcaption>${s.proposal.overview.caption}</figcaption>
          </figure>
          ${acts}
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Decisiones de diseño clave</p>
        <h2>Menos fricción, decidida desde la arquitectura.</h2>
        <div class="rappi-decisions">${decisions}</div>
      </div>

      <div class="wrap rappi-section">
        <div class="rappi-constraint">
          <div class="rappi-constraint-body">
            <p class="rappi-kicker">${s.technicalChallenge.kicker}</p>
            <h2>${s.technicalChallenge.title}</h2>
            ${challengeBody}
          </div>
          ${checkList(s.technicalChallenge.outcomes, "rappi-constraint-list")}
        </div>
        ${actFigures(s.technicalChallenge.figures)}
      </div>

      <div class="rappi-impact">
        <div class="wrap">
          <p class="rappi-kicker">Impacto</p>
          <h2>Más pagos acreditados en el mercado que más lo necesitaba.</h2>
          ${statRow(s.impact.stats, "rappi-kpis rappi-kpis--impact")}
          <p class="rappi-stat-note">${s.impact.note}</p>
          <p class="rappi-lead">${s.impact.body}</p>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Lecciones aprendidas</p>
        <ul class="rappi-lessons">${lessons}</ul>
      </div>

      <div class="wrap case-bio-wrap">
        ${bioCard()}
      </div>
    </div>
  `;
}

const ICON_ARROW = {
  up: '<path d="m6 15 6-6 6 6"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  left: '<path d="m15 6-6 6 6 6"/>',
  right: '<path d="m9 6 6 6-6 6"/>',
};

function flowExplorer(flow) {
  const arrow = (dir, label) => `
    <button type="button" class="flow-btn flow-btn--${dir}" data-move="${dir}" aria-label="${label}">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">${ICON_ARROW[dir]}</svg>
    </button>
  `;
  return `
    <figure class="flow-explorer" data-w="${flow.width}" data-h="${flow.height}">
      <div class="flow-stage" tabindex="0" aria-label="Flujo actual de onboarding. Usa las flechas del teclado para moverte y las teclas + y − para hacer zoom.">
        <img class="flow-img" src="${flow.src}" width="${flow.width}" height="${flow.height}" alt="Flujo actual de onboarding de Rappi" draggable="false" loading="lazy" />
        <span class="flow-zoom-level" aria-live="polite">1x</span>
      </div>
      <div class="flow-pad">
        <div class="flow-dpad" role="group" aria-label="Mover el flujo">
          ${arrow("up", "Mover hacia arriba")}
          ${arrow("left", "Mover hacia la izquierda")}
          <button type="button" class="flow-btn flow-btn--center" data-reset aria-label="Volver al inicio del flujo">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>
          </button>
          ${arrow("right", "Mover hacia la derecha")}
          ${arrow("down", "Mover hacia abajo")}
        </div>
        <div class="flow-minimap" aria-hidden="true">
          <img src="${flow.src}" alt="" draggable="false" loading="lazy" />
          <span class="flow-minimap-view"></span>
        </div>
        <div class="flow-zoom" role="group" aria-label="Zoom">
          <button type="button" class="flow-btn flow-btn--round" data-zoom="out" aria-label="Alejar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><line x1="6" y1="12" x2="18" y2="12"/></svg>
          </button>
          <button type="button" class="flow-btn flow-btn--round flow-btn--primary" data-zoom="in" aria-label="Acercar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><line x1="12" y1="6" x2="12" y2="18"/><line x1="6" y1="12" x2="18" y2="12"/></svg>
          </button>
        </div>
      </div>
      <figcaption>${flow.caption}</figcaption>
    </figure>
  `;
}

let flowResizeHandler = null;

function setupFlowExplorer() {
  if (flowResizeHandler) {
    window.removeEventListener("resize", flowResizeHandler);
    flowResizeHandler = null;
  }
  const el = detailView.querySelector(".flow-explorer");
  if (!el) return;

  const stage = el.querySelector(".flow-stage");
  const img = el.querySelector(".flow-img");
  const levelLabel = el.querySelector(".flow-zoom-level");
  const minimap = el.querySelector(".flow-minimap");
  const view = el.querySelector(".flow-minimap-view");
  const W = Number(el.dataset.w);
  const H = Number(el.dataset.h);
  const MAX_SCALE = 1;
  const ZOOM_STEP = 1.5;
  const SPEED = 900; // px por segundo al mantener presionado

  let base = 1; // escala que muestra el alto completo
  let minScale = 1;
  let s = 1;
  let x = 0;
  let y = 0;

  const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);

  function bound() {
    const cw = stage.clientWidth;
    const ch = stage.clientHeight;
    const iw = W * s;
    const ih = H * s;
    x = iw <= cw ? (cw - iw) / 2 : clamp(x, cw - iw, 0);
    y = ih <= ch ? (ch - ih) / 2 : clamp(y, ch - ih, 0);
  }

  function render(animate) {
    bound();
    img.classList.toggle("is-animating", Boolean(animate));
    img.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
    levelLabel.textContent = `${(s / base).toFixed(1).replace(".0", "")}x`;
    el.querySelector('[data-zoom="out"]').disabled = s <= minScale + 1e-6;
    el.querySelector('[data-zoom="in"]').disabled = s >= MAX_SCALE - 1e-6;
    const iw = W * s;
    const ih = H * s;
    view.style.left = `${(-x / iw) * 100}%`;
    view.style.top = `${(-y / ih) * 100}%`;
    view.style.width = `${Math.min(stage.clientWidth / iw, 1) * 100}%`;
    view.style.height = `${Math.min(stage.clientHeight / ih, 1) * 100}%`;
  }

  function fit() {
    base = (stage.clientHeight || 1) / H;
    minScale = Math.min(stage.clientWidth / W, base);
  }

  function reset(animate) {
    fit();
    s = base;
    x = 0;
    y = 0;
    render(animate);
  }

  function zoomAt(factor, cx, cy) {
    const next = clamp(s * factor, minScale, MAX_SCALE);
    x = cx - ((cx - x) * next) / s;
    y = cy - ((cy - y) * next) / s;
    s = next;
    render(true);
  }

  function zoom(dir) {
    zoomAt(dir === "in" ? ZOOM_STEP : 1 / ZOOM_STEP, stage.clientWidth / 2, stage.clientHeight / 2);
  }

  const DIRS = { up: [0, 1], down: [0, -1], left: [1, 0], right: [-1, 0] };

  function step(dir) {
    const [dx, dy] = DIRS[dir];
    x += dx * stage.clientWidth * 0.3;
    y += dy * stage.clientHeight * 0.3;
    render(true);
  }

  // Mantener presionada una flecha del mando: movimiento continuo
  let holdDir = null;
  let holdStart = 0;
  let lastTime = 0;
  let moved = false;

  function holdLoop(t) {
    if (!holdDir) return;
    if (t - holdStart > 180) {
      const dt = (t - lastTime) / 1000;
      const [dx, dy] = DIRS[holdDir];
      x += dx * SPEED * dt;
      y += dy * SPEED * dt;
      moved = true;
      render(false);
    }
    lastTime = t;
    requestAnimationFrame(holdLoop);
  }

  el.querySelectorAll("[data-move]").forEach((btn) => {
    const dir = btn.dataset.move;
    btn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      holdDir = dir;
      moved = false;
      holdStart = lastTime = performance.now();
      requestAnimationFrame(holdLoop);
    });
    const release = () => {
      if (holdDir === dir && !moved) step(dir);
      if (holdDir === dir) holdDir = null;
    };
    btn.addEventListener("pointerup", release);
    btn.addEventListener("pointerleave", () => {
      if (holdDir === dir) holdDir = null;
    });
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        step(dir);
      }
    });
  });

  el.querySelectorAll("[data-zoom]").forEach((btn) =>
    btn.addEventListener("click", () => zoom(btn.dataset.zoom))
  );
  el.querySelector("[data-reset]").addEventListener("click", () => reset(true));

  // Arrastrar para mover
  let drag = null;
  stage.addEventListener("pointerdown", (e) => {
    drag = { px: e.clientX, py: e.clientY, x, y };
    stage.setPointerCapture(e.pointerId);
    stage.classList.add("is-dragging");
  });
  stage.addEventListener("pointermove", (e) => {
    if (!drag) return;
    x = drag.x + (e.clientX - drag.px);
    y = drag.y + (e.clientY - drag.py);
    render(false);
  });
  const endDrag = () => {
    drag = null;
    stage.classList.remove("is-dragging");
  };
  stage.addEventListener("pointerup", endDrag);
  stage.addEventListener("pointercancel", endDrag);

  // Zoom con pellizco del trackpad (ctrl + rueda), sin secuestrar el scroll de la página
  stage.addEventListener(
    "wheel",
    (e) => {
      if (!e.ctrlKey) return;
      e.preventDefault();
      const r = stage.getBoundingClientRect();
      zoomAt(e.deltaY < 0 ? 1.15 : 1 / 1.15, e.clientX - r.left, e.clientY - r.top);
    },
    { passive: false }
  );

  stage.addEventListener("keydown", (e) => {
    const keys = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right" };
    if (keys[e.key]) {
      e.preventDefault();
      step(keys[e.key]);
    } else if (e.key === "+" || e.key === "=") {
      e.preventDefault();
      zoom("in");
    } else if (e.key === "-" || e.key === "_") {
      e.preventDefault();
      zoom("out");
    } else if (e.key === "0") {
      reset(true);
    }
  });

  // Clic en el minimapa: centrar esa zona
  minimap.addEventListener("click", (e) => {
    const r = minimap.getBoundingClientRect();
    x = stage.clientWidth / 2 - ((e.clientX - r.left) / r.width) * W * s;
    y = stage.clientHeight / 2 - ((e.clientY - r.top) / r.height) * H * s;
    render(true);
  });

  flowResizeHandler = () => {
    const prevBase = base;
    fit();
    s = clamp((s / prevBase) * base, minScale, MAX_SCALE);
    render(false);
  };
  window.addEventListener("resize", flowResizeHandler);

  reset(false);
}

function renderRappiJourneyCaseStudy(project) {
  const s = project.story;

  const contextChips = s.context
    .map(
      (c) => `
        <div class="rappi-chip">
          <span class="rappi-chip-label">${c.label}</span>
          <span class="rappi-chip-value">${c.value}</span>
        </div>
      `
    )
    .join("");

  const cards = (items, className) =>
    `<div class="rappi-objectives ${className || ""}">${items
      .map(
        (o) => `
          <div class="rappi-objective">
            ${o.n || o.kicker ? `<span class="rappi-objective-n">${o.n || o.kicker}</span>` : ""}
            <h4>${o.t}</h4>
            <p>${o.d}</p>
          </div>
        `
      )
      .join("")}</div>`;

  const funnel = s.problem.funnel
    .map((f) => `<li class="rj-funnel-stage">${f}</li>`)
    .join("");

  const problemPoints = s.problem.points
    .map(
      (p, i) => `
        <div class="rappi-point">
          <span class="rappi-point-index">0${i + 1}</span>
          <div>
            <h4>${p.t}</h4>
            <p>${p.d}</p>
          </div>
        </div>
      `
    )
    .join("");

  const steps = s.proposal.steps
    .map((st, i) => `<li><span>0${i + 1}</span>${st}</li>`)
    .join("");

  const acts = s.proposal.acts
    .map(
      (a) => `
        <div class="rappi-act">
          <p class="rappi-kicker">${a.kicker}</p>
          <h3>${a.title}</h3>
          <p class="rappi-act-body">${a.body}</p>
          ${a.figures ? actFigures(a.figures) : ""}
          ${a.phones ? `<div class="rappi-act-phones">${phoneRow(a.phones, a.title)}</div>` : ""}
        </div>
      `
    )
    .join("");

  const decisions = s.decisions
    .map(
      (d) => `
        <div class="rappi-decision">
          <span class="rappi-decision-law">${d.law}</span>
          <h4>${d.t}</h4>
          <p>${d.d}</p>
        </div>
      `
    )
    .join("");

  const challengeBody = s.challenge.body.map((p) => `<p>${p}</p>`).join("");
  const needs = s.challenge.needs
    .map(
      (n) => `
        <li class="rappi-team rj-need">
          <span class="rj-need-team">${n.team}</span>
          <span class="rj-need-what">${n.need}</span>
        </li>
      `
    )
    .join("");

  const lessons = s.lessons.map((l) => `<li>${l}</li>`).join("");

  return `
    <div class="detail rappi rappi--journey">
      <div class="wrap">
        <a class="back-link" href="#/proyectos">&larr; Todos los proyectos</a>
      </div>

      <div class="wrap rappi-hero">
        <p class="detail-tag">${projectCategories(project).join(" &middot; ")} &middot; ${project.year}</p>
        <h1>${project.title}</h1>
        <p class="rappi-tagline">${s.tagline}</p>
        <div class="rappi-chips">${contextChips}</div>
        <div class="rappi-stage rappi-stage--single">
          <div class="rappi-mockup">
            <img src="${s.heroMockup}" alt="${project.title}" loading="lazy" />
          </div>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El problema</p>
        <h2>Un embudo diseñado para capturar datos, no para convertir.</h2>
        <p class="rappi-lead">${s.problem.body}</p>
        <ol class="rj-funnel">${funnel}</ol>
        <div class="rappi-points rj-points">${problemPoints}</div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El diagnóstico</p>
        <h2>Así era el onboarding antes de rediseñarlo.</h2>
        <p class="rappi-lead">Antes de diseñar una sola pantalla mapeamos el flujo real, de punta a punta. Recórrelo con el mando, arrastrando o con las flechas del teclado.</p>
        ${flowExplorer(s.currentFlow)}
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El objetivo</p>
        <h2>Menos fricción, más intención, un nuevo lenguaje.</h2>
        ${cards(s.objectives, "rappi-objectives--three")}
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Research</p>
        <h2>«Qué nos está pasando» + «qué hace bien el mercado».</h2>
        <p class="rappi-lead">${s.research.body}</p>
        ${cards(s.research.sources)}
        <h3 class="rj-subhead">No todos los usuarios nuevos llegan con la misma intención</h3>
        ${cards(s.research.segments)}
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Mi rol en el proceso</p>
        <h2>${s.role.title}</h2>
        ${cards(s.role.fronts)}
        <figure class="rappi-board rj-exploration">
          <img src="${s.role.exploration.src}" alt="Dirección visual explorada y descartada" loading="lazy" />
          <figcaption>${s.role.exploration.caption}</figcaption>
        </figure>
      </div>

      <div class="rappi-acts-band">
        <div class="wrap">
          <p class="rappi-kicker">La propuesta</p>
          <h2>${s.proposal.title}</h2>
          <ol class="rj-steps">${steps}</ol>
          ${acts}
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Decisiones de diseño clave</p>
        <h2>Cada decisión, ligada a un problema del diagnóstico.</h2>
        <div class="rappi-decisions">${decisions}</div>
      </div>

      <div class="wrap rappi-section rappi-constraint">
        <div class="rappi-constraint-body">
          <p class="rappi-kicker">${s.challenge.kicker}</p>
          <h2>${s.challenge.title}</h2>
          ${challengeBody}
        </div>
        <ul class="rappi-constraint-list rappi-teams">${needs}</ul>
      </div>

      <div class="rappi-impact">
        <div class="wrap">
          <p class="rappi-kicker">Impacto</p>
          <h2>Un impacto de producto y uno de sistema.</h2>
          ${cards(s.impact.cards)}
          <p class="rappi-stat-note">${s.impact.note}</p>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Lecciones aprendidas</p>
        <ul class="rappi-lessons">${lessons}</ul>
      </div>

      <div class="wrap case-bio-wrap">
        ${bioCard()}
      </div>
    </div>
  `;
}

function phoneVideo(v) {
  return `
    <figure class="case-video">
      <div class="phone case-video-phone">
        <video src="${v.src}" poster="${v.poster}" muted loop playsinline preload="metadata" aria-label="${v.caption}"></video>
        <button type="button" class="case-video-toggle" aria-label="Pausar video">
          <svg class="icon-pause" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
          <svg class="icon-play" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>
        </button>
      </div>
      <figcaption>${v.caption}</figcaption>
    </figure>
  `;
}

function setupCaseVideos() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  detailView.querySelectorAll(".case-video").forEach((fig) => {
    const video = fig.querySelector("video");
    const btn = fig.querySelector(".case-video-toggle");
    const sync = () => {
      fig.classList.toggle("is-paused", video.paused);
      btn.setAttribute("aria-label", video.paused ? "Reproducir video" : "Pausar video");
    };
    btn.addEventListener("click", () => (video.paused ? video.play() : video.pause()));
    video.addEventListener("play", sync);
    video.addEventListener("pause", sync);
    sync();
    if (reduce) return;
    // Solo se reproduce mientras está visible
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.35 });
    io.observe(fig);
  });
}

function renderRappiPillsCaseStudy(project) {
  const s = project.story;

  const contextChips = s.context
    .map(
      (c) => `
        <div class="rappi-chip">
          <span class="rappi-chip-label">${c.label}</span>
          <span class="rappi-chip-value">${c.value}</span>
        </div>
      `
    )
    .join("");

  const problemPoints = s.problem.points
    .map(
      (p, i) => `
        <div class="rappi-point">
          <span class="rappi-point-index">0${i + 1}</span>
          <div>
            <h4>${p.t}</h4>
            <p>${p.d}</p>
          </div>
        </div>
      `
    )
    .join("");

  const cards = (items, className) =>
    `<div class="rappi-objectives ${className || ""}">${items
      .map(
        (o) => `
          <div class="rappi-objective">
            <span class="rappi-objective-n">${o.n}</span>
            <h4>${o.t}</h4>
            <p>${o.d}</p>
          </div>
        `
      )
      .join("")}</div>`;

  const types = s.research.types.map((t) => `<li>${t}</li>`).join("");

  const acts = s.proposal.acts
    .map(
      (a) => `
        <div class="rappi-act">
          <p class="rappi-kicker">${a.kicker}</p>
          <h3>${a.title}</h3>
          <p class="rappi-act-body">${a.body}</p>
          ${a.figures ? actFigures(a.figures) : ""}
          ${a.phones ? `<div class="rappi-act-phones">${phoneRow(a.phones, a.title)}</div>` : ""}
        </div>
      `
    )
    .join("");

  const decisions = s.decisions
    .map(
      (d) => `
        <div class="rappi-decision">
          <span class="rappi-decision-law">${d.law}</span>
          <h4>${d.t}</h4>
          <p>${d.d}</p>
        </div>
      `
    )
    .join("");

  const connectorBody = s.connector.body.map((p) => `<p>${p}</p>`).join("");
  const teams = s.connector.teams.map((t) => `<li class="rappi-team">${t}</li>`).join("");
  const challengeBody = s.challenge.body.map((p) => `<p>${p}</p>`).join("");
  const needs = s.challenge.needs
    .map(
      (n) => `
        <li class="rappi-team rj-need">
          <span class="rj-need-team">${n.team}</span>
          <span class="rj-need-what">${n.need}</span>
        </li>
      `
    )
    .join("");
  const funnel = s.impact.funnel
    .map((f, i) => `<li><span>0${i + 1}</span>${f}</li>`)
    .join("");
  const lessons = s.lessons.map((l) => `<li>${l}</li>`).join("");

  return `
    <div class="detail rappi rappi--pills">
      <div class="wrap">
        <a class="back-link" href="#/proyectos">&larr; Todos los proyectos</a>
      </div>

      <div class="wrap rappi-hero">
        <p class="detail-tag">${projectCategories(project).join(" &middot; ")} &middot; ${project.year}</p>
        <h1>${project.title}</h1>
        <p class="rappi-tagline">${s.tagline}</p>
        <div class="rappi-chips">${contextChips}</div>
        <div class="rappi-stage rappi-stage--single">
          <div class="rappi-mockup">
            <img src="${s.heroMockup}" alt="${project.title}" loading="lazy" />
          </div>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El problema</p>
        <h2>Beneficios que existían, pero nadie veía a tiempo.</h2>
        <p class="rappi-lead">${s.problem.body}</p>
        <div class="rappi-points">${problemPoints}</div>
        <blockquote class="rappi-quote">${s.problem.hypothesis}</blockquote>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El objetivo</p>
        <h2>Visibilidad, activación y escala.</h2>
        ${cards(s.objectives, "rappi-objectives--three")}
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Research</p>
        <h2>Todos los beneficios reales del negocio, no solo los comunes.</h2>
        <p class="rappi-lead">${s.research.body}</p>
        <ul class="rp-types">${types}</ul>
      </div>

      <div class="rappi-acts-band">
        <div class="wrap">
          <p class="rappi-kicker">La propuesta</p>
          <h2>${s.proposal.title}</h2>
          <div class="rp-overview">
            ${phoneVideo(s.proposal.video)}
            ${cards(s.proposal.levels, "rp-levels")}
          </div>
          ${acts}
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Decisiones de diseño clave</p>
        <h2>Un componente que decide solo, con reglas claras.</h2>
        <div class="rappi-decisions">${decisions}</div>
      </div>

      <div class="wrap rappi-section rappi-constraint">
        <div class="rappi-constraint-body">
          <p class="rappi-kicker">${s.connector.kicker}</p>
          <h2>${s.connector.title}</h2>
          ${connectorBody}
        </div>
        <ul class="rappi-constraint-list rappi-teams">${teams}</ul>
      </div>

      <div class="wrap rappi-section rappi-constraint">
        <div class="rappi-constraint-body">
          <p class="rappi-kicker">${s.challenge.kicker}</p>
          <h2>${s.challenge.title}</h2>
          ${challengeBody}
        </div>
        <ul class="rappi-constraint-list rappi-teams">${needs}</ul>
      </div>

      <div class="rappi-impact">
        <div class="wrap">
          <p class="rappi-kicker">Impacto</p>
          <h2>En producción, y aceptado por la gran mayoría.</h2>
          ${statRow([s.impact.stat], "rappi-kpis rappi-kpis--impact rp-kpi")}
          <ol class="rj-steps rp-funnel">${funnel}</ol>
          <p class="rappi-lead">${s.impact.body}</p>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Lecciones aprendidas</p>
        <ul class="rappi-lessons">${lessons}</ul>
      </div>

      <div class="wrap case-bio-wrap">
        ${bioCard()}
      </div>
    </div>
  `;
}

function caseTitle(project) {
  if (!project.connector) return `<h1>${project.title}</h1>`;
  const c = project.connector;
  return `
    <div class="case-title-row">
      <h1>${project.title}</h1>
      <a class="glass-connector" href="${c.href}">
        <span>${c.label}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
      </a>
    </div>
  `;
}

function renderRappiPostOrderCaseStudy(project) {
  const s = project.story;

  const contextChips = s.context
    .map(
      (c) => `
        <div class="rappi-chip">
          <span class="rappi-chip-label">${c.label}</span>
          <span class="rappi-chip-value">${c.value}</span>
        </div>
      `
    )
    .join("");

  const problemPoints = s.problem.points
    .map(
      (p, i) => `
        <div class="rappi-point">
          <span class="rappi-point-index">0${i + 1}</span>
          <div>
            <h4>${p.t}</h4>
            <p>${p.d}</p>
          </div>
        </div>
      `
    )
    .join("");

  const cards = (items, className) =>
    `<div class="rappi-objectives ${className || ""}">${items
      .map(
        (o) => `
          <div class="rappi-objective">
            <span class="rappi-objective-n">${o.n}</span>
            <h4>${o.t}</h4>
            <p>${o.d}</p>
          </div>
        `
      )
      .join("")}</div>`;

  const screenFigures = (screens) =>
    `<div class="rappi-act-figures rappi-act-figures--even">${screens
      .map(
        (f) => `
          <figure class="rappi-act-figure rappi-act-figure--screen">
            <img src="${f.src}" alt="${f.caption}" loading="lazy" />
            <figcaption>${f.caption}</figcaption>
          </figure>
        `
      )
      .join("")}</div>`;

  const acts = s.proposal.acts
    .map(
      (a) => `
        <div class="rappi-act">
          <p class="rappi-kicker">${a.kicker}</p>
          <h3>${a.title}</h3>
          <p class="rappi-act-body">${a.body}</p>
          ${a.figures ? (a.screens ? screenFigures(a.figures) : actFigures(a.figures)) : ""}
          ${a.phones ? `<div class="rappi-act-phones">${phoneRow(a.phones, a.title)}</div>` : ""}
          ${a.screens ? screenFigures(a.screens) : ""}
        </div>
      `
    )
    .join("");

  const decisions = s.decisions
    .map(
      (d) => `
        <div class="rappi-decision">
          <span class="rappi-decision-law">${d.law}</span>
          <h4>${d.t}</h4>
          <p>${d.d}</p>
        </div>
      `
    )
    .join("");

  const roleBody = s.role.body.map((p) => `<p>${p}</p>`).join("");
  const challengeBody = s.challenge.body.map((p) => `<p>${p}</p>`).join("");
  const lessons = s.lessons.map((l) => `<li>${l}</li>`).join("");

  return `
    <div class="detail rappi rappi--postorder">
      <div class="wrap">
        <a class="back-link" href="#/proyectos">&larr; Todos los proyectos</a>
      </div>

      <div class="wrap rappi-hero">
        <p class="detail-tag">${projectCategories(project).join(" &middot; ")} &middot; ${project.year}</p>
        ${caseTitle(project)}
        <p class="rappi-tagline">${s.tagline}</p>
        <div class="rappi-chips">${contextChips}</div>
        <div class="rappi-stage rappi-stage--single">
          <div class="rappi-mockup">
            <img src="${s.heroMockup}" alt="${project.title}" loading="lazy" />
          </div>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El problema</p>
        <h2>Un pedido entregado, pero un usuario con dudas.</h2>
        <p class="rappi-lead">${s.problem.body}</p>
        <div class="rappi-points">${problemPoints}</div>
        <blockquote class="rappi-quote">${s.problem.quote}</blockquote>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El objetivo</p>
        <h2>Seis respuestas en una sola pantalla.</h2>
        ${cards(s.objectives, "rappi-objectives--three")}
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Research</p>
        <h2>Resolver preguntas reales, no «mejorar una pantalla».</h2>
        <p class="rappi-lead">${s.research.body}</p>
      </div>

      <div class="rappi-acts-band">
        <div class="wrap">
          <p class="rappi-kicker">La clave del diseño</p>
          <h2>${s.levels.title}</h2>
          <div class="rp-overview">
            ${phoneVideo(s.levels.video)}
            <div>
              ${cards(s.levels.items, "rp-levels")}
              <p class="rappi-stat-note">${s.levels.note}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">La propuesta</p>
        <h2>${s.proposal.title}</h2>
        ${acts}
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Decisiones de diseño clave</p>
        <h2>Certeza primero, herramientas después.</h2>
        <div class="rappi-decisions">${decisions}</div>
      </div>

      <div class="wrap rappi-section rappi-constraint">
        <div class="rappi-constraint-body">
          <p class="rappi-kicker">${s.role.kicker}</p>
          <h2>${s.role.title}</h2>
          ${roleBody}
        </div>
        ${checkList(s.role.items, "rappi-constraint-list")}
      </div>

      <div class="wrap rappi-section rappi-constraint">
        <div class="rappi-constraint-body">
          <p class="rappi-kicker">${s.challenge.kicker}</p>
          <h2>${s.challenge.title}</h2>
          ${challengeBody}
        </div>
        ${checkList(s.challenge.items, "rappi-constraint-list")}
      </div>

      <div class="rappi-impact">
        <div class="wrap">
          <p class="rappi-kicker">Impacto</p>
          <h2>Una forma verificable de saber qué pasó con el pedido.</h2>
          ${cards(s.impact.cards)}
          <p class="rappi-stat-note">${s.impact.note}</p>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Lecciones aprendidas</p>
        <ul class="rappi-lessons">${lessons}</ul>
      </div>

      <div class="wrap case-bio-wrap">
        ${bioCard()}
      </div>
    </div>
  `;
}

function laptopVideo(v) {
  return `
    <figure class="case-video case-video--laptop">
      <div class="case-video-laptop">
        <video src="${v.src}" poster="${v.poster}" muted loop playsinline preload="metadata" aria-label="${v.caption}"></video>
        <button type="button" class="case-video-toggle" aria-label="Pausar video">
          <svg class="icon-pause" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
          <svg class="icon-play" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>
        </button>
      </div>
      <figcaption>${v.caption}</figcaption>
    </figure>
  `;
}

function renderTratoCaseStudy(project) {
  const s = project.story;

  const contextChips = s.context
    .map(
      (c) => `
        <div class="rappi-chip">
          <span class="rappi-chip-label">${c.label}</span>
          <span class="rappi-chip-value">${c.value}</span>
        </div>
      `
    )
    .join("");

  const problemPoints = s.problem.points
    .map(
      (p, i) => `
        <div class="rappi-point">
          <span class="rappi-point-index">0${i + 1}</span>
          <div>
            <h4>${p.t}</h4>
            <p>${p.d}</p>
          </div>
        </div>
      `
    )
    .join("");

  const objectives = s.objectives
    .map(
      (o) => `
        <div class="rappi-objective">
          <span class="rappi-objective-n">${o.n}</span>
          <h4>${o.t}</h4>
          <p>${o.d}</p>
        </div>
      `
    )
    .join("");

  const screenFigures = (figures) =>
    `<div class="rappi-act-figures rappi-act-figures--even">${figures
      .map(
        (f) => `
          <figure class="rappi-act-figure rappi-act-figure--screen">
            <img src="${f.src}" alt="${f.caption}" loading="lazy" />
            <figcaption>${f.caption}</figcaption>
          </figure>
        `
      )
      .join("")}</div>`;

  const acts = s.proposal.acts
    .map(
      (a) => `
        <div class="rappi-act">
          <p class="rappi-kicker">${a.kicker}</p>
          <h3>${a.title}</h3>
          <p class="rappi-act-body">${a.body}</p>
          ${
            a.mockup
              ? `<figure class="trato-mockup">
                  <img src="${a.mockup.src}" alt="${a.mockup.caption}" loading="lazy" />
                  <figcaption>${a.mockup.caption}</figcaption>
                </figure>`
              : ""
          }
          ${screenFigures(a.figures)}
        </div>
      `
    )
    .join("");

  const decisions = s.decisions
    .map(
      (d) => `
        <div class="rappi-decision">
          <span class="rappi-decision-law">${d.law}</span>
          <h4>${d.t}</h4>
          <p>${d.d}</p>
        </div>
      `
    )
    .join("");

  const quotes = s.research.quotes.map((q) => `<p class="trato-quote">${q}</p>`).join("");
  const pmBody = s.pm.body.map((p) => `<p>${p}</p>`).join("");
  const challengeBody = s.challenge.body.map((p) => `<p>${p}</p>`).join("");
  const lessons = s.lessons.map((l) => `<li>${l}</li>`).join("");

  return `
    <div class="detail rappi rappi--trato">
      <div class="wrap">
        <a class="back-link" href="#/proyectos">&larr; Todos los proyectos</a>
      </div>

      <div class="wrap rappi-hero">
        <p class="detail-tag">${projectCategories(project).join(" &middot; ")} &middot; ${project.year}</p>
        ${caseTitle(project)}
        <p class="rappi-tagline">${s.tagline}</p>
        <div class="rappi-chips">${contextChips}</div>
        <div class="trato-hero-video">${laptopVideo(s.video)}</div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El problema</p>
        <h2>Un PSP propio, apalancado en lo que Rappi ya tenía.</h2>
        <p class="rappi-lead">${s.problem.body}</p>
        <div class="rappi-points">${problemPoints}</div>
        <blockquote class="rappi-quote">${s.problem.quote}</blockquote>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El objetivo</p>
        <h2>Construir, lanzar y validar con comercios reales.</h2>
        <div class="rappi-objectives rappi-objectives--three">${objectives}</div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Research</p>
        <h2>El onboarding era el tramo con más ansiedad del journey.</h2>
        <p class="rappi-lead">${s.research.body}</p>
        <div class="rappi-baseline">
          <span class="rappi-stat-value">${s.research.baseline.value}</span>
          <p class="rappi-stat-label">${s.research.baseline.label}</p>
        </div>
        <div class="trato-quotes">${quotes}</div>
        ${zoomBoard(s.research.board, "Customer Journey Map del merchant en Trato")}
      </div>

      <div class="rappi-acts-band">
        <div class="wrap">
          <div class="rappi-constraint">
            <div class="rappi-constraint-body">
              <p class="rappi-kicker">${s.pm.kicker}</p>
              <h2>${s.pm.title}</h2>
              ${pmBody}
            </div>
            ${checkList(s.pm.items, "rappi-constraint-list")}
          </div>
          ${s.pm.boards.map((b) => zoomBoard(b, b.caption)).join("")}
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Mi rol como Product Designer</p>
        <h2>${s.proposal.title}</h2>
        <p class="rappi-lead">${s.proposal.intro}</p>
        ${acts}
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Decisiones de diseño clave</p>
        <h2>Simplificar la regulación sin esconderla.</h2>
        <div class="rappi-decisions">${decisions}</div>
      </div>

      <div class="wrap rappi-section rappi-constraint">
        <div class="rappi-constraint-body">
          <p class="rappi-kicker">${s.challenge.kicker}</p>
          <h2>${s.challenge.title}</h2>
          ${challengeBody}
        </div>
        ${checkList(s.challenge.items, "rappi-constraint-list")}
      </div>

      <div class="rappi-impact">
        <div class="wrap">
          <p class="rappi-kicker">Impacto</p>
          <h2>Se construyó, se lanzó y consiguió sus primeros clientes.</h2>
          ${statRow(s.impact.stats, "rappi-kpis rappi-kpis--impact")}
          <p class="rappi-lead">${s.impact.body}</p>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Lecciones aprendidas</p>
        <ul class="rappi-lessons">${lessons}</ul>
      </div>

      <div class="wrap case-bio-wrap">
        ${bioCard()}
      </div>
    </div>
  `;
}

function renderTratoBrandCaseStudy(project) {
  const b = project.brand;

  const contextChips = b.context
    .map(
      (c) => `
        <div class="rappi-chip">
          <span class="rappi-chip-label">${c.label}</span>
          <span class="rappi-chip-value">${c.value}</span>
        </div>
      `
    )
    .join("");

  const namingBody = b.naming.body.map((p) => `<p class="rappi-lead">${p}</p>`).join("");

  const pillars = b.pillars
    .map(
      (o) => `
        <div class="rappi-objective">
          <span class="rappi-objective-n">${o.n}</span>
          <h4>${o.t}</h4>
          <p>${o.d}</p>
        </div>
      `
    )
    .join("");

  const constructionFigures = b.construction.figures
    .map(
      (f) => `
        <figure class="tb-figure">
          <img src="${f.src}" alt="${f.caption}" loading="lazy" />
          <figcaption>${f.caption}</figcaption>
        </figure>
      `
    )
    .join("");

  const swatches = b.palette.colors
    .map(
      (c) => `
        <div class="tb-swatch">
          <div class="tb-swatch-color" style="background:${c.hex}"></div>
          <span class="tb-swatch-name">${c.name}</span>
          <span class="tb-swatch-hex">${c.hex}</span>
          <span class="tb-swatch-desc">${c.desc}</span>
        </div>
      `
    )
    .join("");

  const typeBody = b.typography.body.map((p) => `<p>${p}</p>`).join("");

  return `
    <div class="detail rappi rappi--trato tb">
      <div class="wrap">
        <a class="back-link" href="#/proyectos">&larr; Todos los proyectos</a>
      </div>

      <div class="wrap rappi-hero">
        <p class="detail-tag">${projectCategories(project).join(" &middot; ")} &middot; ${project.year}</p>
        ${caseTitle(project)}
        <p class="rappi-tagline">${b.tagline}</p>
        <div class="rappi-chips">${contextChips}</div>
        <figure class="tb-hero">
          <img src="${b.hero.src}" alt="${b.hero.alt}" />
        </figure>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Por qué «Trato»</p>
        <h2>${b.naming.heading}</h2>
        <div class="tb-naming">
          <div>${namingBody}</div>
          <p class="tb-word" aria-hidden="true"><span>${b.naming.word.pre}</span>${b.naming.word.main}</p>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El símbolo</p>
        <h2>Un check, no un ícono genérico.</h2>
        <div class="rappi-objectives tb-pillars">${pillars}</div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Construcción del logo</p>
        <h2>${b.construction.heading}</h2>
        <p class="rappi-lead">${b.construction.body}</p>
        <div class="tb-figures">${constructionFigures}</div>
        ${checkList(b.construction.rules, "rappi-constraint-list tb-rules")}
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Paleta de color</p>
        <h2>${b.palette.heading}</h2>
        <p class="rappi-lead">${b.palette.body}</p>
        <div class="tb-palette">${swatches}</div>
      </div>

      <div class="wrap rappi-section rappi-constraint">
        <div class="rappi-constraint-body">
          <p class="rappi-kicker">Tipografía</p>
          <h2>${b.typography.heading}</h2>
          ${typeBody}
        </div>
        <figure class="tb-type">
          <img src="${project.cardLogo}" alt="Wordmark de Trato en blanco" loading="lazy" />
          <figcaption>Palo seco geométrico, de trazo grueso</figcaption>
        </figure>
      </div>

      <div class="wrap tb-closing">
        <blockquote class="rappi-quote">${b.closing}</blockquote>
      </div>

      <div class="wrap case-bio-wrap">
        ${bioCard()}
      </div>
    </div>
  `;
}

const MESSA_SCREENS = "projects/12.%20messa%20app/pantallas/";

function renderMessaCaseStudy(project) {
  const s = project.story;
  const screens = (names) => names.map((n) => `${MESSA_SCREENS}${n}.jpg`);

  const contextChips = s.context
    .map(
      (c) => `
        <div class="rappi-chip">
          <span class="rappi-chip-label">${c.label}</span>
          <span class="rappi-chip-value">${c.value}</span>
        </div>
      `
    )
    .join("");

  const problemPoints = s.problem.points
    .map(
      (p, i) => `
        <div class="rappi-point">
          <span class="rappi-point-index">0${i + 1}</span>
          <div>
            <h4>${p.t}</h4>
            <p>${p.d}</p>
          </div>
        </div>
      `
    )
    .join("");

  const cards = (items, className) =>
    `<div class="rappi-objectives ${className || ""}">${items
      .map(
        (o) => `
          <div class="rappi-objective">
            <span class="rappi-objective-n">${o.n}</span>
            <h4>${o.t}</h4>
            <p>${o.d}</p>
          </div>
        `
      )
      .join("")}</div>`;

  const topics = s.research.topics.map((t) => `<li>${t}</li>`).join("");

  const logos = s.brand.logos
    .map(
      (l) => `
        <figure class="messa-logo messa-logo--${l.tone}">
          <img src="${l.src}" alt="${l.alt}" loading="lazy" />
        </figure>
      `
    )
    .join("");

  const swatches = s.brand.colors
    .map(
      (c) => `
        <div class="tb-swatch">
          <div class="tb-swatch-color" style="background:${c.hex}"></div>
          <span class="tb-swatch-name">${c.name}</span>
          <span class="tb-swatch-hex">${c.hex}</span>
          <span class="tb-swatch-desc">${c.desc}</span>
        </div>
      `
    )
    .join("");

  // Páginas completas (pantallas largas con scroll), escaladas para verse enteras
  const pages = (items) =>
    `<div class="messa-pages">${items
      .map(
        (p) => `
          <figure class="messa-page">
            <img src="${MESSA_SCREENS}${p.src}.jpg" alt="${p.caption}" loading="lazy" />
            <figcaption>${p.caption}</figcaption>
          </figure>
        `
      )
      .join("")}</div>`;

  const acts = (list) =>
    list
      .map(
        (a) => `
          <div class="rappi-act">
            <p class="rappi-kicker">${a.kicker}</p>
            <h3>${a.title}</h3>
            <p class="rappi-act-body">${a.body}</p>
            <div class="rappi-act-phones">${phoneRow(screens(a.phones), a.title)}</div>
            ${a.pages ? pages(a.pages) : ""}
          </div>
        `
      )
      .join("");

  const decisions = s.decisions
    .map(
      (d) => `
        <div class="rappi-decision">
          <span class="rappi-decision-law">${d.law}</span>
          <h4>${d.t}</h4>
          <p>${d.d}</p>
        </div>
      `
    )
    .join("");

  const challengeBody = s.challenge.body.map((p) => `<p>${p}</p>`).join("");
  const lessons = s.lessons.map((l) => `<li>${l}</li>`).join("");

  return `
    <div class="detail rappi rappi--messa">
      <div class="wrap">
        <a class="back-link" href="#/proyectos">&larr; Todos los proyectos</a>
      </div>

      <div class="wrap rappi-hero">
        <p class="detail-tag">${projectCategories(project).join(" &middot; ")} &middot; ${project.year}</p>
        ${caseTitle(project)}
        <p class="rappi-tagline">${s.tagline}</p>
        <div class="rappi-chips">${contextChips}</div>
        <div class="messa-stage">
          <div class="messa-stage-side">${phone(s.hero.left.src, s.hero.left.alt)}</div>
          ${phoneVideo(s.video)}
          <div class="messa-stage-side">${phone(s.hero.right.src, s.hero.right.alt)}</div>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El problema</p>
        <h2>Zonas con demanda, pero sin quién las atendiera.</h2>
        <p class="rappi-lead">${s.problem.body}</p>
        <div class="rappi-points">${problemPoints}</div>
        <blockquote class="rappi-quote">${s.problem.quote}</blockquote>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El objetivo</p>
        <h2>Diseñar, construir y validar un negocio completo.</h2>
        ${cards(s.objectives, "rappi-objectives--three")}
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Research</p>
        <h2>Antes de diseñar una sola pantalla, entender el terreno.</h2>
        <p class="rappi-lead">${s.research.body}</p>
        <ul class="rp-types">${topics}</ul>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Mi rol en el proceso</p>
        <h2>Cofundador, Product Manager y Product Designer.</h2>
        ${cards(s.roles, "messa-roles")}
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Branding</p>
        <h2>Una marca para destacar donde nadie la conocía.</h2>
        <p class="rappi-lead">${s.brand.body}</p>
        <div class="messa-logos">${logos}</div>
        <div class="tb-palette">${swatches}</div>
        <p class="rappi-lead messa-type">${s.brand.type}</p>
      </div>

      <div class="rappi-acts-band">
        <div class="wrap">
          <p class="rappi-kicker">La propuesta · App del cliente</p>
          <h2>${s.customer.title}</h2>
          <p class="rappi-lead">${s.customer.intro}</p>
          ${acts(s.customer.acts)}
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">La propuesta · App del repartidor</p>
        <h2>${s.courier.title}</h2>
        <p class="rappi-lead">${s.courier.intro}</p>
        ${acts(s.courier.acts)}
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Decisiones de diseño y principios aplicados</p>
        <h2>Lo conocido, para un producto que nadie conocía.</h2>
        <div class="rappi-decisions">${decisions}</div>
      </div>

      <div class="wrap rappi-section rappi-constraint">
        <div class="rappi-constraint-body">
          <p class="rappi-kicker">El reto</p>
          <h2>${s.challenge.title}</h2>
          ${challengeBody}
        </div>
        ${checkList(s.challenge.items, "rappi-constraint-list")}
      </div>

      <div class="rappi-impact">
        <div class="wrap">
          <p class="rappi-kicker">Impacto</p>
          <h2>A producción, y con pedidos reales.</h2>
          ${statRow(s.impact.stats, "rappi-kpis rappi-kpis--impact")}
          <p class="rappi-lead">${s.impact.body}</p>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Lecciones aprendidas</p>
        <ul class="rappi-lessons">${lessons}</ul>
        <p class="messa-team">${s.team}</p>
      </div>

      <div class="wrap case-bio-wrap">
        ${bioCard()}
      </div>
    </div>
  `;
}

const DS_COMPONENTS_PATH ="projects/10.%20Rappi%20DS%20post%20order/componentes/";

function componentExplorer(explorer) {
  const tabs = explorer.components
    .map(
      (c, i) => `
        <button type="button" class="cx-tab${i === 0 ? " is-active" : ""}" role="tab" aria-selected="${i === 0}" data-comp="${c.key}">
          ${c.name}
          <span class="cx-tab-count">${c.cases.length}</span>
        </button>
      `
    )
    .join("");
  const panels = explorer.components
    .map(
      (c, i) => `
        <div class="cx-panel" data-panel="${c.key}"${i === 0 ? "" : " hidden"}>
          <div class="cx-stage">
            <img class="cx-preview" src="${DS_COMPONENTS_PATH}${c.cases[0].src}.webp" alt="${c.name}: ${c.cases[0].label}" />
          </div>
          <div class="cx-side">
            <p class="cx-figma-name">${c.figmaName}</p>
            <h3>${c.name}</h3>
            <p class="cx-desc">${c.desc}</p>
            <p class="cx-label">Casos</p>
            <div class="cx-cases" role="radiogroup" aria-label="Casos de ${c.name}">${c.cases
              .map(
                (k, j) => `
                  <button type="button" class="cx-case${j === 0 ? " is-active" : ""}" role="radio" aria-checked="${j === 0}" data-src="${DS_COMPONENTS_PATH}${k.src}.webp" data-label="${k.label}">${k.label}</button>
                `
              )
              .join("")}</div>
            <p class="cx-label">Propiedades</p>
            <ul class="cx-props">${c.props.map((p) => `<li>${p}</li>`).join("")}</ul>
          </div>
        </div>
      `
    )
    .join("");
  return `
    <div class="cx">
      <div class="cx-tabs" role="tablist" aria-label="Componentes">${tabs}</div>
      ${panels}
    </div>
  `;
}

function setupComponentExplorer() {
  const root = detailView.querySelector(".cx");
  if (!root) return;
  root.querySelectorAll(".cx-tab").forEach((tab) =>
    tab.addEventListener("click", () => {
      root.querySelectorAll(".cx-tab").forEach((t) => {
        const on = t === tab;
        t.classList.toggle("is-active", on);
        t.setAttribute("aria-selected", String(on));
      });
      root.querySelectorAll(".cx-panel").forEach((p) => (p.hidden = p.dataset.panel !== tab.dataset.comp));
    })
  );
  root.querySelectorAll(".cx-panel").forEach((panel) => {
    const img = panel.querySelector(".cx-preview");
    const name = panel.querySelector("h3").textContent;
    // Precarga los casos del panel para que el cambio sea instantáneo
    panel.querySelectorAll(".cx-case").forEach((btn) => {
      new Image().src = btn.dataset.src;
      btn.addEventListener("click", () => {
        panel.querySelectorAll(".cx-case").forEach((b) => {
          const on = b === btn;
          b.classList.toggle("is-active", on);
          b.setAttribute("aria-checked", String(on));
        });
        img.classList.add("is-swapping");
        img.onload = () => img.classList.remove("is-swapping");
        img.src = btn.dataset.src;
        img.alt = `${name}: ${btn.dataset.label}`;
      });
    });
  });
}

function renderRappiDsCaseStudy(project) {
  const s = project.story;

  const contextChips = s.context
    .map(
      (c) => `
        <div class="rappi-chip">
          <span class="rappi-chip-label">${c.label}</span>
          <span class="rappi-chip-value">${c.value}</span>
        </div>
      `
    )
    .join("");

  const cards = (items, className) =>
    `<div class="rappi-objectives ${className || ""}">${items
      .map(
        (o) => `
          <div class="rappi-objective">
            <span class="rappi-objective-n">${o.n}</span>
            <h4>${o.t}</h4>
            <p>${o.d}</p>
          </div>
        `
      )
      .join("")}</div>`;

  const dimensions = s.problem.dimensions
    .map(
      (d) => `
        <div class="ds-dimension">
          <h4>${d.t}</h4>
          <ul>${d.items.map((i) => `<li>${i}</li>`).join("")}</ul>
        </div>
      `
    )
    .join("");

  const board = (b) => `
    <figure class="ds-board">
      <img src="${b.src}" alt="${b.caption}" loading="lazy" />
      <figcaption>${b.caption}</figcaption>
    </figure>
  `;

  const reuse = s.reuse.figures
    .map(
      (f) => `
        <figure class="ds-reuse-item">
          <img src="${f.src}" alt="${f.caption}" loading="lazy" />
          <figcaption>${f.caption}</figcaption>
        </figure>
      `
    )
    .join("");

  const decisions = s.decisions
    .map(
      (d) => `
        <div class="rappi-decision">
          <span class="rappi-decision-law">${d.law}</span>
          <h4>${d.t}</h4>
          <p>${d.d}</p>
        </div>
      `
    )
    .join("");

  const paras = (arr) => arr.map((p) => `<p>${p}</p>`).join("");
  const teams = s.collaboration.teams.map((t) => `<li class="rappi-team">${t}</li>`).join("");
  const families = s.system.families.map((f) => `<li>${f}</li>`).join("");
  const lessons = s.lessons.map((l) => `<li>${l}</li>`).join("");

  return `
    <div class="detail rappi rappi--ds">
      <div class="wrap">
        <a class="back-link" href="#/proyectos">&larr; Todos los proyectos</a>
      </div>

      <div class="wrap rappi-hero">
        <p class="detail-tag">${projectCategories(project).join(" &middot; ")} &middot; ${project.year}</p>
        ${caseTitle(project)}
        <p class="rappi-tagline">${s.tagline}</p>
        <div class="rappi-chips">${contextChips}</div>
        <div class="rappi-stage rappi-stage--single">
          <div class="rappi-mockup ds-hero">
            <img src="${s.heroMockup}" alt="${project.title}" loading="lazy" />
          </div>
        </div>
        ${statRow(s.stats, "rappi-kpis")}
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El problema</p>
        <h2>Una pantalla hecha de piezas sueltas, para un solo escenario.</h2>
        <p class="rappi-lead">${s.problem.body}</p>
        <div class="ds-dimensions">${dimensions}</div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">El enfoque</p>
        <h2>Primero el sistema, después las pantallas.</h2>
        <p class="rappi-lead">${s.layers.body}</p>
        <a class="text-link" href="${s.layers.link.href}">${s.layers.link.label} &rarr;</a>
        <div class="ds-spacer"></div>
        ${cards(s.objectives, "rappi-objectives--three")}
      </div>

      <div class="rappi-acts-band">
        <div class="wrap">
          <p class="rappi-kicker">Explorador de componentes</p>
          <h2>Los componentes nuevos, cada uno con todos sus casos.</h2>
          <p class="rappi-lead">${s.explorer.intro}</p>
          ${componentExplorer(s.explorer)}
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Documentación</p>
        <h2>Anatomía, medidas y casos de uso para cada pieza.</h2>
        <p class="rappi-lead">${s.anatomy.body}</p>
        ${s.anatomy.boards.map((b) => zoomBoard(b, b.caption)).join("")}
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Reutilizar antes de crear</p>
        <h2>Lo que ya existía en el sistema, integrado con criterio.</h2>
        <p class="rappi-lead">${s.reuse.body}</p>
        <div class="ds-reuse">${reuse}</div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Propiedades y variantes</p>
        <h2>Un contrato claro entre diseño y desarrollo.</h2>
        <p class="rappi-lead">${s.specs.body}</p>
        ${s.specs.boards.map((b) => zoomBoard(b, b.caption)).join("")}
      </div>

      <div class="wrap rappi-section rappi-constraint">
        <div class="rappi-constraint-body">
          <p class="rappi-kicker">Trabajo con tech</p>
          <h2>${s.collaboration.title}</h2>
          ${paras(s.collaboration.body)}
        </div>
        <ul class="rappi-constraint-list rappi-teams">${teams}</ul>
      </div>

      <div class="rappi-acts-band">
        <div class="wrap ds-system">
          <div>
            <p class="rappi-kicker">El sistema detrás</p>
            <h2>Un Design System robusto, construido con más de 25 diseñadores.</h2>
            ${paras(s.system.body)}
            <p class="cx-label">Familias de componentes del sistema</p>
            <ul class="rp-types">${families}</ul>
          </div>
          <figure class="ds-board ds-board--tall">
            <img src="${s.system.board.src}" alt="${s.system.board.caption}" loading="lazy" />
            <figcaption>${s.system.board.caption}</figcaption>
          </figure>
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Decisiones de diseño clave</p>
        <h2>Escalar sin trabajo manual repetido.</h2>
        <div class="rappi-decisions">${decisions}</div>
      </div>

      <div class="wrap rappi-section rappi-constraint">
        <div class="rappi-constraint-body">
          <p class="rappi-kicker">${s.challenge.kicker}</p>
          <h2>${s.challenge.title}</h2>
          ${paras(s.challenge.body)}
        </div>
        ${checkList(s.challenge.items, "rappi-constraint-list")}
      </div>

      <div class="rappi-impact">
        <div class="wrap">
          <p class="rappi-kicker">Impacto</p>
          <h2>Una librería que sirve más allá del proyecto que la originó.</h2>
          ${cards(s.impact.cards, "rappi-objectives--three")}
        </div>
      </div>

      <div class="wrap rappi-section">
        <p class="rappi-kicker">Lecciones aprendidas</p>
        <ul class="rappi-lessons">${lessons}</ul>
      </div>

      <div class="wrap case-bio-wrap">
        ${bioCard()}
      </div>
    </div>
  `;
}

function renderBrandCaseStudy(project) {
  const b = project.brand;

  const contextChips = b.context
    .map(
      (c) => `
        <div class="ldb-chip">
          <span class="ldb-chip-label">${c.label}</span>
          <span class="ldb-chip-value">${c.value}</span>
        </div>
      `
    )
    .join("");

  const conceptPillars = b.concept.pillars
    .map(
      (p) => `
        <div class="ldb-concept-item">
          <div class="ldb-concept-icon">${p.icon}</div>
          <h4>${p.t}</h4>
          <p>${p.d}</p>
        </div>
      `
    )
    .join("");

  const constructionRules = b.construction.rules
    .map((r) => `<li>${r}</li>`)
    .join("");

  const swatches = b.palette.colors
    .map(
      (c) => `
        <div class="ldb-swatch">
          <div class="ldb-swatch-color" style="background:${c.hex}"></div>
          <div class="ldb-swatch-info">
            <span class="ldb-swatch-name">${c.name}</span>
            <span class="ldb-swatch-hex">${c.hex.toUpperCase()}</span>
            <p class="ldb-swatch-desc">${c.desc}</p>
          </div>
        </div>
      `
    )
    .join("");

  const typeWeights = b.typography.weights
    .map(
      (w) => `
        <div>
          <p class="ldb-type-weight-name">${w.name}</p>
          <p class="ldb-type-weight-sample" style="font-weight:${w.weight}">${w.sample}</p>
        </div>
      `
    )
    .join("");

  const lockupVariations = b.variations.lockups
    .map(
      (v) => `
        <div class="ldb-swatch-card ldb-swatch-card--${v.bg}">
          <img src="${v.src}" alt="Logotipo de ${project.title} en ${v.label}" loading="lazy" />
          <span>${v.label}</span>
        </div>
      `
    )
    .join("");

  const iconVariations = b.variations.icons
    .map(
      (v) => `
        <div class="ldb-swatch-card ldb-swatch-card--${v.bg}">
          <img src="${v.src}" alt="Isotipo de ${project.title} en ${v.label}" loading="lazy" />
          <span>${v.label}</span>
        </div>
      `
    )
    .join("");

  return `
    <div class="detail ldb">
      <div class="wrap">
        <a class="back-link" href="#/proyectos">&larr; Todos los proyectos</a>
      </div>

      <div class="wrap ldb-hero">
        <p class="detail-tag">${project.category} &middot; ${project.year}</p>
        <h1>${project.title}</h1>
        <p class="ldb-tagline">${b.tagline}</p>
        <div class="ldb-chips">${contextChips}</div>
        <div class="ldb-stage">
          <img src="${b.heroLogo}" alt="Logotipo de ${project.title}" loading="lazy" />
        </div>
      </div>

      <div class="wrap ldb-section">
        <p class="ldb-kicker">El brief</p>
        <h2>${b.brief.heading}</h2>
        <p class="ldb-lead">${b.brief.body}</p>
      </div>

      <div class="wrap ldb-section">
        <p class="ldb-kicker">El concepto</p>
        <h2>${b.concept.heading}</h2>
        <p class="ldb-lead">${b.concept.body}</p>
        <div class="ldb-concept-grid">${conceptPillars}</div>
      </div>

      <div class="wrap ldb-section">
        <p class="ldb-kicker">Construcción</p>
        <h2>${b.construction.heading}</h2>
        <div class="ldb-construction">
          <div class="ldb-clearspace">
            <img src="${b.construction.icon}" alt="Ícono de ${project.title}" loading="lazy" />
          </div>
          <div class="ldb-construction-text">
            <p>${b.construction.body}</p>
            <ul>${constructionRules}</ul>
          </div>
        </div>
      </div>

      <div class="wrap ldb-section">
        <p class="ldb-kicker">Paleta de color</p>
        <h2>${b.palette.heading}</h2>
        <p class="ldb-lead">${b.palette.intro}</p>
        <div class="ldb-palette">${swatches}</div>
      </div>

      <div class="wrap ldb-section">
        <p class="ldb-kicker">Tipografía</p>
        <h2>${b.typography.heading}</h2>
        <p class="ldb-lead">${b.typography.body}</p>
        <div class="ldb-type-specimen">
          <p class="ldb-type-word">Los de Búho</p>
          <p class="ldb-type-glyphs">${b.typography.glyphs}</p>
          <div class="ldb-type-weights">${typeWeights}</div>
        </div>
      </div>

      <div class="wrap ldb-section">
        <p class="ldb-kicker">Variaciones</p>
        <h2>${b.variations.heading}</h2>
        <p class="ldb-lead">${b.variations.intro}</p>
        <p class="ldb-variations-label">Logotipo completo</p>
        <div class="ldb-variations-grid">${lockupVariations}</div>
        <p class="ldb-variations-label">Isotipo</p>
        <div class="ldb-variations-grid">${iconVariations}</div>
      </div>

      <div class="wrap ldb-section">
        <p class="ldb-kicker">Aplicaciones</p>
        <h2>${b.applications.heading}</h2>
        <p class="ldb-lead">${b.applications.body}</p>
        <figure class="ldb-application">
          <img src="${b.applications.image}" alt="Marca aplicada en el sitio web de Los de Búho" loading="lazy" />
        </figure>
        <div class="ldb-app-links">
          <a class="ldb-app-link" href="#/proyecto/${b.applications.webProjectSlug}">
            <span class="ldb-app-link-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            </span>
            <span>
              <span class="ldb-app-link-label">Proyecto relacionado</span>
              <span class="ldb-app-link-title">Sitio web — Los de Búho</span>
            </span>
          </a>
          <a class="ldb-app-link" href="${b.applications.externalUrl}" target="_blank" rel="noopener noreferrer">
            <span class="ldb-app-link-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>
            </span>
            <span>
              <span class="ldb-app-link-label">Sitio en vivo</span>
              <span class="ldb-app-link-title">losdebuho.co</span>
            </span>
          </a>
        </div>
        <div class="ldb-closing"><p>${b.closing}</p></div>
      </div>

      <div class="wrap case-bio-wrap">
        ${bioCard()}
      </div>
    </div>
  `;
}

function normalize(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function searchableText(project) {
  const s = project.story || {};
  return normalize(
    [
      project.title,
      project.subtitle,
      projectCategories(project).join(" "),
      project.tools,
      project.role,
      project.year,
      project.summary,
      project.challenge,
      project.approach,
      project.result,
      s.tagline,
    ]
      .filter(Boolean)
      .join(" ")
  );
}

function matchesSearch(project, query) {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  const haystack = searchableText(project);
  return words.every((w) => haystack.includes(w));
}

function projectCard(project) {
  return `
    ${cardCover(project)}
    <div class="card-overlay">
      <div class="card-tags">${projectCategories(project)
        .map((c) => `<span class="card-tag">${c}</span>`)
        .join("")}</div>
      <h3 class="card-title">${project.title}</h3>
      <p class="card-sub">${project.subtitle}</p>
    </div>
  `;
}

function renderGrid() {
  grid.innerHTML = "";
  const list = PROJECTS.filter(
    (p) =>
      (activeFilter === "Todos" || projectCategories(p).includes(activeFilter)) &&
      (!searchQuery || matchesSearch(p, searchQuery))
  );

  list.forEach((project) => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = `#/proyecto/${project.slug}`;
    card.innerHTML = projectCard(project);
    grid.appendChild(card);
  });

  if (!searchQuery) {
    searchStatus.textContent = "";
  } else if (list.length) {
    searchStatus.textContent = `${list.length} ${
      list.length === 1 ? "proyecto" : "proyectos"
    } para «${searchQuery}»`;
  } else {
    searchStatus.textContent = `No encontramos proyectos para «${searchQuery}». Prueba con otra palabra.`;
  }
}

function renderFilters() {
  filtersEl.innerHTML = "";
  CATEGORIES.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === activeFilter ? " active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      activeFilter = cat;
      // Un filtro nuevo reemplaza la búsqueda activa
      searchQuery = "";
      searchInput.value = "";
      updateSearchControls();
      renderFilters();
      renderGrid();
    });
    filtersEl.appendChild(btn);
  });
}

function updateSearchControls() {
  const hasText = searchInput.value.trim().length > 0;
  searchSubmit.disabled = !hasText;
  searchClear.hidden = searchInput.value.length === 0;
}

function applySearch(q) {
  searchInput.value = q;
  searchQuery = q;
  // Buscar siempre recorre todos los proyectos
  activeFilter = "Todos";
  updateSearchControls();
  renderFilters();
  renderGrid();
}

function initSearch() {
  searchInput.addEventListener("input", updateSearchControls);
  // La búsqueda solo se ejecuta con el botón «Buscar»
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") e.preventDefault();
  });
  searchSubmit.addEventListener("click", () => {
    const q = searchInput.value.trim().replace(/\s+/g, " ");
    if (q) applySearch(q);
  });
  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    updateSearchControls();
    renderGrid();
    searchInput.focus();
  });
  updateSearchControls();
}

const CAROUSEL_SCALES = [1, 0.84, 0.7, 0.58, 0.48];
// Desenfoque por nivel de distancia al centro (10%, 30%, 50%, 70% de un máximo de 20px)
const CAROUSEL_BLUR = [0, 2, 6, 10, 14];

function initCarousel() {
  const items = HOME_CAROUSEL.map((slug) => PROJECTS.find((p) => p.slug === slug)).filter(Boolean);
  const n = items.length;
  const reach = Math.floor(n / 2);
  // Cards visibles por lado; las que sobren esperan ocultas en la última posición
  const shown = Math.min(Math.floor((n - 1) / 2), CAROUSEL_SCALES.length - 1);
  let center = 0;
  let prevOffsets = [];

  carouselEl.innerHTML = `
    <div class="carousel-track">${items
      .map(
        (p, i) => `
          <a class="card carousel-card" href="#/proyecto/${p.slug}" data-index="${i}" draggable="false">
            ${projectCard(p)}
          </a>
        `
      )
      .join("")}</div>
    <div class="carousel-controls">
      <button type="button" class="carousel-btn" data-dir="-1" aria-label="Proyecto anterior">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m15 6-6 6 6 6"/></svg>
      </button>
      <span class="carousel-count" aria-live="polite"></span>
      <button type="button" class="carousel-btn" data-dir="1" aria-label="Proyecto siguiente">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>
      </button>
    </div>
  `;

  const track = carouselEl.querySelector(".carousel-track");
  const cards = [...carouselEl.querySelectorAll(".carousel-card")];
  const count = carouselEl.querySelector(".carousel-count");

  function offsetOf(i) {
    // Distancia circular al centro, en el rango [-reach, reach]
    return ((((i - center + reach) % n) + n) % n) - reach;
  }

  function layout(animate) {
    const w = cards[0].offsetWidth;
    // Separación adaptable: las cards visibles de cada lado caben en el ancho disponible
    let span = 0;
    for (let k = 1; k <= shown; k++) span += (CAROUSEL_SCALES[k - 1] + CAROUSEL_SCALES[k]) / 2;
    const room = carouselEl.clientWidth / 2 - 16 - (w * CAROUSEL_SCALES[shown]) / 2;
    const overlap = Math.min(0.9, Math.max(0.42, room / (w * span)));
    const fadeIn = [];
    cards.forEach((card, i) => {
      const d = offsetOf(i);
      const hidden = Math.abs(d) > shown;
      const a = Math.min(Math.abs(d), shown);
      let x = 0;
      for (let k = 1; k <= a; k++) {
        x += (w * (CAROUSEL_SCALES[k - 1] + CAROUSEL_SCALES[k]) * overlap) / 2;
      }
      // Al dar la vuelta, en la primera pintura o al redimensionar: sin animación
      const wrapped = prevOffsets.length && Math.abs(prevOffsets[i] - d) > 1;
      card.classList.toggle("no-anim", !animate || Boolean(wrapped));
      // Si al dar la vuelta pasa de oculta a visible, aparece con un fundido
      if (animate && wrapped && !hidden && card.classList.contains("is-hidden")) fadeIn.push(card);
      const transform = `translate(-50%, -50%) translateX(${Math.sign(d) * x}px) scale(${CAROUSEL_SCALES[a]})`;
      clearTimeout(card.parkTimer);
      if (animate && wrapped && hidden && !card.classList.contains("is-hidden")) {
        // Si al dar la vuelta pasa de visible a oculta, se desvanece donde está y luego se reubica
        card.classList.remove("no-anim");
        card.parkTimer = setTimeout(() => {
          card.classList.add("no-anim");
          card.style.transform = transform;
        }, 450);
      } else {
        card.style.transform = transform;
      }
      card.style.filter = a ? `blur(${CAROUSEL_BLUR[a]}px)` : "none";
      card.style.zIndex = String(hidden ? 0 : 10 - a);
      card.classList.toggle("is-hidden", hidden || fadeIn.includes(card));
      card.classList.toggle("is-center", d === 0);
      card.setAttribute("aria-hidden", d === 0 ? "false" : "true");
      card.tabIndex = d === 0 ? 0 : -1;
      prevOffsets[i] = d;
    });
    count.textContent = `${center + 1} / ${n}`;
    // Aplica las posiciones antes de que una animación posterior las use de origen
    void track.offsetHeight;
    fadeIn.forEach((card) => card.classList.remove("no-anim", "is-hidden"));
  }

  function go(step) {
    center = (((center + step) % n) + n) % n;
    layout(true);
    restartAutoplay();
  }

  // Avance automático hacia la derecha cada 7 s, en loop infinito.
  // Se pausa con hover/foco, fuera de pantalla, con la pestaña oculta
  // o si el usuario pidió reducir el movimiento.
  const AUTOPLAY_MS = 7000;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let timer = null;
  let hovered = false;
  let focused = false;
  let visible = false;

  function canAutoplay() {
    return !reduceMotion && visible && !hovered && !focused && !document.hidden;
  }

  function restartAutoplay() {
    clearTimeout(timer);
    if (canAutoplay()) timer = setTimeout(() => go(1), AUTOPLAY_MS);
  }

  carouselEl.addEventListener("pointerenter", (e) => {
    if (e.pointerType === "mouse") {
      hovered = true;
      restartAutoplay();
    }
  });
  carouselEl.addEventListener("pointerleave", () => {
    hovered = false;
    restartAutoplay();
  });
  carouselEl.addEventListener("focusin", () => {
    focused = true;
    restartAutoplay();
  });
  carouselEl.addEventListener("focusout", () => {
    focused = false;
    restartAutoplay();
  });
  document.addEventListener("visibilitychange", restartAutoplay);
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    restartAutoplay();
  }, { threshold: 0.4 }).observe(carouselEl);

  carouselEl.querySelectorAll(".carousel-btn").forEach((btn) =>
    btn.addEventListener("click", () => go(Number(btn.dataset.dir)))
  );

  // Clic en una card lateral: la trae al centro en vez de abrirla
  let swiped = false;
  cards.forEach((card, i) =>
    card.addEventListener("click", (e) => {
      if (swiped || offsetOf(i) !== 0) {
        e.preventDefault();
        if (!swiped) go(offsetOf(i));
      }
    })
  );

  // Deslizar (touch / mouse)
  let startX = null;
  track.addEventListener("pointerdown", (e) => {
    startX = e.clientX;
    swiped = false;
  });
  track.addEventListener("pointerup", (e) => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    startX = null;
    if (Math.abs(dx) > 40) {
      swiped = true;
      go(dx < 0 ? 1 : -1);
      setTimeout(() => (swiped = false), 0);
    }
  });
  track.addEventListener("pointercancel", () => (startX = null));

  // Scroll horizontal con trackpad
  let wheelAcc = 0;
  let wheelLock = false;
  track.addEventListener(
    "wheel",
    (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      if (wheelLock) return;
      wheelAcc += e.deltaX;
      if (Math.abs(wheelAcc) > 40) {
        go(wheelAcc > 0 ? 1 : -1);
        wheelAcc = 0;
        wheelLock = true;
        setTimeout(() => (wheelLock = false), 420);
      }
    },
    { passive: false }
  );

  carouselEl.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  });

  window.addEventListener("resize", () => layout(false));
  layout(false);
}

function renderDetail(slug) {
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) {
    location.hash = "#/";
    return;
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const next = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  detailView.innerHTML =
    project.template === "rappi-journey"
      ? renderRappiJourneyCaseStudy(project)
      : project.template === "rappi-payments"
      ? renderRappiPaymentsCaseStudy(project)
      : project.template === "rappi-details"
      ? renderRappiDetailsCaseStudy(project)
      : project.template === "rappi-web"
      ? renderRappiWebCaseStudy(project)
      : project.template === "rappi-nupay"
      ? renderRappiNupayCaseStudy(project)
      : project.template === "rappi-pills"
      ? renderRappiPillsCaseStudy(project)
      : project.template === "rappi-postorder"
      ? renderRappiPostOrderCaseStudy(project)
      : project.template === "rappi-ds"
      ? renderRappiDsCaseStudy(project)
      : project.template === "trato"
      ? renderTratoCaseStudy(project)
      : project.template === "trato-brand"
      ? renderTratoBrandCaseStudy(project)
      : project.template === "messa"
      ? renderMessaCaseStudy(project)
      : project.template === "brand-ldb"
      ? renderBrandCaseStudy(project)
      : CASE_STUDY_CATEGORIES.includes(project.category)
      ? renderCaseStudy(project)
      : renderLegacyDetail(project, next);

  setupRappiZoom();

  homeView.classList.add("hidden");
  projectsView.classList.add("hidden");
  detailView.classList.remove("hidden");
  setupFlowExplorer();
  setupCaseVideos();
  setupComponentExplorer();
  window.scrollTo(0, 0);
}

function setupRappiZoom() {
  const ZOOM_LEVELS = [1, 2, 3, 4];
  detailView.querySelectorAll(".rappi-zoom").forEach((el) => {
    const zoomInBtn = el.querySelector("[data-zoom-in]");
    const zoomOutBtn = el.querySelector("[data-zoom-out]");
    const levelLabel = el.querySelector(".rappi-zoom-level");
    let index = 0;

    function update() {
      el.dataset.zoom = String(ZOOM_LEVELS[index]);
      levelLabel.textContent = ZOOM_LEVELS[index] + "x";
      zoomOutBtn.disabled = index === 0;
      zoomInBtn.disabled = index === ZOOM_LEVELS.length - 1;
    }

    zoomInBtn.addEventListener("click", () => {
      index = Math.min(index + 1, ZOOM_LEVELS.length - 1);
      update();
    });
    zoomOutBtn.addEventListener("click", () => {
      index = Math.max(index - 1, 0);
      update();
    });

    update();
  });
}

function renderLegacyDetail(project, next) {
  return `
    <div class="wrap detail">
      <a class="back-link" href="#/proyectos">&larr; Todos los proyectos</a>

      <div class="detail-head">
        <p class="detail-tag">${project.category} &middot; ${project.year}</p>
        <h1>${project.title}</h1>
        <p>${project.subtitle}</p>
      </div>

      ${detailCover(project)}

      <div class="detail-meta">
        <div>
          <p class="meta-label">Rol</p>
          <p class="meta-value">${project.role}</p>
        </div>
        <div>
          <p class="meta-label">Herramientas</p>
          <p class="meta-value">${project.tools}</p>
        </div>
        <div>
          <p class="meta-label">Categoría</p>
          <p class="meta-value">${project.category}</p>
        </div>
        <div>
          <p class="meta-label">Año</p>
          <p class="meta-value">${project.year}</p>
        </div>
      </div>

      <div class="detail-body">
        <h3>Resumen</h3>
        <p>${project.summary}</p>
        <h3>El reto</h3>
        <p>${project.challenge}</p>
        <h3>El enfoque</h3>
        <p>${project.approach}</p>
        <h3>El resultado</h3>
        <p>${project.result}</p>
      </div>

      <div class="detail-gallery">
        ${galleryTiles(project)}
      </div>

      <div class="next-project">
        <span>Siguiente proyecto</span>
        <a href="#/proyecto/${next.slug}"><h3>${next.title} &rarr;</h3></a>
      </div>
    </div>
  `;
}

function renderProfile() {
  const p = PROFILE;
  const arrow = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>`;

  const experience = p.experience
    .map(
      (e) => `
        <li class="cv-job">
          <div class="cv-job-head">
            <h3>${e.company}${e.companyNote ? ` <span>· ${e.companyNote}</span>` : ""}</h3>
            <span class="cv-dates">${e.dates}</span>
          </div>
          <p class="cv-role">${e.role}</p>
          <p class="cv-body">${e.body}</p>
          ${e.link ? `<a class="cv-link" href="${e.link.href}">${e.link.label}${arrow}</a>` : ""}
        </li>
      `
    )
    .join("");

  const diplomaIcon = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/></svg>`;

  const education = p.education
    .map(
      (ed) => `
        <div class="cv-edu">
          <span class="cv-dates">${ed.years}</span>
          <h4>${ed.school}</h4>
          ${
            ed.diplomas
              ? `<ul class="cv-diplomas">${ed.diplomas
                  .map(
                    (d) => `
                      <li>
                        <button type="button" class="cv-diploma" data-diploma="${PROFILE_DIPLOMAS}${d.file}.jpg" aria-haspopup="dialog">
                          <span>${d.name}</span>${diplomaIcon}
                        </button>
                      </li>
                    `
                  )
                  .join("")}</ul>`
              : `<ul>${ed.items.map((i) => `<li>${i}</li>`).join("")}</ul>`
          }
        </div>
      `
    )
    .join("");

  const skills = p.skills.map((s) => `<span class="skill-chip">${s}</span>`).join("");

  const languages = p.languages
    .map((l) => `<li><span>${l.name}</span><span>${l.level}</span></li>`)
    .join("");

  return `
    <div class="wrap profile">
      <section class="profile-hero">
        <img class="profile-photo" src="${p.photo}" alt="${p.name}" />
        <div>
          <p class="profile-eyebrow">Sobre mí</p>
          <h1>${p.name}</h1>
          <p class="profile-title">${p.title}</p>
          <p class="profile-about">${p.about}</p>
        </div>
      </section>

      <div class="profile-grid">
        <section class="profile-main">
          <h2 class="cv-heading">Experiencia laboral</h2>
          <ol class="cv-timeline">${experience}</ol>
        </section>

        <aside class="profile-side">
          <section>
            <h2 class="cv-heading">Educación</h2>
            ${education}
          </section>
          <section>
            <h2 class="cv-heading">Skills</h2>
            <div class="skills">${skills}</div>
          </section>
          <section>
            <h2 class="cv-heading">Idiomas</h2>
            <ul class="cv-languages">${languages}</ul>
          </section>
        </aside>
      </div>

      <dialog class="cv-preview" aria-label="Vista previa del diploma">
        <button type="button" class="cv-preview-close" aria-label="Cerrar vista previa">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
        </button>
        <img alt="" />
      </dialog>
    </div>
  `;
}

const PROFILE_DIPLOMAS = "projects/0.%20perfil%20-%20cv/previews/";

function setupDiplomaPreview() {
  const dialog = detailView.querySelector(".cv-preview");
  if (!dialog) return;
  const img = dialog.querySelector("img");
  detailView.querySelectorAll(".cv-diploma").forEach((btn) => {
    btn.addEventListener("click", () => {
      img.src = btn.dataset.diploma;
      img.alt = `Diploma de Platzi: ${btn.textContent.trim()}`;
      dialog.showModal();
    });
  });
  dialog.querySelector(".cv-preview-close").addEventListener("click", () => dialog.close());
  // Un clic fuera de la imagen (sobre el fondo) también cierra
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });
}

function showProfile() {
  detailView.innerHTML = renderProfile();
  setupDiplomaPreview();
  homeView.classList.add("hidden");
  projectsView.classList.add("hidden");
  detailView.classList.remove("hidden");
  window.scrollTo(0, 0);
}

function showHome(anchorId) {
  detailView.classList.add("hidden");
  detailView.innerHTML = "";
  projectsView.classList.add("hidden");
  homeView.classList.remove("hidden");
  const target = anchorId && document.getElementById(anchorId);
  if (target) target.scrollIntoView();
  else window.scrollTo(0, 0);
}

function showProjects() {
  detailView.classList.add("hidden");
  detailView.innerHTML = "";
  homeView.classList.add("hidden");
  projectsView.classList.remove("hidden");
  window.scrollTo(0, 0);
}

function markNav(hash) {
  // «Sobre mí» baja a la sección en el Home; en cualquier otra pantalla abre el perfil
  const onHome = hash === "#/" || /^#[^/]/.test(hash);
  document.querySelector('.nav-links a[data-nav="about"]')?.setAttribute("href", onHome ? "#sobre-mi" : "#/sobre-mi");
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    const on =
      (href === "#/proyectos" && (hash.startsWith("#/proyectos") || hash.startsWith("#/proyecto/"))) ||
      (href === "#/sobre-mi" && hash === "#/sobre-mi");
    if (on) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function route() {
  const hash = location.hash || "#/";
  markNav(hash);
  const match = hash.match(/^#\/proyecto\/(.+)$/);
  if (match) {
    renderDetail(decodeURIComponent(match[1]));
  } else if (hash === "#/sobre-mi") {
    showProfile();
  } else if (hash.startsWith("#/proyectos")) {
    // #/proyectos?q=… llega con la búsqueda ya aplicada (enlaces del perfil)
    const q = new URLSearchParams(hash.split("?")[1] || "").get("q");
    if (q) applySearch(q);
    showProjects();
  } else if (/^#[^/]/.test(hash)) {
    showHome(decodeURIComponent(hash.slice(1)));
  } else {
    showHome();
  }
}

// Saludo del hero: rota cada 3 s entre idiomas, en loop infinito.
// El último es "¡Hola!" en binario (UTF-8), corto para no romper el layout.
const GREETINGS = [
  ["es", "¡Hola!, ¿Qué hay para hacer?"],
  ["en", "Hi! What's there to do?"],
  ["pt", "Olá! O que tem pra fazer?"],
  ["it", "Ciao! Cosa c'è da fare?"],
  ["fr", "Salut ! Qu'y a-t-il à faire ?"],
  ["zh", "你好！有什么要做的？"],
  ["de", "Hallo! Was gibt's zu tun?"],
  ["ja", "こんにちは！何をしようか？"],
  [
    "zxx",
    Array.from(new TextEncoder().encode("¡Hola!"))
      .map((b) => b.toString(2).padStart(8, "0"))
      .join(" "),
  ],
];

function initGreeting() {
  const el = document.getElementById("hero-greeting");
  if (!el) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const FADE_MS = 300;
  let i = 0;

  function show() {
    const [lang, text] = GREETINGS[i];
    el.lang = lang;
    el.textContent = text;
    el.classList.toggle("is-binary", lang === "zxx");
    el.classList.remove("is-out");
  }

  setInterval(() => {
    i = (i + 1) % GREETINGS.length;
    if (reduceMotion) return show();
    el.classList.add("is-out");
    setTimeout(show, FADE_MS);
  }, 3000);
}

window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", () => {
  initGreeting();
  document.getElementById("year").textContent = new Date().getFullYear();
  initTheme();
  initSearch();
  renderFilters();
  renderGrid();
  initCarousel();
  route();
});
