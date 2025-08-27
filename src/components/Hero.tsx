import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full animate-bounce-subtle"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full animate-bounce-subtle" style={{ animationDelay: "1s" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-sans">
            <span className="text-foreground">Shivaram</span>{" "}
            <span className="text-primary animate-glow">Gundoju</span>
          </h1>
          
          {/* Title */}
           <div className="text-xl md:text-2xl text-muted-foreground/80 mb-8 font-medium max-w-4xl mx-auto">
            <span className="block">CS Undergraduate</span>
            <span className="text-primary mx-2">|</span>
            <span className="block sm:inline">Aspiring Full-Stack Developer</span>
            <span className="text-primary mx-2 hidden sm:inline">|</span>
            <span className="block sm:inline">Exploring AI Tools</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about building{" "}
            <span className="text-primary font-semibold">user-friendly</span> and{" "}
            <span className="text-primary font-semibold">responsive</span> web applications.
            Skilled in HTML, CSS, JavaScript, and React.js with a growing expertise in full-stack development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-yellow hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold px-8 py-3"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300 font-semibold px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary hover:scale-110 hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary hover:scale-110 hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary hover:scale-110 hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="mailto:shivaramgundoju@example.com">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ChevronDown className="h-8 w-8" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </div>
      </div>
    </section>
  );
}