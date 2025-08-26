"use client";
import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "HTML/CSS", category: "Front-End" },
  { name: "JavaScript", category: "Front-End" },
  { name: "React", category: "Front-End" },
  { name: "React Native", category: "Front-End" },
  { name: "TypeScript", category: "Front-End" },
  { name: "Tailwind CSS", category: "Front-End" },
  { name: "Next.js", category: "Front-End" },
  { name: "Angular", category: "Front-End" },

  { name: "Git/GitHub", category: "Ferramentas" },
  { name: "Figma", category: "Ferramentas" },
  { name: "VS Code", category: "Ferramentas" },
];

const categories = ["Front-End", "Ferramentas"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Minhas <span className="text-primary"> Habilidades</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-primary hover:text-primary-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover text-center hover:bg-primary hover:text-primary-foreground select-none"
            >
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
