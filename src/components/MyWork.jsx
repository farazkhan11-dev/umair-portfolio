
import React, { useRef } from "react";

import video1Raw from "../assets/videos/video1raw.mp4";
import video1Edited from "../assets/videos/video1edited.mp4";

import video2Raw from "../assets/videos/video2raw.mp4";
import video2Edited from "../assets/videos/video2edited.mp4";

import video3Raw from "../assets/videos/video3raw.mp4";
import video3Edited from "../assets/videos/video3edited.mp4";

const projects = [
  {
    title: "Project 1",
    raw: video1Raw,
    edited: video1Edited,
  },
  {
    title: "Project 2",
    raw: video2Raw,
    edited: video2Edited,
  },
  {
    title: "Project 3",
    raw: video3Raw,
    edited: video3Edited,
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
    <section id="mywork" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold uppercase tracking-widest">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Before & After
          </h2>

          <p className="text-slate-400 mt-4">
            See how raw footage is transformed into engaging content.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
            >
              <h3 className="text-white text-2xl font-semibold mb-6 text-center">
                {project.title}
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Before */}
                <div className="flex flex-col items-center">
                  <h4 className="text-red-400 text-xl font-semibold mb-3">
                    Before
                  </h4>

                  <video
                    ref={(el) => (videoRefs.current[index * 2] = el)}
                    onPlay={(e) => handlePlay(e.target)}
                    controls
                    className={`rounded-2xl border border-slate-700 ${
                      index === 2
                        ? "w-70 h-400px object-cover"
                        : "w-full"
                    }`}
                  >
                    <source src={project.raw} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* After */}
                <div className="flex flex-col items-center">
                  <h4 className="text-cyan-400 text-xl font-semibold mb-3">
                    After
                  </h4>

                  <video
                    ref={(el) => (videoRefs.current[index * 2 + 1] = el)}
                    onPlay={(e) => handlePlay(e.target)}
                    controls
                    className={`rounded-2xl border border-cyan-500 ${
                      index === 2
                        ? "w-70 h-400px object-cover"
                        : "w-full"
                    }`}
                  >
                    <source src={project.edited} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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

