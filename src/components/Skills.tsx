
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Backend",
      skills: ["Python", "FastAPI", "Node.js", "Java", "C++"],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "AI/ML",
      skills: ["PyTorch", "TensorFlow", "BERT", "CNNs", "CrewAI"],
      color: "from-green-400 to-emerald-400"
    },
    {
      title: "Tools & Platforms",
      skills: ["Docker", "Git", "GitHub", "Azure", "Supabase"],
      color: "from-orange-400 to-red-400"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg">Tools and technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="bg-slate-700/30 rounded-lg p-3 text-gray-300 hover:bg-slate-700/50 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skill badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Technologies I Love</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "Python", "TypeScript", "Docker", "Git", "PyTorch", 
              "FastAPI", "Next.js", "Supabase", "Azure", "Java", "C++"
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 cursor-pointer hover:scale-105"
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
