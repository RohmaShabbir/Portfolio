import React from "react";
import { TfiWorld } from "react-icons/tfi";

const languages = [
  { name: "English", level: "Fluent", percentage: 90, color: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" },
  { name: "Urdu", level: "Native", percentage: 100, color: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" },
];

const Language = () => {
  return (
    <section
      id="Language"
      className="max-w-4xl mx-auto py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-10 border-b border-neutral-800/50"
    >
      <div className="text-center text-white mb-12">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 tracking-tight">
          Languages
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white">
        {languages.map((lang, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-full">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-base">{lang.name}</span>
                <TfiWorld className="w-6 h-6 text-gray-400" />
                <span className="text-sm text-gray-400">{lang.level}</span>
              </div>
              <div className="w-full bg-neutral-800 rounded-full h-2">
                <div
                  className={`${lang.color} h-2 rounded-full`}
                  style={{ width: `${lang.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Language;