import { motion } from "framer-motion";
import { type BentoCard } from "@/constants/bento";
import Image from "next/image";
import { sg } from "..";

const spanClass: Record<BentoCard["span"], string> = {
  4: "lg:col-span-4",
  8: "lg:col-span-8",
};

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];
const titleClass = `${sg.className} relative whitespace-pre-line text-gray-900`;
const titleStyle: React.CSSProperties = {
  fontSize: "clamp(28px, 2.6vw, 44px)",
  lineHeight: 1.05,
  fontWeight: 400,
};

const descClass = "font-neue-haas relative text-gray-700";
const descStyle: React.CSSProperties = { fontSize: 15, lineHeight: "24px", fontWeight: 400 };

const floatTransition = {
  duration: 2,
  repeat: Infinity,
  repeatType: "reverse" as const,
  ease: [0.45, 0, 0.55, 1] as [number, number, number, number],
};

function HoverRing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.4, ease }}
      className="pointer-events-none absolute inset-0 rounded-3xl"
      style={{
        padding: 1,
        background:
          "linear-gradient(135deg, rgba(255,198,128,0.6), rgba(200,127,255,0.6), rgba(0,100,255,0.6))",
        WebkitMask:
          "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }}
    />
  );
}

function SmallCardImage({ card }: { card: BentoCard }) {
  const sizeClass =
    card.imagePosition === "top-right-tiny"
      ? "w-16 h-16 lg:w-20 lg:h-20"
      : "w-24 h-24 lg:w-28 lg:h-28";

  return (
    <motion.div
      animate={{ y: -20 }}
      transition={floatTransition}
      className={`absolute top-8 right-8 ${sizeClass}`}
    >
      <Image src={card.image} alt="" fill className="object-contain" sizes="120px" />
    </motion.div>
  );
}

export default function BentoCardItem({ card }: { card: BentoCard }) {
    const isWide = card.span === 8;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease }}
      className={`relative group overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 lg:p-10 min-h-85 lg:min-h-95 ${spanClass[card.span]}`}
    >
      <HoverRing />

      {isWide ? (
        <div className="relative h-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col gap-6">
            <h3 className={titleClass} style={titleStyle}>
              {card.title}
            </h3>
            <p className={`${descClass} max-w-md`} style={descStyle}>
              {card.description}
            </p>
          </div>

          <motion.div
            animate={{ y: -20 }}
            transition={floatTransition}
            className="relative w-full h-48 lg:h-72"
          >
            <Image
              src={card.image}
              alt=""
              fill
              className="object-contain object-right"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      ) : (
        <>
          <h3 className={titleClass} style={titleStyle}>
            {card.title}
          </h3>
          <p
            className={`${descClass} mt-auto pt-32 max-w-md`}
            style={descStyle}
          >
            {card.description}
          </p>
          <SmallCardImage card={card} />
        </>
      )}
    </motion.article>
  )
}
