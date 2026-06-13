import React, { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a
                        href="#home"
                        className="text-2xl font-bold text-white tracking-wide"
                        onClick={closeMenu}
                    >
                        Muhammad Umair
                    </a>

                    {/* Nav Links - Desktop */}
                    <ul className="hidden md:flex items-center gap-8">
                        <li>
                            <a href="#home" className="text-slate-300 hover:text-cyan-400 transition">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#mywork" className="text-slate-300 hover:text-cyan-400 transition">
                                My Work
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition">
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* CTA Button - Desktop */}
                    <a
                        href="#contact"
                        className="hidden md:block bg-black hover:bg-cyan-950 text-white px-5 py-2 rounded-full font-medium transition"
                    >
                        Hire Me
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? (
                            // X icon when open
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger icon when closed
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col bg-slate-900 border-t border-slate-800 px-6 py-4 gap-4">
                    <li>
                        <a
                            href="#home"
                            onClick={closeMenu}
                            className="block text-slate-300 hover:text-cyan-400 transition py-2 border-b border-slate-800"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            onClick={closeMenu}
                            className="block text-slate-300 hover:text-cyan-400 transition py-2 border-b border-slate-800"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#mywork"
                            onClick={closeMenu}
                            className="block text-slate-300 hover:text-cyan-400 transition py-2 border-b border-slate-800"
                        >
                            My Work
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="block text-slate-300 hover:text-cyan-400 transition py-2 border-b border-slate-800"
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="block text-center bg-cyan-500 hover:bg-cyan-400 text-white px-5 py-2 rounded-full font-medium transition mt-2"
                        >
                            Hire Me
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
