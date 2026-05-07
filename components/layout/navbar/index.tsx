"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BlockApexLogo, BlockApexLogoWhite } from "@/assets/images";
import { navItems, type NavDropdown } from "@/constants/navbar";
import { HiMenu } from "@/assets/icons";
import SecurityPanel from "./SecurityPanel";
import StandardPanel from "./StandardPanel";
import ResourcesPanel from "./ResourcesPanel";
import CompanyPanel from "./CompanyPanel";
import MobileDrawer from "./MobileDrawer";

function DropdownPanel({ dropdown }: { dropdown: NavDropdown }) {
  switch (dropdown.variant) {
    case "security":  return <SecurityPanel dropdown={dropdown} />;
    case "standard":  return <StandardPanel dropdown={dropdown} />;
    case "resources": return <ResourcesPanel dropdown={dropdown} />;
    case "company":   return <CompanyPanel dropdown={dropdown} />;
  }
}

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const activeDropdown = navItems.find((i) => i.label === activeItem)?.dropdown ?? null;

  return (
    <nav className="sticky top-0 z-50 px-3 lg:px-0 mt-3 lg:mt-0">
      <div
        className="w-full bg-black lg:bg-white/60 lg:backdrop-blur-xl lg:border-b lg:border-white/20 rounded-xl"
        onMouseLeave={() => setActiveItem(null)}
      >
        <div className="flex lg:hidden items-center justify-between py-2 lg:py-4 px-3 lg:px-5 sm:px-[6%]">
          <button
            onClick={() => setDrawerOpen(true)}
            className="text-white text-2xl"
          >
            <HiMenu />
          </button>

          <Image src={BlockApexLogoWhite} alt="BlockApex" width={140} height={34} loading="eager" />

          <button className="flex items-center gap-2 border border-white rounded-xl px-4 py-1.5 text-sm font-medium text-white">
            <span className="relative flex items-center justify-center w-5 h-5">
              <span className="animate-ping animation-duration-[2s] absolute inline-flex w-5 h-5 rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-white" />
            </span>
            Connect
          </button>
        </div>

        <div className="hidden lg:flex items-center justify-between gap-20 py-4 px-[6%] w-full">
          <Image src={BlockApexLogo} alt="BlockApex" width={245} height={60} loading="eager" />

          <div className="flex items-center justify-around gap-1 bg-navbar-bg backdrop-blur-sm rounded-xl px-3 py-3 w-full">
            {navItems.map((item) => (
              <button
                key={item.label}
                onMouseEnter={() => setActiveItem(item.label)}
                className={`px-4 py-1.5 rounded-full font-medium transition-all text-white cursor-pointer ${
                  activeItem === item.label ? "bg-black" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-3 border border-black rounded-xl px-6 py-1.5 text-sm xl:text-base font-medium">
            <span className="relative flex items-center justify-center w-6 h-6">
              <span className="animate-ping animation-duration-[2s] absolute inline-flex w-6 h-6 rounded-full bg-blue-300 opacity-75" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-black" />
            </span>
            Connect
          </button>
        </div>

        <AnimatePresence>
          {activeItem && activeDropdown && (
            <motion.div
              key={activeItem}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute left-[15%] right-[15%] bg-[#0d0f14] rounded-2xl z-50 shadow-2xl overflow-hidden"
            >
              <DropdownPanel dropdown={activeDropdown} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </nav>
  );
}
