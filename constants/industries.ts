import { ChromeShape8, ChromeShape11, ChromeShape3, ChromeShape15, ChromeShape7, ChromeShape20, ChromeShape5, ChromeShape12, } from "@/assets/images";

export type IndustryFeature = {
  title: string;
  description: string;
};

export type Industry = {
  id: string;
  label: string;
  image: string;
  features: IndustryFeature[];
};


export const industries: Industry[] = [
  {
    id: "fintech",
    label: "FinTech",
    image: ChromeShape11,
    features: [
      {
        title: "Tokenized Securities",
        description:
          "Financial products like stocks, bonds, and derivatives are being tokenized to provide more liquidity and fractional ownership. This allows investors to trade these assets in a decentralized manner.",
      },
      {
        title: "DeFi",
        description:
          "Tokenization is fundamental to DeFi protocols, where tokens represent various financial assets (e.g., stablecoins, LP tokens, or staking tokens), enabling decentralized lending, borrowing, and trading.",
      },
    ],
  },
  {
    id: "real-estate",
    label: "Real Estate & RWAs",
    image: ChromeShape3,
    features: [
      {
        title: "Property Tokenization",
        description:
          "Real estate assets can be tokenized, enabling fractional ownership and easier access to property investments.",
      },
      {
        title: "Tokenization of Physical Assets",
        description:
          "Other high-value assets, such as fine art, precious metals, or commodities, can also be tokenized, unlocking liquidity and broadening access to traditionally illiquid markets.",
      },
      {
        title: "Rental Income",
        description:
          "Tokens can represent future rental income on blockchain, making it easier to transfer ownership and increase liquidity in real estate markets.",
      },
    ],
  },
  {
    id: "supply-chain",
    label: "Supply Chain and Logistics",
    image: ChromeShape15,
    features: [
      {
        title: "Product Authentication",
        description:
          "Tokenization is used to authenticate and track the movement of goods in the supply chain. Each product or batch can be assigned a unique token, which tracks its journey from manufacturer to end consumer, ensuring transparency and reducing fraud.",
      },
      {
        title: "Tokenized Assets",
        description:
          "Physical goods or commodities (e.g., diamonds, luxury goods) can be tokenized, allowing fractional ownership and easier transfer of assets.",
      },
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    image: ChromeShape7,
    features: [
      {
        title: "Medical Records",
        description:
          "Tokenization can be used to represent and secure sensitive patient data. This ensures privacy and control for patients while also allowing healthcare providers secure access to the data they need.",
      },
      {
        title: "Tokenized Health Services",
        description:
          "Healthcare services or health-related benefits can be tokenized to streamline the management and exchange of medical insurance, patient rewards, or access to services.",
      },
    ],
  },
  {
    id: "gaming-socialfi",
    label: "Gaming & SocialFi",
    image: ChromeShape20,
    features: [
      {
        title: "In-Game Assets",
        description:
          "Tokenization gives players true ownership of digital assets like items, skins, and characters, enabling cross-platform trading.",
      },
      {
        title: "Play-to-Earn Models",
        description:
          "Tokenized rewards are earned by players through in-game activities and achievements.",
      },
      {
        title: "SocialFi",
        description:
          "Tokenization allows content creators and social media platforms to reward engagement, with tokens representing ownership or access to digital content.",
      },
    ],
  },
  {
    id: "vc-crowdfunding",
    label: "Venture Capital and Crowdfunding",
    image: ChromeShape5,
    features: [
      {
        title: "Equity Tokenization",
        description:
          "Startups and businesses can issue tokenized equity, allowing investors to buy fractional ownership in a company through tokens. This opens up investment opportunities for a larger group of investors, democratizing access to venture capital.",
      },
      {
        title: "Tokenized Crowdfunding",
        description:
          "Tokens can be used in crowdfunding models, where backers receive tokens that represent future value, equity, or access to exclusive services or products.",
      },
    ],
  },
  {
    id: "governance",
    label: "Governance and Voting",
    image: ChromeShape12,
    features: [
      {
        title: "Decentralized Governance",
        description:
          "Tokens can represent voting power in decentralized autonomous organizations (DAOs), allowing members to vote on decisions and proposals based on the number of tokens they hold.",
      },
      {
        title: "Voting Systems",
        description:
          "Tokens are increasingly used in digital voting systems, where votes are represented by tokens on a blockchain to ensure transparency, security, and tamper-proof records.",
      },
    ],
  },
  {
    id: "depin",
    label: "DePIN (Decentralized Physical Infrastructure Networks)",
    image: ChromeShape8,
    features: [
      {
        title: "Distributed Ownership",
        description:
          "Tokenize physical infrastructure like energy grids, telecommunications, or transportation networks, allowing decentralized control and access to these assets.",
      },
      {
        title: "Revenue Sharing",
        description:
          "Tokenization enables transparent and automated revenue-sharing models from the infrastructure, ensuring fair compensation for stakeholders.",
      },
      {
        title: "Incentivized Participation",
        description:
          "Reward participants with tokens for contributing to the development, maintenance, and operation of physical infrastructure, fostering innovation and community-driven growth.",
      },
    ],
  },
];
