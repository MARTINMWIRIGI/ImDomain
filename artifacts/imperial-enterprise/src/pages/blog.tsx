import { SEOHead } from "@/components/SEOHead";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { blogArticles } from "@/data/blog-data";

export default function Blog() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Imperial Enterprise Blog",
    "description": "Expert insights on digital marketing, SEO, web hosting, and business strategy for Kenyan SMEs and startups",
    "url": "https://imperialenterprise.co.ke/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Imperial Enterprise"
    }
  };

  return (
    <>
      <SEOHead
        title="Blog | Digital Marketing, SEO, Business Strategy & Market Entry Insights | Imperial Enterprise"
        description="Expert insights on market entry, digital growth, business strategy, SEO, and scaling for Kenyan SMEs and startups. Actionable guides from Kenya's leading growth consultants."
        keywords="business blog Kenya, market entry insights, digital growth tips, SEO blog Kenya, startup strategy, business strategy Kenya, consulting blog"
        canonicalPath="/blog"
        schema={blogSchema}
      />
      <div className="pt-32 pb-24 min-h-screen bg-white">
        <section className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black text-secondary tracking-tight mb-4">
              THE IMPERIAL <span className="text-primary">BLOG</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mb-16">
              Expert insights, strategies, and guides to help Kenyan businesses dominate the digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/blog/${article.slug}`}>
                  <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="bg-gradient-to-br from-secondary to-secondary/80 p-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                      <span className="inline-block bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 relative z-10">
                        {article.category}
                      </span>
                      <h2 className="text-xl font-bold text-white leading-tight relative z-10 group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                          <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                        </div>
                        <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
