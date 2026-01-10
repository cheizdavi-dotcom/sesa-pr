import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import PillarsSection from '@/components/landing/pillars-section';
import ContestInfoSection from '@/components/landing/contest-info-section';
import HowItWorksSection from '@/components/landing/how-it-works-section';
import ProductsSection from '@/components/landing/products-section';
import SocialProofSection from '@/components/landing/social-proof-section';
import Footer from '@/components/landing/footer';
import SalariesSection from '@/components/landing/salaries-section';

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
        <ProductsSection />
        <SocialProofSection />
      </main>
      <Footer />
    </div>
  );
}
