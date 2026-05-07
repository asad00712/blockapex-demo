import Image from 'next/image'
import { type StoryCard } from "@/constants/successStories"
import { GradientStoriesBG, GradientStoriesBGMobile } from "@/assets/images"
import CaseStudyButton from "@/components/ui/CaseStudyButton"
import { servicesGradient, sg } from '..'

function ServicesLabel() {
    return (
        <span className={`${sg.className} text-sm font-semibold mr-1`} style={servicesGradient}>
            Services
        </span>
    )
}

export default function DesktopCard({ card }: { card: StoryCard }) {
  return (
    <div className="shrink-0 w-7xl h-125 relative overflow-hidden flex rounded-ss-xl rounded-ee-xl">
            <Image src={GradientStoriesBG} alt="" fill className="object-cover" aria-hidden />

            <div className="relative z-10 w-[45%] flex flex-col pl-20 py-15 gap-6">
                <div className="relative h-14 w-48">
                    <Image src={card.logo} alt="client logo" fill className="object-contain object-left" />
                </div>
                <div className="max-w-[80%] flex flex-col h-full mt-5">
                    <p className="font-neue-haas text-gray-800 flex-1" style={{ fontSize: 18, lineHeight: "30px", fontWeight: 300 }}>
                        {card.description}
                    </p>
                    <CaseStudyButton />
                </div>
            </div>

            <div className="relative z-10 w-px bg-gray-300 self-stretch my-8" />

            <div className="relative z-10 flex-1 flex flex-col py-10 pr-10 pl-4 gap-4">
                <div className="relative flex-1">
                    <Image src={card.mockupImage} alt="product mockup" fill className="object-contain object-top-right" sizes="500px" />
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                    <ServicesLabel />
                    {card.services.map((s) => (
                        <span key={s} className={`${sg.className} text-xs font-medium text-[#2C83FF] bg-blue-50 border border-[#2C83FF] rounded-lg px-3 py-2`}>
                            {s}
                        </span>
                    ))}
                </div>
            </div>
        </div>
  )
}
