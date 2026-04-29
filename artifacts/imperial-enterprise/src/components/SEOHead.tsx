import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  schema?: Record<string, any>;
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
export function SEOHead({ title, description, keywords, canonicalPath = "/", ogImage, schema }: SEOHeadProps) {
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
    setMeta("viewport", "width=device-width, initial-scale=1, maximum-scale=5");
    setMeta("charset", "utf-8");
    setMeta("robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
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
    setMeta("og:type", "website", true);
    setMeta("og:locale", "en_KE", true);
    if (ogImage) setMeta("og:image", ogImage, true);

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:url", fullUrl);
    if (ogImage) setMeta("twitter:image", ogImage);

    // Add schema markup
    if (schema) {
      let scriptEl = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema);
    }
  }, [title, description, keywords, canonicalPath, ogImage, schema]);

  return null;
}

// ==============================================
// Pre-configured SEO data for each page
// Aggressive SEO optimization with keyword-rich titles, descriptions, and targeted keywords
// ==============================================
export const SEO_CONFIG = {
  home: {
    title: "Imperial Enterprise - Market Entry Consulting & Digital Growth Services Kenya | Nairobi",
    description: "Imperial Enterprise: #1 market entry consulting firm for SMEs & startups in Kenya. Digital growth systems, business strategy, buyer acquisition, and East African market expansion. Book a free strategy call today.",
    keywords: "market entry consulting Kenya, digital growth services, business strategy consulting Kenya, SME consulting Nairobi, startup growth strategy, market entry East Africa, digital transformation Kenya, business intelligence Kenya, market research Kenya, expansion strategy Kenya",
    canonicalPath: "/",
  },
  services: {
    title: "Market Entry Consulting & Digital Growth Services Kenya | Imperial Enterprise",
    description: "Strategic growth & digital services for SMEs, startups & brands in Kenya. Business strategy consulting, digital positioning, customer acquisition systems, website design, branding, SEO, and growth systems. Helping businesses compete and scale sustainably.",
    keywords: "market entry consulting Kenya, business growth strategy, digital growth services, strategic consulting Nairobi, startup scaling services, customer acquisition strategy, business positioning, digital systems, growth consulting Kenya, SME services Kenya, brand positioning Kenya, website design Kenya, SEO services Kenya, digital marketing Kenya",
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
    title: "About Imperial Enterprise | Market Entry & Growth Consulting Firm Kenya",
    description: "Imperial Enterprise is Kenya's leading market entry and digital growth consulting firm. Helping SMEs, startups & brands in Kenya and East Africa grow online, enter new markets, and build structured growth systems. Learn about our team, expertise, and proven consulting approach.",
    keywords: "Imperial Enterprise about, market entry consulting firm Kenya, growth consulting company Nairobi, business consulting Kenya, digital strategy firm, East African market expertise, business consultants Kenya, consulting services Nairobi",
    canonicalPath: "/about",
  },
  portfolio: {
    title: "Case Studies & Portfolio | Market Entry & Growth Consulting Success Stories | Imperial Enterprise",
    description: "See how Imperial Enterprise helped Kenyan SMEs and startups achieve market entry success, build digital presence, and scale sustainably. Browse case studies and success stories across market research, digital growth, and business strategy.",
    keywords: "case studies Kenya, market entry success stories, consulting portfolio, business growth case studies, digital transformation Kenya, client results, success stories SME Kenya",
    canonicalPath: "/portfolio",
  },
  contact: {
    title: "Contact Imperial Enterprise | Book Your Free Market Entry Strategy Call | Kenya",
    description: "Ready to grow your business? Contact Imperial Enterprise for a free market entry strategy consultation. Serving Kenya and East Africa. Book your strategy call today.",
    keywords: "contact Imperial Enterprise, book strategy call Kenya, market entry consultation, business strategy call, consulting appointment Kenya, free consultation",
    canonicalPath: "/contact",
  },
} as const;
