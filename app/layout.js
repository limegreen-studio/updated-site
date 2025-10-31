import { Inter, Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://limegreen.studio'),
  title: {
    default: "Lime Green Studios - MVP Development & Product Development in 4 Weeks",
    template: "%s | Lime Green Studios"
  },
  description: "Leading MVP development agency. We build and ship your product from 0 to 1 in just 4 weeks. Expert product development, rapid prototyping, and full-stack development for startups and enterprises.",
  keywords: [
    "MVP development",
    "MVP development agency",
    "product development",
    "rapid MVP development",
    "minimum viable product development",
    "startup MVP development",
    "MVP development company",
    "product development agency",
    "fast product development",
    "4 week MVP",
    "rapid product development",
    "product launch",
    "startup development",
    "web development agency",
    "app development agency",
    "full-stack development",
    "software development agency",
    "0 to 1 product development",
    "lean product development",
    "agile MVP development",
    "lime green studios"
  ].join(", "),
  authors: [{ name: "Lime Green Studios", url: "https://limegreen.studio" }],
  creator: "Lime Green Studios",
  publisher: "Lime Green Studios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Lime Green Studios - MVP Development & Product Development in 4 Weeks",
    description: "Leading MVP development agency. We build and ship your product from 0 to 1 in just 4 weeks. Expert product development for startups and enterprises.",
    url: "https://limegreen.studio",
    siteName: "Lime Green Studios",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lime Green Studios - MVP Development Agency"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lime Green Studios - MVP Development & Product Development",
    description: "Leading MVP development agency. We ship your product from 0 to 1 in just 4 weeks.",
    creator: "@limegreenstudios",
    images: ["/og-image.png"],
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
  alternates: {
    canonical: "https://limegreen.studio",
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
  category: "Technology",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="9bc71e9f-5605-4f32-9e87-fb92c41d3145"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${inter.variable} ${bricolageGrotesque.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
