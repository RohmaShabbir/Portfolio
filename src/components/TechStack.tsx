import React from 'react'
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiPython } from "react-icons/si";
import { FaFigma , FaNodeJs } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiShadcnui } from "react-icons/si";
import { RiVercelFill } from "react-icons/ri";



const techStack = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Node.JS", icon: <FaNodeJs /> },
  { name: "React", icon: <SiReact/> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "VS Code", icon: <VscVscode /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "ShadcnUI", icon: <SiShadcnui /> },
  { name: "Vercel", icon: <RiVercelFill /> },
];

const TechStack = () => {
  return (
    <section
      id="Tech Stack"
      className="max-w-5xl mx-auto py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-10 border-b border-neutral-800/50"
    >
      <div className="flex flex-col items-center text-center text-white mb-16">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-[3.25rem] lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tight mb-6">
          Tech Stack
        </h2>
        <p className="max-w-2xl text-base sm:text-lg text-gray-400 font-light">
          Here are the modern tools and technologies I use to design, develop, and deploy powerful digital experiences — turning creative ideas into functional, real-world applications.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-white">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 border border-neutral-700 rounded-full bg-neutral-900/40 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
          >
            <div className="text-3xl mb-2">{tech.icon}</div>
            <p className="text-sm font-medium text-gray-300">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
