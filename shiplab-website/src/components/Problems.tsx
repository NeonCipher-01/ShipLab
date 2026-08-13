"use client";

import { motion } from "framer-motion";

const problems = [
  {
    title: "Missed Calls Become Lost Customers",
    description:
      "Every unanswered call is a potential customer choosing your competitor.",
  },
  {
    title: "Slow Lead Follow-Up",
    description:
      "Leads go cold within minutes. Hours-long response times kill conversions.",
  },
  {
    title: "Old Customers Never Return",
    description:
      "Without re-engagement, your best patients and clients simply forget you exist.",
  },
  {
    title: "Repetitive Manual Work",
    description:
      "Your team spends hours on tasks that should take seconds.",
  },
  {
    title: "Disconnected Business Tools",
    description:
      "Your CRM, calendar, and communication tools don't talk to each other.",
  },
  {
    title: "Poor Customer Experience",
    description:
      "Fragmented interactions create friction and erode trust.",
  },
];

export default function Problems() {
  return (
    <section id="problems" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[600px] mb-16"
        >
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-4">
            The Problem
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] font-semibold tracking-[-0.02em] mb-6">
            These aren&apos;t AI problems. They&apos;re business problems.
          </h2>
          <p className="text-muted leading-relaxed">
            Every business loses money to the same preventable issues. The
            solution isn&apos;t more tools — it&apos;s smarter systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-8 md:p-10 group"
            >
              <span className="text-xs font-medium text-light mb-4 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold tracking-[-0.01em] mb-3">
                {problem.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
