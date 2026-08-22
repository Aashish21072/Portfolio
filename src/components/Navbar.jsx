import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-2xl font-bold text-white"
        >
          AASHISH<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-blue-500 hover:text-blue-400 transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-gray-300 hover:text-blue-500 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-gray-300 hover:text-blue-500 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-gray-300 hover:text-blue-500 transition"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="text-gray-300 hover:text-blue-500 transition"
          >
            Experience
          </a>

          <a
            href="#education"
            className="text-gray-300 hover:text-blue-500 transition"
          >
            Education
          </a>

          <a
            href="#contact"
            className="text-gray-300 hover:text-blue-500 transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 px-6 py-5">
          <div className="flex flex-col gap-5">

            <a
              href="#home"
              onClick={closeMenu}
              className="text-gray-300 hover:text-blue-500 transition"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="text-gray-300 hover:text-blue-500 transition"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="text-gray-300 hover:text-blue-500 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="text-gray-300 hover:text-blue-500 transition"
            >
              Projects
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="text-gray-300 hover:text-blue-500 transition"
            >
              Experience
            </a>

            <a
              href="#education"
              onClick={closeMenu}
              className="text-gray-300 hover:text-blue-500 transition"
            >
              Education
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-gray-300 hover:text-blue-500 transition"
            >
              Contact
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;