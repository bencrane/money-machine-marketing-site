import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pipelineStages = [
  {
    label: "EVENT CAPTURE",
    description: "RudderStack SDK",
    detail: "Page views, form fills, product events — every signal instrumented",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    label: "DATA LAKE",
    description: "ClickHouse",
    detail: "Sub-second queries across billions of behavioral events",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
  },
  {
    label: "IDENTITY",
    description: "Entity Resolution",
    detail: "Anonymous visitor → known lead → CRM contact → closed deal",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
  },
  {
    label: "ENRICHMENT",
    description: "Firmographic + Intent",
    detail: "Company size, tech stack, hiring signals, Bombora intent scores",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    label: "AUDIENCES",
    description: "Custom Segments",
    detail: "Built from who actually buys — not platform lookalikes",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
  },
  {
    label: "EXECUTION",
    description: "Conversion APIs",
    detail: "Server-side events feeding real revenue back to ad platforms",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
  },
];

export function PipelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="container-tight py-section"
      id="pipeline"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.18em] text-accent">
          Chapter 02 — The Pipeline
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
          We build a data nervous system for every client.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Not a dashboard. Not a report. A live data infrastructure that captures every
          signal, resolves every identity, and feeds real revenue data back to the
          platforms doing the spending.
        </p>
      </motion.div>

      {/* Pipeline flow */}
      <div className="relative mt-16">
        {/* Connecting line */}
        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary/40 via-accent/40 to-secondary/40 md:block" />

        <div className="space-y-3">
          {pipelineStages.map((stage, i) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5, ease: "easeOut" }}
              className="group relative flex items-start gap-6"
            >
              {/* Node dot */}
              <div className="relative z-10 mt-5 hidden md:block">
                <div
                  className={`h-3 w-3 rounded-full border-2 ${stage.borderColor} ${stage.bgColor}`}
                />
              </div>

              {/* Card */}
              <div
                className={`flex-1 rounded-lg border ${stage.borderColor} ${stage.bgColor} p-5 transition-colors`}
              >
                <div className="flex items-center gap-3">
                  <span className={`font-mono text-xs font-semibold ${stage.color}`}>
                    {stage.label}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {stage.description}
                  </span>
                </div>
                <p className="mt-2 text-sm text-foreground/80">{stage.detail}</p>
              </div>

              {/* Arrow between cards */}
              {i < pipelineStages.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.15 * i + 0.1, duration: 0.3 }}
                  className="absolute -bottom-1 left-[23px] hidden text-muted/40 md:block"
                >
                  ↓
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Terminal-style summary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-12 rounded-lg border border-border bg-background p-5 font-mono text-xs"
      >
        <div className="mb-2 flex items-center gap-2 text-muted">
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          <span>pipeline.status</span>
        </div>
        <div className="space-y-1 text-foreground/70">
          <p>
            <span className="text-muted">events_24h:</span>{" "}
            <span className="text-primary">2,847,391</span>
          </p>
          <p>
            <span className="text-muted">identity_resolution:</span>{" "}
            <span className="text-primary">94.2%</span>{" "}
            <span className="text-muted">match rate</span>
          </p>
          <p>
            <span className="text-muted">enrichment_coverage:</span>{" "}
            <span className="text-accent">89.7%</span>
          </p>
          <p>
            <span className="text-muted">conversion_api:</span>{" "}
            <span className="text-primary">active</span>{" "}
            <span className="text-muted">
              — Meta, Google, LinkedIn, Reddit
            </span>
          </p>
          <p>
            <span className="text-muted">last_sync:</span>{" "}
            <span className="text-foreground/50">12s ago</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
