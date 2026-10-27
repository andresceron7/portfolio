// Google Analytics 4 con consentimiento previo + aviso de cookies.
//
// GA solo se carga cuando el visitante acepta las cookies analíticas
// (el snippet del <head> en index.html lo carga en visitas siguientes).
// Sin consentimiento no se envía nada.
//
// Qué se mide y cómo queda medido lo que se agregue en el futuro:
// - page_view: lo envía route() (app.js) en cada cambio de pantalla, con una
//   URL limpia (/portfolio/proyecto/<slug>) y un título legible. Cualquier
//   ruta nueva queda medida sola si pasa por route(); si tiene un título
//   propio, agrégalo en routeInfo().
// - view_project: al abrir #/proyecto/<slug>. Los proyectos nuevos de
//   PROJECTS quedan medidos sin tocar nada.
// - view_experience: al abrir #/sobre-mi (perfil / experiencia).
// - Clics: un solo listener en document, así que también cubre el HTML que se
//   genera después (casos de estudio, tarjetas, botones nuevos):
//     select_project  enlaces a #/proyecto/<slug> (carrusel, grid, siguiente…)
//     cta_click       botones .btn, «Ver experiencia», «Ver todos», etc.
//     nav_click       menú superior
//     contact_click   enlaces mailto:
//     social_click    LinkedIn y otras redes
//     outbound_click  cualquier otro enlace externo
//     filter_projects filtros de la página Proyectos
//     search          búsqueda de proyectos
//     view_diploma    vista previa de diplomas del perfil
//     theme_change    cambio de tema claro / oscuro
//     ui_click        cualquier otro enlace o botón (nada queda sin medir)
// - Para darle un nombre propio a un botón nuevo: data-track="nombre_evento"
//   y parámetros extra con data-track-<param>="valor". Para nombrar un CTA:
//   data-cta="id_del_cta".

const GA_ID = window.GA_MEASUREMENT_ID;
const CONSENT_KEY = "portfolio-analytics-consent";
const SITE_BASE = location.pathname.replace(/index\.html$/, "");

function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch (e) {
    return null;
  }
}

function hasConsent() {
  return getConsent() === "granted";
}

function loadGA() {
  if (document.getElementById("ga-script")) return;
  const s = document.createElement("script");
  s.id = "ga-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

function track(name, params = {}) {
  if (!hasConsent() || typeof gtag !== "function") return;
  gtag("event", name, { page_path: currentPath(), ...params });
}

// ---------- Páginas vistas (las llama route() en app.js) ----------

function currentPath() {
  const hash = location.hash || "#/";
  // Las anclas del Home (#contacto, #sobre-mi) siguen siendo el Home
  if (!hash.startsWith("#/")) return SITE_BASE;
  return SITE_BASE + hash.slice(2).split("?")[0];
}

function routeInfo(hash) {
  const route = hash.startsWith("#/") ? hash.slice(2).split("?")[0] : "";
  const project = route.startsWith("proyecto/")
    ? PROJECTS.find((p) => p.slug === decodeURIComponent(route.slice(9)))
    : null;
  if (route.startsWith("proyecto/")) {
    return project ? { title: `Proyecto: ${project.title}`, project } : null;
  }
  const titles = {
    "": "Home",
    proyectos: "Proyectos",
    "sobre-mi": "Sobre mí",
    privacidad: "Política de privacidad",
  };
  return { title: titles[route] || route };
}

let lastTrackedPath = null;

function trackRoute(hash = location.hash || "#/") {
  const info = routeInfo(hash);
  const path = currentPath();
  // Rutas inválidas (el router redirige) o anclas dentro de la misma página
  if (!info || path === lastTrackedPath) return;
  lastTrackedPath = path;

  track("page_view", {
    page_title: info.title,
    page_location: location.origin + path,
  });

  if (info.project) {
    track("view_project", {
      project_slug: info.project.slug,
      project_title: info.project.title,
      project_category: projectCategories(info.project).join(", "),
    });
  } else if (path === SITE_BASE + "sobre-mi") {
    track("view_experience");
  }
}

// ---------- Clics ----------

function cleanText(el) {
  return (el.getAttribute("aria-label") || el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 100);
}

function slugify(text) {
  return normalize(text).replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
}

// Dónde está el clic: sección del Home, header, footer o la pantalla actual
function clickLocation(el) {
  const area = el.closest("nav, footer, .cookie-banner, section[id], section[class]");
  if (!area) return "page";
  if (area.matches("nav")) return "header";
  if (area.matches("footer")) return "footer";
  if (area.matches(".cookie-banner")) return "cookie_banner";
  return area.id || area.classList[0];
}

function projectSource(el) {
  if (el.closest(".carousel")) return "home_carousel";
  if (el.closest("#project-grid")) return "projects_grid";
  if (el.closest(".next-project")) return "next_project";
  return clickLocation(el);
}

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-track], a, button");
  if (!el || el.closest(".cookie-banner")) return;

  const text = cleanText(el);
  const where = clickLocation(el);
  const href = el.getAttribute("href") || "";

  if (el.dataset.track) {
    const params = { link_text: text, click_location: where };
    for (const [key, value] of Object.entries(el.dataset)) {
      if (key.startsWith("track") && key !== "track") {
        params[slugify(key.slice(5))] = value;
      }
    }
    track(el.dataset.track, params);
    return;
  }

  const projectMatch = href.match(/^#\/proyecto\/([^?#]+)/);
  if (projectMatch) {
    // Las tarjetas laterales del carrusel solo lo mueven: no abren el proyecto
    if (e.defaultPrevented) return;
    const slug = decodeURIComponent(projectMatch[1]);
    const project = PROJECTS.find((p) => p.slug === slug);
    track("select_project", {
      project_slug: slug,
      project_title: project ? project.title : text,
      click_source: projectSource(el),
    });
    return;
  }

  if (href.startsWith("mailto:")) {
    track("contact_click", { method: "email", link_text: text, click_location: where });
    return;
  }

  if (/^https?:\/\//.test(href) && new URL(href).host !== location.host) {
    const host = new URL(href).hostname.replace(/^www\./, "");
    const network = ["linkedin", "instagram", "behance", "dribbble", "github", "x", "twitter"].find((n) =>
      host.startsWith(n + ".")
    );
    if (network) {
      track("social_click", { social_network: network, link_text: text, click_location: where });
    } else {
      track("outbound_click", { link_url: href, link_domain: host, link_text: text, click_location: where });
    }
    return;
  }

  if (el.closest(".nav-links, .nav-logo")) {
    track("nav_click", { link_text: text, link_url: href });
    return;
  }

  if (el.matches(".filter-btn")) {
    track("filter_projects", { filter_category: text });
    return;
  }

  if (el.id === "search-submit") {
    const term = document.getElementById("project-search")?.value.trim();
    if (term) track("search", { search_term: term });
    return;
  }

  if (el.matches(".cv-diploma")) {
    track("view_diploma", { diploma_name: text });
    return;
  }

  if (el.id === "theme-toggle") {
    // El listener del tema ya cambió el valor cuando llega aquí
    track("theme_change", { theme: document.documentElement.dataset.theme });
    return;
  }

  if (el.matches(".btn, .about-cta, .text-link, .back-link, .grid-more-btn, .about-linkedin")) {
    track("cta_click", {
      cta_id: el.dataset.cta || slugify(text),
      cta_text: text,
      click_location: where,
      link_url: href,
    });
    return;
  }

  track("ui_click", { link_text: text, link_url: href, click_location: where });
});

// ---------- Aviso de cookies ----------

function deleteGaCookies() {
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (!name.startsWith("_ga")) return;
    const expire = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    document.cookie = expire;
    document.cookie = `${expire}; domain=${location.hostname}`;
    document.cookie = `${expire}; domain=.${location.hostname}`;
  });
}

function setConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch (e) {}
  if (typeof gtag !== "function") return;
  gtag("consent", "update", { analytics_storage: value });
  if (value === "granted") {
    loadGA();
    lastTrackedPath = null;
    trackRoute();
  } else {
    deleteGaCookies();
  }
}

let cookieBanner = null;

function showCookieBanner() {
  if (cookieBanner) {
    cookieBanner.hidden = false;
    cookieBanner.querySelector(".cookie-accept").focus();
    return;
  }
  cookieBanner = document.createElement("div");
  cookieBanner.className = "cookie-banner";
  cookieBanner.setAttribute("role", "region");
  cookieBanner.setAttribute("aria-label", "Aviso de cookies");
  cookieBanner.innerHTML = `
    <p>
      Uso cookies analíticas de Google Analytics para saber qué proyectos
      interesan y mejorar este portafolio. Solo se activan si las aceptas.
      <a href="#/privacidad">Política de privacidad</a>
    </p>
    <div class="cookie-actions">
      <button type="button" class="btn btn-secondary cookie-reject">Rechazar</button>
      <button type="button" class="btn btn-contact cookie-accept">Aceptar</button>
    </div>
  `;
  cookieBanner.querySelector(".cookie-accept").addEventListener("click", () => {
    setConsent("granted");
    cookieBanner.hidden = true;
  });
  cookieBanner.querySelector(".cookie-reject").addEventListener("click", () => {
    setConsent("denied");
    cookieBanner.hidden = true;
  });
  document.body.appendChild(cookieBanner);
}

function initCookieConsent() {
  if (!getConsent()) showCookieBanner();
  // «Configurar cookies» en el footer (y en la política) vuelve a abrir el aviso
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-cookie-settings]")) showCookieBanner();
  });
}
