import { Facebook } from 'lucide-react'; // Only Facebook for now
import { Link } from 'react-router-dom'; // For internal navigation

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10"> {/* Reduced py-12 to py-10 for space */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6"> {/* Reduced gap-12 to gap-8 */}
          {/* Brand & Social */}
          <div>
            <div className="mb-3"> {/* Reduced mb-4 */}
              <div className="flex items-center">
                <span className="text-xl font-bold text-white">Innovate</span>
                <span className="text-xl font-bold text-blue-500">X</span> {/* Tailwind class instead of inline style */}
              </div>
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed"> {/* Added text-sm for compactness */}
              Empowering the next generation of innovators through excellence in computer science education at Gyan Niketan.
            </p>
            <div className="flex gap-3"> {/* Reduced gap-4 */}
              <a 
                href="https://www.facebook.com/gyanniketanpatna/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-200 hover:scale-105" // Smaller icons, added scale
                aria-label="Facebook"
              >
                <Facebook size={18} className="text-white" /> {/* Smaller size */}
              </a>
            </div>
          </div>

          {/* Quick Links (Actual Site Routes) */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-3">Quick Links</h4> {/* Reduced mb-4 */}
            <ul className="space-y-2"> {/* Reduced space-y-3 */}
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors block py-1">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors block py-1">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-gray-400 hover:text-blue-400 transition-colors block py-1">
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
                Suryanshu Nabheet
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Leader of InnovateX | Passionate developer and CS enthusiast at Gyan Niketan. 
                <a href="mailto:suryanshunab@gmail.com" className="text-blue-400 hover:underline ml-1">Contact</a>
              </p>
              {/* GitHub Link */}
              <a 
                href="https://github.com/Suryanshu-Nabheet" // Real GitHub
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 text-xs hover:underline"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Copyright (Updated with Builder Mention) */}
        <div className="pt-6 border-t border-gray-800 text-center"> {/* Reduced pt-8 */}
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} InnovateX - Gyan Niketan School. All rights reserved. | Built by Suryanshu Nabheet.
          </p>
        </div>
      </div>
    </footer>
  );
}
