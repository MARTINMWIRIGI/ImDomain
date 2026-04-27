import { SEOHead, SEO_CONFIG } from "@/components/SEOHead";
import { FAQSchema, SERVICES_FAQS } from "@/components/FAQSchema";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Search, 
  PenTool, 
  Code2, 
  Share2, 
  LineChart, 
  Video,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "marketing",
      icon: <Search size={40} />,
      title: "Digital Marketing & SEO",
      desc: "Data-driven campaigns that put your brand directly in front of Kenyan consumers who are ready to buy.",
      process: ["Market Audit", "Keyword Strategy", "Campaign Launch", "Continuous Optimization"],
      tier: "Growth & Enterprise",
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: "brand",
      icon: <PenTool size={40} />,
      title: "Brand Identity & Design",
      desc: "World-class visual identities that command respect. We build brands that look like industry leaders from day one.",
      process: ["Discovery Workshop", "Concept Development", "Visual System Design", "Brand Guidelines"],
      tier: "Starter to Enterprise",
      color: "bg-purple-50 text-purple-600"
    },
    {
      id: "web",
      icon: <Code2 size={40} />,
      title: "Web Development",
      desc: "High-performance, mobile-first websites and e-commerce platforms engineered for the East African user.",
      process: ["UX/UI Design", "Frontend Development", "CMS Integration", "Performance Testing"],
      tier: "Growth & Enterprise",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      id: "social",
      icon: <Share2 size={40} />,
      title: "Social Media Management",
      desc: "Strategic content creation and community management that turns passive scrollers into loyal brand advocates.",
      process: ["Content Strategy", "Asset Creation", "Community Management", "Monthly Reporting"],
      tier: "Starter to Growth",
      color: "bg-pink-50 text-pink-600"
    },
    {
      id: "strategy",
      icon: <LineChart size={40} />,
      title: "Business Strategy Consulting",
      desc: "High-level strategic roadmaps for startups and enterprises looking to penetrate or dominate the Kenyan market.",
      process: ["Competitor Analysis", "Go-to-Market Strategy", "Financial Modeling", "Execution Roadmap"],
      tier: "Enterprise",
      color: "bg-amber-50 text-amber-600"
    },
    {
      id: "video",
      icon: <Video size={40} />,
      title: "Video Production & Content",
      desc: "Cinematic brand films, corporate documentaries, and engaging short-form reels that tell your story with impact.",
      process: ["Storyboarding", "Production/Shooting", "Post-Production", "Distribution Strategy"],
      tier: "Growth & Enterprise",
      color: "bg-red-50 text-red-600"
    }
  ];

  return (
<>
    <SEOHead {...SEO_CONFIG.services} />
<FAQSchema faqs={SERVICES_FAQS} />
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-secondary tracking-tight mb-6"
          >
            OUR DIGITAL ARSENAL
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Comprehensive, battle-tested solutions designed to establish your dominance in the Kenyan digital ecosystem.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className={`shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Our Process</h4>
                    <ul className="space-y-3">
                      {service.process.map((step, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                          <CheckCircle2 size={16} className="text-primary shrink-0" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-3 py-1.5 rounded-sm">
                      {service.tier}
                    </span>
                    <Link href="/contact" className="text-primary font-bold text-sm uppercase tracking-wider hover:text-secondary transition-colors flex items-center gap-1 group/link">
                      Start Project
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="bg-secondary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Need a Custom Solution?</h2>
            <p className="text-gray-300 text-lg mb-10">
              We don't do cookie-cutter. If you have a unique challenge, we'll engineer a bespoke digital strategy to solve it.
            </p>
            <Link href="/contact" className="inline-block bg-primary text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white hover:text-secondary transition-colors shadow-lg">
              Consult Our Experts
            </Link>
          </div>
        </div>

      </div>
    </div>
</>
  );
}
