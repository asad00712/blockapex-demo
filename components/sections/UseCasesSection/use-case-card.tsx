import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { type UseCaseItem } from "@/constants/useCases";
import { sg } from '.';

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

const iconGradient =
  "linear-gradient(135deg, #fbbf24 0%, #f472b6 25%, #a855f7 50%, #c084fc 75%, #3b82f6 100%)";

export default function UseCaseCard({ item }: { item: UseCaseItem }) {
    const [hovered, setHovered] = useState(false);
    const Icon = item.Icon;
    const dark = hovered;

    return (
        <motion.article
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            animate={{
                backgroundColor: dark ? "rgb(0,0,0)" : "rgba(255,255,255,0.3)",
                y: dark ? -8 : 0,
                boxShadow: dark
                    ? "0 12px 40px -8px rgba(44, 131, 255, 0.55), 0 0 0 1px rgba(44, 131, 255, 0.6)"
                    : "0 0 0 0 rgba(44, 131, 255, 0)",
            }}
            transition={{ duration: 0.45, ease }}
            className="relative h-full w-full aspect-3/4 rounded-md border border-header-button backdrop-blur-[2px] flex flex-col p-6 lg:p-7 overflow-hidden"
        >
            <div className="relative">
                <Icon
                    className="text-3xl"
                    style={
                        dark
                            ? {
                                color: "transparent",
                                background: iconGradient,
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }
                            : { color: "rgb(17,24,39)" }
                    }
                />
            </div>

            <h3
                className={`${sg.className} mt-auto`}
                style={{
                    fontSize: 18,
                    lineHeight: "22px",
                    fontWeight: 400,
                    color: dark ? "#fff" : "rgb(17,24,39)",
                }}
            >
                {item.title}
            </h3>

            <AnimatePresence initial={false}>
                {dark && (
                    <motion.p
                        key="desc"
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.4, ease }}
                        className="font-neue-haas text-white/80 overflow-hidden"
                        style={{ fontSize: 13, lineHeight: "19px", fontWeight: 400 }}
                    >
                        {item.description}
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.article>
    )
}
