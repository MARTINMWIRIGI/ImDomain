import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
}

/**
 * SEO Head Component - Updates document meta tags per page.
 * Place this at the top of each page component.
 * 
 * Usage:
 *   <SEOHead 
 *     title="Web Hosting Kenya | Imperial Enterprise"
 *     description="Fast, affordable web hosting..."
 *     keywords="web hosting Kenya, cheap hosting..."
 *     canonicalPath="/hosting"
 *   />
 */
export function SEOHead({ title, description, keywords, canonicalPath = "/", ogImage }: SEOHeadProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper to set or create meta tag
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    // Primary meta tags
    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);

    // Canonical URL
    const fullUrl = `https://imperialenterprise.co.ke${canonicalPath}`;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;

    // Open Graph
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", fullUrl, true);
    if (ogImage) setMeta("og:image", ogImage, true);

    // Twitter Card
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:url", fullUrl);
    if (ogImage) setMeta("twitter:image", ogImage);
  }, [title, description, keywords, canonicalPath, ogImage]);

  return null;
}

// ==============================================
// Pre-configured SEO data for each page
// ==============================================
export const SEO_CONFIG = {
  home: {
    title: "Imperial Enterprise | #1 Digital Marketing Agency & Web Hosting in Kenya",
    description: "Nairobi's premier digital growth agency. Web hosting from KSh 2,500/yr, domain registration from KSh 999/yr, SEO services, web development, AI automation & digital marketing for Kenyan businesses.",
    keywords: "digital marketing agency Nairobi, web hosting Kenya, SEO services Kenya, web development Kenya, domain registration Kenya, AI automation Kenya, best digital agency Kenya, Imperial Enterprise",
    canonicalPath: "/",
  },
  services: {
    title: "Digital Marketing, SEO & Web Development Services Kenya | Imperial Enterprise",
    description: "Full-service digital solutions: SEO optimization, Google Ads, social media marketing, web development, brand identity design, and AI automation. Trusted by Kenyan businesses and startups.",
    keywords: "SEO services Kenya, digital marketing services Nairobi, web development company Kenya, social media marketing Kenya, brand identity design Kenya, Google Ads Kenya, AI systems Kenya, business automation Nairobi",
    canonicalPath: "/services",
  },
  hosting: {
    title: "Best Web Hosting Kenya | Fast & Affordable from KSh 2,500/yr | Imperial Enterprise",
    description: "Reliable web hosting in Kenya starting at KSh 2,500/year. Free SSL, cPanel, daily backups, 99.9% uptime, and local Kenyan support. Linux shared hosting, cloud hosting, and VPS available.",
    keywords: "web hosting Kenya, cheap web hosting Kenya, best web hosting Kenya, reliable web hosting Nairobi, VPS hosting Kenya, cloud hosting Kenya, cPanel hosting Kenya, SSD web hosting Kenya, affordable hosting plans Nairobi",
    canonicalPath: "/hosting",
  },
  domains: {
    title: "Domain Registration Kenya | .co.ke from KSh 999/yr | Imperial Enterprise",
    description: "Register domain names in Kenya at the best prices. .co.ke from KSh 999/yr, .com from KSh 1,200/yr. Instant DNS activation, free management panel, and bulk discounts available.",
    keywords: "domain registration Kenya, .co.ke domain registration, cheap domain names Kenya, buy domain Kenya, register domain Kenya, domain hosting Kenya, .com domain Kenya, domain name search Kenya",
    canonicalPath: "/domains",
  },
  about: {
    title: "About Imperial Enterprise | Nairobi's Premier Digital Growth Agency",
    description: "Imperial Enterprise is a Nairobi-based digital agency engineering digital dominance for Kenyan businesses. Learn about our team, mission, and why we're the top-rated agency in East Africa.",
    keywords: "digital agency Nairobi, about Imperial Enterprise, best digital marketing company Kenya, Nairobi web agency, East African digital solutions",
    canonicalPath: "/about",
  },
  portfolio: {
    title: "Our Work & Portfolio | Web Design & Marketing Case Studies | Imperial Enterprise",
    description: "See how Imperial Enterprise has helped Kenyan businesses dominate online. Browse our portfolio of web development, branding, SEO, and digital marketing projects.",
    keywords: "web design portfolio Kenya, digital marketing case studies Nairobi, website development projects Kenya, branding work Kenya",
    canonicalPath: "/portfolio",
  },
  contact: {
    title: "Contact Imperial Enterprise | Get a Free Strategy Call | Nairobi, Kenya",
    description: "Ready to dominate digital? Contact Imperial Enterprise for a free strategy call. WhatsApp +254703823398. Nairobi's top-rated digital marketing agency and web hosting provider.",
    keywords: "contact Imperial Enterprise, digital marketing agency Nairobi contact, web hosting support Kenya, free strategy call Kenya",
    canonicalPath: "/contact",
  },
} as const;
