import { BsArrowRight } from "@/assets/icons";
import { type NavDropdown } from "@/constants/navbar";
import LinksList from "./LinksList";

export default function ResourcesPanel({ dropdown }: { dropdown: NavDropdown }) {
  return (
    <div className="grid grid-cols-[1fr_2fr] divide-x divide-white/10">
      <div className="p-8">
        <LinksList links={dropdown.links} />
      </div>
      <div className="p-4">
        <div className="h-full rounded-xl bg-linear-to-br from-[#1a1f2e] to-[#0d1117] p-6">
          <h3 className="text-white font-bold text-xl mb-3">{dropdown.featured.title}</h3>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-md font-semibold">
              {dropdown.featured.tag}
            </span>
            <span className="text-gray-400 text-xs">• {dropdown.featured.readTime}</span>
            <span className="text-gray-400 text-xs">• {dropdown.featured.date}</span>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-28 h-20 rounded-lg bg-white/10 shrink-0" />
            <p className="text-white text-sm font-medium">{dropdown.featured.articleTitle}</p>
          </div>
          <button className="btn-header mt-5">
            {dropdown.featured.cta} <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
