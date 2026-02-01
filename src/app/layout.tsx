import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteName = "NutraCore Labs";
const siteUrl = "https://nutracorelabs.vercel.app";
const title = "NutraCore Labs | Suplementos Premium, Probióticos y Nutracéuticos en Perú";
const description =
  "NutraCore Labs ofrece suplementos dietéticos premium: probióticos de 50 y 60 billones de UFC, inositol, resveratrol y soporte para menopausia. Elaborados en EE.UU., aprobados por FDA y registrados ante DIGEMID. Líneas NutraHer y NutraZen para salud intestinal y bienestar femenino.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "suplementos premium Perú",
    "probióticos Perú",
    "nutracéuticos",
    "NutraCore Labs",
    "NutraHer",
    "NutraZen",
    "probióticos 60 billones",
    "probióticos para mujer",
    "myo inositol d-chiro inositol",
    "resveratrol suplemento",
    "soporte menopausia",
    "suplementos dietéticos FDA",
    "DIGEMID suplementos",
    "salud intestinal",
    "bienestar femenino",
    "suplementos elaborados en Estados Unidos",
    "MAKTREK Bi-Pass Technology",
    "Caronositol",
    "salud digestiva",
    "microbiota intestinal",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    telephone: true,
    email: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NutraCore Labs — Suplementos premium, probióticos y nutracéuticos elaborados en EE.UU.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
    creator: "@nutracorelabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  category: "health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
