"use client";

import { motion } from "framer-motion";

const industries = [
  {
    name: "Dental Clinics",
    pipeline: [
      "Missed Call",
      "AI Receptionist",
      "Qualified Lead",
      "Booked Appointment",
    ],
    description:
      "Dental clinics lose potential patients through missed calls, slow follow-up, and fragmented booking workflows. An AI receptionist captures every lead and books appointments automatically.",
  },
  {
    name: "MedSpas",
    pipeline: [
      "Inquiry",
      "AI Consultation",
      "Treatment Match",
      "Scheduled Session",
    ],
    description:
      "MedSpas struggle with high-value consult no-shows and slow response to treatment inquiries. AI systems qualify intent, match treatments, and fill calendars.",
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
            Industry Examples
          </p>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] font-semibold tracking-[-0.02em] mb-6">
            Real problems. Real solutions.
          </h2>
          <p className="text-muted leading-relaxed">
            These are example industries, not limitations. The same problems
            repeat across businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>
    </section>
  );
}
