"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    label: "Discover",
    description:
      "Understand the problem, users, workflow, and desired outcome.",
  },
  {
    label: "Plan",
    description:
      "Define the MVP scope, architecture, AI components, and technical approach.",
  },
  {
    label: "Build",
    description:
      "Develop the product, AI features, integrations, and core workflows.",
  },
  {
    label: "Launch",
    description:
      "Deploy a production-ready version that real users can actually use.",
  },
  {
    label: "Improve",
    description:
      "Use real feedback and usage data to iterate and improve the product.",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-card border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-4">
            How It Works
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] font-semibold tracking-[-0.02em]">
            From idea to production.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0">
          {steps.map((step, i) => (
            <motion.button
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setActive(i)}
              className={`relative text-left p-6 transition-all duration-300 ${
                i < 4 ? "md:border-r md:border-border" : ""
              } ${active === i ? "bg-background" : "hover:bg-background/50"}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                    active === i
                      ? "bg-dark text-white"
                      : "bg-border text-muted"
                  }`}
                >
                  {i + 1}
                </span>
                <span
                  className={`text-sm font-semibold tracking-[-0.01em] transition-colors ${
                    active === i ? "text-foreground" : "text-muted"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              <p
                className={`text-sm leading-relaxed transition-colors ${
                  active === i ? "text-muted" : "text-light"
                }`}
              >
                {step.description}
              </p>
              {active === i && (
                <motion.div
                  layoutId="activeStep"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-dark"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
