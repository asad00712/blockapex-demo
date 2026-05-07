import { ConsultationIcon1, ConsultationIcon2, ConsultationIcon3 } from "@/assets/images";

export type CardData = {
  image: string;
  title: string;
  description: React.ReactNode;
};

export const cards: CardData[] = [
  {
    image: ConsultationIcon1,
    title: "Web3\nConsulting",
    description: (
      <>
        From architecture to deployment, our security engineering solutions integrate best
        security practices throughout your project&apos;s lifecycle,{" "}
        <span className="bg-[linear-gradient(90deg,#f97316,#a855f7)] bg-clip-text text-transparent">
          building a resilient foundation
        </span>{" "}
        for your blockchain applications.
      </>
    ),
  },
  {
    image: ConsultationIcon2,
    title: "Cryptocurrency\nConsulting",
    description: (
      <>
        We identify vulnerabilities,{" "}
        <span className="bg-[linear-gradient(90deg,#f97316,#a855f7)] bg-clip-text text-transparent">
          ensure code efficiency
        </span>{" "}
        and provide actionable recommendations for secure, reliable, and sturdy smart
        contract deployment across various platforms.
      </>
    ),
  },
  {
    image: ConsultationIcon3,
    title: "Tokenomics\nConsulting",
    description: (
      <>
        We offer a deep analysis of your blockchain&apos;s infrastructure,{" "}
        <span className="bg-[linear-gradient(90deg,#f97316,#a855f7)] bg-clip-text text-transparent">
          examine consensus algorithms
        </span>{" "}
        data integrity, and node security. Our blockchain audits guarantee robustness
        and trust in your decentralized ecosystem.
      </>
    ),
  },
];
