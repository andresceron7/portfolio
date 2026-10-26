// Datos de proyectos del portafolio.
// "cover" y "gradient" son degradados CSS usados como placeholder visual.
const PROJECTS = [
  {
    slug: "nubank-metodo-de-pago-rappi",
    title: "NuBank como método de pago",
    subtitle: "Integración via API con Nubank en Brasil",
    category: "Product Design",
    categories: ["Product Design", "UX/UI"],
    year: "2024",
    role: "Product Designer",
    tools: "Figma, FigJam, Google Analytics, Redash",
    gradient: "linear-gradient(150deg, #a64ce8, #820ad1 55%, #4a0a78)",
    template: "rappi-nupay",
    cardPhone: "projects/6.%20Rappi%20y%20NuPay/card-nupay.png",
    summary:
      "Integración de NuPay (Nubank) como método de pago sincrónico en Rappi Brasil: una sola experiencia de pago, simple, completa y rápida, aunque por debajo operaran tres empresas distintas.",
    challenge:
      "Brasil tiene más de 6 millones de usuarios de Rappi y casi el 88% tiene cuenta de Nubank. No había una experiencia previa que rediseñar: había que construir desde cero, con un socio financiero externo y un orquestador de pagos en medio.",
    approach:
      "Discovery con Nubank, Yuno y los managers de Rappi para converger en una única experiencia ideal, y diseño del flujo de datos junto a Ingeniería para que la información viajara resuelta vía JSON y el usuario solo tuviera que confirmar.",
    result:
      "En producción en Brasil, con una lectura preliminar de +34% en la tasa de pagos acreditados, aún en medición.",
    story: {
      tagline:
        "Tres empresas, una sola experiencia de pago sincrónico para Brasil.",
      context: [
        { label: "Rol", value: "Product Designer" },
        {
          label: "Equipo",
          value: "Ingeniería Nubank · Yuno · Managers e Ingeniería Rappi · Diseño",
        },
        { label: "Producto", value: "App Rappi Brasil — Pago con NuPay" },
        { label: "Estado", value: "En producción en Brasil" },
      ],
      heroMockup: "projects/6.%20Rappi%20y%20NuPay/collage.png",
      problem: {
        body:
          "No se trataba de agregar «un método de pago más», sino de ofrecer el que la inmensa mayoría de los usuarios de Rappi en Brasil ya usaba en su día a día financiero. Ese cruce de datos priorizó esta integración por encima de otras. Y no había nada que rediseñar: era una integración completamente nueva, con tres retos de entrada:",
        stats: [
          { value: "6M+", label: "usuarios de Rappi en Brasil, uno de sus mercados más grandes." },
          { value: "~88%", label: "de esos usuarios tiene cuenta de Nubank." },
        ],
        points: [
          {
            t: "Una integración desde cero",
            d: "No existía una experiencia previa dentro de la app: todo el flujo se construyó junto con un socio financiero externo.",
          },
          {
            t: "Tres empresas, tres criterios",
            d: "Rappi, Nubank y Yuno, cada una con sus propios procesos de decisión, restricciones técnicas y estándares de marca.",
          },
          {
            t: "Un pago que sale de la app",
            d: "La confirmación ocurre en la app de Nu. Si el usuario sentía que «salía» de Rappi hacia un tercero desconocido, la confianza se rompía.",
          },
        ],
      },
      objectives: [
        {
          n: "01",
          t: "Simple",
          d: "Mínimas pantallas y decisiones para el usuario.",
        },
        {
          n: "02",
          t: "Completa",
          d: "Débito y crédito desde la cuenta Nu del usuario, en un mismo flujo.",
        },
        {
          n: "03",
          t: "Rápida",
          d: "Confirmación casi inmediata entre la app de Rappi y la app de Nu.",
        },
      ],
      proposal: {
        title: "Elegir una vez, confirmar en Nu, pagar sin volver a decidir.",
        overview: {
          src: "projects/6.%20Rappi%20y%20NuPay/hero-laptop.png",
          caption:
            "Selección del método, elección de crédito o débito y checkout con NuPay ya configurado: un solo flujo dentro de Rappi, con Nubank integrado en lugar de aparecer como un tercero.",
        },
        acts: [
          {
            kicker: "Propuesta · 01",
            title: "Débito o crédito, decidido desde Rappi",
            body:
              "El usuario elige Nubank como método de pago y, en el mismo paso, el tipo de método que quiere usar con su cuenta Nu: crédito o débito. Es la única decisión que se le pide, y se toma dentro de Rappi.",
            figures: [
              {
                src: "projects/6.%20Rappi%20y%20NuPay/seleccion-credito-debito.png",
                caption:
                  "Selección del método, bottom sheet de crédito o débito y método listo para pagar.",
                wide: true,
              },
            ],
          },
          {
            kicker: "Propuesta · 02",
            title: "Confirmar en la app de Nu, sin volver a capturar datos",
            body:
              "La mayor parte de la información viaja vía JSON desde Rappi hacia Nubank. El usuario no vuelve a escribir los datos de su tarjeta: va a su app de Nu, acepta la transacción y regresa a Rappi con el registro listo. Esa confirmación es la única interacción que se repite, y además es un paso de seguridad legítimo.",
            phones: [
              "projects/6.%20Rappi%20y%20NuPay/datos-nupay.png",
              "projects/6.%20Rappi%20y%20NuPay/autorizar-nupay.png",
              "projects/6.%20Rappi%20y%20NuPay/cadastrar-nupay.png",
              "projects/6.%20Rappi%20y%20NuPay/registro-concluido.png",
            ],
          },
          {
            kicker: "Propuesta · 03",
            title: "Preconfigurado para las próximas compras",
            body:
              "La selección de crédito o débito queda guardada: el usuario pasa por esa decisión una sola vez. En las siguientes compras, Nubank ya aparece listo en el checkout. Si quiere cambiarlo, lo hace desde la sección de métodos de pago de Rappi, no en cada compra.",
            phones: [
              "projects/6.%20Rappi%20y%20NuPay/vas-a-pagar-nubank.png",
              "projects/6.%20Rappi%20y%20NuPay/checkout-nubank.png",
              "projects/6.%20Rappi%20y%20NuPay/pedido-confirmado.png",
            ],
          },
        ],
      },
      decisions: [
        {
          law: "Recognition over recall",
          t: "Aplicado a la configuración",
          d: "Guardar la selección de débito o crédito como preferencia evita que el usuario vuelva a decidir algo que ya decidió. Solo se repite la confirmación en Nu, que es un paso de seguridad.",
        },
        {
          law: "Arquitectura de la experiencia",
          t: "Menos pantallas por decisión de producto",
          d: "Que los datos viajaran resueltos vía JSON permitió diseñar menos pantallas porque así se decidió, no por una limitación técnica. El diseño definió cuánta fricción era aceptable y la arquitectura se construyó para sostenerlo.",
        },
        {
          law: "Consistencia de marca",
          t: "La ilusión de «un solo producto»",
          d: "Íconos, copies e identidad de Nubank integrados en el flujo de Rappi para que el usuario nunca sintiera que salió de la app ni que pagaba con un tercero desconocido.",
        },
        {
          law: "Diseño como convergencia",
          t: "Una visión por encima de los límites organizacionales",
          d: "Con Rappi, Nubank y Yuno involucrados, el rol de diseño fue sostener una sola visión de experiencia por encima del criterio técnico y de negocio de cada equipo.",
        },
      ],
      connector: {
        kicker: "Mi rol",
        title: "Una sola experiencia, no dos experiencias conectadas.",
        body: [
          "Mi rol fue clave para llegar a una única experiencia ideal que funcionara del lado de Rappi y del lado del cliente de Nubank. Lideré las reuniones de discovery para converger en esa experiencia entre todas las partes.",
          "Sostuve reuniones directas con los stakeholders de Nubank, con el equipo orquestador de Yuno y con los managers de Rappi para alinear expectativas de negocio, restricciones técnicas y estándares de marca. Con Ingeniería diseñé el flujo de datos para que el usuario solo tuviera que confirmar, no volver a capturar datos.",
        ],
        teams: [
          "Ingeniería · Nubank",
          "Yuno · Orquestador de pagos",
          "Managers · Rappi",
          "Ingeniería · Rappi",
          "Diseño",
        ],
      },
      technicalChallenge: {
        kicker: "El reto",
        title: "Una sola experiencia, tres empresas.",
        body: [
          "El mayor reto de este proyecto no fue de interfaz: fue de orquestación. Cada compañía tenía sus propios procesos de decisión y validación, y había que integrar a sus equipos en una sola solución.",
          "Además, había que trabajar con un Design System ajeno, el de Nubank, e integrar sus elementos de marca dentro de Rappi sin que el usuario percibiera una ruptura entre ambos productos.",
        ],
        outcomes: [
          "Integrar equipos de Rappi, Nubank y Yuno en una sola solución.",
          "Llevar imágenes, íconos y copies del Design System de Nubank a la experiencia de Rappi sin romperla.",
          "Diseñar con Ingeniería un backend que minimiza las pantallas visibles y no vuelve a pedir una decisión ya tomada.",
        ],
        figures: [
          {
            src: "projects/6.%20Rappi%20y%20NuPay/confirmacion.png",
            caption:
              "Registro confirmado y selección de crédito o débito, con la marca de Nubank integrada.",
          },
          {
            src: "projects/6.%20Rappi%20y%20NuPay/autorizacion.png",
            caption: "Autorización con la identidad de NuPay, dentro del flujo de Rappi.",
          },
        ],
      },
      impact: {
        stats: [
          {
            value: "+34%",
            label: "en la tasa de pagos acreditados en Brasil.",
          },
        ],
        note:
          "Lectura preliminar: el dato sigue en medición y debe confirmarse con más tiempo de operación.",
        body:
          "Ese incremento impacta directamente el número de órdenes completadas en el mercado donde, por el cruce Rappi–Nubank (6M+ usuarios, ~88% con cuenta Nu), más sentido tenía priorizar esta integración. Además, el proyecto adelantó trabajo de arquitectura, diseño y relación con Nubank y Yuno que abre la puerta a ofrecer la misma integración en todos los países donde Rappi y Nubank tienen presencia compartida.",
      },
      lessons: [
        "Diseñar entre tres empresas exige manejar tanto el producto como la relación: alinear a Rappi, Nubank y Yuno en una sola visión fue, en la práctica, tan importante como cualquier decisión de pantalla.",
        "Integrar un Design System ajeno sin que el usuario sienta que «salió» de la app requiere tratar la identidad de marca como un problema de experiencia, no solo de estilo visual.",
        "La mejor forma de simplificar un flujo multi-sistema no fue quitarle pasos al usuario al final, sino decidir desde el inicio, junto con Ingeniería, qué información podía resolverse por detrás para que nunca llegara a ser una pantalla o una pregunta más.",
      ],
    },
  },
  {
    slug: "registro-a-primera-compra-rappi",
    title: "Del registro a la primera compra",
    subtitle: "Onboarding de nuevos usuarios en Rappi",
    category: "Product Design",
    categories: ["Product Design", "UX/UI", "User Research"],
    year: "2026",
    role: "Product Designer",
    tools: "Figma, FigJam, Amplitude, Maze",
    gradient: "linear-gradient(150deg, #ff7a3d, #ff2d55)",
    template: "rappi-journey",
    cardPhone: "projects/7.%20Rappi%20-%20onboarding%20new%20users/home.png",
    summary:
      "Transformación integral del onboarding de Rappi: de un embudo rígido y genérico, pensado para capturar datos, a una experiencia personalizada desde la primera sesión, con Liquid Glass como nuevo lenguaje del Design System.",
    challenge:
      "El onboarding no convertía instalaciones en usuarios activos al ritmo que el negocio necesitaba: fricción acumulada desde la instalación hasta la primera orden, lo que encarecía la adquisición y alargaba la recuperación de esa inversión.",
    approach:
      "Diagnóstico del embudo por etapas junto al equipo de Negocio y Datos, benchmark competitivo y segmentación de usuarios nuevos, antes de diseñar una sola pantalla. Luego, exploración de direcciones visuales y construcción de Liquid Glass como tokens con Ingeniería del Design System.",
    result:
      "Una propuesta end-to-end validada y prototipada, y la primera implementación de Liquid Glass en el Design System de Rappi, reutilizable en toda la app (iOS y Android).",
    story: {
      tagline:
        "De un embudo rígido y genérico a una experiencia personalizada con Liquid Glass.",
      context: [
        { label: "Rol", value: "Product Designer" },
        {
          label: "Equipo",
          value: "Producto y Growth · Negocio y Datos · Ingeniería App y Backend · Ingeniería DS · Performance · Diseño",
        },
        { label: "Producto", value: "App Rappi — Onboarding de nuevos usuarios (iOS y Android)" },
        { label: "Estado", value: "Diseñado y prototipado end-to-end · Liquid Glass adoptado en el DS" },
      ],
      heroMockup: "projects/7.%20Rappi%20-%20onboarding%20new%20users/collage.png",
      problem: {
        body:
          "Al diagnosticar el embudo completo —de la instalación a la primera orden— encontramos fricción acumulada en varios puntos. Estábamos invirtiendo en traer usuarios nuevos y perdiendo buena parte de ese esfuerzo en una entrada diseñada para capturar datos, no para convertir.",
        funnel: ["Instalación", "Registro", "Primera orden"],
        points: [
          {
            t: "Demasiados pasos antes del valor",
            d: "La creación de cuenta pedía muchos datos antes de mostrar cualquier valor al usuario.",
          },
          {
            t: "Ubicación lenta y poco confiable",
            d: "La detección de la dirección fallaba justo en el momento en que el usuario quería ver qué podía pedir.",
          },
          {
            t: "Una primera sesión genérica",
            d: "El home de un usuario nuevo no reflejaba ninguna de sus intenciones ni preferencias.",
          },
          {
            t: "Una arquitectura rígida",
            d: "Cualquier cambio dependía de un release de la app: no había una capa para experimentar ni iterar.",
          },
        ],
      },
      currentFlow: {
        src: "projects/7.%20Rappi%20-%20onboarding%20new%20users/flujo-actual.webp",
        width: 15958,
        height: 2815,
        caption:
          "El flujo actual completo, mapeado durante el diagnóstico: tipos de usuario nuevo, métodos de registro, validaciones, dirección, checkout y post-orden. Las notas internas y los datos personales están ocultos.",
      },
      objectives: [
        {
          n: "01",
          t: "Reducir la fricción estructural",
          d: "Reordenar qué información se pide y cuándo, en vez de simplemente pedir menos.",
        },
        {
          n: "02",
          t: "Personalizar desde la primera sesión",
          d: "Capturar preferencias de forma rápida y omitible, para que el home de un usuario nuevo ya refleje sus intereses.",
        },
        {
          n: "03",
          t: "Modernizar todo el flujo",
          d: "Alinear el onboarding a un estándar competitivo y usarlo como caso fundacional de un nuevo lenguaje visual para todo el Design System.",
        },
      ],
      research: {
        body:
          "Cruzamos dos fuentes: el diagnóstico interno del embudo —problemas, causas raíz e impacto por etapa, documentado con el equipo de Negocio y Datos y Analítica— y un benchmark competitivo para entender qué estándares de registro, personalización y onboarding ya eran la norma. «Qué nos está pasando» + «qué hace bien el mercado» nos permitió priorizar: no todo era un problema de diseño, pero lo que sí lo era se volvió el foco.",
        sources: [
          {
            t: "Diagnóstico del embudo",
            d: "Fricción en la creación de cuenta y en la ubicación, ausencia de personalización, inconsistencias en el checkout de usuarios nuevos y límites de la capa de adquisición.",
          },
          {
            t: "Benchmark competitivo",
            d: "Qué se había vuelto la norma en registro, personalización y onboarding en otras apps.",
          },
        ],
        segments: [
          {
            t: "Llegan con un objetivo claro",
            d: "Descargan la app para comprar algo concreto: el flujo no puede ponerse en medio.",
          },
          {
            t: "Llegan a explorar",
            d: "Necesitan descubrir qué ofrece Rappi: la personalización les da un punto de partida.",
          },
        ],
      },
      role: {
        title: "Dos frentes en paralelo: la dirección visual y el sistema.",
        fronts: [
          {
            kicker: "Frente 01",
            t: "Explorar y decidir la dirección visual",
            d: "Exploramos varias direcciones, incluida una línea ilustrada y colorida con una mascota propia. El equipo convergió en Liquid Glass, inspirada en el vidrio translúcido de iOS y adaptada a Android, por comunicar modernidad y jerarquía clara sobre contenido dinámico (Jakob's Law).",
          },
          {
            kicker: "Frente 02",
            t: "Convertir Liquid Glass en un sistema",
            d: "Con Ingeniería del Design System instauré el efecto Liquid Glass por primera vez en la historia del DS de Rappi, como tokens semánticos reutilizables: cómo se comporta sobre fondos dinámicos, cómo pasa de iOS a Android sin perder consistencia y cómo lo usa cualquier equipo de diseño.",
          },
        ],
        exploration: {
          src: "projects/7.%20Rappi%20-%20onboarding%20new%20users/exploracion.png",
          caption:
            "La dirección explorada y descartada: una línea ilustrada, con mascota propia. Documentarla ayuda a entender por qué Liquid Glass fue la decisión correcta para este contexto.",
        },
      },
      proposal: {
        title: "Un flujo que lleva al usuario del registro a su primera compra.",
        steps: ["Entrada", "Personalización", "Datos en contexto", "Primera compra", "Preferencias"],
        acts: [
          {
            kicker: "Propuesta · 01",
            title: "Entrada y verificación simplificada",
            body:
              "Bienvenida, registro con correo o celular y verificación por código, con el lenguaje Liquid Glass desde el primer contacto. La validación de seguridad aparece como una capa sobre la app, no como un paso aislado.",
            phones: [
              "projects/7.%20Rappi%20-%20onboarding%20new%20users/email.png",
              "projects/7.%20Rappi%20-%20onboarding%20new%20users/seguridad.png",
              "projects/7.%20Rappi%20-%20onboarding%20new%20users/codigo.png",
              "projects/7.%20Rappi%20-%20onboarding%20new%20users/orale-screen.png",
            ],
          },
          {
            kicker: "Propuesta · 02",
            title: "Personalización en 3 pasos, omitible",
            body:
              "Qué busca en Rappi, qué se le antoja y cuáles son sus favoritos: tarjetas visuales, no listas de texto, en una secuencia corta que construye un home personalizado desde la primera sesión. Se puede saltar en cualquier momento.",
            figures: [
              {
                src: "projects/7.%20Rappi%20-%20onboarding%20new%20users/personalizacion.png",
                caption:
                  "Los tres pasos de personalización sobre el home difuminado, y el momento en que se arma la experiencia.",
                wide: true,
              },
            ],
            phones: [
              "projects/7.%20Rappi%20-%20onboarding%20new%20users/gracias.png",
              "projects/7.%20Rappi%20-%20onboarding%20new%20users/comencemos.png",
              "projects/7.%20Rappi%20-%20onboarding%20new%20users/home.png",
            ],
          },
          {
            kicker: "Propuesta · 03",
            title: "Los datos de cuenta, en el momento en que tienen sentido",
            body:
              "Nombre, correo, dirección y teléfono se mantienen, pero se piden más adelante y en contexto: la dirección al pedir, el teléfono como mejora de la experiencia en el checkout o en el home. Para esta parte más transaccional se usaron componentes ya validados del Design System.",
            phones: [
              "projects/7.%20Rappi%20-%20onboarding%20new%20users/direccion.png",
              "projects/7.%20Rappi%20-%20onboarding%20new%20users/validacion.png",
              "projects/7.%20Rappi%20-%20onboarding%20new%20users/checkout-telefono.png",
              "projects/7.%20Rappi%20-%20onboarding%20new%20users/home-telefono.png",
            ],
          },
          {
            kicker: "Propuesta · 04",
            title: "Hasta la primera compra, y después",
            body:
              "El flujo no termina en «cuenta creada»: continúa por el restaurante, el checkout y la confirmación del pedido. Las respuestas de la encuesta de 3 pasos alimentan desde el primer momento un Home hiperpersonalizado, que acerca al usuario a su primera compra.",
            figures: [
              {
                src: "projects/7.%20Rappi%20-%20onboarding%20new%20users/primera-compra.png",
                caption: "Home personalizado, restaurante, checkout y pedido creado.",
                wide: true,
              },
              {
                video: {
                  src: "projects/7.%20Rappi%20-%20onboarding%20new%20users/encuesta-preferencias.mp4",
                  poster: "projects/7.%20Rappi%20-%20onboarding%20new%20users/poster-encuesta.jpg",
                  caption:
                    "Grabación del prototipo: la encuesta de 3 pasos para usuarios nuevos (qué busca, qué tipo de comida prefiere y sus restaurantes favoritos) y el Home hiperpersonalizado que se arma desde su primera sesión.",
                },
              },
            ],
          },
          {
            kicker: "Propuesta · 05",
            title: "Preferencias que se pueden ajustar en cualquier momento",
            body:
              "Lo que el usuario eligió en la encuesta no queda fijo: desde su Perfil puede volver a Personalización y cambiar sus preferencias cuando quiera. Además, puede sumar más información —sobre él, su plan nutricional (dieta, alergias, nivel de condimento) y otros hábitos— que se convierte en input para que Rappi mejore la experiencia, tanto de los usuarios nuevos como de los recurrentes.",
            phones: [
              "projects/7.%20Rappi%20-%20onboarding%20new%20users/cuenta.png",
              "projects/7.%20Rappi%20-%20onboarding%20new%20users/personalizacion-perfil.png",
            ],
          },
        ],
      },
      decisions: [
        {
          law: "Progressive disclosure",
          t: "Datos cuando tienen sentido",
          d: "En vez de pedir toda la información de entrada, los datos llegan en el momento más lógico para el usuario: menos percepción de «formulario largo» sin necesariamente eliminar campos.",
        },
        {
          law: "Recognition over recall",
          t: "Tarjetas visuales, no listas",
          d: "Íconos y marcas reconocibles hacen de elegir una decisión rápida, clave cuando el diagnóstico mostró que la «decision fatigue» afectaba la conversión.",
        },
        {
          law: "Control y libertad del usuario",
          t: "Personalización omitible",
          d: "El usuario puede saltar el flujo y seguir: una funcionalidad pensada para ayudar no se convierte en otra barrera.",
        },
        {
          law: "Jakob's Law + aesthetic-usability",
          t: "Un lenguaje ya familiar",
          d: "El vidrio de iOS reduce la curva de interpretación y eleva la percepción de calidad desde el primer segundo.",
        },
        {
          law: "Consistencia y escalabilidad",
          t: "Un principio de sistema, no de pantalla",
          d: "Construir Liquid Glass como tokens semánticos garantiza que cualquier equipo lo adopte igual, en vez de reinterpretarlo a su manera.",
        },
      ],
      challenge: {
        kicker: "El reto",
        title: "Sostener una transformación de esta escala entre equipos con objetivos distintos.",
        body: [
          "El reto más grande no fue encontrar una buena dirección visual. Fue coordinar a equipos que necesitaban cosas distintas, dentro de una arquitectura de onboarding rígida: cualquier cambio dependía de un release y no había capa de experimentación.",
          "Eso obligó a diseñar no solo la mejor experiencia posible, sino una que se pudiera construir, probar y escalar dentro de esas restricciones reales.",
        ],
        needs: [
          { team: "Producto y Growth", need: "Resultados de conversión" },
          { team: "Ingeniería App y Backend", need: "Viabilidad técnica" },
          { team: "Performance / Adquisición", need: "Que la experiencia sostuviera la inversión en medios" },
          { team: "Ingeniería del Design System", need: "Liquid Glass bien construido desde la base" },
        ],
      },
      impact: {
        cards: [
          {
            kicker: "Impacto de producto",
            t: "Una propuesta end-to-end, validada y prototipada",
            d: "Ataca directamente las causas raíz del embudo: reordenamiento de la captura de datos, personalización temprana y omitible, y una dirección visual moderna y coherente.",
          },
          {
            kicker: "Impacto de sistema",
            t: "La primera implementación de Liquid Glass en el Design System",
            d: "Tokens semánticos reutilizables en toda la app, iOS y Android: un lenguaje visual que hoy puede usar cualquier equipo de diseño de Rappi, no solo onboarding.",
          },
        ],
        note:
          "Las cifras de negocio (tasas de conversión, costo de adquisición, tiempos de recuperación de la inversión) son confidenciales y no se incluyen.",
      },
      lessons: [
        "Diagnosticar un embudo por causas raíz, etapa por etapa, antes de tocar una pantalla evita «rediseñar por rediseñar»: cada decisión se pudo justificar con un problema específico.",
        "Explorar más de una dirección visual, y tener la disciplina de descartar una con buen criterio, produce una decisión final más sólida.",
        "El impacto más duradero no siempre está en las pantallas, sino en la infraestructura que queda: Liquid Glass como tokens sigue generando valor después del proyecto.",
        "A esta escala, diseño actúa como punto de convergencia entre equipos con prioridades distintas: sostener una sola visión fue tan importante como cualquier decisión de interfaz.",
      ],
    },
  },
  {
    slug: "pildoras-flotantes-promocionales-rappi",
    title: "Píldoras flotantes promocionales",
    subtitle: "Nuevo diseño de píldoras y cards promocionales",
    category: "UX/UI",
    year: "2026",
    role: "Product Designer",
    tools: "Figma, FigJam, StatSig",
    gradient: "linear-gradient(150deg, #ff7a3d, #ff2d55)",
    template: "rappi-pills",
    cardPhone: "projects/8.%20Rappi%20-%20floating%20pills/pills-expandidas.png",
    summary:
      "Floating Home Pills: un componente global en el Home de Rappi que hace visibles los beneficios activos del usuario —envío gratis, cashback, descuentos, créditos— justo en el momento en que pueden convertir. Hoy está en producción, con más del 85% de aceptación.",
    challenge:
      "Rappi ya ofrecía muchos beneficios, pero estaban repartidos por el journey: el usuario, sobre todo el nuevo, no los descubría a tiempo. Eso reducía el uso de promociones, la conversión y la percepción de valor del producto.",
    approach:
      "Un sistema de tres niveles (pill cerrada, vista expandida y card de detalle), siete tipos de beneficio y cuatro tipos de card, 100% automatizado desde el CMS de Growth y experimentable con StatSig, diseñado junto a Producto, Ingeniería, QA y Analítica.",
    result:
      "En producción, con más del 85% de aceptación medida en un funnel nuevo: clic en la pill, visualización de la promo, clic en la promo y productos agregados a la canasta.",
    story: {
      tagline:
        "Hacer visibles los beneficios de Rappi en el momento exacto en que pueden convertir.",
      context: [
        { label: "Rol", value: "Product Designer" },
        {
          label: "Equipo",
          value: "Producto · Ingeniería · QA · Analítica y Growth · Diseño",
        },
        { label: "Producto", value: "App Rappi — Home (componente global, ES / EN / PT)" },
        { label: "Estado", value: "En producción · 100% automático vía CMS + StatSig" },
      ],
      heroMockup: "projects/8.%20Rappi%20-%20floating%20pills/collage.png",
      problem: {
        body:
          "El problema no era que Rappi no tuviera suficientes beneficios para ofrecer: era que eran prácticamente invisibles hasta que el usuario llegaba, por su cuenta, al lugar exacto de la app donde vivían. Muchos usuarios, especialmente los nuevos, nunca los descubrían a tiempo.",
        points: [
          {
            t: "Beneficios fragmentados",
            d: "Envío gratis, descuentos, créditos y promociones exclusivas vivían en distintos puntos del journey, sin un lugar que los reuniera.",
          },
          {
            t: "Sin criterio de prioridad",
            d: "No había una experiencia dedicada a mostrarlos ni una regla clara de cuál mostrar primero.",
          },
          {
            t: "Valor que se perdía",
            d: "Menos uso de promociones, menos conversión y una percepción de valor más baja de la que el producto realmente ofrecía.",
          },
        ],
        hypothesis:
          "Mostrar los beneficios activos desde el primer momento aumenta la conversión en la primera sesión; hacerlos visibles en el Home, las verticales y el checkout incrementa la tasa de pedidos y el ticket promedio.",
      },
      objectives: [
        {
          n: "01",
          t: "Hacer visibles los beneficios",
          d: "Desde el momento en que el usuario entra a la app, sin que tenga que buscarlos.",
        },
        {
          n: "02",
          t: "Educar, activar y convertir",
          d: "Mostrar el valor que ya tiene disponible antes de que lo pierda de vista, desde el primer uso.",
        },
        {
          n: "03",
          t: "Un sistema, no un banner",
          d: "100% automatizado y escalable, configurable por mercado, segmento y tipo de beneficio.",
        },
      ],
      research: {
        body:
          "Con Producto y Analítica entendimos en qué parte del journey se perdían los beneficios, y definimos una hipótesis compartida —visibilidad temprana = más conversión y más uso de promociones— que se volvió el criterio de cada decisión. Con Ingeniería mapeamos todos los tipos de beneficio del ecosistema, para que el componente representara todos los casos reales del negocio, no solo los más comunes.",
        types: [
          "Cashback",
          "Envío gratis",
          "Entrega rápida o cashback compensatorio",
          "Oferta por producto",
          "Descuento porcentual",
          "Créditos por tienda",
          "Ofertas exclusivas Pro",
        ],
      },
      proposal: {
        title: "Tres niveles de profundidad, un solo componente.",
        video: {
          src: "projects/8.%20Rappi%20-%20floating%20pills/prototipo-pills.mp4",
          poster: "projects/8.%20Rappi%20-%20floating%20pills/poster-pills.jpg",
          caption:
            "Grabación del prototipo: la vista expandida con los beneficios activos, el stack que se colapsa debajo del buscador y la card de detalle de un beneficio Pro con su CTA.",
        },
        levels: [
          {
            n: "01",
            t: "Pill cerrada",
            d: "Un indicador no intrusivo debajo del buscador que aparece unos segundos después de cargar el Home, para no competir con banners ni splash. Si hay más de un beneficio, se convierte en un stack visual que comunica acumulación de valor.",
          },
          {
            n: "02",
            t: "Vista expandida",
            d: "Hasta 4 pills visibles, cada una con su ícono, marca y condición principal («Solo por hoy», «Por ser Pro»), y clickeable hacia su propia card.",
          },
          {
            n: "03",
            t: "Card de detalle",
            d: "Título, condiciones, countdown de vigencia, Términos y Condiciones y un CTA configurable que lleva directo a la tienda, el producto o la vertical.",
          },
        ],
        acts: [
          {
            kicker: "Propuesta · 01",
            title: "De la pill a la vista expandida",
            body:
              "El usuario ve primero un solo beneficio, o un stack si hay varios. Al tocarlo, explora todos sus beneficios activos de un vistazo, sin salir del Home.",
            figures: [
              {
                src: "projects/8.%20Rappi%20-%20floating%20pills/niveles.png",
                caption: "Pill cerrada, vista expandida y cards de detalle: los tres niveles del sistema.",
                wide: true,
              },
            ],
          },
          {
            kicker: "Propuesta · 02",
            title: "Cuatro tipos de card para todos los casos reales",
            body:
              "Informativa de una sola tienda, de múltiples tiendas, de múltiples productos y de un solo producto. Imagen, título, subtítulo, condiciones, countdown, CTA y deeplink son 100% dinámicos: el componente se alimenta desde backend sin una sola línea de contenido hardcodeado.",
            phones: [
              "projects/8.%20Rappi%20-%20floating%20pills/card-una-tienda.png",
              "projects/8.%20Rappi%20-%20floating%20pills/card-varias-tiendas.png",
              "projects/8.%20Rappi%20-%20floating%20pills/card-productos.png",
              "projects/8.%20Rappi%20-%20floating%20pills/card-15min.png",
            ],
          },
          {
            kicker: "Propuesta · 03",
            title: "Beneficios Pro: el candado como incentivo",
            body:
              "A un usuario que no es Pro, el beneficio exclusivo no se le oculta: se le muestra con un candado y un copy claro de «desbloquea con Pro». Una limitación de acceso convertida en una oportunidad de upgrade.",
            figures: [
              {
                src: "projects/8.%20Rappi%20-%20floating%20pills/pro-bloqueado.png",
                caption: "Pill y card de un beneficio Pro bloqueado para un usuario no Pro.",
              },
              {
                src: "projects/8.%20Rappi%20-%20floating%20pills/vista-expandida.png",
                caption: "La vista expandida con hasta 4 beneficios activos.",
              },
            ],
          },
          {
            kicker: "Propuesta · 04",
            title: "Un piso mínimo de valor, y nunca romper el Home",
            body:
              "Cada tipo de promo tiene un piso mínimo de atractivo configurado (un nivel alto de cashback o de descuento), para que lo que se muestra siempre tenga valor real. Y cada falla posible —sin ofertas, datos incompletos, error de render o deeplink roto— tiene un estado definido: el componente se degrada sin bloquear el Home.",
            phones: [
              "projects/8.%20Rappi%20-%20floating%20pills/skeleton.png",
              "projects/8.%20Rappi%20-%20floating%20pills/card-envios.png",
              "projects/8.%20Rappi%20-%20floating%20pills/card-cuponera.png",
            ],
          },
        ],
      },
      decisions: [
        {
          law: "Progressive disclosure",
          t: "Tres niveles de profundidad",
          d: "Cerrado → expandido → detalle: el Home no se satura y el usuario controla cuánto quiere profundizar en cada beneficio.",
        },
        {
          law: "Visibility of system status",
          t: "Cuántos y hasta cuándo",
          d: "El stack comunica cuántos beneficios hay sin abrir nada, y el countdown de las últimas horas de vigencia comunica una urgencia real, no artificial.",
        },
        {
          law: "Recognition over recall",
          t: "La marca antes que el texto",
          d: "Cada pill usa el logo o ícono del beneficio para identificar el tipo de promoción de un vistazo.",
        },
        {
          law: "Prevención de errores",
          t: "Degradación controlada",
          d: "Reglas explícitas de cuándo NO renderizar y un fallback para cada falla: el componente nunca puede romper ni bloquear el Home.",
        },
        {
          law: "Consistencia como sistema",
          t: "Reglas, no campañas",
          d: "Una arquitectura configurable por reglas que corre sola vía CMS y StatSig, sin trabajo manual de diseño o de producto por cada nueva campaña.",
        },
        {
          law: "Diseño como incentivo",
          t: "Mostrar lo bloqueado",
          d: "El beneficio Pro con candado, en vez de oculto, convierte una restricción en una oportunidad de conversión.",
        },
      ],
      connector: {
        kicker: "Mi rol",
        title: "Diseñar el sistema completo, con cada equipo desde el inicio.",
        body: [
          "Diseñé el sistema de pills en sus tres niveles y sus siete variaciones de contenido, cada una con reglas visuales y de copy propias, y los cuatro tipos de card de detalle.",
          "Con Ingeniería definí qué campos de cada card debían ser dinámicos; con QA, los estados de error y fallback; y con Producto y Analítica, la instrumentación de eventos y la integración con StatSig, para que el componente fuera medible desde el día uno.",
        ],
        teams: [
          "Producto",
          "Ingeniería",
          "QA",
          "Analítica y Growth",
          "Diseño",
        ],
      },
      challenge: {
        kicker: "El reto",
        title: "Combinatoria y escala, no una sola pantalla.",
        body: [
          "Siete tipos de beneficio, cuatro tipos de card y tres idiomas debían poder combinarse y renderizarse dinámicamente con consistencia visual y de comportamiento en cada caso. Eso exigió especificar mucho más que un flujo lineal: cada variación necesitaba sus reglas de cuándo mostrarse, cómo agruparse y cómo fallar.",
          "Además, cada equipo necesitaba algo distinto, y había que diseñar para todos a la vez sin perder claridad para el usuario final.",
        ],
        needs: [
          { team: "Producto y Analítica", need: "Un sistema medible y experimentable desde el día uno" },
          { team: "Ingeniería", need: "Una fuente de datos clara y configurable para cada campo" },
          { team: "QA", need: "Un comportamiento definido para cada posible falla" },
        ],
      },
      impact: {
        stat: { value: "+85%", label: "de aceptación de las píldoras promocionales en producción." },
        funnel: ["Clic en la pill", "Ve la promo", "Clic en la promo", "Agrega a la canasta"],
        body:
          "La aceptación se mide con un funnel nuevo que sigue al usuario desde el clic en la pill hasta que agrega productos a la canasta. Además del resultado, el componente quedó como un sistema 100% dinámico, con reglas de renderizado y fallback para cada beneficio, analítica instrumentada desde el diseño y soporte multiidioma y multimercado, listo para experimentar de forma continua con StatSig y para nuevas oportunidades de monetización.",
      },
      lessons: [
        "Diseñar un sistema configurable, en lugar de una campaña puntual, multiplica el valor del trabajo: una sola arquitectura soporta siete tipos de beneficio y queda lista para los que vengan.",
        "Decidir cuándo NO mostrar algo es una decisión de diseño tan importante como decidir qué sí se muestra, más aún en un componente que corre solo y sin supervisión manual.",
        "Involucrar a Ingeniería y QA desde la definición del componente es lo que lo hizo realmente dinámico y resiliente, no solo visualmente consistente.",
        "Que la instrumentación naciera junto con el diseño permitió medir el impacto real desde el primer día en producción.",
      ],
    },
  },
  {
    slug: "post-order-mejorada-rappi",
    title: "Experiencia Post Order mejorada",
    subtitle: "Nueva UX al cerrar un pedido de Rappi",
    category: "Product Design",
    categories: ["Product Design", "UX/UI"],
    year: "2025",
    role: "Product Designer",
    tools: "Figma, FigJam, StatSig",
    gradient: "linear-gradient(150deg, #ff7a3d, #ff2d55)",
    template: "rappi-postorder",
    connector: { label: "Ver componentes", href: "#/proyecto/componentes-post-order-rappi" },
    cardPhone: "projects/9.%20Rappi%20post%20order%202.0/post-portero.png",
    summary:
      "Post Order 2.0: rediseño de la pantalla posterior a la entrega en Rappi, en Mobile y Web, para darle al usuario certeza sobre dónde, cómo y cuándo se entregó su pedido, y herramientas claras si algo salió mal.",
    challenge:
      "Después de recibir su pedido, el usuario se quedaba con dudas que la app no resolvía: dónde quedó el pedido y cómo pedir ayuda. Esa falta de claridad alimentaba reportes de «pedido nunca llegó» (ONA) sobre pedidos que sí se habían entregado.",
    approach:
      "Research con Producto sobre las preguntas reales después de cada entrega, una experiencia en dos niveles de profundidad, e integración con Ingeniería de APIs de chat y geolocalización, validada con QA en desarrollo y en producción.",
    result:
      "Una experiencia post-entrega rediseñada de punta a punta, implementada por fases y validada en producción, pensada para reducir la incertidumbre del usuario y los reportes de ONA.",
    story: {
      tagline:
        "Darle certeza al usuario después de la entrega, en lugar de dejarlo con la duda.",
      context: [
        { label: "Rol", value: "Product Designer" },
        { label: "Equipo", value: "Producto · Engineering Lead · QA · Analítica · Diseño" },
        { label: "Producto", value: "App Rappi — Pantalla post-entrega (Mobile y Web)" },
        { label: "Estado", value: "Implementado por fases · validado en producción" },
      ],
      heroMockup: "projects/9.%20Rappi%20post%20order%202.0/collage.png",
      problem: {
        body:
          "La pantalla que existía mostraba, en el mejor de los casos, una foto y un espacio para calificar. No respondía las preguntas que el usuario se hacía justo después de recibir su pedido:",
        points: [
          {
            t: "¿Dónde quedó mi pedido?",
            d: "En la portería, en mano o en un lugar seguro: el usuario no tenía forma clara de saberlo.",
          },
          {
            t: "¿Qué pasó durante la entrega?",
            d: "Los intentos de contacto del repartidor eran una «caja negra» para el usuario.",
          },
          {
            t: "¿Cómo pido ayuda?",
            d: "Si algo salía mal, no había una ruta directa hacia soporte ni hacia el repartidor.",
          },
        ],
        quote:
          "Esa falta de claridad tenía un costo medible: reportes de «pedido nunca llegó» (ONA) sobre pedidos que en realidad sí habían sido entregados.",
      },
      objectives: [
        { n: "01", t: "Claridad y transparencia", d: "Mostrar dónde y cómo se entregó el pedido: portería, en mano o lugar seguro." },
        { n: "02", t: "Visibilidad del proceso", d: "Un timeline con todos los intentos de contacto antes de resolver la entrega." },
        { n: "03", t: "Soporte simple y directo", d: "Acceso al árbol de soporte desde la misma pantalla." },
        { n: "04", t: "Contacto con el repartidor", d: "Chat o llamada durante las 5 horas posteriores a la entrega." },
        { n: "05", t: "Compensaciones proactivas", d: "Mostrar cualquier compensación aplicada automáticamente por retrasos." },
        { n: "06", t: "Menos incertidumbre", d: "Contribuir directamente a mejorar la métrica de ONA (Order Never Arrived)." },
      ],
      research: {
        body:
          "Junto con Producto entendimos los puntos críticos de la experiencia actual y las preguntas que se repetían después de cada entrega, con base en datos reales y no en intuición. De ahí salió una comparación clara entre el estado actual de la pantalla y la experiencia esperada, que guio todo el proyecto: no se trataba de «mejorar una pantalla», sino de responder preguntas específicas del usuario.",
      },
      levels: {
        title: "Dos niveles de profundidad: tranquilizar rápido y ayudar a fondo.",
        video: {
          src: "projects/9.%20Rappi%20post%20order%202.0/prototipo-post-order.mp4",
          poster: "projects/9.%20Rappi%20post%20order%202.0/poster-post-order.jpg",
          caption:
            "El flujo en movimiento: la pantalla sube con su skeleton, el widget de entrega hace «shake», se abre el detalle con mapa y timeline, y al final la propina post-entrega.",
        },
        items: [
          {
            n: "Nivel 01",
            t: "Información verídica e inmediata",
            d: "Qué pasó con el pedido, dónde se entregó y que la orden ya está cerrada: todo visible de un vistazo, sin buscarlo.",
          },
          {
            n: "Nivel 02",
            t: "Interacción profunda",
            d: "Mapa geolocalizado, foto de entrega con zoom, chat o llamada con el repartidor y árbol de soporte, para quien necesita ir más allá.",
          },
        ],
        note:
          "Esta división no fue solo jerarquía visual: le permitió a la pantalla cumplir dos objetivos distintos sin saturar la experiencia por defecto.",
      },
      proposal: {
        title: "Una pantalla que cuenta la historia completa de la entrega.",
        acts: [
          {
            kicker: "Propuesta · 01",
            title: "Pantalla post-entrega y entrega segura",
            body:
              "Aparece una sola vez al cerrar el pedido, de abajo hacia arriba y sobre cualquier sección de la app, con un skeleton mientras carga. El header con el estado se adapta por vertical, y el widget de entrega muestra foto, punto exacto, mapa, fecha y hora. Con Producto definí cómo narrar cada ruta de entrega: en portería, en mano o en un lugar seguro tras intentos fallidos de contacto.",
            figures: [
              {
                src: "projects/9.%20Rappi%20post%20order%202.0/flujo.png",
                caption: "Skeleton, post-entrega, detalle de entrega y propina: el flujo principal.",
                wide: true,
              },
            ],
            phones: [
              "projects/9.%20Rappi%20post%20order%202.0/post-portero.png",
              "projects/9.%20Rappi%20post%20order%202.0/post-personal.png",
              "projects/9.%20Rappi%20post%20order%202.0/post-lugar-seguro.png",
            ],
          },
          {
            kicker: "Propuesta · 02",
            title: "Detalle de entrega con timeline",
            body:
              "Zoom sobre la foto, mapa interactivo, el mensaje del repartidor y contacto por chat o llamada durante 5 horas. El timeline muestra con hora exacta cada paso, desde que el repartidor llegó hasta la resolución de la entrega.",
            figures: [
              {
                src: "projects/9.%20Rappi%20post%20order%202.0/lugar-seguro.png",
                caption: "Entrega en un lugar seguro: el aviso en la pantalla y el timeline con cada intento de contacto.",
              },
              {
                src: "projects/9.%20Rappi%20post%20order%202.0/post-entrega.png",
                caption: "El widget de entrega, con foto, punto y hora exactos.",
              },
            ],
            phones: [
              "projects/9.%20Rappi%20post%20order%202.0/detalle-portero.png",
              "projects/9.%20Rappi%20post%20order%202.0/zoom-foto.png",
              "projects/9.%20Rappi%20post%20order%202.0/detalle-lugar-seguro.png",
            ],
          },
          {
            kicker: "Propuesta · 03",
            title: "Resumen, compensaciones y soporte",
            body:
              "El resumen se adapta al estado de la orden: compensaciones proactivas por retraso, productos encontrados, sustituidos o eliminados en pedidos de retail, y pagos pendientes con un botón para resolverlos. El árbol de soporte reutiliza el componente existente, adaptado por tipo de orden y de usuario.",
            phones: [
              "projects/9.%20Rappi%20post%20order%202.0/compensacion.png",
              "projects/9.%20Rappi%20post%20order%202.0/mercado-sustitucion.png",
              "projects/9.%20Rappi%20post%20order%202.0/soporte.png",
            ],
          },
          {
            kicker: "Propuesta · 04",
            title: "Propina extra, en un momento nuevo del journey",
            body:
              "Un botón que reutiliza la misma modal de propinas del checkout, pero llevada a después de la entrega, justo cuando el usuario tuvo una buena experiencia con su repartidor. Un patrón que ya conoce, en un momento emocionalmente relevante.",
            phones: [
              "projects/9.%20Rappi%20post%20order%202.0/propina.png",
              "projects/9.%20Rappi%20post%20order%202.0/propina-seleccion.png",
            ],
          },
          {
            kicker: "Propuesta · 05",
            title: "La misma experiencia, también en Web",
            body:
              "La pantalla post-entrega, el detalle de entrega, el resumen y el soporte se llevaron a Web con la misma lógica de dos niveles, reorganizados para aprovechar el ancho de pantalla.",
            figures: [
              {
                src: "projects/9.%20Rappi%20post%20order%202.0/web-post-entrega.png",
                caption: "Post-entrega en Web y Mobile.",
              },
              {
                src: "projects/9.%20Rappi%20post%20order%202.0/web-detalle.png",
                caption: "Detalle de entrega con mapa y timeline.",
              },
            ],
            screens: [
              {
                src: "projects/9.%20Rappi%20post%20order%202.0/web-resumen.png",
                caption: "Resumen del pedido en Web.",
              },
              {
                src: "projects/9.%20Rappi%20post%20order%202.0/web-soporte.png",
                caption: "Árbol de soporte en Web.",
              },
            ],
          },
        ],
      },
      decisions: [
        {
          law: "Progressive disclosure",
          t: "Dos niveles reales, no decorativos",
          d: "Separar la información inmediata de la interacción profunda resolvió la ansiedad del usuario y sus necesidades de soporte, sin obligarlo a pasar por una si solo necesitaba la otra.",
        },
        {
          law: "Visibility of system status",
          t: "El timeline como narrativa",
          d: "No solo informa: cuenta la entrega minuto a minuto y elimina la sensación de «caja negra» de la pantalla anterior.",
        },
        {
          law: "Consistencia con criterio",
          t: "Reutilizar en un momento nuevo",
          d: "Llevar la modal de propinas del checkout al post-entrega fue más efectivo que diseñar un mecanismo nuevo: el usuario ya sabía usarla.",
        },
        {
          law: "Prevención de fricción",
          t: "Diseño junto a los proveedores",
          d: "Trabajar desde el diseño con los proveedores de chat y ubicación anticipó restricciones reales antes de que limitaran la experiencia.",
        },
        {
          law: "Jerarquía visual",
          t: "Orden por relevancia",
          d: "En pedidos con compensaciones, sustituciones y detalles financieros, la información se organizó por importancia, no con el mismo peso visual.",
        },
      ],
      role: {
        kicker: "Mi rol",
        title: "Del diseño de pantallas a la validación en producción.",
        body: [
          "Además de diseñar las pantallas, trabajé con Ingeniería y con proveedores de chat interno y de APIs de ubicación para definir cómo mostrar una geolocalización más exacta del punto de entrega.",
          "Con QA validé que cada funcionalidad tuviera el impacto visual y de experiencia esperado, y una vez en producción seguí validando animaciones, tiempos de espera, componentes y la conexión con datos reales para habilitar las siguientes fases.",
        ],
        items: [
          "Integración de APIs de chat y geolocalización con Ingeniería",
          "Diseño de las opciones de entrega segura con Producto",
          "Validación continua con QA antes de salir a producción",
          "Iteración en producción para habilitar nuevas fases",
        ],
      },
      challenge: {
        kicker: "El reto",
        title: "Diseñar sobre sistemas fuera del control directo de diseño.",
        body: [
          "Proveedores de chat interno, APIs de geolocalización con su nivel real de precisión y reglas de negocio para entregas seguras. Diseñar esas piezas significó entender con Ingeniería qué era técnicamente posible e iterar el diseño cuando el comportamiento real de las integraciones se validaba en desarrollo y en producción.",
        ],
        items: [
          "Precisión real de las APIs de ubicación",
          "Ventana de 5 horas para contactar al repartidor",
          "Pila de pantallas cuando hay varias órdenes cerradas",
          "Deeplinks desde la app, correos e historial",
        ],
      },
      impact: {
        cards: [
          {
            n: "Producto",
            t: "Una experiencia post-entrega rediseñada de punta a punta",
            d: "En Mobile y Web, construida sobre el nuevo sistema de componentes del Design System, implementada por fases y validada en producción.",
          },
          {
            n: "Usuario",
            t: "Por primera vez, una forma verificable de confirmar la entrega",
            d: "El usuario ve qué pasó con su pedido sin adivinar ni reportarlo como no recibido, lo que apunta directo a reducir los reportes de ONA.",
          },
        ],
        note: "La medición del impacto en ONA y en reportes de soporte post-entrega está en curso.",
      },
      lessons: [
        "Dividir una experiencia en información inmediata e interacción profunda resuelve necesidades distintas sin que compitan por atención.",
        "Integrar APIs y proveedores externos exige que diseño participe temprano en las conversaciones técnicas, no solo reciba restricciones ya definidas.",
        "Reutilizar un patrón que el usuario ya conoce en un momento nuevo del journey puede generar más valor que diseñar algo nuevo.",
        "El trabajo de diseño no termina en producción: validar animaciones, tiempos y comportamiento real también es parte del rol.",
      ],
    },
  },
  {
    slug: "componentes-post-order-rappi",
    title: "Componentes para Post Order",
    subtitle: "Nuevos componentes del Design System de Rappi",
    category: "Design System",
    categories: ["Design System", "Product Design", "UX/UI"],
    year: "2025",
    role: "Product Designer",
    tools: "Figma, FigJam",
    gradient: "linear-gradient(150deg, #ff7a3d, #ff2d55)",
    template: "rappi-ds",
    connector: { label: "Ver el proyecto", href: "#/proyecto/post-order-mejorada-rappi" },
    cardPhone: "projects/10.%20Rappi%20DS%20post%20order/card-componentes.webp",
    summary:
      "La base de Post Order 2.0: una librería de componentes nuevos dentro del Design System de Rappi, construida con Ingeniería frontend y backend, capaz de representar cualquier combinación de vertical, resultado de entrega y estado de pedido.",
    challenge:
      "La pantalla post-entrega no tenía un sistema propio: eran piezas sueltas pensadas para un solo escenario (foto + calificación), sin cubrir las verticales, los resultados de entrega, las compensaciones, los productos sustituidos ni los pagos fallidos.",
    approach:
      "Componentes configurables por propiedades y variantes, con sus estados de carga, error, vacío y placeholder definidos desde el inicio, siguiendo la terminología, la iconografía y los tokens del Design System, y validados con Ingeniería frontend y backend.",
    result:
      "Una librería documentada y publicada en el Design System, reutilizable por otros equipos, que sostiene toda la experiencia de Post Order 2.0 en Mobile y Web.",
    story: {
      tagline:
        "Construir un sistema de componentes para una experiencia que antes no tenía uno propio.",
      context: [
        { label: "Rol", value: "Product Designer" },
        { label: "Equipo", value: "Producto · Engineering Lead · Ingeniería frontend y backend · Design System" },
        { label: "Producto", value: "Design System Rappi — librería Post-Entrega" },
        { label: "Estado", value: "Diseñado, documentado y publicado en el DS" },
      ],
      heroMockup: "projects/10.%20Rappi%20DS%20post%20order/hero-componentes.webp",
      stats: [
        { value: "5", label: "componentes nuevos publicados en el Design System" },
        { value: "60+", label: "casos y estados documentados en Figma" },
        { value: "25+", label: "diseñadores trabajando sobre el mismo sistema" },
      ],
      problem: {
        body:
          "Rediseñar solo «la pantalla» no alcanzaba. Después de cerrarse un pedido existe una enorme variedad de casos reales, y cada uno terminaba siendo una pantalla hecha a mano:",
        dimensions: [
          { t: "Verticales", items: ["Turbo Retail", "Turbo Restaurantes", "RappiFavor", "RappiCash", "Pickup", "Restaurantes"] },
          { t: "Resultados de entrega", items: ["En mano", "En portería", "Portería por elección del usuario", "Lugar seguro tras intentos de contacto"] },
          { t: "Estados del pedido", items: ["Compensación por retraso", "Productos sustituidos", "Productos eliminados", "Pago pendiente"] },
          { t: "Estados del componente", items: ["Default", "Sin imagen", "Placeholder", "Skeleton", "Texto extenso"] },
        ],
      },
      layers: {
        body:
          "Este fue explícitamente un proyecto de dos capas: primero construir el sistema de componentes guiado por el Design System, y después usar esos componentes para construir toda la experiencia de pantallas. Este caso cuenta la primera capa.",
        link: { label: "Ver la segunda capa: Experiencia Post Order mejorada", href: "#/proyecto/post-order-mejorada-rappi" },
      },
      objectives: [
        { n: "01", t: "Cualquier combinación real", d: "Una librería de componentes reutilizables que represente cualquier combinación de vertical, resultado de entrega y estado del pedido." },
        { n: "02", t: "Un lenguaje consistente", d: "Terminología, iconografía y estados (carga, error, vacío, éxito) alineados con los lineamientos del Design System." },
        { n: "03", t: "Una base para otros equipos", d: "Que cualquier equipo pueda construir variaciones futuras sin reinventar el componente." },
      ],
      explorer: {
        intro:
          "Elige un componente y recorre sus casos: son los mismos estados y variantes documentados en la librería.",
        components: [
          {
            key: "header",
            name: "Header multi-vertical",
            figmaName: "post-delivery header",
            desc: "Cambia contenido, ícono y mensaje según la vertical y el resultado del pedido. Es sticky al hacer scroll y tiene estados para logo inexistente, copy extenso y carga.",
            props: ["vertical", "status", "show-close", "sticky", "skeleton"],
            cases: [
              { label: "Turbo Retail a tiempo", src: "h-turbo-retail" },
              { label: "Turbo Restaurantes a tiempo", src: "h-turbo-rest" },
              { label: "Turbo con retraso", src: "h-turbo-retail-retraso" },
              { label: "RappiFavor", src: "h-rappi-favor" },
              { label: "RappiCash", src: "h-rappi-cash" },
              { label: "Pickup · pedido recogido", src: "h-pickup" },
              { label: "Logo inexistente", src: "h-sin-logo" },
              { label: "Copy extenso", src: "h-copy-extenso" },
              { label: "Skeleton", src: "h-skeleton" },
            ],
          },
          {
            key: "widget",
            name: "Delivery widget",
            figmaName: "_delivery-widget",
            desc: "La evidencia de entrega: foto, estado y acción hacia el detalle. Cubre la ausencia de imagen, el comentario del repartidor y sus estados de carga.",
            props: ["type: default / no-image / placeholder / skeleton", "delivery-message", "extra-images"],
            cases: [
              { label: "Default", src: "w-default" },
              { label: "Con comentario del repartidor", src: "w-comentario" },
              { label: "Con estado de entrega", src: "w-mensaje" },
              { label: "Sin imagen", src: "w-sin-imagen" },
              { label: "Placeholder", src: "w-placeholder" },
              { label: "Skeleton", src: "w-skeleton" },
            ],
          },
          {
            key: "contact",
            name: "Contact-RT",
            figmaName: "post-delivery-chat",
            desc: "Contacto con el repartidor y resumen del pedido en una sola pieza: chat y llamada, propina, compensación, productos y deuda se activan por propiedades.",
            props: ["status: default / no-rt / only-actions / skeleton", "message", "chat-call", "compensation", "summary", "debt-card"],
            cases: [
              { label: "Caso completo", src: "c-completo" },
              { label: "Con propina", src: "c-con-propina" },
              { label: "Sin propina", src: "c-sin-propina" },
              { label: "Límite de propina excedido", src: "c-limite-propina" },
              { label: "Mensaje extenso", src: "c-mensaje-largo" },
              { label: "Repartidor envió una foto", src: "c-foto-adjunta" },
              { label: "Chat con mensajes nuevos", src: "c-chat-nuevo" },
              { label: "Chat no disponible (5 h)", src: "c-chat-cerrado" },
              { label: "Compensación", src: "c-compensacion" },
              { label: "Productos sustituidos y eliminados", src: "c-sustituidos" },
              { label: "Compensación + deuda", src: "c-deuda" },
              { label: "Pickup sin repartidor", src: "c-pickup" },
            ],
          },
          {
            key: "timeline",
            name: "Timeline de entrega",
            figmaName: "timeline",
            desc: "Un componente narrativo: cuenta con hora exacta cada intento de contacto y la resolución final, diferenciando cada tipo de entrega.",
            props: ["show-heading", "delivery-info", "more-events"],
            cases: [
              { label: "Entrega en portería", src: "t-porteria" },
              { label: "Entrega personal", src: "t-personal" },
              { label: "Portería por elección del usuario", src: "t-eleccion" },
              { label: "Lugar seguro", src: "t-lugar-seguro" },
            ],
          },
        ],
      },
      anatomy: {
        body:
          "Cada componente se documentó con su anatomía, sus medidas y todos sus casos de uso, con notas para Ingeniería y QA. Así, el equipo de desarrollo construía exactamente lo que estaba especificado y el resto del equipo de diseño podía usarlo sin preguntar.",
        boards: [
          { src: "projects/10.%20Rappi%20DS%20post%20order/doc-contact.webp", caption: "Contact-RT: anatomía por secciones, sombra del DS y más de 25 casos documentados (propinas, tipos de mensaje, casos especiales y retail)." },
          { src: "projects/10.%20Rappi%20DS%20post%20order/doc-header.webp", caption: "Header: variantes por vertical, estados y elevación, más los headers de las internas de detalle y resumen." },
        ],
      },
      reuse: {
        body:
          "Antes de crear algo nuevo, revisé qué ya existía en el Design System. Mapa, gradientes, burbuja de mensaje, imagen del repartidor, pin de ubicación y entradas a soporte se reutilizaron, documentando cómo y con qué medidas se integraban en la nueva experiencia.",
        figures: [
          { src: "projects/10.%20Rappi%20DS%20post%20order/doc-map-base.webp", caption: "map-base: espacios y gradientes sobre el mapa." },
          { src: "projects/10.%20Rappi%20DS%20post%20order/doc-gradient.webp", caption: "_gradient: transición del mapa al contenido." },
          { src: "projects/10.%20Rappi%20DS%20post%20order/doc-burbuja.webp", caption: "message-bubble: tamaños y límite de caracteres." },
          { src: "projects/10.%20Rappi%20DS%20post%20order/doc-pin.webp", caption: "pin-refine-location: medidas y sombra." },
        ],
      },
      specs: {
        body:
          "Las propiedades de cada componente se definieron junto con Ingeniería frontend y backend: qué cambia por variante, qué se activa con un booleano y qué dato llega desde el servicio. Esa tabla fue el contrato entre diseño y desarrollo.",
        boards: [
          { src: "projects/10.%20Rappi%20DS%20post%20order/doc-widget-tabla.webp", caption: "Tabla de propiedades del delivery widget: variantes por tipo y estado, con y sin mensaje." },
          { src: "projects/10.%20Rappi%20DS%20post%20order/doc-timeline.webp", caption: "Timeline: una variante por tipo de entrega, con eventos adicionales." },
        ],
      },
      system: {
        body: [
          "Estos componentes nacieron dentro de un Design System robusto, que construí y mantuve junto a un equipo de más de 25 diseñadores: tokens semánticos de color, tipografía, elevaciones y familias de componentes compartidas por toda la app.",
          "Trabajar sobre ese sistema significó usar sus tokens en lugar de valores sueltos, seguir su nomenclatura y documentar cada pieza nueva para que cualquier diseñador del equipo pudiera adoptarla.",
        ],
        families: ["Checkout list", "Credit card", "List heading", "List item", "Offers / coupons", "OT card", "OT list", "Product card", "Product list", "Store grid", "Turbo card", "Maps"],
        board: { src: "projects/10.%20Rappi%20DS%20post%20order/doc-semantics.webp", caption: "Tokens semánticos de color del Design System: ink, background, surface, borders, programas, skeleton y chart." },
      },
      collaboration: {
        title: "Diseñado con Ingeniería, no entregado a Ingeniería.",
        body: [
          "Cada componente se construyó en conjunto con el equipo de tech. Con frontend definimos variantes, propiedades y comportamientos (sticky, skeleton, truncado de texto); con backend, qué datos llegaban del servicio de órdenes y qué pasaba cuando no llegaban.",
          "Esa colaboración es la que permitió llegar a una solución óptima: componentes que se ven bien y que, además, se alimentan solos y se degradan sin romper la pantalla.",
        ],
        teams: ["Ingeniería frontend", "Ingeniería backend", "Engineering Lead", "Producto", "Equipo de Design System"],
      },
      decisions: [
        { law: "Consistencia y estándares", t: "Arquitectura, no estética", d: "Componentes configurables por reglas en lugar de diseñar cada pantalla post-entrega por separado." },
        { law: "Prevención de errores", t: "Estados explícitos desde el inicio", d: "Sin imagen, sin logo, texto truncado y skeleton se definieron junto al estado ideal, no como parches." },
        { law: "Recognition over recall", t: "Cada vertical se reconoce", d: "Ícono y lenguaje visual propios por vertical dentro del mismo header." },
        { law: "Componentizar la narrativa", t: "El timeline cuenta la historia", d: "No es solo visual: relata con precisión de minuto qué pasó con el pedido." },
      ],
      challenge: {
        kicker: "El reto",
        title: "Sostener múltiples verticales, resultados y estados sin perder consistencia.",
        body: [
          "El reto no fue una pantalla en particular, sino diseñar un sistema capaz de combinar todo lo anterior manteniéndose coherente, y que otros equipos pudieran reutilizar después.",
        ],
        items: [
          "Terminología e iconografía alineadas con el DS",
          "Reglas de uso claras para cada propiedad",
          "Estados de falla definidos junto al estado ideal",
          "Documentación pensada para otros diseñadores",
        ],
      },
      impact: {
        cards: [
          { n: "Sistema", t: "Una librería publicada y documentada", d: "Componentes nuevos dentro del Design System, con sus variantes, propiedades y casos de uso." },
          { n: "Producto", t: "La base de Post Order 2.0", d: "Toda la experiencia post-entrega, en Mobile y Web, se construyó con estas piezas." },
          { n: "Equipo", t: "Reutilizable más allá del proyecto", d: "Pensada para escalar a otros contextos donde Rappi represente el ciclo de vida de un pedido." },
        ],
      },
      lessons: [
        "Diseñar un sistema de componentes, y no pantallas sueltas, es lo que mantiene consistente un proyecto con múltiples verticales y resultados de entrega.",
        "Definir los estados de error y vacío junto al estado ideal evita parches de último momento antes de producción.",
        "Revisar primero lo que ya existe en el Design System ahorra trabajo y mantiene el lenguaje común del equipo.",
        "Trabajar con el Design System, y no de forma aislada, es lo que hace que el trabajo sirva a otros equipos después.",
      ],
    },
  },
  {
    slug: "detalle-metodo-pago-rappi",
    title: "Detalle de método de pago - Rappi",
    subtitle: "Centro de control, prevención de fraude y monetización",
    category: "UX/UI",
    year: "2026",
    role: "Product Designer Sr.",
    tools: "Figma, FigJam",
    gradient: "linear-gradient(150deg, #ff7a3d, #ff2d55)",
    template: "rappi-details",
    cardPhone: "projects/4.%20details-payment-method-rappi/card-detalles.png",
    summary:
      "Rediseño integral de la pantalla de detalle de un método de pago en Rappi: de una pantalla que casi nadie usaba a un centro de control con autogestión, visibilidad transaccional para prevenir fraude y un espacio de promociones para bancos y franquicias.",
    challenge:
      "Menos del 8% de los usuarios lograba gestionar efectivamente un método de pago desde su detalle. La pantalla tampoco mostraba las transacciones hechas con ese método ni aprovechaba su potencial comercial con marcas de pago.",
    approach:
      "Benchmark de bancos, wallets y fintechs como punto de partida, y un rol de conector entre Producto, Franquicias, Ingeniería y Analítica para rediseñar la pantalla sin romper los servicios y flujos que otros equipos ya tenían conectados a ella.",
    result:
      "Una propuesta consolidada presentada a stakeholders para decidir un cambio general del producto, con un caso de negocio construido sobre la línea base medida de menos del 8% de gestión efectiva.",
    story: {
      tagline:
        "Del detalle que nadie usaba a un centro de control, seguridad y monetización.",
      context: [
        { label: "Rol", value: "Product Designer Sr." },
        {
          label: "Equipo",
          value: "PM Pagos · PM Franquicias · Ingeniería · Analítica · Proveedores",
        },
        { label: "Producto", value: "App Rappi — Detalle de método de pago" },
        { label: "Tipo", value: "Rediseño integral presentado a stakeholders" },
      ],
      heroMockup: "projects/4.%20details-payment-method-rappi/collage.png",
      problem: {
        body:
          "La pantalla de detalle de un método de pago existía, pero apenas se usaba: el usuario no lograba marcar un método como principal o secundario, revisar una verificación pendiente o confirmar si estaba asociado a una suscripción como Rappi Pro. Además, dejaba tres necesidades sin resolver:",
        points: [
          {
            t: "Falta de detalle funcional",
            d: "El usuario no tenía visibilidad real de todo lo que podía hacer con un método de pago dentro de la app.",
          },
          {
            t: "Falta de trazabilidad y seguridad",
            d: "No había forma de ver las transacciones hechas con ese método, dentro y fuera de Rappi, para detectar un fraude a tiempo, ni una ruta clara para reportarlo.",
          },
          {
            t: "Oportunidad comercial sin explotar",
            d: "La pantalla no se aprovechaba para que bancos y franquicias (Visa, Mastercard, entre otros) promocionaran productos o comercios asociados a su método de pago.",
          },
        ],
        baseline: {
          value: "<8%",
          label:
            "de los usuarios de Rappi lograba gestionar efectivamente un método de pago desde su detalle.",
        },
        beforeImage: {
          src: "projects/4.%20details-payment-method-rappi/old-new.png",
          label: "Antes y después",
          caption:
            "Antes, el detalle solo mostraba la tarjeta y una verificación pendiente. El rediseño expone fecha de vencimiento, verificación, nombre personalizado, rol principal o secundario y suscripciones asociadas, organizados en tres pestañas: Detalles, Transacciones y Promos.",
        },
      },
      objectives: [
        {
          n: "01",
          t: "Mejorar la conversión",
          d: "Llevar la gestión efectiva por encima del 8% actual, dándole al usuario razones y facilidad reales para gestionar su método de pago.",
        },
        {
          n: "02",
          t: "Visibilidad y control transaccional",
          d: "Que el usuario entienda qué se cobró, qué se reembolsó y hacia dónde va su dinero, y pueda prevenir o reportar un fraude rápidamente.",
        },
        {
          n: "03",
          t: "Espacio de monetización con marcas",
          d: "Mostrar promociones de productos y comercios atadas específicamente al método de pago del usuario.",
        },
      ],
      research: {
        body:
          "Hice un benchmark de aplicaciones y productos que funcionan como métodos de pago —bancos, wallets y fintechs— para entender cómo resolvían el detalle de un método, la gestión de transacciones y la prevención de fraude. Ese análisis de necesidades del usuario, priorizado entre lo indispensable (have to), lo deseable (nice to have) y las preguntas abiertas (to think), fue el punto de partida del rediseño.",
        board: {
          src: "projects/4.%20details-payment-method-rappi/benchmark.png",
          caption:
            "Benchmark de apps de delivery, wallets y productos que no son wallets, y el análisis de necesidades priorizado que salió de él. Usa los controles de zoom para ver el detalle.",
        },
      },
      proposal: {
        title: "Tres pestañas, un solo centro de control.",
        overview: {
          src: "projects/4.%20details-payment-method-rappi/tres-pestanas.png",
          caption:
            "Detalles, Transacciones y Promos: la gestión, la seguridad y los beneficios del método de pago, separados por intención pero en una misma pantalla.",
        },
        acts: [
          {
            kicker: "Propuesta · 01",
            title: "Mayor detalle y autogestión del método de pago",
            body:
              "Todas las acciones disponibles quedan expuestas con claridad: marcar el método como principal o secundario, revisar el estado de verificación y ver si está asociado a una suscripción activa como Rappi Pro. Eso respondía a la causa de la baja conversión: el usuario no sabía que podía hacerlo, o no lo encontraba.",
            figures: [
              {
                src: "projects/4.%20details-payment-method-rappi/cambio-principal.png",
                caption:
                  "Cambiar el método principal desde el detalle, con una confirmación explícita cuando el cambio reemplaza al método actual.",
                wide: true,
              },
            ],
          },
          {
            kicker: "Propuesta · 02",
            title: "Visibilidad transaccional y prevención de fraude",
            body:
              "El historial de transacciones hechas con ese método, dentro y fuera de Rappi, con claridad sobre cobros, reembolsos y destino del dinero. El usuario puede detectar algo inusual a tiempo y, si ya ocurrió un fraude, reportarlo desde «No reconozco un cobro» y ser dirigido a soporte para contener el impacto.",
            phones: [
              "projects/4.%20details-payment-method-rappi/transacciones.png",
              "projects/4.%20details-payment-method-rappi/reembolsos.png",
            ],
          },
          {
            kicker: "Propuesta · 03",
            title: "Espacio de monetización para marcas y franquicias",
            body:
              "Junto con el equipo de gestión de proveedores diseñamos un espacio donde bancos y franquicias (Visa, Mastercard, entre otros) dirigen promociones de restaurantes y productos ligadas al método de pago del usuario: una pantalla de gestión convertida en un canal de valor para el usuario y para las marcas.",
            figures: [
              {
                src: "projects/4.%20details-payment-method-rappi/promos.png",
                caption:
                  "Pestaña Promos: beneficios de la franquicia y del banco emisor, en un bloque separado de la gestión y la seguridad.",
              },
              {
                src: "projects/4.%20details-payment-method-rappi/vencimiento-dinamico.png",
                caption:
                  "Datos del método editables en contexto, como la fecha de vencimiento, sin salir del detalle.",
              },
            ],
          },
        ],
      },
      decisions: [
        {
          law: "Jakob's Law",
          t: "Patrones que el usuario ya conoce",
          d: "Basar buena parte de la estructura en productos financieros que el usuario ya usa (bancos, wallets) redujo la curva de aprendizaje de una pantalla subutilizada por poco intuitiva.",
        },
        {
          law: "Visibility of system status",
          t: "Estados persistentes, no en submenús",
          d: "Verificación, principal/secundario y alertas de posible fraude se hicieron visibles de forma persistente: el problema central era que el usuario no sabía qué podía hacer ahí.",
        },
        {
          law: "Recuperación de errores",
          t: "El reporte como inicio de una resolución",
          d: "El flujo de reporte de fraude no termina en una confirmación genérica: dirige activamente al usuario hacia soporte técnico.",
        },
        {
          law: "Progressive disclosure",
          t: "Transacciones en niveles",
          d: "Cobro, reembolso y origen o destino del dinero se organizaron en niveles, para no saturar la vista general y dar acceso inmediato al detalle cuando se necesita.",
        },
        {
          law: "Separación de audiencias",
          t: "Lo comercial no compite con el control",
          d: "El módulo de promociones es un bloque diferenciado del área de gestión y seguridad, que es la razón principal por la que el usuario entra a esta pantalla.",
        },
      ],
      connector: {
        kicker: "Mi rol",
        title: "Conector entre equipos con objetivos distintos.",
        body: [
          "Esta pantalla no vivía sola: estaba conectada a servicios y flujos que otros equipos ya usaban. Mi rol fue enlazar las necesidades de Producto, Analítica, Ingeniería y Franquicias contra los tiempos y recursos reales de Ingeniería, y traducir las conexiones disponibles vía API de cada franquicia en decisiones de diseño viables.",
          "Fui el punto de conexión entre todos estos equipos y quien llevó la propuesta consolidada a los stakeholders para sustentar la decisión de un cambio general en este producto.",
        ],
        teams: [
          "Product Manager · Pagos",
          "Product Manager · Franquicias",
          "Ingeniería",
          "Analítica de datos",
          "Gestión de proveedores y franquicias",
        ],
      },
      technicalChallenge: {
        kicker: "El reto técnico",
        title: "Rediseñar sin romper lo que ya dependía de esta pantalla.",
        body: [
          "El mayor reto no fue proponer más funcionalidad, sino hacerlo sin alterar las conexiones que otros equipos y servicios ya tenían con este módulo. Un ajuste visual o de backend mal calculado podía romper esos flujos.",
          "Diseñar aquí significó entender las restricciones de esos equipos desde el principio, no como una validación posterior.",
        ],
        outcomes: [
          "Sumar detalle, transacciones y promociones sin desconectar ni modificar integraciones existentes.",
          "Tratar las restricciones de otros equipos como input de diseño desde el día uno.",
          "Traducir las conexiones vía API de cada franquicia en decisiones de diseño viables.",
        ],
      },
      impact: {
        body:
          "El caso de negocio se construyó sobre el problema de conversión medido. La línea base de menos del 8% de gestión efectiva es lo que el rediseño busca mover, atacando las tres causas identificadas:",
        hypotheses: [
          "Aumento de la gestión efectiva de métodos de pago sobre la línea base de menos del 8%, al hacer visibles y accesibles las acciones disponibles.",
          "Detección y reporte de fraude más tempranos, con una ruta directa a soporte que contiene el impacto antes de que escale.",
          "Un motivo para volver a la pantalla y un nuevo canal de valor para bancos y franquicias con promociones ligadas al método de pago.",
        ],
      },
      lessons: [
        "Un problema de conversión bajo no siempre es un problema de UI: aquí era, sobre todo, que el usuario no sabía que la pantalla podía resolverle algo (gestión, seguridad, beneficios).",
        "Diseñar prevención de fraude no es solo mostrar datos: es diseñar la ruta de acción después de que el usuario detecta algo raro. Sin esa ruta, la visibilidad no genera control real.",
        "Coordinar un rediseño que toca a Producto, Franquicias, Ingeniería y Analítica exige tanto habilidad de diseño como de negociación; el diseño visual fue la parte más pequeña del trabajo real.",
      ],
    },
  },
  {
    slug: "app-a-web-con-ia-rappi",
    title: "De app a Web con IA",
    subtitle: "Optimización de componentes de Design System - Rappi",
    category: "UX/UI",
    year: "2025",
    role: "Product Designer",
    tools: "Figma, IA",
    gradient: "linear-gradient(150deg, #ff7a3d, #ff2d55)",
    template: "rappi-web",
    cardDesktop: "projects/5.%20rappi-payments-web/card-web.png",
    summary:
      "Actualización del módulo de métodos de pago de Rappi Web para igualar la experiencia de App en Desktop: más de 30 componentes del Design System adaptados con IA, QA de paridad en desarrollo y flujos nuevos que Web no tenía.",
    challenge:
      "El módulo de métodos de pago en Web se había quedado atrás frente a App, y ese descuido se convirtió en una puerta de entrada para el fraude con métodos de pago falsos.",
    approach:
      "Llevar a Web los mismos estándares de experiencia de App, usando IA para absorber el trabajo mecánico de adaptar el Design System a Desktop y concentrar el criterio del equipo en la revisión.",
    result:
      "En producción y validado en QA: 30+ componentes convertidos con un ahorro de más del 75% del tiempo de diseño, y paridad funcional con App en reembolsos y deudas pendientes.",
    story: {
      tagline:
        "Cerrar la brecha de seguridad entre App y Web, y escalar el Design System con IA.",
      context: [
        { label: "Rol", value: "Product Designer" },
        {
          label: "Equipo",
          value: "Managers · Ingeniería · QA · Fraude/Analítica · Design System",
        },
        { label: "Producto", value: "Rappi Web — Métodos de pago (App → Desktop)" },
        { label: "Estado", value: "En producción · validado en QA" },
      ],
      heroMockup: "projects/5.%20rappi-payments-web/hero-laptop.png",
      problem: {
        body:
          "Visual y funcionalmente desactualizado frente a App, el módulo de métodos de pago en Web dejó de ser solo un problema de experiencia: usuarios malintencionados encontraron en ese canal un hueco para operar con métodos de pago falsos.",
        points: [
          {
            t: "Un canal desactualizado",
            d: "Web no seguía los estándares visuales ni de interacción que App ya tenía, y el usuario no sentía que estuviera en el mismo producto.",
          },
          {
            t: "Una vulnerabilidad real de negocio",
            d: "Una experiencia débil se volvió, literalmente, la puerta de entrada más fácil para el fraude con métodos de pago falsos.",
          },
          {
            t: "Servicios que solo existían en App",
            d: "Gestiones como elegir el método de reembolso o ver deudas pendientes no estaban disponibles en Web.",
          },
        ],
        baseline: {
          value: "~60%",
          label:
            "de los casos de fraude por métodos de pago falsos, en los 9 países donde opera Rappi, se concentraba en el canal Web.",
          note:
            "Referencia interna aproximada, no oficial. La cifra oficial es confidencial.",
        },
      },
      objectives: [
        {
          n: "01",
          t: "Cerrar la brecha de seguridad",
          d: "Llevar a Web los mismos estándares de experiencia, y por lo tanto las mismas defensas de diseño, que ya existían en App.",
        },
        {
          n: "02",
          t: "Igualar la experiencia",
          d: "Que el usuario sintiera que está en el mismo producto, sin fricciones ni inconsistencias que generen desconfianza o nuevas rutas de abuso.",
        },
        {
          n: "03",
          t: "Escalar de forma eficiente",
          d: "Resolver el volumen de componentes del Design System que había que adaptar de App a Desktop sin multiplicar las horas de diseño.",
        },
      ],
      proposal: {
        title: "Tres frentes de trabajo, en paralelo.",
        intro:
          "Una vez el equipo de Fraude/Analítica detectó y dimensionó el problema, lideré la actualización de la experiencia Web para que el usuario viera y sintiera lo mismo que en App, pero resuelto para Desktop.",
        acts: [
          {
            kicker: "Frente · 01",
            title: "Conversión del Design System de App a Desktop, asistida por IA",
            body:
              "Junto con el equipo de diseñadores del Design System, usamos IA para optimizar la conversión de más de 30 componentes desde su origen en App hacia Desktop: revisión de auto-layouts, paddings y validación de tokens semánticos, entre otros ajustes estructurales que antes eran puramente manuales.",
            stats: [
              { value: "30+", label: "componentes convertidos de App a Desktop" },
              { value: "+80h → <20h", label: "de trabajo de diseño en toda la conversión" },
              { value: ">75%", label: "de ahorro de tiempo, sin perder consistencia" },
            ],
            figures: [
              {
                src: "projects/5.%20rappi-payments-web/agregar-metodo.png",
                caption:
                  "Agregar método de pago: listas y filas del sistema adaptadas al ancho de Desktop.",
              },
              {
                src: "projects/5.%20rappi-payments-web/agregar-tarjeta.png",
                caption:
                  "Añadir tarjeta: campos, tarjeta dinámica y botón principal con los mismos tokens semánticos de App.",
              },
            ],
          },
          {
            kicker: "Frente · 02",
            title: "QA y pruebas de usabilidad en ambiente de desarrollo",
            body:
              "Después de la implementación en Dev participé directamente en pruebas de usabilidad y QA de la interfaz, validando que la experiencia en Web fuera lo más fiel posible al proceso que el usuario ya conocía en App: no solo en lo visual, también en comportamiento e interacción.",
            figures: [
              {
                src: "projects/5.%20rappi-payments-web/challenge-cvv.png",
                caption:
                  "Verificación de tarjeta (CVV) en el checkout: el mismo challenge de seguridad de App, ahora en Web.",
                wide: true,
              },
              {
                src: "projects/5.%20rappi-payments-web/fraude-respuesta.png",
                caption:
                  "Respuesta ante una cuenta que incumple los términos: salida clara hacia soporte.",
              },
              {
                src: "projects/5.%20rappi-payments-web/error-carga.png",
                caption:
                  "Estados de error y reintento validados con el mismo comportamiento de App.",
              },
            ],
          },
          {
            kicker: "Frente · 03",
            title: "Flujos nuevos que Web no tenía",
            body:
              "Aproveché el proceso para cerrar otra brecha. Acordando tiempos con Ingeniería y alineado al roadmap con los managers, incorporé la selección de método de reembolso (refunds) y la visualización de deudas pendientes (debts), que antes el usuario solo podía gestionar desde la app móvil.",
            figures: [
              {
                src: "projects/5.%20rappi-payments-web/reembolsos.png",
                caption: "Método de reembolso: el usuario elige a dónde vuelve su dinero.",
              },
              {
                src: "projects/5.%20rappi-payments-web/deudas.png",
                caption: "Pagos pendientes: deudas visibles y pagables desde Web.",
              },
            ],
          },
        ],
      },
      decisions: [
        {
          law: "Consistency & standards",
          t: "Web como extensión de App",
          d: "El criterio rector fue que Web se comportara como una extensión coherente de App, no como un producto aparte, reduciendo la disonancia que un atacante (o un usuario legítimo desconfiado) podría explotar o malinterpretar.",
        },
        {
          law: "Design System",
          t: "Rigor como control de calidad",
          d: "Validar tokens semánticos y auto-layouts fue parte de la defensa: un componente mal adaptado podía reintroducir la misma inconsistencia que hizo vulnerable a Web.",
        },
        {
          law: "IA + criterio",
          t: "Multiplicador, no reemplazo",
          d: "La IA absorbió el trabajo mecánico de adaptar cada componente; el equipo de diseño se concentró en la revisión crítica de paddings, tokens y comportamiento.",
        },
        {
          law: "Paridad funcional",
          t: "Cada vacío es un hueco",
          d: "Incorporar reembolsos y deudas no fue solo ponerse al día: cada vacío funcional entre canales es, potencialmente, otra ruta para el abuso.",
        },
      ],
      impact: {
        stats: [
          { value: ">75%", label: "de ahorro de tiempo de diseño (de +80h a menos de 20h)" },
          { value: "30+", label: "componentes del Design System convertidos de App a Desktop" },
          { value: "2", label: "flujos nuevos en Web: método de reembolso y deudas pendientes" },
        ],
        body:
          "El proyecto está en producción, validado en QA con foco en paridad de experiencia frente a App. La métrica que cierra el caso de negocio, la reducción real del fraude vía Web, todavía está pendiente de medirse: el baseline de ~60% de los casos concentrados en Web es el punto de partida contra el que se evaluará.",
      },
      lessons: [
        "Un canal «secundario» puede convertirse en el punto más vulnerable del producto precisamente por estar descuidado: la deuda de experiencia también es deuda de seguridad.",
        "Usar IA para absorber el trabajo mecánico de escalar un Design System entre plataformas libera tiempo de diseño para lo que requiere criterio humano: revisión, consistencia y decisiones de producto.",
        "Cerrar brechas funcionales entre canales, no solo visuales, fue tan importante para la seguridad como para la experiencia: la paridad también es una estrategia de defensa.",
      ],
    },
  },
  {
    slug: "losdebuho-web",
    title: "Los de Búho",
    subtitle: "Sitio web para empresa de diseño",
    category: "Web",
    year: "2019",
    role: "Web Design, Front-end",
    tools: "WordPress, Illustrator, Figma",
    // Mismo tono del branding de Los de Búho (ver marca-losdebuho)
    gradient: "linear-gradient(135deg, #0a1f21, #00e0ee)",
    cardGradient: true,
    coverImage: "assets/losdebuho/ldb-home.png",
    screenshots: [
      "assets/losdebuho/portafolio.jpg",
      "assets/losdebuho/nosotros.jpg",
      "assets/losdebuho/hero.jpg",
    ],
    summary:
      "Como cofundador y Brand Manager de Los de Búho, lideré el rediseño de la página web para ofrecer servicios de diseño de productos interactivos, diseño de aplicaciones, páginas web, branding y creación de contenido audiovisual, con un enfoque en el uso de nuevas tecnologías.",
    challenge:
      "Necesitábamos darle un nuevo enfoque a la empresa, más digital, que mostrara nuestro portafolio de proyectos hasta la fecha y nos permitiera ir documentando cada trabajo realizado.",
    approach:
      "Usamos un diseño minimalista donde las imágenes fueran las protagonistas, con una estructura más clara para que los clientes encontraran fácilmente los servicios que ofrece Los de Búho, respaldados con ejemplos claros y categorizados.",
    result:
      "Una página más limpia, con un recorrido de 3 a 4 segundos para llegar a los proyectos, una optimización de palabras clave acorde al sector tech y un incremento de vistas del 1200% respecto al diseño anterior de la web.",
    metrics: [
      { value: "1200%", label: "Incremento en vistas" },
      { value: "3-4 seg", label: "Para llegar a los proyectos" },
    ],
  },
  {
    slug: "tu-billetera-rappi",
    title: "Tu billetera Rappi",
    subtitle: "Re-diseño de métodos de pago en delivery app",
    category: "UX/UI",
    year: "2026",
    role: "Product Designer Sr. + User Researcher",
    tools: "Figma, FigJam",
    gradient: "linear-gradient(150deg, #ff7a3d, #ff2d55)",
    template: "rappi-payments",
    cardPhone: "assets/rappi-payments/final-lista-base.png",
    summary:
      "Rediseño de la pantalla de Métodos de Pago de Rappi: de una superficie de bugs y fricción de navegación a una superficie de autogestión real para el usuario y de inventario negociable con marcas de pago para el negocio.",
    challenge:
      "La pantalla tenía dos capas de problema a la vez: de experiencia (fricción de navegación, autogestión inexistente, espacio mal aprovechado) y de negocio (ningún inventario diseñado para negociar Ads con marcas de pago).",
    approach:
      "Research directo con usuarios, benchmark de mercado con el PM, y una propuesta co-diseñada con Ingeniería desde etapas tempranas para que el cambio fuera viable dentro de una brecha real de capacidad entre Front y Back.",
    result:
      "En producción y en medición activa: -34% de fricción medida en visitas necesarias y acciones de autogestión completadas, con el impacto comercial en Ads aún por cuantificarse.",
    story: {
      tagline:
        "De una pantalla de bugs a una superficie de autogestión y de monetización.",
      context: [
        { label: "Rol", value: "Product Designer Sr. + User Researcher" },
        { label: "Equipo", value: "PM · Ingeniería (Front & Back) · Diseño" },
        { label: "Producto", value: "App Rappi — Métodos de pago" },
        { label: "Estado", value: "En producción — en medición activa" },
      ],
      heroMockup: "projects/tu-billetera-rappi/collage.png",
      problem: {
        intro:
          "La pantalla de Métodos de Pago tenía dos capas de problema: una de experiencia y otra de negocio.",
        experience: {
          title: "Desde experiencia",
          points: [
            "El usuario atravesaba varias pantallas antes de llegar a ver sus métodos de pago — fricción de navegación pura, sin valor agregado en el camino.",
            "Cada método individual ocupaba más espacio del necesario, empujando fuera del viewport funciones clave como pagos pendientes o el método de reembolso.",
            "No había autogestión real: el usuario no podía identificar qué métodos eran nuevos, cuáles estaban bloqueados, ni tener una vista completa de todos sus métodos a la vez.",
          ],
        },
        business: {
          title: "Desde negocio",
          text:
            "La pantalla no se aprovechaba como activo. Al ser el punto donde el usuario interactúa directamente con marcas de pago (tarjetas, bancos), tenía potencial de negociación comercial con Visa, Mastercard y bancos latinoamericanos (Bancolombia, Banco de Bogotá, Nu, entre otros) que el diseño anterior no contemplaba.",
        },
        beforeImage: {
          src: "projects/tu-billetera-rappi/old-new.png",
          label: "Antes",
          caption:
            "Cada método era una tarjeta a pantalla casi completa. Pagos pendientes y método de reembolso quedaban fuera del viewport, sin espacio real para autogestión ni para Ads.",
        },
      },
      objectives: [
        {
          n: "01",
          t: "Experiencia",
          d: "Reducir la fricción de navegación y dar autogestión real al usuario sobre sus métodos de pago.",
        },
        {
          n: "02",
          t: "Negocio",
          d: "Convertir la pantalla en un insumo viable para negociar espacios de Ads con marcas de pago, sin sacrificar la experiencia del usuario.",
        },
      ],
      research: {
        body:
          "Como User Researcher en este proyecto, entrevisté usuarios actuales de la app para entender cómo usaban —y dónde se frustraban— con sus métodos de pago. Ese research, junto con el análisis de la arquitectura de información existente, permitió jerarquizar las necesidades reales de los usuarios frente a sus métodos de pago, en lugar de asumirlas desde el equipo. En paralelo, trabajé con el PM en un benchmark de competidores y referentes (como Nu) para mapear patrones de mercado en gestión de métodos de pago y exposición de ofertas.",
      },
      process: {
        body:
          "El proyecto pasó por una fase abierta de wireframes y exploración de ideas antes de converger en la propuesta final, evaluando distintas formas de jerarquizar métodos, estados (nuevo, bloqueado, activo) y espacios para ofertas. Trabajé de la mano con Ingeniería (Front y Back) desde esta fase temprana para validar qué era técnicamente viable frente a la arquitectura existente de la pantalla, y con el PM para mantener la propuesta alineada al objetivo comercial de Ads.",
        board: {
          src: "projects/tu-billetera-rappi/process.png",
          caption:
            "Tablero de exploración: distintas jerarquías de método, estados y espacios de oferta evaluados antes de converger en la propuesta final. Usa los controles de zoom para ver el detalle de cada iteración.",
        },
      },
      proposal: {
        intro:
          "Un diseño más robusto y estructurado para la autogestión del usuario:",
        points: [
          {
            n: "01",
            t: "Jerarquía basada en necesidades reales",
            d: "El orden de los métodos se definió con datos de research, no con el orden en que el backend los devolvía.",
          },
          {
            n: "02",
            t: "Estados visibles y accionables",
            d: "Identificación clara de métodos nuevos y bloqueados, con su gestión, sin salir de la pantalla.",
          },
          {
            n: "03",
            t: "Rediseño del espacio",
            d: "Un método no ocupa más de lo necesario, liberando espacio visible para pagos pendientes y reembolso sin scroll oculto.",
          },
          {
            n: "04",
            t: "Espacio para ofertas atadas al método",
            d: "Pensado desde el inicio como inventario a negociar con marcas, no agregado después como parche.",
          },
        ],
        detailsImage: {
          src: "projects/tu-billetera-rappi/details.png",
          caption:
            "Detalle de estados dentro de un mismo método: destacado al expandirse, vencido con motivo explícito, o con su marca y moneda visibles — siempre accionable sin salir de la pantalla.",
        },
        evidence: [
          {
            src: "assets/rappi-payments/estado-bloqueado.png",
            caption:
              "Estado bloqueado con motivo explícito (tarjeta vencida), en lugar de solo deshabilitar el método sin contexto.",
          },
          {
            src: "assets/rappi-payments/estado-error-recarga.png",
            caption:
              "Falla de carga de pagos pendientes resuelta con estado y acción explícitos de recuperación, no con una pantalla vacía.",
          },
        ],
      },
      decisions: [
        {
          law: "Recognition over recall",
          t: "Estados con indicadores persistentes",
          d: "Nuevo, bloqueado o disponible se comunican de forma visual y persistente, para que el usuario no tenga que recordar el estado de un método que no ha usado en un tiempo.",
        },
        {
          law: "Jerarquía por frecuencia de uso real",
          t: "Priorización basada en datos, no en el backend",
          d: "El orden en pantalla se basó en research, no en un orden alfabético o cronológico por defecto — reduce el tiempo de escaneo para las tareas más comunes.",
        },
        {
          law: "Prevención de errores",
          t: "Estado y acción explícitos, no solo deshabilitado",
          d: "Los métodos bloqueados muestran por qué están bloqueados y qué hacer, en lugar de solo deshabilitar el elemento sin contexto.",
        },
        {
          law: "Diseño por restricción, no a pesar de ella",
          t: "El espacio de Ads, dentro del sistema de tarjetas",
          d: "El espacio para ofertas se integró dentro de la agrupación de métodos, no como banner adicional, para que la monetización no compitiera visualmente con la tarea principal.",
        },
      ],
      technicalChallenge: {
        kicker: "El reto técnico",
        title: "Diseñar para una brecha de capacidad Front/Back.",
        body: [
          "El mayor reto de este proyecto no fue visual, fue de secuenciación. El equipo de Front tenía más capacidad de construcción que el equipo de Back, lo que significaba que un rediseño dependiente de cambios profundos en la arquitectura de backend no se podría lanzar en los tiempos esperados por negocio.",
          "Mi rol fue diseñar una propuesta donde el cambio drástico fuera principalmente de UI y de reorganización de la información ya disponible, minimizando la dependencia de cambios estructurales en Back.",
        ],
        outcomes: [
          "Lanzar por fases, alineado a la capacidad real de cada equipo.",
          "Cumplir la expectativa de negocio (experiencia + inventario para Ads) sin bloquear el proyecto a la disponibilidad de Back.",
          "Sostener la conversación con Ingeniería en términos de viabilidad real, no solo de deseabilidad desde diseño.",
        ],
      },
      impact: {
        value: "-34%",
        label:
          "de fricción, medida por la cantidad de visitas necesarias y las acciones de autogestión completadas por los usuarios sobre sus métodos de pago.",
        note:
          "El diseño está en producción y en medición activa (ventana de 15 días al momento de este corte, con el experimento aún en marcha). El impacto sobre la negociación comercial con marcas (Ads) todavía está por cuantificarse, una vez la pantalla se use como insumo formal de negociación.",
      },
      lessons: [
        "Investigar directamente con usuarios —en lugar de heredar supuestos del diseño anterior— cambió la jerarquización de métodos de pago que terminamos usando, y no coincidía con lo que el equipo asumía inicialmente.",
        "Diseñar el espacio comercial (Ads) dentro del sistema visual desde el research inicial, y no como capa posterior, evitó fricción entre el objetivo de negocio y la experiencia del usuario.",
        "La restricción técnica (brecha Front/Back) no fue un obstáculo a resolver después del diseño, sino un input de diseño desde el día uno.",
      ],
    },
  },
  {
    slug: "marca-losdebuho",
    title: "Creación de marca LDB",
    subtitle: "Branding para empresa de interactivos",
    category: "Branding",
    year: "2016",
    role: "Brand Designer · Cofundador",
    tools: "Illustrator, Figma",
    gradient: "linear-gradient(135deg, #0a1f21, #00e0ee)",
    template: "brand-ldb",
    cardLogo: "projects/brand-losdebuho/logo-icon-white.png",
    summary:
      "Identidad de marca para Los de Búho, estudio de diseño y desarrollo de productos interactivos que cofundé: un isotipo que combina el gesto de un visor con la mirada de un búho, y su sistema completo de aplicación.",
    challenge:
      "La marca debía comunicar dos cosas a la vez: la agudeza de un estudio de diseño y la naturaleza técnica e interactiva de lo que construye, en un ícono simple que funcionara igual de bien como favicon que como señalética.",
    approach:
      "Se construyó un isotipo modular a partir de dos formas superpuestas —esquinas de visor y libro abierto— documentado en un sistema de marca con paleta, tipografía, variaciones de color y reglas de uso claras.",
    result:
      "La marca sigue vigente hoy como identidad activa del estudio, aplicada en su sitio web, redes y papelería, con un sistema de reglas que ha permitido mantenerla consistente en cada pieza nueva.",
    brand: {
      tagline:
        "Un ícono que enfoca lo interactivo con la mirada atenta de un búho.",
      context: [
        { label: "Cliente", value: "Los de Búho" },
        { label: "Rol", value: "Brand Designer · Cofundador" },
        { label: "Industria", value: "Diseño interactivo y desarrollo digital" },
        { label: "Año", value: "2016" },
      ],
      heroLogo: "projects/brand-losdebuho/logo-lockup-cyan.png",
      brief: {
        heading: "Una marca para un estudio que piensa en interactivo.",
        body:
          "Los de Búho es un estudio de diseño y desarrollo digital especializado en productos interactivos: e-commerce, aplicaciones, pantallas táctiles y algunos de los primeros proyectos comerciales de realidad virtual de la región. Como cofundador, lideré la creación de la marca desde cero: naming ya definido, identidad visual por construir.",
      },
      concept: {
        heading: "Una abstracción del búho: visión de 360°, enfoque interactivo.",
        body:
          "El isotipo es una abstracción del búho: un animal capaz de girar la cabeza casi 360° y ver lo que ocurre a su alrededor sin puntos ciegos. Los de Búho nació como estudio de fotografía, contenido audiovisual y proyectos interactivos, así que esa visión total se combinó con el gesto más común de esos oficios: el visor que enfoca antes de disparar.",
        pillars: [
          {
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
            t: "Visión de 360°",
            d: "El búho gira la cabeza casi por completo para observar todo su entorno sin moverse. Esa capacidad de ver sin puntos ciegos se abstrae en los ojos del isotipo, dibujados con un libro abierto.",
          },
          {
            icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3H4a1 1 0 0 0-1 1v3"/><path d="M17 3h3a1 1 0 0 1 1 1v3"/><path d="M7 21H4a1 1 0 0 1-1-1v-3"/><path d="M17 21h3a1 1 0 0 0 1-1v-3"/></svg>',
            t: "Enfoque fotográfico y audiovisual",
            d: "Las cuatro esquinas citan el visor de una cámara o el marcador de encuadre de un video: el gesto de enfocar antes de capturar, el lenguaje con el que el estudio trabaja a diario.",
          },
        ],
      },
      construction: {
        heading: "Un ícono modular, pensado para no romperse en ninguna aplicación.",
        icon: "projects/brand-losdebuho/logo-construction.png",
        body:
          "El espacio de seguridad alrededor del ícono equivale a la altura de una de sus esquinas (X). Ningún elemento —texto, fotografía, otro logo— debe invadir ese margen.",
        rules: [
          "Tamaño mínimo digital: 32px de alto para el isotipo, 120px de ancho para el logotipo completo.",
          "El isotipo se usa solo, sin el nombre, cuando la marca ya es reconocible en el contexto (redes sociales, favicon, merchandising).",
          "El logotipo completo es el predeterminado en cualquier pieza donde la marca se presenta por primera vez.",
        ],
      },
      palette: {
        heading: "Colores con intención, no decoración.",
        intro:
          "Una paleta corta a propósito: un color neutro para el uso cotidiano, un acento saturado reservado para momentos digitales, y dos alternativas de contraste para fondos claros u oscuros.",
        colors: [
          {
            name: "Carbón",
            hex: "#333333",
            desc: "Color principal para texto y aplicaciones sobre fondos claros; transmite seriedad técnica sin perder calidez.",
          },
          {
            name: "Cian eléctrico",
            hex: "#00FFFF",
            desc: "Acento y firma digital de la marca; se reserva para momentos interactivos, enlaces y hover states.",
          },
          {
            name: "Blanco",
            hex: "#FFFFFF",
            desc: "Para aplicaciones sobre fondos oscuros o de color, manteniendo el máximo contraste posible.",
          },
          {
            name: "Gris azulado",
            hex: "#BDCCD4",
            desc: "Tono secundario para elementos de apoyo que no deben competir con el color principal.",
          },
        ],
      },
      typography: {
        heading: "Montserrat, la misma voz geométrica del ícono.",
        body:
          "La tipografía del logotipo es Montserrat Bold: geométrica, de rasgos rectos y contadores muy circulares — el mismo vocabulario visual de las esquinas y los círculos del isotipo. Para piezas extendidas (presentaciones, web, documentos) se usa la familia completa: Regular en texto corrido, SemiBold y Bold en títulos.",
        glyphs:
          "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ abcdefghijklmnñopqrstuvwxyz 0123456789",
        weights: [
          { name: "Regular · 400", weight: 400, sample: "Diseño centrado en el usuario" },
          { name: "SemiBold · 600", weight: 600, sample: "Productos interactivos" },
          { name: "Bold · 700", weight: 700, sample: "Los de Búho" },
        ],
      },
      variations: {
        heading: "Un sistema que funciona en cualquier fondo.",
        intro:
          "Cuatro colores autorizados —carbón, cian, blanco y gris azulado— aplicados tanto al logotipo completo como al isotipo, para cubrir fondos claros, oscuros y de color.",
        lockups: [
          { src: "projects/brand-losdebuho/logo-lockup-dark.png", label: "Carbón", bg: "light" },
          { src: "projects/brand-losdebuho/logo-lockup-cyan.png", label: "Cian", bg: "cyan" },
          { src: "projects/brand-losdebuho/logo-lockup-white.png", label: "Blanco", bg: "dark" },
          { src: "projects/brand-losdebuho/logo-lockup-silver.png", label: "Gris azulado", bg: "dark" },
        ],
        icons: [
          { src: "projects/brand-losdebuho/logo-icon-dark.png", label: "Carbón", bg: "light" },
          { src: "projects/brand-losdebuho/logo-icon-cyan.png", label: "Cian", bg: "cyan" },
          { src: "projects/brand-losdebuho/logo-icon-white.png", label: "Blanco", bg: "dark" },
          { src: "projects/brand-losdebuho/logo-icon-silver.png", label: "Gris azulado", bg: "dark" },
        ],
      },
      applications: {
        heading: "La marca en uso, no solo en el manual.",
        body:
          "La aplicación más visible del sistema es el sitio web del estudio, que documentamos como proyecto aparte en este portafolio. El ícono funciona igual de bien como favicon, marca de agua de video o membrete de propuestas comerciales.",
        image: "assets/losdebuho/ldb-home.png",
        webProjectSlug: "losdebuho-web",
        externalUrl: "https://losdebuho.co",
      },
      closing:
        "Diez años después, este ícono sigue siendo el punto de entrada visual a cada proyecto interactivo que sale del estudio — la misma visión de 360°, aplicada en cada pieza nueva.",
    },
  },
  {
    slug: "merchant-portal-trato",
    title: "Merchant Portal - Trato",
    subtitle: "Portal PSP como nuevo modelo de negocio",
    category: "Product Design",
    categories: ["Product Design", "UX/UI", "User Research"],
    year: "2022",
    role: "Product Designer + Product Manager",
    tools: "Figma, FigJam, Jira",
    gradient: "linear-gradient(150deg, #0b2a5b, #0a64d8)",
    template: "trato",
    connector: { label: "Creación de marca", href: "#/proyecto/marca-trato" },
    cardDesktop: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/card-trato.png",
    cardDesktopTop: "30%",
    summary:
      "Trato: el portal web de comercios con el que Rappi buscó convertirse en un PSP (Proveedor de Servicios de Pago), fuera de su app. Un producto B2B de escritorio construido desde cero y lanzado en Chile y Colombia.",
    challenge:
      "Construir un producto que Rappi nunca había tenido: un portal B2B con onboarding legal y bancario por país, usuarios y permisos dentro de una misma empresa, visibilidad de transacciones y retiro de dinero.",
    approach:
      "Research en vivo con merchants, un Customer Journey Map completo, un onboarding rediseñado con un solo momento de validación y un portal pensado por país, tipo de entidad legal y rol de usuario.",
    result:
      "Trato salió a producción a los 8 meses, en Chile y Colombia, y llegó a tener hasta 50 comercios registrados antes de que la compañía pausara la línea de negocio PSP.",
    story: {
      tagline:
        "Construir desde cero una nueva línea de negocio de Rappi, fuera de la app de Rappi.",
      context: [
        { label: "Rol", value: "Product Designer + Product Manager" },
        { label: "Equipo", value: "5 desarrolladores · Engineering Lead · Producto · Diseño" },
        { label: "Producto", value: "Trato by Rappi — Portal de Merchants (Desktop)" },
        { label: "Estado", value: "Lanzado en Chile y Colombia · hoy en pausa (On Hold)" },
      ],
      video: {
        src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/experiencia-trato.mp4",
        poster: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/poster-trato.jpg",
        caption:
          "La experiencia completa: selección de país, landing, acceso con código, onboarding del comercio, estados del dashboard, Mi Comercio con permisos y soporte con Kustomer.",
      },
      problem: {
        body:
          "Rappi quería una línea de negocio que no dependiera de su app: convertirse en un PSP, al estilo de dLocal o Stripe, apalancado en algo que ningún competidor nuevo tiene desde el día uno: la base de clientes y comercios de Rappi y una tecnología de pagos ya probada en producción. Para lograrlo había que construir un producto que no existía:",
        points: [
          {
            t: "Un portal B2B, no una app de consumo",
            d: "Dirigido a comercios y no a consumidores finales, en escritorio y con otra lógica de uso.",
          },
          {
            t: "Onboarding legal y bancario por país",
            d: "Cada país y cada tipo de entidad legal exige documentos y validaciones distintas.",
          },
          {
            t: "Una empresa, muchas personas",
            d: "Usuarios y permisos dentro del mismo comercio, visibilidad de transacciones y retiro de dinero.",
          },
        ],
        quote:
          "Nada de esto existía todavía en Rappi, ni como producto ni como experiencia.",
      },
      objectives: [
        {
          n: "01",
          t: "Un portal abierto a cualquier comercio",
          d: "Que cualquier negocio, no solo los aliados actuales de Rappi, pudiera registrarse, validarse y empezar a aceptar pagos con la tecnología de Rappi.",
        },
        {
          n: "02",
          t: "Dos mercados desde el diseño",
          d: "Lanzar en dos países con los requisitos legales y regulatorios resueltos desde el onboarding, no como un parche posterior.",
        },
        {
          n: "03",
          t: "Validar con comercios reales",
          d: "Probar la hipótesis de negocio con clientes reales antes de escalar la inversión en la nueva línea.",
        },
      ],
      research: {
        body:
          "Lideré, junto con el equipo, sesiones de User Research con merchants en vivo, grabadas y documentadas, para validar supuestos de negocio y funcionalidades del prototipo. Una de las pruebas más importantes fue la de usabilidad de carga de documentos. El Customer Journey Map documentó el recorrido completo del merchant, desde el primer contacto comercial hasta los retiros de dinero.",
        baseline: {
          value: "15–20 días",
          label:
            "tomaba el onboarding en el escenario original (contacto comercial, documentación, carga y validación de documentos): el tramo con más fricción y ansiedad de todo el journey.",
        },
        quotes: [
          "«Ojalá no me vaya a pedir más documentos»",
          "«Que no sea muy complicado subir todo esto»",
        ],
        board: {
          src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/customer-journey-map.jpg",
          caption:
            "Customer Journey Map del merchant en Trato: onboarding, administrativo, integración y cashouts, con necesidades, expectativas, feeling y timing por etapa.",
        },
      },
      pm: {
        kicker: "Mi rol como Product Manager",
        title: "De varios momentos de validación a uno solo.",
        body: [
          "Durante varios meses asumí también el rol de Product Manager: definí y seguí los OKRs, validé métricas de negocio con los stakeholders y lideré el seguimiento del equipo de desarrollo en Jira, bajo Scrum.",
          "Mi aporte más concreto en ese rol fue rediseñar el flujo de onboarding del comercio. Con el Customer Journey Map como base, propuse pasar de varios momentos de validación separados (legal, bancaria y documental) a uno solo, consolidando la carga de información en un formulario único y reemplazando la firma física del contrato por firma digital.",
        ],
        items: [
          "Definición y seguimiento de OKRs",
          "Validación de métricas con stakeholders",
          "Gestión del equipo en Jira bajo Scrum",
          "Rediseño del flujo de onboarding",
        ],
        boards: [
          {
            src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/flujo-actual.jpg",
            caption: "Flujo actual de onboarding, antes de la propuesta: varios momentos de validación separados.",
          },
          {
            src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/flujo-propuesto.jpg",
            caption: "Flujo propuesto: un solo momento de validación, formulario único y firma digital del contrato.",
          },
        ],
      },
      proposal: {
        title: "La experiencia completa del portal, diseñada desde cero.",
        intro:
          "Como Product Designer diseñé todo el portal Trato, desde el primer acceso hasta la gestión diaria del comercio.",
        acts: [
          {
            kicker: "Portal · 01",
            title: "Autenticación y acceso",
            body:
              "Selección de país, login, verificación por código, recuperación de contraseña y todos los estados de error y notificación asociados: la puerta de entrada a un producto que maneja dinero e información legal.",
            figures: [
              {
                src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/login.png",
                caption: "Login del Merchant Portal.",
              },
              {
                src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/codigo.png",
                caption: "Acceso con código enviado por correo.",
              },
            ],
          },
          {
            kicker: "Portal · 02",
            title: "Onboarding diferenciado por país y tipo de entidad legal",
            body:
              "Formularios específicos para Chile (Jurídica, Natural y «Un día»), Colombia (Jurídica y Natural) y una exploración para México (Moral y Física). Cada uno pide solo los documentos y campos que exige la regulación de ese país, en lugar de un formulario genérico único.",
            mockup: {
              src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/mockup-onboarding.png",
              caption: "Documentos regulatorios para una persona jurídica en Chile, con ayudas contextuales en cada campo.",
            },
            figures: [
              {
                src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/onboarding-comercio.png",
                caption: "Información del comercio.",
              },
              {
                src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/onboarding-bancaria.png",
                caption: "Información bancaria.",
              },
            ],
          },
          {
            kicker: "Portal · 03",
            title: "Un dashboard que siempre dice en qué punto estás",
            body:
              "Una pantalla clara para cada momento del comercio: «¿todavía no creas tu comercio?», «te falta poco», «estamos validando tu información», «tu comercio fue creado con éxito» y «algo salió mal». El usuario siempre sabe si su cuenta está lista, pendiente o con un error.",
            mockup: {
              src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/mockup-dashboard.png",
              caption: "Comercio creado con éxito: el progreso completo y los servicios listos para activar.",
            },
            figures: [
              {
                src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/dashboard-sin-comercio.png",
                caption: "«¿Todavía no creas tu comercio?»: el punto de partida.",
              },
              {
                src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/estado-falta-poco.png",
                caption: "«Te falta poco»: carga de documentos en proceso.",
              },
              {
                src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/estado-validando.png",
                caption: "«Estamos validando tu información»: de 5 a 10 días hábiles.",
              },
              {
                src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/estado-error.png",
                caption: "«¡Ups! Algo pasó»: cambios pendientes y una salida clara a soporte.",
              },
            ],
          },
          {
            kicker: "Portal · 04",
            title: "Mi Comercio, con permisos multiusuario",
            body:
              "Un sistema de roles (Owner, Admin, Operativo y Visitor) define qué puede ver y hacer cada persona de la empresa: datos del comercio, representación legal, información bancaria y gestión de permisos. En un negocio real, no todos los que usan el portal deberían ver o modificar lo mismo.",
            mockup: {
              src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/mockup-mi-comercio.png",
              caption: "Gestión de permisos: cada usuario del comercio con su rol y su estado.",
            },
            figures: [
              {
                src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/mi-comercio-bancaria.png",
                caption: "Información bancaria, vista del Owner: solo algunos roles pueden verla o editarla.",
              },
              {
                src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/permisos-agregar.png",
                caption: "Invitar a un nuevo usuario y asignarle un rol.",
              },
            ],
          },
          {
            kicker: "Portal · 05",
            title: "Soporte integrado y un styleguide propio",
            body:
              "Integración con Kustomer para que el comercio resolviera dudas desde el mismo portal. Y un styleguide para Trato: adaptamos el Design System de Rappi, pensado para producto móvil de consumo, a un portal B2B de escritorio, construyendo la base visual y de componentes que todavía no existía en Rappi para este tipo de producto.",
            figures: [
              {
                src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/soporte-kustomer.png",
                caption: "Chat de soporte con Kustomer, dentro del dashboard.",
              },
              {
                src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/servicios.png",
                caption: "Servicios del portal: Paga con Rappi y Cargo disponibles; el resto, próximamente.",
              },
            ],
          },
        ],
      },
      decisions: [
        {
          law: "Progressive disclosure",
          t: "Aplicado a la regulación, no solo a la interfaz",
          d: "Cada combinación de país y tipo de entidad legal muestra solo los campos y documentos que aplican, lo que reduce la carga cognitiva (Ley de Hick) en el momento más sensible del journey.",
        },
        {
          law: "Visibility of system status",
          t: "El estado como eje del dashboard",
          d: "Cada estado del proceso de validación tiene su propia pantalla, para que el comercio nunca se quede «en el limbo» sin saber si su cuenta está lista, pendiente o con un error.",
        },
        {
          law: "Permisos como UX",
          t: "No solo una regla de backend",
          d: "Diseñar qué ve cada rol reconoce que el acceso a información bancaria y legal es, en sí mismo, un problema de experiencia y de confianza, no solo de seguridad técnica.",
        },
        {
          law: "Consistencia",
          t: "Extendida a un contexto nuevo",
          d: "Un styleguide propio, basado en el Design System de Rappi pero adaptado a escritorio B2B, mantuvo la marca sin forzar patrones de producto móvil.",
        },
        {
          law: "Research",
          t: "Diseño informado, no supuestos",
          d: "Simplificar la carga de documentos nació de observar, en sesiones reales de usabilidad, dónde los comercios dudaban, se devolvían o abandonaban el proceso.",
        },
      ],
      challenge: {
        kicker: "El reto",
        title: "Un producto B2B nuevo, con un equipo de 8 personas.",
        body: [
          "El reto más grande no fue ninguna pantalla: fue construir un producto completamente nuevo para Rappi en un dominio (pagos y regulación legal y bancaria multipaís) donde no había experiencia interna que replicar, y sostener a la vez los roles de Product Manager y Product Designer.",
          "La regulación cambiaba entre países y entre tipos de entidad legal, así que el diseño no podía resolverse con un solo flujo. El producto tenía que sostener esa complejidad sin sentirse complicado para el usuario final.",
        ],
        items: [
          "Requisitos distintos por país y entidad legal",
          "Métricas, OKRs y stakeholders en paralelo al diseño",
          "Sin un producto B2B previo en Rappi como referencia",
          "Un Design System pensado para móvil de consumo",
        ],
      },
      impact: {
        stats: [
          { value: "8 meses", label: "desde el inicio del proyecto hasta la salida a producción" },
          { value: "2 países", label: "lanzados: Chile y Colombia, con exploración en México" },
          { value: "Hasta 50", label: "comercios reales registrados entre los dos países" },
        ],
        body:
          "Trato validó, con clientes reales, que un PSP apalancado en la tecnología de Rappi era viable de construir y operar. Después, por decisión estratégica de la compañía, la línea de negocio PSP quedó en pausa (On Hold): una decisión de negocio, no una señal de que el producto o la experiencia no funcionaran. Trato se construyó, se lanzó y consiguió sus primeros clientes antes de que la compañía redirigiera la inversión.",
      },
      lessons: [
        "Liderar una línea de negocio nueva, desde cero hasta el lanzamiento y los primeros clientes, cambia cómo se entiende el rol de diseño dentro de un proyecto de negocio, no solo dentro de un equipo de producto.",
        "Ser Product Manager y Product Designer al mismo tiempo exige moverse entre dos lenguajes, el de las métricas y el de la experiencia, que bien conectados se fortalecen en lugar de competir.",
        "Usar sesiones de research en vivo con merchants para tomar decisiones concretas, como simplificar la carga de documentos o consolidar la validación, es la forma más directa de que el diseño tenga impacto en el negocio.",
        "No todos los proyectos con buen producto y buenos resultados continúan, y documentar esa realidad con honestidad también es parte del portafolio.",
      ],
    },
  },
  {
    slug: "marca-trato",
    title: "Creación de marca - Trato",
    subtitle: "Identidad visual para Portal de pagos",
    category: "Branding",
    year: "2022",
    role: "Product Designer",
    tools: "Figma",
    gradient: "linear-gradient(150deg, #0b2a5b, #0a64d8)",
    template: "trato-brand",
    connector: { label: "Ver el proyecto", href: "#/proyecto/merchant-portal-trato" },
    cardLogo: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/branding/logo-trato-blanco.png",
    summary:
      "El nombre y la identidad visual de Trato, el portal de pagos para comercios de Rappi: un naming que describe lo que hace el producto, un check como símbolo de acuerdo cerrado y una paleta azul pensada para transmitir seguridad.",
    challenge:
      "Antes de que existiera una sola pantalla, Trato necesitaba un nombre y una cara: una marca nueva, para un producto B2B que maneja dinero y datos legales, que se sintiera propia sin perder la confianza de Rappi.",
    approach:
      "Un nombre corto y claro en todo LatAm, un símbolo de aceptación integrado en el wordmark, una construcción modular con reglas de uso y una paleta elegida por categoría, no por gusto.",
    result:
      "Una identidad que vistió todo el Merchant Portal: el mismo azul, el mismo check y el mismo «trato hecho», convertido en interfaz.",
    brand: {
      tagline: "Construir la marca detrás del producto.",
      context: [
        { label: "Rol", value: "Product Designer — creación de marca e identidad visual" },
        { label: "Producto", value: "Trato by Rappi — Merchant Portal" },
        { label: "Relacionado con", value: "Case study de producto: research, UX y flujos del portal" },
      ],
      hero: {
        src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/branding/portada-marca.jpg",
        alt: "Logotipo de Trato By Rappi sobre fondo azul, con el texto Merchant Portal",
      },
      naming: {
        heading: "Un nombre que describe lo que hace el producto.",
        body: [
          "Antes de que existiera una sola pantalla, Trato necesitaba un nombre y una cara. Seguimos el mismo criterio que ya habían validado otros productos estrella de Rappi, como Cargo y Turbo: nombres cortos, claros en todo LatAm, fáciles de decir y de recordar.",
          "«Trato» nació de cómo se cierra de verdad una relación comercial: con un trato hecho. La palabra contiene, literalmente, el corazón del producto: con-<strong>TRATO</strong>. Todo comercio que entra a la plataforma pasa por una negociación que termina formalizada en un contrato.",
        ],
        word: { pre: "con", main: "trato" },
      },
      pillars: [
        {
          n: "01",
          t: "El check: OK = DONE",
          d: "El check integrado en la «o» final no es un adorno tipográfico: es el símbolo de aceptación. Representa la finalización exitosa de una transacción o un acuerdo, el mismo momento que describe el nombre.",
        },
        {
          n: "02",
          t: "By Rappi: una marca sombrilla",
          d: "Trato es un producto nuevo, construido desde cero, pero no empieza de cero en confianza: hereda la trayectoria y la solidez de Rappi en LatAm, y lo dice en su propia identidad.",
        },
      ],
      construction: {
        heading: "Una malla modular, con reglas claras de uso.",
        body:
          "El logo se construye sobre una malla modular: la altura mayúscula del wordmark equivale a 6 unidades base (X), y esa misma unidad define el espacio de seguridad mínimo alrededor de la marca.",
        figures: [
          {
            src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/branding/construccion-logo.jpg",
            caption: "Construcción geométrica del logo: la altura mayúscula equivale a 6X.",
          },
          {
            src: "projects/11.%20Rappi%20-%20Merchant%20Portal%20Trato/branding/espacio-seguridad.jpg",
            caption: "Espacio de seguridad de 1X y tamaños mínimos de uso, digital e impreso.",
          },
        ],
        rules: [
          "Ningún texto, imagen o borde de contenedor puede invadir el margen de seguridad de 1X.",
          "Digital: 160 px de ancho mínimo. En favicons y usos menores se usa solo el ícono del check.",
          "Impreso: 2,5 cm de ancho mínimo, para papelería, merchandising y señalética.",
          "Por debajo del tamaño mínimo, la legibilidad del símbolo va antes que el wordmark completo.",
        ],
      },
      palette: {
        heading: "¿Por qué azul?",
        body:
          "El azul es el código visual que el usuario ya asocia, casi de forma automática, con marcas financieras y tecnológicas serias. No fue una preferencia estética: fue una decisión estratégica de categoría. En un producto que maneja datos legales, bancarios y dinero real de un comercio, la marca necesitaba comunicar seguridad y transparencia antes de que el usuario leyera una sola palabra.",
        colors: [
          { name: "Navy Trato", hex: "#152F5B", desc: "Seguridad" },
          { name: "Blue Trato", hex: "#39A0FF", desc: "Progreso" },
          { name: "Gris de apoyo", hex: "#6B7280", desc: "Tranquilidad" },
        ],
      },
      typography: {
        heading: "Solidez y cercanía en el mismo trazo.",
        body: [
          "El wordmark usa una tipografía de palo seco, geométrica y de trazo grueso: la misma familia visual que transmite solidez y cercanía en el resto de la identidad, en títulos, dashboard y comunicación del portal.",
          "El tag «By Rappi» se apoya en el logotipo manuscrito propio de Rappi, para reforzar el vínculo con la marca madre sin competir con el wordmark principal.",
        ],
      },
      closing:
        "Esta identidad es la que vistió todo el Merchant Portal: el mismo azul, el mismo check, el mismo «trato hecho» convertido en interfaz.",
    },
  },
  {
    slug: "messa-delivery-app",
    title: "Messa - Delivery App",
    subtitle: "De cero a producción repartiendo pedidos",
    category: "Product Design",
    categories: ["Product Design", "Branding", "UX/UI"],
    year: "2020",
    role: "Cofundador — Product Manager + Product Designer",
    tools: "",
    gradient: "linear-gradient(150deg, #f5e852, #6940e9)",
    template: "messa",
    cardPhone: "projects/12.%20messa%20app/card-messa.jpg",
    summary:
      "Messa: un negocio de delivery de mercado y comida construido desde cero en la Sabana de Bogotá, con su marca, su app, su versión web y su operación, hasta llegar a los primeros pedidos reales.",
    challenge:
      "Construir en paralelo un producto digital y una operación logística real, con tres cofundadores y sin una empresa grande detrás.",
    approach:
      "Research del mercado local, de los domiciliarios y de la competencia; una marca pensada para destacar; patrones conocidos de sign up, checkout y pago, y una app para el cliente y otra para el repartidor.",
    result:
      "Messa salió a producción con cerca de 5 pedidos en la primera semana y más de 25 en el primer mes, operando en una sola zona.",
    story: {
      tagline: "Crear desde cero un nuevo negocio de delivery en la Sabana de Bogotá.",
      context: [
        { label: "Rol", value: "Cofundador — Product Manager + Product Designer" },
        { label: "Equipo", value: "3 cofundadores · ingeniería de desarrollo" },
        { label: "Producto", value: "Messa — app y web de delivery de mercado y comida" },
        { label: "Estado", value: "Lanzado en la Sabana de Bogotá · primeros pedidos reales" },
      ],
      hero: {
        left: { src: "projects/12.%20messa%20app/pantallas/explore.jpg", alt: "Explore: las categorías de Messa" },
        right: { src: "projects/12.%20messa%20app/pantallas/seguimiento.jpg", alt: "Seguimiento del pedido en el mapa" },
      },
      video: {
        src: "projects/12.%20messa%20app/experiencia-messa.mp4",
        poster: "projects/12.%20messa%20app/poster-messa.jpg",
        caption:
          "Las funciones principales de la app: bienvenida, registro, exploración por categorías, catálogo, checkout, pago, seguimiento del pedido, chat y calificación.",
      },
      problem: {
        body:
          "En ciudades secundarias y municipios alrededor de Bogotá, la cobertura de las apps de delivery existentes, Rappi principalmente, era muy baja. No era falta de mercado:",
        points: [
          {
            t: "Alto poder adquisitivo",
            d: "Zonas con capacidad de compra real, pero que las apps de delivery no estaban atendiendo.",
          },
          {
            t: "Conjuntos de 200 a 300 casas",
            d: "Mucha demanda concentrada en un mismo punto de entrega, pero mal servida.",
          },
          {
            t: "Un vacío por cubrir",
            d: "Vimos ahí una oportunidad real: construir desde cero el negocio que debía cubrirlo.",
          },
        ],
        quote: "No faltaba mercado: faltaba alguien que lo atendiera.",
      },
      objectives: [
        {
          n: "01",
          t: "Un producto digital completo",
          d: "Diseñar y construir una app y una web de delivery de mercado y comida, sin partir de ningún producto existente.",
        },
        {
          n: "02",
          t: "Un modelo de negocio alrededor de la necesidad",
          d: "Una red de mercados aliados y una alianza con los domiciliarios del sector.",
        },
        {
          n: "03",
          t: "Validar antes de escalar",
          d: "Probar el modelo con pedidos reales antes de invertir en crecer.",
        },
      ],
      research: {
        body:
          "Antes de diseñar una sola pantalla, entendimos el terreno. Esa lectura (qué le funcionaba a Rappi, qué no y por qué el sector seguía desatendido) definió cómo Messa debía ser distinto, no solo para el cliente final sino también para los mercados aliados y los mismos domiciliarios.",
        topics: [
          "Cómo se movía el mercado local",
          "Los dolores de los domiciliarios de la zona",
          "Por qué Rappi tenía tan poca presencia ahí",
        ],
      },
      roles: [
        {
          n: "Marca",
          t: "Identidad visual desde cero",
          d: "Creé el logo y la identidad de Messa, pensada para diferenciarse visualmente en las calles de la Sabana.",
        },
        {
          n: "Producto",
          t: "La experiencia completa de la app",
          d: "Onboarding, exploración por categorías, búsqueda, catálogo, checkout y métodos de pago, construidos junto a los ingenieros, con su versión web.",
        },
        {
          n: "Negocio y operación",
          t: "Aliados y logística",
          d: "Búsqueda, comercialización y negociación con mercados aliados, y la logística de almacenar, transportar y mantener los alimentos en buen estado hasta la entrega.",
        },
        {
          n: "Domiciliarios",
          t: "Una alianza desde sus dolores",
          d: "Construimos la relación con los domiciliarios del sector desde sus propios dolores operativos, no desde lo que asumíamos que necesitaban.",
        },
      ],
      brand: {
        body:
          "Messa era una marca completamente desconocida frente a un competidor con mucho mayor reconocimiento. La identidad se diseñó para generar confianza visual antes de que el usuario leyera una palabra, y para destacar en los conjuntos residenciales.",
        logos: [
          { src: "projects/12.%20messa%20app/branding/logo-color.png", alt: "Logo de Messa a color sobre amarillo", tone: "yellow" },
          { src: "projects/12.%20messa%20app/branding/logo-blanco.png", alt: "Logo de Messa en blanco sobre morado", tone: "purple" },
          { src: "projects/12.%20messa%20app/branding/logo-contorno.png", alt: "Logo de Messa en contorno blanco sobre fondo oscuro", tone: "dark" },
        ],
        colors: [
          { name: "Amarillo Messa", hex: "#F5E852", desc: "Visibilidad" },
          { name: "Morado Messa", hex: "#6940E9", desc: "Acción" },
          { name: "Magenta", hex: "#D03395", desc: "Energía" },
        ],
        type:
          "Colores vibrantes y una tipografía manuscrita en el logo: una marca cercana, que se reconoce de lejos en una bolsa, una moto o una pantalla.",
      },
      customer: {
        title: "Mercado y comida en un mismo flujo.",
        intro:
          "La app resuelve dos necesidades en un mismo flujo: mercado (supermercado, mercados pequeños, farmacia, licorera) y comida (restaurantes), con un onboarding simple, un catálogo navegable por categorías y búsqueda, y checkout con métodos de pago guardados. La misma experiencia se llevó también a una versión web.",
        acts: [
          {
            kicker: "Cliente · 01",
            title: "Onboarding y registro",
            body:
              "Una bienvenida corta que explica cómo funciona Messa (elegir una tienda, hacer el pedido, pagar) y un registro con Facebook o correo, verificado con un código por SMS.",
            phones: ["splash", "onboarding", "registro", "codigo-otp"],
          },
          {
            kicker: "Cliente · 02",
            title: "Explorar por categorías",
            body:
              "Supermercado, restaurantes, mercados pequeños, farmacia, licorera y «lo que sea», con la dirección de entrega siempre visible. Desde ahí, cada categoría se abre en su propio catálogo, con búsqueda, filtros y la ubicación de los locales en el mapa.",
            phones: ["explore", "restaurantes-mapa", "restaurante"],
            pages: [
              { src: "mercados", caption: "Mercados: tiendas de barrio, supermercados y tiendas especiales." },
              { src: "supermercado", caption: "Supermercados Messa: productos por categoría, con el carrito siempre a mano." },
              { src: "restaurantes", caption: "Restaurantes: recomendados, favoritos y búsqueda por tipo de cocina." },
            ],
          },
          {
            kicker: "Cliente · 03",
            title: "Producto, checkout y pago",
            body:
              "El detalle de cada producto, un checkout de un solo paso y los métodos de pago guardados (tarjeta, PayPal y Apple Pay), hasta la confirmación del pedido con el tiempo estimado de entrega.",
            phones: ["producto", "metodos-pago", "tarjetas", "pedido-confirmado"],
          },
          {
            kicker: "Cliente · 04",
            title: "Seguimiento, chat y calificación",
            body:
              "La ruta del domiciliario en el mapa y el estado del pedido paso a paso, un chat directo con quien entrega y, al final, la calificación del restaurante, de los productos y del domiciliario.",
            phones: ["seguimiento", "chat", "calificar", "calificar-domiciliario"],
          },
          {
            kicker: "Cliente · 05",
            title: "Cuenta, referidos y soporte",
            body:
              "Un menú con el perfil, las direcciones, los métodos de pago y el historial de pedidos; un código para invitar amigos y ganar saldo, y soporte 24/7.",
            phones: ["menu", "invita-y-gana", "soporte"],
          },
        ],
      },
      courier: {
        title: "Una app propia para quien entrega.",
        intro:
          "Messa también tenía que funcionar para los domiciliarios. Su app cubre el registro con sus documentos, la billetera para recibir sus pagos y el ciclo completo de cada pedido: recibirlo, aceptarlo o rechazarlo, recoger los productos y entregarlos.",
        acts: [
          {
            kicker: "Repartidor · 01",
            title: "Registro, documentos y vehículo",
            body:
              "Registro con Facebook o correo, verificación por SMS y la licencia y el vehículo registrados con una foto del documento, sin teclear todo a mano.",
            phones: ["rep-registro", "rep-codigo", "rep-licencia", "rep-vehiculo"],
          },
          {
            kicker: "Repartidor · 02",
            title: "Perfil y billetera",
            body:
              "El perfil con su calificación, el saldo disponible, el historial de retiros y la cuenta bancaria donde recibe lo que gana.",
            phones: ["rep-menu", "rep-billetera", "rep-cuenta-bancaria"],
          },
          {
            kicker: "Repartidor · 03",
            title: "Del pedido a la entrega",
            body:
              "La app busca pedidos cerca de su ubicación y muestra la ruta, el tiempo estimado y la ganancia antes de aceptar. Después, la lista de productos para recoger, el contacto con el cliente y el cierre de la entrega.",
            phones: ["rep-nuevo-pedido", "rep-recogida", "rep-entrega", "rep-exito"],
          },
        ],
      },
      decisions: [
        {
          law: "Jakob's Law",
          t: "Aplicada a propósito",
          d: "Sign up, checkout y métodos de pago siguen convenciones que el usuario ya conoce de cualquier app de e-commerce o delivery. En un producto nuevo y sin reconocimiento de marca, no era el momento de pedirle que aprendiera algo distinto.",
        },
        {
          law: "Negocio",
          t: "Categorizar también es una decisión de negocio",
          d: "La pantalla de Explore no solo organiza contenido: refleja la red de aliados que construimos. Cada categoría visible era, literalmente, una negociación cerrada con un aliado real.",
        },
        {
          law: "Marca",
          t: "Confianza visual antes que el usuario lea una palabra",
          d: "Colores vibrantes y la tipografía manuscrita del logo, para destacar en conjuntos residenciales donde Messa competía contra una marca mucho más conocida.",
        },
      ],
      challenge: {
        title: "Un producto digital y una operación real, al mismo tiempo.",
        body: [
          "El reto más grande no fue de interfaz: fue construir, en paralelo, un producto digital y una operación logística real desde cero. Diseñar la app fue solo una parte.",
          "Todo esto con un equipo de tres cofundadores, sin el respaldo de una empresa grande detrás.",
        ],
        items: [
          "Almacenar, transportar y mantener en buen estado alimentos perecederos",
          "Generar confianza en mercados pequeños para surtir pedidos de conjuntos grandes",
          "Ofrecer a los domiciliarios mejores condiciones que las de la competencia",
          "Tres cofundadores, sin inversión de una compañía grande",
        ],
      },
      impact: {
        stats: [
          { value: "≈5", label: "pedidos en la primera semana" },
          { value: "+25", label: "pedidos en el primer mes" },
          { value: "1 zona", label: "de operación en la Sabana de Bogotá" },
        ],
        body:
          "Para un negocio construido completamente desde cero, sin inversión de una compañía grande y sin base de usuarios previa, es una validación real de que el modelo tenía demanda.",
      },
      lessons: [
        "Construir un producto digital de cero, app y web, enseña algo que rediseñar un producto existente no enseña: cada decisión, desde el onboarding hasta el checkout, hay que justificarla sin datos previos ni un Design System ya probado.",
        "Crear un modelo de negocio alrededor de una necesidad básica (alimentación) en un contexto específico (la Sabana de Bogotá) obliga a diseñar para tres usuarios a la vez: cliente final, mercado aliado y domiciliario.",
        "Ser cofundador y diseñador al mismo tiempo significa que el diseño no termina en la pantalla: negociar con un mercado pequeño o resolver la logística de transportar alimentos también es diseñar la experiencia completa del producto.",
      ],
      team: "Equipo fundador: 3 cofundadores. Producto, operación y tecnología construidos en conjunto desde cero.",
    },
  },
];

const CATEGORIES = [
  "Todos",
  "Product Design",
  "UX/UI",
  "Design System",
  "User Research",
  "Branding",
  "Web",
  "Education",
];

// Perfil (#/sobre-mi): basado en la hoja de vida 2026, sin la sección de contacto
const PROFILE = {
  name: "Andrés Cerón G.",
  title: "Diseñador de Producto Senior",
  photo: "assets/andresceron-profile-picture.jpg",
  about:
    "Diseñador de producto con experiencia, apasionado por crear productos tecnológicos innovadores e impulsar el crecimiento. Con una trayectoria comprobada en diseño centrado en el usuario, aporto una combinación de creatividad y experiencia técnica para desarrollar soluciones que no solo satisfacen las necesidades del usuario, sino que también elevan los resultados del negocio.",
  experience: [
    {
      company: "Rappi SAS",
      role: "Sr. Product Designer",
      dates: "Mar 2022 - Jun 2026",
      body:
        "Como Product Designer en el equipo de Clientes de Rappi, mi función es dar forma a una experiencia amigable y eficiente para el usuario. Colaboro estrechamente con los equipos para diseñar interfaces intuitivas, mejorar el proceso de pedidos y potenciar el seguimiento de entregas. Mi trabajo se enfoca en hacer que la app sea más centrada en el usuario y agradable, garantizando una experiencia fluida para nuestros clientes.",
      link: { label: "Ver proyectos en Rappi", href: "#/proyectos?q=Rappi" },
    },
    {
      company: "Javeriana University",
      role: "Profesor Cátedra - Diseño Digital y Programación",
      dates: "Ene 2022 - Presente",
      body:
        "Docente de Diseño Industrial con enfoque en emprendimiento digital. Responsable de guiar a estudiantes avanzados de diseño en temas clave como UX/UI, diseño centrado en el usuario y colaboración multidisciplinaria con desarrolladores y Product Managers.",
    },
    {
      company: "Los de Búho SAS",
      companyNote: "Interactive solutions",
      role: "Co-Founder / Product and Design Lead",
      dates: "Feb 2016 - Feb 2023",
      body:
        "Como cofundador de nuestra empresa tecnológica, dedicada a un enfoque de diseño centrado en el usuario en todas nuestras soluciones. Mi rol implica dar forma a nuestra visión, impulsar la innovación, expandir nuestro mercado y liderar nuestro equipo de diseño. He logrado crecimiento a través de alianzas estratégicas, financiamiento y un enfoque constante en el diseño centrado en el usuario.",
      link: { label: "Ver proyectos de Los de Búho", href: "#/proyectos?q=Buho" },
    },
    {
      company: "Impresistem SAS",
      companyNote: "Mayorista de tecnología",
      role: "Product Marketing Manager",
      dates: "Jun 2021 - Ago 2021",
      body:
        "Como manager del equipo de Soluciones como Servicio, dirigí la estrategia de marcas como Markvision, Huawei, HP y Lenovo, entre otras. Logré crear el lanzamiento de nuevas áreas de servicios con eventos digitales masivos e inmersivos, con un alcance de más de 1.200 espectadores virtuales. Manejé el presupuesto de cada una de las marcas y del área de soluciones de la empresa.",
    },
    {
      company: "MessaApp SAS",
      companyNote: "Delivery App",
      role: "Co-Founder / Product Manager & Designer",
      dates: "Abr 2020 - Jun 2021",
      body:
        "Como cofundador de nuestra app de domicilios, lideré su visión estratégica, el desarrollo de producto y la optimización de la experiencia de usuario, expandiendo nuestra presencia en el mercado y asegurando financiamiento. Mi enfoque en la satisfacción del usuario y la integración tecnológica impulsó el crecimiento y éxito de nuestra app.",
      link: { label: "Ver el caso de Messa", href: "#/proyecto/messa-delivery-app" },
    },
    {
      company: "EY Colombia",
      companyNote: "Ernst & Young",
      role: "Design & Innovation Consultant II",
      dates: "Jul 2015 - Mar 2020",
      body:
        "En mi rol como Consultor de Innovación, especializado en guiar a empresas hacia modelos de negocio innovadores. Mis responsabilidades incluyeron fomentar la creatividad, el pensamiento estratégico y la innovación dentro de las organizaciones cliente, logrando el descubrimiento de nuevas fuentes de ingreso y el diseño de estrategias efectivas.",
    },
  ],
  education: [
    { years: "2008 - 2014", school: "Pontificia Universidad Javeriana", items: ["Diseñador Industrial"] },
    { years: "2019 - 2020", school: "Universidad de La Sabana", items: ["Especialista en Gerencia de Marca"] },
    {
      years: "2023 - 2024",
      school: "Platzi",
      // Diplomas en orden de aprobación; cada uno abre su vista previa
      diplomas: [
        { name: "Lean UX", file: "lean-ux" },
        { name: "Introducción a UX Writing", file: "ux-writing" },
        { name: "Gestionar un Sistema de Diseño como Product Manager", file: "sistema-de-diseno-pm" },
        { name: "Diseño Centrado en Usuario", file: "diseno-centrado-en-usuario" },
        { name: "Fundamentos de Diseño de Interfaces UX/UI", file: "fundamentos-ux-ui" },
        { name: "Invertir en la Bolsa desde Cero", file: "invertir-en-la-bolsa" },
        { name: "Colaboración Diseño-Desarrollo", file: "colaboracion-diseno-desarrollo" },
        { name: "Product Management", file: "product-management" },
      ],
    },
  ],
  skills: [
    "User-Centered Design",
    "UX / UI",
    "Customer Journey Map",
    "Prototyping",
    "Problem solving & User Empathy",
    "Data Analyst & Technical Flows",
    "Usability Testing & User research",
    "Agile Methodologies & Scrum",
  ],
  languages: [
    { name: "Inglés", level: "Conversational (B2)" },
    { name: "Portugués", level: "Básico" },
    { name: "Español", level: "Nativo" },
  ],
};
