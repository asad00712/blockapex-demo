"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProcessCard from "@/components/ui/ProcessCard";
import ConnectButton from "@/components/ui/ConnectButton";
import { BgGridLines, HeadingArrows } from "@/assets/images";
import { consultingServices } from "@/constants/services";
import Heading from "./heading";

export default function ConsultingServicesSection() {
  return (
    <section className="relative w-full bg-[#F6F8FD] px-[6%] py-16 lg:py-24">

      <div className="absolute inset-0 pointer-events-none opacity-60">
        <Image src={BgGridLines} alt="" fill className="object-cover" aria-hidden />
      </div>

      <div className="relative lg:hidden flex flex-col gap-8">
        <div className="relative">
          <div className="absolute -left-4 -right-8 -top-10 -bottom-16 pointer-events-none">
            <Image
              src={HeadingArrows}
              alt=""
              fill
              aria-hidden
              className="object-contain object-left select-none"
            />
          </div>
          <Heading size="sm" />
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={12}
          slidesPerView={1.4}
          breakpoints={{ 480: { slidesPerView: 2.2 }, 640: { slidesPerView: 2.8 } }}
          className="w-full pb-10"
        >
          {consultingServices.map((s) => (
            <SwiperSlide key={s.number}>
              <ProcessCard image={s.image} alt={s.alt} />
            </SwiperSlide>
          ))}
        </Swiper>

        <ConnectButton />
      </div>

      <div className="relative hidden lg:grid grid-cols-2 gap-16 items-start">
        <div className="lg:sticky lg:top-28 self-start flex flex-col gap-62.5">
          <div className="relative">
            <div className="absolute -left-8 -right-16 -top-20 -bottom-48 pointer-events-none">
              <Image
                src={HeadingArrows}
                alt=""
                fill
                aria-hidden
                className="object-contain object-left select-none"
              />
            </div>
            <Heading size="lg" />
          </div>
          <div className="self-start">
            <ConnectButton />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {consultingServices.map((s) => (
            <ProcessCard key={s.number} image={s.image} alt={s.alt} />
          ))}
        </div>
      </div>

    </section>
  );
}
