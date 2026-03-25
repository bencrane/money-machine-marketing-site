import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

export function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
