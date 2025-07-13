import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/Ghostbill App icon .png" 
                alt="GhostBill AI Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-lg sm:text-xl font-bold text-white">GhostBill </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/features" className="text-gray-300 hover:text-white font-medium transition-colors">Features</Link>
              <Link to="/pricing" className="text-gray-300 hover:text-white font-medium transition-colors">Pricing</Link>
              <Link to="/about" className="text-gray-300 hover:text-white font-medium transition-colors">About</Link>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Get Started
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-300 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 pt-4">
                <Link 
                  to="/features" 
                  className="text-gray-300 hover:text-white font-medium transition-colors"
                  onClick={closeMobileMenu}
                >
                  Features
                </Link>
                <Link 
                  to="/pricing" 
                  className="text-gray-300 hover:text-white font-medium transition-colors"
                  onClick={closeMobileMenu}
                >
                  Pricing
                </Link>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-white font-medium transition-colors"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-left"
                  onClick={closeMobileMenu}
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 border-t border-gray-800 pt-8">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-4">
                <img 
                  src="/Ghostbill App icon .png" 
                  alt="GhostBill AI Logo" 
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-lg sm:text-xl font-bold text-white tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>GhostBill</span>
              </Link>
              <p className="text-gray-400 text-sm sm:text-base">
                AI-powered SaaS spend management for modern teams.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/features" className="hover:text-white transition-colors text-sm sm:text-base">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors text-sm sm:text-base">Pricing</Link></li>
                <li><Link to="/security" className="hover:text-white transition-colors text-sm sm:text-base">Security</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors text-sm sm:text-base">About</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors text-sm sm:text-base">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors text-sm sm:text-base">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/help" className="hover:text-white transition-colors text-sm sm:text-base">Help Center</Link></li>
                <li><Link to="/docs" className="hover:text-white transition-colors text-sm sm:text-base">Documentation</Link></li>
                <li><Link to="/status" className="hover:text-white transition-colors text-sm sm:text-base">Status</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm sm:text-base">
            <p>© 2024 GhostBill . Built to stop SaaS waste.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}