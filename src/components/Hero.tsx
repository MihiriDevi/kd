
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-neutral-light to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-navy leading-tight mb-4">
              Hi, I'm <span className="text-purple">Kailash Kumar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-neutral-medium">
              Java Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              I create robust and scalable Java solutions with over 6 years of experience, currently working at Tata Consultancy Services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToContact} className="btn-primary flex items-center gap-2">
                Contact Me <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="btn-outline">View Projects</Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-purple/10 flex items-center justify-center overflow-hidden border-4 border-purple/20">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
