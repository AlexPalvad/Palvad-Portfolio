import { Link, useLocation } from "react-router-dom";
import { useLang } from "@/lib/i18n";

const Header = () => {
  const location = useLocation();
  const { lang, setLang, t } = useLang();

  const navItems = [
    { label: t("nav.about"), href: "/#about" },
    { label: t("nav.now"), href: "/#now" },
    { label: t("nav.projects"), href: "/#projects" },
    { label: t("nav.tech"), href: "/#tech" },
    { label: t("nav.goals"), href: "/#goals" },
    { label: t("nav.context"), href: "/context" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="container flex items-center justify-between h-14">
        <Link to="/" className="font-display font-bold text-foreground tracking-tight text-sm">
          ARP
        </Link>
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.href.startsWith("/#") ? (
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-sm transition-colors duration-150 ${
                      location.pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setLang(lang === "en" ? "da" : "en")}
            className="text-xs font-mono px-2 py-1 rounded border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors duration-150"
          >
            {lang === "en" ? "DA" : "EN"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
