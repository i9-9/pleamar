import { Metadata } from 'next';
import { getYearsOfExperience } from '@/lib/company';

const yearsOfExperience = getYearsOfExperience();

export const metadata: Metadata = {
  title: `Sobre Nosotros - ${yearsOfExperience} Años de Experiencia en Comercio Exterior`,
  description: "Desde 1993 facilitamos el comercio exterior en Argentina. Presencia en Necochea, Quequén, Buenos Aires, Bahía Blanca, Mar del Plata y más ciudades. Conocé nuestra trayectoria.",
  keywords: [
    "agencia marítima Necochea",
    "comercio exterior Argentina",
    "historia Agencia Pleamar",
    "experiencia comercio exterior",
    "agencia marítima Quequén",
    "trayectoria comercio internacional",
    "empresa comercio exterior"
  ],
  openGraph: {
    title: `Sobre Agencia Pleamar SA - ${yearsOfExperience} Años de Experiencia`,
    description: "Desde 1993 facilitamos el comercio exterior en Argentina con presencia nacional y atención personalizada.",
    url: "https://agenciapleamar.com/nosotros",
    type: "website",
    images: [
      {
        url: "/images/seo/og-default.png",
        width: 1200,
        height: 630,
        alt: "Agencia Pleamar - Nosotros"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `Sobre Agencia Pleamar SA - ${yearsOfExperience} Años de Experiencia`,
    description: "Desde 1993 facilitamos el comercio exterior en Argentina con presencia nacional y atención personalizada.",
    images: ["/images/seo/og-default.png"]
  },
  alternates: {
    canonical: "https://agenciapleamar.com/nosotros"
  }
};
