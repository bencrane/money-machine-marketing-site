import { useEffect, useRef } from "react";
import { tickerItems } from "@/data/ticker";

function HorizontalStrip({ direction = 1 }: { direction?: 1 | -1 }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let offset = direction === 1 ? 0 : el.scrollWidth / 2;
    const speed = 0.3;

    function step() {
      offset += speed * direction;
      const halfWidth = el!.scrollWidth / 2;
      if (direction === 1 && offset >= halfWidth) offset = 0;
      if (direction === -1 && offset <= 0) offset = halfWidth;
      el!.style.transform = `translateX(-${offset}px)`;
      animationId = requestAnimationFrame(step);
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!prefersReduced) {
      animationId = requestAnimationFrame(step);
    }

    return () => cancelAnimationFrame(animationId);
  }, [direction]);

  const allItems = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden">
      <div
        ref={scrollRef}
        className="flex w-max items-center gap-6 whitespace-nowrap"
      >
        {allItems.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5 font-mono text-[10px]">
            <span className="text-muted/60">{item.label}</span>
            <span className="text-foreground/70">{item.value}</span>
            <span className={item.positive ? "text-primary/70" : "text-red-400/70"}>
              {item.delta}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function VerticalStrip({ direction = 1 }: { direction?: 1 | -1 }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let offset = direction === 1 ? 0 : el.scrollHeight / 2;
    const speed = 0.3;

    function step() {
      offset += speed * direction;
      const halfHeight = el!.scrollHeight / 2;
      if (direction === 1 && offset >= halfHeight) offset = 0;
      if (direction === -1 && offset <= 0) offset = halfHeight;
      el!.style.transform = `translateY(-${offset}px)`;
      animationId = requestAnimationFrame(step);
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!prefersReduced) {
      animationId = requestAnimationFrame(step);
    }

    return () => cancelAnimationFrame(animationId);
  }, [direction]);

  const allItems = [...tickerItems, ...tickerItems];

  return (
    <div className="h-full overflow-hidden">
      <div ref={scrollRef} className="flex flex-col gap-4">
        {allItems.map((item, i) => (
          <span
            key={i}
            className="flex flex-col items-center gap-0.5 font-mono text-[9px] leading-tight"
          >
            <span className="text-muted/50">{item.label}</span>
            <span className="text-foreground/60">{item.value}</span>
            <span className={item.positive ? "text-primary/60" : "text-red-400/60"}>
              {item.delta}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

const STRIP = 24; // px — height of horizontal strips, width of vertical strips

export function TickerBorder({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top ticker strip */}
      <div
        className="fixed left-0 right-0 top-0 z-[60] flex items-center border-b border-border/50 bg-black"
        style={{ height: STRIP }}
      >
        <HorizontalStrip direction={1} />
      </div>

      {/* Left ticker strip */}
      <div
        className="fixed left-0 top-0 bottom-0 z-[60] border-r border-border/50 bg-black"
        style={{ width: STRIP, paddingTop: STRIP, paddingBottom: STRIP }}
      >
        <VerticalStrip direction={1} />
      </div>

      {/* Right ticker strip */}
      <div
        className="fixed right-0 top-0 bottom-0 z-[60] border-l border-border/50 bg-black"
        style={{ width: STRIP, paddingTop: STRIP, paddingBottom: STRIP }}
      >
        <VerticalStrip direction={-1} />
      </div>

      {/* Main content offset by all strips */}
      <div style={{ paddingTop: STRIP, paddingBottom: STRIP, paddingLeft: STRIP, paddingRight: STRIP }}>
        {children}
      </div>

      {/* Bottom ticker strip */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[60] flex items-center border-t border-border/50 bg-black"
        style={{ height: STRIP }}
      >
        <HorizontalStrip direction={-1} />
      </div>
    </div>
  );
}
