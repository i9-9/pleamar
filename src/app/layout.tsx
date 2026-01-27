import type { Metadata } from "next";
import "./globals.css";
import { getYearsOfExperience } from "@/lib/company";

const yearsOfExperience = getYearsOfExperience();

export const metadata: Metadata = {
  metadataBase: new URL('https://agenciapleamar.com'),
  title: {
    default: "Agencia Pleamar SA - Comercio Exterior y Agencia Marítima en Argentina",
    template: "%s | Agencia Pleamar SA"
  },
  description: `Agencia marítima y despacho de aduana con ${yearsOfExperience} años de experiencia. Servicios integrales de comercio exterior en Necochea, Quequén, Buenos Aires y toda Argentina.`,
  keywords: [
    "agencia marítima",
    "despacho de aduana",
    "comercio exterior",
    "estibaje",
    "importación",
    "exportación",
    "agencia marítima Necochea",
    "despacho de aduana Quequén",
    "transporte marítimo",
    "logística portuaria",
    "aduana Argentina",
    "agente de transporte aduanero",
    "operaciones portuarias",
    "gestión aduanera",
    "comercio internacional"
  ],
  authors: [{ name: "Agencia Pleamar SA" }],
  creator: "Agencia Pleamar SA",
  publisher: "Agencia Pleamar SA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://agenciapleamar.com",
    siteName: "Agencia Pleamar SA",
    title: "Agencia Pleamar SA - Comercio Exterior y Agencia Marítima",
    description: `${yearsOfExperience} años de experiencia en comercio exterior. Agencia marítima, despacho de aduana y servicios integrales en Argentina.`,
    images: [
      {
        url: "/images/seo/og-default.png",
        width: 1200,
        height: 630,
        alt: "Agencia Pleamar - Servicios de Comercio Exterior"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencia Pleamar SA - Comercio Exterior y Agencia Marítima",
    description: `${yearsOfExperience} años de experiencia en comercio exterior. Agencia marítima, despacho de aduana y servicios integrales en Argentina.`,
    images: ["/images/seo/og-default.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://agenciapleamar.com"
  },
  verification: {
    // Agregar códigos de verificación cuando estén disponibles
    // google: 'código-de-google',
    // yandex: 'código-de-yandex',
  },
  category: 'business',
  other: {
    'image-credits': 'Photography by Bob Brewer, Waldemar Brandt, Jack Castles, Haris Illahi, Juan Pablo Mascanfroni, Jose Rago, Maverick Timotius, william william, Natalya Letunova, and Shavin Peiries on Unsplash',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Datos estructurados para Organization (JSON-LD)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://agenciapleamar.com/#organization",
    "name": "Agencia Pleamar SA",
    "legalName": "Agencia Pleamar Sociedad Anónima",
    "url": "https://agenciapleamar.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://agenciapleamar.com/images/logo/logo_nav.svg",
      "width": 200,
      "height": 50
    },
    "description": `Agencia marítima y despacho de aduana con ${yearsOfExperience} años de experiencia en comercio exterior`,
    "foundingDate": "1993",
    "slogan": "Soluciones marítimas y portuarias integrales",
    "email": "operaciones@pleamar.com.ar",
    "telephone": "+54-2262-433336",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Avenida 59 Nro 2151",
      "addressLocality": "Necochea",
      "addressRegion": "Buenos Aires",
      "postalCode": "7630",
      "addressCountry": "AR"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Necochea"
      },
      {
        "@type": "City",
        "name": "Quequén"
      },
      {
        "@type": "City",
        "name": "Buenos Aires"
      },
      {
        "@type": "City",
        "name": "Bahía Blanca"
      },
      {
        "@type": "City",
        "name": "Mar del Plata"
      },
      {
        "@type": "City",
        "name": "Paso de los Libres"
      },
      {
        "@type": "City",
        "name": "Rosario"
      },
      {
        "@type": "City",
        "name": "San Lorenzo"
      },
      {
        "@type": "City",
        "name": "Tres Arroyos"
      }
    ],
    "sameAs": [
      // Agregar redes sociales cuando estén disponibles
      // "https://www.facebook.com/pleamar",
      // "https://www.linkedin.com/company/pleamar",
    ]
  };

  // Datos estructurados para LocalBusiness principal
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://agenciapleamar.com/#localbusiness",
    "name": "Agencia Pleamar SA - Necochea",
    "image": "https://agenciapleamar.com/images/v2/hero_2.jpeg",
    "telephone": "+54-2262-433336",
    "email": "operaciones@pleamar.com.ar",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Avenida 59 Nro 2151",
      "addressLocality": "Necochea",
      "addressRegion": "Buenos Aires",
      "postalCode": "7630",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-38.5545",
      "longitude": "-58.7395"
    },
    "url": "https://agenciapleamar.com",
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "95"
    }
  };

  // Datos estructurados para ProfessionalService
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://agenciapleamar.com/#service",
    "name": "Agencia Pleamar SA",
    "serviceType": [
      "Agencia Marítima",
      "Despacho de Aduana",
      "Comercio Exterior",
      "Estibaje",
      "Transporte Marítimo",
      "Logística Portuaria"
    ],
    "provider": {
      "@id": "https://agenciapleamar.com/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Argentina"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Comercio Exterior",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Agencia Marítima",
            "description": "Gestión integral de operaciones marítimas y portuarias"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Despacho de Aduana",
            "description": "Trámites aduaneros de importación y exportación"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Estibaje",
            "description": "Servicios de carga, descarga y almacenamiento"
          }
        }
      ]
    }
  };

  return (
    <html lang="es-AR">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ffs5kye.css" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2B4C7E" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Photography Credits */}
        {/* Photos courtesy of Unsplash photographers:
            - Bob Brewer (https://unsplash.com/@brewbottle)
            - Waldemar Brandt (https://unsplash.com/@waldemarbrandt67w)
            - Jack Castles (https://unsplash.com/@jackcastles)
            - Haris Illahi (https://unsplash.com/@harisillahi)
            - Juan Pablo Mascanfroni (https://unsplash.com/@juanpmascanfroni)
            - Jose Rago (https://unsplash.com/@joserago)
            - Maverick Timotius (https://unsplash.com/@mavericktimotius)
            - william william (https://unsplash.com/@williamtm)
            - Natalya Letunova (https://unsplash.com/@talya_angel)
            - Shavin Peiries (https://unsplash.com/@shavinp)
        */}

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema)
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
