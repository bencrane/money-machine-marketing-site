export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-tight flex h-14 items-center justify-between">
        <a className="inline-flex items-center gap-2 font-mono text-sm font-semibold" href="/">
          <span className="text-primary">▸</span>
          <span>MONEY MACHINE</span>
        </a>
        <nav className="hidden items-center gap-1 font-mono text-xs text-muted md:flex">
          <a className="inline-flex h-11 items-center px-3 transition-colors hover:text-foreground" href="#pipeline">
            Pipeline
          </a>
          <a className="inline-flex h-11 items-center px-3 transition-colors hover:text-foreground" href="#audience">
            Audience
          </a>
          <a className="inline-flex h-11 items-center px-3 transition-colors hover:text-foreground" href="#attribution">
            Attribution
          </a>
          <a className="inline-flex h-11 items-center px-3 transition-colors hover:text-foreground" href="#machine">
            The Machine
          </a>
          <a
            className="ml-2 inline-flex h-11 items-center rounded-md border border-primary/40 bg-primary/10 px-4 text-primary transition-colors hover:bg-primary/20"
            href="#machine"
          >
            Start here
          </a>
        </nav>
      </div>
    </header>
  );
}
