import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AlgoAce",
      description: "AI-based DSA prep platform offering smart roadmap generation, real-time feedback, personalized learning paths, problem recommendations, and detailed explanations.",
      technologies: ["FastAPI", "CrewAI", "Supabase", "Next.js", "AI/ML"],
      github: "https://github.com/YasinzHyper/AlgoAce",
      demo: "#",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Multimodal Emotion Recognition",
      description: "Advanced emotion detection system combining audio and text analysis using BERT and CNN architectures for accurate sentiment understanding.",
      technologies: ["BERT", "CNN", "PyTorch", "Python", "ML"],
      github: "https://github.com/cxxc7/ml-pro-latest",
      demo: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "UpTask",
      description: "A full-featured MERN task management app with authentication, real-time updates, priority tagging, dark mode, and toast notifications.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Redux Toolkit", "Tailwind CSS"],
      github: "https://github.com/cxxc7/uptask", 
      demo: "#", 
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      title: "Graphos",
      description: "Gamified educational platform for exploring graph theory concepts including Euler paths, Hamiltonian cycles, and various graph algorithms.",
      technologies: ["React", "JavaScript", "Graph Theory", "Education"],
      github: "https://github.com/cxxc7/graphos",
      demo: "#",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "KeyShark",
      description: "Minimalist typing test application inspired by Monkeytype, featuring clean UI, real-time statistics, and performance analytics.",
      technologies: ["React", "TypeScript", "CSS", "Performance"],
      github: "https://github.com/cxxc7/keyshark",
      demo: "https://keyshark1.onrender.com/",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "BuzzCall",
      description: "Enterprise-grade mobile push notification engine featuring native Android module integration, FCM support, real-time messaging, and production-ready performance.",
      technologies: ["React", "TypeScript", "Capacitor", "Java", "Firebase"],
      github: "https://github.com/cxxc7/buzzcall",
      demo: "https://buzzcall.lovable.app",
      gradient: "from-yellow-500 to-orange-500"
    }, 
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">Some of my favorite projects I've worked on</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-300 border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-white hover:text-slate-900 transition-all duration-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white border-0 transition-all duration-300`}
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-400 text-gray-300 hover:bg-white hover:text-slate-900 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://github.com/cxxc7', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
