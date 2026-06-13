import React from "react";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/images/profile.png";
const Header = () => {
    return (
        <section
            id="home"
            className="min-h-screen bg-slate-950 flex items-center"
        >
            <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div>
                        <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl mb-2">
                            HI I'M
                        </h1>

                        <h1 className="text-white font-bold text-5xl sm:text-6xl lg:text-8xl mb-4">
                            UMAIR
                        </h1>

                        <h2 className="text-gray-400 font-bold text-2xl sm:text-3xl lg:text-5xl mb-6">
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

                        <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-xl mb-8">
                            I'm a passionate video editor dedicated to transforming raw
                            footage into captivating visual experiences. Whether it's
                            YouTube content, social media reels, commercials, or cinematic
                            projects, I focus on creating edits that engage audiences and
                            bring ideas to life.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#mywork"
                                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-medium transition"
                            >
                                View My Work
                            </a>

                            <a
                                href="#contact"
                                className="px-6 py-3 border border-slate-700 hover:border-cyan-500 text-white rounded-full font-medium transition"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

                            <img
                                src={profile}
                                alt="Muhammad Umair"
                                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-500"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Header;