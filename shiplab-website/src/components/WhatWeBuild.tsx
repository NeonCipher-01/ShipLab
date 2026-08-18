"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "AI MVPs",
    description: "Turn product ideas into working MVPs ready for real users.",
    examples: [
      "AI-powered web applications",
      "MVP development",
      "AI feature integration",
      "Rapid prototypes",
    ],
  },
  {
    title: "SaaS Products",
    description:
      "Build the foundation for subscription-based software products.",
    examples: [
      "SaaS applications",
      "Dashboards & platforms",
      "Authentication & billing",
      "APIs & backend systems",
    ],
  },
  {
    title: "AI Agents",
    description:
      "Build AI agents that can reason, use tools, and complete real tasks.",
    examples: [
      "AI chat agents",
      "Voice agents",
      "Tool-using agents",
      "Agent workflows",
    ],
  },
  {
    title: "Internal Tools & Automation",
    description:
      "Build software that removes repetitive work and connects existing systems.",
    examples: [
      "Internal dashboards",
      "Workflow automation",
      "API integrations",
      "Data processing systems",
    ],
  },
];

export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[600px] mb-16"
        >
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-4">
            What We Build
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] font-semibold tracking-[-0.02em] mb-6">
            AI-powered products and software built around real problems.
          </h2>
          <p className="text-muted leading-relaxed">
            Every ShipLab system is built around a real problem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-8 md:p-10 group"
            >
              <h3 className="text-lg font-semibold tracking-[-0.01em] mb-3">
                {cat.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                {cat.description}
              </p>
              <ul className="space-y-2">
                {cat.examples.map((example) => (
                  <li
                    key={example}
                    className="flex items-start gap-2 text-sm text-light"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-light flex-shrink-0" />
                    {example}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
