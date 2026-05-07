import { type FAQItem } from "@/constants/faq";
import { AnimatePresence, motion } from "framer-motion";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"], weight: "600" });

export default function FAQRow({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`relative ${isOpen ? "rounded-md" : "rounded-t-md"} overflow-hidden`}>
      <div className="absolute inset-0 bg-[#d6d8e0]" />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 bg-linear-to-br from-blue-100 via-purple-50 to-indigo-100"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-6 px-6 py-2 lg:py-5 text-left cursor-pointer"
        >
          <span
            className={`${sora.className} text-sm lg:text-[17px] leading-6.5`}
            style={{ color: "rgb(31, 33, 36)", fontWeight: 600 }}
          >
            {item.question}
          </span>

          <div className="hidden md:flex shrink-0 w-9 h-9 items-center justify-center text-gray-700 text-3xl leading-none select-none relative overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "minus" : "plus"}
                initial={{ opacity: 0, y: isOpen ? 8 : -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: isOpen ? -8 : 8 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute"
              >
                {isOpen ? "−" : "+"}
              </motion.span>
            </AnimatePresence>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              style={{ overflow: "hidden" }}
            >
              <p
                className="font-neue-haas px-6 pb-5 text-xs lg:text-[17px] leading-6.5 text-black"
                style={{ fontWeight: 300 }}
              >
                {item.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
