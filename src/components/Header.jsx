import React from "react";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/images/profile.png";

const Header = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#060911] text-white flex items-center pt-32 pb-20 md:py-0 relative overflow-hidden"
    >
      {/* Background Glass Lighting Effects */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#1d4ed8]/15 rounded-full blur-[190px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#0284c7]/15 rounded-full blur-[170px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl mb-2 tracking-tight">
              HI I'M
            </h1>

            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 font-extrabold text-5xl sm:text-6xl lg:text-8xl mb-4 tracking-wider">
              UMAIR
            </h1>

            <h2 className="text-cyan-400 font-bold text-2xl sm:text-3xl lg:text-4xl mb-6">
              <TypeAnimation
                sequence={[
                  "VIDEO EDITOR",
                  2000,
                  "CREATIVE CONTENT EDITOR",
                  2000,
                ]}
                wrapper="span"
                speed={40}
                deletionSpeed={10}
                repeat={Infinity}
              />
            </h2>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-xl mb-8 leading-relaxed">
              I'm a passionate video editor dedicated to transforming raw
              footage into captivating visual experiences. Whether it's
              YouTube content, social media reels, commercials, or cinematic
              projects, I focus on creating edits that engage audiences and
              bring ideas to life.
            </p>

            {/* Glass CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#mywork"
                className="px-8 py-3.5 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-2xl border border-white/20 text-white hover:bg-white/10 rounded-full font-semibold transition-all duration-300"
                style={{
                  boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), 0 10px 20px rgba(0,0,0,0.4)"
                }}
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="px-8 py-3.5 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-2xl border border-white/20 text-white hover:bg-white/10 rounded-full font-semibold transition-all duration-300"
                style={{
                  boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), 0 10px 20px rgba(0,0,0,0.4)"
                }}
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image with Liquid Glass Frame */}
          <div className="flex justify-center">
            <div className="relative">
              
              {/* Outer Glowing Liquid Glass Ring */}
              <div 
                className="p-4 sm:p-6 bg-gradient-to-b from-white/15 via-white/5 to-transparent backdrop-blur-3xl border border-white/20 rounded-full relative"
                style={{
                  boxShadow: "inset 0 1px 2px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.5), 0 20px 50px rgba(0,0,0,0.6)"
                }}
              >
                <img
                  src={profile}
                  alt="Muhammad Umair"
                  className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-full border border-white/30 shadow-2xl relative z-10"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Header;