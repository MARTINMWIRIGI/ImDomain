import { SEOHead } from "@/components/SEOHead";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { blogArticles } from "@/data/blog-data";

// Simple markdown-to-JSX renderer (no extra dependencies needed)
function renderMarkdown(md: string) {
  return md
    .split("\n")
    .filter(line => !line.startsWith("<!--"))
    .map((line, i) => {
      if (line.startsWith("### ")) return <h3 key={i} className="text-xl font-bold text-secondary mt-8 mb-3">{line.slice(4)}</h3>;
      if (line.startsWith("## ")) return <h2 key={i} className="text-2xl font-black text-secondary mt-10 mb-4">{line.slice(3)}</h2>;
      if (line.startsWith("# ")) return <h1 key={i} className="text-3xl font-black text-secondary mt-8 mb-4">{line.slice(2)}</h1>;
      if (line.startsWith("- ")) return <li key={i} className="ml-6 text-gray-700 leading-relaxed list-disc">{line.slice(2)}</li>;
      if (line.match(/^\d+\./)) return <li key={i} className="ml-6 text-gray-700 leading-relaxed list-decimal">{line.replace(/^\d+\.\s*/, "")}</li>;
      if (line.startsWith("**") && line.endsWith("**")) return <p key={i} className="font-bold text-secondary my-2">{line.slice(2, -2)}</p>;
      if (line.trim() === "") return <br key={i} />;
      return <p key={i} className="text-gray-700 leading-relaxed mb-3">{line}</p>;
    });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-white text-center">
        <h1 className="text-3xl font-bold text-secondary">Article Not Found</h1>
        <Link href="/blog" className="text-primary mt-4 inline-block">← Back to Blog</Link>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Imperial Enterprise"
    },
    "keywords": article.keywords,
    "articleBody": article.content
  };

  return (
    <>
      <SEOHead
        title={`${article.title} | Imperial Enterprise Blog`}
        description={article.excerpt}
        keywords={article.keywords}
        canonicalPath={`/blog/${article.slug}`}
        schema={articleSchema}
      />
      <div className="pt-32 pb-24 min-h-screen bg-white">
        <article className="container mx-auto px-6 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/blog">
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-8 hover:underline cursor-pointer">
                <ArrowLeft size={16} /> Back to Blog
              </span>
            </Link>

            <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              {article.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-black text-secondary tracking-tight mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-12 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-1"><User size={14} /> {article.author}</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
            </div>

            <div className="prose prose-lg max-w-none">
              {renderMarkdown(article.content)}
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 bg-secondary rounded-2xl text-center">
              <h3 className="text-2xl font-black text-white mb-3">Ready to Grow Your Business?</h3>
              <p className="text-white/70 mb-6">Get expert digital marketing, SEO, and web development from Imperial Enterprise.</p>
              <Link href="/contact">
                <span className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors cursor-pointer">
                  Book a Free Strategy Call
                </span>
              </Link>
            </div>
          </motion.div>
        </article>
      </div>
    </>
  );
}
