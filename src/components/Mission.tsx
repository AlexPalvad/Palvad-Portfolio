import { useLang } from "@/lib/i18n";
import { Crosshair } from "lucide-react";

const Mission = () => {
  const { t } = useLang();

  return (
    <section id="mission" className="container py-16 border-t border-border">
      <h2 className="font-display font-bold text-2xl mb-6 tracking-tight">{t("mission.title")}</h2>
      <p className="text-muted-foreground leading-relaxed max-w-2xl">
        {t("mission.text")}
      </p>
    </section>
  );
};

export default Mission;
