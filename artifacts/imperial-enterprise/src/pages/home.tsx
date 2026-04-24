import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BarChart3, Globe, Zap, Shield, Target } from "lucide-react";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.png" 
            alt="Nairobi Digital Skyline" 
            className="w-full h-full object-cover opacity-15 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/80 to-white" />
        </div>

        {/* Floating 3D elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-32 h-32 bg-primary/20 backdrop-blur-3xl rounded-2xl border border-white/50 shadow-2xl z-10 hidden lg:block"
          style={{ transform: "perspective(1000px) rotateX(20deg) rotateY(-20deg)" }}
        />
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-10 w-48 h-48 bg-secondary/10 backdrop-blur-3xl rounded-full border border-white/50 shadow-2xl z-10 hidden lg:block"
          style={{ transform: "perspective(1000px) rotateX(-20deg) rotateY(20deg)" }}
        />

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block bg-white/80 backdrop-blur-sm border border-gray-200 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase text-primary mb-8 shadow-sm">
                Nairobi's Premier Digital Growth Agency
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-secondary tracking-tighter leading-[1.05] mb-8">
                DOMINATE THE <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-600">DIGITAL BATTLEFIELD</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                We build powerful, high-converting digital experiences for Kenyan businesses, startups, and ambitious brands ready to outpace their competition.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="w-full sm:w-auto bg-secondary text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-secondary/90 transition-all hover:-translate-y-1 shadow-lg shadow-secondary/20 flex items-center justify-center gap-2 group">
                  Start Your Campaign
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/services" className="w-full sm:w-auto bg-white text-secondary border-2 border-gray-200 px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:border-secondary transition-all hover:-translate-y-1 shadow-sm">
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 border-y border-gray-100 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Trusted by ambitious Kenyan brands</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {["Safaricom", "KCB Group", "M-Pesa Business", "Jumia Kenya", "Twiga Foods"].map((logo) => (
              <div key={logo} className="text-xl md:text-2xl font-black text-secondary tracking-tighter flex items-center gap-2">
                <div className="w-6 h-6 bg-secondary rounded-sm" />
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 md:py-32 bg-gray-50 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight mb-6">
              WHY IMPERIAL ENTERPRISE
            </h2>
            <p className="text-lg text-gray-600">
              We don't just build websites or run ads. We engineer digital dominance. Our strategies are built specifically for the nuances of the East African market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target size={32} />,
                title: "Precision Targeting",
                desc: "Hyper-localized strategies designed to convert Kenyan audiences, not just gather generic clicks."
              },
              {
                icon: <Zap size={32} />,
                title: "Rapid Execution",
                desc: "Silicon Valley speed meets Nairobi hustle. We deploy campaigns faster than your competition can react."
              },
              {
                icon: <BarChart3 size={32} />,
                title: "Data-Driven ROI",
                desc: "Every shilling spent is tracked, measured, and optimized for maximum return on investment."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 md:py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
                OUR ARSENAL
              </h2>
              <p className="text-lg text-gray-300">
                End-to-end digital solutions designed to elevate your brand and crush your revenue targets.
              </p>
            </div>
            <Link href="/services" className="shrink-0 flex items-center gap-2 text-primary font-bold uppercase tracking-wider hover:text-white transition-colors group">
              View All Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Digital Marketing & SEO",
                desc: "Dominate Google search results and run high-converting Meta ads targeted at your ideal customers.",
                tags: ["Google Ads", "Local SEO", "Meta Ads"]
              },
              {
                title: "Brand Identity",
                desc: "Craft a commanding visual presence that commands respect and builds instant trust with your audience.",
                tags: ["Logo Design", "Guidelines", "Positioning"]
              },
              {
                title: "Web Development",
                desc: "Custom, lightning-fast platforms built for conversion, optimized for the African mobile-first user.",
                tags: ["E-commerce", "Corporate Sites", "Web Apps"]
              },
              {
                title: "Social Media Dominance",
                desc: "Stop posting into the void. We build engaged communities and viral moments that drive real sales.",
                tags: ["Content", "Community", "Growth"]
              }
            ].map((service, i) => (
              <div key={i} className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all cursor-pointer overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                  <ArrowRight className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 max-w-md">{service.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-white/10 rounded-full text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight mb-16 text-center">
            THEY TRUSTED US. <br/><span className="text-primary">THEY DOMINATED.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Imperial Enterprise completely transformed our online presence. Our lead volume from Google tripled within the first three months. Absolutely ruthless execution.",
                author: "David K.",
                role: "CEO, Nairobi Real Estate Group"
              },
              {
                quote: "As a fintech startup, we needed to look world-class from day one. The brand identity and web platform they built gave us the credibility to close our seed round.",
                author: "Sarah M.",
                role: "Founder, PayTech Kenya"
              },
              {
                quote: "Their social media strategies are unmatched. They don't just chase likes, they understand how to drive actual sales through content. The best in Nairobi, hands down.",
                author: "James O.",
                role: "Marketing Director, Safari Adventures"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl relative">
                <div className="text-primary/20 text-6xl font-serif absolute top-4 left-6">"</div>
                <p className="text-gray-700 font-medium mb-8 relative z-10 pt-4 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-bold text-secondary">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8">
            READY TO TAKE OVER?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Stop settling for mediocre digital results. Partner with Imperial Enterprise and build a brand that commands attention.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-gray-900 transition-all hover:scale-105 shadow-2xl">
            Book Your Strategy Call
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
