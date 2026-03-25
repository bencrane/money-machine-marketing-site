import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ClosingCtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-section">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            The loop closes
          </p>
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            Stop optimizing against the wrong signal.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            We build the infrastructure. You get the revenue. Every dollar of ad spend
            traced from click to closed deal.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#machine"
              className="inline-flex h-12 items-center rounded-lg bg-primary px-8 font-mono text-sm font-semibold text-primary-foreground transition-colors hover:brightness-110"
            >
              Start your build →
            </a>
            <a
              href="mailto:hello@moneymachine.co"
              className="inline-flex h-12 items-center rounded-lg border border-border px-8 font-mono text-sm text-foreground transition-colors hover:border-primary/50"
            >
              hello@moneymachine.co
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mx-auto mt-12 max-w-md font-mono text-xs text-muted/50"
          >
            <div className="space-y-1">
              <p>avg_onboarding: <span className="text-primary">14 days</span></p>
              <p>first_results: <span className="text-primary">30 days</span></p>
              <p>full_infrastructure: <span className="text-foreground/50">60–90 days</span></p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
