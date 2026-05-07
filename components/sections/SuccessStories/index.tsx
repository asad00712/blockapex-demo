'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from "motion/react"
import { Space_Grotesk } from "next/font/google"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import LearnMoreButton from "@/components/ui/LearnMoreButton"
import { storyCards } from "@/constants/successStories"
import DesktopCard from './components/desktop-card'
import MobileCard from './components/mobile-card'

export const sg = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

const ITEM_WIDTH = 1200
const GAP = 24

export const servicesGradient: React.CSSProperties = {
    background: "linear-gradient(102deg, rgba(255,198,128,0.9) 10%, rgba(200,127,255,1) 50%, rgba(0,100,255,1) 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
}

const headingGradient: React.CSSProperties = {
    fontWeight: 700,
    background: "linear-gradient(102deg, rgba(255,198,128,0.9) 10%, rgba(200,127,255,1) 50%, rgba(0,100,255,1) 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
}

export function ServicesLabel() {
    return (
        <span className={`${sg.className} text-sm font-semibold mr-1`} style={servicesGradient}>
            Services
        </span>
    )
}

function SectionHeading() {
    return (
        <h2 className={`${sg.className} m-0`} style={{ fontSize: "clamp(40px, 6vw, 66px)", lineHeight: "0.9" }}>
            <span className="text-gray-900" style={{ fontWeight: 400 }}>Our Success</span>
            <br />
            <span style={headingGradient}>Stories</span>
        </h2>
    )
}

export default function SuccessStories() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    const stripWidth = storyCards.length * ITEM_WIDTH + (storyCards.length - 1) * GAP
    const [endX, setEndX] = useState(() =>
        typeof window !== "undefined" ? window.innerWidth * 0.88 - stripWidth : -(stripWidth - ITEM_WIDTH)
    )

    useEffect(() => {
        const calc = () => setEndX(window.innerWidth * 0.88 - stripWidth)
        calc()
        window.addEventListener("resize", calc)
        return () => window.removeEventListener("resize", calc)
    }, [stripWidth])

    const x = useTransform(scrollYProgress, [0, 1], [0, endX])

    return (
        <>
            <div className="lg:hidden px-[6%] py-16 flex flex-col gap-8">
                <div className="flex items-start justify-between">
                    <SectionHeading />
                    <LearnMoreButton />
                </div>
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{ 560: { slidesPerView: 1.3 } }}
                    className="w-full pb-10"
                >
                    {storyCards.map((card) => (
                        <SwiperSlide key={card.id}>
                            <MobileCard card={card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="hidden lg:block overflow-x-clip">
                <div ref={containerRef} className="h-[300vh] relative">
                    <div className="sticky top-0 h-screen w-full flex flex-col justify-center gap-10 pl-[6%] overflow-visible">
                        <div className="flex items-start justify-between pr-[6%]">
                            <SectionHeading />
                            <LearnMoreButton />
                        </div>
                        <motion.div className="flex will-change-transform" style={{ x, gap: GAP }}>
                            {storyCards.map((card) => (
                                <DesktopCard key={card.id} card={card} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}
