import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye, Clock, CheckCircle, Lightbulb } from "lucide-react";
import projectsData from "@/data/projects.json";

type ProjectCategory = "All";

const categories: ProjectCategory[] = ["All"];
// Categories removed as requested: Frontend, Backend, Full-Stack, AI/Tools

const statusIcons = {
  completed: CheckCircle,
  "in-progress": Clock,
  concept: Lightbulb,
};

const statusColors = {
  completed: "text-success",
  "in-progress": "text-warning",
  concept: "text-primary",
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = projectsData.filter(
    project => activeCategory === "All" || project.category === activeCategory
  );

  const getStatusIcon = (status: string) => {
    const IconComponent = statusIcons[status as keyof typeof statusIcons] || CheckCircle;
    return IconComponent;
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development journey and the applications I've built
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-yellow"
                  : "hover:border-primary/50 hover:text-primary"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const StatusIcon = getStatusIcon(project.status);
            
            return (
              <Card
                key={project.id}
                className={`overflow-hidden bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group animate-fade-in ${
                  project.featured ? "ring-2 ring-primary/20" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-muted/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors duration-300">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                      <StatusIcon className={`h-3 w-3 mr-1 ${statusColors[project.status as keyof typeof statusColors]}`} />
                      <span className="capitalize">{project.status.replace("-", " ")}</span>
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-yellow hover:shadow-lg transition-all duration-300"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="h-4 w-4 mr-2" />
                        View Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-card p-8 rounded-lg border border-border/50">
            <h3 className="text-2xl font-semibold text-foreground">
              Interested in collaborating?
            </h3>
            <p className="text-muted-foreground">
              I'm always open to discussing new projects and opportunities
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-yellow hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}