import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import ConnectButton from "@/components/ui/ConnectButton";
import { ChallangeImg, ChallengesHandsBGMob } from "@/assets/images";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "400" });

export default function CTASection() {
  return (
    <section className="w-full lg:px-[6%] py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-4 lg:gap-0 relative">

        <div className="bg-black rounded-lg px-8 lg:px-10 py-10 lg:py-12 flex flex-col justify-center items-start z-0 w-[90%] lg:w-[45%] lg:z-10 lg:self-center overflow-hidden">
          <p className={`${spaceGrotesk.className} text-white text-[28px] lg:text-[40px] leading-9 lg:leading-10 mb-1`}>
            Simplify Blockchain Challenges—
          </p>
          <p className={`${spaceGrotesk.className} text-[28px] lg:text-[40px] leading-9 lg:leading-10 font-bold`}>
            <span className="bg-[linear-gradient(90deg,#e8f55e,#c084fc)] bg-clip-text text-transparent">
              Contact Our
            </span>
          </p>
          <p className={`${spaceGrotesk.className} text-[28px] lg:text-[40px] leading-9 lg:leading-10 font-bold`}>
            <span className="bg-[linear-gradient(90deg,#818cf8,#3b82f6)] bg-clip-text text-transparent">
              Experts Today!
            </span>
          </p>
        </div>

        <div className="relative bg-[#1a1a2e] rounded-l-2xl lg:rounded-2xl overflow-hidden h-65 lg:h-80 ml-[15%] -mt-8 z-10 lg:mt-0 lg:-ml-6 lg:flex-1 lg:z-30">
          <Image
            src={ChallangeImg}
            alt="ChallangeImg"
            fill
            className="hidden lg:flex object-cover object-center h-fit"
          />
          <Image
            src={ChallengesHandsBGMob}
            alt="ChallangeImg"
            fill
            className="lg:hidden object-cover object-center h-fit"
          />
          <div className="absolute bottom-6 right-6 z-10 hidden lg:block">
            <ConnectButton />
          </div>
        </div>

        <div className="px-5 lg:hidden">
          <ConnectButton />
        </div>
      </div>
    </section>
  );
}
