
const Extracurricular = () => {
  const activities = [
    {
      title: "Sports & Athletics",
      description: "College-level football, badminton, and throwball player. Fast sprinter with strong track and field background.",
      icon: "⚽",
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Music & Performance",
      description: "Proficient keyboard player with performance experience, exploring the creative side of technology.",
      icon: "🎹",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Community Leadership",
      description: "Co-founder of The Run Co. – organizing weekly community runs & fitness events to bring people together.",
      icon: "🏃‍♂️",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Social Impact",
      description: "Volunteered with Aarogya Seva; donated hair to support wig-making for cancer patients.",
      icon: "🎗️",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Entertainment & Lifestyle",
      description: "Avid fan of travel, movies, music, gaming, and all forms of entertainment that inspire creativity.",
      icon: "🌍",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="extracurricular" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
            Extracurricular Activities
          </h2>
          <p className="text-gray-400 text-lg animate-fade-in delay-200">Beyond coding - what makes me who I am</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={activity.title}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 animate-slide-up delay-${(index + 1) * 100}`}
            >
              <div className="text-4xl mb-4 animate-float">{activity.icon}</div>
              <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${activity.color} bg-clip-text text-transparent`}>
                {activity.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
