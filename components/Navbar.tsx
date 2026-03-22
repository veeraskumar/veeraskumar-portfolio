"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "./Logo";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <Logo />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <motion.li
              key={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <Link
                href={l.href}
                className="text-muted hover:text-white transition-colors duration-200 text-sm tracking-wide"
              >
                {l.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* CV button desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="hidden md:block"
        >
          <Link
            href="/VeerasKumar_CV.pdf"
            target="_blank"
            className="text-sm px-4 py-2 rounded-lg border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-200 font-medium"
          >
            Download CV
          </Link>
        </motion.div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-border bg-bg px-4 py-4 flex flex-col gap-4"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-muted hover:text-white transition-colors duration-200 py-1"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/VeerasKumar_CV.pdf"
              target="_blank"
              className="text-sm px-4 py-2 rounded-lg border border-accent text-accent text-center mt-2"
            >
              Download CV
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
