import { useLang } from "@/lib/i18n";

const Strategy = () => {
  const { t } = useLang();

  const steps = [
    t("strategy.1"),
    t("strategy.2"),
    t("strategy.3"),
    t("strategy.4"),
  ];

  return (
    <section id="strategy" className="container py-16 border-t border-border">
      <h2 className="font-display font-bold text-2xl mb-6 tracking-tight">{t("strategy.title")}</h2>
      <ol className="space-y-3 max-w-lg">
        {steps.map((s, i) => (
          <li key={s} className="flex items-start gap-3 text-muted-foreground text-sm">
            <span className="font-mono text-primary font-bold shrink-0">{i + 1}.</span>
            {s}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Strategy;
