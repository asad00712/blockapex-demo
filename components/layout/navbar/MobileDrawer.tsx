"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BlockApexLogoWhite } from "@/assets/images";
import { navItems } from "@/constants/navbar";
import { HiX, BsChevronRight } from "@/assets/icons";

const slideTransition = { type: "tween" as const, duration: 0.35, ease: [0.76, 0, 0.24, 1] };

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={slideTransition}
            className="fixed top-0 left-0 z-50 h-full w-[85vw] max-w-sm flex flex-col overflow-y-auto"
            style={{ background: "linear-gradient(129deg, rgba(241, 245, 95, 0.30) -4.74%, rgba(219, 123, 255, 0.30) 16.16%, rgba(0, 125, 255, 0.30) 35.78%, rgba(0, 0, 0, 0.30) 59.57%), #000" }}
          >
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_20%,rgba(30,58,138,0.25)_0%,transparent_65%)]" />

            <div className="relative flex items-center justify-between px-6 py-5 border-b border-white/10">
              <Image src={BlockApexLogoWhite} alt="BlockApex" width={130} height={32} />
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white transition-colors text-2xl"
              >
                <HiX />
              </button>
            </div>

            <nav className="relative flex flex-col mt-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center justify-between px-6 py-4 text-white text-base border-b border-white/10 hover:bg-white/5 transition-colors text-left"
                >
                  {item.label}
                  <BsChevronRight className="text-white/50 text-sm shrink-0" />
                </button>
              ))}
            </nav>

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
