import { useLang } from "@/lib/i18n";

const TechStack = () => {
  const { t } = useLang();

  const techCategories = [
    { label: t("tech.build"), items: ["Lovable", "Supabase", "Capacitor"] },
    { label: t("tech.deploy"), items: ["Xcode", "Android Studio"] },
    { label: t("tech.automate"), items: ["Make.com"] },
    { label: t("tech.ai"), items: ["ChatGPT", "Claude", "Grok", "Manus"] },
  ];

  return (
    <section id="tech" className="container py-16 border-t border-border">
      <h2 className="font-display font-bold text-2xl mb-2 tracking-tight">{t("tech.title")}</h2>
      <p className="text-sm text-muted-foreground mb-6">{t("tech.subtitle")}</p>
      <div className="grid gap-6 md:grid-cols-2">
        {techCategories.map((cat) => (
          <div key={cat.label}>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
              {cat.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-sm font-mono px-3 py-1.5 rounded-md border border-border bg-card text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
