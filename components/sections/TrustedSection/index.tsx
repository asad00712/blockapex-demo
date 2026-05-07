import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import BrandTicker from "./BrandTicker";
import { LogoGrid, RatingsImg } from "@/assets/images";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "400" });

const headingGradient = {
  background: "linear-gradient(180deg, rgba(255, 198, 128, 0.6) 0%, rgba(200, 127, 255, 1) 50%, rgba(0, 100, 255, 1) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as React.CSSProperties;

export default function TrustedSection() {
  return (
    <section className="w-full bg-[#F6F8FD] px-[6%] py-12 lg:py-16 flex flex-col gap-8 lg:gap-10">

      <h2
        className={`${spaceGrotesk.className} uppercase leading-tight lg:leading-14 max-w-full lg:max-w-xl text-[36px] lg:text-[56px]`}
        style={headingGradient}
      >
        MOST TRUSTED BLOCKCHAIN <br />
        CONSULTING COMPANY
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

        <div>
          <Image src={LogoGrid} alt="Trusted Brands" width={0} height={0} sizes="(max-width:1024px) 100vw, 50vw" className="w-full h-auto" />
        </div>

        <div className="w-full border-2 border-[#C9C9C9] rounded-3xl bg-white/60 backdrop-blur-sm pl-6 py-6 flex items-center gap-6">
          <BrandTicker />

          <div className="flex justify-end w-[50%]">
            <Image src={RatingsImg} alt="Trustpilot" width={0} height={0}
              sizes="(max-width:1024px) 50vw, 25vw"
              className="relative z-20 w-full h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
