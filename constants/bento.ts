import { DeepExpertiseIcon, CustomizedSolutionsIcon, Group1000011605, QBkCPoeejpECqrXOviZdvDrmKws, } from "@/assets/images";

export type BentoCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  /** column span on desktop (out of 12) */
  span: 4 | 8;
  /** image positioning preset */
  imagePosition: "top-right-sm" | "right-large" | "center-bottom" | "top-right-tiny";
};

export const bentoCards: BentoCard[] = [
  {
    id: "deep-expertise",
    title: "Deep\nExpertise",
    description:
      "With their deep understanding of the nuances and complexities of blockchain systems including custom blockchains, our consultants address even the most challenging aspects of your project with precision.",
    image: DeepExpertiseIcon,
    span: 4,
    imagePosition: "top-right-sm",
  },
  {
    id: "customized-solutions",
    title: "Customized\nSolutions",
    description:
      "By understanding your specific goals and challenges, we provide customized blockchain recommendations and design strategies that align perfectly with your objectives.",
    image: CustomizedSolutionsIcon,
    span: 8,
    imagePosition: "right-large",
  },
  {
    id: "comprehensive-protocol-analysis",
    title: "Comprehensive\nProtocol Analysis",
    description:
      "We thoroughly evaluate various blockchains to ensure they meet your performance, scalability, and interoperability needs, providing a comprehensive blockchain protocol consulting experience.",
    image: Group1000011605,
    span: 8,
    imagePosition: "center-bottom",
  },
  {
    id: "seamless-support",
    title: "Seamless\nSupport",
    description:
      "We work closely with your team to ensure a smooth transition from planning to deployment, addressing any challenges and ensuring the successful integration of the chosen blockchain.",
    image: QBkCPoeejpECqrXOviZdvDrmKws,
    span: 4,
    imagePosition: "top-right-tiny",
  },
];
