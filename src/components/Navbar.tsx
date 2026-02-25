import { useState, useEffect } from 'react';
import { Menu, X, Heart, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-brand-navy/95 backdrop-blur-md shadow-sm py-4 border-b border-border-light dark:border-border-dark' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="Ofoq Charity Logo" 
            className="h-12 w-12 object-contain rounded-full bg-white shadow-sm"
          />
          <span className="font-serif text-xl font-bold tracking-tight transition-colors duration-300 text-brand-navy dark:text-white">
            Ofoq Charity Foundation
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide transition-colors duration-200 text-text-secondary dark:text-text-dark-secondary hover:text-brand-blue dark:hover:text-blue-dark"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  location.pathname === link.href 
                    ? 'text-brand-blue dark:text-blue-dark' 
                    : 'text-text-secondary dark:text-text-dark-secondary hover:text-brand-blue dark:hover:text-blue-dark'
                }`}
              >
                {link.name}
              </Link>
            )
          ))}
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors duration-200 text-text-secondary dark:text-text-dark-secondary hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href="/#donate"
            className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 bg-brand-blue text-white hover:bg-brand-navy dark:bg-blue-dark dark:hover:bg-brand-blue shadow-md hover:shadow-lg"
          >
            <span>Donate Now</span>
            <Heart size={16} className="fill-current" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors duration-200 text-text-secondary dark:text-text-dark-secondary"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-brand-navy dark:text-white" />
            ) : (
              <Menu className="text-brand-navy dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-surface-light dark:bg-surface-dark shadow-lg border-t border-border-light dark:border-border-dark p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-text-secondary dark:text-text-dark-secondary font-medium hover:text-brand-blue dark:hover:text-blue-dark transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`font-medium transition-colors ${
                      location.pathname === link.href 
                        ? 'text-brand-blue dark:text-blue-dark' 
                        : 'text-text-secondary dark:text-text-dark-secondary hover:text-brand-blue dark:hover:text-blue-dark'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <a
                href="/#donate"
                className="w-full bg-brand-blue dark:bg-blue-dark text-white py-3 rounded-lg font-semibold text-center flex items-center justify-center gap-2 hover:bg-brand-navy dark:hover:bg-brand-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Donate Now</span>
                <Heart size={16} className="fill-current" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
