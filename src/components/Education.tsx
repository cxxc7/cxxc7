import { GraduationCap } from "lucide-react";

const educationData = [
  {
    school: "Ramaiah Institute of Technology",
    degree: "BE in Information Science and Engineering",
    dates: "2022 - 2026",
    grade: "9.3",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/50",
    textColor: "text-blue-400",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    school: "RV PU College",
    degree: "Pre-University College",
    dates: "2020 - 2022",
    grade: "98.5%",
    achievement: "State 8th Rank",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/50",
    textColor: "text-green-400",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    school: "PPEC Sadashivanagara",
    degree: "High School",
    dates: "2017 - 2020",
    grade: "100%",
    achievement: "State 1st Rank",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/50",
    textColor: "text-pink-400",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    school: "St. Joseph Boys High School",
    degree: "Middle School",
    dates: "2014 - 2017",
    grade: "—",
    bgColor: "bg-gray-500/10",
    borderColor: "border-gray-500/50",
    textColor: "text-gray-400",
    gradient: "from-gray-400 to-gray-600",
  },
  {
    school: "Sophia High School",
    degree: "Pre-Primary and Primary School",
    dates: "2007 - 2014",
    grade: "—",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/50",
    textColor: "text-yellow-400",
    gradient: "from-yellow-400 to-amber-500",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400 text-lg">My academic journey</p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 via-pink-500 to-blue-500 hidden md:block rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12 relative">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } md:-mt-6`}
              >
                {/* Timeline Dot + Year */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full border-4 border-slate-900 bg-white shadow-md"></div>
                  <div
                    className={`mt-2 px-4 py-1 bg-gradient-to-r ${item.gradient} rounded-lg font-bold text-white text-sm shadow-lg`}
                  >
                    {item.dates}
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`w-full md:w-[calc(50%-4rem)] ${
                    index % 2 === 1 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-[1.03] group hover:shadow-2xl hover:shadow-blue-500/10">
                    {/* Gradient Top Bar */}
                    <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>

                    <div className="p-6 md:p-8">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 ${item.bgColor} rounded-lg shrink-0`}>
                          <GraduationCap className={`w-8 h-8 ${item.textColor}`} />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                            {item.school}
                          </h3>
                          <p className="text-gray-300 mb-4">{item.degree}</p>

                          {/* Mobile dates */}
                          <span className="text-sm text-gray-500 md:hidden block mb-4">
                            {item.dates}
                          </span>

                          {/* Grade + Achievement */}
                          {item.grade !== "—" && (
                            <div className="flex flex-wrap items-center gap-2">
                              <span
                                className={`px-4 py-2 bg-gradient-to-r ${item.gradient} rounded-lg font-bold text-white text-lg shadow-lg`}
                              >
                                {item.grade.includes("%")
                                  ? `Percentage: ${item.grade}`
                                  : `CGPA: ${item.grade}`}
                              </span>

                              {item.achievement && (
                                <span
                                  className={`px-3 py-1 ${item.bgColor} ${item.textColor} rounded-full text-sm font-semibold border ${item.borderColor} flex items-center gap-1 transition-all`}
                                >
                                  <span className="text-base group-hover:animate-pulse">
                                    {item.achievement.includes("1st")
                                      ? "🥇"
                                      : item.achievement.includes("2nd")
                                      ? "🥈"
                                      : item.achievement.includes("3rd")
                                      ? "🥉"
                                      : "🏆"}
                                  </span>
                                  {item.achievement}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
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

export default Education;
