import { useLang } from "@/lib/i18n";
import { Zap } from "lucide-react";

const DecisionFramework = () => {
  const { t } = useLang();

  const principles = [
    t("decision.1"),
    t("decision.2"),
    t("decision.3"),
    t("decision.4"),
    t("decision.5"),
  ];

  return (
    <section id="decisions" className="container py-16 border-t border-border">
      <h2 className="font-display font-bold text-2xl mb-6 tracking-tight">{t("decision.title")}</h2>
      <ul className="space-y-2 max-w-md">
        {principles.map((p) => (
          <li key={p} className="text-muted-foreground font-mono text-sm flex items-center gap-2">
            <Zap className="w-3 h-3 text-primary shrink-0" />
            {p}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DecisionFramework;
