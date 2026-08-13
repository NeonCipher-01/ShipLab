"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="text-lg font-semibold tracking-tight">
              ShipLab
            </a>
            <p className="text-sm text-muted mt-3 max-w-[280px] leading-relaxed">
              Custom AI software for businesses. We find costly gaps and build
              systems to solve them.
            </p>
          </div>
          <div>
            <h5 className="text-xs font-medium tracking-[0.12em] uppercase text-light mb-4">
              Navigation
            </h5>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Problems", href: "#problems" },
                { label: "What We Build", href: "#what-we-build" },
                { label: "Industries", href: "#industries" },
                { label: "Approach", href: "#approach" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-xs font-medium tracking-[0.12em] uppercase text-light mb-4">
              Connect
            </h5>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:hello@shiplab.dev"
                className="text-sm text-muted hover:text-foreground transition-colors w-fit"
              >
                hello@shiplab.dev
              </a>
              <a
                href="https://calendly.com/mrawaissultan2002/new-meeting-1?hide_gdpr_banner=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground transition-colors w-fit"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-light">
            &copy; {new Date().getFullYear()} ShipLab. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-light hover:text-muted transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-light hover:text-muted transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
