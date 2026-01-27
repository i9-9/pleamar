import { Metadata } from 'next';
import { getYearsOfExperience } from '@/lib/company';

const yearsOfExperience = getYearsOfExperience();

export const metadata: Metadata = {
  title: "Servicios de Comercio Exterior - Agencia Marítima y Despacho de Aduana",
  description: `Servicios integrales de comercio exterior: agencia marítima, despacho de aduana, estibaje, transporte marítimo y gestión aduanera en Argentina. ${yearsOfExperience} años de experiencia.`,
  keywords: [
    "servicios de comercio exterior",
    "agencia marítima Argentina",
    "despacho de aduana",
    "estibaje portuario",
    "transporte marítimo",
    "gestión aduanera",
    "logística portuaria",
    "agente de transporte aduanero",
    "operaciones portuarias",
    "importación exportación"
  ],
  openGraph: {
    title: "Servicios de Comercio Exterior - Agencia Pleamar SA",
    description: "Agencia marítima, despacho de aduana, estibaje y servicios integrales de comercio exterior en Argentina.",
    url: "https://agenciapleamar.com/servicios",
    type: "website",
    images: [
      {
        url: "/images/seo/og-default.png",
        width: 1200,
        height: 630,
        alt: "Servicios de Agencia Marítima - Pleamar"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de Comercio Exterior - Agencia Pleamar SA",
    description: "Agencia marítima, despacho de aduana, estibaje y servicios integrales de comercio exterior en Argentina.",
    images: ["/images/seo/og-default.png"]
  },
  alternates: {
    canonical: "https://agenciapleamar.com/servicios"
  }
};
