import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Server, Globe, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@assets/Gemini_Generated_Image_okqsneokqsneokqs_1_1777048351938.png";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hostingDropdownOpen, setHostingDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const hostingLinks = [
    { name: "Web Hosting", href: "/hosting", icon: <Server size={15} />, desc: "From KSh 2,500/yr" },
    { name: "Domain Names", href: "/domains", icon: <Globe size={15} />, desc: ".co.ke from KSh 999/yr" },
  ];

  const isHostingActive = location === "/hosting" || location === "/domains";

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-2"
            : "bg-white/80 backdrop-blur-sm py-3"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo Image */}
          <Link href="/" className="group flex items-center">
            <img
              src={logoImg}
              alt="Imperial Enterprise"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold tracking-wide uppercase transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Hosting & Domains Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHostingDropdownOpen(true)}
              onMouseLeave={() => setHostingDropdownOpen(false)}
            >
              <button
                data-testid="button-nav-hosting-dropdown"
                className={`flex items-center gap-1 text-sm font-semibold tracking-wide uppercase transition-colors hover:text-primary ${
                  isHostingActive ? "text-primary" : "text-secondary"
                }`}
              >
                Hosting
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${hostingDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {hostingDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden"
                  >
                    {hostingLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-colors group ${
                          location === item.href ? "bg-primary/5" : ""
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          location === item.href ? "bg-primary text-white" : "bg-gray-100 text-secondary group-hover:bg-primary group-hover:text-white"
                        } transition-colors`}>
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-secondary">{item.name}</p>
                          <p className="text-xs text-primary font-medium">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/+254703823398"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-nav-whatsapp"
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#1EBE5C] transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>

            <Link
              href="/contact"
              data-testid="link-nav-get-started"
              className="bg-secondary text-white px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide hover:bg-primary transition-all transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </nav>

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
            <div className="p-6 flex justify-between items-center border-b border-gray-100">
              <img src={logoImg} alt="Imperial Enterprise" className="h-9 w-auto object-contain" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="button-mobile-menu-close"
                className="text-secondary p-2 bg-gray-50 rounded-full"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col px-6 py-10 gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl font-black tracking-tight ${
                    location === link.href ? "text-primary" : "text-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Hosting Section in Mobile */}
              <div className="pt-2 border-t border-gray-100">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-5">Hosting & Domains</p>
                {hostingLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-4 py-3 ${
                      location === item.href ? "text-primary" : "text-secondary"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-secondary">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xl font-black">{item.name}</p>
                      <p className="text-xs text-primary font-bold">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* WhatsApp in Mobile */}
              <a
                href="https://wa.me/+254703823398"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 py-3 text-[#25D366] font-black text-2xl"
              >
                <MessageCircle size={28} />
                Chat on WhatsApp
              </a>
            </div>
            <div className="mt-auto p-6">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-wide"
              >
                Book a Consultation
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
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-[#25D366]/40 hover:bg-[#1EBE5C] hover:shadow-[#25D366]/60 transition-all hover:-translate-y-1 font-bold text-sm"
      >
        <MessageCircle size={22} />
        Chat with us
      </a>
    </>
  );
}
