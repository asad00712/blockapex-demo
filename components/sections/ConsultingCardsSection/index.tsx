import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { BsArrowRight } from "@/assets/icons";
import { CardData, cards } from "@/constants/consultings";

const spaceGroteskLight  = Space_Grotesk({ subsets: ["latin"], weight: "300" });
const spaceGroteskMedium = Space_Grotesk({ subsets: ["latin"], weight: "400" });

function ConsultingCard({ card }: { card: CardData }) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-52 w-full mb-8">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-contain object-right"
        />
      </div>

      <div className="flex items-start justify-between gap-4 mb-4">
        <h3
          className={`${spaceGroteskLight.className} text-gray-900 whitespace-pre-line text-2xl lg:text-[34px] font-light leading-8.5`}
        >
          {card.title}
        </h3>
        <button className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0 hover:bg-gray-800 transition-all duration-200 ease-out hover:translate-x-2.5 cursor-pointer">
          <BsArrowRight className="text-white text-base" />
        </button>
      </div>

      <p className="font-neue-haas text-gray-900 leading-7" style={{ fontSize: 18 }}>
        {card.description}
      </p>
    </div>
  );
}

export default function ConsultingCardsSection() {
  return (
    <section className="w-full px-[6%] py-16 flex flex-col gap-10">

      <div>
        <p
          className={`${spaceGroteskMedium.className} text-gray-900 text-5xl lg:text-[66px] font-medium`}
        >
          Explore Our Other
        </p>
        <p
          className={`${spaceGroteskMedium.className} text-5xl lg:text-[66px]`}
          style={{
            fontWeight: 400,
            background: "linear-gradient(102deg, rgba(255, 198, 128, 0.6) 10%, rgba(200, 127, 255, 1) 50%, rgba(0, 100, 255, 1) 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Consultation
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <ConsultingCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}
