import React from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    year: "2023 – Present",
    degree: "Bachelor's in CS",
    institute: "GIAIC (Governor Initiative AI & Computing)",
    description:
      "Currently pursuing advanced studies in Computer Science through the GIAIC initiative, with a strong emphasis on Artificial Intelligence and cutting-edge technologies. Presently in Quarter 3, deep-diving into Python programming and Agentic AI systems.",
    icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
  },
  {
    year: "2020 – 2022",
    degree: "Intermediate in Arts",
    institute: "Board of Intermediate Karachi",
    description:
      "Completed with focus on humanities subjects. Developed strong interest in technology and digital innovation during this time.",
    icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
  },
  {
    year: "2018 – 2020",
    degree: "Matriculation (Science)",
    institute: "Board of Secondary Education Karachi",
    description:
      "Studied core science subjects including Physics, Chemistry, and Biology. Developed a strong academic base and a growing curiosity for technology",
    icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
  },
];

const Education = () => {
  return (
    <section
      id="Education"
      className="max-w-5xl mx-auto py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-10 border-b border-neutral-800/50"
    >
      <div className="flex flex-col items-center text-center text-white mb-16">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Education
        </h2>
      </div>

      <div className="relative border-l-2 border-indigo-500/40 pl-10 space-y-12">
        {educationData.map((edu, index) => (
          <div key={index} className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-5 top-1 w-3.5 h-3.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full shadow-md"></div>

            <span className="text-sm text-gray-400">{edu.year}</span>

            {/* Degree with unique icon */}
            <h3 className="text-xl font-semibold text-white mt-1 flex items-center gap-2">
              {edu.icon}
              {edu.degree}
            </h3>

            <p className="text-sm text-indigo-300 mb-2">{edu.institute}</p>
            <p className="text-base text-gray-300">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
