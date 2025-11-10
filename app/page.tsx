import { AcceleratorSection } from "@/components/sections/accelerator";
import { BookingSection } from "@/components/sections/book";
import { DetailedValueSection, HeroSection } from "@/components/sections/heroSection";
import { PortfolioSection } from "@/components/sections/portfolioSection";
import { ProcessSection } from "@/components/sections/process";
import { WhyItMattersSection } from "@/components/sections/why";
import  { PricingSection } from "@/components/sections/pricing";
export default function Home() {
  return (
  <main>
   <HeroSection />
   <DetailedValueSection/>
   <WhyItMattersSection />
   <ProcessSection />
   <PortfolioSection />
   <PricingSection/>
   <BookingSection/>
   <AcceleratorSection/>
  </main>
  );
}
