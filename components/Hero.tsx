"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const roles = [
  "Full Stack Developer",
  "Java & Python Developer",
  "Next.js & FastAPI Builder",
  "Open to Work 🚀",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];

    if (typing && displayed.length < current.length) {
      const t = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        60,
      );
      return () => clearTimeout(t);
    }

    if (typing && displayed.length === current.length) {
      const t = setTimeout(() => setTyping(false), 1800);
      return () => clearTimeout(t);
    }

    if (!typing && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed((d) => d.slice(0, -1)), 30);
      return () => clearTimeout(t);
    }

    if (!typing && displayed.length === 0) {
      const t = setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }, 200);
      return () => clearTimeout(t);
    }
  }, [displayed, typing, roleIndex]);
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
    }),
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background grid effect */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(var(--color-accent) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-12 py-20">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-6">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-accent font-mono text-sm tracking-widest"
          >
            {"<Hello World />"}
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            I&apos;m <span className="text-accent">VeerasKumar</span>
            <br />
            <span className="text-white">K R</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 h-8"
          >
            <span className="text-muted text-lg md:text-xl font-mono">
              {displayed}
            </span>
            <span className="inline-block w-0.5 h-6 bg-accent animate-pulse" />
          </motion.div>

          {/* Bio */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-muted text-base max-w-lg leading-relaxed"
          >
            B.E. CSE graduate trained at JSpiders, Bengaluru. I build full-stack
            apps with Java, Python, Next.js and FastAPI — and I&apos;m always
            learning something new.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#projects"
              className="px-6 py-3 rounded-lg bg-accent text-black font-semibold text-sm hover:brightness-110 transition-all duration-200 text-center"
            >
              View Projects
            </Link>
            <Link
              href="/VeerasKumar_CV.pdf"
              target="_blank"
              className="px-6 py-3 rounded-lg border border-border text-white text-sm hover:border-accent hover:text-accent transition-all duration-200 text-center"
            >
              Download CV
            </Link>
          </motion.div>

          {/* Social icons */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4 mt-2"
          >
            {[
              {
                icon: <FiGithub size={20} />,
                href: "https://github.com/veeraskumar",
                label: "GitHub",
              },
              {
                icon: <FiLinkedin size={20} />,
                href: "https://www.linkedin.com/in/veeraskumar",
                label: "LinkedIn",
              },
              {
                icon: <FiMail size={20} />,
                href: "mailto:[your-email]",
                label: "Email",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-muted hover:text-accent transition-colors duration-200 p-2 rounded-lg hover:bg-surface"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Code block decoration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
          className="hidden lg:block shrink-0"
        >
          <div className="w-95 rounded-xl border border-border bg-surface overflow-hidden shadow-2xl">
            {/* Window bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-muted text-xs font-mono">
                veeraskumar.ts
              </span>
            </div>
            {/* Code content */}
            <div className="p-5 font-mono text-sm leading-7">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">developer</span>{" "}
                <span className="text-white">= {"{"}</span>
              </p>
              <p className="pl-4">
                <span className="text-green-400">name</span>
                <span className="text-white">:</span>{" "}
                <span className="text-yellow-300">
                  &quot;VeerasKumar K R&quot;
                </span>
                <span className="text-white">,</span>
              </p>
              <p className="pl-4">
                <span className="text-green-400">location</span>
                <span className="text-white">:</span>{" "}
                <span className="text-yellow-300">&quot;Madurai, TN&quot;</span>
                <span className="text-white">,</span>
              </p>
              <p className="pl-4">
                <span className="text-green-400">stack</span>
                <span className="text-white">: [</span>
              </p>
              <p className="pl-8">
                <span className="text-yellow-300">&quot;Java&quot;</span>
                <span className="text-white">,</span>{" "}
                <span className="text-yellow-300">&quot;Python&quot;</span>
                <span className="text-white">,</span>
              </p>
              <p className="pl-8">
                <span className="text-yellow-300">&quot;Next.js&quot;</span>
                <span className="text-white">,</span>{" "}
                <span className="text-yellow-300">&quot;FastAPI&quot;</span>
                <span className="text-white">,</span>
              </p>
              <p className="pl-8">
                <span className="text-yellow-300">&quot;MySQL&quot;</span>
                <span className="text-white">,</span>{" "}
                <span className="text-yellow-300">&quot;Tailwind&quot;</span>
                <span className="text-white">,</span>
              </p>
              <p className="pl-4">
                <span className="text-white">],</span>
              </p>
              <p className="pl-4">
                <span className="text-green-400">available</span>
                <span className="text-white">:</span>{" "}
                <span className="text-accent">true</span>
                <span className="text-white">,</span>
              </p>
              <p>
                <span className="text-white">{"}"}</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-muted text-xs tracking-widest font-mono">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-6 bg-accent/50 rounded-full"
        />
      </motion.div>
    </section>
  );
}
