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

            {/* Map Placeholder */}
            <div className="h-64 bg-gray-100 rounded-2xl border border-gray-200 relative overflow-hidden flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')] opacity-50"></div>
              <div className="text-center relative z-10">
                <MapPin size={32} className="text-gray-400 mx-auto mb-2 group-hover:text-primary transition-colors" />
                <span className="font-bold text-gray-500 group-hover:text-secondary transition-colors uppercase tracking-widest text-sm">View on Maps</span>
              </div>
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
