import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import MarqueeServices from "@/components/MarqueeServices";
import PhotoGallery from "@/components/PhotoGallery";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <MarqueeServices />
        <ServicesSection />
        <AdvantagesSection />
        <PhotoGallery />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
