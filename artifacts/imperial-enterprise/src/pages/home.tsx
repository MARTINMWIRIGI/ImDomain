import { SEOHead, SEO_CONFIG } from "@/components/SEOHead";
import { Hero } from "@/components/Hero";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Target, TrendingUp, AlertCircle, 
  Zap, BarChart3, MapPin, Users, Briefcase, Shield, Layers, Mail
} from "lucide-react";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Imperial Enterprise",
    "url": "https://imperialenterprise.co.ke",
    "logo": "https://imperialenterprise.co.ke/logo.png",
    "description": "Market entry consulting and digital growth services for SMEs and startups in Kenya and East Africa",
    "telephone": "+254703823398",
    "email": "hello@imperialenterprise.co.ke",
    "areaServed": ["KE", "EA"],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KE",
      "addressLocality": "Nairobi"
    },
    "sameAs": [
      "https://twitter.com/imperialent",
      "https://linkedin.com/company/imperial-enterprise"
    ]
  };

  return (
    <>
      <SEOHead {...SEO_CONFIG.home} schema={organizationSchema} />
      <div className="overflow-hidden bg-white">
        
        {/* HERO SECTION */}
        <Hero
          title="Scale Your Business in East Africa. Fast."
          subtitle="Digital growth systems + market intelligence + real buyer connections. We help Kenyan businesses dominate their markets."
          backgroundImage="/hero-home.jpg"
          primaryCTA={{
            text: "Book a Strategy Call",
            href: "/contact",
          }}
          secondaryCTA={{
            text: "View Services",
            href: "/services",
          }}
          overlayOpacity="light"
        />

        {/* PROBLEM AWARENESS SECTION */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-secondary text-center mb-16">
                Most businesses fail in new markets for 3 simple reasons
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  "They enter without real market data",
                  "They don't know who the actual buyers are",
                  "They misprice their products for the local market"
                ].map((reason, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
                  >
                    <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
                    <p className="text-lg font-bold text-secondary">{reason}</p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center bg-primary/5 p-8 rounded-xl border border-primary/20">
                <p className="text-xl font-bold text-secondary">
                  We solve this before you invest heavily.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DUAL POSITIONING SECTION */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black text-secondary text-center mb-16">
              Two Core Growth Paths
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Digital Growth Services */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-10 rounded-2xl border border-blue-200"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-secondary mb-6">Digital Growth Services</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Website development",
                    "Branding & online presence",
                    "Digital marketing & visibility",
                    "Content strategy"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 size={18} className="text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 italic font-medium">
                  For businesses building their online foundation
                </p>
              </motion.div>

              {/* Market Entry Consulting */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-10 rounded-2xl border border-emerald-200"
              >
                <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-black text-secondary mb-6">Market Entry Consulting</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Market validation & research",
                    "Competitor & pricing analysis",
                    "Buyer & distributor mapping",
                    "Expansion strategy into East Africa"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 italic font-medium">
                  For companies entering or scaling in new markets
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3-PHASE FRAMEWORK SECTION */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-secondary to-secondary/95 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-16">
              Our Market Entry Framework
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  phase: "Phase 1",
                  title: "Market Intelligence & Validation",
                  desc: "We analyze demand, pricing, competitors, and real buyers before investment."
                },
                {
                  phase: "Phase 2",
                  title: "Distributor & Buyer Acquisition",
                  desc: "We connect you with verified distributors, wholesalers, and B2B buyers."
                },
                {
                  phase: "Phase 3",
                  title: "Growth Systems",
                  desc: "We build systems for lead generation, positioning, and long-term expansion."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:border-white/40 transition-all"
                >
                  <div className="inline-block bg-primary/30 text-primary font-black text-sm px-4 py-1.5 rounded-full mb-4">
                    {item.phase}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-lg shadow-primary/30">
                Start with Phase 1 Strategy Call
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* HOW WE WORK SECTION */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black text-secondary text-center mb-16">
              Simple, Structured, Results-Driven Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { num: "01", title: "Strategy Call", desc: "Understand your goals" },
                { num: "02", title: "Market Assessment", desc: "Data & insights" },
                { num: "03", title: "Execution Plan", desc: "Clear roadmap" },
                { num: "04", title: "Expansion Support", desc: "Optional growth phase" }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all"
                >
                  <div className="text-4xl font-black text-primary mb-4">{step.num}</div>
                  <h3 className="text-lg font-bold text-secondary mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUE/OUTCOMES SECTION */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black text-secondary text-center mb-16">
              What You Gain
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {[
                  "Clear market entry strategy",
                  "Reduced investment risk",
                  "Real buyer and distributor access",
                  "Accurate pricing strategy",
                  "Structured expansion roadmap"
                ].map((outcome, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 bg-white p-6 rounded-lg border border-gray-200 hover:border-primary transition-all hover:shadow-md"
                  >
                    <CheckCircle2 size={24} className="text-primary shrink-0" />
                    <p className="text-lg font-semibold text-secondary">{outcome}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE SERVE SECTION */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black text-secondary text-center mb-16">
              We work with companies that are:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {[
                { icon: <MapPin size={28} />, text: "Expanding into Kenya or East Africa" },
                { icon: <Briefcase size={28} />, text: "Importing/exporting physical products" },
                { icon: <Users size={28} />, text: "Seeking distributors or B2B buyers" },
                { icon: <TrendingUp size={28} />, text: "Scaling into new emerging markets" },
                { icon: <BarChart3 size={28} />, text: "Looking for data-driven expansion decisions" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center bg-gradient-to-b from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 font-medium text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY IMPERIAL ENTERPRISE SECTION */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-blue-50 via-white to-emerald-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-secondary mb-6">
                Why businesses choose us
              </h2>
              <p className="text-xl text-gray-600 mb-12 font-semibold">
                We are not just a digital agency or consultants.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  { title: "Market Intelligence", desc: "Real data on East African market dynamics, buyer behavior, and expansion opportunities." },
                  { title: "Digital Growth Systems", desc: "Proven frameworks for building visibility, generating leads, and establishing online presence." },
                  { title: "Real-world Business Connections", desc: "Verified networks of distributors, suppliers, and B2B buyers across the region." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
                  >
                    <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center bg-gradient-to-r from-primary/10 to-emerald-500/10 p-10 rounded-xl border border-primary/20">
                <p className="text-2xl font-black text-secondary">
                  Turning uncertainty into structured expansion decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HIGH CONVERSION CTA SECTION */}
        <section className="py-20 md:py-28 bg-secondary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
                  Start with a Market Entry Strategy Call
                </h2>
                <p className="text-lg text-gray-200 mb-12 leading-relaxed">
                  If you are planning to enter or scale in East African markets, the first step is clarity. We assess your product, market opportunity, and expansion path.
                </p>
                
                <Link href="/contact" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-5 rounded-lg font-bold uppercase tracking-wide text-lg hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-lg shadow-primary/30 group">
                  Book a Strategy Call
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER SECTION */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/5 blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-soft-lg p-8 md:p-12 border border-gray-100">
                {/* Newsletter Info */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-secondary mb-4">
                    Stay <span className="text-primary">Ahead</span> of Market Trends
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    Get weekly insights on market entry strategies, digital growth, and business intelligence straight to your inbox. Join 500+ Kenyan entrepreneurs building their empires.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Market entry strategies & insights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Digital growth case studies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Exclusive opportunities & tools</span>
                    </li>
                  </ul>
                </div>

                {/* Newsletter CTA */}
                <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                  <Mail size={48} className="text-primary mb-4" />
                  <h4 className="text-2xl font-bold text-secondary mb-2 text-center">Join the Movement</h4>
                  <p className="text-gray-600 text-center mb-6 text-sm">Get exclusive market entry insights delivered weekly</p>
                  <a
                    href="https://newsletter.imperialenterprise.co.ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-blue-700 transition-all hover:shadow-lg inline-flex items-center justify-center gap-2 group"
                  >
                    <Mail size={18} />
                    Subscribe Now
                  </a>
                  <p className="text-xs text-gray-400 mt-4 text-center">No spam. Unsubscribe anytime.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}
