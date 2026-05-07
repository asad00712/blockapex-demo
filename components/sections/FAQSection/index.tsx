"use client";

import { useState } from "react";
import { Space_Grotesk } from "next/font/google";
import { faqs} from "@/constants/faq";
import FAQRow from "./faq-row";

const sg   = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="w-full bg-linear-to-br from-purple-50 via-blue-50 to-purple-100 px-[6%] py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start">

        <div className="lg:sticky lg:top-28">
          <h2 className={`${sg.className} text-4xl lg:text-5xl`}>
            <span className="text-gray-900">Frequently</span>
            <br />
            <span
              style={{
                fontWeight: 500,
                background: "linear-gradient(102deg, rgba(255, 198, 128, 0.6) 10%, rgba(200, 127, 255, 1) 50%, rgba(0, 100, 255, 1) 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Asked
            </span>
            <br />
            <span
              style={{
                fontWeight: 500,
                background: "linear-gradient(102deg, rgba(255, 198, 128, 0.6) 10%, rgba(200, 127, 255, 1) 50%, rgba(0, 100, 255, 1) 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Questions
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <FAQRow
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
