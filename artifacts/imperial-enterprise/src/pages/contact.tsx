import { SEOHead, SEO_CONFIG } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight, MessageCircle, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully",
        description: "A digital strategist will be in touch within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <SEOHead {...SEO_CONFIG.contact} />
    <div className="pt-28 pb-0 min-h-screen bg-white">

      {/* Page Header */}
      <div className="container mx-auto px-6 mb-10">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-secondary tracking-tight mb-4 uppercase"
          >
            INITIATE <span className="text-primary">CONTACT</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 font-medium"
          >
            Ready to dominate? Drop us a line and let's map out your path to the top.
          </motion.p>
        </div>
      </div>

      {/* Contact Quick Bar — phone, email, WhatsApp, LinkedIn in one row */}
      <div className="container mx-auto px-6 mb-10">
        <div className="flex flex-wrap items-center gap-3 bg-gray-50 rounded-2xl px-6 py-4 border border-gray-100">
          <a
            href="tel:+254703823398"
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all group"
          >
            <Phone size={15} className="text-primary group-hover:text-white transition-colors" />
            +254 703 823 398
          </a>
          <a
            href="mailto:info@imperialenterprise.co.ke"
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all group"
          >
            <Mail size={15} className="text-primary group-hover:text-white transition-colors" />
            info@imperialenterprise.co.ke
          </a>
          <a
            href="https://wa.me/+254703823398"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl px-4 py-2.5 text-sm font-bold text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all"
          >
            <MessageCircle size={15} />
            WhatsApp Us
          </a>
          <a
            href="https://www.linkedin.com/in/martinmwirigi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0077B5]/10 border border-[#0077B5]/30 rounded-xl px-4 py-2.5 text-sm font-bold text-[#0077B5] hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <span className="flex items-center gap-2 text-sm text-gray-500 ml-auto">
            <MapPin size={14} className="text-primary" />
            Nairobi CBD, Kenya
          </span>
        </div>
      </div>

      {/* Full-width Satellite Map */}
      <div className="w-full mb-12 relative">
        <div className="bg-secondary px-6 py-3 flex items-center gap-2">
          <MapPin size={14} className="text-primary" />
          <span className="text-xs font-bold text-white uppercase tracking-widest">Imperial Enterprise — Nairobi, Kenya</span>
          <a
            href="https://maps.google.com/?q=Nairobi+CBD+Kenya"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-xs font-bold text-primary hover:text-white transition-colors uppercase tracking-wider"
          >
            Open in Google Maps →
          </a>
        </div>
        <iframe
          title="Imperial Enterprise Nairobi Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.78738754628!2d36.75218219511737!3d-1.2920659999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C+Kenya!5e1!3m2!1sen!2ske!4v1714000000000!5m2!1sen!2ske"
          width="100%"
          height="380"
          style={{ border: 0, display: "block" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100">
            <h2 className="text-3xl font-black text-secondary mb-2">Book a Free Strategy Call</h2>
            <p className="text-gray-500 mb-8">Fill in the form and we'll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+254 700 000 000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary uppercase tracking-wider">Service of Interest</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none">
                    <option value="">Select a service...</option>
                    <option value="seo">SEO Services</option>
                    <option value="gbp">Google Business Profile</option>
                    <option value="web">Website Design & Development</option>
                    <option value="ai">AI Automations</option>
                    <option value="content">Content & SEO Creation</option>
                    <option value="consulting">Consulting Services</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="social">Social Media</option>
                    <option value="sales">Sales Training & Certifications</option>
                    <option value="hosting">Web Hosting / Domains</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary uppercase tracking-wider">Project Details</label>
                <textarea
                  rows={5}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your business goals and current challenges..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <ArrowRight size={20} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
