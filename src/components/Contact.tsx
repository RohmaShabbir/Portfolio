import React from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { LuLinkedin, LuGithub  } from "react-icons/lu";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="max-w-5xl mx-auto py-10 sm:py-10 md:py-14 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-10 border-b border-neutral-800/50"
    >
      <div className="flex flex-col items-center text-center text-white mb-16">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Contact
        </h1>
        <h3 className="text-3xl sm:text-4xl font-semibold text-center mb-6 mt-14 text-indigo-400 inline-block bg-clip-text">
          Get in Touch
        </h3>
        <p className="text-center mb-10 text-neutral-400 max-w-2xl">
        Passionate about web development and AI, I'm always open to learning, collaborating, and exploring new opportunities. Let’s connect and create something impactful together
        </p>

        <div className="space-y-6 text-neutral-300">
          {/* Email */}
          <div className="flex items-center gap-3 justify-center">
            <FaEnvelope className="text-pink-500" />
            <span>rohmafatima132@gmail.com</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 justify-center">
            <FaMapMarkerAlt className="text-purple-500" />
            <span>Karachi, Pakistan</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center pt-4">
            <a href="https://x.com/X_Rohma?t=J9w1eXHOfDLlpBhWdJ4yuA&s=08" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-white hover:text-gray-400 transition text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/rohma-shabbir-216a662ba/" target="_blank" rel="noopener noreferrer">
              <LuLinkedin className="text-white hover:text-gray-400 transition text-2xl" />
            </a>
            <a href="https://github.com/RohmaShabbir" target="_blank" rel="noopener noreferrer">
              <LuGithub className="text-white hover:text-gray-400 transition text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;



// import React from 'react';
// import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaPhone } from 'react-icons/fa';

// const Contact = () => {
//   return (
//     <section
//       id="Contact"
//       className="max-w-5xl mx-auto py-10 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 border-b border-neutral-800/50"
//     >
//       <div className="flex flex-col items-center text-center text-white mb-16">
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6">
//           Contact
//         </h1>
        
//         <div className="relative w-full max-w-2xl">
//           <h3 className="text-3xl sm:text-4xl font-semibold text-center mb-8 mt-6 text-indigo-400 inline-block bg-clip-text relative z-10">
//             Get in Touch
//             <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
//           </h3>
//         </div>
        
//         <p className="text-center mb-12 text-neutral-300 max-w-2xl text-lg leading-relaxed">
//           Have a question, project idea, or just want to say hello? I'm always open to new opportunities and collaborations.
//         </p>

//         <div className="w-full max-w-md space-y-6 text-neutral-300 bg-neutral-800/30 backdrop-blur-sm rounded-xl p-8 border border-neutral-700/50 shadow-lg">
//           {/* Email */}
//           <div className="flex items-center gap-4 justify-start bg-neutral-700/20 hover:bg-neutral-700/40 transition p-4 rounded-lg">
//             <div className="p-3 rounded-full bg-pink-500/20">
//               <FaEnvelope className="text-pink-400 text-xl" />
//             </div>
//             <div>
//               <p className="text-sm text-neutral-400">Email</p>
//               <span className="text-white">rohmaname@example.com</span>
//             </div>
//           </div>

//           {/* Location */}
//           <div className="flex items-center gap-4 justify-start bg-neutral-700/20 hover:bg-neutral-700/40 transition p-4 rounded-lg">
//             <div className="p-3 rounded-full bg-purple-500/20">
//               <FaMapMarkerAlt className="text-purple-400 text-xl" />
//             </div>
//             <div>
//               <p className="text-sm text-neutral-400">Location</p>
//               <span className="text-white">Karachi, Pakistan</span>
//             </div>
//           </div>

//           {/* Phone (example addition) */}
//           <div className="flex items-center gap-4 justify-start bg-neutral-700/20 hover:bg-neutral-700/40 transition p-4 rounded-lg">
//             <div className="p-3 rounded-full bg-indigo-500/20">
//               <FaPhone className="text-indigo-400 text-xl" />
//             </div>
//             <div>
//               <p className="text-sm text-neutral-400">Phone</p>
//               <span className="text-white">+92 300 1234567</span>
//             </div>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-6 justify-center pt-6">
//             <a href="https://github.com/RohmaShabbir" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-neutral-700 hover:bg-pink-500/20 transition group">
//               <FaGithub className="text-white group-hover:text-pink-400 transition text-xl" />
//             </a>
//             <a href="https://linkedin.com/in/rohmashabbir" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-neutral-700 hover:bg-purple-500/20 transition group">
//               <FaLinkedin className="text-white group-hover:text-purple-400 transition text-xl" />
//             </a>
//             <a href="https://instagram.com/rohmashabbir" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-neutral-700 hover:bg-indigo-500/20 transition group">
//               <FaInstagram className="text-white group-hover:text-indigo-400 transition text-xl" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;