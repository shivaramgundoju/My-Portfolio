import { Card } from "@/components/ui/card";
import { Code, Rocket, Target, Users } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable and efficient code following best practices"
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and frameworks"
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focused on achieving objectives with attention to detail"
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating effectively in group projects and environments"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate CS undergraduate on a journey to become a skilled full-stack developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hello! I'm <span className="text-primary font-semibold">Shivaram Gundoju</span>, 
                a Computer Science undergraduate with a deep passion for web development and 
                technology innovation.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey began with <span className="text-primary font-semibold">HTML and CSS</span>, 
                and has evolved to include modern technologies like{" "}
                <span className="text-primary font-semibold">React.js</span> and the{" "}
                <span className="text-primary font-semibold">MERN stack</span>. 
                I'm currently deepening my understanding of{" "}
                <span className="text-primary font-semibold">Data Structures and Algorithms</span> using Java.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                What excites me most about development is creating{" "}
                <span className="text-primary font-semibold">user-friendly, responsive applications</span> that 
                solve real-world problems. I'm also exploring how{" "}
                <span className="text-primary font-semibold">AI tools</span> can enhance the development process 
                and improve code quality.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Frontend Enthusiast
              </div>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Problem Solver
              </div>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Continuous Learner
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((highlight, index) => (
              <Card
                key={highlight.title}
                className="p-6 bg-gradient-card border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats section removed as requested */}
      </div>
    </section>
  );
}