import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

function useCountdown(target: number) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

const pad = (n: number) => n.toString().padStart(2, "0");

export function Countdown() {
  const target = useMemo(() => {
    // Stable 5-day launch from first mount of the year (approximation)
    if (typeof window === "undefined") return Date.now() + 5 * 86400000;
    const key = "rwc_launch_target";
    const existing = localStorage.getItem(key);
    if (existing) return Number(existing);
    const t = Date.now() + 5 * 86400000;
    localStorage.setItem(key, String(t));
    return t;
  }, []);
  const { d, h, m, s } = useCountdown(target);
  const items = [
    { label: "Days", value: pad(d) },
    { label: "Hours", value: pad(h) },
    { label: "Minutes", value: pad(m) },
    { label: "Seconds", value: pad(s) },
  ];
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4">
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className="glass-strong rounded-2xl px-3 py-4 sm:py-5 text-center shadow-glass"
        >
          <div className="font-display text-3xl sm:text-5xl font-semibold tabular-nums tracking-tight text-foreground">
            {it.value}
          </div>
          <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {it.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
