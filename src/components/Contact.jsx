function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-500 font-semibold tracking-wide">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Let's Connect
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg">
            I'm currently looking for opportunities in Data Analytics.
            If you'd like to discuss an opportunity, project, or just
            connect, feel free to reach out.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* Email */}
          <a
            href="mailto:aashishchauhan2172@gmail.com"
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="text-3xl mb-4">
              📧
            </div>

            <h3 className="text-lg font-bold text-white">
              Email
            </h3>

            <p className="text-slate-400 mt-3 text-sm break-all">
              aashishchauhan2172@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+919981390751"
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="text-3xl mb-4">
              📱
            </div>

            <h3 className="text-lg font-bold text-white">
              Phone
            </h3>

            <p className="text-slate-400 mt-3 text-sm">
              +91 9981390751
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="text-3xl mb-4">
              💼
            </div>

            <h3 className="text-lg font-bold text-white">
              LinkedIn
            </h3>

            <p className="text-slate-400 mt-3 text-sm">
              Connect with me
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Aashish21072"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="text-3xl mb-4">
              🐙
            </div>

            <h3 className="text-lg font-bold text-white">
              GitHub
            </h3>

            <p className="text-slate-400 mt-3 text-sm">
              View my projects
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;