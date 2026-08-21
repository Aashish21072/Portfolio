function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold text-white"
          >
            AASHISH<span className="text-blue-500">.</span>
          </a>

          {/* Copyright */}
          <p className="text-slate-500 text-sm text-center">
            © 2026 Aashish Chauhan. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5">

            <a
              href="https://github.com/Aashish21072"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition cursor-pointer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-500 transition cursor-pointer"
            >
              LinkedIn
            </a>

            <a
              href="mailto:aashishchauhan2172@gmail.com"
              className="text-slate-400 hover:text-blue-500 transition cursor-pointer"
            >
              Email
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;