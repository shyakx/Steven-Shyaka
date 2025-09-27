import React from 'react';
import { Code, Database, Brain, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate Master's student at Carnegie Mellon University specializing in Artificial Intelligence 
              with a unique blend of technical expertise and real-world business experience. My journey spans across AI, 
              machine learning, full-stack development, and professional roles in Rwanda's banking and tech sectors.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My work bridges the gap between cutting-edge technology and practical business solutions. 
              From building internet banking platforms to designing e-commerce applications, I focus on 
              creating user-centered experiences that drive business value.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              What sets me apart is my ability to understand both technical complexities and customer needs, 
              allowing me to build solutions that are not only technically sound but also strategically aligned 
              with business objectives.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl text-center hover:shadow-lg hover:shadow-blue-500/25 transition-shadow duration-200 border border-gray-700">
              <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Full-Stack Development</h3>
              <p className="text-sm text-gray-300">React, Flutter, Python, JavaScript</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl text-center hover:shadow-lg hover:shadow-cyan-500/25 transition-shadow duration-200 border border-gray-700">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Machine Learning</h3>
              <p className="text-sm text-gray-300">Python, Data Analysis, AI Solutions</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl text-center hover:shadow-lg hover:shadow-orange-500/25 transition-shadow duration-200 border border-gray-700">
              <Database className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Data & Analytics</h3>
              <p className="text-sm text-gray-300">SQL, SPSS, R, Data Visualization</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl text-center hover:shadow-lg hover:shadow-purple-500/25 transition-shadow duration-200 border border-gray-700">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Business Strategy</h3>
              <p className="text-sm text-gray-300">Product Ownership, Customer Retention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;