function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-white"
        >
          AASHISH<span className="text-blue-500">.</span>
        </a>

        {/* Navigation Links */}
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
      </div>
    </nav>
  );
}

export default Navbar;