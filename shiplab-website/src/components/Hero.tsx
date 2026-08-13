"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[800px]"
        >
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-balance mb-8">
            We Turn Repetitive Business Work Into AI Systems.
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-[560px] leading-relaxed mb-12">
            ShipLab finds costly, repetitive workflows in your business and
            builds AI-powered systems that execute them — across the tools you
            already use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-dark text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-dark/90 transition-all duration-200 hover:translate-y-[-1px]"
            >
              Tell Us Your Problem
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="https://calendly.com/mrawaissultan2002/new-meeting-1?hide_gdpr_banner=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border px-7 py-3.5 rounded-full text-sm font-medium hover:border-dark/30 transition-all duration-200"
            >
              Book a Call
            </a>
          </div>
          <p className="text-sm text-light">
            Problem first. Software second.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
