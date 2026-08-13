"use client";

import { motion } from "framer-motion";

const beforeSteps = [
  "Human receives email",
  "Reads it",
  "Finds information",
  "Copies data",
  "Updates CRM",
  "Sends reply",
  "Follows up",
];

const afterSteps = [
  "AI Worker monitors",
  "Understands context",
  "Makes decisions",
  "Takes action",
  "Updates systems",
  "Escalates when needed",
];

export default function BeforeAfter() {
  return (
    <section className="py-32 md:py-40 bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted mb-5">
            The Shift
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-white">
            From repetitive work to autonomous workflows.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-surface-border">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="bg-surface p-10 md:p-14"
          >
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted">
                Before
              </span>
              <div className="flex-1 h-[1px] bg-surface-border" />
            </div>
            <div className="space-y-0">
              {beforeSteps.map((step, i) => (
                <div key={step}>
                  <div className="flex items-center gap-5 py-4">
                    <span className="text-[11px] text-muted w-5 flex-shrink-0 text-right">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] text-light">{step}</span>
                  </div>
                  {i < beforeSteps.length - 1 && (
                    <div className="ml-[20px] pl-5 border-l border-surface-border" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-surface-elevated p-10 md:p-14"
          >
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white">
                After
              </span>
              <div className="flex-1 h-[1px] bg-surface-border" />
            </div>
            <div className="space-y-0">
              {afterSteps.map((step, i) => (
                <div key={step}>
                  <div className="flex items-center gap-5 py-4">
                    <span className="text-[11px] text-accent w-5 flex-shrink-0 text-right">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] text-white">{step}</span>
                  </div>
                  {i < afterSteps.length - 1 && (
                    <div className="ml-[20px] pl-5 border-l border-surface-border" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
