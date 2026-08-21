import profileImage from "../assets/Profile.png";
import resume from "../assets/Aashish_Chauhan_resume.pdf";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 px-6 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <p className="text-blue-500 font-semibold text-lg mb-4">
              HELLO, I'M
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Aashish Chauhan
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mt-4">
              Data Analyst
            </h2>

            <p className="text-slate-400 text-lg leading-8 mt-6 max-w-xl">
              I turn raw data into meaningful insights using Excel, SQL,
              Python and Power BI. I enjoy analyzing data, finding patterns
              and creating clear, actionable visualizations.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition"
              >
                View Projects
              </a>

              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-slate-600 hover:border-blue-500 text-white font-semibold rounded-lg transition"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-8">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition"
              >
                GitHub
              </a>

              <a
                href="mailto:aashishchauhan2172@gmail.com"
                className="text-slate-400 hover:text-blue-500 transition"
              >
                Email
              </a>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/20 rounded-full blur-3xl"></div>

              <img
                src={profileImage}
                alt="Aashish Chauhan"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-slate-700 shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;