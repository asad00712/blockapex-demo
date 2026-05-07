"use client";

import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { BGLines2, defi1 } from "@/assets/images";

const sg = Space_Grotesk({ subsets: ["latin"], weight: ["300", "400", "500"] });

const stats = [
  { label: "Raised by clients",  value: "$4B+", bg: "#000000", textColor: "#ffffff", labelColor: "#666666" },
  { label: "Tokenomics Design",  value: "150+",  bg: "#e8f55e", textColor: "#111827", labelColor: "#374151" },
  { label: "Project Advised",    value: "300+",  bg: "#EBEBEB", textColor: "#111827", labelColor: "#555555" },
];

function StatBox({ s, sg }: { s: typeof stats[number]; sg: string }) {
  return (
    <div className="p-6 lg:p-8 flex flex-col justify-between" style={{ backgroundColor: s.bg }}>
      <p
        className="font-neue-haas text-2xl"
        style={{ color: s.labelColor }}
      >
        {s.label}
      </p>
      <p
        className={`${sg} font-light`}
        style={{ fontSize: "clamp(32px, 3.8vw, 60px)", color: s.textColor }}
      >
        {s.value}
      </p>
    </div>
  );
}

export default function AboutusSection() {
  return (
    <section className="lg:h-[230vh] relative w-full overflow-hidden">

      <div className="hidden lg:flex absolute inset-0 pointer-events-none opacity-60">
        <Image src={BGLines2} alt="" fill className="object-cover" aria-hidden />
      </div>

      <div className="relative flex flex-col lg:flex-row">

        <div className="w-full lg:w-[48.3%] shrink-0 relative h-64 sm:h-96 mt-5 lg:mt-[45%] lg:h-[93vh]">
          <Image
            src={defi1}
            alt="BlockApex team"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="xl:pt-[28%] w-full lg:w-[51.7%] flex flex-col">

          <div className="px-8 lg:px-14 xl:px-18 pt-10 lg:pt-6 pb-8">
            <p
              className="font-neue-haas text-gray-900 max-w-lg text-2xl xl:text-[49px] xl:leading-12.75 font-normal">
              Tokenomics is the backbone of any successful blockchain project. Our team of experts help you design, analyze, and optimize your token economy to ensure sustainable growth and community engagement.
            </p>
          </div>

          <div className="mt-[17%] grid grid-cols-2 lg:grid-cols-3 md:pr-6 lg:pr-10">

            <div className="hidden lg:flex" />
            <StatBox s={stats[0]} sg={sg.className} />
            <div/>
            <div className="lg:hidden"/>

            <StatBox s={stats[1]} sg={sg.className} />
            <div className="hidden lg:flex"/>
            <StatBox s={stats[2]} sg={sg.className} />
            <div className="lg:hidden"/>
          </div>
        </div>
      </div>
    </section>
  );
}
