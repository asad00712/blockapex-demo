import { BsArrowRight } from "@/assets/icons";

export default function Header() {
    return (
        <header className="w-full h-7 bg-header flex items-center justify-center gap-3">
            <span className='flex items-center gap-1.5'>
                <img src="https://s.w.org/images/core/emoji/17.0.2/svg/1f680.svg" alt='icon' className='size-4' />
                <p className="text-xs sm:text-sm">Audit Portfolio Dashboard is Live</p>
            </span>
            <button className="btn-header">
                Learn More
                <BsArrowRight className="text-sm" />
            </button>
        </header>
    )
}
