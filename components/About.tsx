"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMapPin, FiBook, FiCode } from "react-icons/fi";

const stats = [
  { value: "1+", label: "Live Project" },
  { value: "8+", label: "Technologies" },
  { value: "Self", label: "Taught Python & Next.js" },
];

const facts = [
  { icon: <FiMapPin size={16} />, text: "Madurai, Tamil Nadu" },
  {
    icon: <FiBook size={16} />,
    text: "B.E. CSE — Sethu Institute of Technology (2024)",
  },
  {
    icon: <FiCode size={16} />,
    text: "Java Full Stack — JSpiders, Bengaluru (2024)",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)} className="mb-16 text-center">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-2">
            Who I Am
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About Me
          </h2>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-accent" />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          <motion.div
            {...fadeUp(0.1)}
            className="shrink-0 flex flex-col items-center gap-6"
          >
            <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl border-2 border-accent/40 bg-surface flex items-center justify-center text-6xl font-bold text-accent">
              VK
            </div>
            <div className="flex flex-col gap-3 w-full">
              {facts.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm text-muted"
                >
                  <span className="text-accent">{f.icon}</span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex-1">
            <motion.p
              {...fadeUp(0.2)}
              className="text-muted text-base leading-8 mb-4"
            >
              I&apos;m a passionate Full Stack Developer from Madurai, Tamil
              Nadu. I completed my B.E. in Computer Science from Sethu Institute
              of Technology and followed it up with an intensive Java Full Stack
              course at JSpiders, Bengaluru.
            </motion.p>
            <motion.p
              {...fadeUp(0.3)}
              className="text-muted text-base leading-8 mb-4"
            >
              What makes me different is my drive to self-learn. After
              completing my Java training, I independently picked up Python,
              FastAPI, Next.js, and React.js — not from a course, but by
              building a real project from scratch.
            </motion.p>
            <motion.p
              {...fadeUp(0.4)}
              className="text-muted text-base leading-8 mb-10"
            >
              I&apos;m currently building a Blinkit clone with a FastAPI
              backend, JWT authentication, and a Next.js frontend — deployed
              live on Vercel and Render. I&apos;m actively looking for a Full
              Stack Developer role where I can contribute, learn, and grow.
            </motion.p>

            <motion.div {...fadeUp(0.5)} className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-surface p-4 text-center"
                >
                  <p className="text-2xl font-bold text-accent">{s.value}</p>
                  <p className="text-xs text-muted mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
