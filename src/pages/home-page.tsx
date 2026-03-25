import { Helmet } from 'react-helmet-async';

import { CtaSection } from '@/components/sections/cta';
import { FeaturesSection } from '@/components/sections/features';
import { HeroSection } from '@/components/sections/hero';
import { TestimonialsSection } from '@/components/sections/testimonials';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Money Machine | Marketing Site Starter</title>
        <meta
          name="description"
          content="A production-ready marketing site starter built with Vite, React, TypeScript, Tailwind v4, and shadcn/ui primitives."
        />
      </Helmet>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
