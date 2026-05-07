export type FooterColumn = {
  heading: string;
  links: string[];
  twoColumns?: boolean;
};

export const footerColumns: FooterColumn[] = [
  {
    heading: "Company",
    links: ["About Us", "Career", "Contact Us", "Partners", "Case Studies"],
  },
  {
    heading: "Security",
    links: [
      "Smart Contract Development",
      "Blockchain Audit",
      "Tokenomics Audits",
      "Crypto Wallet Audit",
      "Threat Modeling",
      "Security Engineering",
      "dApp Audit",
      "dApp Penetration Testing",
      "Cross Chain Bridge Audit",
    ],
  },
  {
    heading: "Token Engineering",
    links: [
      "Tokenomic Design",
      "Governance & DAO Design",
      "Token Launch",
      "DeFi Tokenomics",
      "Web 3 Game Design",
    ],
  },
  {
    heading: "Consulting",
    links: [
      "DAO Consulting",
      "Tokenomics Consulting",
      "Blockchain Consulting",
      "Web3 Consulting",
      "DeFi Consulting",
      "Cryptocurrency Consulting",
    ],
  },
  {
    heading: "Development",
    twoColumns: true,
    links: [
      "DAPP Development",
      "Token Development",
      "DeFi Development",
      "NFT Development",
      "Wallet Development",
      "WebApp Development",
      "Smart contract development",
      "Multi chain protocol development",
      "Cross Chain Bridge Development",
      "Oracle Development",
      "Blockchain Development",
      "DAO Development",
      "Layer 2 Development",
      "Custom Appchain Development",
      "Enterprise Blockchain Development",
      "Metaverse Development",
      "AVS Development",
    ],
  },
];

export const socialSlots = 7;
