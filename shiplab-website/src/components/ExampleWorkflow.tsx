"use client";

import { motion } from "framer-motion";

const workflowSteps = [
  "Old lead sits in CRM",
  "AI identifies inactive lead",
  "Starts personalized conversation",
  "Answers approved questions",
  "Handles basic objections",
  "Qualifies interest",
  "Books appointment",
  "Updates CRM",
  "Alerts human when necessary",
];

export default function ExampleWorkflow() {
  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-light mb-5">
            Example Workflow
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] font-semibold tracking-[-0.02em] mb-6">
            AI Lead Recovery System
          </h2>
          <p className="text-[15px] text-muted leading-relaxed max-w-[500px]">
            Here&apos;s what an AI worker looks like in practice — one workflow,
            fully automated.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="border border-border"
        >
          <div className="flex flex-col">
            {workflowSteps.map((step, i) => (
              <div key={step}>
                <div className="flex items-start gap-6 px-8 md:px-12 py-6 group hover:bg-soft-white transition-colors duration-500">
                  <span className="text-[11px] font-medium text-light w-5 flex-shrink-0 pt-0.5 tracking-[0.05em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <p className="text-[15px] font-medium">{step}</p>
                  </div>
                  {i < workflowSteps.length - 1 && (
                    <svg
                      className="w-3 h-3 text-light mt-1.5 flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  )}
                </div>
                {i < workflowSteps.length - 1 && (
                  <div className="mx-8 md:mx-12 border-b border-border" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[11px] text-light mt-5 tracking-[0.05em]"
        >
          Example workflow — not a client claim.
        </motion.p>
      </div>
    </section>
  );
}
