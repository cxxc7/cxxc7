
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Nikhilesh Marali
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Student Developer • AI Explorer • Creative Thinker
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about building smart, user-focused tools at the intersection of 
            <span className="text-blue-400 font-semibold"> AI</span>, 
            <span className="text-purple-400 font-semibold"> creativity</span>, and 
            <span className="text-pink-400 font-semibold"> impact</span>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-300">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-400 text-gray-300 hover:bg-white hover:text-slate-900 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-500">
          <a 
            href="https://github.com/cxxc7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://linkedin.com/in/nikhileshmarali" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="mailto:nikhilesh@example.com"
            className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>

        <button 
          onClick={scrollToNext}
          className="animate-bounce text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
