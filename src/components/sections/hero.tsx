import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";

import { useDomainLookup } from "@/hooks/use-domain-lookup";
import { EnrichmentCard } from "@/components/sections/enrichment-card";

export function HeroSection() {
  const [input, setInput] = useState("");
  const { state, lookup } = useDomainLookup();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    lookup(input);
  }

  return (
    <section className="container-tight relative flex flex-col gap-8 pb-12 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-primary">
          The problem
        </p>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Most B2B paid media is guesswork built on platform data.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          Ad platforms know what people click. They don&apos;t know what people buy.
          Every dollar you spend is optimized against the wrong signal.
        </p>
      </motion.div>

      {/* Domain lookup */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <p className="mb-3 font-mono text-xs text-muted">
          Enter a domain. See what we already know.
        </p>
        <form onSubmit={handleSubmit} className="flex max-w-md items-center gap-0">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="stripe.com"
              className="h-12 w-full rounded-l-lg border border-border bg-card pl-10 pr-4 font-mono text-sm text-foreground placeholder:text-muted/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            disabled={state.status === "loading"}
            className="h-12 rounded-r-lg bg-primary px-6 font-mono text-sm font-semibold text-primary-foreground transition-colors hover:brightness-110 disabled:opacity-60"
          >
            {state.status === "loading" ? "Enriching..." : "Lookup"}
          </button>
        </form>

        {state.status === "error" && (
          <p className="mt-2 font-mono text-xs text-red-400">{state.message}</p>
        )}
      </motion.div>

      {/* Enrichment result */}
      {state.status === "found" && (
        <EnrichmentCard data={state.data} synthetic={state.synthetic} />
      )}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-4 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="font-mono text-xs text-muted/40"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
