import { Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-tight flex h-16 items-center justify-between">
        <a className="inline-flex items-center gap-2 font-semibold" href="/">
          <Sparkles className="h-5 w-5 text-primary" />
          <span>Money Machine</span>
        </a>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <a className="hover:text-foreground" href="#features">Features</a>
          <a className="hover:text-foreground" href="#testimonials">Testimonials</a>
          <Button size="default">Get Started</Button>
        </nav>
      </div>
    </header>
  );
}
