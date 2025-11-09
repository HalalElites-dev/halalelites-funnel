import { AcceleratorSection } from "@/components/sections/accelerator";
import { BookingSection } from "@/components/sections/book";
import { DetailedValueSection, HeroSection } from "@/components/sections/hero";
import { PortfolioSection } from "@/components/sections/portfolio";
import { ProcessSection } from "@/components/sections/process";
import { WhyItMattersSection } from "@/components/sections/why";



export default function Home() {
  return (
  <main>
   <HeroSection />
   <DetailedValueSection/>
   <WhyItMattersSection />
   <ProcessSection />
   <PortfolioSection />
   <BookingSection/>
   <AcceleratorSection/>
  </main>
  );
}
