import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { SOCIAL_LINKS } from "@/constants/social";
import { SITE_CONFIG } from "@/config";

// Navbar Component (Mobile: Full overlay, professional redesign)
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false); // Close on route change
  }, [location]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 md:left-8 md:right-8 z-50 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
        {/* Desktop Navigation (unchanged: Hardcoded, precise) */}
        <div className="hidden md:flex items-center justify-between px-8 py-5 w-full">
          <NavbarLogo />

          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link: typeof NAV_LINKS[0]) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-gray-200 hover:text-white text-sm font-medium transition-all duration-300 hover:scale-105 relative ${
                    isActive
                      ? "text-blue-400 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-400 after:rounded"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="w-px h-5 bg-white/30"></div>

            {SOCIAL_LINKS.map((social: typeof SOCIAL_LINKS[0]) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                  aria-label={`Visit our ${social.name} page`}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Mobile Top Bar (Compact: Logo + Hamburger) */}
        <div className="md:hidden flex items-center justify-between px-6 py-4">
          <NavbarLogoMobile /> {/* Scaled-down logo for mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay (Professional: Full slide-down, dark with blur) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={overlayRef}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md pt-20" // Full height, starts below top bar
          >
            <div className="flex flex-col items-center space-y-8 py-12 px-6"> {/* Centered, generous spacing */}
              {NAV_LINKS.map((link: typeof NAV_LINKS[0], index: number) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.to;
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 w-full max-w-md px-8 py-4 text-lg font-medium text-gray-200 hover:text-white transition-all duration-300 rounded-2xl hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                        isActive ? "text-blue-400 bg-blue-500/10" : ""
                      }`}
                    >
                      <Icon size={24} className="flex-shrink-0" />
                      <span>{link.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
              {/* Social Links */}
              {SOCIAL_LINKS.map((social: typeof SOCIAL_LINKS[0], index: number) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (NAV_LINKS.length + index) * 0.1, duration: 0.3 }}
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 px-8 py-4 text-lg font-medium text-gray-200 hover:text-blue-400 transition-all duration-300 rounded-2xl hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      aria-label={`Visit our ${social.name} page`}
                    >
                      <Icon size={24} />
                      <span>{social.name}</span>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Mobile-Optimized Logo (Fixed: Split "InnovateX" with blue "X")
export function NavbarLogoMobile() {
  return (
    <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200">
      <img
        src="/Gyan_Niketan.png"  // Fixed: Removed /public/ prefix
        alt="Gyan Niketan"
        className="w-8 h-8 rounded-lg object-contain drop-shadow-lg" // Smaller on mobile
      />
      <div className="flex items-center"> {/* Flex wrapper for alignment */}
        <span className="text-base font-bold text-white">Innovate</span>
        <span className="text-base font-bold text-blue-500">X</span> {/* Blue "X" to match desktop */}
      </div>
    </Link>
  );
}

// Desktop Logo (unchanged)
export function NavbarLogo() {
  return (
    <div className="flex items-center gap-3">
      <a
        href={SITE_CONFIG.school.website}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
      >
        <img
          src="/Gyan_Niketan.png"
          alt={SITE_CONFIG.school.name}
          className="w-10 h-10 md:w-11 md:h-11 rounded-lg object-contain drop-shadow-lg"
        />
        <span className="text-lg md:text-xl font-semibold text-white hidden sm:inline">
          {SITE_CONFIG.school.name}
        </span>
      </a>
      <div className="w-px h-6 md:h-7 bg-white/30 hidden sm:block"></div>
      <Link
        to="/"
        className="flex items-center hover:opacity-80 transition-all duration-300 ease-in-out hover:scale-105"
      >
        <span className="text-lg md:text-xl font-bold text-white">
          {SITE_CONFIG.name.replace('X', '')}
        </span>
        <span className="text-lg md:text-xl font-bold text-blue-500">X</span>
      </Link>
    </div>
  );
}
