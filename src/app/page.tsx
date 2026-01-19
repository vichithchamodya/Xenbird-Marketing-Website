import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import HowItWorksPreview from "@/components/sections/HowItWorksPreview";
import DemosTeaser from "@/components/sections/DemosTeaser";
import TrustSection from "@/components/sections/TrustSection";
import CTASection from "@/components/sections/CTASection";
import ProcessFlow from "@/components/sections/ProcessFlow";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <HowItWorksPreview />
      <DemosTeaser />
      <TrustSection />
      <CTASection />
      <ProcessFlow />
    </>
  );
}
