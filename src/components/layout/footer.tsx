export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-tight flex flex-col items-center justify-between gap-3 text-sm text-muted md:flex-row">
        <p>© {new Date().getFullYear()} Money Machine. All rights reserved.</p>
        <p>Built with React, Tailwind v4, and shadcn/ui</p>
      </div>
    </footer>
  );
}
