import React, { useRef } from "react";

// Image Imports
import alexProfilePic from "../assets/images/Alex Hormozi Profile Pic.jpg.jpeg";
import blueTick from "../assets/images/Blue Tick.png";

// Video Imports
import rawVideo from "../assets/videos/raw.mp4";
import trialVideo from "../assets/videos/Trial.mp4";

import video1Raw from "../assets/videos/video1raw.mp4";
import video1Edited from "../assets/videos/video1edited.mp4";

import video2Raw from "../assets/videos/video2raw.mp4";
import video2Edited from "../assets/videos/video2edited.mp4";

import video3Raw from "../assets/videos/video3raw.mp4";
import video3Edited from "../assets/videos/video3edited.mp4";

const projects = [
  {
    title: "Project 1",
    subtitle: "Alex Hormozi style",
    raw: rawVideo,
    edited: trialVideo,
    showProfile: true,
  },
  {
    title: "Project 2",
    subtitle: "Minimal & luxury agency style",
    raw: video1Raw,
    edited: video1Edited,
    showProfile: false,
  },
  {
    title: "Project 3",
    subtitle: "Reels & Shorts style",
    raw: video2Raw,
    edited: video2Edited,
    showProfile: false,
  },
  {
    title: "Project 4",
    subtitle: "Dynamic Editing style",
    raw: video3Raw,
    edited: video3Edited,
    showProfile: false,
  },
];

const MyWork = () => {
  const videoRefs = useRef([]);

  const handlePlay = (currentVideo) => {
    videoRefs.current.forEach((video) => {
      if (video && video !== currentVideo) {
        video.pause();
      }
    });
  };

  return (
    // Dark Liquid Background with Ambient Glows
    <section id="mywork" className="bg-[#060911] text-white py-24 min-h-screen relative overflow-hidden">
      
      {/* Background Ambient Blur Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#1d4ed8]/15 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#0284c7]/15 rounded-full blur-[180px] pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center mb-16">
          <span 
            className="inline-block bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl border border-white/20 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-4"
            style={{
              boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), 0 4px 15px rgba(0,0,0,0.3)"
            }}
          >
            Portfolio Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mt-2">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Work
            </span>
          </h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg max-w-xl mx-auto font-light">
            See how raw footage is transformed into engaging content.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col items-center">
              
              {/* Ultra Liquid Glass Badge */}
              <div 
                className="bg-gradient-to-b from-white/20 via-white/10 to-transparent backdrop-blur-3xl border border-white/30 px-8 py-2.5 rounded-2xl font-bold text-lg mb-6 text-slate-100 tracking-wide"
                style={{
                  boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.4), 0 10px 25px -5px rgba(0, 0, 0, 0.5)"
                }}
              >
                {project.title}
              </div>

              {/* Main Card Container */}
              <div 
                className="w-full bg-gradient-to-b from-white/15 via-white/5 to-transparent backdrop-blur-3xl border border-white/20 rounded-[36px] p-6 sm:p-8 relative overflow-hidden"
                style={{
                  boxShadow: "inset 0 1px 2px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.5), 0 25px 50px -12px rgba(0, 0, 0, 0.7)"
                }}
              >
                {/* Top Glass Highlight Line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                {/* Subtitle */}
                <h3 className="text-xl md:text-2xl font-semibold text-center text-slate-100 mb-6 tracking-wide">
                  {project.subtitle}
                </h3>

                {/* Profile Badge */}
                {project.showProfile && (
                  <div 
                    className="flex items-center justify-between max-w-sm mx-auto mb-8 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-2xl p-3 px-5 rounded-2xl border border-white/25"
                    style={{
                      boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.4), 0 8px 20px rgba(0, 0, 0, 0.4)"
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={alexProfilePic}
                        alt="Alex Hormozi"
                        className="w-12 h-12 rounded-full object-cover border border-white/30 shadow-md"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-sm sm:text-base text-white">
                            Alex Hormozi
                          </span>
                          <img
                            src={blueTick}
                            alt="Verified Tick"
                            className="w-4 h-4 object-contain"
                          />
                        </div>
                        <p className="text-xs text-slate-300">
                          hormozi • 4.9M followers
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Videos Container */}
                <div className="grid md:grid-cols-2 gap-8 items-start justify-items-center">
                  
                  {/* Before Video */}
                  <div className="flex flex-col items-center w-full max-w-sm">
                    <span className="text-rose-400 font-semibold text-sm md:text-base mb-3 drop-shadow-[0_0_8px_rgba(251,113,133,0.4)] tracking-wide uppercase">
                      Before
                    </span>
                    <div className="w-full rounded-2xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent backdrop-blur-xl border border-white/20 shadow-2xl">
                      <video
                        ref={(el) => (videoRefs.current[index * 2] = el)}
                        onPlay={(e) => handlePlay(e.target)}
                        controls
                        className="w-full max-h-[500px] rounded-xl bg-black/60 outline-none"
                        style={{
                          boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)"
                        }}
                      >
                        <source src={project.raw} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>

                  {/* After Video */}
                  <div className="flex flex-col items-center w-full max-w-sm">
                    <span className="text-cyan-400 font-semibold text-sm md:text-base mb-3 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] tracking-wide uppercase">
                      After
                    </span>
                    <div className="w-full rounded-2xl p-1 bg-gradient-to-b from-cyan-400/30 via-cyan-400/10 to-transparent backdrop-blur-xl border border-cyan-400/40 shadow-2xl">
                      <video
                        ref={(el) => (videoRefs.current[index * 2 + 1] = el)}
                        onPlay={(e) => handlePlay(e.target)}
                        controls
                        className="w-full max-h-[500px] rounded-xl bg-black/60 outline-none"
                        style={{
                          boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)"
                        }}
                      >
                        <source src={project.edited} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
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

export default MyWork;