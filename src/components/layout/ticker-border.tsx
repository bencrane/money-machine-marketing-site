import { useEffect, useRef } from "react";
import { tickerItems } from "@/data/ticker";

function TickerStrip({ direction = 1 }: { direction?: 1 | -1 }) {
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

const STRIP_HEIGHT = "h-6"; // 24px — used for both strips and content offset

export function TickerBorder({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top ticker strip */}
      <div className={`fixed left-0 right-0 top-0 z-[60] flex items-center border-b border-border/50 bg-black ${STRIP_HEIGHT}`}>
        <TickerStrip direction={1} />
      </div>

      {/* Main content offset by strip heights */}
      <div className="pt-6 pb-6">
        {children}
      </div>

      {/* Bottom ticker strip */}
      <div className={`fixed bottom-0 left-0 right-0 z-[60] flex items-center border-t border-border/50 bg-black ${STRIP_HEIGHT}`}>
        <TickerStrip direction={-1} />
      </div>
    </div>
  );
}
