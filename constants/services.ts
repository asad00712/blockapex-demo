import { Tokenomics1, Tokenomics2, Tokenomics3, Tokenomics4, Tokenomics5, Tokenomics6, Tokenomics7, Tokenomics8, Tokenomics9 } from "@/assets/images";

export type ConsultingService = {
  number: string;
  image: string;
  alt: string;
};

export const consultingServices: ConsultingService[] = [
  { number: "01.", image: Tokenomics1, alt: "Tokenomics Design" },
  { number: "02.", image: Tokenomics2, alt: "Token Launch" },
  { number: "03.", image: Tokenomics3, alt: "Protocol Consultation" },
  { number: "04.", image: Tokenomics4, alt: "Tokenomics Audit" },
  { number: "05.", image: Tokenomics5, alt: "DeFi Strategy" },
  { number: "06.", image: Tokenomics6, alt: "Complex System Design" },
  { number: "07.", image: Tokenomics7, alt: "Liquidity Modelling" },
  { number: "08.", image: Tokenomics8, alt: "Governance Design" },
  { number: "09.", image: Tokenomics9, alt: "Post-Launch Analysis" },
];
