'use client'
import React from 'react';
import { FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div className='max-w-5xl mx-auto border-b border-neutral-800/50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8' 
         style={{ background: 'linear-gradient(to bottom, rgba(38, 38, 38, 0.1), transparent)' }}>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10'>
        {/* Left Side: Content */}
        <div className='flex flex-col items-center md:items-start text-center md:text-left w-full lg:w-1/2 relative'>
          {/* Decorative elements - visible on all screens */}
          <div className='absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 border-l-2 border-t-2 border-teal-400/30 opacity-80'></div>
          <div className='absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 border-r-2 border-b-2 border-purple-400/30 opacity-80'></div>
          
          <h1 className='text-4xl xs:text-5xl sm:text-6xl font-light text-white tracking-tight lg:text-7xl relative'>
            <span style={{ 
              color: 'transparent', 
              backgroundImage: 'linear-gradient(to right, #8bd8d2, #c792ea)', 
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text'
            }}>
              Rohma Shabbir
            </span>
            <span className='absolute -bottom-1 sm:-bottom-2 left-0 w-1/3 h-0.5 sm:h-1 rounded-full' 
                  style={{ background: 'linear-gradient(to right, #2dd4bf, #a855f7)' }}></span>
          </h1>
          
          <h2 className='text-gray-300 text-lg sm:text-xl md:text-2xl font-light lg:text-3xl mt-4 sm:mt-6'>
            <span className='px-3 sm:px-4 py-0.5 sm:py-1 md:px-6 md:py-1 rounded-lg'>
              Frontend & AI Developer
            </span>
          </h2>

          {/* About Section */}
          <p className='text-gray-300 mt-5 sm:mt-6 md:mt-8 text-sm xs:text-base sm:text-lg leading-relaxed px-4 sm:px-6 py-2 rounded-xl max-w-md md:max-w-none'>
          I design modern web interfaces and build smart AI-powered applications. 
          Currently As a student at GIAIC, I’m passionate about merging creativity with technology to shape the digital future.
          </p>

          {/* Social Icons */}
          <div className='flex lg:px-20 justify-center md:justify-start gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8 md:mt-10 text-white text-xl sm:text-2xl relative z-10'>
            <a href='https://x.com/X_Rohma?t=J9w1eXHOfDLlpBhWdJ4yuA&s=08' target='_blank' rel='noopener noreferrer' 
               className='p-2 sm:p-3 rounded-full transition-all duration-300 hover:border-teal-400/30'
               style={{ 
                 backgroundColor: 'rgba(38, 38, 38, 0.5)', 
                 border: '1px solid rgba(55, 65, 81, 0.5)'
               }}>
              <FaXTwitter className='hover:text-teal-300 transition' />
            </a>
            <a href='https://www.linkedin.com/in/rohma-shabbir-216a662ba/' target='_blank' rel='noopener noreferrer' 
               className='p-2 sm:p-3 rounded-full transition-all duration-300 hover:border-blue-400/30'
               style={{ 
                 backgroundColor: 'rgba(38, 38, 38, 0.5)', 
                 border: '1px solid rgba(55, 65, 81, 0.5)'
               }}>
              <FaLinkedin className='hover:text-blue-300 transition' />
            </a>
            <a href='https://github.com/RohmaShabbir' target='_blank' rel='noopener noreferrer' 
               className='p-2 sm:p-3 rounded-full transition-all duration-300 hover:border-purple-400/30'
               style={{ 
                 backgroundColor: 'rgba(38, 38, 38, 0.5)', 
                 border: '1px solid rgba(55, 65, 81, 0.5)'
               }}>
              <FaGithub className='hover:text-purple-300 transition' />
            </a>
          </div>
        </div>

        {/* Right Side: Gradient Sphere - Visible on all screens but adjusted size */}
        <div className='hidden lg:flex justify-center mt-8 lg:mt-0 w-full lg:w-1/2'>
          <div className='relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-64 lg:h-64'>
            <div className='absolute inset-0 rounded-full opacity-70' 
                 style={{ 
                   background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.2)',
                   filter: 'blur(20px)',
                   animation: 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                 }}></div>
            <div className='absolute inset-2 sm:inset-3 md:inset-4 rounded-full' 
                 style={{ 
                   background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.1))',
                   border: '1px solid rgba(55, 65, 81, 0.5)',
                   backdropFilter: 'blur(10px)'
                 }}></div>
            <div className='absolute inset-4 sm:inset-6 md:inset-8 rounded-full' 
                 style={{ 
                   background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.05))',
                   border: '1px solid rgba(55, 65, 81, 0.3)',
                   animation: 'float 8s ease-in-out infinite'
                 }}></div>
          </div>
        </div>
      </div>

      {/* Add these styles in your global CSS or style tag */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.4; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default Hero;

