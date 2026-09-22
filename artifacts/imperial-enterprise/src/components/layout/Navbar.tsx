import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Phone, Mail, Linkedin, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const logoImg = "/logo-transparent.png";

const navLinks = [
  { name: "Home",      href: "/",          external: false },
  { name: "About",     href: "/about",     external: false },
  { name: "Services",  href: "/services",  external: false },
  { name: "Hosting",   href: "/hosting",   external: false },
  { name: "Domains",   href: "/domains",   external: false },

  { name: "Contact",   href: "/contact",   external: false },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/97 backdrop-blur-lg border-b border-gray-100 shadow-md py-0" : "bg-white py-0"
      }`}>

        {/* Top utility bar */}
        <div className="bg-secondary text-white hidden lg:block">
          <div className="container mx-auto px-6 flex items-center justify-between py-1.5">
            <p className="text-xs text-blue-200 font-medium">
              Nairobi's Premier Digital Growth Agency — Websites · Hosting · Domains
            </p>
            <div className="flex items-center gap-6">
              <a href="tel:+254703823398" className="flex items-center gap-1.5 text-xs text-blue-100 hover:text-white transition-colors font-medium">
                <Phone size={12} /> +254 703 823 398
              </a>
              <a href="https://wa.me/+254703823398" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#25D366] hover:text-white transition-colors font-bold">
                <MessageCircle size={12} /> WhatsApp Us
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
            {navLinks.map((link) =>
              link.external ? (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-colors hover:bg-primary/10 hover:text-primary text-secondary">
                  <Globe size={13} className="shrink-0" />
                  {link.name}
                </a>
              ) : (
                <Link key={link.name} href={link.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors hover:bg-primary/10 hover:text-primary ${
                    location === link.href ? "text-primary bg-primary/10" : "text-secondary"
                  }`}>
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="https://wa.me/+254703823398" target="_blank" rel="noopener noreferrer"
              data-testid="link-nav-whatsapp"
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#1EBE5C] transition-all hover:-translate-y-0.5 shadow-sm">
              <MessageCircle size={15} /> WhatsApp
            </a>
            <Link href="/contact" data-testid="link-nav-get-started"
              className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide hover:bg-blue-700 transition-all hover:-translate-y-0.5 shadow-md shadow-primary/30">
              Get Started
            </Link>
          </div>

          <button className="lg:hidden text-secondary p-2" data-testid="button-mobile-menu"
            onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-50 lg:hidden flex flex-col overflow-y-auto">
            <div className="p-5 flex justify-between items-center border-b border-gray-100 bg-secondary">
              <img src={logoImg} alt="Imperial Enterprise" className="h-9 w-auto object-contain brightness-0 invert" />
              <button onClick={() => setIsMobileMenuOpen(false)} data-testid="button-mobile-menu-close"
                className="text-white p-2 bg-white/10 rounded-full">
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col px-5 py-6 gap-1 flex-1">
              {navLinks.map((link) =>
                link.external ? (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-lg font-bold px-4 py-3 rounded-xl text-secondary hover:bg-gray-50 transition-colors">
                    <Globe size={18} className="text-primary shrink-0" />
                    {link.name}
                  </a>
                ) : (
                  <Link key={link.name} href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-bold px-4 py-3 rounded-xl transition-colors ${
                      location === link.href ? "text-primary bg-primary/10" : "text-secondary hover:bg-gray-50"
                    }`}>
                    {link.name}
                  </Link>
                )
              )}

              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-4 mb-3">Get in Touch</p>
                <div className="grid grid-cols-2 gap-2 px-1">
                  <a href="https://wa.me/+254703823398" target="_blank" rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#25D366]/10 text-[#25D366] font-bold hover:bg-[#25D366] hover:text-white transition-colors">
                    <MessageCircle size={18} /><span className="text-sm">WhatsApp</span>
                  </a>
                  <a href="https://www.linkedin.com/in/martinmwirigi" target="_blank" rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0077B5]/10 text-[#0077B5] font-bold hover:bg-[#0077B5] hover:text-white transition-colors">
                    <Linkedin size={18} /><span className="text-sm">LinkedIn</span>
                  </a>
                  <a href="mailto:info@imperialenterprise.co.ke" onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-colors">
                    <Mail size={18} /><span className="text-sm">Email Us</span>
                  </a>
                  <a href="tel:+254703823398" onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-colors">
                    <Phone size={18} /><span className="text-sm">Call Us</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 border-t border-gray-100">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-blue-700 transition-colors shadow-lg">
                Book a Free Strategy Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/+254703823398" target="_blank" rel="noopener noreferrer"
        data-testid="link-floating-whatsapp"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-[#25D366]/40 hover:bg-[#1EBE5C] transition-all hover:-translate-y-1 font-bold text-sm">
        <MessageCircle size={22} /> Chat with us
      </a>
    </>
  );
}
