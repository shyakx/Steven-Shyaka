import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, ShoppingCart, Heart, Building, Users, GraduationCap, Thermometer, Play, Tv } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Akazuba Florist",
      description: "Rwanda's #1 Florist - Modern e-commerce platform delivering fresh flowers, wedding bouquets, and exquisite perfumes. Features same-day delivery with secure MoMo & BK payment options.",
      icon: <ShoppingCart className="w-6 h-6" />,
      tech: ["React", "E-commerce", "Payment Integration"],
      category: "E-commerce Platform",
      color: "from-pink-500 to-rose-500",
      liveUrl: "https://www.akazubaflorist.com/",
      hasLiveUrl: true
    },
    {
      title: "Cloud Sync Website",
      description: "Professional company website showcasing ERP and POS solutions tailored for Rwandan businesses. Features responsive design and comprehensive service information.",
      icon: <Building className="w-6 h-6" />,
      tech: ["React", "Responsive Design", "Corporate"],
      category: "Corporate Website",
      color: "from-blue-500 to-cyan-500",
      liveUrl: "https://cloudsync-rw.com/",
      hasLiveUrl: true
    },
    {
      title: "Bank of Kigali Digital Platforms",
      description: "Played a key role in redeveloping BK's website and internet banking platform, ensuring usability and accessibility for customers.",
      icon: <Globe className="w-6 h-6" />,
      tech: ["Web Development", "Banking", "UX/UI"],
      category: "Enterprise Platform",
      color: "from-green-500 to-teal-500",
      hasLiveUrl: false
    },
    {
      title: "MHSP Ubuzima Platform",
      description: "Community-focused mental health support web app prototype designed to provide accessible mental health resources.",
      icon: <Heart className="w-6 h-6" />,
      tech: ["React", "Healthcare", "Community"],
      category: "Healthcare Platform",
      color: "from-purple-500 to-pink-500",
      hasLiveUrl: false
    },
    {
      title: "FarmEd Mobile App",
      description: "Flutter-based educational app for Rwandan farmers, providing blogs, newsletters, and instructional videos.",
      icon: <GraduationCap className="w-6 h-6" />,
      tech: ["Flutter", "Education", "Agriculture"],
      category: "Mobile Application",
      color: "from-orange-500 to-yellow-500",
      hasLiveUrl: false
    },
    {
      title: "Temperature Converter",
      description: "Clean and intuitive Flutter mobile app for converting temperatures between different units.",
      icon: <Thermometer className="w-6 h-6" />,
      tech: ["Flutter", "Utility", "Mobile"],
      category: "Utility App",
      color: "from-red-500 to-orange-500",
      hasLiveUrl: false
    },
    {
      title: "Product Catalog App",
      description: "Flutter application featuring product listings with smooth animations and multiple theme options.",
      icon: <Smartphone className="w-6 h-6" />,
      tech: ["Flutter", "Animations", "Themes"],
      category: "Mobile Application",
      color: "from-indigo-500 to-blue-500",
      hasLiveUrl: false
    },
    {
      title: "Netflix Clone (WIP)",
      description: "Work in progress Netflix clone with modern UI and streaming capabilities, built with Flutter.",
      icon: <Tv className="w-6 h-6" />,
      tech: ["Flutter", "Streaming", "UI/UX"],
      category: "Entertainment App",
      color: "from-slate-600 to-slate-800",
      hasLiveUrl: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Selected Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my work across web development, mobile applications, and enterprise solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-700"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} text-white mb-6`}>
                  {project.icon}
                </div>

                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.hasLiveUrl && project.liveUrl ? (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Live Site
                    </a>
                  ) : (
                    <button className="flex items-center gap-2 text-gray-400 hover:text-gray-300 font-medium transition-colors cursor-not-allowed opacity-50">
                      <ExternalLink size={16} />
                      View Project
                    </button>
                  )}
                  <button className="flex items-center gap-2 text-gray-400 hover:text-gray-300 font-medium transition-colors">
                    <Github size={16} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;