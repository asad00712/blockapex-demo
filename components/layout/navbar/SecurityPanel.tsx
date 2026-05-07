import { BsArrowRight } from "@/assets/icons";
import { type NavDropdown } from "@/constants/navbar";
import LinksList from "./LinksList";

export default function SecurityPanel({ dropdown }: { dropdown: NavDropdown }) {
  return (
    <div className="grid grid-cols-3 divide-x divide-white/10">
      <div className="p-8">
        <LinksList links={dropdown.links} />
        <div className="mt-8 rounded-xl bg-white/5 border border-white/10 p-4 flex items-center justify-between">
          <div>
            <p className="text-yellow-400 text-sm font-semibold leading-tight">
              {dropdown.featured.title}
            </p>
            <BsArrowRight className="text-yellow-400 mt-3 text-lg" />
          </div>
          <div className="w-14 h-14 rounded-lg bg-white/10" />
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-white font-bold text-base mb-5">By Chains</h3>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          {dropdown.byChains!.map(([left, right]) => (
            <span key={left + right} className="contents">
              <a href="#" className="text-white text-sm hover:text-gray-400 transition-colors">{left}</a>
              <a href="#" className="text-white text-sm hover:text-gray-400 transition-colors">{right}</a>
            </span>
          ))}
        </div>
      </div>

      <div className="p-8 flex flex-col">
        <div className="flex-1 rounded-xl bg-white/5 mb-5 min-h-50" />
        <h3 className="text-white font-bold text-xl mb-3">{dropdown.featured.title}</h3>
        <button className="btn-header self-start">
          {dropdown.featured.cta} <BsArrowRight />
        </button>
      </div>
    </div>
  );
}
