import { motion } from "framer-motion";
import {
  CheckCircle2, X, Zap, Shield, Server, HardDrive,
  Headphones, Globe, ArrowRight, Star, Mail, Cloud,
  Cpu, Database, Lock, RefreshCw, Package, LayoutGrid,
} from "lucide-react";

const BASE = "https://truehost.co.ke/cloud/aff.php?aff=2464";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for new websites & blogs",
    price: "2,500",
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
    cta: "Get Starter",
    ctaLink: `${BASE}`,
  },
  {
    name: "Business",
    tagline: "Ideal for growing businesses",
    price: "5,500",
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
    cta: "Get Business",
    ctaLink: `${BASE}/web-hosting/index`,
  },
  {
    name: "Enterprise",
    tagline: "For high-traffic & complex sites",
    price: "12,000",
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
    cta: "Get Enterprise",
    ctaLink: `${BASE}/web-hosting/index`,
  },
];

const hostingTypes = [
  {
    icon: <Globe size={28} />,
    label: "Linux Hosting",
    desc: "cPanel-based shared hosting, ideal for most websites. Affordable and reliable.",
    color: "from-blue-500 to-blue-600",
    link: `${BASE}/web-hosting/index`,
    badge: null,
  },
  {
    icon: <LayoutGrid size={28} />,
    label: "WordPress Hosting",
    desc: "Optimised servers pre-tuned for WordPress — faster load times, auto-updates.",
    color: "from-indigo-500 to-indigo-600",
    link: `${BASE}/optimized-wordpress-hosting`,
    badge: "Optimised",
  },
  {
    icon: <Cloud size={28} />,
    label: "Cloud Hosting",
    desc: "Scalable cloud infrastructure that grows with your traffic and business.",
    color: "from-cyan-500 to-cyan-600",
    link: `${BASE}/cloudhosting`,
    badge: null,
  },
  {
    icon: <Server size={28} />,
    label: "Linux KVM VPS",
    desc: "Dedicated virtual resources with full root access. For power users and developers.",
    color: "from-emerald-500 to-emerald-600",
    link: `${BASE}/virtualserverlinux-hosting`,
    badge: null,
  },
  {
    icon: <Cpu size={28} />,
    label: "Dedicated Servers",
    desc: "Maximum power and isolation. Your own physical server, fully managed.",
    color: "from-orange-500 to-orange-600",
    link: `${BASE}/dedicated-servers`,
    badge: "High Performance",
  },
  {
    icon: <Database size={28} />,
    label: "Reseller Hosting",
    desc: "Start your own hosting business. White-label cPanel accounts with WHMCS.",
    color: "from-purple-500 to-purple-600",
    link: `${BASE}/reseller-hosting`,
    badge: null,
  },
];

const emailOptions = [
  {
    icon: <Mail size={24} />,
    label: "Business Email",
    desc: "Professional @yourdomain email accounts — look credible from day one.",
    link: `${BASE}/business-email`,
    tag: "From KSh 600/yr",
  },
  {
    icon: <Zap size={24} />,
    label: "Titan Business Email",
    desc: "Next-gen business email with smart inbox, calendar, and collaboration tools.",
    link: `${BASE}/titan-business-email-hosting`,
    tag: "Powered by Titan",
  },
  {
    icon: <Server size={24} />,
    label: "Enterprise Email Hosting",
    desc: "High-volume, high-security email infrastructure for large organisations.",
    link: `${BASE}/web-hosting/enterprise-email-hosting`,
    tag: "Enterprise Grade",
  },
];

const addons = [
  {
    icon: <Shield size={22} />,
    label: "SiteLock Security",
    desc: "Daily malware scanning, threat removal, and a trust seal for your site.",
    link: `${BASE}/sitelock`,
    color: "text-red-500 bg-red-50",
  },
  {
    icon: <RefreshCw size={22} />,
    label: "CodeGuard Backups",
    desc: "Automatic daily website backups with one-click restore — peace of mind guaranteed.",
    link: `${BASE}/codeguard`,
    color: "text-blue-500 bg-blue-50",
  },
  {
    icon: <Lock size={22} />,
    label: "Comodo SSL Certificate",
    desc: "Premium SSL certificates from Comodo — the most trusted name in web security.",
    link: `${BASE}/digital-certificate`,
    color: "text-emerald-500 bg-emerald-50",
  },
  {
    icon: <Package size={22} />,
    label: "Combo Offers",
    desc: "Bundle hosting + domain + email for maximum savings in one great package.",
    link: `${BASE}/combo-offers`,
    color: "text-amber-500 bg-amber-50",
  },
];

const features = [
  { icon: <Zap size={26} />, title: "Lightning Fast Servers", desc: "SSD-powered servers optimised for East African latency. Your site loads fast — everywhere.", color: "text-amber-500 bg-amber-50" },
  { icon: <Shield size={26} />, title: "Free SSL for Every Site", desc: "All plans come with a free SSL certificate. Your visitors see the padlock, you build trust instantly.", color: "text-emerald-500 bg-emerald-50" },
  { icon: <HardDrive size={26} />, title: "Daily Backups", desc: "Business & Enterprise plans include automatic daily backups. Your data is always safe.", color: "text-blue-500 bg-blue-50" },
  { icon: <Headphones size={26} />, title: "Local Kenyan Support", desc: "Our support team is based in Nairobi. WhatsApp us on +254703823398 — real help, not a bot.", color: "text-purple-500 bg-purple-50" },
  { icon: <Server size={26} />, title: "cPanel Control Panel", desc: "Industry-standard cPanel on all plans. Manage files, email, databases and more with ease.", color: "text-pink-500 bg-pink-50" },
  { icon: <Globe size={26} />, title: "99.9% Uptime Guarantee", desc: "We guarantee your site stays online. Our infrastructure never sleeps so your business doesn't have to.", color: "text-indigo-500 bg-indigo-50" },
];

export default function Hosting() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-24">

      {/* Hero Header */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 -left-10 w-64 h-64 rounded-full bg-secondary/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
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

      {/* Linux Hosting Plans */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-black text-secondary tracking-tight mb-2">LINUX SHARED HOSTING</h2>
            <p className="text-gray-500">Perfect for websites, blogs, and online stores</p>
          </div>
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
                  <h3 className={`text-xl font-black uppercase tracking-wide mb-1 ${plan.highlight ? "text-white" : "text-secondary"}`}>{plan.name}</h3>
                  <p className={`text-sm mb-6 ${plan.highlight ? "text-gray-300" : "text-gray-500"}`}>{plan.tagline}</p>
                  <div className="flex items-end gap-1">
                    <span className={`text-sm font-bold ${plan.highlight ? "text-gray-300" : "text-gray-500"}`}>KSh</span>
                    <span className={`text-4xl md:text-5xl font-black tracking-tight ${plan.highlight ? "text-white" : "text-secondary"}`}>{plan.price}</span>
                    <span className={`text-sm pb-1 ${plan.highlight ? "text-gray-300" : "text-gray-400"}`}>/yr</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-10 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature.label} className="flex items-center gap-3">
                      {feature.included
                        ? <CheckCircle2 size={16} className={plan.highlight ? "text-primary shrink-0" : "text-emerald-500 shrink-0"} />
                        : <X size={16} className={plan.highlight ? "text-gray-500 shrink-0" : "text-gray-300 shrink-0"} />
                      }
                      <span className={`text-sm ${feature.included ? (plan.highlight ? "text-gray-200" : "text-gray-700") : (plan.highlight ? "text-gray-500 line-through" : "text-gray-300 line-through")}`}>
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`button-hosting-${plan.name.toLowerCase()}`}
                  className={`block text-center py-3.5 px-6 rounded-lg font-bold uppercase tracking-wide text-sm transition-all hover:-translate-y-0.5 ${
                    plan.highlight
                      ? "bg-primary text-white hover:bg-amber-600 shadow-lg shadow-primary/30"
                      : "bg-secondary text-white hover:bg-primary"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">
            Need a custom plan?{" "}
            <a href="https://wa.me/+254703823398" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">
              Chat with us on WhatsApp
            </a>
          </p>
        </div>
      </section>

      {/* All Hosting Types */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-secondary/5 text-secondary text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">All Hosting Solutions</span>
            <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight mb-4">
              FIND YOUR PERFECT <br /><span className="text-primary">HOSTING SOLUTION</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">From shared hosting to bare-metal dedicated servers — we have the right infrastructure for every size of business.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hostingTypes.map((h, i) => (
              <motion.a
                key={h.label}
                href={h.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 bg-white"
              >
                {h.badge && (
                  <span className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                    {h.badge}
                  </span>
                )}
                <div className={`p-6 bg-gradient-to-br ${h.color} text-white`}>
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    {h.icon}
                  </div>
                  <h3 className="text-xl font-black tracking-tight">{h.label}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{h.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                    View Plans <ArrowRight size={14} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Email Hosting */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-primary/10 text-primary text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Email Hosting</span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary tracking-tight mb-3">PROFESSIONAL EMAIL FOR YOUR BRAND</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Stop using Gmail. Get a professional @yourdomain.co.ke address that commands respect.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {emailOptions.map((e, i) => (
              <motion.a
                key={e.label}
                href={e.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  {e.icon}
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full self-start mb-4">{e.tag}</span>
                <h3 className="text-lg font-bold text-secondary mb-2">{e.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{e.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={14} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons & Security */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-secondary/5 text-secondary text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Add-ons</span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary tracking-tight mb-3">PROTECT & SUPERCHARGE YOUR SITE</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Add these powerful tools to any hosting plan for complete peace of mind and peak performance.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {addons.map((a, i) => (
              <motion.a
                key={a.label}
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${a.color} mb-4 group-hover:scale-110 transition-transform`}>
                  {a.icon}
                </div>
                <h3 className="font-bold text-secondary mb-2">{a.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{a.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:gap-2.5 transition-all">
                  Get Add-on <ArrowRight size={12} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28 bg-gray-50 border-t border-gray-100">
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
                className="p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
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

      {/* Help Banner */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                Not sure which plan?<br />
                <span className="text-primary">We'll help you choose.</span>
              </h2>
              <p className="text-gray-300 max-w-lg leading-relaxed">
                Our team is available on WhatsApp and phone to walk you through the right hosting plan for your site, budget, and expected traffic.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/+254703823398"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-hosting-whatsapp"
                className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-[#1EBE5C] transition-all hover:-translate-y-0.5"
              >
                Chat on WhatsApp
              </a>
              <a
                href={`${BASE}/web-hosting/index`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-hosting-all-plans"
                className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-white/20 transition-all"
              >
                All Hosting Plans
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
