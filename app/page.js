import Hero from "./components/landing/Hero";
import HotlineProducts from "./components/landing/HotlineProducts";
import FloatingSection from "./components/landing/FloatingSection";
import BenefitsSection from "./components/landing/BenefitsSection";


export default function Home() {
  return (
    <main>
      <Hero />
      <HotlineProducts/>
      <FloatingSection/>
      <BenefitsSection/>
    </main>
  );
}
