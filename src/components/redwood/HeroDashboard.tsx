import { motion } from "motion/react";
import { ShieldCheck, TrendingUp, CheckCircle2, Banknote } from "lucide-react";
const bars = [38, 52, 44, 68, 60, 82, 74, 91];

export function HeroDashboard() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      {/* Glow */}
      <div className="absolute -inset-10 bg-redwood/30 blur-3xl rounded-full opacity-60 -z-10" />

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong rounded-3xl p-5 sm:p-6 shadow-elevated"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-redwood-gradient grid place-items-center">
              <Banknote className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-[13px] font-semibold text-foreground">
                Funding Overview
              </div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Q4 · Live preview
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-emerald font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
            Connected
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-white/[0.03] border border-white/5 p-3">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Capital Deployed
            </div>
            <div className="mt-1 font-display text-2xl font-semibold text-foreground tabular-nums">
              $284.6M
            </div>
            <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald">
              <TrendingUp className="w-3 h-3" /> +18.4% QoQ
            </div>
          </div>
          <div className="rounded-xl bg-white/[0.03] border border-white/5 p-3">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Approval Rate
            </div>
            <div className="mt-1 font-display text-2xl font-semibold text-gold tabular-nums">
              92.3%
            </div>
            <div className="mt-1 text-[11px] text-muted-foreground">
              Underwriting · 48 hrs
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="mt-4 rounded-xl bg-white/[0.02] border border-white/5 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-[11px] font-medium text-foreground/90">
              Origination Volume
            </div>
            <div className="text-[10px] text-muted-foreground">8 weeks</div>
          </div>
          <div className="flex items-end gap-2 h-24">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{
                  delay: 0.4 + i * 0.07,
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="flex-1 rounded-t-md bg-gradient-to-t from-redwood to-gold/80"
              />
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/5 px-3 py-2.5">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald" />
            <span className="text-[12px] text-foreground/90">
              Application{" "}
              <span className="text-muted-foreground">#RWC-48201</span> approved
            </span>
          </div>
          <span className="text-[11px] font-semibold text-emerald">$1.25M</span>
        </div>
      </motion.div>

      {/* Floating verification card */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="absolute -right-3 sm:-right-8 -bottom-6 glass-strong rounded-2xl p-3.5 shadow-elevated animate-float w-[200px]"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald/15 grid place-items-center animate-pulse-ring">
            <ShieldCheck className="w-4 h-4 text-emerald" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-foreground">
              Identity Verified
            </div>
            <div className="text-[10px] text-muted-foreground">
              Bank-level KYC
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating doc card */}
      {/* <motion.div
        initial={{ opacity: 0, x: -30, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="absolute -left-3 sm:-left-10 top-10 glass-strong rounded-2xl p-3.5 shadow-elevated animate-float w-[195px]"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-trust/15 grid place-items-center">
            <FileCheck className="w-4 h-4 text-trust" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-foreground">Docs Underwritten</div>
            <div className="text-[10px] text-muted-foreground">AI-assisted review</div>
          </div>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "84%" }}
            transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-trust to-emerald"
          />
        </div>
      </motion.div> */}
    </div>
  );
}
