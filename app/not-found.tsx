import Link from "next/link";
// import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Page Not Found
        </p>
        <h1 className="text-8xl md:text-9xl font-bold text-white mb-2">
          4<span className="text-accent">0</span>4
        </h1>
        <p className="text-muted text-base mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 rounded-lg bg-accent text-black font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
