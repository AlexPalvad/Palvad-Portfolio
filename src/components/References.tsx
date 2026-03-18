import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const References = () => {
  const { t } = useLang();

  const references = [
    {
      name: "Presslab.dk",
      description: t("references.presslab.desc"),
      tags: ["Lovable"],
      url: "https://presslab.dk",
    },
    {
      name: "Skomar Akademiet",
      description: t("references.skomar.desc"),
      tags: ["Lovable"],
      url: "https://skomarakademiet.dk",
    },
    {
      name: "GearTjek.dk",
      description: t("references.geartjek.desc"),
      tags: ["Lovable"],
      url: "https://geartjek.dk",
    },
    {
      name: "HairDesign by Enis",
      description: t("references.hairdesign.desc"),
      tags: ["Lovable"],
      url: "https://www.hairdesignbyenis.dk/",
    },
  ];

  return (
    <section id="references" className="container py-16 border-t border-border">
      <h2 className="font-display font-bold text-2xl mb-6 tracking-tight">{t("references.title")}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {references.map((r) => (
          <div
            key={r.name}
            className="border border-border rounded-lg p-5 bg-card hover:border-primary/30 transition-colors duration-150"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-display font-semibold text-foreground">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-primary transition-colors duration-150"
                >
                  {r.name} <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{r.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {r.tags.map((tag) => (
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
};

export default References;
