import { useState, useCallback } from "react";
import {
  companies,
  generateSyntheticEnrichment,
  type CompanyEnrichment,
} from "@/data/companies";

type LookupState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "found"; data: CompanyEnrichment; synthetic: boolean }
  | { status: "error"; message: string };

export function useDomainLookup() {
  const [state, setState] = useState<LookupState>({ status: "idle" });

  const lookup = useCallback((rawInput: string) => {
    // Normalize: strip protocol, www, trailing slash
    let domain = rawInput
      .trim()
      .toLowerCase()
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "")
      .replace(/\/.*$/, "");

    if (!domain || !domain.includes(".")) {
      setState({ status: "error", message: "Enter a valid domain" });
      return;
    }

    setState({ status: "loading" });

    // Simulate API delay (400-900ms)
    const delay = 400 + Math.random() * 500;
    setTimeout(() => {
      const known = companies[domain];
      if (known) {
        setState({ status: "found", data: known, synthetic: false });
      } else {
        setState({
          status: "found",
          data: generateSyntheticEnrichment(domain),
          synthetic: true,
        });
      }
    }, delay);
  }, []);

  const reset = useCallback(() => setState({ status: "idle" }), []);

  return { state, lookup, reset };
}
