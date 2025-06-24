import React from "react";
import Image from "next/image";
import project1 from "../app/assets/projects/project2.jpg";
import project2 from "../app/assets/projects/project2.jpg";
import project3 from "../app/assets/projects/project2.jpg";

const projects = [
  {
    title: "Furniture E-Commerce Website",
    description:
      "A modern furniture store built with Next.js, Tailwind CSS, and Sanity. It includes a dynamic product page, shopping cart, and CMS integration.",
    image: project1,
    link: "https://yourproject1-link.com",
    tags: ["Next.js", "Tailwind CSS", "Sanity"],
  },
  {
    title: "AI-Powered Resume Builder",
    description:
      "An AI-integrated resume builder that allows users to create resumes dynamically using Streamlit and Python, featuring PDF export and data persistence.",
    image: project2,
    link: "https://yourproject2-link.com",
    tags: ["Python", "Streamlit", "Machine Learning"],
  },
  {
    title: "SkillBridge Freelancer App",
    description:
      "A Streamlit Python app for managing clients, payments, and projects. Built with OOP, authentication, and JSON database simulation.",
    image: project3,
    link: "https://yourproject3-link.com",
    tags: ["Python", "OOP", "Streamlit"],
  },
];

const Projects = () => {
  return (
    <section
    id="Projects"
    className="max-w-4xl mx-auto py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-10 border-b border-neutral-800/50"
  >
    <div className="flex flex-col items-center text-center text-white mb-16">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-[3.25rem] lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tight">
        Projects
      </h2>
    </div>

      <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-neutral-900/50 border border-neutral-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30"
          >
            <div className="relative w-full h-48 sm:h-56">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent" />
            </div>
            <div className="p-6">
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
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-neutral-400 text-sm mb-4">
                {project.description}
              </p>
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

      <div className="mt-16 text-center">
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 border border-indigo-500 text-indigo-400 font-medium rounded-lg hover:bg-indigo-500/10 transition-colors"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;