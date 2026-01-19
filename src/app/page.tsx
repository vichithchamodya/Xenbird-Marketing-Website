import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import HowItWorksPreview from "@/components/sections/HowItWorksPreview";
import DemosTeaser from "@/components/sections/DemosTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <HowItWorksPreview />
      <DemosTeaser />
    </>
  );
}
