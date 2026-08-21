function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-500 font-semibold tracking-wide">
            MY EXPERIENCE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Work Experience
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg">
            My professional experience and practical exposure to
            software development.
          </p>
        </div>

        {/* Experience Card */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-700 hidden md:block"></div>

          <div className="md:pl-12">

            {/* Timeline Dot */}
            <div className="absolute left-1.5 mt-2 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-950 hidden md:block"></div>

            {/* Experience */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-blue-500 transition">

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Front-End Developer Intern
                  </h3>

                  <p className="text-blue-400 font-medium mt-2">
                    Teaching Hub
                  </p>
                </div>

                <span className="text-slate-400 text-sm">
                  Apr 2025 – May 2025
                </span>

              </div>

              {/* Responsibilities */}
              <div className="mt-7 space-y-4">

                <div className="flex gap-3">
                  <span className="text-blue-500 mt-1">▹</span>
                  <p className="text-slate-400 leading-7">
                    Developed responsive and interactive web pages using
                    HTML, CSS, JavaScript, and modern front-end tools.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-blue-500 mt-1">▹</span>
                  <p className="text-slate-400 leading-7">
                    Improved UI layouts and responsiveness for mobile,
                    tablet, and desktop devices.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-blue-500 mt-1">▹</span>
                  <p className="text-slate-400 leading-7">
                    Collaborated with team members to implement UI
                    improvements and enhance user experience.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-blue-500 mt-1">▹</span>
                  <p className="text-slate-400 leading-7">
                    Debugged and resolved layout and functionality
                    issues to improve website performance.
                  </p>
                </div>

              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mt-8">

                <span className="px-4 py-2 bg-slate-800 text-blue-400 rounded-full text-sm">
                  HTML
                </span>

                <span className="px-4 py-2 bg-slate-800 text-blue-400 rounded-full text-sm">
                  CSS
                </span>

                <span className="px-4 py-2 bg-slate-800 text-blue-400 rounded-full text-sm">
                  JavaScript
                </span>

                <span className="px-4 py-2 bg-slate-800 text-blue-400 rounded-full text-sm">
                  Responsive Design
                </span>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;