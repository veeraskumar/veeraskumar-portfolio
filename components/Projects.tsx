"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

type ProjectsType = {
  name: string;
  subtitle: string;
  image: string;
  status: string;
  description: string;
  tech: string[];
  live: string;
  repo?: string;
  gradient: string;
};

const projects: ProjectsType[] = [
  {
    name: "Movie Ticket Booking System",
    subtitle: "Full Stack Movie Booking Platform",
    image: "/mtbs.png",
    status: "Completed",
    description:
      "A full-stack movie ticket booking platform with JWT-based authentication and role-based access control for Users, Theater Owners, and Admins. Features theater and show management, online ticket booking, profile management, and email-based password reset. Built with a Spring Boot REST API and a responsive React frontend.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "Hibernate",
    ],
    live: "https://mtbs-rvk.vercel.app/",
    repo: "https://github.com/veeraskumar/movie-ticket-booking-system",
    gradient: "from-primary/20 to-transparent",
  },
  {
    name: "AKS Tours & Travels",
    subtitle: "Business Website",
    image: "/aks.png",
    status: "Completed",
    description:
      "A responsive business website developed for a tours and travels client. Built with Next.js and Tailwind CSS, featuring tour packages, company information, and an admin dashboard powered by FastAPI with JWT authentication and CRUD functionality for managing website content.",
    tech: ["Next.js", "React", "Tailwind CSS", "FastAPI", "JWT", "Python"],
    live: "https://akstourstravels.vercel.app/",
    gradient: "from-secondary/20 to-transparent",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)} className="mb-16 text-center">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-2">
            What I&apos;ve Built
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Projects
          </h2>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-accent" />
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              {...fadeUp(i * 0.15)}
              className="group rounded-2xl border border-border bg-surface overflow-hidden hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                <div
                  className={`relative md:w-2/5 min-h-50 bg-linear-to-br ${project.gradient} flex items-center justify-center border-b md:border-b-0 md:border-r border-border`}
                >
                  <Image
                    src={project.image}
                    alt="Blinkit Clone"
                    fill
                    className="object-cover p-2 rounded-2xl"
                  />
                </div>

                <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl font-bold text-white">
                        {project.name}
                      </h3>
                      <span className="text-xs px-2 py-1 rounded-full border border-yellow-400/40 text-yellow-400 bg-yellow-400/10">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-accent mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-muted text-sm leading-7 mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-accent text-black font-medium hover:opacity-90 transition-opacity"
                    >
                      <FiExternalLink size={14} />
                      Live Site
                    </a>
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-border text-white hover:border-accent hover:text-accent transition-all duration-200"
                      >
                        <FiGithub size={14} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.3)} className="mt-8 text-center">
          <div className="inline-block rounded-2xl border border-dashed border-border px-8 py-6 text-muted text-sm">
            More projects coming soon...
          </div>
        </motion.div>
      </div>
    </section>
  );
}
