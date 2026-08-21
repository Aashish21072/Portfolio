function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-blue-500 font-medium mb-3">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Turning Data Into Insights
          </h2>
        </div>

        {/* About Text */}
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-slate-300 text-lg leading-8">
            I'm Aashish Chauhan, a B.Tech Computer Science graduate
            passionate about data analytics and technology. I enjoy
            working with data to discover patterns, identify trends,
            and generate meaningful insights.
          </p>

          <p className="text-slate-300 text-lg leading-8 mt-6">
            My core skills include Excel, SQL, Python, Power BI, and
            data visualization. I'm continuously learning and building
            practical projects to strengthen my analytical and
            problem-solving skills.
          </p>

        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-7 text-center">
            <h3 className="text-xl font-semibold mb-3">
              Data Analytics
            </h3>

            <p className="text-slate-300">
              Analyzing data and finding actionable insights.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-7 text-center">
            <h3 className="text-xl font-semibold mb-3">
              Data Visualization
            </h3>

            <p className="text-slate-300">
              Creating clear and meaningful dashboards.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-7 text-center">
            <h3 className="text-xl font-semibold mb-3">
              Problem Solving
            </h3>

            <p className="text-slate-300">
              Using technology to solve real-world problems.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;