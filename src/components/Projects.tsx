import { ArrowUpRight } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tags: string[];
  url?: string;
  status?: string;
}

const projects: Project[] = [
  {
    name: "Palvad.dk",
    description: "Web agency building websites for small businesses.",
    tags: ["Lovable", "Supabase", "Make.com"],
    url: "https://palvad.dk",
    status: "Active",
  },
  {
    name: "Palvad Clubs",
    description: "Mobile app platform for sports clubs — scheduling, payments, and member management.",
    tags: ["Lovable", "Supabase", "Capacitor", "Xcode"],
    status: "In Development",
  },
  {
    name: "Palvad Tools",
    description: "Future SaaS products for small business operations.",
    tags: ["Planned"],
  },
  {
    name: "Other Projects",
    description: "Automation systems, affiliate sites, AI dashboards, and internal tools.",
    tags: ["Make.com", "ChatGPT", "Claude"],
  },
];

const Projects = () => (
  <section id="projects" className="container py-16 border-t border-border">
    <h2 className="font-display font-bold text-2xl mb-6 tracking-tight">Projects</h2>
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((p) => (
        <div
          key={p.name}
          className="border border-border rounded-lg p-5 bg-card hover:border-primary/30 transition-colors duration-150"
        >
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-display font-semibold text-foreground">
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-primary transition-colors duration-150"
                >
                  {p.name} <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                p.name
              )}
            </h3>
            {p.status && (
              <span
                className={`text-xs font-mono px-2 py-0.5 rounded-sm ${
                  p.status === "Active"
                    ? "bg-accent/15 text-accent"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {p.status}
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-3">{p.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {p.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-0.5 rounded-sm bg-secondary text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
