import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '@/constants/social';
import { SITE_CONFIG } from '@/config';
import { ROUTES } from '@/constants/routes';

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10"> {/* Reduced py-12 to py-10 for space */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6"> {/* Reduced gap-12 to gap-8 */}
          {/* Brand & Social */}
          <div>
            <div className="mb-3">
              <div className="flex items-center">
                <span className="text-xl font-bold text-white">{SITE_CONFIG.name.replace('X', '')}</span>
                <span className="text-xl font-bold text-blue-500">X</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-200 hover:scale-105"
                    aria-label={social.name}
                  >
                    <Icon size={18} className="text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links (Actual Site Routes) */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to={ROUTES.HOME} className="text-gray-400 hover:text-blue-400 transition-colors block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to={ROUTES.ABOUT} className="text-gray-400 hover:text-blue-400 transition-colors block py-1">
                  About
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CONTACT} className="text-gray-400 hover:text-blue-400 transition-colors block py-1">
                  Contact
                </Link>
              </li>
              <li>
                <Link to={ROUTES.LEADERSHIP} className="text-gray-400 hover:text-blue-400 transition-colors block py-1">
                  Leadership
                </Link>
              </li>
            </ul>
          </div>

          {/* Builder Credits (Updated: Real GitHub/Email + Community Bio) */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-3">Built By</h4>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">
                {SITE_CONFIG.author.name}
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                {SITE_CONFIG.author.role} | Passionate developer and CS enthusiast at Gyan Niketan. 
                <a href={`mailto:${SITE_CONFIG.author.email}`} className="text-blue-400 hover:underline ml-1">Contact</a>
              </p>
              <a 
                href={SITE_CONFIG.author.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 text-xs hover:underline"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name} - {SITE_CONFIG.school.name}. All rights reserved. | Built by {SITE_CONFIG.author.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
