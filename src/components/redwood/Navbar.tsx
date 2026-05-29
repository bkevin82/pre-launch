import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { TreePine, Mail } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* <a href="#top" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-lg bg-redwood-gradient grid place-items-center shadow-elevated">
            <TreePine className="w-5 h-5 text-white" strokeWidth={2.2} />
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald border-2 border-background" />
          </div>
          <div className="leading-tight">
            <div className="text-[15px] font-semibold tracking-tight text-foreground">Redwood Capital</div>
            <div className="text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">Lending · USA</div>
          </div>
        </a> */}

        <a href="#top" className="flex items-center  group">
          <div className="relative">
            <img
              src="/logo.png"
              alt="Redwood Capital Logo"
              className="w-30 h-30 object-contain"
            />
          </div>

          <div className="leading-tight">
            <div className="text-[15px] font-semibold tracking-tight text-foreground">
              Redwood Capital
            </div>
            <div className="text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
              Lending · USA
            </div>
          </div>
        </a>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 glass rounded-full pl-3 pr-4 py-1.5">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-emerald animate-ping opacity-70" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald" />
            </span>
            <span className="text-[11px] font-medium tracking-wide text-foreground/90">
              Official Launch In Progress
            </span>
          </div>
          <a
            href="#notify"
            className="inline-flex items-center gap-2 rounded-full bg-white text-navy-deep px-4 py-2 text-[13px] font-semibold hover:bg-platinum transition-colors shadow-glass"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
