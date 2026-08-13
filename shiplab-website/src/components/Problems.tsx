"use client";

import { motion } from "framer-motion";

const problems = [
  {
    title: "Missed Opportunities",
    description:
      "Calls go unanswered. Leads go cold. Customers move to the competitor.",
  },
  {
    title: "Slow Follow-Up",
    description:
      "Your team can't respond to every inquiry instantly. Valuable opportunities disappear.",
  },
  {
    title: "Repetitive Work",
    description:
      "Employees spend hours reading, copying, updating, checking, and following up.",
  },
  {
    title: "Manual Data Entry",
    description:
      "Information moves from emails and forms into CRMs, calendars, spreadsheets, and other systems by hand.",
  },
  {
    title: "Disconnected Systems",
    description:
      "Your CRM, calendar, communication tools, and internal software don't work together.",
  },
  {
    title: "Customer Operations",
    description:
      "Your team repeatedly answers the same questions, collects the same information, and performs the same processes.",
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
            Your business has work that shouldn&apos;t require a human.
          </h2>
          <p className="text-muted leading-relaxed">
            Most businesses lose time and revenue not because they lack software
            — but because people still have to manually move work between
            systems.
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
