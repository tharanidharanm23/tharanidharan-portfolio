export function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/5">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Tharanidharan M. Crafted with passion.</p>
        <p className="gradient-text font-medium">Designed & built from scratch.</p>
      </div>
    </footer>
  );
}
