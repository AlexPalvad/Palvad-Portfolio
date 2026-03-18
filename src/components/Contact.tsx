import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const Contact = () => {
  const { t } = useLang();

  return (
    <section id="contact" className="container py-16 border-t border-border">
      <h2 className="font-display font-bold text-2xl mb-4 tracking-tight">{t("contact.title")}</h2>
      <div className="flex flex-col gap-3">
        <a
          href="https://palvad.dk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-primary hover:underline transition-colors duration-150"
        >
          palvad.dk <ArrowUpRight className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/alexander-rieck-palvad-8a8534357/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-primary hover:underline transition-colors duration-150"
        >
          LinkedIn <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
