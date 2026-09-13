import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-5 left-0 w-full z-50 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a
          href="#home"
          className="text-xl md:text-2xl font-bold text-white tracking-wide hover:opacity-90 transition"
          onClick={closeMenu}
        >
          Muhammad Umair
        </a>

        {/* Center Floating Glass Pill Navbar (Desktop) */}
        <nav 
          className="hidden md:flex items-center gap-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 px-3 py-1.5 rounded-full"
          style={{
            boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.4), 0 10px 30px rgba(0, 0, 0, 0.5)"
          }}
        >
          <a
            href="#home"
            className="text-slate-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-slate-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition"
          >
            About
          </a>
          <a
            href="#mywork"
            className="text-slate-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition"
          >
            My Work
          </a>
          <a
            href="#contact"
            className="text-slate-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Contact
          </a>
        </nav>

        {/* CTA Button (Liquid White Pill Style) */}
        <div className="hidden md:block">
          <a
            href="#contact"
              className="px-8 py-3.5 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-2xl border border-white/20 text-white hover:bg-white/10 rounded-full font-semibold transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown (Liquid Glass Card Style) */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden mt-3 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div 
          className="bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-3xl border border-white/20 rounded-3xl p-5 shadow-2xl max-w-sm mx-auto"
          style={{
            boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), 0 20px 40px rgba(0,0,0,0.6)"
          }}
        >
          <ul className="flex flex-col gap-2 text-center">
            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="block text-slate-200 hover:bg-white/10 py-2.5 rounded-xl transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block text-slate-200 hover:bg-white/10 py-2.5 rounded-xl transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#mywork"
                onClick={closeMenu}
                className="block text-slate-200 hover:bg-white/10 py-2.5 rounded-xl transition"
              >
                My Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block text-slate-200 hover:bg-white/10 py-2.5 rounded-xl transition"
              >
                Contact
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#contact"
                onClick={closeMenu}
                className="block bg-white text-black font-semibold py-2.5 rounded-full transition"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;