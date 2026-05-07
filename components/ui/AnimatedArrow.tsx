"use client";
import { motion } from "framer-motion";

interface Props {
  size?: number;
  color?: string;
  className?: string;
}

const EASE = [0.76, 0, 0.24, 1] as const;
const DURATION = 0.4;
const OFFSET = 26;

export function AnimatedArrowUpRight({ size = 48, color = "#e879f9", className }: Props) {
  return (
    <motion.div
      style={{ width: size, height: size, overflow: "hidden", position: "relative", flexShrink: 0 }}
      className={className}
      initial="idle"
      whileHover="hover"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        overflow="hidden"
        style={{ position: "absolute", inset: 0 }}
      >
        <motion.g
          variants={{
            idle: { x: 0, y: 0 },
            hover: { x: OFFSET, y: -OFFSET },
          }}
          transition={{ duration: DURATION, ease: EASE }}
        >
          <path d="M 5 19 L 19 5" stroke="currentColor" strokeWidth={1.5} />
          <path d="M 9 5 L 19 5 L 19 15" stroke="currentColor" strokeWidth={1.5} />
        </motion.g>

        <motion.g
          variants={{
            idle: { x: -OFFSET, y: OFFSET },
            hover: { x: 0, y: 0 },
          }}
          transition={{ duration: DURATION, ease: EASE }}
        >
          <path d="M 5 19 L 19 5" stroke={color} strokeWidth={1.5} />
          <path d="M 9 5 L 19 5 L 19 15" stroke={color} strokeWidth={1.5} />
        </motion.g>
      </svg>
    </motion.div>
  );
}
