import { useState, useEffect } from 'react';
import { Menu, X, Heart, Users, Phone, ShieldCheck } from 'lucide-react';
import { NGO_INFO } from '../data/ngoData';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'work', label: 'Our Work' },
    { id: 'impact', label: 'Our Impact' },
    { id: 'stories', label: 'Stories' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'get-involved', label: 'Get Involved' },
    { id: 'news', label: 'News' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-950 text-stone-200 text-xs sm:text-sm py-2 px-4 border-b border-blue-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-amber-300 font-medium">
              <ShieldCheck className="w-4 h-4" /> Reg. No: {NGO_INFO.registrationNo}
            </span>
            <span className="hidden md:inline text-stone-400">|</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-300" /> {NGO_INFO.phones[0]}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-stone-300 hidden lg:inline">📍 {NGO_INFO.location}</span>
            <button 
              onClick={() => handleNavClick('donate')}
              className="text-amber-300 hover:text-amber-200 font-semibold transition flex items-center gap-1"
            >
              <Heart className="w-3.5 h-3.5 fill-amber-300" /> Support Mission
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-4 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition">
              <Heart className="w-6 h-6 fill-amber-300 text-amber-300" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold text-blue-950 tracking-tight block leading-none">
                {NGO_INFO.name}
              </span>
              <span className="text-xs font-medium text-stone-500 tracking-wider uppercase block mt-1">
                Dhanbad, Jharkhand
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                  currentPage === item.id 
                    ? 'bg-blue-50 text-blue-800' 
                    : 'text-stone-700 hover:text-blue-800 hover:bg-stone-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('get-involved')}
              className="px-4 py-2.5 rounded-xl border border-blue-600 text-blue-700 hover:bg-blue-50 font-semibold text-sm transition flex items-center gap-2 shadow-sm"
            >
              <Users className="w-4 h-4" /> Join Us
            </button>
            <button
              onClick={() => handleNavClick('donate')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4 fill-white" /> DONATE NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-xl text-stone-700 hover:bg-stone-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white border-b border-stone-200 shadow-2xl py-6 px-6 animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 mb-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-3 rounded-xl text-left font-medium text-sm transition ${
                    currentPage === item.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-stone-50 text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-stone-100">
              <button
                onClick={() => handleNavClick('get-involved')}
                className="w-full py-3 rounded-xl border border-blue-600 text-blue-700 font-semibold text-center hover:bg-blue-50 transition flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4" /> Join Our Community
              </button>
              <button
                onClick={() => handleNavClick('donate')}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-center shadow-lg transition flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" /> DONATE NOW
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Sticky Bottom Mobile CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 p-3 shadow-2xl flex items-center gap-3">
        <button
          onClick={() => handleNavClick('volunteer')}
          className="flex-1 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm"
        >
          <Users className="w-4 h-4 text-blue-700" /> Volunteer
        </button>
        <button
          onClick={() => handleNavClick('donate')}
          className="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-orange-500/20"
        >
          <Heart className="w-4 h-4 fill-white text-white" /> Donate Now
        </button>
      </div>
    </>
  );
}
