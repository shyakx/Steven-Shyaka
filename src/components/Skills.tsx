import React from 'react';
import { Code, Smartphone, Database, TrendingUp } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming & Tools",
      icon: <Code className="w-8 h-8" />,
      skills: ["Python (Pandas, Matplotlib)", "Dart (Flutter)", "JavaScript", "SQL", "Git/GitHub", "React"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Software Development",
      icon: <Smartphone className="w-8 h-8" />,
      skills: ["ERP Systems", "POS Solutions", "Responsive Websites", "Cross-platform Mobile Apps", "API Development"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Artificial Intelligence & Data",
      icon: <Database className="w-8 h-8" />,
      skills: ["Machine Learning", "Deep Learning", "Python AI/ML", "Computer Vision", "Natural Language Processing"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Business & Strategy",
      icon: <TrendingUp className="w-8 h-8" />,
      skills: ["Customer Retention", "Product Ownership", "Project Coordination", "Market Research", "Digital Transformation"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-300 mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A comprehensive skill set developed through advanced studies at Carnegie Mellon University and professional experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 p-8 border border-blue-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 border border-blue-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500"></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Proficiency Bars */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Technical Proficiency
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { skill: "JavaScript/React", level: 90 },
              { skill: "Python", level: 85 },
              { skill: "Flutter/Dart", level: 80 },
              { skill: "SQL/Databases", level: 85 },
              { skill: "Data Analysis", level: 75 },
              { skill: "Project Management", level: 90 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">{item.skill}</span>
                  <span className="text-sm text-blue-600">{item.level}%</span>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;