"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMapPin, FiMail, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const contactInfo = [
  {
    icon: <FiMapPin size={16} />,
    label: "Location",
    value: "Madurai, TamilNadu, India",
  },
  {
    icon: <FiMail size={16} />,
    label: "Email",
    value: "veeraskumar000@gmail.com",
    href: "mailto:veeraskumar000@gmail.com",
  },
  {
    icon: <FiLinkedin size={16} />,
    label: "LinkedIn",
    value: "linkedin.com/in/veeraskumar",
    href: "https://www.linkedin.com/in/veeraskumar",
  },
  {
    icon: <FiGithub size={16} />,
    label: "GitHub",
    value: "github.com/veeraskumar",
    href: "https://github.com/veeraskumar",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS environment variables are not set.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 lg:px-16 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div {...fadeUp(0)} className="mb-16 text-center">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Contact Me
          </h2>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-accent" />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: form */}
          <motion.div {...fadeUp(0.1)} className="flex-1">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1">
                <label className="text-sm text-muted">Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-muted">Email</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-muted">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-black font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiSend size={14} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <p className="text-green-400 text-sm text-center">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </motion.div>

          {/* Right: contact info */}
          <motion.div
            {...fadeUp(0.2)}
            className="flex-1 flex flex-col gap-6 justify-center"
          >
            <p className="text-muted text-base leading-8">
              I&apos;m currently open to Full Stack Developer roles. Whether you
              have a job opportunity, a project idea, or just want to connect —
              feel free to reach out!
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center text-accent shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted">{c.label}</p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white hover:text-accent transition-colors"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
