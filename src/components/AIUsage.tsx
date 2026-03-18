import { useLang } from "@/lib/i18n";
import { Bot } from "lucide-react";

const AIUsage = () => {
  const { t } = useLang();

  const uses = [
    t("aiusage.1"),
    t("aiusage.2"),
    t("aiusage.3"),
    t("aiusage.4"),
    t("aiusage.5"),
  ];

  return (
    <section id="ai-usage" className="container py-16 border-t border-border">
      <h2 className="font-display font-bold text-2xl mb-6 tracking-tight">{t("aiusage.title")}</h2>
      <ul className="space-y-2 max-w-lg">
        {uses.map((u) => (
          <li key={u} className="text-muted-foreground text-sm flex items-center gap-2">
            <Bot className="w-3 h-3 text-primary shrink-0" />
            {u}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AIUsage;
