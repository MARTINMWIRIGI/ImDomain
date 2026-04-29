import { SEOHead, SEO_CONFIG } from "@/components/SEOHead";
import { Hero } from "@/components/Hero";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, Search, MapPin, Globe, Bot, FileText,
  Lightbulb, Briefcase, Award, TrendingUp, CheckCircle2,
  Star, Quote, Zap, BarChart3, Users, MessageCircle,
} from "lucide-react";

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Portfolio - Imperial Enterprise Case Studies",
  "description": "Browse case studies and success stories of how Imperial Enterprise helped Kenyan businesses grow, enter new markets, and scale sustainably.",
  "organization": {
    "@type": "Organization",
    "name": "Imperial Enterprise"
  }
};

const services = [
  {
    id: 1,
    icon: <Search size={28} />,
    category: "Search Engine Optimisation",
    title: "SEO Services",
    subtitle: "Rank Higher. Get Found. Convert More.",
    desc: "We engineer full-spectrum SEO strategies that push your business to the top of Google — and keep it there. From deep technical audits to link building and on-page optimization, we build sustainable organic growth that your competitors can't buy.",
    highlights: [
      "Technical SEO audits & site health fixes",
      "Keyword strategy & competitor gap analysis",
      "On-page & off-page optimisation",
      "Local SEO for Nairobi & Kenya-wide",
      "Core Web Vitals & page speed optimisation",
      "Monthly ranking reports & dashboards",
    ],
    stat: { value: "+340%", label: "Average organic traffic increase" },
    accent: "from-blue-600 to-indigo-700",
    bgLight: "from-blue-50 to-indigo-50",
    border: "border-blue-500",
    tag: "Most Popular",
  },
  {
    id: 2,
    icon: <MapPin size={28} />,
    category: "Local Visibility",
    title: "Google Business Profile",
    subtitle: "Own Your Local Market. Dominate the Map Pack.",
    desc: "Your Google Business Profile is the most powerful free marketing tool available — and most businesses use it wrong. We optimise, manage, and grow your profile so you appear at the top of local searches, earn trust through reviews, and convert nearby customers before they even visit your website.",
    highlights: [
      "Full GBP setup & verification",
      "Profile optimisation for maximum map pack visibility",
      "Review generation & reputation management",
      "Posts, offers & Q&A management",
      "Photo & video strategy",
      "Citation building & NAP consistency",
    ],
    stat: { value: "3x", label: "More calls & direction requests" },
    accent: "from-emerald-500 to-teal-600",
    bgLight: "from-emerald-50 to-teal-50",
    border: "border-emerald-500",
    tag: null,
  },
  {
    id: 3,
    icon: <Globe size={28} />,
    category: "Web Design & Development",
    title: "Website Design & Development",
    subtitle: "Fast. Beautiful. Built to Convert.",
    desc: "We build custom, high-performance websites that don't just look world-class — they're engineered to turn visitors into leads and leads into paying customers. Every pixel is intentional, every page is optimised, and every site is built mobile-first for Kenya's smartphone-first audience.",
    highlights: [
      "Custom design — no generic templates",
      "Mobile-first, ultra-fast performance",
      "E-commerce & booking integrations",
      "SEO-ready architecture from day one",
      "M-Pesa & payment gateway integration",
      "Ongoing maintenance & support plans",
    ],
    stat: { value: "98/100", label: "Average Google PageSpeed score" },
    accent: "from-violet-600 to-purple-700",
    bgLight: "from-violet-50 to-purple-50",
    border: "border-violet-500",
    tag: "Top Service",
  },
  {
    id: 4,
    icon: <Bot size={28} />,
    category: "Artificial Intelligence",
    title: "AI Automations & Workflow Automations",
    subtitle: "Work Smarter. Scale Faster. Eliminate Bottlenecks.",
    desc: "We build custom AI-powered automation systems that eliminate repetitive tasks, supercharge productivity, and let your team focus on high-value work. From intelligent chatbots to end-to-end workflow automation, we integrate AI tools that actually move the needle for your business.",
    highlights: [
      "Custom AI chatbots for lead capture & support",
      "CRM & sales pipeline automation (HubSpot, Zoho, Salesforce)",
      "WhatsApp & email auto-responder sequences",
      "Document processing & data extraction with AI",
      "Social media & content scheduling automation",
      "Make.com, Zapier & n8n workflow builds",
    ],
    stat: { value: "70%", label: "Reduction in manual admin time" },
    accent: "from-cyan-500 to-blue-600",
    bgLight: "from-cyan-50 to-blue-50",
    border: "border-cyan-500",
    tag: "🔥 Trending",
  },
  {
    id: 5,
    icon: <FileText size={28} />,
    category: "Content Marketing",
    title: "Content & SEO Creation",
    subtitle: "Content That Ranks, Converts & Builds Authority.",
    desc: "We create SEO-optimised content that attracts the right audience, builds domain authority, and converts readers into customers. From strategic blog calendars to long-form pillar pages, every piece we create is a long-term asset for your business — not just something to fill a page.",
    highlights: [
      "Keyword-driven blog & article writing",
      "Landing page & sales copy creation",
      "Content strategy & editorial calendars",
      "Product descriptions & category pages",
      "Email newsletter sequences & campaigns",
      "Social media caption writing & scheduling",
    ],
    stat: { value: "5x", label: "Content-driven lead growth in 6 months" },
    accent: "from-orange-500 to-amber-600",
    bgLight: "from-orange-50 to-amber-50",
    border: "border-orange-500",
    tag: null,
  },
  {
    id: 6,
    icon: <Lightbulb size={28} />,
    category: "Strategic Advisory",
    title: "Consulting Services",
    subtitle: "Expert Strategy. Actionable Roadmaps. Real Results.",
    desc: "Whether you're a startup defining your market position or an established business ready to scale, our consulting practice delivers clarity, direction, and a concrete plan. We combine global digital expertise with deep knowledge of the Kenyan and East African market to build strategies that win.",
    highlights: [
      "Digital marketing strategy audits",
      "Market positioning & competitive analysis",
      "Go-to-market plans for new products/launches",
      "Brand strategy & messaging frameworks",
      "Customer journey mapping & funnel design",
      "1-on-1 & team strategy workshops",
    ],
    stat: { value: "100+", label: "Businesses consulted across East Africa" },
    accent: "from-rose-500 to-pink-600",
    bgLight: "from-rose-50 to-pink-50",
    border: "border-rose-500",
    tag: null,
  },
  {
    id: 7,
    icon: <Briefcase size={28} />,
    category: "Business Growth",
    title: "Business Management",
    subtitle: "Structure. Systems. Scalable Growth.",
    desc: "We help business owners build the operational foundation needed to scale — from internal systems and team structures to financial oversight and growth planning. Stop running your business on instinct alone and start building with intention.",
    highlights: [
      "Business performance reviews & diagnostics",
      "Operational systems design & documentation",
      "KPI frameworks & team accountability structures",
      "Business plan creation & investor-ready decks",
      "Revenue growth strategies & pricing reviews",
      "Quarterly growth planning & accountability coaching",
    ],
    stat: { value: "2x", label: "Average revenue growth within 12 months" },
    accent: "from-slate-600 to-gray-700",
    bgLight: "from-slate-50 to-gray-50",
    border: "border-slate-500",
    tag: null,
  },
  {
    id: 8,
    icon: <Award size={28} />,
    category: "Professional Development",
    title: "Sales Training & Certifications",
    subtitle: "Train Your Team. Close More Deals. Get Certified.",
    desc: "We deliver results-driven sales training programmes for entrepreneurs, SME teams, and corporate sales forces. Our certified curriculum combines modern digital selling techniques with proven face-to-face strategies tailored for the Kenyan business environment — with official certification upon completion.",
    highlights: [
      "Certified Sales Professional (CSP) programme",
      "Digital & social selling mastery",
      "Objection handling & closing techniques",
      "SPIN Selling & consultative sales methods",
      "B2B sales prospecting & pipeline management",
      "Team workshops, bootcamps & online modules",
    ],
    stat: { value: "92%", label: "Trainees report increased close rate" },
    accent: "from-yellow-500 to-orange-500",
    bgLight: "from-yellow-50 to-orange-50",
    border: "border-yellow-500",
    tag: "🎓 Certified",
  },
];

const testimonials = [
  {
    quote: "Martin's SEO strategy transformed our visibility. We went from page 4 to #1 for our main keyword in just 5 months. The leads haven't stopped flowing since.",
    author: "David K.",
    role: "CEO, Nairobi Real Estate Group",
    stars: 5,
  },
  {
    quote: "The AI automation Imperial Enterprise built for our business saved us 30+ hours per week. Our team now focuses purely on clients, not admin. Absolute game changer.",
    author: "Sarah M.",
    role: "Founder, PayTech Kenya",
    stars: 5,
  },
  {
    quote: "The sales training programme was the best investment I've made in my team. Certification gave them confidence, and our close rate jumped by 40% within two months.",
    author: "James O.",
    role: "Director, Safari Adventures Kenya",
    stars: 5,
  },
];

export default function Portfolio() {
  return (
    <>
      <SEOHead {...SEO_CONFIG.portfolio} schema={portfolioSchema} />
      
      {/* HERO SECTION */}
      <Hero
        title="Our Work Speaks Louder Than Words"
        subtitle="Every project is a masterpiece. Every client is a long-term partner. Explore how we've transformed businesses across Kenya."
        backgroundImage="/hero-portfolio.jpg"
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact",
        }}
        overlayOpacity="medium"
      />

      {/* Stats Bar */}
      <section className="bg-primary py-8 border-b-4 border-blue-700">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/20">
            {[
              { value: "120+", label: "Clients Served" },
              { value: "8", label: "Core Service Areas" },
              { value: "5x avg", label: "Return on Investment" },
              { value: "KSh 10M+", label: "Revenue Generated" },
            ].map((m, i) => (
              <div key={i} className="text-center px-4">
                <p className="text-2xl md:text-4xl font-black text-white">{m.value}</p>
                <p className="text-xs text-white/70 font-bold uppercase tracking-widest mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight mb-4">
              Our Full Service Suite
            </h2>
            <p className="text-gray-500 text-lg">
              Every service is tailored specifically to the Kenyan market — with the tools, strategies, and expertise to deliver measurable results.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.05 }}
                className={`bg-white rounded-3xl border-l-4 ${svc.border} shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group`}
              >
                <div className="flex flex-col lg:flex-row">

                  {/* Left Panel */}
                  <div className={`lg:w-72 xl:w-80 shrink-0 p-8 bg-gradient-to-br ${svc.bgLight} lg:border-r border-gray-100 flex flex-col justify-between`}>
                    <div>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.accent} text-white flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {svc.icon}
                      </div>
                      <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{svc.category}</p>
                      <h3 className="text-2xl font-black text-secondary leading-tight mb-3">{svc.title}</h3>
                      {svc.tag && (
                        <span className={`inline-block text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-4 bg-gradient-to-r ${svc.accent} text-white`}>
                          {svc.tag}
                        </span>
                      )}
                    </div>
                    {/* Stat */}
                    <div className="mt-6 pt-6 border-t border-white/60">
                      <p className={`text-4xl font-black bg-gradient-to-r ${svc.accent} bg-clip-text text-transparent`}>{svc.stat.value}</p>
                      <p className="text-xs text-gray-500 font-semibold mt-1 leading-tight">{svc.stat.label}</p>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 p-8 lg:p-10">
                    <h4 className="text-lg font-bold text-primary mb-3">{svc.subtitle}</h4>
                    <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl text-base">{svc.desc}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-8">
                      {svc.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 font-medium">{h}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${svc.accent} text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wide hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-md group/btn`}
                    >
                      Get Started with This Service
                      <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Callout */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Zap size={28} />, title: "Fast Execution", desc: "We move at startup speed — campaigns live in days, not months." },
              { icon: <BarChart3 size={28} />, title: "Data-Driven", desc: "Every decision is backed by analytics, not guesswork or gut feel." },
              { icon: <Users size={28} />, title: "Kenya-First", desc: "Built for the Kenyan market — we speak the language of local success." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-4 p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">{item.icon}</div>
                <h3 className="text-xl font-black text-secondary">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Real feedback from real Kenyan businesses who partnered with us.
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
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <Quote size={24} className="text-primary/20 mb-3" />
                <p className="text-gray-700 font-medium leading-relaxed flex-1 mb-8 italic">"{t.quote}"</p>
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
            Ready to Work Together?
          </span>
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            LET'S BUILD YOUR <br />
            <span className="text-primary">SUCCESS STORY</span>
          </h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            From a single service to a full-suite digital strategy — we're ready to help you dominate your market. Book a free call today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              data-testid="link-portfolio-start-project"
              className="inline-flex items-center gap-2 bg-primary text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-2xl shadow-primary/30"
            >
              Book a Free Strategy Call
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/+254703823398"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-[#1EBE5C] transition-all hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
