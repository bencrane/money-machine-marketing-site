export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-tight">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-sm font-semibold text-foreground">
              <span className="text-primary">▸</span> MONEY MACHINE
            </span>
            <p className="mt-1 max-w-sm font-mono text-xs text-muted">
              Performance marketing infrastructure for technology companies.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <nav className="flex gap-6 font-mono text-xs text-muted">
              <a href="#pipeline" className="transition-colors hover:text-foreground">Pipeline</a>
              <a href="#audience" className="transition-colors hover:text-foreground">Audience</a>
              <a href="#attribution" className="transition-colors hover:text-foreground">Attribution</a>
              <a href="#machine" className="transition-colors hover:text-foreground">Start here</a>
            </nav>
            <p className="font-mono text-xs text-muted/40">
              © {new Date().getFullYear()} Money Machine Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
