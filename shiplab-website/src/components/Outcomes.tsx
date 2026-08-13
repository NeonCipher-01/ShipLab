"use client";

import { motion } from "framer-motion";

const outcomes = [
  {
    title: "More Captured Opportunities",
    description: "Every appropriate inquiry gets handled instead of waiting for a human.",
  },
  {
    title: "Faster Response",
    description: "Customers and leads get the right response when it matters.",
  },
  {
    title: "Less Manual Work",
    description: "Your team spends less time performing repetitive operational tasks.",
  },
  {
    title: "Better Connected Systems",
    description: "Information moves between your existing tools without constant human intervention.",
  },
  {
    title: "Better Customer Experience",
    description: "Customers receive faster, more consistent interactions.",
  },
];

export default function Outcomes() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[600px] mb-16"
        >
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-4">
            Business Outcomes
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] font-semibold tracking-[-0.02em] mb-6">
            What changes when the work starts running itself.
          </h2>
          <p className="text-muted leading-relaxed">
            Measurable improvements to how your business runs and grows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-8"
            >
              <span className="text-xs font-medium text-light mb-3 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold tracking-[-0.01em] mb-2">
                {outcome.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
