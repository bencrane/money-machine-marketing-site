import { Helmet } from "react-helmet-async";

import { HeroSection } from "@/components/sections/hero";
import { PipelineSection } from "@/components/sections/pipeline";
import { AudienceBuilderSection } from "@/components/sections/audience-builder";
import { ExecutionSection } from "@/components/sections/execution";
import { AttributionSection } from "@/components/sections/attribution";
import { IntakeFormSection } from "@/components/sections/intake-form";
import { ClosingCtaSection } from "@/components/sections/closing-cta";

function SectionDivider() {
  return (
    <div className="container-tight">
      <div className="border-t border-border/40" />
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Money Machine — Performance Marketing Infrastructure</title>
        <meta
          name="description"
          content="We build custom data infrastructure that turns ad spend into revenue. Entity resolution, audience construction, attribution — engineered per client."
        />
      </Helmet>
      <HeroSection />
      <SectionDivider />
      <PipelineSection />
      <SectionDivider />
      <AudienceBuilderSection />
      <SectionDivider />
      <ExecutionSection />
      <SectionDivider />
      <AttributionSection />
      <SectionDivider />
      <IntakeFormSection />
      <SectionDivider />
      <ClosingCtaSection />
    </>
  );
}
