import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";

import {
  audienceCompanies,
  filterAudience,
  allIndustries,
  allTechStack,
  allRegions,
  type AudienceFilters,
  type CompanySize,
} from "@/data/audiences";

const sizeLabels: Record<CompanySize, string> = {
  "1-50": "1–50",
  "51-200": "51–200",
  "201-1000": "201–1K",
  "1001-5000": "1K–5K",
  "5000+": "5K+",
};

export function AudienceBuilderSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [filters, setFilters] = useState<AudienceFilters>({
    sizes: [],
    industries: [],
    techStack: [],
    intentMin: 0,
    regions: [],
  });

  const filtered = useMemo(
    () => filterAudience(audienceCompanies, filters),
    [filters],
  );

  const totalCount = audienceCompanies.length;
  const matchCount = filtered.length;
  const avgIntent =
    filtered.length > 0
      ? Math.round(filtered.reduce((s, c) => s + c.intentScore, 0) / filtered.length)
      : 0;

  function toggleFilter<K extends keyof AudienceFilters>(
    key: K,
    value: AudienceFilters[K] extends (infer T)[] ? T : never,
  ) {
    setFilters((prev) => {
      const arr = prev[key] as unknown[];
      const next = arr.includes(value)
        ? arr.filter((v) => v !== value)
        : [...arr, value];
      return { ...prev, [key]: next };
    });
  }

  return (
    <section ref={sectionRef} className="container-tight py-section" id="audience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.18em] text-accent">
          Chapter 03 — The Audience
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
          Targeting built from who actually buys.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Not platform lookalikes. Not broad firmographic lists. Audiences constructed
          from your own closed-deal data, enriched with intent signals and technographic
          intelligence.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="mt-12 grid gap-6 lg:grid-cols-[280px_1fr]"
      >
        {/* Filters panel */}
        <div className="space-y-5 rounded-xl border border-border bg-card p-5 font-mono text-xs">
          <div className="flex items-center gap-2 text-muted">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span>audience.filters</span>
          </div>

          {/* Company size */}
          <FilterSection label="COMPANY SIZE">
            <div className="flex flex-wrap gap-1.5">
              {(Object.entries(sizeLabels) as [CompanySize, string][]).map(
                ([value, label]) => (
                  <FilterPill
                    key={value}
                    label={label}
                    active={filters.sizes.includes(value)}
                    onClick={() => toggleFilter("sizes", value)}
                  />
                ),
              )}
            </div>
          </FilterSection>

          {/* Industry */}
          <FilterSection label="INDUSTRY">
            <div className="flex flex-wrap gap-1.5">
              {allIndustries.map((ind) => (
                <FilterPill
                  key={ind}
                  label={ind}
                  active={filters.industries.includes(ind)}
                  onClick={() => toggleFilter("industries", ind)}
                />
              ))}
            </div>
          </FilterSection>

          {/* Tech stack */}
          <FilterSection label="TECH STACK">
            <div className="flex flex-wrap gap-1.5">
              {allTechStack.map((tech) => (
                <FilterPill
                  key={tech}
                  label={tech}
                  active={filters.techStack.includes(tech)}
                  onClick={() => toggleFilter("techStack", tech)}
                />
              ))}
            </div>
          </FilterSection>

          {/* Intent threshold */}
          <FilterSection label={`INTENT SCORE ≥ ${filters.intentMin}`}>
            <input
              type="range"
              min={0}
              max={95}
              step={5}
              value={filters.intentMin}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  intentMin: Number(e.target.value),
                }))
              }
              className="w-full accent-accent"
            />
            <div className="flex justify-between text-muted/50">
              <span>0</span>
              <span>95</span>
            </div>
          </FilterSection>

          {/* Region */}
          <FilterSection label="REGION">
            <div className="flex flex-wrap gap-1.5">
              {allRegions.map((region) => (
                <FilterPill
                  key={region}
                  label={region}
                  active={filters.regions.includes(region)}
                  onClick={() => toggleFilter("regions", region)}
                />
              ))}
            </div>
          </FilterSection>

          {/* Reset */}
          <button
            onClick={() =>
              setFilters({
                sizes: [],
                industries: [],
                techStack: [],
                intentMin: 0,
                regions: [],
              })
            }
            className="w-full rounded-md border border-border py-1.5 text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            Reset filters
          </button>
        </div>

        {/* Results panel */}
        <div className="space-y-4">
          {/* Summary bar */}
          <div className="flex items-center justify-between rounded-lg border border-border bg-card px-5 py-3 font-mono text-xs">
            <div className="flex items-center gap-6">
              <span>
                <span className="text-muted">MATCHED</span>{" "}
                <span className="text-accent text-base font-semibold">
                  {matchCount}
                </span>
                <span className="text-muted"> / {totalCount}</span>
              </span>
              <span>
                <span className="text-muted">AVG INTENT</span>{" "}
                <span className={avgIntent >= 85 ? "text-primary" : "text-accent"}>
                  {avgIntent}
                </span>
              </span>
            </div>
            <span className="text-muted/50">
              {matchCount === totalCount ? "No filters applied" : "Filtered"}
            </span>
          </div>

          {/* Company list */}
          <div className="max-h-[520px] space-y-1 overflow-y-auto pr-1">
            {filtered.map((company, i) => (
              <motion.div
                key={company.domain}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: Math.min(i * 0.02, 0.5), duration: 0.3 }}
                className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 font-mono text-xs"
              >
                <div className="flex items-center gap-4">
                  <span className="text-foreground font-medium">{company.name}</span>
                  <span className="text-muted">{company.industry}</span>
                  <span className="hidden text-muted/50 sm:inline">
                    {company.size} employees
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden gap-1 sm:flex">
                    {company.techStack.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded bg-background px-1.5 py-0.5 text-foreground/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span
                    className={`min-w-[28px] text-right font-semibold ${
                      company.intentScore >= 90
                        ? "text-primary"
                        : company.intentScore >= 80
                          ? "text-accent"
                          : "text-muted"
                    }`}
                  >
                    {company.intentScore}
                  </span>
                </div>
              </motion.div>
            ))}
            {filtered.length === 0 && (
              <div className="py-12 text-center font-mono text-xs text-muted">
                No companies match the current filters.
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function FilterSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <span className="mb-2 block text-muted">{label}</span>
      {children}
    </div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md border px-3 py-2 transition-colors ${
        active
          ? "border-accent bg-accent/15 text-accent"
          : "border-border bg-background text-foreground/60 hover:border-accent/50"
      }`}
    >
      {label}
    </button>
  );
}
