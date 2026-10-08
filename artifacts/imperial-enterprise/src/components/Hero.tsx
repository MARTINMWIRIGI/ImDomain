import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  children?: ReactNode;
  useParallax?: boolean;
  overlayOpacity?: "light" | "medium" | "heavy";
}

export function Hero({
  title,
  subtitle,
  backgroundImage,
  primaryCTA,
  secondaryCTA,
  children,
  useParallax = true,
  overlayOpacity = "medium",
}: HeroProps) {
  const overlayOpacityMap = {
    light: "bg-black/[0.6]",
    medium: "bg-black/[0.6]",
    heavy: "bg-black/[0.75]",
  };

  return (
    <div
      className={`relative w-full h-screen md:h-[80vh] lg:h-[85vh] bg-cover bg-center flex items-center justify-center ${
        useParallax ? "hero-parallax" : ""
      }`}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundAttachment: useParallax ? "fixed" : "scroll",
      }}
    >
      {/* Dark Overlay with Gradient */}
      <div className={`absolute inset-0 ${overlayOpacityMap[overlayOpacity]} z-10`}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.6] to-black/[0.4] z-10"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-20 max-w-4xl mx-auto px-4 md:px-8 text-center text-white py-20 md:py-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 md:mb-6 leading-tight line-clamp-4 md:line-clamp-none bg-gradient-to-r from-primary via-blue-400 to-white bg-clip-text text-transparent">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-100 mb-8 md:mb-10 max-w-2xl mx-auto line-clamp-3 md:line-clamp-none">
            {subtitle}
          </p>
        )}

        {/* Children (for custom content) */}
        {children && <div className="mb-8">{children}</div>}

        {/* CTAs */}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:items-start">
            {primaryCTA && (
              <motion.a
                href={primaryCTA.href}
                className="w-full md:w-auto px-8 py-4 bg-primary text-white font-bold rounded-[12px] hover:bg-blue-700 transition-all duration-300 hover:shadow-2xl inline-block text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {primaryCTA.text}
              </motion.a>
            )}
            {secondaryCTA && (
              <motion.a
                href={secondaryCTA.href}
                className="w-full md:w-auto px-8 py-4 border-2 border-white text-white font-bold rounded-[12px] hover:bg-white/[0.1] transition-all duration-300 inline-block text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {secondaryCTA.text}
              </motion.a>
            )}
          </div>
        )}
      </motion.div>

      {/* Scroll Indicator (Optional) */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-sm font-medium hidden md:block">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
