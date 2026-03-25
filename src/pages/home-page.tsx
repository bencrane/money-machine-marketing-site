import { Helmet } from "react-helmet-async";

import { DataTicker } from "@/components/sections/data-ticker";
import { HeroSection } from "@/components/sections/hero";
import { PipelineSection } from "@/components/sections/pipeline";
import { AudienceBuilderSection } from "@/components/sections/audience-builder";
import { ExecutionSection } from "@/components/sections/execution";
import { AttributionSection } from "@/components/sections/attribution";
import { IntakeFormSection } from "@/components/sections/intake-form";

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
      <DataTicker />
      <HeroSection />
      <PipelineSection />
      <AudienceBuilderSection />
      <ExecutionSection />
      <AttributionSection />
      <IntakeFormSection />
    </>
  );
}
