"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "ShipLab Website",
    oneLiner: "The site you're looking at — designed and built from scratch.",
    problem:
      "ShipLab needed a clean, fast, conversion-focused site that communicates what we build and how we work.",
    builtWith: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    whatIBuilt:
      "Full marketing site with animated sections, responsive design, dark/light theming, and a contact form — all built as a single-page application.",
  },
  {
    name: "AI Lead Recovery Agent",
    oneLiner:
      "An AI agent that re-engages cold leads through personalized conversations.",
    problem:
      "Businesses lose revenue because old leads sit untouched in CRMs while teams focus on new ones.",
    builtWith: ["Python", "OpenAI", "CRM API", "Webhook Integration"],
    whatIBuilt:
      "An autonomous agent that identifies inactive leads, initiates contextual conversations, qualifies interest, books appointments, and syncs everything back to the CRM.",
  },
  {
    name: "Internal Workflow Dashboard",
    oneLiner:
      "A custom dashboard that replaced spreadsheets and manual tracking.",
    problem:
      "A growing team was managing operations across scattered spreadsheets with no single source of truth.",
    builtWith: ["React", "Node.js", "PostgreSQL", "REST API"],
    whatIBuilt:
      "A full-stack internal tool with real-time data views, role-based access, automated status tracking, and integrations with their existing tools.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-card border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[600px] mb-16"
        >
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-4">
            Projects
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] font-semibold tracking-[-0.02em] mb-6">
            Things We&apos;ve Built
          </h2>
          <p className="text-muted leading-relaxed">
            Real products, experiments, and AI systems built by ShipLab.
          </p>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border p-8 md:p-10"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-lg font-semibold tracking-[-0.01em]">
                  {project.name}
                </h3>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-6">
                {project.oneLiner}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs font-medium text-light uppercase tracking-wider mb-2">
                    Problem
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-light uppercase tracking-wider mb-2">
                    Built with
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.builtWith.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-1.5 bg-background border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium text-light uppercase tracking-wider mb-2">
                    What I built
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.whatIBuilt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
