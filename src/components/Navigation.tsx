"use client";

import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Book,
  Code,
  Mail,
  Briefcase,
  Star,
  Layers,
  MessageSquare,
} from "lucide-react";

const matrixWords = [
  "Nikhilesh", "Marali",
  "React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "shadcn/ui",
  "FastAPI", "Node.js", "Express.js", "REST", "Supabase", "MongoDB", "MySQL",
  "Git", "GitHub", "Docker", "VS Code", "Python", "Java", "C", "C++",
  "Figma", "Render", "Vercel", "PyTorch", "BERT", "Librosa", "OpenAI", "CrewAI",
  "AlgoAce", "Graphos", "KeyShark", "DFlix", "Football", "Badminton", "Run Co", "Travel", "Music",
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showMatrix, setShowMatrix] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [matrixClicked, setMatrixClicked] = useState(false);

  const canvasRef = useRef(null);
  const animRef = useRef(null);

  const iconSize = 22;

  const navItems = [
    { name: "Home", href: "#home", icon: <Home size={iconSize} className="mr-1" /> },
    { name: "About", href: "#about", icon: <User size={iconSize} className="mr-1" /> },
    { name: "Education", href: "#education", icon: <Book size={iconSize} className="mr-1" /> },
    { name: "Skills", href: "#skills", icon: <Code size={iconSize} className="mr-1" /> },
    { name: "Projects", href: "#projects", icon: <Layers size={iconSize} className="mr-1" /> },
    { name: "Experience", href: "#experience", icon: <Briefcase size={iconSize} className="mr-1" /> },
    { name: "Extracurricular", href: "#extracurricular", icon: <Star size={iconSize} className="mr-1" /> },
    { name: "Languages", href: "#languages", icon: <MessageSquare size={iconSize} className="mr-1" /> },
    { name: "Contact", href: "#contact", icon: <Mail size={iconSize} className="mr-1" /> },
  ];

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const pos = window.scrollY + 100;

      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (pos >= top && pos < bottom) {
            setActiveSection(item.href);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileOpen(false);
    setActiveSection(href);
  };

  const toggleMatrixRain = () => {
    if (showMatrix) return;
    setMatrixClicked(true);
    setShowMatrix(true);
    setFadeOut(false);

    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShowMatrix(false), 1000);
    }, 4000);
  };

  useEffect(() => {
    if (!showMatrix) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const navbarH = 64;
    const fontSize = 20;
    const spacing = fontSize * 8;
    const lineHeight = fontSize * 2.4;
    const fadeAlpha = 0.025;
    const speed = 0.5;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - navbarH;
    };
    resize();
    window.addEventListener("resize", resize);

    const columns = Math.floor(canvas.width / spacing);
    const drops = Array(columns)
      .fill(0)
      .map(() => Math.floor(Math.random() * 50));

    const draw = () => {
      ctx.fillStyle = `rgba(0, 0, 0, ${fadeAlpha})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 255, 0, 0.6)";
      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, monospace`;

      for (let i = 0; i < columns; i++) {
        const x = i * spacing;
        const y = drops[i] * lineHeight;
        const word = matrixWords[Math.floor(Math.random() * matrixWords.length)];
        ctx.fillText(word, x, y);
        if (y > canvas.height && Math.random() > 0.95) drops[i] = 0;
        else drops[i] += speed;
      }

      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [showMatrix]);

  return (
    <>
      {/* ── Navbar ── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-slate-900/90 backdrop-blur-md shadow-xl border-b border-blue-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="relative flex items-center space-x-2">
              <button
                onClick={toggleMatrixRain}
                title="Click to activate Matrix"
                aria-label="Toggle Matrix Rain"
                className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r
                           from-blue-400 via-cyan-400 to-teal-400 hover:animate-glow
                           transition-transform duration-200 active:scale-95 hover:scale-105"
              >
                NNM
              </button>

              {!matrixClicked && (
                <span className="text-xs text-cyan-400 animate-pulse hidden sm:inline-block">
                  ✨ Click Me
                </span>
              )}
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex flex-nowrap justify-end items-center space-x-1 whitespace-nowrap overflow-hidden">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className={`flex items-center text-sm font-medium transition-all relative group px-2 ${
                    activeSection === item.href
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300
                      ${
                        activeSection === item.href
                          ? "w-full opacity-100 drop-shadow-[0_0_6px_rgba(56,189,248,0.8)]"
                          : "w-0 group-hover:w-full opacity-60"
                      }`}
                  />
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Sidebar ── */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900/95 backdrop-blur-md pt-20 px-6 pb-6
                       transform transition-transform duration-300 z-40 border-r border-blue-500/20 md:hidden
                       ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-bold text-blue-400">Menu</span>
          <button
            className="text-gray-300 hover:text-blue-400"
            onClick={() => setIsMobileOpen(false)}
          >
            <X size={28} />
          </button>
        </div>
        <div className="space-y-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.href)}
              className={`flex items-center text-lg w-full text-left text-gray-300 hover:text-blue-400 ${
                activeSection === item.href ? "text-blue-400" : ""
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* ── Mobile Backdrop ── */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* ── Matrix Rain Canvas ── */}
      {showMatrix && (
        <canvas
          ref={canvasRef}
          className={`fixed left-0 top-16 w-screen h-[calc(100vh-4rem)] z-[40] pointer-events-none
                      transition-opacity duration-1000 ease-in-out
                      ${fadeOut ? "opacity-0" : "opacity-100"}`}
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
