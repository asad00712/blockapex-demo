import { ScriptNetworkLogo, ScriptNetworkRight } from "@/assets/images";

export type StoryCard = {
  id: number;
  logo: string;
  description: string;
  mockupImage: string;
  services: string[];
};

export const storyCards: StoryCard[] = [
  {
    id: 1,
    logo: ScriptNetworkLogo,
    description:
      "To create a fully decentralized, blockchain-enabled ecosystem for video content delivery and engagement. Designed a dual token economy with a network token tied to the underlying growth of the platform and a reward token to incentivize actions and drive engagement on the platform.",
    mockupImage: ScriptNetworkRight,
    services: ["Market design", "Mechanism design", "Game design"],
  },
  {
    id: 2,
    logo: ScriptNetworkLogo,
    description:
      "To create a fully decentralized, blockchain-enabled ecosystem for video content delivery and engagement. Designed a dual token economy with a network token tied to the underlying growth of the platform and a reward token to incentivize actions and drive engagement on the platform.",
    mockupImage: ScriptNetworkRight,
    services: ["Token design", "Smart contracts", "DeFi strategy"],
  },
  {
    id: 3,
    logo: ScriptNetworkLogo,
    description:
      "To create a fully decentralized, blockchain-enabled ecosystem for video content delivery and engagement. Designed a dual token economy with a network token tied to the underlying growth of the platform and a reward token to incentivize actions and drive engagement on the platform.",
    mockupImage: ScriptNetworkRight,
    services: ["Market design", "Tokenomics", "Audit"],
  },
  {
    id: 4,
    logo: ScriptNetworkLogo,
    description:
      "To create a fully decentralized, blockchain-enabled ecosystem for video content delivery and engagement. Designed a dual token economy with a network token tied to the underlying growth of the platform and a reward token to incentivize actions and drive engagement on the platform.",
    mockupImage: ScriptNetworkRight,
    services: ["Mechanism design", "DAO governance", "Staking"],
  },
  {
    id: 5,
    logo: ScriptNetworkLogo,
    description:
      "To create a fully decentralized, blockchain-enabled ecosystem for video content delivery and engagement. Designed a dual token economy with a network token tied to the underlying growth of the platform and a reward token to incentivize actions and drive engagement on the platform.",
    mockupImage: ScriptNetworkRight,
    services: ["Game design", "NFT economy", "Incentive design"],
  },
];
