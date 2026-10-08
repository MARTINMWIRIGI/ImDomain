import { SEOHead, SEO_CONFIG } from "@/components/SEOHead";
import { Hero } from "@/components/Hero";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Zap, TrendingUp, AlertCircle, 
  BarChart3, Target, Users, Briefcase, Layers
} from "lucide-react";

export default function Services() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Imperial Enterprise",
    "url": "https://imperialenterprise.co.ke",
    "description": "Strategic growth & digital services for SMEs, startups & brands in Kenya",
    "areaServed": "KE",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Growth & Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Business Growth & Strategy Consulting",
          "description": "Market research, business positioning strategy, customer acquisition, pricing strategy, growth planning"
        },
        {
          "@type": "Offer",
          "name": "Startup & Scaling Systems",
          "description": "Go-to-market strategy, digital sales systems, customer journey mapping, growth funnel development"
        },
        {
          "@type": "Offer",
          "name": "Digital & Execution Services",
          "description": "Website design & development, branding, SEO, content creation, social media management"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead {...SEO_CONFIG.services} schema={servicesSchema} />
      <div className="overflow-hidden bg-white">
        
        {/* HERO SECTION */}
        <Hero
          title="Helping SMEs, Startups & Brands in Kenya Grow, Compete, and Thrive Online"
          subtitle="We help businesses build strong digital presence, attract customers, and scale strategically using digital systems, business strategy, and growth consulting."
          backgroundImage="/hero-services.jpg"
          primaryCTA={{
            text: "Book a Strategy Call",
            href: "/contact",
          }}
          overlayOpacity="medium"
        />

        {/* PROBLEM STATEMENT SECTION */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-secondary text-center mb-16">
                Most SMEs and startups in Kenya struggle with:
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  "Low online visibility",
                  "Weak or inconsistent branding",
                  "No clear customer acquisition strategy",
                  "Poor digital positioning",
                  "Strong competition without a growth plan"
                ].map((problem, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
                  >
                    <AlertCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                    <p className="text-lg font-bold text-secondary">{problem}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center"
              >
                <p className="text-lg font-bold text-secondary">
                  We help you solve this by building structured systems for growth, visibility, and market positioning.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STRATEGIC GROWTH SERVICES */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-secondary mb-4">
                Strategic Growth Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our premium consulting core services for SMEs and startups
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  number: "1",
                  title: "Business Growth & Strategy Consulting",
                  what: "Market research & competitor analysis, Business positioning strategy, Customer acquisition strategy, Pricing & offer structuring, Growth planning & business clarity",
                  outcome: "Clear direction, better decisions, and stronger market positioning",
                  color: "bg-emerald-50 border-emerald-200"
                },
                {
                  number: "2",
                  title: "Startup & Scaling Systems",
                  what: "Go-to-market strategy, Digital sales systems setup, Customer journey mapping, Growth funnel development, Brand positioning for competitive markets",
                  outcome: "Systems that attract, convert, and retain customers consistently",
                  color: "bg-amber-50 border-amber-200"
                },
                {
                  number: "3",
                  title: "Imperial Growth Framework",
                  what: "Market Understanding, Digital Foundation Setup, Growth Systems Development, Optimization & Scaling",
                  outcome: "Every engagement starts with a Strategy Call",
                  color: "bg-blue-50 border-blue-200"
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`${service.color} border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all`}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white font-black text-lg mb-6 mx-auto">
                    {service.number}
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-6 text-center">
                    {service.title}
                  </h3>
                  <div className="mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">What we do</h4>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {service.what}
                    </p>
                  </div>
                  <div className="border-t border-current border-opacity-20 pt-6">
                    <p className="text-sm font-semibold text-secondary">
                      👉 {service.outcome}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DIGITAL & EXECUTION SERVICES */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-secondary mb-4">
                Digital & Execution Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Build and improve your online presence with our proven digital services
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto bg-white rounded-2xl p-10 shadow-lg border border-gray-200"
            >
              <div className="flex items-start gap-6 mb-8">
                <Zap className="w-10 h-10 text-secondary shrink-0 mt-1" />
                <div>
                  <h3 className="text-3xl font-bold text-secondary mb-6">Digital Growth & Creative Services</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    We help businesses build and improve their online presence.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Services include:</h4>
                <ul className="space-y-3">
                  {[
                    "Website design & development",
                    "Branding & visual identity",
                    "Social media setup & management",
                    "SEO & Google visibility",
                    "Content creation & marketing"
                  ].map((service, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 size={18} className="text-primary shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-lg font-bold text-secondary">
                  👉 Outcome: A strong digital presence that builds trust and attracts customers
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHO WE WORK WITH */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-secondary mb-4">
                Who We Work With
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                "SMEs looking to grow online",
                "Startups launching or scaling in Kenya",
                "Entrepreneurs building personal or business brands",
                "Service-based businesses",
                "Product-based businesses entering digital markets"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-all"
                >
                  <Users className="w-6 h-6 text-secondary shrink-0" />
                  <p className="font-bold text-secondary">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-secondary mb-4">
                What You Get
              </h2>
              <p className="text-xl text-gray-600">When you work with us, you gain:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                "Strong digital visibility",
                "Clear business positioning",
                "Structured customer acquisition systems",
                "Competitive advantage in your market",
                "A clear roadmap for growth"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="font-bold text-secondary text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY IMPERIAL ENTERPRISE */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-secondary text-center mb-8">
                Why Imperial Enterprise
              </h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-10 mb-10"
              >
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We are not just a digital agency.
                </p>
                <p className="text-2xl font-bold text-secondary mb-10">
                  We are a growth and strategy partner for modern businesses.
                </p>

                <h3 className="text-lg font-bold text-secondary mb-6">We combine:</h3>
                <ul className="space-y-4 mb-10">
                  {[
                    "Business strategy",
                    "Digital systems",
                    "Market understanding",
                    "Growth execution"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg text-gray-700 font-semibold">
                      <Layers className="w-5 h-5 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-blue-300 pt-8 space-y-4">
                  <p className="text-lg font-bold text-secondary">We help you:</p>
                  <div className="flex flex-col gap-3">
                    <p className="flex items-center gap-3 text-gray-700 font-semibold">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                      Compete smarter
                    </p>
                    <p className="flex items-center gap-3 text-gray-700 font-semibold">
                      <Zap className="w-5 h-5 text-secondary" />
                      Grow faster
                    </p>
                    <p className="flex items-center gap-3 text-gray-700 font-semibold">
                      <BarChart3 className="w-5 h-5 text-secondary" />
                      Scale sustainably
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-secondary mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600">Our structured, results-driven process</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Strategy Call",
                  desc: "We understand your business, goals, and challenges."
                },
                {
                  step: "2",
                  title: "Market & Business Analysis",
                  desc: "We identify gaps, opportunities, and positioning strategy."
                },
                {
                  step: "3",
                  title: "Execution Plan",
                  desc: "We build a structured roadmap for growth."
                },
                {
                  step: "4",
                  title: "Implementation & Scaling",
                  desc: "We support execution and long-term growth systems."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 h-full">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white font-black text-lg mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-4">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 text-secondary text-2xl font-bold opacity-20">
                      →
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                Start with a Market Entry Strategy Call
              </h2>
              <p className="text-xl text-gray-100 mb-12 leading-relaxed">
                If you are planning to enter or scale in East African markets, the first step is clarity.
              </p>
              <p className="text-xl text-gray-100 mb-12 leading-relaxed">
                We assess your product, market opportunity, and expansion path.
              </p>
              
              <Link href="/contact" className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-lg">
                Book a Strategy Call
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}
