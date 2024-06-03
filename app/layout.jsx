 import { Inter } from "next/font/google";
 import "./globals.css";
 import Header from "@/components/Header";
 import Footer from "@/components/Footer";
 import { ThemeProvider } from "@/components/ThemeProvider";


 const inter = Inter({ subsets: ["latin"] });

 export const metadata = {
   title: "portfolio Lucian Rosu",
   description: "This is the portfolio of Lucian Rosu",
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







