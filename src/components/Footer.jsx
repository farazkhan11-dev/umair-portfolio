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
        <footer className="relative bg-slate-950 overflow-hidden">

            {/* Main Footer Body */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-12">
                <div className="grid md:grid-cols-3 gap-12 items-start">

                    {/* Brand col */}
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-white text-4xl font-black tracking-tighter">
                                UMAIR<span className="text-cyan-400">.</span>
                            </h3>
                            <p className="text-slate-500 text-xs uppercase tracking-[0.25em] mt-1">
                                Video Editor
                            </p>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Transforming raw footage into cinematic stories. Every frame tells a story — let's make yours unforgettable.
                        </p>

                        {/* Status badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            <span className="text-cyan-400 text-xs font-medium">
                                Available for new projects
                            </span>
                        </div>
                    </div>

                    {/* Nav col */}
                    <div>
                        <p className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-5">
                            Quick Links
                        </p>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                                    >
                                        <span className="w-0 group-hover:w-3 h-px bg-cyan-400 transition-all duration-300 rounded-full" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact col */}
                    <div>
                        <p className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-5">
                            Contact
                        </p>
                        <div className="space-y-4">
                            <a
                                href="mailto:umair204060@gmail.com"
                                className="group flex items-center gap-3 text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                            >
                                <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 flex items-center justify-center transition-all duration-200 flex-shrink-">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-3.5 h-3.5 text-cyan-400"
                                    >
                                        <rect x="2" y="4" width="20" height="16" rx="3" />
                                        <path d="M2 7l10 7 10-7" />
                                    </svg>
                                </div>
                                umair204060@gmail.com
                            </a>

                            <a
                                href="tel:03484819543"
                                className="group flex items-center gap-3 text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                            >
                                <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 flex items-center justify-center transition-all duration-200 flex-shrink-">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-3.5 h-3.5 text-cyan-400"
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

            {/* Bottom bar */}
            <div className="relative z-10 border-t border-slate-800/60">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-center text-center">
                    <p className="text-slate-600 text-xs">
                        © {year} Muhammad Umair. All rights reserved.
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;