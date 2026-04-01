import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Globe, User } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'About', path: '/about', submenu: ['History', 'Leadership', 'Accreditations', 'Campus Tour'] },
  { name: 'Academics', path: '/academics', submenu: ['Faculties', 'Departments', 'Online Programs', 'Calendar'] },
  { name: 'Admissions', path: '/admissions', submenu: ['Undergraduate', 'Postgraduate', 'International', 'Financial Aid'] },
  { name: 'Research', path: '/research', submenu: ['Centers', 'Projects', 'Publications', 'Funding'] },
  { name: 'Campus Life', path: '/campus-life', submenu: ['Clubs', 'Housing', 'Sports', 'Wellness'] },
  { name: 'News & Events', path: '/news', submenu: ['News Feed', 'Calendar', 'Press Releases'] },
  { name: 'Alumni', path: '/alumni', submenu: ['Directory', 'Success Stories', 'Giving'] },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-univ-blue shadow-lg py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-univ-gold rounded-full flex items-center justify-center font-serif font-bold text-univ-blue text-xl group-hover:scale-110 transition-transform">
            KU
          </div>
          <div className="hidden sm:block">
            <h1 className={cn(
              "font-serif font-bold text-lg leading-tight transition-colors",
              scrolled ? "text-white" : "text-univ-blue"
            )}>
              KAMPALA<br/>UNIVERSITY
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className="relative group"
              onMouseEnter={() => setActiveSubmenu(item.name)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link 
                to={item.path}
                className={cn(
                  "nav-link flex items-center gap-1 py-2",
                  scrolled ? "text-white/90 hover:text-univ-gold" : "text-univ-blue hover:text-univ-gold"
                )}
              >
                {item.name}
                <ChevronDown className="w-4 h-4" />
              </Link>
              
              <AnimatePresence>
                {activeSubmenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-sm py-2 border-t-2 border-univ-gold"
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub}
                        to={`${item.path}#${sub.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-univ-blue transition-colors"
                      >
                        {sub}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-4">
          <button className={cn(
            "p-2 rounded-full transition-colors",
            scrolled ? "text-white hover:bg-white/10" : "text-univ-blue hover:bg-univ-blue/5"
          )}>
            <Search className="w-5 h-5" />
          </button>
          <button className={cn(
            "hidden md:flex items-center gap-2 px-4 py-2 rounded-sm font-bold text-sm transition-all",
            scrolled ? "bg-univ-gold text-univ-blue hover:bg-white" : "bg-univ-blue text-white hover:bg-univ-blue/90"
          )}>
            APPLY NOW
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className={cn("lg:hidden p-2", scrolled ? "text-white" : "text-univ-blue")}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-univ-blue border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col gap-2">
                  <Link 
                    to={item.path}
                    className="text-white font-serif text-lg hover:text-univ-gold"
                  >
                    {item.name}
                  </Link>
                  <div className="pl-4 flex flex-col gap-1 border-l border-white/20">
                    {item.submenu.map((sub) => (
                      <Link 
                        key={sub} 
                        to={item.path} 
                        className="text-white/60 text-sm hover:text-white"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <button className="mt-4 w-full py-3 bg-univ-gold text-univ-blue font-bold rounded-sm">
                APPLY NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
