"use client";
import Comparison from "@/components/comparison/comparison";
import ExampleFlows from "@/components/exampleFlows/exampleFlows";
import FeatureBanner from "@/components/featureBanner/featureBanner";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import IndLeveraging from "@/components/indLaverging/indLeveage";
import Oppurtunity from "@/components/OppurtinityBanner/OppurtunityBanner";
import PopularTools from "@/components/popular-tools/PopularTools";
import SplashCursor from "@/components/ui/splashCursor";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Fearures() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-[#f2f2f2]">
      <main className="overflow-hidden">
        <SplashCursor />

        <div
          className="absolute w-full left-0 top-4 lg:top-7 px-2 xl:px-0"
          style={{ zIndex: 99 }}
        >
          <Header />
        </div>
        <FeatureBanner />
        <ExampleFlows />
        <Comparison />
        <PopularTools />
        <IndLeveraging />
        <Oppurtunity />
        <Footer />
      </main>
    </div>
  );
}
