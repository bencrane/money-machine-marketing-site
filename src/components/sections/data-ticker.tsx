import { useEffect, useRef } from "react";
import { tickerItems } from "@/data/ticker";

export function DataTicker() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let offset = 0;
    const speed = 0.5; // px per frame

    function step() {
      offset += speed;
      // Reset when first copy fully scrolled out
      const halfWidth = el!.scrollWidth / 2;
      if (offset >= halfWidth) offset = 0;
      el!.style.transform = `translateX(-${offset}px)`;
      animationId = requestAnimationFrame(step);
    }

    // Check reduced motion preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReduced) {
      animationId = requestAnimationFrame(step);
    }

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Duplicate items for seamless loop
  const allItems = [...tickerItems, ...tickerItems];

  return (
    <div className="w-full overflow-hidden border-y border-border bg-background/50 py-2.5">
      <div ref={scrollRef} className="flex w-max items-center gap-8 whitespace-nowrap">
        {allItems.map((item, i) => (
          <span key={i} className="flex items-center gap-2 font-mono text-xs">
            <span className="text-muted">{item.label}</span>
            <span className="text-foreground">{item.value}</span>
            <span className={item.positive ? "text-primary" : "text-red-400"}>
              {item.delta}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
