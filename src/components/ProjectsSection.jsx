import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Website for Tinting Business",
    description: "A responsive and modern website for a local tinting studio.",
    image: "/projects/oj.png",
    tags: ["React", "TailwindCSS", "Node.js"],
    demoUrl: "https://www.ojtintstudio.com",
    githubUrl: "https://github.com/ssarvesh20000/OJTS",
  },
   {
    id: 2,
    title: "Competitive Analysis Mapper",
    description:
      "AI tool for PMs to compare competitors, analyze features, and export a clean competitive matrix",
    image: "/projects/productlens.png",
    tags: ["OpenAI", "Next.js", "Vercel"],
    demoUrl: "https://product-lens-ai.vercel.app/", 
    githubUrl: "https://github.com/QuocBaoNNguyen/compass-competitor-mapper", 
  },
  // {
  //   id: 3,
  //   title: "E-commerce Platform",
  //   description:
  //     "Full-featured e-commerce platform with user authentication and payment processing.",
  //   image: "/projects/project3.png",
  //   tags: ["React", "Node.js", "Stripe"],
  //   demoUrl: "https://www.spotify.com", // ✅ Changed to spotify.com
  //   githubUrl: "https://www.discord.com", // ✅ Changed to discord.com
  // },
];

export const ProjectsSection = () => {
  const isSingleProject = projects.length === 1;

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* Dynamic layout */}
                <div
          className={
            isSingleProject
              ? "flex justify-center"
              : "flex flex-wrap justify-center gap-8"
          }
        >

                        {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover max-w-sm w-full block"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <ExternalLink size={20} />
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()} // prevent card click from firing
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
        </div>
      </div>
    </section>
  );
};
