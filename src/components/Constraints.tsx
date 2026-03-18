import { useLang } from "@/lib/i18n";
import { AlertTriangle } from "lucide-react";

const Constraints = () => {
  const { t } = useLang();

  const items = [
    t("constraints.1"),
    t("constraints.2"),
    t("constraints.3"),
    t("constraints.4"),
  ];

  return (
    <section id="constraints" className="container py-16 border-t border-border">
      <h2 className="font-display font-bold text-2xl mb-6 tracking-tight">{t("constraints.title")}</h2>
      <ul className="space-y-2 max-w-md">
        {items.map((item) => (
          <li key={item} className="text-muted-foreground text-sm flex items-center gap-2">
            <AlertTriangle className="w-3 h-3 text-muted-foreground/60 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Constraints;
