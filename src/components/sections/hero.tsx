import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="container-tight flex min-h-[65vh] flex-col justify-center gap-8 py-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-3xl"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.18em] text-primary">Marketing Site Starter</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Ship a polished funnel in days, not weeks.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          This scaffold gives you a production-ready foundation with modern routing, animations,
          accessible UI primitives, and strict TypeScript quality gates.
        </p>
      </motion.div>

      <div className="flex flex-wrap items-center gap-4">
        <Button size="lg">Start Building</Button>
        <Button size="lg" variant="ghost">View Docs</Button>
      </div>
    </section>
  );
}
