export function HeroBackground() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden bg-hero noise">
      <div className="absolute inset-0 grid-overlay" />
      {/* Redwood glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-redwood/25 blur-[140px]" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-burgundy/30 blur-[140px]" />
      <div className="absolute bottom-0 -left-40 w-[600px] h-[600px] rounded-full bg-trust/15 blur-[140px]" />
      {/* Top fade for navbar */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-navy-deep/80 to-transparent" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
