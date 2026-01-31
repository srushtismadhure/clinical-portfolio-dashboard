import { Github, Linkedin, Mail } from "lucide-react";

const LINKEDIN_URL = "https://linkedin.com";
const GITHUB_URL = "https://github.com";
const EMAIL_ADDRESS = "mailto:srushti@example.com";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-[11px] text-slate-500">
          © {year} Srushti Madhure. All rights reserved.
        </span>

        <div className="flex items-center gap-3 text-slate-500">
          <a
            href={LINKEDIN_URL}
            aria-label="LinkedIn"
            className="transition-colors hover:text-slate-700"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={GITHUB_URL}
            aria-label="GitHub"
            className="transition-colors hover:text-slate-700"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={EMAIL_ADDRESS}
            aria-label="Email"
            className="transition-colors hover:text-slate-700"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
