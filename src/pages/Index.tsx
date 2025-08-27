import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary/5 border-t border-border/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 Shivaram Gundoju. Built with{" "}
              <span className="text-primary font-semibold">React</span>
            </p>
            <p className="text-sm text-muted-foreground/80 mt-2">
              Designed with passion for clean code and beautiful interfaces
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
