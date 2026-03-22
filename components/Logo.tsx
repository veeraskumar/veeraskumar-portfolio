import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1 group">
      {/* Bracket left */}
      <span className="text-accent text-xl font-bold transition-transform duration-200 group-hover:-translate-x-0.5">
        &lt;
      </span>
      {/* Initials */}
      <span className="text-white text-lg font-bold tracking-widest">RVK</span>
      {/* Bracket right */}
      <span className="text-accent text-xl font-bold transition-transform duration-200 group-hover:translate-x-0.5">
        /&gt;
      </span>
    </Link>
  );
}
