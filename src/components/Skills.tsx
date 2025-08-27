import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import * as Icons from "lucide-react";
import skillsData from "@/data/skills.json";

type SkillCategory = "all" | "frontend" | "backend" | "database" | "tools";

const categories = [
  { id: "all" as SkillCategory, label: "All Skills" },
  // Categories removed as requested
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const filteredSkills = skillsData.filter(
    skill => activeCategory === "all" || skill.category === activeCategory
  );

  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className="h-8 w-8" /> : <Icons.Code className="h-8 w-8" />;
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-yellow"
                  : "hover:border-primary/50 hover:text-primary"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <Card
              key={skill.id}
              className={`p-6 bg-gradient-card border-border/50 hover:border-primary/30 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group animate-fade-in ${
                hoveredSkill === skill.id ? "shadow-glow border-primary/50" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="text-center space-y-4">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                    {getIcon(skill.icon)}
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-muted"
                  />
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>

                {/* Category Badge */}
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium capitalize">
                  {skill.category}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full font-medium">
            <Icons.TrendingUp className="h-5 w-5" />
            <span>Always learning and expanding my skillset</span>
          </div>
        </div>
      </div>
    </section>
  );
}