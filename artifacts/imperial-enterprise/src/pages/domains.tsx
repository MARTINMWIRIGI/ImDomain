import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Search, Globe, ShieldCheck, ArrowRight, CheckCircle2, RefreshCw } from "lucide-react";

const tlds = [
  { ext: ".co.ke", price: "999", badge: "Kenyan Favorite", featured: true },
  { ext: ".ke", price: "999", badge: null, featured: false },
  { ext: ".com", price: "1,200", badge: "Most Popular", featured: true },
  { ext: ".org", price: "1,500", badge: null, featured: false },
  { ext: ".net", price: "1,400", badge: null, featured: false },
  { ext: ".africa", price: "1,800", badge: "Pan-African", featured: true },
  { ext: ".shop", price: "399", badge: "Great Value", featured: true },
  { ext: ".online", price: "299", badge: null, featured: false },
  { ext: ".store", price: "499", badge: null, featured: false },
  { ext: ".tech", price: "699", badge: null, featured: false },
  { ext: ".biz", price: "1,100", badge: null, featured: false },
  { ext: ".info", price: "800", badge: null, featured: false },
];

const whyMatters = [
  {
    icon: <Globe size={24} />,
    title: "Your Digital Address",
    desc: "A great domain name is the foundation of your brand online. Choose one that your customers remember.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Instant Credibility",
    desc: ".co.ke or .com domains signal to Kenyan customers that you're a legitimate, established business.",
  },
  {
    icon: <Search size={24} />,
    title: "SEO Advantage",
    desc: "Local domains like .co.ke can help you rank higher in Kenyan Google searches, driving more organic traffic.",
  },
  {
    icon: <RefreshCw size={24} />,
    title: "Easy Renewals",
    desc: "We'll remind you before your domain expires so you never lose the name you've built your brand around.",
  },
];

export default function Domains() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearched(true);
    }
  };

  const cleanQuery = searchQuery.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="min-h-screen bg-white pt-28 pb-24">

      {/* Hero / Search */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-primary/20 text-primary text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Domain Registration Kenya
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
              Find Your Perfect <br />
              <span className="text-primary">Domain Name</span>
            </h1>
            <p className="text-gray-300 text-lg mb-12 max-w-xl mx-auto">
              Secure your brand's online identity today. .co.ke domains from just KSh 999/year.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-0 bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden border-2 border-white/10">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setSearched(false); }}
                  placeholder="yourbusiness.co.ke"
                  data-testid="input-domain-search"
                  className="flex-1 px-6 py-5 text-secondary text-lg font-medium placeholder:text-gray-300 focus:outline-none rounded-l-2xl"
                />
                <button
                  type="submit"
                  data-testid="button-domain-search"
                  className="bg-primary text-white px-8 py-5 font-black uppercase tracking-wider text-sm hover:bg-amber-600 transition-colors flex items-center gap-2 justify-center shrink-0"
                >
                  <Search size={18} />
                  Check
                </button>
              </div>
            </form>

            {/* Search Result Placeholder */}
            {searched && cleanQuery && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 max-w-2xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"
              >
                <p className="text-white text-sm mb-3 font-semibold">Results for <span className="text-primary font-black">{cleanQuery}</span></p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[".co.ke", ".com", ".africa", ".shop"].map((ext) => (
                    <div key={ext} className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-3">
                      <span className="text-white font-medium text-sm">{cleanQuery}{ext}</span>
                      <Link
                        href="/contact"
                        className="text-xs bg-primary text-white px-3 py-1.5 rounded-md font-bold hover:bg-amber-600 transition-colors"
                      >
                        Register
                      </Link>
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-xs mt-3">Contact us to confirm availability and complete registration</p>
              </motion.div>
            )}

            <p className="text-gray-400 text-sm mt-6">
              Cheapest .CO.KE Domains · Instant Setup · Free DNS Management
            </p>
          </motion.div>
        </div>
      </section>

      {/* TLD Pricing Grid */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-secondary tracking-tight mb-4">
              DOMAIN PRICING
            </h2>
            <p className="text-gray-500 text-lg">All prices per year, in Kenyan Shillings (KSh)</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {tlds.map((tld, i) => (
              <motion.div
                key={tld.ext}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative rounded-2xl p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border ${
                  tld.featured
                    ? "bg-white border-primary/30 shadow-md"
                    : "bg-white border-gray-100 shadow-sm"
                }`}
              >
                {tld.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-wider bg-primary text-white px-2.5 py-1 rounded-full whitespace-nowrap">
                    {tld.badge}
                  </span>
                )}
                <div className={`text-2xl md:text-3xl font-black tracking-tight mb-2 ${tld.featured ? "text-secondary" : "text-gray-700"}`}>
                  {tld.ext}
                </div>
                <div className="text-sm text-gray-400 mb-3 font-medium">From just</div>
                <div className="text-xl font-black text-primary mb-1">KSh {tld.price}</div>
                <div className="text-xs text-gray-400 mb-5">/ 1st Year</div>
                <Link
                  href="/contact"
                  data-testid={`button-domain-register-${tld.ext.replace(".", "")}`}
                  className={`block w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    tld.featured
                      ? "bg-secondary text-white hover:bg-primary"
                      : "bg-gray-100 text-secondary hover:bg-secondary hover:text-white"
                  }`}
                >
                  Register
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Domain Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-secondary tracking-tight mb-4">
              WHY YOUR DOMAIN NAME MATTERS
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Your domain isn't just an address — it's your first impression, your brand, and your competitive edge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyMatters.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Transfer Banner */}
      <section className="py-16 bg-amber-50 border-y border-amber-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-secondary mb-3">
                Already have a domain elsewhere?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Transfer your domain to Imperial Enterprise and manage everything — hosting, email, and domain — in one place. Fast, simple, no downtime.
              </p>
              <ul className="mt-4 space-y-2">
                {["Free domain transfer assistance", "No downtime during transfer", "Keep your existing email and DNS records"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <CheckCircle2 size={15} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                data-testid="link-domain-transfer"
                className="flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-primary transition-all hover:-translate-y-0.5 shadow-lg"
              >
                Transfer Domain
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
            BUNDLE DOMAIN + HOSTING <br />
            <span className="text-primary">& SAVE MORE</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Get a free domain name when you sign up for our Business or Enterprise hosting plan. One provider, one invoice, zero hassle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/hosting"
              data-testid="link-domains-view-hosting"
              className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-amber-600 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              View Hosting Plans
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              data-testid="link-domains-contact"
              className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-white/20 transition-all"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
