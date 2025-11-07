import { GraduationCap } from "lucide-react";

const educationData = [
  {
    school: "Ramaiah Institute of Technology",
    degree: "BE in Information Science and Engineering",
    dates: "2022 - 2026",
    grade: "CGPA: 9.3",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/50",
    textColor: "text-blue-400",
    badgeColor: "bg-blue-500/20",
  },
  {
    school: "RV PU College",
    degree: "Pre-University College",
    dates: "2020 - 2022",
    grade: "98.5% (State 8th Rank)",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/50",
    textColor: "text-purple-400",
    badgeColor: "bg-purple-500/20",
  },
  {
    school: "PPEC Sadashivanagara",
    degree: "High School",
    dates: "2017 - 2020",
    grade: "100% (State 1st Rank)",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/50",
    textColor: "text-pink-400",
    badgeColor: "bg-pink-500/20",
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400 text-lg">My academic journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:${item.borderColor} transition-all duration-300 ${
                index === 2 ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 ${item.bgColor} rounded-lg`}>
                  <GraduationCap className={`w-8 h-8 ${item.textColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">{item.school}</h3>
                  <p className="text-gray-400 mb-2">{item.degree}</p>
                  <div className="flex items-center gap-4 text-sm flex-wrap">
                    <span className="text-gray-500">{item.dates}</span>
                    <span className={`px-3 py-1 ${item.badgeColor} ${item.textColor} rounded-full font-semibold`}>
                      {item.grade}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
