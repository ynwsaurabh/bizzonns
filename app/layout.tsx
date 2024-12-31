import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "aos/dist/aos.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  verification: {
    google: "spVUxMsMgTk5fkCFazDyHisgjQm1PMxMidO9d3vQSQ8"
  },
  keywords: "Bizzonns, bizzonns, bizzonss, bizzons, Bizzonns consulting,Business Consulting Services, Professional Consulting Firm, Business Strategy Experts, Startup Consulting Services, Small Business Consulting, Corporate Strategy Consulting, Business Growth Advisors, Management Consulting, Business Development Consultancy, Strategic Business Planning, Operational Efficiency Consulting, Leadership Development Consulting, Business Transformation Experts, Expert Business Consultants, Marketing Strategy Consulting",
  title: {
    default: "Bizzonns - Excellence In Consulting",
    template: "%s - Bizzonns - Excellence In Consulting"
  },
  description: "Bizzonns is a professional consulting firm offering expert business strategy, development, and management services. We specialize in helping startups, small businesses, and corporations achieve growth, optimize operations, and implement effective leadership strategies. Our consultants provide tailored solutions in areas such as marketing strategy, business transformation, and operational efficiency to drive success and innovation.",
  twitter: {
    card: 'summary_large_image'
  },
  openGraph: {
    title: "Bizzonns - Excellence In Consulting",
    type: "website",
    description: "Bizzonns is a professional consulting firm offering expert business strategy, development, and management services. We specialize in helping startups, small businesses, and corporations achieve growth, optimize operations, and implement effective leadership strategies. Our consultants provide tailored solutions in areas such as marketing strategy, business transformation, and operational efficiency to drive success and innovation.",
    url: "https://bizzonns.com/",
    siteName: "bizzonns",
    images: [
      {
        url: "https://bizzonns.com/opengraph-image.png",
        width: 1728,
        height: 436,
        alt: "bizzonns"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
