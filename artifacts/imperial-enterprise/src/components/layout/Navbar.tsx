import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import {
  Menu, X, ChevronDown, Server, Globe, MessageCircle,
  Phone, TrendingUp, Code2, Search, Share2, Palette,
  ShoppingCart, Cloud, Cpu, Database, Mail, Zap, Shield,
  RefreshCw, Tag, Star, FileSearch, ArrowRight, Package, Linkedin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const logoImg = "/logo-transparent.png";
const BASE = "https://truehost.co.ke/cloud/aff.php?aff=2464";

const serviceItems = [
  { icon: <TrendingUp size={18} />, name: "Digital Marketing", desc: "Google Ads, Meta Ads & paid campaigns", href: "/services" },
  { icon: <Search size={18} />, name: "SEO Optimisation", desc: "Rank higher, get more organic traffic", href: "/services" },
  { icon: <Code2 size={18} />, name: "Web Development", desc: "Fast, custom-built websites & web apps", href: "/services" },
  { icon: <Palette size={18} />, name: "Brand Identity", desc: "Logo, visual identity & brand strategy", href: "/services" },
  { icon: <Share2 size={18} />, name: "Social Media", desc: "Content, community & growth strategy", href: "/services" },
  { icon: <ShoppingCart size={18} />, name: "E-commerce", desc: "Online stores built to convert visitors", href: "/services" },
];

const hostingItems = [
  { icon: <Server size={16} />, name: "Linux Hosting", desc: "From KSh 2,500/yr", href: `${BASE}/web-hosting/index` },
  { icon: <Zap size={16} />, name: "WordPress Hosting", desc: "Optimised for speed", href: `${BASE}/optimized-wordpress-hosting` },
  { icon: <Cloud size={16} />, name: "Cloud Hosting", desc: "Scalable infrastructure", href: `${BASE}/cloudhosting` },
  { icon: <Cpu size={16} />, name: "Linux VPS", desc: "Full root access & power", href: `${BASE}/virtualserverlinux-hosting` },
  { icon: <Database size={16} />, name: "Dedicated Servers", desc: "Maximum performance", href: `${BASE}/dedicated-servers` },
  { icon: <Package size={16} />, name: "Reseller Hosting", desc: "Start your own hosting biz", href: `${BASE}/reseller-hosting` },
  { icon: <Mail size={16} />, name: "Business Email", desc: "Professional @yourdomain", href: `${BASE}/business-email` },
  { icon: <Mail size={16} />, name: "Titan Email", desc: "Next-gen email platform", href: `${BASE}/titan-business-email-hosting` },
  { icon: <Shield size={16} />, name: "SiteLock", desc: "Malware & security scans", href: `${BASE}/sitelock` },
  { icon: <RefreshCw size={16} />, name: "CodeGuard", desc: "Daily website backups", href: `${BASE}/codeguard` },
];

const domainItems = [
  { icon: <Globe size={16} />, name: "Register a Domain", desc: ".co.ke from KSh 999/yr", href: `${BASE}/buy-domain-kenya`, hot: true },
  { icon: <RefreshCw size={16} />, name: "Transfer Domain", desc: "Free transfer assistance", href: `${BASE}/transfer-domain-kenya`, hot: false },
  { icon: <Tag size={16} />, name: "Domain Promos", desc: "Limited-time deals", href: `${BASE}/domain-registration/promos`, hot: true },
  { icon: <FileSearch size={16} />, name: "WHOIS Lookup", desc: "Check domain ownership", href: `${BASE}/whois-lookup-kenya`, hot: false },
  { icon: <Star size={16} />, name: "Premium Domains", desc: "Short, memorable names", href: `${BASE}/domain-registration/premium-domain`, hot: false },
  { icon: <Globe size={16} />, name: "New Extensions", desc: ".tech .store .africa +more", href: `${BASE}/new-domain-extensions`, hot: false },
];

type DropdownKey = "services" | "hosting" | "domains" | null;

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = (key: DropdownKey) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenDropdown(key);
  };
  const closeMenu = () => {
    timerRef.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Growth Resources", href: "/blog" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Newsletter", href: "https://newsletter.imperialenterprise.co.ke", external: true },
    { name: "Contact", href: "/contact" },
  ];

  const isHostingActive = location === "/hosting" || location === "/domains";

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/97 backdrop-blur-lg border-b border-gray-100 shadow-md py-0"
          : "bg-white py-0"
      }`}>

        {/* Top utility bar */}
        <div className="bg-secondary text-white hidden lg:block">
          <div className="container mx-auto px-6 flex items-center justify-between py-1.5">
            <p className="text-xs text-blue-200 font-medium">
              Nairobi's Premier Digital Growth Agency — Websites · Hosting · Domains
            </p>
            <div className="flex items-center gap-6">
              <a href="tel:+254703823398" className="flex items-center gap-1.5 text-xs text-blue-100 hover:text-white transition-colors font-medium">
                <Phone size={12} />
                +254 703 823 398
              </a>
              <a
                href="https://wa.me/+254703823398"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#25D366] hover:text-white transition-colors font-bold"
              >
                <MessageCircle size={12} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Main nav bar */}
        <div className="container mx-auto px-6 flex items-center justify-between py-3 md:py-4">
          <Link href="/" className="flex items-center shrink-0">
            <img src={logoImg} alt="Imperial Enterprise" className="h-10 md:h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">

            {/* Home */}
            <Link href="/" className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors hover:bg-primary/10 hover:text-primary ${location === "/" ? "text-primary bg-primary/10" : "text-secondary"}`}>
              Home
            </Link>

            {/* Services Link */}
            <Link href="/services" className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors hover:bg-primary/10 hover:text-primary ${location === "/services" ? "text-primary bg-primary/10" : "text-secondary"}`}>
              Services
            </Link>



            {/* Domains Dropdown */}
            <div className="relative" onMouseEnter={() => openMenu("domains")} onMouseLeave={closeMenu}>
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-colors hover:bg-primary/10 hover:text-primary ${location === "/domains" ? "text-primary bg-primary/10" : "text-secondary"}`}
              >
                Domains
                <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === "domains" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openDropdown === "domains" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    onMouseEnter={() => openMenu("domains")}
                    onMouseLeave={closeMenu}
                    className="absolute top-full left-0 mt-2 w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    <div className="p-3">
                      <a href={domainItems[0].href} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-primary/5 group transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gray-100 text-secondary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          {domainItems[0].icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">{domainItems[0].name}</p>
                            <span className="text-[9px] font-black uppercase tracking-wide bg-red-100 text-red-500 px-1.5 py-0.5 rounded-full">HOT</span>
                          </div>
                          <p className="text-xs text-gray-400">{domainItems[0].desc}</p>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct links */}
            {navItems.slice(1).map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors hover:bg-primary/10 hover:text-primary text-secondary`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors hover:bg-primary/10 hover:text-primary ${location === link.href ? "text-primary bg-primary/10" : "text-secondary"}`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/+254703823398"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-nav-whatsapp"
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#1EBE5C] transition-all hover:-translate-y-0.5 shadow-sm"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
            <Link
              href="/contact"
              data-testid="link-nav-get-started"
              className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide hover:bg-blue-700 transition-all hover:-translate-y-0.5 shadow-md shadow-primary/30"
            >
              Book Strategy Call
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-secondary p-2"
            data-testid="button-mobile-menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-50 lg:hidden flex flex-col overflow-y-auto"
          >
            <div className="p-5 flex justify-between items-center border-b border-gray-100 bg-secondary">
              <img src={logoImg} alt="Imperial Enterprise" className="h-9 w-auto object-contain brightness-0 invert" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="button-mobile-menu-close"
                className="text-white p-2 bg-white/10 rounded-full"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col px-5 py-6 gap-1 flex-1">

              {/* Direct Links */}
              {[{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Solutions", href: "/portfolio" }, { name: "Blog", href: "/blog" }, { name: "Contact", href: "/contact" }].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-bold px-4 py-3 rounded-xl transition-colors ${location === link.href ? "text-primary bg-primary/10" : "text-secondary hover:bg-gray-50"}`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Services accordion */}
              <div>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
                  className="w-full flex items-center justify-between text-lg font-bold text-secondary px-4 py-3 rounded-xl hover:bg-gray-50"
                >
                  Services
                  <ChevronDown size={18} className={`transition-transform ${mobileExpanded === "services" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === "services" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pl-4 pb-2 grid grid-cols-2 gap-2">
                        {serviceItems.map((item) => (
                          <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-primary/10"
                          >
                            <span className="text-primary">{item.icon}</span>
                            <span className="text-sm font-semibold text-secondary">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Hosting accordion */}
              <div>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === "hosting" ? null : "hosting")}
                  className="w-full flex items-center justify-between text-lg font-bold text-secondary px-4 py-3 rounded-xl hover:bg-gray-50"
                >
                  Hosting
                  <ChevronDown size={18} className={`transition-transform ${mobileExpanded === "hosting" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === "hosting" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pl-4 pb-2 space-y-1">
                        {hostingItems.map((item) => (
                          <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5"
                          >
                            <span className="text-primary">{item.icon}</span>
                            <div>
                              <p className="text-sm font-bold text-secondary">{item.name}</p>
                              <p className="text-xs text-gray-400">{item.desc}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Domains accordion */}
              <div>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === "domains" ? null : "domains")}
                  className="w-full flex items-center justify-between text-lg font-bold text-secondary px-4 py-3 rounded-xl hover:bg-gray-50"
                >
                  Domains
                  <ChevronDown size={18} className={`transition-transform ${mobileExpanded === "domains" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === "domains" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="pl-4 pb-2 space-y-1">
                        {domainItems.map((item) => (
                          <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5"
                          >
                            <span className="text-primary">{item.icon}</span>
                            <div>
                              <p className="text-sm font-bold text-secondary">{item.name}</p>
                              <p className="text-xs text-gray-400">{item.desc}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Strip */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-4 mb-3">Get in Touch</p>
                <div className="grid grid-cols-2 gap-2 px-1">
                  <a
                    href="https://wa.me/+254703823398"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#25D366]/10 text-[#25D366] font-bold hover:bg-[#25D366] hover:text-white transition-colors"
                  >
                    <MessageCircle size={18} />
                    <span className="text-sm">WhatsApp</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/martinmwirigi"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0077B5]/10 text-[#0077B5] font-bold hover:bg-[#0077B5] hover:text-white transition-colors"
                  >
                    <Linkedin size={18} />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:info@imperialenterprise.co.ke"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-colors"
                  >
                    <Mail size={18} />
                    <span className="text-sm">Email Us</span>
                  </a>
                  <a
                    href="tel:+254703823398"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-colors"
                  >
                    <Phone size={18} />
                    <span className="text-sm">Call Us</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-blue-700 transition-colors shadow-lg"
              >
                Book a Free Strategy Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+254703823398"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="link-floating-whatsapp"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-[#25D366]/40 hover:bg-[#1EBE5C] transition-all hover:-translate-y-1 font-bold text-sm"
      >
        <MessageCircle size={22} />
        Chat with us
      </a>
    </>
  );
}
