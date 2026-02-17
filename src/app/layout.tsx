import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteName = "NutraCore Labs";
const siteUrl = "https://www.nutracorelabsperu.com";
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
    icon: [{ url: "/icon", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-icon", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  category: "health",
  verification: {
    google: "kWvF8HygGOcaAXsCi-fAP0v_ZbZQX1tRRyeENLvoj24",
  },
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

        {/* Floating WhatsApp button */}
        <a
          href="https://wa.me/51940801210?text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contáctanos por WhatsApp"
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="white"
            className="h-8 w-8"
          >
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.96A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.32 22.6c-.39 1.1-1.932 2.014-3.17 2.28-.848.18-1.956.324-5.684-1.222-4.772-1.978-7.84-6.816-8.078-7.132-.23-.316-1.93-2.57-1.93-4.9s1.222-3.476 1.656-3.952c.434-.476.948-.596 1.264-.596.316 0 .632.002.908.016.292.016.682-.11 1.068.814.39.94 1.332 3.25 1.448 3.486.118.236.196.512.04.828-.158.316-.236.512-.472.79-.236.276-.498.616-.71.826-.236.236-.482.492-.208.964s1.222 2.016 2.624 3.266c1.804 1.606 3.324 2.104 3.796 2.34.472.236.748.196 1.024-.118.276-.316 1.186-1.382 1.502-1.858.316-.476.632-.396 1.066-.236.434.158 2.742 1.294 3.214 1.53.472.236.788.354.906.55.116.196.116 1.136-.274 2.234z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
