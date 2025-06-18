import React from "react";

const About = () => {
  return (
    <section
      id="About"
      className="max-w-5xl mx-auto py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-10 border-b border-neutral-800/50"
    >
      <div className="flex flex-col items-center text-center text-white">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-[3.25rem] lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tight mb-8 sm:mb-10 pb-2">
          About <span className="font-light text-white">Me</span>
        </h2>

        <div
          className="text-base sm:text-lg md:text-xl font-light leading-relaxed 
                p-6 sm:p-7 md:p-8 lg:p-10  
                max-w-3xl sm:max-w-4xl 
                transition-all duration-300 ease-in-out
                text-gray-300 space-y-3 sm:space-y-4 text-left"
        >
          <p>
            I'm a passionate Frontend and AI Developer from Karachi, Pakistan. I
            have experience in creating modern web applications and AI
            assistants.
          </p>

          <p>
            Currently, I'm studying at GIAIC (Governor Initiative Artificial
            Intelligence & Computing), where I began my coding journey back in
            2023.
          </p>

          <p>
            Among 1500+ students, I distinguished myself by winning a Hackathon,
            which led to me earning the title of Senior Student.
          </p>

          <p>
            In my academic journey, I secured a B Grade in Quarter 1
            (TypeScript), and an A Grade in Quarter 2 (Next.js and Advanced Web
            Apps).
          </p>

          <p>
            I'm now diving into Quarter 3 and Quarter 4 focused on Agentic AI,
            which revolves around Python and modern AI development.
          </p>

          <p>
            So far, I've created my own personal AI assistant using Agentic AI,
            and I'm currently working on both simple and advanced agents to
            deepen my skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;