"use client";

import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { UseCaseBg } from "@/assets/images";
import { useCases } from "@/constants/useCases";
import "./swiper.css";
import UseCaseCard from "./use-case-card";

export const sg = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500"] });

export default function UseCasesSection() {
  return (
    <section className="relative w-full px-[6%] py-16 lg:py-24 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={UseCaseBg}
          alt=""
          fill
          aria-hidden
          className="object-cover object-center opacity-90"
        />
      </div>

      <div className="relative mb-12 lg:mb-16">
        <h2
          className={sg.className}
          style={{ fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 1.1, fontWeight: 400 }}
        >
          <span className="text-gray-900">Industries &amp;</span>
          <br />
          <span
            style={{
              fontWeight: 500,
              background:
                "linear-gradient(102deg, rgba(255, 198, 128, 0.6) 10%, rgba(200, 127, 255, 1) 50%, rgba(0, 100, 255, 1) 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Use Cases We Cover
          </span>
        </h2>
      </div>

      <div className="relative use-cases-slider pt-10 -mt-10">
        <Swiper
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            640:  { slidesPerView: 2.2, spaceBetween: 20 },
            768:  { slidesPerView: 3.2, spaceBetween: 24 },
            1024: { slidesPerView: 5,   spaceBetween: 24 },
          }}
          grabCursor
          className="overflow-visible!"
        >
          {useCases.map((item) => (
            <SwiperSlide key={item.id} className="h-auto!">
              <UseCaseCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
