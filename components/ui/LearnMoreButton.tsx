import { Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";

const sg = Space_Grotesk({ subsets: ["latin"], weight: ["500"] });

interface LearnMoreButtonProps {
  className?: string;
}

export default function LearnMoreButton({ className }: LearnMoreButtonProps) {
  return (
    <button
      className={cn(
        sg.className,
        "rounded-lg border border-gray-900 transition-colors px-7 py-3 text-gray-900 text-sm font-medium cursor-pointer whitespace-nowrap",
        className
      )}
    >
      Learn More
    </button>
  );
}
