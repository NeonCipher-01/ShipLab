"use client";

import { motion } from "framer-motion";

const steps = [
  {
    label: "Business Problem",
    description: "What's costing you time or money right now?",
  },
  {
    label: "Custom Solution",
    description: "Architecture designed around your specific workflow.",
  },
  {
    label: "Working System",
    description: "Production-ready software deployed into your operations.",
  },
  {
    label: "Ongoing Improvement",
    description: "Continuous refinement based on real performance data.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-24 md:py-32 bg-card border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-4">
              Our Approach
            </p>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] font-semibold tracking-[-0.02em] mb-6">
              Problem first. Software second.
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              We don&apos;t start with AI models or trendy frameworks. We start
              with what&apos;s actually broken in your business — then engineer
              the right system to fix it.
            </p>
            <div className="flex items-center gap-4 p-5 border border-border">
              <div className="w-10 h-10 rounded-full bg-dark flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium">
                Every system starts with understanding your business — not
                picking a tool.
              </p>
            </div>
          </motion.div>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative pl-10 pb-10 ${
                  i < steps.length - 1
                    ? "border-l border-border"
                    : ""
                }`}
              >
                <div className="absolute left-0 top-0 w-[9px] h-[9px] rounded-full border-2 border-dark bg-background -translate-x-[4px]" />
                <h3 className="text-base font-semibold tracking-[-0.01em] mb-1">
                  {step.label}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
