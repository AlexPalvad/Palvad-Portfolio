import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Tech", href: "/#tech" },
  { label: "Goals", href: "/#goals" },
  { label: "AI Context", href: "/context" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="container flex items-center justify-between h-14">
        <Link to="/" className="font-display font-bold text-foreground tracking-tight text-sm">
          ARP
        </Link>
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
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
      </nav>
    </header>
  );
};

export default Header;
