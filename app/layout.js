import { Inter, Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
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
  title: "Lime Green Studios: You Bring your Problem 👉 We Ship your Product",
  description: "We take your idea from 0 to 1 in just 4 weeks. Lime Green Studios transforms your problems into shipped products with expert development, design, and strategy.",
  keywords: "product development, startup development, MVP development, web development, app development, 0 to 1, product launch, software development agency, lime green studios",
  authors: [{ name: "Lime Green Studios" }],
  creator: "Lime Green Studios",
  publisher: "Lime Green Studios",
  openGraph: {
    title: "Lime Green Studios: You Bring your Problem 👉 We Ship your Product",
    description: "We take your idea from 0 to 1 in just 4 weeks. Transform your vision into reality.",
    type: "website",
    locale: "en_US",
    siteName: "Lime Green Studios",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lime Green Studios: You Bring your Problem 👉 We Ship your Product",
    description: "We take your idea from 0 to 1 in just 4 weeks",
    creator: "@limegreenstudios",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bricolageGrotesque.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
