// import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} VeerasKumar K R — Built with Next.js &
          Tailwind CSS
        </p>

        <div className="flex items-center gap-4">
          {[
            {
              icon: <FiGithub size={18} />,
              href: "https://github.com/veeraskumar",
              label: "GitHub",
            },
            {
              icon: <FiLinkedin size={18} />,
              href: "https://www.linkedin.com/in/veeraskumar",
              label: "LinkedIn",
            },
            {
              icon: <FiMail size={18} />,
              href: "mailto:veeraskumar000@gmail.com",
              label: "Email",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-muted hover:text-accent transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
