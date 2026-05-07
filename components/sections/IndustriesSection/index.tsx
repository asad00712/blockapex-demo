"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Space_Grotesk, Sora } from "next/font/google";
import { industries } from "@/constants/industries";

const sg     = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"] });

const tokenomicsGradient: React.CSSProperties = {
  background:
    "linear-gradient(102deg, rgba(255, 198, 128, 0.6) 10%, rgba(200, 127, 255, 1) 50%, rgba(0, 100, 255, 1) 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const sidebarActiveGradient: React.CSSProperties = {
  background:
    "linear-gradient(180deg, rgba(255, 198, 128, 1) 0%, rgba(200, 127, 255, 1) 50%, rgba(0, 100, 255, 1) 100%)",
};

const featureBarGradient: React.CSSProperties = {
  background:
    "linear-gradient(180deg, rgba(200, 127, 255, 1) 0%, rgba(0, 100, 255, 1) 100%)",
};

export default function IndustriesSection() {
  const [activeId, setActiveId] = useState(industries[0].id);
  const active = industries.find((i) => i.id === activeId) ?? industries[0];

  return (
    <section className="w-full bg-[#F6F8FD] px-[6%] py-16 lg:py-20 overflow-hidden">

      <h2
        className={`${sg.className} mb-10 lg:mb-14`}
        style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.1, fontWeight: 400 }}
      >
        <span className="text-gray-900">Industries We Serve With</span>
        <br />
        <span style={{ ...tokenomicsGradient, fontWeight: 700 }}>
          Tokenomics Consultation
        </span>
      </h2>

      <div className="relative grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-10">

        <ul className="flex flex-col gap-1 lg:gap-2">
          {industries.map((ind) => {
            const isActive = ind.id === activeId;
            return (
              <li key={ind.id}>
                <button
                  onClick={() => setActiveId(ind.id)}
                  className={`relative w-full text-left rounded-md px-5 py-4 cursor-pointer transition-colors ${
                    isActive ? "bg-white" : "bg-[#e6e8ee] hover:bg-[#dde0e8]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="industry-active-bar"
                      className="absolute left-0 top-2 bottom-2 w-0.75 rounded-full"
                      style={sidebarActiveGradient}
                      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    />
                  )}
                  <span
                    className="font-neue-haas text-gray-900"
                    style={{ fontSize: 16, lineHeight: "24px", fontWeight: 500 }}
                  >
                    {ind.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 lg:gap-10 items-start"
            >
              <div className="flex flex-col gap-4 py-2">
                {active.features.map((f) => (
                  <div
                    key={f.title}
                    className="relative grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-2 lg:gap-4 pl-4"
                  >
                    <span
                      className="absolute left-0 top-1 bottom-1 w-0.5 rounded-full"
                      style={featureBarGradient}
                    />
                    <h3
                      className={`${sg.className} text-gray-900 text-xl font-semibold`}
                    >
                      {f.title}
                    </h3>
                    <p
                      className="font-neue-haas text-black text-sm"
                    >
                      {f.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative h-64 lg:h-80 w-full">
                <Image
                  src={active.image}
                  alt={active.label}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 320px"
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
