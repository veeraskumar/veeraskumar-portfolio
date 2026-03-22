"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Something went wrong
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Error
        </h1>
        <p className="text-muted text-base mb-8 max-w-md mx-auto">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-lg bg-accent text-black font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Try Again
        </button>
      </motion.div>
    </div>
  );
}
