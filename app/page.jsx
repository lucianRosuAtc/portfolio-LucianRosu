import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/WorkCarousel";
import RecommendationsCarousel from "@/components/RecommendationsCarousel";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <About />
      <Services />
      <RecommendationsCarousel />
      <Cta />
    </main>
  );
}
