"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function FinalCTA() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    business: "",
    problem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration ready
    console.log("Form submitted:", formState);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-4">
              Get Started
            </p>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] font-semibold tracking-[-0.02em] mb-6">
              Have a problem worth solving?
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Tell us what&apos;s costing your business time or money. We&apos;ll
              determine whether custom AI software can actually solve it.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="https://calendly.com/mrawaissultan2002/new-meeting-1?hide_gdpr_banner=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-dark text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-dark/90 transition-all duration-200 hover:translate-y-[-1px]"
              >
                Book a Call
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
              <p className="text-sm text-light">
                Or email us at{" "}
                <a
                  href="mailto:hello@shiplab.dev"
                  className="text-foreground underline underline-offset-4 hover:text-muted transition-colors"
                >
                  hello@shiplab.dev
                </a>
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-card border border-border text-sm focus:outline-none focus:border-dark/30 transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-card border border-border text-sm focus:outline-none focus:border-dark/30 transition-colors"
                placeholder="you@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="business"
                className="block text-sm font-medium mb-2"
              >
                Business Type
              </label>
              <input
                type="text"
                id="business"
                value={formState.business}
                onChange={(e) =>
                  setFormState({ ...formState, business: e.target.value })
                }
                className="w-full px-4 py-3 bg-card border border-border text-sm focus:outline-none focus:border-dark/30 transition-colors"
                placeholder="e.g. Dental clinic, MedSpa, Agency"
              />
            </div>
            <div>
              <label
                htmlFor="problem"
                className="block text-sm font-medium mb-2"
              >
                What&apos;s the problem?
              </label>
              <textarea
                id="problem"
                rows={4}
                value={formState.problem}
                onChange={(e) =>
                  setFormState({ ...formState, problem: e.target.value })
                }
                className="w-full px-4 py-3 bg-card border border-border text-sm focus:outline-none focus:border-dark/30 transition-colors resize-none"
                placeholder="Tell us what's costing your business time or money..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-dark text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-dark/90 transition-all duration-200"
            >
              Tell Us Your Problem
            </button>
            <p className="text-xs text-light text-center">
              We&apos;ll review your submission and get back within 24 hours.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
