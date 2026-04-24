import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  CheckCircle2,
  X,
  Zap,
  Shield,
  Server,
  HardDrive,
  Headphones,
  Globe,
  ArrowRight,
  Star,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for new websites & blogs",
    price: "2,500",
    period: "/ year",
    highlight: false,
    badge: null,
    features: [
      { label: "1 Website", included: true },
      { label: "5 GB SSD Storage", included: true },
      { label: "Free SSL Certificate", included: true },
      { label: "10 Email Accounts", included: true },
      { label: "99.9% Uptime Guarantee", included: true },
      { label: "cPanel Control Panel", included: true },
      { label: "Daily Backups", included: false },
      { label: "Free Domain Name", included: false },
      { label: "Priority Support", included: false },
      { label: "Unlimited Bandwidth", included: false },
    ],
    cta: "Get Started",
    ctaLink: "/contact",
  },
  {
    name: "Business",
    tagline: "Ideal for growing businesses",
    price: "5,500",
    period: "/ year",
    highlight: true,
    badge: "Most Popular",
    features: [
      { label: "5 Websites", included: true },
      { label: "20 GB SSD Storage", included: true },
      { label: "Free SSL Certificate", included: true },
      { label: "Unlimited Email Accounts", included: true },
      { label: "99.9% Uptime Guarantee", included: true },
      { label: "cPanel Control Panel", included: true },
      { label: "Daily Backups", included: true },
      { label: "Free Domain Name", included: false },
      { label: "Priority Support", included: false },
      { label: "Unlimited Bandwidth", included: true },
    ],
    cta: "Get Started",
    ctaLink: "/contact",
  },
  {
    name: "Enterprise",
    tagline: "For high-traffic & complex sites",
    price: "12,000",
    period: "/ year",
    highlight: false,
    badge: null,
    features: [
      { label: "Unlimited Websites", included: true },
      { label: "50 GB SSD Storage", included: true },
      { label: "Free SSL Certificate", included: true },
      { label: "Unlimited Email Accounts", included: true },
      { label: "99.9% Uptime Guarantee", included: true },
      { label: "cPanel Control Panel", included: true },
      { label: "Daily Backups", included: true },
      { label: "Free Domain Name", included: true },
      { label: "Priority Support", included: true },
      { label: "Unlimited Bandwidth", included: true },
    ],
    cta: "Get Started",
    ctaLink: "/contact",
  },
];

const features = [
  {
    icon: <Zap size={28} />,
    title: "Lightning Fast Servers",
    desc: "SSD-powered servers with data centers optimized for East African latency. Your site loads fast — everywhere.",
    color: "text-amber-500 bg-amber-50",
  },
  {
    icon: <Shield size={28} />,
    title: "Free SSL for Every Site",
    desc: "All plans come with a free Let's Encrypt SSL certificate — your visitors see the padlock, you build trust instantly.",
    color: "text-emerald-500 bg-emerald-50",
  },
  {
    icon: <HardDrive size={28} />,
    title: "Daily Backups",
    desc: "Business & Enterprise plans include automatic daily backups. Your data is safe, always.",
    color: "text-blue-500 bg-blue-50",
  },
  {
    icon: <Headphones size={28} />,
    title: "Local Kenyan Support",
    desc: "Our support team is based in Nairobi. Call or WhatsApp us on +254703823398 — real help, not a bot.",
    color: "text-purple-500 bg-purple-50",
  },
  {
    icon: <Server size={28} />,
    title: "cPanel Control Panel",
    desc: "Industry-standard cPanel access on all plans. Manage your files, email, databases, and more with ease.",
    color: "text-pink-500 bg-pink-50",
  },
  {
    icon: <Globe size={28} />,
    title: "99.9% Uptime Guarantee",
    desc: "We guarantee your site stays online. Our infrastructure is built for reliability so your business never sleeps.",
    color: "text-indigo-500 bg-indigo-50",
  },
];

export default function Hosting() {
  const [billing] = useState<"yearly">("yearly");

  return (
    <div className="min-h-screen bg-white pt-28 pb-24">

      {/* Header */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 -left-10 w-64 h-64 rounded-full bg-secondary/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block bg-primary/10 text-primary text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Web Hosting Kenya
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-secondary tracking-tight mb-6">
              Fast, Reliable Hosting <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-600">Built for Kenyan Business</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4 leading-relaxed">
              Get your business online in minutes. cPanel access, free SSL, daily backups — everything you need to dominate the digital space.
            </p>
            <p className="text-sm text-gray-400 font-medium">All prices in Kenyan Shillings (KSh) · Billed annually</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-secondary text-white shadow-2xl shadow-secondary/20 scale-105 border-2 border-primary"
                    : "bg-white shadow-sm border border-gray-100"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap shadow-lg">
                      <Star size={12} fill="white" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-xl font-black uppercase tracking-wide mb-1 ${plan.highlight ? "text-white" : "text-secondary"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.highlight ? "text-gray-300" : "text-gray-500"}`}>
                    {plan.tagline}
                  </p>
                  <div className="flex items-end gap-1">
                    <span className={`text-sm font-bold ${plan.highlight ? "text-gray-300" : "text-gray-500"}`}>KSh</span>
                    <span className={`text-4xl md:text-5xl font-black tracking-tight ${plan.highlight ? "text-white" : "text-secondary"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm pb-1 ${plan.highlight ? "text-gray-300" : "text-gray-400"}`}>{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-10 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature.label} className="flex items-center gap-3">
                      {feature.included ? (
                        <CheckCircle2 size={16} className={plan.highlight ? "text-primary shrink-0" : "text-emerald-500 shrink-0"} />
                      ) : (
                        <X size={16} className={plan.highlight ? "text-gray-500 shrink-0" : "text-gray-300 shrink-0"} />
                      )}
                      <span className={`text-sm ${
                        feature.included
                          ? plan.highlight ? "text-gray-200" : "text-gray-700"
                          : plan.highlight ? "text-gray-500 line-through" : "text-gray-300 line-through"
                      }`}>
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaLink}
                  data-testid={`button-hosting-${plan.name.toLowerCase()}`}
                  className={`block text-center py-3.5 px-6 rounded-lg font-bold uppercase tracking-wide text-sm transition-all hover:-translate-y-0.5 ${
                    plan.highlight
                      ? "bg-primary text-white hover:bg-amber-600 shadow-lg shadow-primary/30"
                      : "bg-secondary text-white hover:bg-secondary/90"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            All plans include free migration assistance. Need a custom plan?{" "}
            <Link href="/contact" className="text-primary font-bold hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight mb-4">
              EVERYTHING YOU NEED <br />
              <span className="text-primary">TO STAY ONLINE</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Every hosting plan comes packed with features that put you ahead — not behind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${feat.color} mb-6 group-hover:scale-110 transition-transform`}>
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">{feat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Comparison banner */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                Not sure which plan?<br />
                <span className="text-primary">We'll help you choose.</span>
              </h2>
              <p className="text-gray-300 max-w-lg leading-relaxed">
                Our team is available on WhatsApp and call to walk you through the right hosting plan for your site, budget, and expected traffic.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+254703823398"
                data-testid="button-hosting-call"
                className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-amber-600 transition-all hover:-translate-y-0.5"
              >
                Call Us Now
              </a>
              <Link
                href="/domains"
                data-testid="link-hosting-domains"
                className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-white/20 transition-all"
              >
                Check Domains
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
