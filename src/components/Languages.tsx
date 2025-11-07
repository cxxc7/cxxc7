const Languages = () => {
  const languages = [
    {
      name: "English",
      level: "Fluent",
      percentage: 87,
      color: "from-blue-400 to-cyan-400"
    },
    {
      name: "Kannada",
      level: "Fluent",
      percentage: 90,
      color: "from-cyan-400 to-blue-500"
    },
    {
      name: "Hindi",
      level: "Fluent",
      percentage: 83,
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Tulu",
      level: "Conversational",
      percentage: 65,
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "French",
      level: "Beginner",
      percentage: 35,
      color: "from-green-400 to-teal-400"
    }
  ];

  return (
    <section id="languages" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
            Languages
          </h2>
          <p className="text-gray-400 text-lg animate-fade-in delay-200">Communication across cultures</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {languages.map((language, index) => (
            <div 
              key={language.name}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 animate-slide-up delay-${(index + 1) * 100}`}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-xl font-semibold bg-gradient-to-r ${language.color} bg-clip-text text-transparent`}>
                  {language.name}
                </h3>
                <span className="text-gray-400 font-medium">{language.level}</span>
              </div>
              
              <div className="w-full bg-slate-700/50 rounded-full h-3 mb-2">
                <div 
                  className={`h-3 bg-gradient-to-r ${language.color} rounded-full transition-all duration-1000 ease-out animate-scale-in delay-${(index + 1) * 200}`}
                  style={{ width: `${language.percentage}%` }}
                ></div>
              </div>
              
              <p className="text-gray-400 text-sm">{language.percentage}% Proficiency</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
