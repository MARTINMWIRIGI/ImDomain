import { SEOHead, SEO_CONFIG } from "@/components/SEOHead";
import { Hero } from "@/components/Hero";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Linkedin, ExternalLink, Code2, TrendingUp, Globe, Lightbulb, CheckCircle2, ArrowRight } from "lucide-react";
import martinPhoto from "@assets/PSX_20251101_213933_1777047441895.png";

export default function About() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Imperial Enterprise",
    "description": "Imperial Enterprise is Kenya's leading market entry and digital growth consulting firm helping SMEs, startups and brands grow online and expand into East African markets.",
    "organization": {
      "@type": "Organization",
      "name": "Imperial Enterprise",
      "url": "https://imperialenterprise.co.ke",
      "foundingDate": "2019",
      "areaServed": ["KE", "EA"],
      "founder": {
        "@type": "Person",
        "name": "Martin Wirigi"
      }
    }
  };

  const stats = [
    { label: "Years Building Brands", value: "5+" },
    { label: "Clients Served", value: "120+" },
    { label: "Campaigns Executed", value: "450+" },
    { label: "Countries Reached", value: "4" },
  ];

  const values = [
    { title: "Innovation", desc: "We don't follow trends — we set them. Always pushing the boundaries of what's possible in East Africa's digital space." },
    { title: "Excellence", desc: "Good enough is never enough. World-class quality in every pixel, every line of code, and every campaign strategy." },
    { title: "Integrity", desc: "Total transparency. Real numbers. Honest strategies. We build partnerships built on trust, not just client lists." },
    { title: "Impact", desc: "We exist to drive revenue, growth, and measurable business results. Vanity metrics don't pay the bills — results do." },
  ];

  const expertise = [
    { icon: <Code2 size={20} />, label: "Web Development & Systems" },
    { icon: <TrendingUp size={20} />, label: "Digital Marketing & Growth" },
    { icon: <Globe size={20} />, label: "Brand Strategy & Identity" },
    { icon: <Lightbulb size={20} />, label: "Business Strategy & Consulting" },
  ];

  return (
    <>
      <SEOHead {...SEO_CONFIG.about} schema={aboutSchema} />
      
      {/* HERO SECTION */}
      <Hero
        title="We Put Kenyan Businesses on the Global Map"
        subtitle="Imperial Enterprise elevates the standard of digital presence in East Africa by combining technical precision with deep market understanding."
        backgroundImage="/hero-about.jpg"
        primaryCTA={{
          text: "Work With Us",
          href: "/contact",
        }}
        overlayOpacity="medium"
      />

    <div className="pb-24 bg-white">

      {/* Stats */}
      <section className="bg-secondary py-20 mb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center px-4"
              >
                <div className="text-4xl md:text-6xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base font-bold uppercase tracking-widest text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-6 mb-32">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight">OUR PILLARS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 border-l-4 border-primary/20 hover:border-primary transition-colors group"
            >
              <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Founder Section */}
      <section className="bg-gray-50 py-32 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight mb-4">THE FOUNDER</h2>
            <p className="text-lg text-gray-500 max-w-lg">
              One vision. One standard. One person accountable for your results.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-start max-w-5xl">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="shrink-0 group"
            >
              <div className="relative w-72 md:w-80">
                {/* Decorative background */}
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-primary/20 z-0" />
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-secondary/10 z-0" />
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-secondary/20 border-4 border-white">
                  <img
                    src={martinPhoto}
                    alt="Martin Mwirigi — Founder, Imperial Enterprise"
                    data-testid="img-founder-martin"
                    className="w-full aspect-[4/5] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />
                </div>
                {/* Name badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <p className="font-black text-secondary text-base">Martin Mwirigi</p>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider">Founder & Lead Strategist</p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="mb-2">
                <span className="inline-block bg-primary/10 text-primary text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  Nairobi, Kenya
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-secondary tracking-tight mb-2 leading-tight">
                Martin Mwirigi
              </h3>
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-8">
                Founder · Developer · Lead Strategist
              </p>

              <div className="space-y-5 text-gray-600 mb-10 text-base leading-relaxed">
                <p>
                  Martin is the architect behind Imperial Enterprise's relentless drive for digital excellence. With a rare combination of full-stack development expertise and high-performance digital marketing strategy, he brings a 360-degree skill set that most agencies scramble to assemble across entire teams.
                </p>
                <p>
                  Born and built in Nairobi, Martin understands the nuances of the Kenyan market — the consumer behaviors, the mobile-first reality, and the competitive landscape — at a level that external consultants simply cannot match. He has helped businesses ranging from ambitious early-stage startups to established enterprises redefine their digital presence and unlock new revenue channels.
                </p>
                <p>
                  When you work with Imperial Enterprise, you work directly with Martin. No account managers, no diluted strategies passed down a chain. You get the architect himself — obsessively focused on your results.
                </p>
              </div>

              {/* Expertise Tags */}
              <div className="mb-10">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Areas of Expertise</p>
                <div className="flex flex-wrap gap-3">
                  {expertise.map((skill) => (
                    <div
                      key={skill.label}
                      className="flex items-center gap-2 bg-white border border-gray-100 px-4 py-2.5 rounded-xl shadow-sm text-sm font-semibold text-secondary hover:border-primary hover:text-primary transition-colors"
                    >
                      <span className="text-primary">{skill.icon}</span>
                      {skill.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* What you get working with Martin */}
              <div className="mb-10 p-6 bg-amber-50 border border-amber-100 rounded-2xl">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Working Directly With Martin Means</p>
                <ul className="space-y-3">
                  {[
                    "Direct access — no middlemen, no delays in communication",
                    "Strategy built around YOUR business, not a template",
                    "Technical execution and marketing strategy under one roof",
                    "Accountability and transparency at every step",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* LinkedIn CTA */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/martinmwirigi"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-martin-linkedin"
                  className="inline-flex items-center gap-2 bg-[#0A66C2] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#004182] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#0A66C2]/20"
                >
                  <Linkedin size={18} />
                  Connect on LinkedIn
                  <ExternalLink size={14} />
                </a>
                <Link
                  href="/contact"
                  data-testid="link-founder-work-together"
                  className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary transition-all hover:-translate-y-0.5 shadow-lg"
                >
                  Work With Martin
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 mt-32 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight mb-4">
          READY TO DOMINATE YOUR MARKET?
        </h2>
        <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
          Book a free strategy call with Martin and walk away with a clear roadmap for your brand's digital growth.
        </p>
        <Link
          href="/contact"
          data-testid="link-about-cta"
          className="inline-flex items-center gap-2 bg-secondary text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-primary transition-all hover:-translate-y-1 shadow-2xl shadow-secondary/20"
        >
          Book a Free Strategy Call
          <ArrowRight size={20} />
        </Link>
      </section>

    </div>
</>
  );
}
