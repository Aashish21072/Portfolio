function Projects() {
  const projects = [
    {
      title: "Grocery Sales Dashboard",
      description:
        "Interactive Excel dashboard built using 300 sales records to analyze sales performance, trends, products, categories and key business metrics.",
      tools: "Excel • PivotTables • Pivot Charts • Data Analysis",
      link: "https://github.com/Aashish21072/Grocery-Sales-Dashboard",
    },
    {
      title: "FoodieHub",
      description:
        "Responsive food ordering web application with restaurant and menu data, search and filtering features, and reusable React components.",
      tools: "React.js • Redux Toolkit • Tailwind CSS • REST API",
      link: "https://github.com/Aashish21072/FoodieHub",
    },
    {
      title: "AIFusionChat",
      description:
        "AI chatbot supporting multiple AI model integrations with dynamic AI switching and real-time API-based responses.",
      tools: "React.js • CSS • Multiple AI APIs",
      link: "https://github.com/Aashish21072/AIFusionChat",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-500 font-semibold tracking-wide">
            MY WORK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg">
            A selection of projects where I used technology and data
            to solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
            >

              {/* Project Image */}
              <div className="h-44 bg-gradient-to-br from-blue-600/20 to-slate-900 flex items-center justify-center">
                <span className="text-5xl">📊</span>
              </div>

              {/* Project Content */}
              <div className="p-7">

                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-7 mb-5">
                  {project.description}
                </p>

                <p className="text-sm text-blue-400 mb-6">
                  {project.tools}
                </p>

                {/* GitHub Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white font-semibold hover:text-blue-400 transition cursor-pointer"
                >
                  View on GitHub →
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;