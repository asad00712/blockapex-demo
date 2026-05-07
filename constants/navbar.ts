export type NavDropdown = {
  variant: "security" | "standard" | "resources" | "company";
  links: string[];
  byChains?: [string, string][];
  featured: {
    title: string;
    description?: string;
    cta: string;
    tag?: string;
    readTime?: string;
    date?: string;
    articleTitle?: string;
  };
};

export type NavItemType = {
  label: string;
  dropdown: NavDropdown | null;
};

export const navItems: NavItemType[] = [
  {
    label: "Security",
    dropdown: {
      variant: "security",
      links: [
        "Smart Contract Audit",
        "Blockchain Audit",
        "Tokenomics Audit",
        "Crypto Wallet Audit",
        "Threat Modeling",
        "Security Engineering",
        "dApp Audit",
        "dApp Penetration Testing",
        "Cross Chain Bridge Audit",
      ],
      byChains: [
        ["Ethereum Audit", "Starknet Audit"],
        ["TRON Audit", "TON Audit"],
        ["Solana Audit", "Blast Audit"],
        ["Base Audit", "Mantle Audit"],
        ["Arbitrum Audit", "Manta Audit"],
        ["Polygon Audit", "ICP Audit"],
        ["BSC Audit", "Tezos Audit"],
        ["Aptos Audit", "Flow Audit"],
        ["Avalanche Audit", "Algorand Audit"],
        ["Sui Audit", "Cosmos Audit"],
        ["Optimism Audit", "Near Audit"],
        ["Fantom Audit", "Polkadot Audit"],
      ],
      featured: { title: "Explore Audit Portfolio", cta: "Explore More" },
    },
  },
  { label: "Development", dropdown: null },
  {
    label: "Token Engineering",
    dropdown: {
      variant: "standard",
      links: [
        "Tokenomic Design",
        "Governance & DAO Design",
        "Token Launch",
        "Defi Tokenomics",
        "Web3 Game Design",
      ],
      featured: { title: "Tokenomic Design", cta: "Explore More" },
    },
  },
  {
    label: "Consultation",
    dropdown: {
      variant: "standard",
      links: [
        "DAO Consulting",
        "Defi Consulting",
        "Web3 Consulting",
        "Blockchain Consulting",
        "Tokenomics Consulting",
        "Cryptocurrency Consulting",
      ],
      featured: { title: "Blockchain Consulting", cta: "Explore More" },
    },
  },
  {
    label: "Resources",
    dropdown: {
      variant: "resources",
      links: [
        "All Resources",
        "Case Studies",
        "Hack Analysis",
        "Industry Insights",
        "Educational",
      ],
      featured: {
        title: "Featured Resources",
        tag: "EDUCATION",
        readTime: "26 min read",
        date: "1st May 2023",
        articleTitle:
          "NFT Bears to DeFi Bulls Unpacking Berachain's POL Mechanism and Potential Pitfalls",
        cta: "Read More",
      },
    },
  },
  {
    label: "Company",
    dropdown: {
      variant: "company",
      links: ["About", "Culture", "Career", "Our Team"],
      featured: {
        title: "Career",
        description: "Ready to grow, lead, and innovate in blockchain developments.",
        cta: "Join A Team of Builder",
      },
    },
  },
];
