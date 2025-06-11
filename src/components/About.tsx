import React from 'react';

const About = () => {
  return (
    // Main container for the About section.
    // Centered, with consistent padding for responsiveness.
    // Adds a top border for visual separation.
    <section id="about" className="max-w-4xl mx-auto py-28 px-4 lg:px-8 border-t border-neutral-800">
      
      {/* Content wrapper, centered text for the section */}
      <div className="flex flex-col items-center text-center text-white">
        {/* Section Heading with a subtle gradient text effect for uniqueness */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-500 to-purple-600 tracking-tight mb-10 pb-2">
          About <span className="font-light text-white">Me</span>
        </h2>

        {/* The main About paragraph with unique styling */}
        <p className="text-lg sm:text-xl font-light leading-relaxed 
                      p-8 md:p-10 rounded-2xl 
                      border border-purple-500/30 shadow-lg shadow-purple-500/10 
                      max-w-3xl mx-auto
                      hover:border-purple-500 hover:shadow-purple-500/30 
                      transition-all duration-300 ease-in-out
                      text-neutral-300"> {/* Main text color */}
          I'm a passionate web developer focused on building modern and responsive websites using technologies like{' '}
          <span className="font-semibold text-blue-400">Next.js</span> and{' '}
          <span className="font-semibold text-teal-400">Tailwind CSS</span>. Currently, I'm studying at GIAIC,
          where I'm exploring <span className="font-semibold text-pink-400">AI</span>,{' '}
          <span className="font-semibold text-yellow-400">Python</span>, and the latest web frameworks.
          My mission is to turn creative ideas into powerful digital experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
