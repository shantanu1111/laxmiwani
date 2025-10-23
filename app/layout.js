import { Geist, Geist_Mono, Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "LaxmiWani - Homemade Pickles",
  description: "Made with love, delivered with care. Authentic homemade Indian pickles with traditional recipes.",
  metadataBase: new URL('https://yourdomain.com'), // Replace with your actual domain
  openGraph: {
    title: "LaxmiWani - Homemade Pickles",
    description: "Made with love, delivered with care. Authentic homemade Indian pickles with traditional recipes.",
    images: [
      {
        url: '/logo.png', // Add your custom image to public folder
        width: 1200,
        height: 630,
        alt: 'LaxmiWani Pickles',
      },
    ],
    type: 'website',
    siteName: 'LaxmiWani',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: "LaxmiWani - Homemade Pickles",
    description: "Made with love, delivered with care",
    images: ['/og-image.jpg'],
  },
  keywords: ['homemade pickles', 'indian pickles', 'achar', 'traditional pickles', 'authentic pickles','loncha','sakhar aamba','gul aamba'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${greatVibes.variable} antialiased`}
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {children}
      </body>
    </html>
  );
}