import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="inline-block animate-slide-in-left">Steven</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 animate-gradient-shift bg-[length:200%_auto]">
                Shyaka
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-200 mb-6 md:mb-8 font-medium animate-slide-in-up delay-300">
              <span className="inline-block animate-typewriter bg-gradient-to-r from-blue-200 to-blue-300 bg-clip-text text-transparent">
                Software Engineer
              </span>
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 md:mb-12 leading-relaxed animate-fade-in-up delay-500">
              Master's student at Carnegie Mellon University specializing in Artificial Intelligence, 
              with professional experience in the banking and tech sectors. I create solutions that are 
              both user-focused and business-aligned.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12 md:mb-16 animate-fade-in-up delay-700">
              <button
                onClick={scrollToAbout}
                className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-400/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 text-sm md:text-base animate-pulse-glow hover:animate-none relative overflow-hidden group"
              >
                <span className="relative z-10">Learn More About Me</span>
                <ArrowDown size={18} className="group-hover:animate-bounce" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <a
                href="/resume.pdf"
                className="border-2 border-blue-400 text-blue-300 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center gap-2 text-sm md:text-base relative overflow-hidden group"
              >
                <span className="relative z-10">Download Resume</span>
                <Download size={18} className="group-hover:animate-bounce" />
                <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            <div className="animate-float flex justify-center md:justify-start animate-fade-in-up delay-900">
              <button 
                onClick={scrollToAbout} 
                className="text-blue-300 hover:text-blue-200 transition-all duration-300 p-2 rounded-full hover:bg-blue-800/30 group"
              >
                <ArrowDown size={28} className="group-hover:animate-bounce" />
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative animate-fade-in delay-1000">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full opacity-40 animate-pulse-glow"></div>
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <img 
                src="/images/portifolio-profile.jpg" 
                alt="Steven Shyaka - Software Engineer" 
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-blue-400 shadow-2xl animate-float hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;