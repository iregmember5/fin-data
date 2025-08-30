import { useState } from "react";
import {
  Rocket,
  Sparkles,
  Shield,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Github,
  Moon,
  Sun,
} from "lucide-react";

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center justify-center rounded-xl border p-2 transition-colors ${
        isDark
          ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
          : "border-black/10 bg-black/5 text-black hover:bg-black/10"
      }`}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};

// Small reusable chip
const Chip = ({ children, isDark }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur ${
      isDark
        ? "border-white/20 bg-white/5 text-white/80"
        : "border-gray-200 bg-gray-50 text-gray-700"
    }`}
  >
    <Sparkles className="h-3 w-3" />
    {children}
  </span>
);

// Feature card
const Feature = ({ icon: Icon, title, desc, isDark }) => (
  <div
    className={`group relative overflow-hidden rounded-2xl border p-6 shadow-lg transition-transform hover:-translate-y-1 ${
      isDark
        ? "border-white/10 bg-gradient-to-b from-white/5 to-white/0"
        : "border-gray-200 bg-gradient-to-b from-gray-50 to-white/90"
    }`}
  >
    <div
      className={`absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl ${
        isDark
          ? "bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-cyan-400/20"
          : "bg-gradient-to-tr from-indigo-500/10 via-fuchsia-500/10 to-cyan-400/10"
      }`}
    />
    <div
      className={`relative flex h-12 w-12 items-center justify-center rounded-xl ${
        isDark ? "bg-white/10" : "bg-gray-100"
      }`}
    >
      <Icon className={`h-6 w-6 ${isDark ? "text-white" : "text-gray-700"}`} />
    </div>
    <h3
      className={`mt-4 text-lg font-semibold ${
        isDark ? "text-white" : "text-gray-900"
      }`}
    >
      {title}
    </h3>
    <p
      className={`mt-2 text-sm leading-6 ${
        isDark ? "text-white/70" : "text-gray-600"
      }`}
    >
      {desc}
    </p>
  </div>
);

// Testimonial card
const Testimonial = ({ quote, author, role, isDark }) => (
  <div
    className={`rounded-2xl border p-6 ${
      isDark
        ? "border-white/10 bg-white/5 text-white/80"
        : "border-gray-200 bg-gray-50 text-gray-700"
    }`}
  >
    <p className="text-sm leading-7">"{quote}"</p>
    <div className="mt-4 flex items-center gap-3">
      <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400" />
      <div>
        <p
          className={`text-sm font-semibold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {author}
        </p>
        <p className={`text-xs ${isDark ? "text-white/60" : "text-gray-500"}`}>
          {role}
        </p>
      </div>
    </div>
  </div>
);

// Pricing card
const Plan = ({ name, price, highlights, featured, isDark }) => (
  <div
    className={`relative rounded-2xl border p-6 shadow-lg ${
      featured
        ? isDark
          ? "border-indigo-400/40 bg-indigo-500/10"
          : "border-indigo-300 bg-indigo-50"
        : isDark
        ? "border-white/10 bg-white/5"
        : "border-gray-200 bg-gray-50"
    } ${isDark ? "text-white" : "text-gray-900"}`}
  >
    {featured && (
      <span className="absolute -top-3 left-4 rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white">
        Popular
      </span>
    )}
    <h4 className="text-lg font-semibold">{name}</h4>
    <div className="mt-2 flex items-end gap-1">
      <span className="text-3xl font-bold">{price}</span>
      <span
        className={`mb-1 text-xs ${isDark ? "text-white/60" : "text-gray-500"}`}
      >
        /month
      </span>
    </div>
    <ul
      className={`mt-4 space-y-2 text-sm ${
        isDark ? "text-white/80" : "text-gray-700"
      }`}
    >
      {highlights.map((h) => (
        <li key={h} className="flex items-start gap-2">
          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{h}</span>
        </li>
      ))}
    </ul>
    <button
      className={`mt-6 w-full rounded-xl px-4 py-2 text-sm font-semibold transition ${
        featured
          ? "bg-white text-indigo-700 hover:bg-white/90"
          : isDark
          ? "bg-white/10 text-white hover:bg-white/15"
          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
      }`}
    >
      Get started
    </button>
  </div>
);

export default function App() {
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 selection:bg-fuchsia-500/40 selection:text-white ${
        isDark ? "bg-[#0b0b12] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute left-1/2 top-[-10%] h-[60vh] w-[60vw] -translate-x-1/2 rounded-full ${
            isDark
              ? "bg-[radial-gradient(ellipse_at_center,rgba(138,43,226,0.25),rgba(0,0,0,0))]"
              : "bg-[radial-gradient(ellipse_at_center,rgba(138,43,226,0.15),rgba(255,255,255,0))]"
          }`}
        />
        <div
          className={`absolute left-[-10%] top-1/3 h-64 w-64 rounded-full blur-3xl ${
            isDark ? "bg-cyan-500/10" : "bg-cyan-500/5"
          }`}
        />
        <div
          className={`absolute right-[-10%] top-1/4 h-64 w-64 rounded-full blur-3xl ${
            isDark ? "bg-fuchsia-500/10" : "bg-fuchsia-500/5"
          }`}
        />
      </div>

      {/* Nav */}
      <header className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">NovaUI</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {[
            ["Features", "#features"],
            ["Pricing", "#pricing"],
            ["Reviews", "#reviews"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`text-sm transition-colors ${
                isDark
                  ? "text-white/70 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <a
            href="https://github.com"
            className={`hidden items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold transition-colors hover:bg-opacity-80 md:flex ${
              isDark
                ? "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                : "border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Github className="h-4 w-4" />
            Star on GitHub
          </a>
          <button className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-indigo-700 hover:bg-white/90 transition-colors">
            Download
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-6">
        <div className="mx-auto max-w-3xl text-center">
          <Chip isDark={isDark}>New: v2 with shortcuts</Chip>
          <h1
            className={`mt-4 bg-gradient-to-br bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl ${
              isDark
                ? "from-white via-white to-white/70"
                : "from-gray-900 via-gray-800 to-gray-600"
            }`}
          >
            Build elegant apps, ridiculously fast
          </h1>
          <p
            className={`mx-auto mt-4 max-w-2xl text-base leading-7 md:text-lg ${
              isDark ? "text-white/70" : "text-gray-600"
            }`}
          >
            A sleek React + Tailwind starter packed with modern components and
            tasteful motion. Ship your next idea in hours, not days.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(99,102,241,0.7)] transition hover:brightness-110">
              <Zap className="h-4 w-4" />
              Create project
            </button>
            <a
              href="#features"
              className={`rounded-xl border px-5 py-3 text-sm font-semibold backdrop-blur transition-colors ${
                isDark
                  ? "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                  : "border-gray-200 bg-white/80 text-gray-700 hover:bg-white"
              }`}
            >
              Explore features
            </a>
          </div>
        </div>

        {/* Showpiece card */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div
            className={`relative col-span-2 overflow-hidden rounded-2xl border p-6 ${
              isDark
                ? "border-white/10 bg-gradient-to-br from-white/10 to-white/0"
                : "border-gray-200 bg-gradient-to-br from-gray-50 to-white/90"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3
                  className={`text-xl font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Live Preview
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    isDark ? "text-white/70" : "text-gray-600"
                  }`}
                >
                  A minimal dashboard example with cards & actions.
                </p>
              </div>
              <Chip isDark={isDark}>Ready-made</Chip>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {["Revenue", "Users", "Uptime"].map((k, i) => (
                <div
                  key={k}
                  className={`rounded-xl border p-4 ${
                    isDark
                      ? "border-white/10 bg-white/5"
                      : "border-gray-200 bg-white/60"
                  }`}
                >
                  <p
                    className={`text-xs ${
                      isDark ? "text-white/60" : "text-gray-500"
                    }`}
                  >
                    {k}
                  </p>
                  <p className="mt-2 text-2xl font-bold">
                    {["$24,310", "8,921", "99.98%"][i]}
                  </p>
                  <p
                    className={`mt-1 text-xs ${
                      isDark ? "text-white/60" : "text-gray-500"
                    }`}
                  >
                    {["+12% MoM", "+4% WoW", "+0.01% 24h"][i]}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {"Create Edit Delete Share".split(" ").map((a) => (
                <span
                  key={a}
                  className={`rounded-full border px-3 py-1 text-xs ${
                    isDark
                      ? "border-white/10 bg-white/5 text-white/70"
                      : "border-gray-200 bg-gray-100 text-gray-600"
                  }`}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div
            className={`rounded-2xl border p-6 ${
              isDark
                ? "border-white/10 bg-gradient-to-b from-white/5 to-white/0"
                : "border-gray-200 bg-gradient-to-b from-white to-gray-50/50"
            }`}
          >
            <h3
              className={`text-xl font-semibold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Why NovaUI?
            </h3>
            <ul
              className={`mt-3 space-y-3 text-sm ${
                isDark ? "text-white/80" : "text-gray-700"
              }`}
            >
              <li className="flex items-start gap-3">
                <Shield className="mt-0.5 h-5 w-5" /> Battle‑tested patterns
              </li>
              <li className="flex items-start gap-3">
                <Zap className="mt-0.5 h-5 w-5" /> Fast to customize
              </li>
              <li className="flex items-start gap-3">
                <Star className="mt-0.5 h-5 w-5" /> Beautiful by default
              </li>
            </ul>
            <button
              className={`mt-6 w-full rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                isDark
                  ? "bg-white/10 text-white hover:bg-white/15"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
            >
              See components
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Carefully crafted features
          </h2>
          <p className={`mt-3 ${isDark ? "text-white/70" : "text-gray-600"}`}>
            Practical, delightful building blocks that cut boilerplate and keep
            focus on UX.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Feature
            icon={Rocket}
            title="Next‑gen scaffolding"
            desc="Opinionated structure, examples, and utilities so you can ship faster."
            isDark={isDark}
          />
          <Feature
            icon={Shield}
            title="Accessible & robust"
            desc="Semantic markup and keyboard‑friendly interactions out of the box."
            isDark={isDark}
          />
          <Feature
            icon={Zap}
            title="Performance first"
            desc="Tiny, optimized components that load fast and feel snappy."
            isDark={isDark}
          />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Simple pricing
          </h2>
          <p className={`mt-3 ${isDark ? "text-white/70" : "text-gray-600"}`}>
            Start free, upgrade when you grow. No hidden fees.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Plan
            name="Starter"
            price="$0"
            highlights={[
              "Basic components",
              "MIT license",
              "Community support",
            ]}
            isDark={isDark}
          />
          <Plan
            name="Pro"
            price="$12"
            highlights={["All components", "Code examples", "Email support"]}
            featured
            isDark={isDark}
          />
          <Plan
            name="Teams"
            price="$29"
            highlights={[
              "Seat management",
              "Design tokens",
              "Priority support",
            ]}
            isDark={isDark}
          />
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Loved by builders
          </h2>
          <p className={`mt-3 ${isDark ? "text-white/70" : "text-gray-600"}`}>
            Here's what makers are saying about NovaUI.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Testimonial
            quote="The best starter I've used in years—clean, modern, and actually practical."
            author="Ayesha R."
            role="Frontend Engineer"
            isDark={isDark}
          />
          <Testimonial
            quote="Went from idea to polished demo in one evening. Absolute time‑saver."
            author="Usman K."
            role="Indie Hacker"
            isDark={isDark}
          />
          <Testimonial
            quote="My team loved the defaults. We kept 90% as‑is and shipped."
            author="Sara Q."
            role="Product Designer"
            isDark={isDark}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20">
        <div
          className={`overflow-hidden rounded-2xl border p-8 text-center ${
            isDark
              ? "border-white/10 bg-gradient-to-tr from-indigo-600/20 via-fuchsia-600/20 to-cyan-500/20"
              : "border-gray-200 bg-gradient-to-tr from-indigo-100/80 via-fuchsia-100/80 to-cyan-100/80"
          }`}
        >
          <h3 className="text-2xl font-bold md:text-3xl">
            Ready to build something beautiful?
          </h3>
          <p
            className={`mx-auto mt-2 max-w-2xl ${
              isDark ? "text-white/80" : "text-gray-700"
            }`}
          >
            Drop this{" "}
            <code
              className={`rounded px-1 py-0.5 ${
                isDark ? "bg-black/40" : "bg-gray-800/10"
              }`}
            >
              App.jsx
            </code>{" "}
            into your Vite + Tailwind project and you're off to the races.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 hover:bg-white/90 transition-colors">
              <ArrowRight className="h-4 w-4" />
              Get NovaUI
            </button>
            <a
              href="#"
              className={`rounded-xl border px-5 py-3 text-sm font-semibold transition-colors ${
                isDark
                  ? "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                  : "border-gray-200 bg-white/80 text-gray-700 hover:bg-white"
              }`}
            >
              Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mx-auto max-w-7xl px-6 pb-10">
        <div
          className={`flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm md:flex-row ${
            isDark
              ? "border-white/10 text-white/60"
              : "border-gray-200 text-gray-500"
          }`}
        >
          <p>© {new Date().getFullYear()} NovaUI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className={`transition-colors ${
                isDark ? "hover:text-white" : "hover:text-gray-900"
              }`}
            >
              Privacy
            </a>
            <a
              href="#"
              className={`transition-colors ${
                isDark ? "hover:text-white" : "hover:text-gray-900"
              }`}
            >
              Terms
            </a>
            <a
              href="#"
              className={`transition-colors ${
                isDark ? "hover:text-white" : "hover:text-gray-900"
              }`}
            >
              Status
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
