function Education() {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science Engineering",
      college: "MPCT Gwalior, Madhya Pradesh",
      year: "2026",
      score: "GPA: 7.4 / 10",
    },
    {
      degree: "Diploma",
      field: "Electrical Engineering",
      college: "Dr. B.R. Ambedkar Polytechnic College, Gwalior",
      year: "2019 – 2022",
      score: "GPA: 8.2 / 10",
    },
    {
      degree: "High School (10th)",
      field: "MP Board",
      college: "Madhya Pradesh Board",
      year: "2019",
      score: "Percentage: 82.6%",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-500 font-semibold tracking-wide">
            MY EDUCATION
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Education
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg">
            My academic background and educational journey.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">

          {education.map((item) => (
            <div
              key={item.degree}
              className="bg-slate-950 border border-slate-800 rounded-xl p-7 hover:border-blue-500 transition-all duration-300"
            >

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {item.degree}
                  </h3>

                  <p className="text-blue-400 font-medium mt-2">
                    {item.field}
                  </p>

                  <p className="text-slate-400 mt-3">
                    {item.college}
                  </p>
                </div>

                <div className="md:text-right">
                  <p className="text-slate-300 font-medium">
                    {item.year}
                  </p>

                  <p className="text-blue-400 mt-2">
                    {item.score}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;