import React from "react";
import laptop from "../assets/images/laptop.png";

const About = () => {
  return (
    <section id="about" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-3xl"></div>

              <img
                src={laptop}
                alt="Muhammad Umair"
                className="relative w-full max-w-lg h-[500px] object-cover rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/10"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-cyan-400 font-semibold uppercase tracking-widest">
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Crafting Stories Through
              <span className="text-cyan-400"> Creative Editing</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              I'm a passionate video editor dedicated to transforming raw
              footage into captivating visual experiences. Whether it's
              YouTube content, social media reels, commercials, or cinematic
              projects, I focus on creating edits that engage audiences and
              bring ideas to life.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              With expertise in professional editing techniques, color grading,
              sound design, and motion graphics, I help creators and brands
              tell their stories in the most impactful way possible.
            </p>

            {/* Skills */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-4">
                Skills & Tools
              </h3>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-slate-900 border border-cyan-500/30 text-cyan-400 rounded-full hover:bg-cyan-500/10 transition">
                  CapCut Expert
                </span>

                <span className="px-4 py-2 bg-slate-900 border border-cyan-500/30 text-cyan-400 rounded-full hover:bg-cyan-500/10 transition">
                  Color Grading
                </span>

                <span className="px-4 py-2 bg-slate-900 border border-cyan-500/30 text-cyan-400 rounded-full hover:bg-cyan-500/10 transition">
                  YouTube Editing
                </span>

                <span className="px-4 py-2 bg-slate-900 border border-cyan-500/30 text-cyan-400 rounded-full hover:bg-cyan-500/10 transition">
                  Reels & Shorts
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;