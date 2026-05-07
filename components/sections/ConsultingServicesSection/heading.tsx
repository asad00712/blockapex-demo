import { Space_Grotesk } from 'next/font/google';
import React from 'react'

const sg = Space_Grotesk({ subsets: ["latin"], weight: ["400", "700"] });

const consultingGradient: React.CSSProperties = {
  background:
    "linear-gradient(102deg, rgba(255, 198, 128, 0.6) 0%, rgba(200, 127, 255, 1) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const servicesGradient: React.CSSProperties = {
  background:
    "linear-gradient(102deg, rgba(200, 127, 255, 1) 0%, rgba(0, 100, 255, 1) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export default function Heading({ size }: { size: "sm" | "lg" }) {
    const fontSize = size === "sm" ? "clamp(28px, 7vw, 36px)" : "clamp(36px, 4vw, 56px)";
  return (
    <h2
      className={`${sg.className} relative`}
      style={{ fontSize, lineHeight: 1, fontWeight: 400 }}
    >
      <span className="text-gray-900">Our</span>
      <br />
      <span className="text-gray-900">Tokenomics</span>
      <br />
      <span style={{ ...consultingGradient, fontWeight: 700 }}>Consulting</span>
      <br />
      <span style={{ ...servicesGradient, fontWeight: 700 }}>Services</span>
    </h2>
  )
}
