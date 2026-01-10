import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import PillarsSection from '@/components/landing/pillars-section';
import ContestInfoSection from '@/components/landing/contest-info-section';
import HowItWorksSection from '@/components/landing/how-it-works-section';
import ProductsSection from '@/components/landing/products-section';
import SocialProofSection from '@/components/landing/social-proof-section';
import Footer from '@/components/landing/footer';
import SalariesSection from '@/components/landing/salaries-section';
import CtaSection from '@/components/landing/cta-section';
import HandoutsCarouselSection from '@/components/landing/handouts-carousel-section';
import MaterialForYouSection from '@/components/landing/material-for-you-section';
import PdfFeaturesSection from '@/components/landing/pdf-features-section';
import DifferentiatorsSection from '@/components/landing/differentiators-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import SocialProofCarouselSection from '@/components/landing/social-proof-carousel-section';
import GuaranteeSection from '@/components/landing/guarantee-section';
import FaqSection from '@/components/landing/faq-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PillarsSection />
        <ContestInfoSection />
        <SalariesSection />
        <HowItWorksSection />
        <CtaSection />
        <HandoutsCarouselSection />
        <MaterialForYouSection />
        <ProductsSection />
        <PdfFeaturesSection />
        <DifferentiatorsSection />
        <SocialProofCarouselSection />
        <TestimonialsSection />
        <GuaranteeSection />
        <FaqSection />
        <SocialProofSection />
      </main>
      <Footer />
    </div>
  );
}
