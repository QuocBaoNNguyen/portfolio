import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // PM Tools
  { name: "Jira", level: 95, category: "PM Tools" },
  { name: "Confluence", level: 90, category: "PM Tools" },
  { name: "Notion", level: 70, category: "PM Tools" },
  { name: "Figma", level: 70, category: "PM Tools" },

  // Technical
  { name: "Git/GitHub", level: 95, category: "Technical" },
  { name: "React & Tailwind", level: 90, category: "Technical" },
  { name: "Python & Java", level: 80, category: "Technical" },
  { name: "Cloud Infrastructure", level: 65, category: "Technical" },

  // soft skills
  { name: "Product Sense", level: 95, category: "soft skills" },
  { name: "Market Research", level: 90, category: "soft skills" },
  { name: "Stakeholder Communication", level: 90, category: "soft skills" },
  { name: "Writing PRDs", level: 85, category: "soft skills" },
];

const categories = ["all", "PM Tools", "Technical", "soft skills"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills
  .filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  )
  .sort((a, b) =>
    activeCategory === "all" ? b.level - a.level : 0
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
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
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
