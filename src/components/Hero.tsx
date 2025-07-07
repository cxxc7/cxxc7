import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-float delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-float delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-fade-in ml-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-20">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Nikhilesh Marali
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Information Science Student • Student Developer • AI Explorer • Passionate All-Rounder • Creative Thinker 
            </p>

            <p className="text-lg text-gray-400 max-w-2xl lg:max-w-none leading-relaxed mb-8">
              Passionate about building smart, user-focused tools at the intersection of
              <span className="text-blue-400 font-semibold"> AI</span>,
              <span className="text-cyan-400 font-semibold"> creativity</span>, and
              <span className="text-blue-300 font-semibold"> real-world impact</span> — blending technology, design, and purposeful innovation.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <a
                href="https://github.com/cxxc7?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 px-8 py-3 text-lg font-semibold rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-block"
              >
                View My Work
              </a>

              <a
                href="/NNM_Resume.pdf"
                download="Nikhilesh_Marali_Resume.pdf"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 text-lg font-semibold rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25 inline-block"
              >
                Download Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              {/* GitHub */}
              <a
                href="https://github.com/cxxc7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github size={24} className="text-black" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/nikhilesh-marali-215136315/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin size={24} className="text-[#0077B5]" />
              </a>

              {/* Gmail Icon */}
              <a
                href="mailto:nikhileshmarali7@gmail.com"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <img
                  src="/gmail-icon.svg"
                  alt="Gmail"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in delay-300 mr-6">
            <div className="relative">
              <img
                src="/nnm_pic.png"
                alt="Nikhilesh Marali"
                className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-400/30"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-float delay-200"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full animate-float delay-500"></div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="text-center mt-16 lg:mt-0">
          <button
            onClick={scrollToNext}
            className="animate-bounce text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
