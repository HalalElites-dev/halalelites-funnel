import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import CTASection from "@/components/sections/CTASection";
// import FutureVision from "@/components/sections/FutureVision";
import Portfolio from "@/components/sections/Portfolio";
export default function Home() {
  return (
  <main>
    <Hero/>
    <Services/>
    {/* <FutureVision/> */}
    <Portfolio/>
    <CTASection/>
  </main>
  );
}
