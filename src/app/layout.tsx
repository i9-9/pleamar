import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agencia Pleamar - Comercio Exterior",
  description:
    "Agencia Pleamar SA - Servicios de comercio exterior, despacho de aduana y agencia marítima desde 1993.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ffs5kye.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
