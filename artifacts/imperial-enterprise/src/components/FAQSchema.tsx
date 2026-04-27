import { useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

/**
 * FAQ Schema Component - Injects FAQ structured data into <head>.
 * Google shows these as expandable Q&A in search results (rich snippets).
 * 
 * Usage:
 *   <FAQSchema faqs={hostingFAQs} />
 */
export function FAQSchema({ faqs }: FAQSchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // Remove old FAQ schema if exists
    const oldScript = document.querySelector('script[data-faq-schema]');
    if (oldScript) oldScript.remove();

    // Inject new FAQ schema
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-faq-schema", "true");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector('script[data-faq-schema]');
      if (el) el.remove();
    };
  }, [faqs]);

  return null;
}

// ==============================================
// Pre-configured FAQ data for service pages
// Google will show these as rich snippets!
// ==============================================

export const HOSTING_FAQS: FAQItem[] = [
  {
    question: "What is the cheapest web hosting in Kenya?",
    answer: "Imperial Enterprise offers the most affordable web hosting in Kenya starting at just KSh 2,500 per year. Our Starter plan includes 5 GB SSD storage, free SSL certificate, 10 email accounts, cPanel control panel, and 99.9% uptime guarantee. This is ideal for new websites, blogs, and small business sites."
  },
  {
    question: "Does your web hosting include free SSL?",
    answer: "Yes! All our web hosting plans include a free SSL certificate. SSL encrypts data between your website and visitors, improving security and boosting your Google search rankings. We also offer premium Comodo SSL certificates for businesses that need extended validation."
  },
  {
    question: "What is the uptime guarantee for your Kenya web hosting?",
    answer: "We guarantee 99.9% uptime on all our web hosting plans. Our servers use full SSD storage and advanced NGINX caching for blazing-fast load times. We monitor all servers 24/7 and our local Kenyan support team is available via WhatsApp and phone."
  },
  {
    question: "Can I host multiple websites on one hosting plan?",
    answer: "Yes! Our Business plan (KSh 5,500/year) supports up to 5 websites, and our Enterprise plan (KSh 12,000/year) supports unlimited websites. All multi-site plans include daily backups, free SSL on every site, and priority support."
  },
  {
    question: "Do you offer cloud hosting in Kenya?",
    answer: "Yes, we offer cloud hosting for businesses that need more power and scalability. Our cloud hosting features full SSD storage, NGINX caching, auto-scaling, and dedicated resources. It's perfect for high-traffic e-commerce sites and web applications."
  },
];

export const DOMAINS_FAQS: FAQItem[] = [
  {
    question: "How much does a .co.ke domain cost in Kenya?",
    answer: "A .co.ke domain costs just KSh 999 per year at Imperial Enterprise. This includes instant DNS activation, free domain management panel, WHOIS privacy protection, and email forwarding. We also offer .ke domains at the same price."
  },
  {
    question: "What is the cheapest domain name I can register in Kenya?",
    answer: "The cheapest domain extension we offer is .online at just KSh 299 per year, followed by .shop at KSh 399 per year. For Kenyan businesses, we recommend .co.ke (KSh 999/year) as it signals local trust to Kenyan customers and helps with local SEO rankings."
  },
  {
    question: "Can I register a domain name without hosting?",
    answer: "Absolutely! You can register just the domain name without purchasing hosting. However, we recommend our combo offers that bundle domain registration with web hosting for the best value — starting at just KSh 2,500/year for hosting + KSh 999 for a .co.ke domain."
  },
  {
    question: "How long does domain registration take in Kenya?",
    answer: "Domain registration at Imperial Enterprise is instant. Once your payment is processed, your domain is activated immediately with DNS configured and ready to use. You can start building your website right away."
  },
  {
    question: "Do you offer bulk domain registration discounts?",
    answer: "Yes! We offer bulk domain registration for businesses that need to protect their brand across multiple extensions. Register 5+ domains and get special discounted pricing. Contact us via WhatsApp at +254703823398 for bulk pricing."
  },
];

export const SERVICES_FAQS: FAQItem[] = [
  {
    question: "What digital marketing services do you offer in Nairobi?",
    answer: "Imperial Enterprise offers comprehensive digital marketing services including SEO optimization, Google Ads management, Meta (Facebook/Instagram) advertising, social media management, content marketing, brand identity design, and web development. All services are tailored for the Kenyan and East African market."
  },
  {
    question: "How much does SEO cost in Kenya?",
    answer: "Our SEO services in Kenya are customized based on your business needs, competition level, and goals. We offer packages for startups, growing businesses, and enterprises. Contact us for a free SEO audit and strategy call to get a personalized quote."
  },
  {
    question: "Do you build e-commerce websites for Kenyan businesses?",
    answer: "Yes! We specialize in custom e-commerce website development optimized for the Kenyan market. Our e-commerce sites support M-Pesa integration, mobile-first design (critical for Kenya's mobile-heavy internet users), fast loading speeds, and SEO optimization to help you rank on Google."
  },
  {
    question: "What makes Imperial Enterprise different from other digital agencies in Kenya?",
    answer: "We combine Silicon Valley expertise with deep East African market knowledge. Our strategies are data-driven with hyper-localized targeting for Kenyan audiences. We track every shilling spent and optimize for maximum ROI. Plus, we offer AI automation and workflow solutions that most agencies in Kenya can't match."
  },
  {
    question: "Can you help my business rank #1 on Google in Kenya?",
    answer: "While no ethical SEO agency can guarantee #1 rankings, we consistently achieve top 3 positions for competitive keywords in Kenya. Our proven SEO process includes technical audits, keyword research, on-page optimization, content strategy, link building, and local SEO optimization specifically for the Kenyan market."
  },
];
