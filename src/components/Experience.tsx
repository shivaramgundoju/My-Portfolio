import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as Icons from "lucide-react";
import experienceData from "@/data/experience.json";

const categoryColors = {
  education: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  "skill-development": "bg-primary/10 text-primary border-primary/20",
  exploration: "bg-purple-500/10 text-purple-600 border-purple-500/20",
};

const statusIndicators = {
  completed: "bg-success border-success/20",
  "in-progress": "bg-warning border-warning/20",
  ongoing: "bg-primary border-primary/20",
};

export function Experience() {
  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className="h-6 w-6" /> : <Icons.Calendar className="h-6 w-6" />;
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The path of continuous learning and growth in my development career
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex flex-col md:flex-row gap-8 animate-fade-in ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center shadow-lg ${
                    statusIndicators[experience.status as keyof typeof statusIndicators]
                  }`}>
                    <div className="text-white">
                      {getIcon(experience.icon)}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {experience.title}
                          </h3>
                          <p className="text-primary font-medium">
                            {experience.subtitle}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge
                            className={`${categoryColors[experience.category as keyof typeof categoryColors]} border`}
                          >
                            {experience.category.replace("-", " ").toUpperCase()}
                          </Badge>
                          <span className="text-sm font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full">
                            {experience.date}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-colors duration-200"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      {/* Status Indicator */}
                      <div className="flex items-center gap-2 pt-2">
                        <div className={`w-2 h-2 rounded-full ${
                          experience.status === 'completed' ? 'bg-success' :
                          experience.status === 'in-progress' ? 'bg-warning' :
                          'bg-primary'
                        }`}></div>
                        <span className="text-sm text-muted-foreground capitalize">
                          {experience.status.replace("-", " ")}
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-gradient-card border-primary/20 shadow-glow">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Icons.Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Current Focus
              </h3>
              <p className="text-muted-foreground max-w-md">
                Mastering <span className="text-primary font-semibold">Data Structures & Algorithms</span> in Java 
                while building full-stack applications with the <span className="text-primary font-semibold">MERN stack</span>
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Java DSA", "MERN Stack", "AI Tools", "Problem Solving"].map((focus) => (
                  <Badge
                    key={focus}
                    className="bg-primary text-primary-foreground shadow-yellow"
                  >
                    {focus}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}