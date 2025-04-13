
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-neutral-light p-8 rounded-xl shadow-md">
            <h3 className="section-subtitle">My Background</h3>
            <p className="text-gray-700 mb-6">
              I'm a passionate Java Developer with over 6 years of experience in designing and implementing enterprise-level applications. Currently working at Tata Consultancy Services, I've helped numerous clients build robust, scalable solutions that meet their business requirements.
            </p>
            <p className="text-gray-700 mb-6">
              My journey began with a strong foundation in computer science, which evolved into a specialization in Java development. Since then, I've been dedicated to creating efficient and maintainable software systems, always striving for excellence in every project I undertake.
            </p>
            <div className="flex justify-start">
              <Button className="btn-primary flex items-center gap-2">
                <Download className="h-4 w-4" /> Download Resume
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="section-subtitle">My Philosophy</h3>
            <p className="text-gray-700 mb-6">
              I believe in writing clean, maintainable code that solves real business problems. My approach to software development centers around understanding client requirements thoroughly, designing scalable solutions, and implementing them with precision and attention to detail.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <h4 className="font-semibold text-lg mb-2 text-navy">Education</h4>
                <p className="text-gray-700">Degree in Computer Science</p>
                <p className="text-neutral-medium">Graduated: 2017</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <h4 className="font-semibold text-lg mb-2 text-navy">Experience</h4>
                <p className="text-gray-700">6+ Years in Java Development</p>
                <p className="text-neutral-medium">Enterprise Solutions Expert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
