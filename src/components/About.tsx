import { useLang } from "@/lib/i18n";

const About = () => {
  const { t } = useLang();

  return (
    <section id="about" className="container py-16 border-t border-border">
      <h2 className="font-display font-bold text-2xl mb-6 tracking-tight">{t("about.title")}</h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl">
        <p>{t("about.p1")}</p>
        <p>{t("about.p2")}</p>
      </div>
    </section>
  );
};

export default About;
