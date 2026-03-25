import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

import { channelStats } from "@/data/attribution";

type TimeRange = "7d" | "30d" | "90d";

function formatCurrency(n: number): string {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`;
  return `$${n}`;
}

// Simulated multipliers for time ranges
const timeMultipliers: Record<TimeRange, number> = {
  "7d": 0.25,
  "30d": 1,
  "90d": 2.8,
};

export function AttributionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [timeRange, setTimeRange] = useState<TimeRange>("30d");
  const [hoveredChannel, setHoveredChannel] = useState<string | null>(null);

  const multiplier = timeMultipliers[timeRange];

  const adjustedStats = channelStats.map((ch) => ({
    ...ch,
    spend: Math.round(ch.spend * multiplier),
    leads: Math.round(ch.leads * multiplier),
    sqls: Math.round(ch.sqls * multiplier),
    deals: Math.round(ch.deals * multiplier),
    revenue: Math.round(ch.revenue * multiplier),
  }));

  const totalSpend = adjustedStats.reduce((s, c) => s + c.spend, 0);
  const totalRevenue = adjustedStats.reduce((s, c) => s + c.revenue, 0);
  const totalDeals = adjustedStats.reduce((s, c) => s + c.deals, 0);
  const overallRoas = totalSpend > 0 ? totalRevenue / totalSpend : 0;

  // Bar chart max value for normalization
  const maxRevenue = Math.max(...adjustedStats.map((c) => c.revenue));

  return (
    <section ref={sectionRef} className="container-tight py-section" id="attribution">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-primary">
          Attribution
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
          Follow the money from spend to revenue.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Not last-click. Not modeled. Real attribution built from your CRM data — every
          dollar of ad spend traced to actual closed revenue.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="mt-12"
      >
        {/* Time range toggle + summary stats */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-1 rounded-lg border border-border bg-card p-1 font-mono text-xs">
            {(["7d", "30d", "90d"] as TimeRange[]).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`rounded-md px-3 py-1.5 transition-colors ${
                  timeRange === range
                    ? "bg-primary/15 text-primary"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          <div className="flex gap-6 font-mono text-xs">
            <div>
              <span className="text-muted">SPEND</span>{" "}
              <span className="text-foreground">{formatCurrency(totalSpend)}</span>
            </div>
            <div>
              <span className="text-muted">REVENUE</span>{" "}
              <span className="text-primary">{formatCurrency(totalRevenue)}</span>
            </div>
            <div>
              <span className="text-muted">DEALS</span>{" "}
              <span className="text-accent">{totalDeals}</span>
            </div>
            <div>
              <span className="text-muted">ROAS</span>{" "}
              <span className="text-primary">{overallRoas.toFixed(1)}x</span>
            </div>
          </div>
        </div>

        {/* Revenue flow visualization — horizontal bars */}
        <div className="mt-8 space-y-3">
          {adjustedStats.map((ch, i) => {
            const barWidth = maxRevenue > 0 ? (ch.revenue / maxRevenue) * 100 : 0;
            const isHovered = hoveredChannel === ch.channel;

            return (
              <motion.div
                key={ch.channel}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 * i, duration: 0.4 }}
                className={`rounded-lg border bg-card p-4 font-mono text-xs transition-colors ${
                  isHovered ? "border-primary/50" : "border-border"
                }`}
                onMouseEnter={() => setHoveredChannel(ch.channel)}
                onMouseLeave={() => setHoveredChannel(null)}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-foreground font-medium">{ch.channel}</span>
                  <div className="flex gap-4 text-muted">
                    <span>
                      {formatCurrency(ch.spend)}{" "}
                      <span className="text-muted/50">spend</span>
                    </span>
                    <span>
                      <span className="text-primary">
                        {formatCurrency(ch.revenue)}
                      </span>{" "}
                      <span className="text-muted/50">revenue</span>
                    </span>
                    <span>
                      <span className={ch.roas >= 4 ? "text-primary" : "text-accent"}>
                        {ch.roas}x
                      </span>{" "}
                      <span className="text-muted/50">ROAS</span>
                    </span>
                  </div>
                </div>

                {/* Bar */}
                <div className="h-2 w-full overflow-hidden rounded-full bg-background">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${barWidth}%` } : {}}
                    transition={{ delay: 0.3 + 0.15 * i, duration: 0.6, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary"
                  />
                </div>

                {/* Expanded detail on hover */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-3 grid grid-cols-4 gap-4 border-t border-border pt-3"
                  >
                    <div>
                      <span className="text-muted">LEADS</span>
                      <div className="text-foreground">{ch.leads}</div>
                    </div>
                    <div>
                      <span className="text-muted">SQLs</span>
                      <div className="text-foreground">{ch.sqls}</div>
                    </div>
                    <div>
                      <span className="text-muted">DEALS</span>
                      <div className="text-accent">{ch.deals}</div>
                    </div>
                    <div>
                      <span className="text-muted">CAC</span>
                      <div className="text-foreground">
                        {formatCurrency(ch.spend / Math.max(ch.deals, 1))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Funnel summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 rounded-lg border border-border bg-background p-5 font-mono text-xs"
        >
          <div className="mb-3 flex items-center gap-2 text-muted">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span>attribution.funnel ({timeRange})</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/70">
            <FunnelStep label="SPEND" value={formatCurrency(totalSpend)} color="text-foreground" />
            <Arrow />
            <FunnelStep
              label="MQLs"
              value={String(adjustedStats.reduce((s, c) => s + c.leads, 0))}
              color="text-accent"
            />
            <Arrow />
            <FunnelStep
              label="SQLs"
              value={String(adjustedStats.reduce((s, c) => s + c.sqls, 0))}
              color="text-accent"
            />
            <Arrow />
            <FunnelStep label="DEALS" value={String(totalDeals)} color="text-secondary" />
            <Arrow />
            <FunnelStep label="REVENUE" value={formatCurrency(totalRevenue)} color="text-primary" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function FunnelStep({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="text-center">
      <div className="text-muted/60">{label}</div>
      <div className={`text-sm font-semibold ${color}`}>{value}</div>
    </div>
  );
}

function Arrow() {
  return <span className="text-muted/30">→</span>;
}
