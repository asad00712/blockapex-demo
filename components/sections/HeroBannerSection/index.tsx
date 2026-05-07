import Image from "next/image";
import { ClientsWW } from "@/assets/images";
import { VideoText } from "@/components/ui/video-text";
import ConnectButton from "@/components/ui/ConnectButton";

export default function HeroBannerSection() {
  return (
    <section className="relative w-full bg-[#F6F8FD] overflow-hidden flex flex-col lg:flex-row lg:items-center px-10 gap-6">

      <div className="w-[80%] lg:w-[28%] shrink-0 flex justify-start">
        <Image
          src={ClientsWW}
          alt="100+ Clients Worldwide"
          width={260}
          height={200}
          className="object-contain w-full max-w-[90%] h-auto"
        />
      </div>

      <div className="flex-1 w-full flex flex-col items-end gap-3">
        <ConnectButton />
        <div className="relative w-full h-32 sm:h-40 md:h-52 lg:h-64 overflow-hidden">
          <VideoText
            src="/Sections/Grey-Animation-Compression-1.mp4"
            fontFamily='"Space Grotesk", sans-serif'
            fontWeight={700}
            fontSize={16}
            position="right"
            textY="62%"
            videoPosition="bottom"
            videoScale={1.7}
          >
            tokenomics
          </VideoText>
        </div>
      </div>

    </section>
  );
}
