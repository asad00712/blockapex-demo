"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

const frameGradient =
  "linear-gradient(135deg, #fbbf24 0%, #f472b6 30%, #c084fc 60%, #3b82f6 100%)";

type ProcessCardProps = {
  image: string | StaticImageData;
  alt?: string;
};

export default function ProcessCard({ image, alt = "" }: ProcessCardProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest:  { clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 100% 100%, 0px 100%, 0px 0px)" },
        hover: { clipPath: "polygon(44px 0px, 100% 0px, 100% calc(100% - 44px), calc(100% - 44px) 100%, 0px 100%, 0px 44px)" },
      }}
      transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
      className="relative aspect-5/6"
      style={{ background: frameGradient }}
    >
      <motion.div
        variants={{
          rest:  { top: 0, right: 0, bottom: 0,  left: 0  },
          hover: { top: 0, right: 0, bottom: 44, left: 44 },
        }}
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
        className="absolute overflow-hidden bg-white"
      >
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </motion.div>
    </motion.div>
  );
}
