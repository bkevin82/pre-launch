import { useState } from "react";
import { motion } from "motion/react";
import { Lock, ArrowRight, CheckCircle2 } from "lucide-react";

export function NotifyForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) || trimmed.length > 255) {
      setError("Please enter a valid business email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl mx-auto">
      <div className="glass-strong rounded-2xl p-2 flex flex-col sm:flex-row gap-2 shadow-elevated">
        <div className="flex-1 flex items-center gap-2 px-3">
          <Lock className="w-4 h-4 text-muted-foreground shrink-0" />
          <input
            type="email"
            required
            maxLength={255}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@yourcompany.com"
            aria-label="Business email"
            className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground/70 text-foreground"
          />
        </div>
        <motion.button
          whileTap={{ scale: 0.97 }}
          disabled={submitted}
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-redwood-gradient px-5 py-3 text-sm font-semibold text-white shadow-elevated hover:brightness-110 transition-all disabled:opacity-70"
        >
          {submitted ? (
            <>
              <CheckCircle2 className="w-4 h-4" /> You're on the list
            </>
          ) : (
            <>
              Notify Me
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </motion.button>
      </div>
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
      <p className="mt-3 text-[11px] text-muted-foreground text-center">
        Your information is protected using enterprise-grade encryption and secure infrastructure
        systems.
      </p>
    </form>
  );
}
