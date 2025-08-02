const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend & UI Design",
      skills: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "TypeScript", icon: "ts" },
        { name: "JavaScript", icon: "js" },
        { name: "HTML5", icon: "html" },
        { name: "Redux", icon: "redux" },
        { name: "CSS3", icon: "css" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Figma", icon: "figma" },
        { name: "shadcn/ui", icon: "shadcn" }, // Added for Know Your Song
        { name: "Lucide React", icon: "lucide" }, // Added for Know Your Song
      ],
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Python", icon: "python" },
        { name: "Java", icon: "java" },
        { name: "C++", icon: "cpp" },
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "express" },
        { name: "FastAPI", icon: "fastapi" },
        { name: "Postman", icon: "postman" },
        { name: "Docker", icon: "docker" },
        { name: "Jupyter", icon: "jupyter" },
        { name: "Supabase", icon: "supabase" }, // Added for Know Your Song
      ],
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Databases & Storage",
      skills: [
        { name: "MongoDB", icon: "mongodb" },
        { name: "MySQL", icon: "mysql" },
        { name: "Firebase", icon: "firebase" },
        { name: "Supabase", icon: "supabase" },
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "DevOps & Deployment",
      skills: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "GitHub Actions", icon: "githubactions" },
        { name: "Vercel", icon: "vercel" },
        { name: "Netlify", icon: "netlify" },
        { name: "Azure", icon: "azure" },
        { name: "Render", icon: "render" },
        { name: "Vite", icon: "vite" }, // Added for Know Your Song
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Charting & Data Visualization",
      skills: [
        { name: "Recharts", icon: "recharts" }, // Added for Know Your Song
        { name: "D3.js", icon: "d3js" }, // If you're using D3 for any future projects
      ],
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg animate-fade-in delay-200">Tools and technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 animate-slide-up delay-${(index + 1) * 100}`}
            >
              <h3 className={`text-xl font-semibold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className={`bg-slate-700/30 rounded-lg p-3 text-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/20 animate-scale-in delay-${skillIndex * 50}`}
                  >
                    <img 
                      src={`https://skillicons.dev/icons?i=${skill.icon}`} 
                      alt={skill.name}
                      className="w-8 h-8 mx-auto mb-2"
                    />
                    <p className="text-gray-300 text-xs">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI/ML Tools Section */}
        <div className="mt-16 animate-fade-in delay-500">
          <h3 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            AI/ML & Specialized Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "PyTorch", "BERT", "Librosa", "OpenAI", "CrewAI", "Jupyter", "Docker"
            ].map((tech, index) => (
              <span 
                key={tech}
                className={`px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full text-white font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 animate-scale-in delay-${index * 100}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
