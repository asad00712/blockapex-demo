"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { whitePgClutch, techcrunchlogo, CB } from "@/assets/images";

const brands = [whitePgClutch, techcrunchlogo, CB];

const ITEM_WIDTH = 112;
const GAP = 40;
const STEP = ITEM_WIDTH + GAP;

export default function BrandTicker() {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const mounted = useRef(true);

  const items = [...brands, ...brands];

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const next = index + 1;

      const transition = {
        type: "spring" as const,
        stiffness: 60,
        damping: 18,
        mass: 1,
      };

      if (next >= brands.length) {
        await controls.start({ x: -next * STEP, transition });
        if (!mounted.current) return;
        controls.set({ x: 0 });
        setIndex(0);
      } else {
        await controls.start({ x: -next * STEP, transition });
        if (!mounted.current) return;
        setIndex(next);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [index, controls]);

  return (
    <div className="overflow-hidden w-[50%]">
      <motion.div className="flex gap-10 w-max" animate={controls} initial={{ x: 0 }}>
        {items.map((src, i) => (
          <div key={i} className="w-28 h-10 shrink-0 relative">
            <Image src={src} alt="" fill className="object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
