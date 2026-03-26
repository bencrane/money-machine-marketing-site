import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const executionExamples = [
  {
    label: "GONG TRANSCRIPT → AD COPY",
    input: {
      type: "Gong Call Transcript",
      snippet:
        '"We spent 3 months trying to build attribution ourselves. Every engineer we pulled off product work cost us a feature cycle. And the dashboard still didn\'t connect spend to revenue..."',
      source: "VP Marketing, Series B SaaS",
    },
    output: {
      type: "LinkedIn Sponsored Ad",
      headline: "Stop Building Attribution Yourself",
      body: "Your engineers should ship product, not wrangle UTM parameters. Money Machine connects your ad spend to actual revenue — in weeks, not quarters.",
      cta: "See the pipeline →",
    },
  },
  {
    label: "PRODUCT DOCS → LANDING PAGE",
    input: {
      type: "Product Documentation",
      snippet:
        "RudderStack Event Spec: Track server-side events including page views, identifies, and custom events. Supports batch processing with guaranteed delivery...",
      source: "Technical Documentation",
    },
    output: {
      type: "Programmatic Landing Page",
      headline: "Server-Side Event Tracking That Actually Works",
      body: "Pixel-based tracking is dying. We instrument server-side events that capture every conversion — from first touch to closed deal — and feed them directly to your ad platforms.",
      cta: "Book a technical walkthrough →",
    },
  },
  {
    label: "CASE STUDY → RETARGETING CREATIVE",
    input: {
      type: "Case Study Data",
      snippet:
        "Client: Series C DevTools company. Result: 4.7x ROAS in 90 days. Reduced CAC from $340 to $142 while scaling spend from $50K to $180K/mo.",
      source: "Internal Case Study",
    },
    output: {
      type: "Meta Retargeting Ad",
      headline: "4.7x ROAS in 90 Days",
      body: "$340 → $142 CAC. While tripling spend. This is what happens when your ad platforms optimize against actual revenue, not proxy metrics.",
      cta: "See the full case study →",
    },
  },
];

export function ExecutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="container-tight py-section" id="execution">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-secondary">
          Creative engine
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
          Every campaign asset is specific to the buyer.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          We generate landing pages, ad creative, and lead magnets from your own data —
          Gong transcripts, product docs, case studies. No generic templates. Every
          asset speaks directly to your buyer&apos;s pain.
        </p>
      </motion.div>

      <div className="mt-12 space-y-6">
        {executionExamples.map((example, i) => (
          <motion.div
            key={example.label}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 * i, duration: 0.5 }}
            className="rounded-xl border border-border bg-card transition-colors hover:border-border/80"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border px-5 py-3 font-mono text-xs">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              <span className="text-secondary">{example.label}</span>
            </div>

            {/* Input → Output */}
            <div className="grid md:grid-cols-2">
              {/* Input */}
              <div className="border-b border-border p-5 md:border-b-0 md:border-r">
                <div className="mb-3 flex items-center gap-2 font-mono text-xs">
                  <span className="text-muted">INPUT</span>
                  <span className="rounded bg-background px-2 py-0.5 text-foreground/60">
                    {example.input.type}
                  </span>
                </div>
                <blockquote className="border-l-2 border-border pl-4 text-sm italic text-foreground/70">
                  {example.input.snippet}
                </blockquote>
                <p className="mt-2 font-mono text-xs text-muted">
                  — {example.input.source}
                </p>
              </div>

              {/* Output */}
              <div className="p-5">
                <div className="mb-3 flex items-center gap-2 font-mono text-xs">
                  <span className="text-secondary">OUTPUT</span>
                  <span className="rounded bg-secondary/10 px-2 py-0.5 text-secondary">
                    {example.output.type}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-foreground">
                    {example.output.headline}
                  </h3>
                  <p className="text-sm text-foreground/70">{example.output.body}</p>
                  <span className="inline-block font-mono text-xs text-primary">
                    {example.output.cta}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Process note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-8 rounded-lg border border-border bg-background p-5 font-mono text-xs"
      >
        <div className="mb-2 flex items-center gap-2 text-muted">
          <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
          <span>execution.pipeline</span>
        </div>
        <div className="space-y-1 text-foreground/70">
          <p>
            <span className="text-muted">landing_pages_active:</span>{" "}
            <span className="text-secondary">47</span>
          </p>
          <p>
            <span className="text-muted">ad_variants_live:</span>{" "}
            <span className="text-secondary">312</span>
          </p>
          <p>
            <span className="text-muted">personalization_rate:</span>{" "}
            <span className="text-primary">94%</span>{" "}
            <span className="text-muted">buyer-specific</span>
          </p>
          <p>
            <span className="text-muted">avg_generation_time:</span>{" "}
            <span className="text-foreground/50">2.3s per asset</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
