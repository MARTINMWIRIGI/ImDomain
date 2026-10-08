import { SEOHead, SEO_CONFIG } from "@/components/SEOHead";
import { Hero } from "@/components/Hero";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  ArrowRight, CheckCircle2, Target, TrendingUp, AlertCircle, 
  Zap, BarChart3, MapPin, Users, Briefcase, Shield, Layers, Mail,
  Rocket, DollarSign, TrendingUp as Growth, Zap as Lightning
} from "lucide-react";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Imperial Enterprise",
    "url": "https://imperialenterprise.co.ke",
    "logo": "https://imperialenterprise.co.ke/logo.png",
    "description": "Digital growth systems for businesses. We help SMEs, startups, and brands scale faster through websites, SEO, paid ads, and automation.",
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
        
        {/* 1) HERO SECTION */}
        <Hero
          title="We Help Brands & Businesses Scale Faster in the Digital Space"
          subtitle="We build growth systems that help businesses attract customers, increase visibility, generate leads, and outperform competitors through websites, SEO, paid ads, automation, and digital strategy."
          backgroundImage="/hero-home.jpg"
          primaryCTA={{
            text: "Book Free Growth Consultation",
            href: "/contact",
          }}
          secondaryCTA={{
            text: "Explore Our Solutions",
            href: "/services",
          }}
          overlayOpacity="light"
        />

        {/* Trust Line */}
        <div className="bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm md:text-base text-gray-600 font-medium">
              Trusted by startups, growing brands, and ambitious businesses looking to scale smarter
            </p>
          </div>
        </div>

        {/* 2) PROBLEM SECTION */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-secondary text-center mb-6">
                Why Most Businesses Struggle to Grow Online
              </h2>
              <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
                Many businesses invest in websites, ads, and social media but still struggle because they lack a proper digital growth system.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
                  "Poor online visibility",
                  "Weak websites that don't convert",
                  "Low lead generation",
                  "Wasted ad spend",
                  "Poor brand positioning",
                  "No automation systems"
                ].map((challenge, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm"
                  >
                    <AlertCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-lg font-semibold text-secondary">{challenge}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-primary/10 border border-primary/20 p-8 rounded-xl text-center">
                <p className="text-2xl font-black text-secondary">
                  We solve this.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3) WHAT WE DO SECTION - Growth Systems */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-secondary text-center mb-6">
                We Build Digital Growth Systems That Scale Businesses
              </h2>
              <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
                Four core systems that work together to drive sustainable growth
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Visibility Growth System */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Rocket className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-secondary mb-2">Visibility Growth System</h3>
                      <p className="text-gray-600 mb-4">
                        Help businesses rank on Google, improve discoverability, and attract qualified traffic.
                      </p>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-gray-700"><strong>Perfect for:</strong> Businesses struggling with online visibility</p>
                        <p className="text-sm text-gray-700"><strong>Outcome:</strong> More traffic + inbound leads</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Customer Acquisition System */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <DollarSign className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-secondary mb-2">Customer Acquisition System</h3>
                      <p className="text-gray-600 mb-4">
                        Paid ads systems that turn traffic into paying customers.
                      </p>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-gray-700"><strong>Perfect for:</strong> Businesses running ineffective ads</p>
                        <p className="text-sm text-gray-700"><strong>Outcome:</strong> Higher ROI + lower acquisition costs</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Conversion Growth System */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Growth className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-secondary mb-2">Conversion Growth System</h3>
                      <p className="text-gray-600 mb-4">
                        High-performing websites built to convert visitors into customers.
                      </p>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-gray-700"><strong>Perfect for:</strong> Businesses with outdated websites</p>
                        <p className="text-sm text-gray-700"><strong>Outcome:</strong> More leads from existing traffic</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Automation Growth System */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Lightning className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-secondary mb-2">Automation Growth System</h3>
                      <p className="text-gray-600 mb-4">
                        Automate follow-ups, lead nurturing, and customer retention.
                      </p>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-gray-700"><strong>Perfect for:</strong> Businesses losing leads after first contact</p>
                        <p className="text-sm text-gray-700"><strong>Outcome:</strong> Higher conversion rates</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 4) WHY CHOOSE US SECTION */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-secondary text-center mb-16">
                Why Businesses Choose Imperial Enterprise
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Growth-Driven Strategy", icon: Target },
                  { title: "Execution-Focused Systems", icon: CheckCircle2 },
                  { title: "Customized Solutions", icon: Layers },
                  { title: "Modern Digital Tools", icon: Zap },
                  { title: "Long-Term Scalability", icon: TrendingUp },
                  { title: "Competitive Market Advantage", icon: Briefcase }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all"
                    >
                      <Icon className="w-8 h-8 text-primary mb-3" />
                      <h3 className="text-lg font-bold text-secondary">{item.title}</h3>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 5) CASE STUDIES / RESULTS SECTION */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-secondary text-center mb-16">
                Measurable Results That Drive Growth
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { metric: "40%", description: "Improved conversion rates for ecommerce brands" },
                  { metric: "300%", description: "Increase in qualified leads through SEO campaigns" },
                  { metric: "50%", description: "Reduced customer acquisition costs via paid ads optimization" },
                  { metric: "10x", description: "Faster growth through scalable systems implementation" }
                ].map((result, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 p-8 rounded-lg"
                  >
                    <p className="text-4xl md:text-5xl font-black text-primary mb-2">{result.metric}</p>
                    <p className="text-lg text-gray-700 font-semibold">{result.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6) WHO WE HELP SECTION */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-secondary text-center mb-16">
                Who We Help
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "SMEs",
                  "Startups",
                  "Personal Brands",
                  "Ecommerce Brands",
                  "Professional Service Businesses",
                  "Corporate Teams Going Digital"
                ].map((audience, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center gap-3"
                  >
                    <Users className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="text-lg font-bold text-secondary">{audience}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7) FINAL CTA SECTION */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/5 blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4">
                Ready to Grow Faster Online?
              </h2>
              <p className="text-lg text-gray-600 mb-8 font-medium">
                Let's build the systems your business needs to scale, attract customers, and stay ahead of the competition.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all hover:shadow-lg"
              >
                Book Free Strategy Call
              </Link>
            </motion.div>
          </div>
        </section>

        {/* PORTFOLIO CTA */}
        <section className="py-24 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="max-w-2xl">
                <span className="inline-block bg-primary/20 text-primary text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                  Our Work
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-[1.05]">
                  SEE THE RESULTS<br className="hidden md:block" /> WE DELIVER
                </h2>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  Browse our portfolio of completed and ongoing projects — websites, brands, and digital campaigns engineered for real results in the Kenyan market.
                </p>
                <a
                  href="https://portfolio.imperialenterprise.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-blue-700 transition-all hover:scale-105 shadow-2xl shadow-primary/30"
                >
                  View Our Portfolio
                  <ArrowRight size={20} />
                </a>
              </div>
              <div className="shrink-0 grid grid-cols-2 gap-4 w-full lg:w-auto lg:min-w-[320px]">
                {[
                  { value: "80+",  label: "Projects Delivered" },
                  { value: "120+", label: "Happy Clients" },
                  { value: "15+",  label: "Ongoing Builds" },
                  { value: "5+",   label: "Years of Impact" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/10 rounded-2xl p-6 text-center border border-white/10 backdrop-blur-sm"
                  >
                    <p className="text-3xl font-black text-primary mb-1">{stat.value}</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-300">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
