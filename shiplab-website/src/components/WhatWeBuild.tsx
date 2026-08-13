"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Revenue Systems",
    description:
      "Turn more opportunities into customers.",
    examples: [
      "Lead qualification",
      "Lead follow-up",
      "Lead recovery",
      "Customer reactivation",
      "Appointment booking",
      "Sales workflow automation",
    ],
  },
  {
    title: "Operations Systems",
    description:
      "Remove repetitive work from your team.",
    examples: [
      "Email processing",
      "Document processing",
      "Data entry",
      "Internal approvals",
      "Workflow automation",
      "Cross-system synchronization",
    ],
  },
  {
    title: "Customer Systems",
    description:
      "Handle customer interactions without adding more people.",
    examples: [
      "AI receptionists",
      "Voice agents",
      "Customer support",
      "Intelligent intake",
      "Call routing",
      "Appointment management",
    ],
  },
  {
    title: "Custom AI Software",
    description:
      "When your workflow needs software built specifically for it.",
    examples: [
      "Internal applications",
      "Dashboards",
      "AI-powered tools",
      "Custom APIs",
      "Business intelligence",
      "Industry-specific software",
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
            AI systems that do the work — not isolated AI features.
          </h2>
          <p className="text-muted leading-relaxed">
            Every ShipLab system is built around a real business workflow.
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
