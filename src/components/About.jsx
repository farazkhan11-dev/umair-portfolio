import React from "react";
import laptop from "../assets/images/laptop.png";

const About = () => {
  return (
    <section 
      id="about" 
      className="bg-[#060911] text-white py-24 relative overflow-hidden"
    >
      {/* Background Glass Lighting Effects */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[550px] h-[550px] bg-[#1d4ed8]/15 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#0284c7]/15 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Container with Liquid Glass Frame */}
          <div className="flex justify-center">
            <div 
              className="p-3 sm:p-4 bg-gradient-to-b from-white/15 via-white/5 to-transparent backdrop-blur-3xl border border-white/20 rounded-[40px] relative w-full max-w-lg"
              style={{
                boxShadow: "inset 0 1px 2px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.5), 0 25px 50px -12px rgba(0, 0, 0, 0.7)"
              }}
            >
              {/* Top Edge Glass Reflection Highlight */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

              <img
                src={laptop}
                alt="Muhammad Umair"
                className="w-full h-[380px] sm:h-[480px] object-cover rounded-[32px] border border-white/20 shadow-2xl relative z-10"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            {/* Liquid Glass Small Badge */}
            <span 
              className="inline-block bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl border border-white/20 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-4"
              style={{
                boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), 0 4px 15px rgba(0,0,0,0.3)"
              }}
            >
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6 tracking-tight leading-tight">
              Crafting Stories Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Creative Editing
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              I'm a passionate video editor dedicated to transforming raw
              footage into captivating visual experiences. Whether it's
              YouTube content, social media reels, commercials, or cinematic
              projects, I focus on creating edits that engage audiences and
              bring ideas to life.
            </p>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              With expertise in professional editing techniques, color grading,
              sound design, and motion graphics, I help creators and brands
              tell their stories in the most impactful way possible.
            </p>

            {/* Skills */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-4 tracking-wide">
                Skills & Tools
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "CapCut Expert",
                  "Color Grading",
                  "YouTube Editing",
                  "Reels & Shorts",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-5 py-2.5 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-2xl border border-white/20 text-slate-100 rounded-full text-sm font-medium transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-400"
                    style={{
                      boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), 0 6px 16px rgba(0,0,0,0.4)"
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;