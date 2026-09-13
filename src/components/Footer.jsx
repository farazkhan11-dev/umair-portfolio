import React from "react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "My Work", href: "#mywork" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-[#060911] text-white overflow-hidden border-t border-white/10 backdrop-blur-3xl">
            
            {/* Background Glass Lighting Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/5 via-transparent to-black/20 pointer-events-none" />
            <div className="absolute top-10 left-1/4 w-[500px] h-[250px] bg-[#1d4ed8]/10 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[400px] h-[200px] bg-[#0284c7]/10 rounded-full blur-[140px] pointer-events-none" />

            {/* Subtle Grid Pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Top Gloss Edge Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Main Full-Width Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="grid md:grid-cols-3 gap-12 items-start">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-white text-4xl font-black tracking-tighter">
                                UMAIR<span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">.</span>
                            </h3>
                            <p className="text-slate-400 text-xs uppercase tracking-[0.25em] mt-1 font-medium">
                                Video Editor
                            </p>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-xs font-light">
                            Transforming raw footage into cinematic stories. Every frame tells a story — let's make yours unforgettable.
                        </p>

                        {/* Glass Status Badge */}
                        <div 
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl"
                            style={{
                                boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)"
                            }}
                        >
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
                            <span className="text-cyan-300 text-xs font-medium tracking-wide">
                                Available for new projects
                            </span>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <p className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-5">
                            Quick Links
                        </p>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center gap-2 text-slate-300 hover:text-cyan-300 text-sm transition-colors duration-200"
                                    >
                                        <span className="w-0 group-hover:w-3 h-px bg-cyan-400 transition-all duration-300 rounded-full shadow-[0_0_6px_#22d3ee]" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <p className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-5">
                            Contact
                        </p>
                        <div className="space-y-4">
                            <a
                                href="mailto:umair204060@gmail.com"
                                className="group flex items-center gap-3 text-slate-300 hover:text-cyan-300 text-sm transition-colors duration-200"
                            >
                                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 flex items-center justify-center backdrop-blur-md transition-all duration-200 flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4 text-cyan-400"
                                    >
                                        <rect x="2" y="4" width="20" height="16" rx="3" />
                                        <path d="M2 7l10 7 10-7" />
                                    </svg>
                                </div>
                                umair204060@gmail.com
                            </a>

                            <a
                                href="tel:03484819543"
                                className="group flex items-center gap-3 text-slate-300 hover:text-cyan-300 text-sm transition-colors duration-200"
                            >
                                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 flex items-center justify-center backdrop-blur-md transition-all duration-200 flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-4 h-4 text-cyan-400"
                                    >
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.06 2.18 2 2 0 012 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                    </svg>
                                </div>
                                0348 4819543
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-center text-center">
                    <p className="text-slate-400 text-xs font-light">
                        © {year} Muhammad Umair. All rights reserved.
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;