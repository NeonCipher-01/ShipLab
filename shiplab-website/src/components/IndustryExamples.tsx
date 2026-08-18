"use client";

import { motion } from "framer-motion";

const industries = [
  {
    name: "Founders",
    pipeline: ["Idea", "MVP Scope", "Prototype", "Working Product", "Launch"],
    description: "Turn an idea into a working MVP.",
  },
  {
    name: "Startups",
    pipeline: [
      "Product Vision",
      "AI Integration",
      "MVP Build",
      "Ship",
      "Iterate",
    ],
    description: "Build and ship AI-powered product features faster.",
  },
  {
    name: "Businesses",
    pipeline: [
      "Workflow Audit",
      "Solution Design",
      "Custom Software",
      "Deploy",
      "Automate",
    ],
    description: "Replace manual workflows with custom AI software.",
  },
];

export default function IndustryExamples() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-card border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[600px] mb-16"
        >
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-4">
            Built For Real Problems
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] font-semibold tracking-[-0.02em] mb-6">
            From startups to established businesses.
          </h2>
          <p className="text-muted leading-relaxed">
            The technology adapts to the problem. We build software around the
            workflow, users, and outcome — not around a specific industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="border border-border p-8 md:p-10"
            >
              <h3 className="text-lg font-semibold tracking-[-0.01em] mb-4">
                {industry.name}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-8">
                {industry.description}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {industry.pipeline.map((step, j) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="text-xs font-medium px-3 py-1.5 bg-background border border-border">
                      {step}
                    </span>
                    {j < industry.pipeline.length - 1 && (
                      <svg
                        className="w-3 h-3 text-light flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 border border-border p-8 md:p-10"
        >
          <h3 className="text-lg font-semibold tracking-[-0.01em] mb-4">
            Other Businesses
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-6">
            The same principle applies anywhere people need better software to
            solve real problems.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Agencies",
              "Logistics",
              "Professional Services",
              "E-commerce",
              "Healthcare",
              "Local Businesses",
            ].map((item) => (
              <span
                key={item}
                className="text-xs font-medium px-3 py-1.5 bg-background border border-border"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
