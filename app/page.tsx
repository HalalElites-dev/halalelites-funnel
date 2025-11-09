import { AcceleratorSection } from "@/components/sections/accelerator";
import { BookingSection } from "@/components/sections/book";
import { HeroSection } from "@/components/sections/Hero";
import { PortfolioSection } from "@/components/sections/Portfolio";
import { ProcessSection } from "@/components/sections/process";
import { WhyItMattersSection } from "@/components/sections/why";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyItMattersSection />
      <ProcessSection />
      <PortfolioSection />
      <BookingSection />
      <AcceleratorSection />
    </main>
  );
}
