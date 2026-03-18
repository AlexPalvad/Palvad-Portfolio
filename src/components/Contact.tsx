import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";

const Contact = () => {
  const { t } = useLang();

  return (
    <section id="contact" className="container py-16 border-t border-border">
      <h2 className="font-display font-bold text-2xl mb-6 tracking-tight">{t("contact.title")}</h2>
      <div className="flex flex-col gap-3">
        <a
          href="tel:+4522643277"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-150 text-sm"
        >
          <Phone className="w-4 h-4 text-primary shrink-0" />
          +45 22 64 32 77
        </a>
        <a
          href="mailto:alexanderpalvad@gmail.com"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-150 text-sm"
        >
          <Mail className="w-4 h-4 text-primary shrink-0" />
          alexanderpalvad@gmail.com
        </a>
        <a
          href="mailto:kontakt@palvad.dk"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-150 text-sm"
        >
          <Mail className="w-4 h-4 text-primary shrink-0" />
          kontakt@palvad.dk
        </a>
        <a
          href="https://palvad.dk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-150 text-sm"
        >
          palvad.dk <ArrowUpRight className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/alexander-rieck-palvad-8a8534357/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-150 text-sm"
        >
          LinkedIn <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
