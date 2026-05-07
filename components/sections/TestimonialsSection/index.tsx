"use client";

import { Space_Grotesk } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { columns, Testimonial } from "@/constants/testimonials";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "400" });

const colOffsets = ["lg:mt-0", "lg:mt-16", "lg:mt-8", "lg:mt-0"];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="group bg-white rounded-lg p-6 flex flex-col gap-4 border border-gray-100 break-inside-avoid transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-gray-900 hover:border-gray-900 hover:shadow-xl cursor-default">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 group-hover:bg-gray-700 flex items-center justify-center text-gray-500 group-hover:text-gray-300 text-sm font-semibold shrink-0 transition-colors duration-500">
          {t.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
        </div>
        <div>
          <p className="font-neue-haas text-gray-900 group-hover:text-white transition-colors duration-500" style={{ fontWeight: 600, fontSize: "14px" }}>{t.name}</p>
          <p className="font-neue-haas text-gray-400 transition-colors duration-500" style={{ fontWeight: 400, fontSize: "12px" }}>{t.role}, {t.company}</p>
        </div>
      </div>
      <p className="font-neue-haas text-gray-700 group-hover:text-gray-100 transition-colors duration-500" style={{ fontWeight: 300, fontSize: "14px", lineHeight: "22px" }}>{t.text}</p>
    </div>
  );
}

export default function TestimonialsSection() {
  const allCards = columns.flat();

  return (
    <section className="relative w-full lg:bg-[#f5f7fc] px-[6%] py-16 overflow-hidden">

      <div
        className="hidden lg:block absolute inset-0 bg-center bg-cover bg-no-repeat opacity-40 pointer-events-none"
        style={{ backgroundImage: "url(/Sections/Testimonial-BG-Pattern-BothSide.png)" }}
      />

      <div className="relative z-10 flex flex-col gap-12">

        <h2
          className={`${spaceGrotesk.className} text-gray-900`}
          style={{ fontSize: "clamp(48px, 8vw, 94px)", lineHeight: 1, fontWeight: 400 }}
        >
          Testimonials
        </h2>

        <div className="hidden lg:grid grid-cols-4 gap-6 items-start">
          {columns.map((col, ci) => (
            <div key={ci} className={`flex flex-col gap-6 ${colOffsets[ci]}`}>
              {col.map((t) => (
                <TestimonialCard key={t.name} t={t} />
              ))}
            </div>
          ))}
        </div>

        <div className="lg:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 20 } }}
            className="pb-10"
          >
            {allCards.map((t) => (
              <SwiperSlide key={t.name}>
                <TestimonialCard t={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
