"use client";

import { Space_Grotesk } from "next/font/google";
import { bentoCards } from "@/constants/bento";
import LearnMoreButton from "@/components/ui/LearnMoreButton";
import BentoCardItem from "./components/bento-card-item";

export const sg = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500"] });

const headingGradient: React.CSSProperties = {
  background:
    "linear-gradient(102deg, rgba(255, 198, 128, 0.6) 10%, rgba(200, 127, 255, 1) 50%, rgba(0, 100, 255, 1) 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export default function BentoGridSection() {
  return (
    <section className="w-full bg-[#F6F8FD] py-16 px-5 lg:px-[5%] lg:py-24">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-10 lg:mb-14 px-[6%]">
        <h2
          className={sg.className}
          style={{ fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 1.1, fontWeight: 400 }}
        >
          <span className="text-gray-900">Why Choose</span>
          <br />
          <span style={{ ...headingGradient, fontWeight: 500 }}>
            Tokenomics Consultation Services?
          </span>
        </h2>

        <LearnMoreButton className="self-start lg:self-auto hidden lg:flex" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
        {bentoCards.map((card) => (
          <BentoCardItem key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
