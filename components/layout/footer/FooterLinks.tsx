import { Space_Grotesk } from "next/font/google";
import { footerColumns } from "@/constants/footer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-[auto_auto_auto_auto_1fr] gap-x-12 gap-y-8 px-[6%] py-14">
      {footerColumns.map((col) => (
        <div key={col.heading} className={col.twoColumns ? "col-span-2 lg:col-span-1" : ""}>
          <h3 className={`${spaceGrotesk.className} text-blue-500 font-bold text-lg mb-5`}>{col.heading}</h3>

          {col.twoColumns ? (
            <div className="grid grid-cols-2 gap-x-6 lg:gap-x-10">
              {[col.links.slice(0, Math.ceil(col.links.length / 2)), col.links.slice(Math.ceil(col.links.length / 2))].map((half, i) => (
                <ul key={i} className="space-y-3">
                  {half.map((link) => (
                    <li key={link}>
                      <a href="#" className={`${spaceGrotesk.className} text-gray-700 text-sm hover:text-blue-500 transition-colors`}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          ) : (
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className={`${spaceGrotesk.className} text-gray-700 text-sm hover:text-blue-500 transition-colors`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
