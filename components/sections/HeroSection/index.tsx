import { Space_Grotesk } from "next/font/google";
import { AnimatedArrowUpRight } from "@/components/ui/AnimatedArrow";

const sgRegular = Space_Grotesk({ subsets: ["latin"], weight: "400" });
const sgBold    = Space_Grotesk({ subsets: ["latin"], weight: "700" });

const gradientText = (gradient: string): React.CSSProperties => ({
  fontWeight: 700,
  background: gradient,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
});

const headingSize: React.CSSProperties = {
  fontSize: "clamp(38px, 6vw, 66px)",
  lineHeight: 1,
};

export default function HeroSection() {
  return (
    <section className="w-full bg-[#F6F8FD] px-[6%] py-14 lg:py-20">
      <div className="max-w-4xl mx-auto flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-0">

        <div className="lg:col-start-1 lg:row-start-1 flex flex-col">
          <span
            className={`${sgRegular.className} lg:self-end text-black uppercase`}
            style={{ ...headingSize, fontWeight: 400 }}
          >
            TOKENOMICS
          </span>
          <span
            className={`${sgBold.className} lg:self-end`}
            style={{
              ...headingSize,
              ...gradientText("linear-gradient(102deg, rgba(255, 198, 128, 0.8) 0%, rgba(200, 127, 255, 1) 100%)"),
            }}
          >
            CONSULTING
          </span>
          <span
            className={`${sgBold.className} lg:self-end`}
            style={{
              ...headingSize,
              ...gradientText("linear-gradient(102deg, rgba(200, 127, 255, 1) 0%, rgba(0, 100, 255, 1) 100%)"),
            }}
          >
            SERVICES
          </span>
        </div>

        <div className="hidden lg:flex lg:col-start-2 lg:row-start-1 items-end">
          <AnimatedArrowUpRight size={58} />
        </div>

        <div className="lg:col-start-2 lg:row-start-2">
          <p
            className="font-neue-haas max-w-sm lg:max-w-xs"
            style={{
              fontSize: "clamp(16px, 1.8vw, 22px)",
              lineHeight: "1.4",
              color: "rgb(122, 122, 122)",
            }}
          >
            With BlockApex, you can confidently spearhead your cryptocurrency
            initiative. From launching your own cryptocurrency to creating secure
            wallets.
          </p>
        </div>

      </div>
    </section>
  );
}
