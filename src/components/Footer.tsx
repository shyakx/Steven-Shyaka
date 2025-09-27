import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-400">
              © {currentYear} Steven Shyaka. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="#about" 
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;