
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, ExternalLink } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of the project, what technologies were used, and any key features or challenges.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tags: ["Web", "Frontend"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of the project, what technologies were used, and any key features or challenges.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      tags: ["Mobile", "Design"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Project Three",
      description: "A brief description of the project, what technologies were used, and any key features or challenges.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      tags: ["Web", "Backend"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "Project Four",
      description: "A brief description of the project, what technologies were used, and any key features or challenges.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tags: ["Design", "Frontend"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];
  
  const filters = ["All", "Web", "Mobile", "Design", "Frontend", "Backend"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-neutral-light">
      <div className="container-custom">
        <h2 className="section-title text-center mb-4">My Projects</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one represents a unique challenge and solution.
        </p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className={activeFilter === filter ? "bg-purple" : ""}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-navy">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-purple/10 text-purple text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Link className="h-4 w-4" /> Live Demo
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" /> Source Code
                  </Button>
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
