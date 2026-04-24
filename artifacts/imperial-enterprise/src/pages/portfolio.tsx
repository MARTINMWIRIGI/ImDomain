import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Users, DollarSign, Globe, Star, Quote } from "lucide-react";

const cases = [
  {
    id: 1,
    client: "Nairobi Restaurant Group",
    category: "Social Media Growth",
    service: "Content Strategy & Paid Social",
    result: "300%",
    resultLabel: "Engagement Increase",
    secondaryMetric: "Bookings tripled across all 4 locations",
    desc: "Revamped their entire visual identity across Instagram and TikTok. Implemented a video-first content strategy with cinematic food photography and behind-the-scenes reels that created authentic community engagement — turning casual followers into loyal regulars.",
    tags: ["Social Media", "Video Content", "Brand Identity"],
    icon: <Users size={20} />,
    accentColor: "border-orange-400",
    bgGradient: "from-orange-50 to-white",
    metric1: { label: "New Followers (3 mo)", value: "+18K" },
    metric2: { label: "Booking Increase", value: "3x" },
  },
  {
    id: 2,
    client: "Kenyan Fintech Startup",
    category: "Brand Identity + Web Development",
    service: "Full Brand Build & Marketing Site",
    result: "Series A",
    resultLabel: "Funding Round Closed",
    secondaryMetric: "Positioned as category leader pre-funding",
    desc: "Built a world-class, trust-inspiring brand identity and a lightning-fast marketing website from scratch. The rebrand communicated institutional credibility to both consumers and investors — giving the founders the visual authority needed to close their funding round.",
    tags: ["Brand Identity", "Web Dev", "Investor Pitch"],
    icon: <TrendingUp size={20} />,
    accentColor: "border-blue-500",
    bgGradient: "from-blue-50 to-white",
    metric1: { label: "Site Speed Score", value: "98/100" },
    metric2: { label: "Investor Decks Sent", value: "40+" },
  },
  {
    id: 3,
    client: "Safari Tour Operator",
    category: "SEO + Google Ads",
    service: "Search Dominance Campaign",
    result: "5x ROI",
    resultLabel: "Return on Ad Spend",
    secondaryMetric: "Ranked #1 for 'luxury Kenya safari'",
    desc: "Engineered a comprehensive search dominance strategy targeting high-intent international keywords. Combined technical SEO with precision-targeted Google Ads, capturing travellers from the US, UK, and Germany who were ready to book — and turning clicks into high-ticket safaris.",
    tags: ["Google Ads", "SEO", "International Markets"],
    icon: <Globe size={20} />,
    accentColor: "border-emerald-500",
    bgGradient: "from-emerald-50 to-white",
    metric1: { label: "Monthly Organic Traffic", value: "+340%" },
    metric2: { label: "Cost Per Booking", value: "-62%" },
  },
  {
    id: 4,
    client: "Nairobi Fashion Brand",
    category: "E-commerce Launch",
    service: "Full E-commerce Build & Meta Ads",
    result: "KSh 2M",
    resultLabel: "Revenue in First Month",
    secondaryMetric: "Zero to profitable in 30 days",
    desc: "Developed a conversion-optimised Shopify experience that reflected the brand's premium positioning. Paired with aggressive Meta ad campaigns targeting fashion-forward Nairobi demographics — the store launched to a ready audience and immediately converted.",
    tags: ["E-commerce", "Meta Ads", "Shopify"],
    icon: <DollarSign size={20} />,
    accentColor: "border-pink-500",
    bgGradient: "from-pink-50 to-white",
    metric1: { label: "Units Sold (Month 1)", value: "420+" },
    metric2: { label: "Return Customer Rate", value: "38%" },
  },
  {
    id: 5,
    client: "Real Estate Developer",
    category: "Lead Generation",
    service: "Performance Marketing & Landing Pages",
    result: "200+",
    resultLabel: "Qualified Leads / Month",
    secondaryMetric: "12 units sold in first campaign quarter",
    desc: "Created high-converting landing pages with embedded virtual tours and financing calculators. Ran precision LinkedIn and Facebook campaigns targeting Nairobi professionals and diaspora investors — delivering a consistent pipeline of qualified, ready-to-buy leads.",
    tags: ["Lead Gen", "LinkedIn Ads", "Landing Pages"],
    icon: <TrendingUp size={20} />,
    accentColor: "border-slate-500",
    bgGradient: "from-slate-50 to-white",
    metric1: { label: "Cost Per Lead", value: "KSh 450" },
    metric2: { label: "Lead-to-Sale Rate", value: "6%" },
  },
  {
    id: 6,
    client: "East African Healthcare Startup",
    category: "Brand Strategy & Expansion",
    service: "Pan-African Growth Playbook",
    result: "3 Countries",
    resultLabel: "Expanded Within 12 Months",
    secondaryMetric: "Kenya → Uganda → Tanzania in one year",
    desc: "Developed a comprehensive brand playbook built for regional scalability. Created localised digital strategies and market entry frameworks for Uganda and Tanzania — ensuring cultural resonance and regulatory alignment while maintaining brand integrity across all markets.",
    tags: ["Brand Strategy", "Market Expansion", "East Africa"],
    icon: <Globe size={20} />,
    accentColor: "border-cyan-500",
    bgGradient: "from-cyan-50 to-white",
    metric1: { label: "Markets Entered", value: "3" },
    metric2: { label: "Brand Recall Score", value: "+85%" },
  },
];

const testimonials = [
  {
    quote: "Martin completely transformed how we show up online. Our lead volume tripled in 90 days and the quality of leads is night and day better than before. Best investment we've made.",
    author: "David K.",
    role: "CEO, Nairobi Real Estate Group",
  },
  {
    quote: "We came to Imperial Enterprise as an unknown fintech startup. We left with a brand that looked like we'd been in the game for a decade. The rebrand directly contributed to us closing our round.",
    author: "Sarah M.",
    role: "Founder, PayTech Kenya",
  },
  {
    quote: "The ROI from our Google Ads campaign is the best we've ever seen — 5x in the first three months. Martin knows how to find the right audience and convert them. Genuinely world-class work.",
    author: "James O.",
    role: "Director, Safari Adventures Kenya",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <section className="pt-32 pb-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block bg-primary/10 text-primary text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Case Studies · Real Results
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-secondary tracking-tight mb-6 uppercase">
                Proof of <span className="text-primary">Dominance</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                We let results do the talking. Real Kenyan businesses, real revenue, measurable growth. Every number here is earned — not estimated.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Summary Metrics Bar */}
      <section className="bg-secondary py-10 border-b-4 border-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/10">
            {[
              { value: "120+", label: "Clients Served" },
              { value: "450+", label: "Campaigns Executed" },
              { value: "5x avg", label: "Return on Ad Spend" },
              { value: "KSh 10M+", label: "Revenue Generated" },
            ].map((m, i) => (
              <div key={i} className="text-center px-4">
                <p className="text-2xl md:text-4xl font-black text-primary">{m.value}</p>
                <p className="text-xs text-white/60 font-bold uppercase tracking-widest mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-10">
            {cases.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.05 }}
                className={`group rounded-2xl border-l-4 ${study.accentColor} bg-gradient-to-r ${study.bgGradient} shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden`}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Result block */}
                  <div className="lg:w-64 xl:w-72 shrink-0 p-8 bg-white/60 lg:border-r border-gray-100 flex flex-col justify-center items-start lg:items-center text-left lg:text-center">
                    <div className="text-4xl xl:text-5xl font-black text-secondary leading-none mb-2">
                      {study.result}
                    </div>
                    <div className="text-sm font-bold text-primary uppercase tracking-wide mb-3">
                      {study.resultLabel}
                    </div>
                    <div className="text-xs text-gray-400 font-medium leading-relaxed">
                      {study.secondaryMetric}
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {study.category}
                      </span>
                      {study.tags.map((tag) => (
                        <span key={tag} className="text-xs font-semibold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-black text-secondary mb-2">{study.client}</h3>
                    <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-5">
                      {study.service}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl">{study.desc}</p>

                    {/* Sub-metrics */}
                    <div className="flex flex-wrap gap-6">
                      <div className="bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-100">
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">{study.metric1.label}</p>
                        <p className="text-xl font-black text-secondary">{study.metric1.value}</p>
                      </div>
                      <div className="bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-100">
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">{study.metric2.label}</p>
                        <p className="text-xl font-black text-secondary">{study.metric2.value}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight mb-4">
              THEY TRUSTED US. <span className="text-primary">THEY DOMINATED.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Straight from the business owners and founders who've seen the results first-hand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <Quote size={28} className="text-primary/20 mb-4" />
                <p className="text-gray-700 font-medium leading-relaxed flex-1 mb-8 italic">
                  "{t.quote}"
                </p>
                <div className="pt-5 border-t border-gray-100">
                  <p className="font-black text-secondary">{t.author}</p>
                  <p className="text-sm text-primary font-semibold mt-1">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="inline-block bg-primary/20 text-primary text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
            Your Turn
          </span>
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            BE OUR NEXT <br />
            <span className="text-primary">SUCCESS STORY</span>
          </h2>
          <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to stop playing small? Let's build a strategy that puts you at the top of your industry — with real numbers to back it up.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              data-testid="link-portfolio-start-project"
              className="inline-flex items-center gap-2 bg-primary text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-amber-600 transition-all hover:-translate-y-1 shadow-2xl shadow-primary/30"
            >
              Start Your Project
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/about"
              data-testid="link-portfolio-meet-martin"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
            >
              Meet Martin
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
