import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { TickerBorder } from '@/components/layout/ticker-border';

export function Layout() {
  return (
    <TickerBorder>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </TickerBorder>
  );
}
