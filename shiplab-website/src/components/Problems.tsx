"use client";

import { motion } from "framer-motion";

const problems = [
  {
    title: "From Idea to MVP",
    description:
      "Turn an idea into a working product without spending months building the wrong thing.",
  },
  {
    title: "AI That Actually Works",
    description:
      "Move beyond AI demos and build agents and AI features that work inside real products.",
  },
  {
    title: "Too Much Manual Work",
    description:
      "Replace repetitive workflows with software and AI systems that handle the work automatically.",
  },
  {
    title: "Disconnected Tools",
    description:
      "Connect your existing tools, APIs, data, and workflows into one reliable system.",
  },
  {
    title: "Need to Ship Faster",
    description:
      "Go from concept to working product without building an unnecessary amount of infrastructure.",
  },
  {
    title: "Ready to Productize",
    description:
      "Turn proven workflows and custom solutions into reusable software and eventually SaaS.",
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
            Good ideas don&apos;t matter if they never ship.
          </h2>
          <p className="text-muted leading-relaxed">
            Ideas are easy. Turning them into a working product is the hard
            part. ShipLab helps turn concepts, workflows, and product ideas into
            software people can actually use.
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
