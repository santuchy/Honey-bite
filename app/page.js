import Hero from "./components/landing/Hero";
import HotlineProducts from "./components/landing/HotlineProducts";
import FloatingSection from "./components/landing/FloatingSection";
import BenefitsSection from "./components/landing/BenefitsSection";
import WhyChooseUs from "./components/landing/WhyChooseUs";
import HoneyFeature from "./components/landing/HoneyFeature";
import CustomerReview from "./components/landing/CustomerReview";
import Footer from './components/landing/Footer';
import CheckoutSection from './components/landing/CheckoutSection';
import CTASection from './components/landing/CTASection';


export default function Home() {
  return (
    <main>
      <Hero />
      <HotlineProducts/>
      <FloatingSection/>
      <BenefitsSection/>
      <HoneyFeature/>
      <CTASection/>
      <WhyChooseUs/>
      <CheckoutSection/>
      <CustomerReview/>
      <Footer/>
    </main>
  );
}
