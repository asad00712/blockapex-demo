export type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: "What is tokenomics consulting, and why is it important for my project?",
    answer:
      "Tokenomics consulting covers the design and analysis of your token's economic model — supply mechanics, distribution, incentives, and sustainability. A well-structured tokenomics model directly impacts investor confidence, user adoption, and long-term protocol health.",
  },
  {
    question: "How do you design a tokenomics model tailored to our project?",
    answer:
      "We start with a deep discovery phase to understand your protocol goals, target users, and competitive landscape. From there we model supply schedules, vesting curves, reward mechanisms, and stress-test scenarios before delivering a full specification.",
  },
  {
    question: "How do you ensure the tokenomics model is sustainable?",
    answer:
      "We run agent-based simulations and game-theoretic analysis to identify incentive misalignments and potential death spirals. Every model we deliver includes a set of sustainability conditions and early-warning metrics to monitor post-launch.",
  },
  {
    question: "Can you help us integrate governance mechanisms into our tokenomics?",
    answer:
      "Yes. We design governance frameworks — including voting power distribution, quorum thresholds, timelock parameters, and delegation mechanics — that align token holder incentives with the long-term goals of the protocol.",
  },
  {
    question: "How long does the tokenomics consultation process take?",
    answer:
      "A standard engagement runs 3–6 weeks depending on protocol complexity. This includes discovery, modelling, internal review cycles, and a final presentation with implementation recommendations.",
  },
  {
    question: "Do you assist with token launch and post-launch analysis?",
    answer:
      "Absolutely. We support IDO/TGE preparation, liquidity bootstrapping strategy, and provide post-launch monitoring reports to track model performance against projections and recommend adjustments.",
  },
  {
    question: "Can you help us pivot or redesign our existing tokenomics?",
    answer:
      "Yes. We audit your current model, identify structural weaknesses, and propose a migration path that minimises disruption to existing holders while moving toward a healthier economic design.",
  },
];
