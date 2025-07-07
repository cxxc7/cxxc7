
const Experience = () => {
  const experiences = [
    {
      title: "Student Developer",
      company: "Personal Projects",
      period: "2022 - Present",
      description: "Developing innovative projects in AI/ML, web development, and algorithm design. Focus on creating practical solutions to real-world problems.",
      technologies: ["React", "Python", "AI/ML", "FastAPI"],
      color: "from-blue-400 to-purple-400"
    },
    {
      title: "Open Source Contributor",
      company: "Various Projects",
      period: "2023 - Present",
      description: "Contributing to open source projects and building tools for the developer community. Focused on educational platforms and AI tools.",
      technologies: ["JavaScript", "TypeScript", "Python", "Git"],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "AI Research & Development",
      company: "Academic Projects",
      period: "2023 - Present",
      description: "Researching multimodal emotion recognition, natural language processing, and computer vision applications.",
      technologies: ["PyTorch", "BERT", "CNN", "Research"],
      color: "from-green-400 to-emerald-400"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience & Journey
          </h2>
          <p className="text-gray-400 text-lg">My path in technology and development</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:ml-16">
                {/* Timeline dot */}
                <div className={`absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full hidden md:block`}></div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-gray-400 font-medium mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-300 border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
