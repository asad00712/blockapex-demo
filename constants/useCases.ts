import {
  TbHexagon3D,
  TbDatabase,
  TbSettings,
  TbTarget,
  TbAtom,
  TbBraces,
  TbUsers,
} from "@/assets/icons";

export type UseCaseItem = {
  id: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
};

export const useCases: UseCaseItem[] = [
  {
    id: "defi",
    title: "DeFi Platforms",
    description:
      "We design decentralized finance protocols that handle lending, staking, and yield generation with security and scalability built in.",
    Icon: TbHexagon3D,
  },
  {
    id: "nft",
    title: "NFT Marketplaces",
    description:
      "Our team guides you through the creation of NFT platforms, from smart contract development to marketplace deployment and user engagement strategies.",
    Icon: TbAtom,
  },
  {
    id: "token",
    title: "Custom Token Launch",
    description:
      "End-to-end token launch support — from tokenomics design and smart contract development to listing strategy and post-launch monitoring.",
    Icon: TbBraces,
  },
  {
    id: "wallet",
    title: "Crypto Wallet Development",
    description:
      "Build secure, multi-chain wallets with custom features like staking, swapping, and dApp integration tailored to your user base.",
    Icon: TbTarget,
  },
  {
    id: "p2p",
    title: "P2P Solutions",
    description:
      "Peer-to-peer protocol design for trustless exchanges, escrow services, and direct value transfer without intermediaries.",
    Icon: TbDatabase,
  },
  {
    id: "dao",
    title: "DAO Governance",
    description:
      "Set up decentralized autonomous organizations with voting frameworks, treasury management, and proposal systems aligned with your community.",
    Icon: TbUsers,
  },
  {
    id: "infra",
    title: "Blockchain Infrastructure",
    description:
      "Layer-1 and Layer-2 infrastructure consulting — from consensus mechanism choice to node deployment and network economics.",
    Icon: TbSettings,
  },
  {
    id: "rwa",
    title: "Real World Assets",
    description:
      "Tokenize physical assets like real estate, commodities, and equities with compliant frameworks and on-chain settlement.",
    Icon: TbHexagon3D,
  },
];
