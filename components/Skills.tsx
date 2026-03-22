"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Backend",
    color: "text-accent",
    border: "border-accent/30",
    bg: "bg-accent/10",
    skills: [
      "Python",
      "FastAPI",
      "Java",
      "Spring Boot*",
      "REST APIs",
      "JWT Auth",
    ],
  },
  {
    category: "Frontend",
    color: "text-purple-400",
    border: "border-purple-400/30",
    bg: "bg-purple-400/10",
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5 / CSS3",
    ],
  },
  {
    category: "Database",
    color: "text-yellow-400",
    border: "border-yellow-400/30",
    bg: "bg-yellow-400/10",
    skills: ["MySQL", "JDBC", "Hibernate (ORM)"],
  },
  {
    category: "Tools",
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/10",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Eclipse IDE"],
  },
  {
    category: "Currently Learning",
    color: "text-orange-400",
    border: "border-orange-400/30",
    bg: "bg-orange-400/10",
    skills: ["Docker", "Nginx"],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as const, delay },
});

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 md:px-8 lg:px-16 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)} className="mb-16 text-center">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-2">
            What I Know
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Technical Skills
          </h2>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-accent" />
        </motion.div>

        <div className="flex flex-col gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div key={group.category} {...fadeUp(gi * 0.1)}>
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="md:w-40 lg:w-48 shrink-0">
                  <span
                    className={`text-sm font-semibold tracking-wide ${group.color}`}
                  >
                    {group.category}
                  </span>
                  {group.category === "Currently Learning" && (
                    <p className="text-xs text-muted mt-1">In progress</p>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm border ${group.border} ${group.bg} ${group.color}
                        ${skill.includes("*") ? "opacity-60" : ""}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {gi < skillGroups.length - 1 && (
                <div className="mt-8 border-b border-border" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp(0.6)}
          className="mt-8 text-xs text-muted text-center"
        >
          * Spring Boot — familiar level
        </motion.p>
      </div>
    </section>
  );
}
