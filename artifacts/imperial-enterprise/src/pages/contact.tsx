import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
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
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6">
        
        <div className="max-w-4xl mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-secondary tracking-tight mb-6 uppercase"
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-secondary mb-8">Direct Lines</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Call Us</p>
                    <p className="text-lg font-bold text-secondary">+254 703 823 398</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Email</p>
                    <p className="text-lg font-bold text-secondary break-all">info@imperialenterprise.co.ke</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">HQ Location</p>
                    <p className="text-lg font-bold text-secondary">Nairobi CBD</p>
                    <p className="text-gray-500">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nairobi Satellite Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
              <div className="bg-secondary px-4 py-2.5 flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Nairobi, Kenya — Headquarters</span>
              </div>
              <iframe
                title="Imperial Enterprise Nairobi Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.78738754628!2d36.75218219511737!3d-1.2920659999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C+Kenya!5e1!3m2!1sen!2ske!4v1714000000000!5m2!1sen!2ske"
                width="100%"
                height="280"
                style={{ border: 0, display: "block" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.google.com/?q=Nairobi+CBD+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-primary/5 py-3 text-xs font-bold text-primary uppercase tracking-widest transition-colors border-t border-gray-100"
              >
                <MapPin size={12} /> Open in Google Maps
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
              <h2 className="text-3xl font-black text-secondary mb-8">Book a Free Strategy Call</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary uppercase tracking-wider">Service of Interest</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none">
                      <option value="">Select a service...</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="brand">Brand Identity</option>
                      <option value="web">Web Development</option>
                      <option value="social">Social Media</option>
                      <option value="strategy">Strategy Consulting</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary uppercase tracking-wider">Project Details</label>
                  <textarea 
                    rows={5}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-sm px-4 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your business goals and current challenges..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-secondary text-white py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? "Transmitting..." : "Send Dispatch"}
                  {!isSubmitting && <ArrowRight size={20} />}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
