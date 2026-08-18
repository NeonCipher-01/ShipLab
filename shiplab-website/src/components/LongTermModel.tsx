"use client";

import { motion } from "framer-motion";

const stages = [
  {
    label: "Custom Solution",
    description: "Built for one specific problem.",
  },
  {
    label: "Reusable System",
    description: "Patterns and components that can be reused.",
  },
  {
    label: "Productized Software",
    description: "A repeatable solution for a broader market.",
  },
  {
    label: "SaaS",
    description: "A scalable product built for many users.",
  },
];

export default function LongTermModel() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-4">
              Long-Term Model
            </p>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] font-semibold tracking-[-0.02em] mb-6">
              Built to compound.
            </h2>
            <p className="text-muted leading-relaxed">
              Every project can become more valuable over time. A custom
              solution can become a reusable system, a reusable system can
              become a product, and a proven product can become SaaS.
            </p>
          </motion.div>

          <div className="flex flex-col gap-0">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5 py-6 border-b border-border last:border-0"
              >
                <span
                  className={`text-2xl font-semibold tracking-tight ${
                    i === stages.length - 1
                      ? "text-dark"
                      : "text-light"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    className={`text-base font-semibold tracking-[-0.01em] mb-1 ${
                      i === stages.length - 1 ? "text-dark" : ""
                    }`}
                  >
                    {stage.label}
                  </h3>
                  <p className="text-sm text-muted">{stage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
