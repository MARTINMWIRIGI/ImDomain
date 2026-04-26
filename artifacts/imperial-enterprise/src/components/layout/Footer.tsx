import { Link } from "wouter";
import { Linkedin, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
const logoImg = "/logo-transparent.png";
const BASE = "https://imperialenterprise.co.ke";

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-24 pb-12 border-t-4 border-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <img
                src={logoImg}
                alt="Imperial Enterprise"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Dominating the Digital Space — One Brand at a Time. We help Kenyan businesses outpace their competition with world-class digital strategies, web hosting, and domain solutions.
            </p>
            {/* Connected social & contact icons only */}
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://wa.me/+254703823398"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-whatsapp"
                className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                title="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/martinmwirigi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#0077B5] hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:info@imperialenterprise.co.ke"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
                title="Email Us"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+254703823398"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
                title="Call Us"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-primary transition-colors text-sm">Our Solutions</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Hosting & Domains</h4>
            <ul className="space-y-3">
              <li><Link href="/hosting" className="text-gray-400 hover:text-primary transition-colors text-sm">Web Hosting</Link></li>
              <li><Link href="/domains" className="text-gray-400 hover:text-primary transition-colors text-sm">Domain Names</Link></li>
              <li>
                <a href={`${BASE}/buy-domain-kenya`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  .co.ke Domains
                </a>
              </li>
              <li>
                <a href={`${BASE}/transfer-domain-kenya`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Domain Transfer
                </a>
              </li>
              <li>
                <a href={`${BASE}/web-hosting/index`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Free SSL Certificates
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider font-bold">Call / WhatsApp</p>
                  <a href="tel:+254703823398" className="text-sm text-gray-300 hover:text-primary transition-colors block">+254 703 823 398</a>
                  <a
                    href="https://wa.me/+254703823398"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#25D366] font-bold mt-1.5 hover:text-[#1EBE5C] transition-colors"
                  >
                    <MessageCircle size={12} />
                    Chat on WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider font-bold">Email Us</p>
                  <a href="mailto:info@imperialenterprise.co.ke" className="text-sm text-gray-300 hover:text-primary transition-colors break-all">info@imperialenterprise.co.ke</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider font-bold">Location</p>
                  <p className="text-sm text-gray-300">Nairobi, Kenya</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Domain strip teaser */}
        <div className="mb-12 py-6 px-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6 items-center">
            {[
              { ext: ".co.ke", price: "KSh 999" },
              { ext: ".com", price: "KSh 1,200" },
              { ext: ".africa", price: "KSh 1,800" },
              { ext: ".shop", price: "KSh 399" },
            ].map((d) => (
              <div key={d.ext} className="text-center">
                <p className="text-white font-black text-lg">{d.ext}</p>
                <p className="text-primary text-xs font-bold">{d.price}/yr</p>
              </div>
            ))}
          </div>
          <a
            href={`${BASE}/buy-domain-kenya`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-primary text-white px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-blue-700 transition-colors"
          >
            Search Domains
          </a>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center gap-2 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2026 All Rights Reserved
          </p>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
            IMPERIAL ENTERPRISE &mdash; POWERING WEBSITES
          </p>
        </div>
      </div>
    </footer>
  );
}
