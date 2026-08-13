import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import HowItWorks from "@/components/HowItWorks";
import WhatWeBuild from "@/components/WhatWeBuild";
import IndustryExamples from "@/components/IndustryExamples";
import Outcomes from "@/components/Outcomes";
import Approach from "@/components/Approach";
import LongTermModel from "@/components/LongTermModel";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problems />
        <HowItWorks />
        <WhatWeBuild />
        <IndustryExamples />
        <Outcomes />
        <Approach />
        <LongTermModel />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
