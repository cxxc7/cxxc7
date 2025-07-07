"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  User,
  Code,
  Mail,
  Briefcase,
  Star,
  Layers,
  MessageSquare,
} from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "Home", href: "#home", icon: <Star size={16} className="mr-2" /> },
    { name: "About", href: "#about", icon: <User size={16} className="mr-2" /> },
    { name: "Skills", href: "#skills", icon: <Code size={16} className="mr-2" /> },
    { name: "Projects", href: "#projects", icon: <Layers size={16} className="mr-2" /> },
    { name: "Experience", href: "#experience", icon: <Briefcase size={16} className="mr-2" /> },
    { name: "Extracurricular", href: "#extracurricular", icon: <Star size={16} className="mr-2" /> },
    { name: "Languages", href: "#languages", icon: <MessageSquare size={16} className="mr-2" /> },
    { name: "Contact", href: "#contact", icon: <Mail size={16} className="mr-2" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 100;
      for (let item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetBottom = offsetTop + el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 animate-slide-down ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-xl border-b border-blue-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 hover:animate-glow">
            NNM
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`flex items-center text-sm font-medium transition-all duration-300 relative group ${
                  activeSection === item.href
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                    activeSection === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4 border border-blue-500/20 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`w-full text-left flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 ${
                  activeSection === item.href ? "text-blue-400" : ""
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
