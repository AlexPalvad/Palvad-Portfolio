import { Target, TrendingUp, Rocket } from "lucide-react";
import { useLang } from "@/lib/i18n";

const Goals = () => {
  const { t } = useLang();

  const goals = [
    {
      icon: Target,
      label: t("goals.short"),
      items: [t("goals.short.1"), t("goals.short.2"), t("goals.short.3")],
    },
    {
      icon: TrendingUp,
      label: t("goals.medium"),
      items: [t("goals.medium.1"), t("goals.medium.2"), t("goals.medium.3")],
    },
    {
      icon: Rocket,
      label: t("goals.long"),
      items: [t("goals.long.1"), t("goals.long.2"), t("goals.long.3")],
    },
  ];

  return (
    <section id="goals" className="container py-16 border-t border-border">
      <h2 className="font-display font-bold text-2xl mb-6 tracking-tight">{t("goals.title")}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {goals.map((g) => (
          <div key={g.label} className="border border-border rounded-lg p-5 bg-card">
            <div className="flex items-center gap-2 mb-3">
              <g.icon className="w-4 h-4 text-primary" />
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                {g.label}
              </p>
            </div>
            <ul className="space-y-2">
              {g.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Goals;
