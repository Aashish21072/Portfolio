function Skills() {
  const skills = [
    {
      name: "Excel",
      level: "Advanced",
      description:
        "Data cleaning, formulas, PivotTables, dashboards and analysis.",
    },
    {
      name: "SQL",
      level: "Intermediate",
      description:
        "Data querying, filtering, joins, aggregation and analysis.",
    },
    {
      name: "Python",
      level: "Intermediate",
      description:
        "Data analysis and manipulation using Python libraries.",
    },
    {
      name: "Power BI",
      level: "Intermediate",
      description:
        "Interactive dashboards, data visualization and business insights.",
    },
    {
      name: "Data Visualization",
      level: "Intermediate",
      description:
        "Creating clear charts, dashboards and meaningful visual reports.",
    },
    {
      name: "Statistics",
      level: "Intermediate",
      description:
        "Descriptive statistics, trends, comparisons and analytical reasoning.",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-500 font-semibold tracking-wide">
            MY SKILLS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Tools & Technologies
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg">
            The tools and technologies I use to analyze data,
            create insights and build effective reports.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-slate-900 border border-slate-800 rounded-xl p-7 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  {skill.name}
                </h3>

                <span className="text-sm text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                  {skill.level}
                </span>
              </div>

              <p className="text-slate-400 leading-7">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;