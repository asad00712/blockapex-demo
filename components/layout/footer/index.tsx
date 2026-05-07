import Image from "next/image";
import { NavBgImage, NewEraText, NewEraTextMobile } from "@/assets/images";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F6F8FD]">
      <div className="relative">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-90 pointer-events-none"
          style={{ backgroundImage: `url(${NavBgImage})` }}
        />

        <div className="relative overflow-hidden py-20 flex items-center justify-center">
          
          <div className="absolute left-0 top-0 h-full w-40 bg-linear-to-r from-white to-transparent z-10" />

          <div className="absolute right-0 top-0 h-full w-40 bg-linear-to-l from-white to-transparent z-10" />

          <div className="w-full px-[6%]">
            <Image
              src={NewEraText}
              alt="Steering A New Era Of Trust"
              width={0}
              height={0}
              sizes="100vw"
              className="relative z-20 w-full h-auto hidden lg:block"
            />
            <Image
              src={NewEraTextMobile}
              alt="Steering A New Era Of Trust"
              width={0}
              height={0}
              sizes="100vw"
              className="relative z-20 w-full h-auto lg:hidden"
            />
          </div>
        </div>

        <div className="relative">
          <FooterLinks />
        </div>
      </div>

      <FooterBottom />
    </footer>
  );
}
