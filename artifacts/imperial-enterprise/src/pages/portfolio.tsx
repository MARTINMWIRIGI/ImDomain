import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const cases = [
    {
      client: "Nairobi Restaurant Group",
      category: "Social Media Growth",
      result: "300% Engagement Increase",
      desc: "Revamped their entire visual identity on Instagram and TikTok, implementing a video-first strategy that tripled bookings across 4 locations.",
      color: "from-orange-500/20 to-transparent"
    },
    {
      client: "Kenyan Fintech Startup",
      category: "Brand Identity + Web",
      result: "Raised Series A post-launch",
      desc: "Built a world-class, trust-inspiring brand identity and a lightning-fast marketing site that positioned them perfectly for international investors.",
      color: "from-blue-500/20 to-transparent"
    },
    {
      client: "Safari Tour Operator",
      category: "SEO + Google Ads",
      result: "5x ROI in 3 Months",
      desc: "Optimized their platform for high-intent international search terms, dominating the 'luxury Kenya safari' keywords and driving high-ticket bookings.",
      color: "from-emerald-500/20 to-transparent"
    },
    {
      client: "Nairobi Fashion Brand",
      category: "E-commerce Launch",
      result: "KSh 2M First Month",
      desc: "Developed a seamless Shopify experience coupled with aggressive Meta ad campaigns targeting fashion-forward urban demographics.",
      color: "from-pink-500/20 to-transparent"
    },
    {
      client: "Real Estate Developer",
      category: "Digital Marketing",
      result: "200+ Qualified Leads/Mo",
      desc: "Created highly optimized landing pages and targeted lead-gen campaigns across LinkedIn and Facebook for premium off-plan properties.",
      color: "from-slate-500/20 to-transparent"
    },
    {
      client: "Healthcare Startup",
      category: "Brand Strategy",
      result: "Expanded to 3 Countries",
      desc: "Developed a comprehensive brand playbook and localized digital strategies that allowed smooth scaling across East Africa.",
      color: "from-cyan-500/20 to-transparent"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6">
        
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-secondary tracking-tight mb-6 uppercase">
              Proof of <span className="text-primary">Dominance</span>
            </h1>
            <p className="text-xl text-gray-600">
              We let our results do the talking. Real businesses, real revenue, real growth. Explore how we've helped ambitious brands win their markets.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {cases.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className={`h-48 bg-gradient-to-br ${study.color} bg-gray-100 flex items-center justify-center p-8 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                <h3 className="text-3xl font-black text-secondary/30 tracking-tighter text-center leading-none uppercase mix-blend-multiply group-hover:scale-110 transition-transform duration-700">
                  {study.client}
                </h3>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {study.category}
                  </span>
                  <ArrowUpRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
                </div>
                
                <h4 className="text-2xl font-bold text-secondary mb-4 leading-tight">
                  {study.result}
                </h4>
                
                <p className="text-gray-600 mb-8 text-sm leading-relaxed flex-1">
                  {study.desc}
                </p>
                
                <div className="pt-6 border-t border-gray-100 mt-auto">
                  <span className="text-sm font-bold text-secondary flex items-center gap-2 group-hover:text-primary transition-colors cursor-pointer">
                    Read Case Study
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-secondary rounded-2xl p-12 md:p-24 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">BE OUR NEXT SUCCESS STORY</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Ready to stop playing small? Let's build a strategy that puts you at the top of your industry.
          </p>
          <Link href="/contact" className="inline-block bg-primary text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-white hover:text-secondary transition-colors shadow-lg">
            Start Your Project
          </Link>
        </div>

      </div>
    </div>
  );
}
