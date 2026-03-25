import { motion } from "framer-motion";
import type { CompanyEnrichment } from "@/data/companies";

interface EnrichmentCardProps {
  data: CompanyEnrichment;
  synthetic: boolean;
}

export function EnrichmentCard({ data, synthetic }: EnrichmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-8 w-full max-w-2xl rounded-xl border border-border bg-card p-0 font-mono text-sm"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-foreground">{data.name}</span>
          <span className="text-muted">— {data.domain}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-muted text-xs">ICP SCORE</span>
          <span
            className={`rounded px-2 py-0.5 text-xs font-semibold ${
              data.icpScore >= 85
                ? "bg-primary/15 text-primary"
                : data.icpScore >= 70
                  ? "bg-accent/15 text-accent"
                  : "bg-secondary/15 text-secondary"
            }`}
          >
            {data.icpScore}
          </span>
        </div>
      </div>

      {/* Data grid */}
      <div className="grid grid-cols-2 gap-px bg-border">
        <DataCell label="INDUSTRY" value={data.industry} />
        <DataCell label="EMPLOYEES" value={data.employeeRange} />
        <DataCell label="FUNDING" value={data.fundingStage} />
        <DataCell label="EST. REVENUE" value={data.annualRevenue} />
      </div>

      {/* Tech stack */}
      <div className="border-t border-border px-5 py-3">
        <span className="text-xs text-muted">TECH STACK</span>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {data.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-background px-2 py-0.5 text-xs text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Intent signals */}
      <div className="border-t border-border px-5 py-3">
        <span className="text-xs text-muted">INTENT SIGNALS</span>
        <div className="mt-1.5 space-y-1">
          {data.intentSignals.map((signal) => (
            <div key={signal} className="flex items-center gap-2 text-xs">
              <span className="text-primary">▸</span>
              <span className="text-foreground">{signal}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hiring activity */}
      <div className="border-t border-border px-5 py-3">
        <span className="text-xs text-muted">RECENT HIRING</span>
        <div className="mt-1.5 flex gap-4">
          {data.recentHires.map((hire) => (
            <span key={hire.role} className="text-xs text-foreground">
              {hire.role}{" "}
              <span className="text-primary">+{hire.count}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      {synthetic && (
        <div className="border-t border-border px-5 py-2.5 text-xs text-muted">
          Estimated profile — full enrichment available on engagement
        </div>
      )}
    </motion.div>
  );
}

function DataCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card px-5 py-3">
      <span className="text-xs text-muted">{label}</span>
      <div className="mt-0.5 text-foreground">{value}</div>
    </div>
  );
}
