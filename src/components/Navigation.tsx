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

/* ── Words for Matrix Rain ───────────────────── */
const matrixWords = [
  "Nikhilesh", "Marali",
  "React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "shadcn/ui",
  "FastAPI", "Node.js", "Express.js", "REST", "Supabase", "MongoDB", "MySQL",
  "Git", "GitHub", "Docker", "VS Code", "Python", "Java", "C", "C++",
  "Figma", "Render", "Vercel",
  "PyTorch", "BERT", "Librosa", "OpenAI", "CrewAI",
  "AlgoAce", "Graphos", "KeyShark", "DFlix",
  "Football", "Badminton", "Run Co", "Travel", "Music",
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const [showMatrix, setShowMatrix] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animRef = useRef<number | null>(null);

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
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const pos = window.scrollY + 100;
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const bottom = top + (el as HTMLElement).offsetHeight;
          if (pos >= top && pos < bottom) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileOpen(false);
  };

  const toggleMatrixRain = () => {
    if (showMatrix) return;

    setShowMatrix(true);

    setTimeout(() => {
      cancelAnimationFrame(animRef.current!);
      setFadeOut(true);
      setTimeout(() => {
        setShowMatrix(false);
        setFadeOut(false);
      }, 1200); // Slower fade out
    }, 4000); // Rain lasts 4s
  };

  useEffect(() => {
    if (!showMatrix) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const navbarH = 64;
    const fontSize = 20;
    const lineSpacing = fontSize * 2.2; // More vertical spacing
    const columnSpacing = fontSize * 9;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - navbarH;
    };
    resize();
    window.addEventListener("resize", resize);

    const columns = Math.floor(canvas.width / columnSpacing);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.015)"; // ultra light trail
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(0, 255, 0, 0.55)"; // visible but not harsh
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        if (Math.random() > 0.6) continue; // reduce density

        const word = matrixWords[Math.floor(Math.random() * matrixWords.length)];
        const x = i * columnSpacing;
        const y = drops[i] * lineSpacing;

        ctx.fillText(word, x, y);

        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-xl border-b border-blue-500/20"
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={toggleMatrixRain}
              aria-label="Toggle Matrix Rain"
              className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r
                         from-blue-400 via-cyan-400 to-teal-400 hover:animate-glow
                         transition-transform duration-300 active:scale-95 hover:scale-105"
            >
              NNM
            </button>

            <div className="hidden md:flex space-x-6 items-center">
              {navItems.map((i) => (
                <button
                  key={i.name}
                  onClick={() => scrollTo(i.href)}
                  className={`flex items-center text-base font-medium transition-all relative group ${
                    activeSection === i.href
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  }`}
                >
                  {i.icon}
                  <span>{i.name}</span>
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r
                                   from-blue-400 to-cyan-400 transition-all
                                   ${activeSection === i.href ? "w-full" : "w-0 group-hover:w-full"}`} />
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-gray-300 hover:text-blue-400"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed top-0 left-0 h-full w-64 bg-slate-900/95 backdrop-blur-md pt-20 px-6 pb-6
                       transform transition-transform duration-300 z-40 border-r border-blue-500/20 md:hidden
                       ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-bold text-blue-400">Menu</span>
          <button className="text-gray-300 hover:text-blue-400" onClick={() => setIsMobileOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <div className="space-y-4">
          {navItems.map(i => (
            <button key={i.name}
              onClick={() => scrollTo(i.href)}
              className={`flex items-center text-base w-full text-left text-gray-300 hover:text-blue-400
                         ${activeSection === i.href ? "text-blue-400" : ""}`}>
              {i.icon}{i.name}
            </button>
          ))}
        </div>
      </div>

      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsMobileOpen(false)} />
      )}

      {showMatrix && (
        <canvas
          ref={canvasRef}
          className={`fixed left-0 top-16 w-screen h-[calc(100vh-4rem)] z-[40] pointer-events-none
                      transition-opacity duration-[1400ms] ease-in-out
                      ${fadeOut ? "opacity-0" : "opacity-100"}`}
          style={{
            backdropFilter: "blur(1px)",
            WebkitBackdropFilter: "blur(1px)",
            backgroundColor: "rgba(0, 0, 0, 0.025)",
          }}
        />
      )}
    </>
  );
};

export default Navigation;
