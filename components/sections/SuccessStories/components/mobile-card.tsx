import Image from 'next/image'
import { ServicesLabel, sg } from '..'
import { GradientStoriesBGMobile } from '@/assets/images'
import { StoryCard } from '@/constants/successStories'

export default function MobileCard({ card }: { card: StoryCard }) {
  return (
    <div className="relative overflow-hidden flex flex-col rounded-ss-xl rounded-ee-xl min-h-96">
            <Image src={GradientStoriesBGMobile} alt="" fill className="object-cover" aria-hidden />
            <div className="relative z-10 flex flex-col px-6 pt-8 pb-6 gap-5">
                <div className="relative h-12 w-40">
                    <Image src={card.logo} alt="client logo" fill className="object-contain object-left" />
                </div>
                <p className="font-neue-haas text-gray-800" style={{ fontSize: 15, lineHeight: "26px", fontWeight: 300 }}>
                    {card.description}
                </p>
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
