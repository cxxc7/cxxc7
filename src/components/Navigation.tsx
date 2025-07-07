"use client";

import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  Mail,
  Briefcase,
  Star,
  Layers,
  MessageSquare,
} from "lucide-react";

// Words for Matrix Rain
const matrixWords = [
  // Identity & Sections
  "Nikhilesh", "Marali",

  // Tech Stack
  "React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "shadcn/ui",
  "FastAPI", "Node.js", "Express.js", "REST", "Supabase", "MongoDB", "MySQL",
  "Git", "GitHub", "Docker", "VS Code","Python","Java","C",
  "C++","Figma","Docker","Render","Vercel",

  // AI / ML
  "PyTorch", "BERT", "Librosa", "OpenAI", "CrewAI",

  // Featured Projects
  "AlgoAce", "Graphos", "KeyShark", "DFlix",

  // Extras
  "Football", "Badminton", "Run Co", "Travel", "Music",
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showMatrix, setShowMatrix] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);

  const iconSize = 24;

  const navItems = [
    { name: "Home", href: "#home", icon: <Home size={iconSize} className="mr-2" /> },
    { name: "About", href: "#about", icon: <User size={iconSize} className="mr-2" /> },
    { name: "Skills", href: "#skills", icon: <Code size={iconSize} className="mr-2" /> },
    { name: "Projects", href: "#projects", icon: <Layers size={iconSize} className="mr-2" /> },
    { name: "Experience", href: "#experience", icon: <Briefcase size={iconSize} className="mr-2" /> },
    { name: "Extracurricular", href: "#extracurricular", icon: <Star size={iconSize} className="mr-2" /> },
    { name: "Languages", href: "#languages", icon: <MessageSquare size={iconSize} className="mr-2" /> },
    { name: "Contact", href: "#contact", icon: <Mail size={iconSize} className="mr-2" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 100;

      for (let item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const offsetTop = (el as HTMLElement).offsetTop;
          const offsetBottom = offsetTop + (el as HTMLElement).offsetHeight;
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
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const toggleMatrixRain = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const navbarHeight = 64;

    if (showMatrix) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      setFadeOut(true);
      setTimeout(() => {
        setShowMatrix(false);
        setFadeOut(false);
      }, 800);
      return;
    }

    setShowMatrix(true);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - navbarHeight;

    const words = matrixWords;
    const fontSize = 18;
    const spacing = fontSize * 4;
    const columns = Math.floor(canvas.width / spacing);
    const drops = new Array(columns).fill(1);

    function draw() {
      if (!ctx) return;

      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(0, 255, 0, 0.4)";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const word = words[Math.floor(Math.random() * words.length)];
        const x = i * spacing;
        const y = drops[i] * fontSize;

        ctx.fillText(word, x, y);

        if (y > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationRef.current = requestAnimationFrame(draw);
    }

    draw();
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 animate-slide-down ${
          isScrolled
            ? "bg-slate-900/90 backdrop-blur-md shadow-xl border-b border-blue-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={toggleMatrixRain}
              aria-label="Toggle Matrix Rain"
              className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 hover:animate-glow focus:outline-none transition-transform duration-200 active:scale-95 hover:scale-105"
            >
              NNM
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center text-base font-medium transition-all duration-300 relative group ${
                    activeSection === item.href
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  } hover:animate-bounce-sm`}
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
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900/95 backdrop-blur-md pt-20 px-6 pb-6 transform transition-transform duration-300 ease-in-out z-40 border-r border-blue-500/20 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="text-xl font-bold text-blue-400">Menu</div>
          <button
            className="text-gray-300 hover:text-blue-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={28} />
          </button>
        </div>
        <div className="space-y-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`flex items-center text-base w-full text-left text-gray-300 hover:text-blue-400 transition duration-200 hover:animate-bounce-sm ${
                activeSection === item.href ? "text-blue-400" : ""
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Backdrop overlay when sidebar is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Matrix Canvas */}
      {showMatrix && (
        <canvas
          ref={canvasRef}
          className={`fixed left-0 top-16 w-screen h-[calc(100vh-4rem)] z-[40] pointer-events-none transition-opacity duration-700 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
        />
      )}
    </>
  );
};

export default Navigation;
