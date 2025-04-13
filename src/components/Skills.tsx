
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Skill = {
  name: string;
  level: number;
};

type SkillCategory = {
  id: string;
  title: string;
  skills: Skill[];
};

const SkillBar = ({ name, level }: Skill) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-navy">{name}</span>
        <span className="text-sm text-neutral-medium">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-purple h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      id: "technical",
      title: "Technical Skills",
      skills: [
        { name: "Skill 1", level: 90 },
        { name: "Skill 2", level: 85 },
        { name: "Skill 3", level: 80 },
        { name: "Skill 4", level: 75 }
      ]
    },
    {
      id: "professional",
      title: "Professional Skills",
      skills: [
        { name: "Communication", level: 95 },
        { name: "Teamwork", level: 90 },
        { name: "Problem Solving", level: 85 },
        { name: "Time Management", level: 80 }
      ]
    },
    {
      id: "tools",
      title: "Tools & Software",
      skills: [
        { name: "Tool 1", level: 95 },
        { name: "Tool 2", level: 85 },
        { name: "Tool 3", level: 90 },
        { name: "Tool 4", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">My Skills</h2>
        
        <Tabs defaultValue="technical" className="max-w-3xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-base">
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.skills.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="section-subtitle text-center mb-8">Services I Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-light p-6 rounded-lg shadow-md text-center card-hover">
              <div className="bg-purple/10 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2 text-navy">Service 1</h4>
              <p className="text-gray-700">Description of the service and what it involves.</p>
            </div>
            
            <div className="bg-neutral-light p-6 rounded-lg shadow-md text-center card-hover">
              <div className="bg-purple/10 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2 text-navy">Service 2</h4>
              <p className="text-gray-700">Description of the service and what it involves.</p>
            </div>
            
            <div className="bg-neutral-light p-6 rounded-lg shadow-md text-center card-hover">
              <div className="bg-purple/10 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2 text-navy">Service 3</h4>
              <p className="text-gray-700">Description of the service and what it involves.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
