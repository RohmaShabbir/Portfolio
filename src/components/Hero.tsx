'use client'
import React from 'react';
import { FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6';

const Hero = () => {
  return (
    <div className='max-w-5xl mx-auto border-b border-neutral-800/50 py-24 px-4 lg:px-8' 
         style={{ background: 'linear-gradient(to bottom, rgba(38, 38, 38, 0.1), transparent)' }}>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
        {/* Left Side: Content */}
        <div className='flex flex-col items-start text-left w-full lg:w-1/2 relative'>
          {/* Decorative elements */}
          <div className='absolute -top-6 -left-6 w-16 h-16 border-l-2 border-t-2 border-teal-400/30 opacity-80'></div>
          <div className='absolute -bottom-6 -right-6 w-16 h-16 border-r-2 border-b-2 border-purple-400/30 opacity-80'></div>
          
          <h1 className='text-5xl sm:text-6xl font-light text-white tracking-tight lg:text-7xl relative'>
            <span style={{ 
              color: 'transparent', 
              backgroundImage: 'linear-gradient(to right, #8bd8d2, #c792ea)', 
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text'
            }}>
              Rohma Shabbir
            </span>
            <span className='absolute -bottom-2 left-0 w-1/3 h-1 rounded-full' 
                  style={{ background: 'linear-gradient(to right, #2dd4bf, #a855f7)' }}></span>
          </h1>
          
          <h2 className='text-gray-300 sm:text-2xl font-light lg:text-3xl mt-6'>
            <span className='px-6 py-1 rounded-lg ' 
                  style={{ 
                    // backgroundColor: 'rgba(38, 38, 38, 0.5)', 
                    // borderColor: 'rgba(55, 65, 81, 0.5)'
                  }}>
              Frontend & AI Developer
            </span>
          </h2>

          {/* About Section */}
          <p className='text-gray-300 mt-8 text-base sm:text-lg leading-relaxed px-6 py-2 rounded-xl' 
             style={{ 
              //  backgroundColor: 'rgba(23, 23, 23, 0.3)', 
              //  backdropFilter: 'blur(10px)',
              //  border: '1px solid rgba(55, 65, 81, 0.5)'
             }}>
            I'm a passionate frontend and AI developer who loves turning ideas into real-world solutions.
            Currently exploring AI technologies and building modern, responsive web applications.
          </p>

          {/* Social Icons */}
          <div className='flex px-20 gap-6 mt-10 text-white text-2xl relative z-10'>
            <a href='https://x.com' target='_blank' rel='noopener noreferrer' 
               className='p-3 rounded-full transition-all duration-300 hover:border-teal-400/30'
               style={{ 
                 backgroundColor: 'rgba(38, 38, 38, 0.5)', 
                 border: '1px solid rgba(55, 65, 81, 0.5)'
               }}>
              <FaXTwitter className='hover:text-teal-300 transition' />
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' 
               className='p-3 rounded-full transition-all duration-300 hover:border-blue-400/30'
               style={{ 
                 backgroundColor: 'rgba(38, 38, 38, 0.5)', 
                 border: '1px solid rgba(55, 65, 81, 0.5)'
               }}>
              <FaLinkedin className='hover:text-blue-300 transition' />
            </a>
            <a href='https://github.com' target='_blank' rel='noopener noreferrer' 
               className='p-3 rounded-full transition-all duration-300 hover:border-purple-400/30'
               style={{ 
                 backgroundColor: 'rgba(38, 38, 38, 0.5)', 
                 border: '1px solid rgba(55, 65, 81, 0.5)'
               }}>
              <FaGithub className='hover:text-purple-300 transition' />
            </a>
          </div>
        </div>

        {/* Right Side: Gradient Sphere */}
        <div className='hidden lg:flex w-1/2 justify-center'>
          <div className='relative w-64 h-64'>
            <div className='absolute inset-0 rounded-full opacity-70' 
                 style={{ 
                   background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.2)',
                   filter: 'blur(20px)',
                   animation: 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                 }}></div>
            <div className='absolute inset-4 rounded-full' 
                 style={{ 
                   background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.1))',
                   border: '1px solid rgba(55, 65, 81, 0.5)',
                   backdropFilter: 'blur(10px)'
                 }}></div>
            <div className='absolute inset-8 rounded-full' 
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