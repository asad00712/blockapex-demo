import { BsArrowRight } from "@/assets/icons";
import { type NavDropdown } from "@/constants/navbar";
import LinksList from "./LinksList";

export default function StandardPanel({ dropdown }: { dropdown: NavDropdown }) {
  return (
    <div className="grid grid-cols-[1fr_2fr] divide-x divide-white/10">
      <div className="p-8">
        <LinksList links={dropdown.links} />
      </div>
      <div className="p-4">
        <div className="h-full rounded-xl bg-linear-to-br from-[#1a1f2e] to-[#0d1117] p-6 flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold text-2xl max-w-45 leading-tight">
              {dropdown.featured.title}
            </h3>
            <button className="btn-header mt-6">
              {dropdown.featured.cta} <BsArrowRight />
            </button>
          </div>
          <div className="w-52 h-40 rounded-xl bg-white/10" />
        </div>
      </div>
    </div>
  );
}
