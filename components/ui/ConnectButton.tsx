"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "@/assets/icons";

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];
const transition = { duration: 0.5, ease };

export default function ConnectButton() {
  const [hovered, setHovered] = useState(false);
  const [textOffset, setTextOffset] = useState(45);

  useEffect(() => {
    const update = () => setTextOffset(window.innerWidth < 768 ? 70 : 45);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <motion.button
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{ backgroundColor: hovered ? "#ffffff" : "#e8f55e" }}
      transition={transition}
      className="relative flex items-center justify-between px-4 overflow-hidden cursor-pointer rounded-2xl w-full md:w-60 h-14"
    >
      <motion.span
        animate={{ x: hovered ? 0 : textOffset }}
        transition={transition}
        className="font-neue-haas text-gray-900 pl-2 whitespace-nowrap"
        style={{ fontSize: 18, lineHeight: "27px", fontWeight: 500 }}
      >
        Lets Connect
      </motion.span>

      <motion.span
        animate={{ x: hovered ? 0 : -70, opacity: hovered ? 1 : 0 }}
        transition={transition}
        className="w-10 h-10 bg-[#e8f55e] rounded-xl flex items-center justify-center shrink-0"
      >
        <BsArrowRight className="text-gray-900 text-base" />
      </motion.span>
    </motion.button>
  );
}
