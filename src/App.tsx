import { motion } from "motion/react";
import {
  ShieldCheck,
  Lock,
  Building2,
  BadgeCheck,
  Network,
  Fingerprint,
  ArrowRight,
  Briefcase,
  TrendingUp,
  Truck,
  Wallet,
  LineChart,
  HeadphonesIcon,
  Globe2,
  Cpu,
  ChevronRight,
  TreePine,
} from "lucide-react";
// import { Navbar } from "@/components/redwood/Navbar";
// import { Countdown } from "@/components/redwood/Countdown";
// import { HeroDashboard } from "@/components/redwood/HeroDashboard";
// import { NotifyForm } from "@/components/redwood/NotifyForm";
// import { HeroBackground } from "@/components/redwood/Background";

import { Navbar } from "./components/redwood/Navbar";
import { Countdown } from "./components/redwood/Countdown";
import { HeroDashboard } from "./components/redwood/HeroDashboard";
import { NotifyForm } from "./components/redwood/NotifyForm";
import { HeroBackground } from "./components/redwood/Background";

const trustItems = [
  { icon: ShieldCheck, label: "Bank-Level Encryption" },
  { icon: Lock, label: "Secure Infrastructure" },
  { icon: BadgeCheck, label: "Enterprise Standards" },
  { icon: Building2, label: "Responsible Lending" },
  { icon: Network, label: "Nationwide Coverage" },
  { icon: Fingerprint, label: "Verified Identity" },
];

const solutions = [
  {
    icon: Briefcase,
    title: "Business Funding Solutions",
    desc: "Flexible capital structured around your operating cycle, revenue, and growth roadmap.",
  },
  {
    icon: Building2,
    title: "Commercial Financing",
    desc: "Institutional-grade term facilities for established commercial operators nationwide.",
  },
  {
    icon: Truck,
    title: "Equipment Funding",
    desc: "Acquire essential equipment with structured financing optimized for asset lifecycles.",
  },
  {
    icon: Wallet,
    title: "Working Capital",
    desc: "Short-cycle liquidity to support payroll, inventory, and operational continuity.",
  },
  {
    icon: TrendingUp,
    title: "Revenue-Based Financing",
    desc: "Non-dilutive capital scaled to monthly performance with transparent terms.",
  },
  {
    icon: HeadphonesIcon,
    title: "Executive Support",
    desc: "Dedicated funding advisors delivering white-glove service at every stage.",
  },
  {
    icon: Globe2,
    title: "Secure Online Applications",
    desc: "End-to-end encrypted application workflow with real-time underwriting status.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Verification",
    desc: "Automated KYB, document review, and risk modeling deliver decisions in hours, not weeks.",
  },
];

function LandingPage() {
  return (
    <main id="top" className="relative min-h-screen overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <HeroBackground />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-[11px] tracking-wider uppercase text-foreground/80"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Platform launch · 5 days
                <ChevronRight className="w-3 h-3 text-muted-foreground" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="mt-6 font-display text-4xl sm:text-5xl lg:text-[64px] leading-[1.02] font-semibold tracking-tight text-foreground"
              >
                Redwood Capital Lending Is{" "}
                <span className="text-gold">Preparing for Official Launch</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-6 max-w-xl text-base lg:text-lg text-muted-foreground leading-relaxed"
              >
                We're finalizing a modern American business financing platform
                designed to deliver secure, transparent, and flexible capital
                solutions for businesses across the United States.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-lg text-[13px] text-foreground/85"
              >
                {[
                  "Enterprise-Level Security",
                  "Secure Business Verification",
                  "Nationwide Lending Infrastructure",
                  "Responsible Financing Standards",
                  "Institutional-Grade Digital Platform",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <BadgeCheck className="w-4 h-4 text-emerald shrink-0" />
                    {t}
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <a
                  href="#notify"
                  className="group inline-flex items-center gap-2 rounded-xl bg-redwood-gradient px-5 py-3 text-sm font-semibold text-white shadow-elevated hover:brightness-110 transition-all"
                >
                  Get Launch Notification
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#notify"
                  className="inline-flex items-center gap-2 rounded-xl glass-strong px-5 py-3 text-sm font-semibold text-foreground hover:bg-white/[0.06] transition-colors"
                >
                  Contact Our Team
                </a>
              </motion.div>

              <p className="mt-6 text-[12px] text-muted-foreground max-w-md">
                Platform launch scheduled in 5 days. Our infrastructure and
                security systems are currently undergoing final deployment and
                optimization.
              </p>
            </div>

            <div className="relative lg:pl-6">
              <HeroDashboard />
            </div>
          </div>

          {/* COUNTDOWN */}
          <div className="mt-20 lg:mt-28 max-w-3xl mx-auto text-center">
            <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Official Launch In
            </div>
            <div className="mt-5">
              <Countdown />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="relative border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustItems.map((it, i) => (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg glass grid place-items-center shrink-0">
                  <it.icon className="w-4.5 h-4.5 text-gold" />
                </div>
                <div className="text-[12.5px] font-medium text-foreground/90 leading-tight">
                  {it.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.25em] text-gold/90">
              What's coming
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              A complete capital platform, engineered for American businesses.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Eight integrated financing products and operational tools — all
              delivered through one secure, institution-grade digital
              experience.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 4) * 0.06, duration: 0.55 }}
                className="group relative glass rounded-2xl p-5 hover:bg-white/[0.05] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-redwood-gradient grid place-items-center shadow-glass">
                  <s.icon className="w-4.5 h-4.5 text-white" />
                </div>
                <div className="mt-4 text-[15px] font-semibold text-foreground">
                  {s.title}
                </div>
                <p className="mt-1.5 text-[13px] text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-4 h-px bg-gradient-to-r from-white/10 to-transparent" />
                <div className="mt-3 text-[11px] uppercase tracking-wider text-muted-foreground/70 flex items-center justify-between">
                  <span>Launching soon</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ANALYTICS PREVIEW */}
      <section className="relative py-24 lg:py-32 border-t border-white/5">
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 80% 30%, oklch(0.38 0.12 25 / 0.25), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-gold/90">
              Executive analytics
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Capital intelligence built for the C-suite.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Real-time visibility into funding pipelines, cash flow
              projections, and approval timelines — delivered through an
              executive-grade reporting layer.
            </p>
            <div className="mt-7 grid sm:grid-cols-2 gap-4 max-w-lg">
              {[
                { k: "$2.4B", v: "Capital under management readiness" },
                { k: "48h", v: "Median underwriting decision" },
                { k: "92%", v: "Application approval rate" },
                { k: "50", v: "U.S. states in coverage map" },
              ].map((s) => (
                <div key={s.v} className="glass rounded-xl p-4">
                  <div className="font-display text-2xl font-semibold text-gold">
                    {s.k}
                  </div>
                  <div className="mt-1 text-[12px] text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl p-6 shadow-elevated"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-trust/15 grid place-items-center">
                  <LineChart className="w-4 h-4 text-trust" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold">
                    Origination Performance
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Trailing 12 months
                  </div>
                </div>
              </div>
              <div className="text-[11px] text-emerald font-medium">
                +24.6% YoY
              </div>
            </div>

            {/* Line chart */}
            <div className="mt-5 h-48 relative">
              <svg viewBox="0 0 400 160" className="w-full h-full">
                <defs>
                  <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor="oklch(0.78 0.13 85)"
                      stopOpacity="0.5"
                    />
                    <stop
                      offset="100%"
                      stopColor="oklch(0.78 0.13 85)"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
                {[0, 40, 80, 120, 160].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    x2="400"
                    y1={y}
                    y2={y}
                    stroke="white"
                    strokeOpacity="0.05"
                  />
                ))}
                <motion.path
                  d="M0,130 C40,120 70,110 100,95 C140,75 170,90 210,70 C250,50 290,55 320,35 C350,20 380,28 400,18"
                  fill="none"
                  stroke="oklch(0.78 0.13 85)"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                />
                <path
                  d="M0,130 C40,120 70,110 100,95 C140,75 170,90 210,70 C250,50 290,55 320,35 C350,20 380,28 400,18 L400,160 L0,160 Z"
                  fill="url(#lg)"
                />
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-3">
              {[
                { l: "Pipeline", v: "$184M" },
                { l: "Funded", v: "$112M" },
                { l: "In Review", v: "$42M" },
              ].map((c) => (
                <div
                  key={c.l}
                  className="rounded-lg bg-white/[0.03] border border-white/5 p-3"
                >
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {c.l}
                  </div>
                  <div className="mt-1 font-display text-lg font-semibold tabular-nums">
                    {c.v}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* NOTIFY */}
      <section
        id="notify"
        className="relative py-24 lg:py-32 border-t border-white/5"
      >
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, oklch(0.38 0.12 25 / 0.25), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <div className="text-[11px] uppercase tracking-[0.25em] text-gold/90">
            Priority access
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Be first to access Redwood Capital Lending.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join our priority launch list and receive updates when our
            nationwide business financing platform officially becomes available.
          </p>
          <div className="mt-8">
            <NotifyForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/5 bg-navy-deep/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
          <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-redwood-gradient grid place-items-center">
                  <TreePine className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[15px] font-semibold tracking-tight">
                    Redwood Capital Lending
                  </div>
                  <div className="text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
                    RedwoodCapitalLending.com
                  </div>
                </div>
              </div>
              <p className="mt-5 text-[12.5px] text-muted-foreground leading-relaxed max-w-md">
                Redwood Capital Lending is preparing to launch its nationwide
                business financing platform. Lending solutions and funding
                services will become available following official platform
                deployment and operational activation.
              </p>
            </div>

            {[
              {
                h: "Company",
                l: ["About", "Leadership", "Careers", "Press"],
              },
              {
                h: "Platform",
                l: [
                  "Funding Solutions",
                  "Working Capital",
                  "Equipment Funding",
                  "Enterprise",
                ],
              },
              {
                h: "Legal",
                l: [
                  "Privacy Policy",
                  "Terms & Conditions",
                  "Responsible Lending",
                  "Compliance",
                ],
              },
            ].map((col) => (
              <div key={col.h}>
                <div className="text-[11px] uppercase tracking-[0.22em] text-foreground/70">
                  {col.h}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {col.l.map((i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="text-[11.5px] text-muted-foreground">
              © {new Date().getFullYear()} Redwood Capital Lending. All rights
              reserved. ·{" "}
              <a
                href="mailto:contact@redwoodcapitallending.com"
                className="hover:text-foreground"
              >
                contact@redwoodcapitallending.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald" />
              Secured by enterprise-grade encryption
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default function App() {
  return <LandingPage />;
}
