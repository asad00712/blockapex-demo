import Image from "next/image";
import { BlockApexLogo } from "@/assets/images";
import { FaXTwitter, FaLinkedin, FaMedium } from "react-icons/fa6";
import { FaGithub, FaRedditAlien, FaInstagram, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: FaXTwitter,    href: "#" },
  { icon: FaLinkedin,    href: "#" },
  { icon: FaGithub,      href: "#" },
  { icon: FaMedium,      href: "#" },
  { icon: FaRedditAlien, href: "#" },
  { icon: FaInstagram,   href: "#" },
  { icon: FaYoutube,     href: "#" },
];

export default function FooterBottom() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 px-[6%] py-6">

      <div className="text-gray-400 text-xs space-y-1 text-center lg:text-left order-3 lg:order-1">
        <p>
          <a href="#" className="hover:text-gray-600 transition-colors">Terms & Condition</a>
          <span className="mx-1">|</span>
          <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
        </p>
        <p>Copyright © 2025 BlockApex. All rights reserved.</p>
      </div>

      <div className="order-1 lg:order-2">
        <Image src={BlockApexLogo} alt="BlockApex" width={244} height={57} />
      </div>

      <div className="flex items-center gap-2 order-2 lg:order-3">
        {socials.map(({ icon: Icon, href }) => (
          <a
            key={href + Icon.name}
            href={href}
            className="w-9 h-9 flex items-center justify-center text-gray-900 hover:text-gray-800 transition-colors"
          >
            <Icon className="text-2xl" />
          </a>
        ))}
      </div>

    </div>
  );
}
