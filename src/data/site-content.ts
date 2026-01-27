// Datos extraídos de https://agenciapleamar.com/

import { COMPANY } from '@/lib/company';

export const siteData = {
  // Información de la empresa
  company: {
    name: COMPANY.NAME,
    foundedYear: COMPANY.FOUNDING_YEAR,
    slogan: "Excelencia & Seriedad",
    headquarters: "Necochea",
    representatives: [
      "Buenos Aires",
      "Bahía Blanca",
      "Mar del Plata",
      "Rosario",
      "San Lorenzo",
      "Paso de los Libres",
    ],
  },

  // Imágenes descargadas del sitio original
  images: {
    logo: "/images/logo.png",
    home: {
      main: "/images/img-home.jpg",
      background1: "/images/home-bg-1.jpg",
      background2: "/images/home-bg-2.jpg",
    },
    nosotros: {
      header: "/images/header-nosotros.jpg",
      photo1: "/images/nosotros-01.jpg",
      photo2: "/images/nosotros-02.jpg",
    },
    servicios: {
      photo1: "/images/servicios-01.jpg",
      photo2: "/images/servicios-02.jpg",
    },
  },

  // Navegación
  navigation: [
    { label: "Home", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Servicios", href: "/servicios" },
    { label: "Contacto", href: "/contacto" },
  ],

  // Contenido de la página Home
  home: {
    heroTitle: "Comercio Exterior",
    description:
      "Brindamos hace 25 años un servicio integral, ágil, dinámico y de alta calidad tanto para el exportador como para el Importador.",
    featuredServicesTitle: "Servicios Destacados",
    featuredServices: [
      { title: "Despacho de Aduana", subtitle: "ESPECIALISTAS EN" },
      { title: "Agencia Marítima", subtitle: "ESPECIALISTAS EN" },
    ],
  },

  // Contenido de la página Nosotros
  nosotros: {
    title: "Nosotros",
    paragraphs: [
      "Agencia Pleamar SA es una empresa de servicios de comercio exterior, fundada en el año 1993.",
      "Brindamos hace 25 años un servicio integral, ágil, dinámico y de alta calidad tanto para el exportador como para el Importador.",
      "Conformamos un equipo de profesionales, que trabajamos en conjunto para brindarles a nuestros clientes las soluciones en todas sus operaciones de Comercio Internacional, generando una relación sólida, estrecha, de puertas abiertas, y a largo plazo con los más altos estándares de calidad profesional y humana para nuestros clientes en un servicio personalizado y a medida de cada necesidad.",
      "Asesoramos a pequeñas, medianas y grandes empresas en el proceso integral de comercio Exterior, optimizando las gestiones y acompañando a nuestros clientes para cumplir sus objetivos.",
    ],
    location:
      "Las oficinas centrales de Agencia Pleamar SA se encuentran en la Ciudad de Necochea. Contamos con Representantes en la Ciudad de Buenos Aires, Bahía Blanca, Mar del Plata, Rosario, San Lorenzo, Paso de los Libres y resto del País.",
  },

  // Contenido de la página Servicios
  servicios: {
    title: "Servicios",
    subtitle: "Ponemos a su disposición una variada gama de servicios:",
    mainServices: [
      "Despacho de Aduana",
      "Agente de Transporte Aduanero",
      "Agencia Marítima",
      "Asesoramiento en Comercio Exterior",
      "Tramitación de Documentos Comerciales",
      "Representación ante diferentes organismos",
    ],
    logisticsServices: [
      "Logística y Coordinación",
      "Transporte marítimo y terrestre",
      "Estibaje de mercaderías",
      "Recepción de mercaderías",
      "Entrega de mercaderías",
      "Coordinación de embarque",
    ],
  },

  // Contenido de la página Contacto
  contacto: {
    title: "Contáctenos",
    subtitle: "ESPERAMOS TU CONTACTO",
    formTitle: "Envíenos sus Consultas",
    form: {
      fields: [
        { name: "name", label: "Tu nombre", required: true, type: "text" },
        { name: "email", label: "Tu correo electrónico", required: true, type: "email" },
        { name: "subject", label: "Asunto", required: false, type: "text" },
        { name: "message", label: "Tu mensaje", required: false, type: "textarea" },
      ],
      submitLabel: "Enviar",
    },
  },

  // Footer
  footer: {
    copyright: "© Copyright 2010 - 2025 | Todos los derechos reservados",
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
  },
};

export type SiteData = typeof siteData;
