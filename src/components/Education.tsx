import { GraduationCap, Award, Trophy } from "lucide-react";

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

        <div className="space-y-8">
          {/* Ramaiah Institute of Technology */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <GraduationCap className="w-8 h-8 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">Ramaiah Institute of Technology</h3>
                <p className="text-gray-400 mb-2">BE in Information Science and Engineering</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-500">2022 - 2026</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full font-semibold">
                    CGPA: 9.3
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RV PU College */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">RV PU College</h3>
                <p className="text-gray-400 mb-2">Pre-University College</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-500">2020 - 2022</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full font-semibold">
                    98.5% (State 8th Rank)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* PPEC Sadashivanagara */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-pink-500/10 rounded-lg">
                <Trophy className="w-8 h-8 text-pink-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">PPEC Sadashivanagara</h3>
                <p className="text-gray-400 mb-2">High School</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-500">2017 - 2020</span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full font-semibold">
                    100% (State 1st Rank)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
