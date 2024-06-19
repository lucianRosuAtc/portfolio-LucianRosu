 import { Inter } from "next/font/google";
 import "./globals.css";
 import Header from "@/components/Header";
 import Footer from "@/components/Footer";
 import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTopButton from "@/components/ScrollToTopBtn";


 const inter = Inter({ subsets: ["latin"] });

 export const metadata = {
   title: "portfolio Lucian Rosu",
   description: "This is the portfolio of Lucian Rosu",
   keywords: ["portfolio", "Lucian Rosu", "developer","web developer", "software engineer", "react", "nextjs", "tailwindcss", "typescript", "javascript", "HTML", "CSS", "web development", "programming", "coding", "software development", "software engineering", "full stack", "full stack developer", "full stack engineer", "frontend", "backend", "frontend developer", "backend developer", "frontend engineer", "backend engineer", "web design", "web designer","profesional web development", "professional web developer", "professional software engineer", "professional software development", "professional software engineering", "professional full stack", "professional full stack developer", "professional full stack engineer", "professional frontend", "professional backend", "professional frontend developer", "professional backend developer", "professional frontend engineer", "professional backend engineer", "professional web design", "professional web designer"],
 }


 export default function RootLayout({ children }) {
   return (
     <html lang="en">
       <body className={`${inter.className} max-w-[1920px] mx-auto`}>
         <ThemeProvider attribute='class'  defaultTheme="system">
           <Header />
           {children}
           <ScrollToTopButton />
           <Footer />
         </ThemeProvider>
       </body>
     </html>
   );
 }







