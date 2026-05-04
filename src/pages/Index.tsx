import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Ceylance — AI, SaaS, Web & Mobile App Development Australia"
      description="Ceylance is an Australia-based software consulting company helping businesses design, build, and launch AI, SaaS, web, and mobile applications. Book a free consultation today."
      canonical="https://www.ceylance.com/"
    />
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ProcessSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
