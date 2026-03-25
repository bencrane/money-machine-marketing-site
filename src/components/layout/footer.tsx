export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-tight">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <span className="font-mono text-sm font-semibold text-foreground">
              <span className="text-primary">▸</span> MONEY MACHINE
            </span>
            <p className="mt-1 font-mono text-xs text-muted">
              Performance marketing infrastructure for technology companies.
            </p>
          </div>
          <p className="font-mono text-xs text-muted/50">
            © {new Date().getFullYear()} Money Machine Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
