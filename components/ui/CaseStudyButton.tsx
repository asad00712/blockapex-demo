"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "@/assets/icons";

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];
const transition = { duration: 0.7, ease };

export default function CaseStudyButton({ label = "View Case Study", className = "" }: { label?: string; className?: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ backgroundColor: hovered ? "#ffffff" : "#111827" }}
      transition={transition}
      className={`relative flex items-center justify-between px-4 overflow-hidden cursor-pointer rounded-2xl w-60 h-14 border-2 border-[#2C83FF] ${className}`}
    >
      <motion.span
        animate={{ x: hovered ? 0 : 35, color: hovered ? "#111827" : "#ffffff" }}
        transition={transition}
        className="font-neue-haas pl-2 whitespace-nowrap"
        style={{ fontSize: 18, lineHeight: "27px", fontWeight: 500 }}
      >
        {label}
      </motion.span>

      <motion.span
        animate={{ x: hovered ? 0 : -70, opacity: hovered ? 1 : 0 }}
        transition={transition}
        className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center shrink-0"
      >
        <BsArrowRight className="text-white text-base" />
      </motion.span>
    </motion.button>
  );
}
