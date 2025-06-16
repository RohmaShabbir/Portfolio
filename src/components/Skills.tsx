import { div } from "framer-motion/client";
import React from "react";

const skillsData = [
  { name: "TypeScript", level: 75 },
  { name: "HTML/CSS", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "JavaScripts", level: 60 },
  { name: "Agentic AI", level: 65 },
  { name: "React", level: 85 },
  { name: "Python", level: 80 },
  { name: "Tailwind CSS", level: 90 },
];

const Skills = () => {
  return (
    <div id="Skills" className="max-w-5xl mx-auto py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-10 border-b border-neutral-800/50">
      <div className="flex flex-col items-center text-center text-white">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-[3.25rem] lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tight mb-12">
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-8">
        {skillsData.map((skill, index) => (
          <div key={index} className="transition-all duration-300 hover:scale-[1.01]">
            <p className="text-sm sm:text-base font-semibold text-gray-300 mb-2">
              {skill.name} - {skill.level}%
            </p>
            <div className="w-full bg-gray-700/30 rounded-full h-2 sm:h2.5">
            <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2 sm:h-2.5 rounded-full"
            style={{width: `${skill.level}%`}}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;