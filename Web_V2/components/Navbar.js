"use client";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-3xl font-bold text-white">
            DAKSphere
          </div>
          
          <ul className="hidden md:flex items-center space-x-8 text-sm gap-10 font-medium">
            <li><a href="#home" className="hover:text-violet-400 transition-colors">Home</a></li>
            <li><a href="#features" className="hover:text-violet-400 transition-colors">Features</a></li>
            <li><a href="#vision" className="hover:text-violet-400 transition-colors">Vision</a></li>
            <li><a href="#pricing" className="hover:text-violet-400 transition-colors">Pricing</a></li>
          </ul>

          <button className="border border-white/20 hover:border-white/40 px-8 py-2 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105 glass">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
