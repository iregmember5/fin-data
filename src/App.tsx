// //............new..........

// import { useState } from "react";
// import {
//   Rocket,
//   Sparkles,
//   Shield,
//   Zap,
//   Star,
//   CheckCircle,
//   ArrowRight,
//   Github,
//   Moon,
//   Sun,
// } from "lucide-react";

// const ThemeToggle = ({ isDark, onToggle }) => {
//   return (
//     <button
//       onClick={onToggle}
//       className={`flex items-center justify-center rounded-xl border p-2 transition-colors ${
//         isDark
//           ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
//           : "border-black/10 bg-black/5 text-black hover:bg-black/10"
//       }`}
//     >
//       {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
//     </button>
//   );
// };

// const Chip = ({ children, isDark }) => (
//   <span
//     className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur ${
//       isDark
//         ? "border-white/20 bg-white/5 text-white/80"
//         : "border-gray-200 bg-gray-50 text-gray-700"
//     }`}
//   >
//     <Sparkles className="h-3 w-3" />
//     {children}
//   </span>
// );

// const Feature = ({ icon: Icon, title, desc, isDark }) => (
//   <div
//     className={`group relative overflow-hidden rounded-2xl border p-6 shadow-lg transition-transform hover:-translate-y-1 ${
//       isDark
//         ? "border-white/10 bg-gradient-to-b from-white/5 to-white/0"
//         : "border-gray-200 bg-gradient-to-b from-gray-50 to-white/90"
//     }`}
//   >
//     <div
//       className={`absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl ${
//         isDark
//           ? "bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-cyan-400/20"
//           : "bg-gradient-to-tr from-indigo-500/10 via-fuchsia-500/10 to-cyan-400/10"
//       }`}
//     />
//     <div
//       className={`relative flex h-12 w-12 items-center justify-center rounded-xl ${
//         isDark ? "bg-white/10" : "bg-gray-100"
//       }`}
//     >
//       <Icon className={`h-6 w-6 ${isDark ? "text-white" : "text-gray-700"}`} />
//     </div>
//     <h3
//       className={`mt-4 text-lg font-semibold ${
//         isDark ? "text-white" : "text-gray-900"
//       }`}
//     >
//       {title}
//     </h3>
//     <p
//       className={`mt-2 text-sm leading-6 ${
//         isDark ? "text-white/70" : "text-gray-600"
//       }`}
//     >
//       {desc}
//     </p>
//   </div>
// );

// const Testimonial = ({ quote, author, role, isDark }) => (
//   <div
//     className={`rounded-2xl border p-6 ${
//       isDark
//         ? "border-white/10 bg-white/5 text-white/80"
//         : "border-gray-200 bg-gray-50 text-gray-700"
//     }`}
//   >
//     <p className="text-sm leading-7">"{quote}"</p>
//     <div className="mt-4 flex items-center gap-3">
//       <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400" />
//       <div>
//         <p
//           className={`text-sm font-semibold ${
//             isDark ? "text-white" : "text-gray-900"
//           }`}
//         >
//           {author}
//         </p>
//         <p className={`text-xs ${isDark ? "text-white/60" : "text-gray-500"}`}>
//           {role}
//         </p>
//       </div>
//     </div>
//   </div>
// );

// const Plan = ({ name, price, highlights, featured, isDark }) => (
//   <div
//     className={`relative rounded-2xl border p-6 shadow-lg ${
//       featured
//         ? isDark
//           ? "border-indigo-400/40 bg-indigo-500/10"
//           : "border-indigo-300 bg-indigo-50"
//         : isDark
//         ? "border-white/10 bg-white/5"
//         : "border-gray-200 bg-gray-50"
//     } ${isDark ? "text-white" : "text-gray-900"}`}
//   >
//     {featured && (
//       <span className="absolute -top-3 left-4 rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white">
//         Popular
//       </span>
//     )}
//     <h4 className="text-lg font-semibold">{name}</h4>
//     <div className="mt-2 flex items-end gap-1">
//       <span className="text-3xl font-bold">{price}</span>
//       <span
//         className={`mb-1 text-xs ${isDark ? "text-white/60" : "text-gray-500"}`}
//       >
//         /month
//       </span>
//     </div>
//     <ul
//       className={`mt-4 space-y-2 text-sm ${
//         isDark ? "text-white/80" : "text-gray-700"
//       }`}
//     >
//       {highlights.map((h) => (
//         <li key={h} className="flex items-start gap-2">
//           <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" />
//           <span>{h}</span>
//         </li>
//       ))}
//     </ul>
//     <button
//       className={`mt-6 w-full rounded-xl px-4 py-2 text-sm font-semibold transition ${
//         featured
//           ? "bg-white text-indigo-700 hover:bg-white/90"
//           : isDark
//           ? "bg-white/10 text-white hover:bg-white/15"
//           : "bg-gray-100 text-gray-900 hover:bg-gray-200"
//       }`}
//     >
//       Get started
//     </button>
//   </div>
// );

// export default function App() {
//   const [isDark, setIsDark] = useState(true);

//   const toggleTheme = () => {
//     setIsDark(!isDark);
//   };

//   return (
//     <div
//       className={`min-h-screen transition-colors duration-300 selection:bg-fuchsia-500/40 selection:text-white ${
//         isDark ? "bg-[#0b0b12] text-white" : "bg-gray-100 text-gray-900"
//       }`}
//     >
//       {/* Background decorations */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div
//           className={`absolute left-1/2 top-[-10%] h-[60vh] w-[60vw] -translate-x-1/2 rounded-full ${
//             isDark
//               ? "bg-[radial-gradient(ellipse_at_center,rgba(138,43,226,0.25),rgba(0,0,0,0))]"
//               : "bg-[radial-gradient(ellipse_at_center,rgba(138,43,226,0.15),rgba(255,255,255,0))]"
//           }`}
//         />
//         <div
//           className={`absolute left-[-10%] top-1/3 h-64 w-64 rounded-full blur-3xl ${
//             isDark ? "bg-cyan-500/10" : "bg-cyan-500/5"
//           }`}
//         />
//         <div
//           className={`absolute right-[-10%] top-1/4 h-64 w-64 rounded-full blur-3xl ${
//             isDark ? "bg-fuchsia-500/10" : "bg-fuchsia-500/5"
//           }`}
//         />
//       </div>

//       {/* Nav */}
//       <header className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
//         <div className="flex items-center gap-3">
//           <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400">
//             <Rocket className="h-5 w-5 text-white" />
//           </div>
//           <span className="text-lg font-bold tracking-tight">MarketPro</span>
//         </div>
//         <nav className="hidden items-center gap-6 md:flex">
//           {[
//             ["Services", "#features"],
//             ["Pricing", "#pricing"],
//             ["Reviews", "#reviews"],
//           ].map(([label, href]) => (
//             <a
//               key={label}
//               href={href}
//               className={`text-sm transition-colors ${
//                 isDark
//                   ? "text-white/70 hover:text-white"
//                   : "text-gray-600 hover:text-gray-900"
//               }`}
//             >
//               {label}
//             </a>
//           ))}
//         </nav>
//         <div className="flex items-center gap-3">
//           <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
//           <a
//             href="https://github.com"
//             className={`hidden items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold transition-colors hover:bg-opacity-80 md:flex ${
//               isDark
//                 ? "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
//                 : "border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             <Github className="h-4 w-4" />
//             Star on GitHub
//           </a>
//           <button className="rounded-xl bg-white px-3 py-2 text-xs font-semibold text-indigo-700 hover:bg-white/90 transition-colors">
//             Get Quote
//           </button>
//         </div>
//       </header>

//       {/* Hero */}
//       <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-6">
//         <div className="mx-auto max-w-3xl text-center">
//           <Chip isDark={isDark}>New: AI-powered campaigns</Chip>
//           <h1
//             className={`mt-4 bg-gradient-to-br bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl ${
//               isDark
//                 ? "from-white via-white to-white/70"
//                 : "from-gray-900 via-gray-800 to-gray-600"
//             }`}
//           >
//             Scale your brand with smart marketing
//           </h1>
//           <p
//             className={`mx-auto mt-4 max-w-2xl text-base leading-7 md:text-lg ${
//               isDark ? "text-white/70" : "text-gray-600"
//             }`}
//           >
//             From strategy to execution, we help businesses grow with data-driven
//             marketing campaigns that convert. Double your ROI in 90 days or
//             less.
//           </p>
//           <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
//             <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(99,102,241,0.7)] transition hover:brightness-110">
//               <Zap className="h-4 w-4" />
//               Start free audit
//             </button>
//             <a
//               href="#features"
//               className={`rounded-xl border px-5 py-3 text-sm font-semibold backdrop-blur transition-colors ${
//                 isDark
//                   ? "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
//                   : "border-gray-200 bg-white/80 text-gray-700 hover:bg-white"
//               }`}
//             >
//               View services
//             </a>
//           </div>
//         </div>

//         {/* Showpiece card */}
//         <div className="mt-12 grid gap-6 md:grid-cols-3">
//           <div
//             className={`relative col-span-2 overflow-hidden rounded-2xl border p-6 ${
//               isDark
//                 ? "border-white/10 bg-gradient-to-br from-white/10 to-white/0"
//                 : "border-gray-200 bg-gradient-to-br from-gray-50 to-white/90"
//             }`}
//           >
//             <div className="flex items-center justify-between">
//               <div>
//                 <h3
//                   className={`text-xl font-semibold ${
//                     isDark ? "text-white" : "text-gray-900"
//                   }`}
//                 >
//                   Campaign Dashboard
//                 </h3>
//                 <p
//                   className={`mt-1 text-sm ${
//                     isDark ? "text-white/70" : "text-gray-600"
//                   }`}
//                 >
//                   Track performance across all your marketing channels.
//                 </p>
//               </div>
//               <Chip isDark={isDark}>Real-time</Chip>
//             </div>
//             <div className="mt-4 grid gap-4 md:grid-cols-3">
//               {["Ad Spend", "Conversions", "ROI"].map((k, i) => (
//                 <div
//                   key={k}
//                   className={`rounded-xl border p-4 ${
//                     isDark
//                       ? "border-white/10 bg-white/5"
//                       : "border-gray-200 bg-white/60"
//                   }`}
//                 >
//                   <p
//                     className={`text-xs ${
//                       isDark ? "text-white/60" : "text-gray-500"
//                     }`}
//                   >
//                     {k}
//                   </p>
//                   <p className="mt-2 text-2xl font-bold">
//                     {["$18,420", "2,847", "340%"][i]}
//                   </p>
//                   <p
//                     className={`mt-1 text-xs ${
//                       isDark ? "text-white/60" : "text-gray-500"
//                     }`}
//                   >
//                     {["+23% MoM", "+18% WoW", "+15% QoQ"][i]}
//                   </p>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-4 flex flex-wrap gap-3">
//               {["SEO", "SEM", "Social", "Email"].map((a) => (
//                 <span
//                   key={a}
//                   className={`rounded-full border px-3 py-1 text-xs ${
//                     isDark
//                       ? "border-white/10 bg-white/5 text-white/70"
//                       : "border-gray-200 bg-gray-100 text-gray-600"
//                   }`}
//                 >
//                   {a}
//                 </span>
//               ))}
//             </div>
//           </div>
//           <div
//             className={`rounded-2xl border p-6 ${
//               isDark
//                 ? "border-white/10 bg-gradient-to-b from-white/5 to-white/0"
//                 : "border-gray-200 bg-gradient-to-b from-white to-gray-50/50"
//             }`}
//           >
//             <h3
//               className={`text-xl font-semibold ${
//                 isDark ? "text-white" : "text-gray-900"
//               }`}
//             >
//               Why MarketPro?
//             </h3>
//             <ul
//               className={`mt-3 space-y-3 text-sm ${
//                 isDark ? "text-white/80" : "text-gray-700"
//               }`}
//             >
//               <li className="flex items-start gap-3">
//                 <Shield className="mt-0.5 h-5 w-5" /> Proven strategies
//               </li>
//               <li className="flex items-start gap-3">
//                 <Zap className="mt-0.5 h-5 w-5" /> Fast implementation
//               </li>
//               <li className="flex items-start gap-3">
//                 <Star className="mt-0.5 h-5 w-5" /> Measurable results
//               </li>
//             </ul>
//             <button
//               className={`mt-6 w-full rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
//                 isDark
//                   ? "bg-white/10 text-white hover:bg-white/15"
//                   : "bg-gray-100 text-gray-900 hover:bg-gray-200"
//               }`}
//             >
//               See case studies
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section id="features" className="relative mx-auto max-w-7xl px-6 py-16">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
//             Full-service marketing solutions
//           </h2>
//           <p className={`mt-3 ${isDark ? "text-white/70" : "text-gray-600"}`}>
//             Everything you need to grow your business online, from strategy to
//             execution.
//           </p>
//         </div>
//         <div className="mt-10 grid gap-6 md:grid-cols-3">
//           <Feature
//             icon={Rocket}
//             title="Digital Strategy"
//             desc="Complete marketing audits and custom growth strategies tailored to your business goals."
//             isDark={isDark}
//           />
//           <Feature
//             icon={Shield}
//             title="Paid Advertising"
//             desc="Google Ads, Facebook, Instagram, and LinkedIn campaigns that drive qualified leads."
//             isDark={isDark}
//           />
//           <Feature
//             icon={Zap}
//             title="Content & SEO"
//             desc="High-quality content creation and SEO optimization to boost organic visibility."
//             isDark={isDark}
//           />
//         </div>
//       </section>

//       {/* Pricing */}
//       <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-16">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
//             Simple pricing
//           </h2>
//           <p className={`mt-3 ${isDark ? "text-white/70" : "text-gray-600"}`}>
//             Start with our audit, scale when you're ready. No hidden fees.
//           </p>
//         </div>
//         <div className="mt-10 grid gap-6 md:grid-cols-3">
//           <Plan
//             name="Starter"
//             price="$999"
//             highlights={[
//               "Monthly SEO audit",
//               "Social media setup",
//               "Email support",
//             ]}
//             isDark={isDark}
//           />
//           <Plan
//             name="Growth"
//             price="$2499"
//             highlights={[
//               "Full campaign management",
//               "Monthly strategy calls",
//               "Priority support",
//             ]}
//             featured
//             isDark={isDark}
//           />
//           <Plan
//             name="Enterprise"
//             price="$4999"
//             highlights={[
//               "Dedicated account manager",
//               "Custom integrations",
//               "24/7 phone support",
//             ]}
//             isDark={isDark}
//           />
//         </div>
//       </section>

//       {/* Reviews */}
//       <section id="reviews" className="relative mx-auto max-w-7xl px-6 py-16">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
//             What our clients say
//           </h2>
//           <p className={`mt-3 ${isDark ? "text-white/70" : "text-gray-600"}`}>
//             Real results from real businesses we've helped grow.
//           </p>
//         </div>
//         <div className="mt-10 grid gap-6 md:grid-cols-3">
//           <Testimonial
//             quote="Increased our leads by 300% in just 3 months. The ROI has been incredible."
//             author="Ahmed Hassan"
//             role="CEO, TechStart"
//             isDark={isDark}
//           />
//           <Testimonial
//             quote="Finally found a team that delivers on their promises. Sales are up 150%."
//             author="Fatima Khan"
//             role="Marketing Director"
//             isDark={isDark}
//           />
//           <Testimonial
//             quote="Best investment we've made for our business. Professional and results-driven."
//             author="Omar Sheikh"
//             role="Founder, RetailPlus"
//             isDark={isDark}
//           />
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="relative mx-auto max-w-7xl px-6 pb-20">
//         <div
//           className={`overflow-hidden rounded-2xl border p-8 text-center ${
//             isDark
//               ? "border-white/10 bg-gradient-to-tr from-indigo-600/20 via-fuchsia-600/20 to-cyan-500/20"
//               : "border-gray-200 bg-gradient-to-tr from-indigo-100/80 via-fuchsia-100/80 to-cyan-100/80"
//           }`}
//         >
//           <h3 className="text-2xl font-bold md:text-3xl">
//             Ready to grow your business?
//           </h3>
//           <p
//             className={`mx-auto mt-2 max-w-2xl ${
//               isDark ? "text-white/80" : "text-gray-700"
//             }`}
//           >
//             Get a free marketing audit and see how we can help you{" "}
//             <code
//               className={`rounded px-1 py-0.5 ${
//                 isDark ? "bg-black/40" : "bg-gray-800/10"
//               }`}
//             >
//               double your revenue
//             </code>{" "}
//             in the next 90 days.
//           </p>
//           <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
//             <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 hover:bg-white/90 transition-colors">
//               <ArrowRight className="h-4 w-4" />
//               Book Free Audit
//             </button>
//             <a
//               href="#"
//               className={`rounded-xl border px-5 py-3 text-sm font-semibold transition-colors ${
//                 isDark
//                   ? "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
//                   : "border-gray-200 bg-white/80 text-gray-700 hover:bg-white"
//               }`}
//             >
//               View case studies
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative mx-auto max-w-7xl px-6 pb-10">
//         <div
//           className={`flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm md:flex-row ${
//             isDark
//               ? "border-white/10 text-white/60"
//               : "border-gray-200 text-gray-500"
//           }`}
//         >
//           <p>© {new Date().getFullYear()} MarketPro. All rights reserved.</p>
//           <div className="flex items-center gap-6">
//             <a
//               href="#"
//               className={`transition-colors ${
//                 isDark ? "hover:text-white" : "hover:text-gray-900"
//               }`}
//             >
//               Privacy
//             </a>
//             <a
//               href="#"
//               className={`transition-colors ${
//                 isDark ? "hover:text-white" : "hover:text-gray-900"
//               }`}
//             >
//               Terms
//             </a>
//             <a
//               href="#"
//               className={`transition-colors ${
//                 isDark ? "hover:text-white" : "hover:text-gray-900"
//               }`}
//             >
//               Status
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
import React, { useState } from "react";
import Home from "./pages/Home";

const App: React.FC = () => {
  // Track theme state (light/dark)
  const [isDark, setIsDark] = useState(true);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 selection:bg-fuchsia-500/40 selection:text-white ${
        isDark ? "bg-[#0b0b12] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Radial Glow */}
        <div
          className={`absolute left-1/2 top-[-10%] h-[60vh] w-[60vw] -translate-x-1/2 rounded-full ${
            isDark
              ? "bg-[radial-gradient(ellipse_at_center,rgba(138,43,226,0.25),rgba(0,0,0,0))]"
              : "bg-[radial-gradient(ellipse_at_center,rgba(138,43,226,0.15),rgba(255,255,255,0))]"
          }`}
        />

        {/* Left Cyan Blur */}
        <div
          className={`absolute left-[-10%] top-1/3 h-64 w-64 rounded-full blur-3xl ${
            isDark ? "bg-cyan-500/10" : "bg-cyan-500/5"
          }`}
        />

        {/* Right Fuchsia Blur */}
        <div
          className={`absolute right-[-10%] top-1/4 h-64 w-64 rounded-full blur-3xl ${
            isDark ? "bg-fuchsia-500/10" : "bg-fuchsia-500/5"
          }`}
        />
      </div>

      {/* Navbar / Header */}
      {/* Add Navbar here if needed */}

      {/* Main Content */}
      <main>
        <Home />
      </main>
    </div>
  );
};

export default App;
