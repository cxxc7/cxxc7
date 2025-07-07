import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  User,
  BadgeCheck,
  Folder,
  Briefcase,
  BookOpen,
  Languages,
  Mail,
} from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: Home, color: "text-blue-400" },
    { name: "About", href: "#about", icon: User, color: "text-pink-400" },
    { name: "Skills", href: "#skills", icon: BadgeCheck, color: "text-green-400" },
    { name: "Projects", href: "#projects", icon: Folder, color: "text-yellow-400" },
    { name: "Experience", href: "#experience", icon: Briefcase, color: "text-orange-400" },
    { name: "Extracurricular", href: "#extracurricular", icon: BookOpen, color: "text-purple-400" },
    { name: "Languages", href: "#languages", icon: Languages, color: "text-red-400" },
    { name: "Contact", href: "#contact", icon: Mail, color: "text-cyan-400" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-4 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border border-blue-500/20"
          : "bg-slate-900/70"
      } rounded-xl`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            NNM
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  {/* Icon with color and size */}
                  <Icon className={`${item.color} opacity-80`} size={20} />

                  {/* Text with hover underline */}
                  <span className="relative group-hover:text-blue-400">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4 border border-blue-500/20 space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-4 w-full text-left py-3 text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  {/* Colored icon */}
                  <Icon className={`${item.color} opacity-80`} size={24} />
                  <span className="group-hover:text-blue-400">{item.name}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
