import React from "react";

const experiences = [
  {
    year: "2024 – Present",
    role: "AI Developer & Frontend Developer",
    company: "Freelance / Personal Projects",
    description:
      "Building frontend applications using Next.js, Python, and AI tools. Participating in hackathons and improving project-based skills daily.",
  },
  {
    year: "2023 – Present",
    role: "Senior Student",
    company: "GIAIC (Governor Initiative AI & Computing)",
    description:
      "Among 1500+ students, I distinguished myself by winning a Hackathon, which led to me earning the title of Senior Student.",
  },
  {
    year: "2023 - Present",
    role: "Web Development Trainee",
    company: "GIAIC (Governor Initiative AI & Computing)",
    description:
      "Actively building and deploying real-world web projects using TypeScript, React, Next.js, and Tailwind CSS. Focused on creating responsive and user-friendly interfaces while optimizing performance and modern functionality.",
  },
];

const Experience = () => {
  return (
    <section
      id="Experience"
      className="max-w-5xl mx-auto py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-10 border-b border-neutral-800/50"
    >
      <div className="flex flex-col items-center text-center text-white mb-16">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-[3.25rem] lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tight">
          Experience
        </h2>
      </div>

      <div className="relative border-l-2 border-indigo-500/40 pl-10 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Circle dot on timeline */}
            <div className="absolute -left-5 top-1 w-3.5 h-3.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full shadow-md"></div>

            {/* Content */}
            <span className="text-sm text-gray-400">{exp.year}</span>
            <h3 className="text-xl font-semibold text-white mt-1">
              {exp.role}
            </h3>
            <p className="text-sm text-indigo-300 mb-2">{exp.company}</p>
            <p className="text-base text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
