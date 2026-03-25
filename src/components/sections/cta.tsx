import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="container-tight py-16">
      <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-gradient-to-r from-card to-background p-8 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-semibold">Ready to launch your next marketing page?</h2>
          <p className="mt-2 text-muted">Fork this starter and ship a conversion-focused site quickly.</p>
        </div>
        <Button size="lg" className="gap-2">
          Build your funnel
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
