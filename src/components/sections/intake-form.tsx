import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { companies, generateSyntheticEnrichment } from "@/data/companies";

const intakeSchema = z.object({
  domain: z.string().min(1, "Required").refine(
    (v) => v.includes("."),
    "Enter a valid domain"
  ),
  monthlySpend: z.enum(["<25k", "25k-100k", "100k-500k", "500k+"], {
    error: "Select a range",
  }),
  salesMotion: z.enum(["inbound", "outbound", "plg", "hybrid"], {
    error: "Select a motion",
  }),
  crm: z.string().min(1, "Required"),
  frustration: z.string().min(10, "Tell us more (10+ chars)"),
});

type IntakeValues = z.infer<typeof intakeSchema>;

const spendOptions = [
  { value: "<25k" as const, label: "< $25K / mo" },
  { value: "25k-100k" as const, label: "$25K – $100K" },
  { value: "100k-500k" as const, label: "$100K – $500K" },
  { value: "500k+" as const, label: "$500K+" },
];

const motionOptions = [
  { value: "inbound" as const, label: "Inbound" },
  { value: "outbound" as const, label: "Outbound" },
  { value: "plg" as const, label: "PLG" },
  { value: "hybrid" as const, label: "Hybrid" },
];

const crmOptions = ["Salesforce", "HubSpot", "Pipedrive", "Close", "Other"];

interface InvestigationArea {
  title: string;
  description: string;
}

function getInvestigationAreas(data: IntakeValues): InvestigationArea[] {
  const areas: InvestigationArea[] = [];

  // Based on sales motion
  if (data.salesMotion === "inbound" || data.salesMotion === "hybrid") {
    areas.push({
      title: "Inbound Attribution Gap",
      description:
        "Map the full path from ad click → content engagement → MQL → SQL → closed deal. Most inbound programs lose 60%+ of attribution at the MQL handoff.",
    });
  }

  if (data.salesMotion === "outbound" || data.salesMotion === "hybrid") {
    areas.push({
      title: "Outbound + Paid Synergy",
      description:
        "Build retargeting audiences from outbound engagement signals. Warm prospects who opened emails but didn't reply — then hit them with case study ads.",
    });
  }

  if (data.salesMotion === "plg") {
    areas.push({
      title: "Product-Qualified Lead Scoring",
      description:
        "Pipe product usage events into audience construction. Target users hitting activation milestones but not converting to paid — with messaging specific to their usage pattern.",
    });
  }

  // Based on spend level
  if (data.monthlySpend === "100k-500k" || data.monthlySpend === "500k+") {
    areas.push({
      title: "Multi-Channel Revenue Attribution",
      description:
        "At your spend level, cross-channel cannibalization is likely costing 15-25% of budget. We'd build a unified attribution model across all channels feeding into your CRM.",
    });
  } else {
    areas.push({
      title: "Channel Concentration Strategy",
      description:
        "At your current spend, focus wins. We'd identify the single highest-ROAS channel and build deep infrastructure there before expanding.",
    });
  }

  // Always include
  areas.push({
    title: "Conversion API Infrastructure",
    description:
      `Server-side conversion events from ${data.crm} feeding real revenue data back to ad platforms. Replace pixel-based optimization with actual deal outcomes.`,
  });

  return areas.slice(0, 4);
}

export function IntakeFormSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState<IntakeValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IntakeValues>({
    resolver: zodResolver(intakeSchema),
  });

  function onSubmit(data: IntakeValues) {
    setSubmitted(data);
  }

  const enrichment = submitted
    ? companies[submitted.domain.replace(/^www\./, "").toLowerCase()] ??
      generateSyntheticEnrichment(submitted.domain)
    : null;

  return (
    <section ref={sectionRef} className="container-tight py-section" id="machine">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4 text-center font-mono text-sm uppercase tracking-[0.18em] text-secondary">
          Chapter 06 — The Machine
        </p>
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-semibold leading-tight md:text-5xl">
          Every deal makes the next campaign sharper.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          The loop never stops. Every closed deal and every lost deal refines targeting,
          creative, and spend allocation. This is what a machine looks like.
        </p>
      </motion.div>

      {!submitted ? (
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.4 }}
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-12 max-w-2xl space-y-6"
        >
          <p className="text-center font-mono text-xs text-muted">
            ▸ Client onboarding preview — tell us about your setup
          </p>

          {/* Domain */}
          <FieldGroup label="COMPANY DOMAIN" error={errors.domain?.message}>
            <input
              {...register("domain")}
              placeholder="yourcompany.com"
              className="form-input"
            />
          </FieldGroup>

          {/* Monthly Spend */}
          <FieldGroup label="MONTHLY AD SPEND" error={errors.monthlySpend?.message}>
            <div className="grid grid-cols-2 gap-2">
              {spendOptions.map((opt) => (
                <label
                  key={opt.value}
                  className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 font-mono text-xs text-foreground transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/10"
                >
                  <input
                    type="radio"
                    value={opt.value}
                    {...register("monthlySpend")}
                    className="sr-only"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </FieldGroup>

          {/* Sales Motion */}
          <FieldGroup label="SALES MOTION" error={errors.salesMotion?.message}>
            <div className="grid grid-cols-2 gap-2">
              {motionOptions.map((opt) => (
                <label
                  key={opt.value}
                  className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 font-mono text-xs text-foreground transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent/10"
                >
                  <input
                    type="radio"
                    value={opt.value}
                    {...register("salesMotion")}
                    className="sr-only"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </FieldGroup>

          {/* CRM */}
          <FieldGroup label="CRM" error={errors.crm?.message}>
            <select {...register("crm")} className="form-input" defaultValue="">
              <option value="" disabled>
                Select your CRM
              </option>
              {crmOptions.map((crm) => (
                <option key={crm} value={crm}>
                  {crm}
                </option>
              ))}
            </select>
          </FieldGroup>

          {/* Frustration */}
          <FieldGroup label="BIGGEST FRUSTRATION" error={errors.frustration?.message}>
            <textarea
              {...register("frustration")}
              rows={3}
              placeholder="What's broken about your current paid media setup?"
              className="form-input resize-none"
            />
          </FieldGroup>

          <button
            type="submit"
            className="h-12 w-full rounded-lg bg-primary font-mono text-sm font-semibold text-primary-foreground transition-colors hover:brightness-110"
          >
            See what we&apos;d explore first →
          </button>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          {/* Company summary */}
          {enrichment && (
            <div className="mx-auto mb-8 max-w-2xl rounded-lg border border-border bg-card p-5 font-mono text-xs">
              <div className="mb-2 flex items-center gap-2 text-muted">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span>enrichment.{submitted.domain}</span>
              </div>
              <p className="text-foreground">
                {enrichment.name} · {enrichment.industry} · {enrichment.employeeRange} employees
              </p>
            </div>
          )}

          {/* Investigation areas */}
          <p className="mb-6 text-center font-mono text-xs text-primary">
            ▸ Here&apos;s what we&apos;d explore first for {enrichment?.name ?? submitted.domain}:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {getInvestigationAreas(submitted).map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * i, duration: 0.4 }}
                className="rounded-lg border border-border bg-card p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                  <h3 className="font-mono text-sm font-semibold text-foreground">
                    {area.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-muted">{area.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-lg border border-primary/30 bg-primary/5 p-5 text-center font-mono text-sm text-foreground">
            This is the first 10 minutes of a Money Machine engagement.
            <br />
            <span className="text-muted">
              The full investigation goes deeper — revenue data analysis, competitive
              audit, channel-specific opportunity sizing.
            </span>
          </div>
        </motion.div>
      )}
    </section>
  );
}

function FieldGroup({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-xs text-muted">{label}</label>
      {children}
      {error && <p className="mt-1 font-mono text-xs text-red-400">{error}</p>}
    </div>
  );
}
