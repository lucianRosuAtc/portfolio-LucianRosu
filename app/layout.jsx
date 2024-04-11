import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "portfolio Lucian Rosu",
  description: "This is the portfolio of Lucian Rosu",
  icons: [{ href: "/favicon.ico", rel: "icon"}],
  
  openGraph: {
    type: "website",
    url: "https://portfolio-lucian-rosu.vercel.app/",
    title: "Portfolio Lucian Rosu",
    description: "This is the portfolio of Lucian Rosu",
    // images: [{ url: "/og-image.png", alt: "Portfolio Lucian Rosu" }]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} max-w-[1920px] mx-auto`}>
        <ThemeProvider attribute='class'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

{/* <ThemeProvider attribute='class' defaultTheme='light'> */}