import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Carnegie Mellon University",
      role: "Master's Student - Artificial Intelligence",
      period: "2024 - Present",
      description: "Pursuing advanced studies in Artificial Intelligence at one of the world's leading technology universities. Focusing on machine learning, deep learning, computer vision, natural language processing, and AI system design.",
      achievements: [
        "Advanced coursework in AI and machine learning algorithms",
        "Research in cutting-edge AI methodologies and applications",
        "Collaboration with world-renowned AI faculty and researchers",
        "Access to state-of-the-art AI labs and computational resources"
      ]
    },
    {
      company: "Cloud Sync",
      role: "Product Owner",
      period: "2023 - Present",
      description: "Guided teams to deliver ERP, POS, and e-commerce systems for SMEs in Rwanda, boosting sales tracking and operational efficiency. Also designed the company's official website to showcase digital transformation solutions.",
      achievements: [
        "Led cross-functional teams to deliver enterprise solutions",
        "Improved SME operational efficiency through digital transformation",
        "Designed and launched company website",
        "Enhanced sales tracking systems for multiple clients"
      ]
    },
    {
      company: "Bank of Kigali",
      role: "Retention Officer",
      period: "2023",
      description: "Built long-term customer relationships and reduced churn by tailoring solutions to different client groups. This role deepened my ability to merge customer needs with digital service delivery.",
      achievements: [
        "Reduced customer churn through targeted retention strategies",
        "Developed tailored solutions for diverse client segments",
        "Strengthened customer relationships and satisfaction",
        "Gained insights into fintech and digital banking"
      ]
    },
    {
      company: "Bank of Kigali",
      role: "Fullstack Developer Intern",
      period: "2022",
      description: "Contributed to the redesign and deployment of the Bank of Kigali's website and internet banking platform, improving accessibility and user experience for thousands of clients.",
      achievements: [
        "Redesigned and deployed BK's website and internet banking platform",
        "Improved accessibility and user experience",
        "Worked with modern web technologies and frameworks",
        "Contributed to systems serving thousands of users daily"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-900 rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 border border-gray-800">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                      <p className="text-lg font-semibold text-blue-400">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 font-medium">{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed text-base md:text-lg">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-white text-lg mb-4">Key Achievements:</h4>
                  <div className="grid gap-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm md:text-base">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Connector line for visual flow */}
              {index < experiences.length - 1 && (
                <div className="flex justify-center mt-8">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Recognition Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Recognition & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-900 rounded-xl p-4 md:p-6 border border-gray-800 hover:shadow-lg hover:shadow-blue-500/25 transition-shadow duration-300">
              <img 
                src="/images/2024 recognition best performer.jpg" 
                alt="2024 Recognition Best Performer" 
                className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg md:text-xl font-semibold text-white mb-2">2024 Best Performer Recognition</h4>
              <p className="text-gray-300 text-sm md:text-base">Acknowledged for exceptional performance and dedication in delivering outstanding results.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-4 md:p-6 border border-gray-800 hover:shadow-lg hover:shadow-blue-500/25 transition-shadow duration-300">
              <img 
                src="/images/manager recognition.jpg" 
                alt="Manager Recognition" 
                className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg md:text-xl font-semibold text-white mb-2">Manager Recognition</h4>
              <p className="text-gray-300 text-sm md:text-base">Recognized by management for leadership excellence and team collaboration.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;