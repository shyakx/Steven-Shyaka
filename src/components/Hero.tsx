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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Steven
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Shyaka
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 font-medium">
              Software Engineer
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-12 leading-relaxed">
              Master's student at Carnegie Mellon University specializing in Artificial Intelligence, 
              with professional experience in the banking and tech sectors. I create solutions that are 
              both user-focused and business-aligned.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12 md:mb-16">
              <button
                onClick={scrollToAbout}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-200 flex items-center gap-2 text-sm md:text-base"
              >
                Learn More About Me
                <ArrowDown size={18} />
              </button>
              
              <a
                href="/resume.pdf"
                className="border-2 border-gray-600 text-gray-300 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 text-sm md:text-base"
              >
                Download Resume
                <Download size={18} />
              </a>
            </div>

            <div className="animate-bounce flex justify-center md:justify-start">
              <button onClick={scrollToAbout} className="text-gray-400 hover:text-blue-400 transition-colors">
                <ArrowDown size={28} />
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-20 animate-pulse"></div>
              <img 
                src="/images/portifolio-profile.jpg" 
                alt="Steven Shyaka - Software Engineer" 
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-gray-800 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;