import { Briefcase } from "lucide-react";

export const ExperiencesSection = () => {
  const roles = [
    {
      company: "Vivify Solutions Inc.",
      title: "Product Management Intern",
      dates: "Jun 2025 – Present",
      location: "Remote",
      bullets: [
        "Led end-to-end product development across the SDLC, from requirements to delivery.",
        "Aligned features with the roadmap; collaborated with design, engineering, and marketing to remove blockers."
      ]
    },
    {
      company: "News Corp",
      title: "Product Strategy Extern",
      dates: "Jun 2025 – Present",
      location: "Remote",
      bullets: [
        "Researched AI‑powered personalization, recommendations, and conversational interfaces for Gen Z news.",
        "Designed a nationwide survey; delivered findings and product recommendations to the digital innovation team."
      ]
    },
    {
      company: "Outlier AI",
      title: "AI Product Intern",
      dates: "Apr 2024 – Jan 2025",
      location: "Remote",
      bullets: [
        "Created 200+ math‑reasoning prompts; improved model accuracy by ~15%.",
        "Identified AI use‑cases in fintech and academia with ~25% projected partnership growth."
      ]
    },
    {
      company: "Eta Kappa Nu (HKN) – UCSD",
      title: "Project Manager",
      dates: "Mar 2024 – Mar 2025",
      location: "La Jolla, CA",
      bullets: [
        "Managed sprints for 8+ developers; shipped 20+ updates across front‑end and back‑end.",
        "Incorporated user feedback into iterative UI/UX improvements."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experiences</span>
        </h2>

        <div className="space-y-6">
          {roles.map((role, idx) => (
            <div key={idx} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{role.title}</h3>
                  <p className="text-muted-foreground">{role.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{role.dates}</p>
                  <p className="text-sm text-muted-foreground">{role.location}</p>
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                {role.bullets.map((b, i) => (
                  <li key={i} className="text-foreground/90">{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
