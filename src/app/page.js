"use client";
import MainBanner from "@/components/Hero/mainBanner";
import Header from "@/components/Header/Header";
import Details from "@/components/Details/Details";
import Oppurtunity from "@/components/OppurtinityBanner/OppurtunityBanner";
import UseCase from "@/components/UseCase/UseCase";
import OfferPlans from "@/components/offerPlans/OfferPlans";
import IndustriAi from "@/components/IndustriesAi/IndustriesAgent";
import Footer from "@/components/Footer/Footer";
import SplashCursor from "@/components/ui/splashCursor";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <main>
        <div
          className="absolute w-full left-0 top-4 lg:top-7 px-2 xl:px-0"
          style={{ zIndex: 99 }}
        >
          <Header />
        </div>
        <MainBanner />
        <Details />
        <Oppurtunity />
        <UseCase />
        <OfferPlans />
        <IndustriAi />
        <Footer />
        <SplashCursor />
      </main>
    </div>
  );
}
