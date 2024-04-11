import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "portfolio Lucian Rosu",
  description: "This is the portfolio of Lucian Rosu",
  // icons: [{ href: "/favicon.ico", rel: "icon"}],
  
  // openGraph: {
  //   type: "website",
  //   url: "https://portfolio-lucian-rosu.vercel.app/",
  //   title: "Portfolio Lucian Rosu",
  //   description: "This is the portfolio of Lucian Rosu",
  //   siteName: "Portfolio Lucian Rosu",
    // images: [{ url: "/og-image.png", width:1200, height:630, alt: "Portfolio Lucian Rosu" }]
  }


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[1920px] mx-auto`}>
        <ThemeProvider attribute='class'  defaultTheme="system">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
