export default function LinksList({ links }: { links: string[] }) {
  return (
    <ul className="space-y-5">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="text-white font-semibold text-sm hover:text-gray-400 transition-colors">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}
