import React from "react";

const projects = [
  {
    title: "Ai Assistant",
    description:
      "This project is a Chainlit-based AI Greeting Agent that utilizes Google Gemini 2.0 Flash model and integrates a custom tool to fetch live GitHub data for Rohma Shabbir's. The agent is designed to respond politely, greet the user, and share profile info upon request. It includes session management, async API calls, and OAuth callback support.",
    link: "https://github.com/RohmaShabbir/Ai_Assistant.git",
    tags: ["UV", "Python", "Chainlit" , "Gemini API"],
  },
  {
    title: "Furniro",
    description:
      "A full-featured furniture e-commerce platform built with Next.js, TypeScript, and Sanity. It includes dynamic product listings, user authentication via Clerk, and a modern, responsive UI with Tailwind CSS",
    link: "https://github.com/RohmaShabbir/Hackathon-3_Furniro.git",
    tags: ["Next.JS", "Tailwind CSS", "TypeScript" , "Sanity", "Clerk"],
  },
  {
    title: "Python Projects",
    description:
      "A collection of diverse Python applications built during the Ramadan Coding Night, featuring AI assistants with Chainlit, Streamlit dashboards, and UV tool integrations for real-time interactions.",
    link: "https://github.com/RohmaShabbir/Ramadan_Coding_Night.git",
    tags: ["Pyhton", "Streamlit", "UV", "Chainlit"],
  },
  {
    title: "Bloggers",
    description:
      "A dynamic and responsive blog website built with Next.js and Sanity CMS. It allows users to read featured posts, explore categories, and manage content through a sleek interface powered by Tailwind CSS.",
    link: "https://github.com/RohmaShabbir/Bloggers.git",
    tags: ["Next.JS", "Tailwind CSS", "Sanity"],
  },
  {
    title: "Figme style Profolio",
    description:
      "A clean and modern developer portfolio inspired by a Figma UI template. Built using Next.js and Tailwind CSS, it showcases projects, skills, and contact information with a professional layout.",
    link: "https://github.com/RohmaShabbir/Figma_Style_Portfolio.git",
    tags: ["Next.JS", "Tailwind CSS", "Figma"],
  },
  {
    title: "Profolio",
    description:
      "A fully custom personal portfolio website built from scratch using Next.js and Tailwind CSS. It highlights projects, skills, and background with a simple yet elegant design.",
    link: "https://github.com/RohmaShabbir/Personal_Portfolio.git",
    tags: ["Next.JS", "Tailwind CSS", ],
  },
];

const Projects = () => {
  return (
    <section
    id="Projects"
    className="max-w-4xl mx-auto py-10 sm:py-10 md:py-14 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-10 border-b border-neutral-800/50"
  >
    <div className="flex flex-col items-center text-center text-white mb-16">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-[3.25rem] lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tight">
        Projects
      </h2>
    </div>

    {/* <div className="mt-16 text-center">
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 border border-indigo-500 text-indigo-400 font-medium rounded-lg hover:bg-indigo-500/10 transition-colors"
        >
          View All Projects
        </a>
      </div> */}

      <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-neutral-900/50 border border-neutral-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/30"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-neutral-400 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2 py-1 bg-neutral-800/50 text-indigo-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors group"
              >
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-16 text-center">
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 border border-indigo-500 text-indigo-400 font-medium rounded-lg hover:bg-indigo-500/10 transition-colors"
        >
          View All Projects
        </a>
      </div> */}
    </section>
  );
};

export default Projects;