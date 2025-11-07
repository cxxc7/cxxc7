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
    bgColor: "bg-fuchsia-500/10",
    borderColor: "border-fuchsia-500/50",
    textColor: "text-fuchsia-400",
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    school: "St. Joseph Boys High School",
    degree: "Middle School",
    dates: "2014 - 2017",
    grade: "—",
    bgColor: "bg-orange-100/10",
    borderColor: "border-orange-400/50",
    textColor: "text-orange-300",
    gradient: "from-white to-orange-400",
  },
  {
    school: "Sophia High School",
    degree: "Pre-Primary and Primary School",
    dates: "2007 - 2014",
    grade: "—",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/50",
    textColor: "text-yellow-400",
    gradient: "from-yellow-300 to-amber-500",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 relative">
      {/* Embedded CSS for animation */}
      <style>{`
        @keyframes spinGlow {
          0% {
            background: conic-gradient(
              from 0deg,
              rgba(255,255,255,0.6) 0deg,
              transparent 40deg,
              transparent 360deg
            );
          }
          100% {
            background: conic-gradient(
              from 360deg,
              rgba(255,255,255,0.6) 0deg,
              transparent 40deg,
              transparent 360deg
            );
          }
        }
        .achievement-glow {
          position: relative;
          overflow: hidden;
          border-radius: 9999px;
        }
        .achievement-glow::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: conic-gradient(
            from 0deg,
            rgba(255,255,255,0.6) 0deg,
            transparent 40deg,
            transparent 360deg
          );
          animation: spinGlow 2s linear infinite paused;
          z-index: 0;
        }
        .achievement-glow:hover::before {
          animation-play-state: running;
        }
        .achievement-glow > * {
          position: relative;
          z-index: 1;
        }
      `}</style>

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
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 via-pink-500 to-blue-500 hidden md:block rounded-full"></div>

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
                            <div className="flex flex-wrap items-center gap-3">
                              <span
                                className={`px-4 py-2 bg-gradient-to-r ${item.gradient} rounded-lg font-bold text-white text-lg shadow-lg`}
                              >
                                {item.grade.includes("%")
                                  ? `Percentage: ${item.grade}`
                                  : `CGPA: ${item.grade}`}
                              </span>

                              {item.achievement && (
                                <span
                                  className={`achievement-glow px-5 py-2 ${item.bgColor} ${item.textColor} rounded-full text-base md:text-lg font-bold border ${item.borderColor} flex items-center gap-2 shadow-md shadow-current/20 transition-all duration-500 ease-out transform group-hover:scale-115 group-hover:-translate-y-1.5 group-hover:shadow-lg group-hover:shadow-current/40`}
                                >
                                  <span className="text-2xl transition-transform duration-500 group-hover:scale-125">
                                    {item.achievement.includes("1st")
                                      ? "🥇"
                                      : item.achievement.includes("2nd")
                                      ? "🥈"
                                      : item.achievement.includes("3rd")
                                      ? "🥉"
                                      : "🏆"}
                                  </span>
                                  <span className="tracking-wide transition-all duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]">
                                    {item.achievement}
                                  </span>
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
