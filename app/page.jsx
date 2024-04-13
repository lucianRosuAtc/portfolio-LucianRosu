import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/WorkCarousel";
import Recommendations from "@/components/Recommendations";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Recommendations /> 
      <Cta />
    </main>
  );
}