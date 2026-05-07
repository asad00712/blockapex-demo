import { Space_Grotesk } from "next/font/google";
import CaseStudyButton from "@/components/ui/CaseStudyButton";
import Image from "next/image";
import { FormImage1, FormLogos, Hand } from "@/assets/images";

const sg = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500"] });

const inputClass = [
  "w-full py-3 px-1 md:px-3 text-sm text-gray-900 bg-transparent outline-none",
  "placeholder:text-gray-400",
  "border border-transparent border-b-gray-200",
  "focus:border-gray-200 focus:rounded-sm",
  "transition-all duration-200",
].join(" ");

export default function ContactFormSection() {
  return (
    <section className="w-full px-[6%] py-16">
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-[3fr_1fr]">

        <div className="p-5 md:p-10 lg:px-14 lg:py-12">
          <h2 className={`${sg.className} text-[22px] font-semibold text-gray-900 mb-10`}>
            Lets Talk
          </h2>

          <form className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-x-10 gap-y-8">
              <input className={inputClass} placeholder="First Name" type="text" />
              <input className={inputClass} placeholder="Last Name" type="text" />
            </div>

            <input className={inputClass} placeholder="Project Name" type="text" />
            <input className={inputClass} placeholder="Project URL" type="url" />

            <textarea
              className={`${inputClass} resize-y`}
              placeholder="Message"
              rows={4}
            />

            <div className="flex justify-end">
              <CaseStudyButton label="Send Request" className="w-full md:w-60" />
            </div>
          </form>
        </div>

        <div className="hidden lg:relative lg:flex flex-col overflow-hidden pb-10">

          <Image src={FormImage1} alt="" fill className="object-cover object-top" />

          <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-3">
            <div className="relative w-14 h-14">
              <Image src={Hand} alt="" fill className="object-contain" />
            </div>
            <p
              className={sg.className}
              style={{
                fontSize: 52,
                lineHeight: 1,
                fontWeight: 500,
                background: "linear-gradient(90deg, #f97316 0%, #a855f7 40%, #2563eb 80%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              100+
            </p>
            <p className={`${sg.className} text-gray-700 font-medium text-lg`}>
              Clients &amp; Partners
            </p>
          </div>

          <div className="relative z-10 overflow-hidden">
            <Image src={FormLogos} alt="Clients and partners logos" width={0} height={0} sizes="100vw" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
