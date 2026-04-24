import { motion } from "framer-motion";
import { Link } from "wouter";

export default function About() {
  const stats = [
    { label: "Years in Business", value: "5+" },
    { label: "Clients Served", value: "120+" },
    { label: "Campaigns Run", value: "450+" },
    { label: "Countries Reached", value: "4" },
  ];

  const values = [
    { title: "Innovation", desc: "We don't follow trends. We set them. Always pushing the boundaries of what's possible." },
    { title: "Excellence", desc: "Good enough is never enough. We demand world-class quality in every pixel and every campaign." },
    { title: "Integrity", desc: "Total transparency. Real numbers. Honest strategies. We build partnerships, not just client lists." },
    { title: "Impact", desc: "We exist to drive revenue, growth, and tangible business results. Vanity metrics don't pay the bills." },
  ];

  const team = [
    { name: "Michael Ochieng", role: "Founder & Strategy Lead", image: "/team-1.png" },
    { name: "Sarah Wanjiku", role: "Creative Director", image: "/team-2.png" },
    { name: "David Kimani", role: "Lead Developer", image: "/team-3.png" },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      
      {/* Hero / Mission */}
      <section className="container mx-auto px-6 mb-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black text-secondary tracking-tight mb-8 leading-tight">
            WE PUT KENYAN BUSINESSES ON THE <span className="text-primary">GLOBAL MAP.</span>
          </h1>
          <div className="w-24 h-2 bg-primary mb-12"></div>
          <div className="prose prose-lg text-gray-600 max-w-3xl">
            <p className="text-xl font-medium text-secondary mb-6 leading-relaxed">
              Imperial Enterprise was founded with a singular, aggressive mission: to elevate the standard of digital presence in East Africa.
            </p>
            <p>
              For too long, local businesses have settled for generic, uninspired digital marketing and web design. We saw incredible Kenyan companies with world-class products, hampered by sub-par digital identities that didn't reflect their true value.
            </p>
            <p>
              We built Imperial Enterprise to bridge that gap. We combine Silicon Valley-level technical execution with a deep, nuanced understanding of the Nairobi hustle and the East African consumer. We are not just an agency; we are your growth partners, your digital architects, and your competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary py-20 mb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-4xl md:text-6xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base font-bold uppercase tracking-widest text-white/80">{stat.label}</div>
              </div>
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
              className="relative pl-8 border-l-4 border-primary/20 hover:border-primary transition-colors"
            >
              <h3 className="text-2xl font-bold text-secondary mb-4">{value.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-32 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight mb-6">
              THE COMMANDERS
            </h2>
            <p className="text-lg text-gray-600">
              A lean, elite team of digital specialists obsessed with your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/5] bg-gray-200 mb-6 overflow-hidden rounded-sm relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <h3 className="text-2xl font-bold text-secondary">{member.name}</h3>
                <p className="text-primary font-bold uppercase tracking-wider text-sm mt-2">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 mt-32 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight mb-8">
          WANT TO JOIN THE RANKS?
        </h2>
        <Link href="/contact" className="inline-block bg-secondary text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-primary transition-colors shadow-xl">
          Work With Us
        </Link>
      </section>
      
    </div>
  );
}
