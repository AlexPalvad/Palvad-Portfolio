import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "da";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Nav
    "nav.about": "About",
    "nav.now": "Now",
    "nav.projects": "Projects",
    "nav.tech": "Tech",
    "nav.goals": "Goals",
    "nav.context": "AI Context",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.subtitle": "Student Entrepreneur — Websites, Apps & AI Tools",
    "hero.quote": '"I don\'t do anything halfway."',

    // About
    "about.title": "About",
    "about.p1": "17 years old, based in Copenhagen/Gentofte, Denmark. Currently an HTX student at H.C. Ørsted Gymnasiet (TEC), studying Biotechnology & Sports with Mathematics A.",
    "about.p2": "Analytical, entrepreneurial, and direct. I build digital products for small businesses — websites, apps, SaaS tools, and automation systems. AI is my primary execution tool; I use it to move fast, solve problems, and ship real products.",

    // Mission
    "mission.title": "Mission",
    "mission.text": "Build scalable technology products and a profitable tech business while still a student. Focus on real execution, real users, and real products — not theory.",

    // Decision Framework
    "decision.title": "Decision Framework",
    "decision.1": "Speed > perfection",
    "decision.2": "Shipping > planning",
    "decision.3": "Real users > hypothetical ideas",
    "decision.4": "Simple solutions > complex architectures",
    "decision.5": "Build fast → test → iterate → improve",

    // Strategy
    "strategy.title": "Business Strategy",
    "strategy.1": "Build service business (Palvad.dk)",
    "strategy.2": "Acquire real clients",
    "strategy.3": "Use revenue and experience to build SaaS tools",
    "strategy.4": "Move toward scalable recurring revenue products",

    // Constraints
    "constraints.title": "Constraints",
    "constraints.1": "Student with limited time",
    "constraints.2": "Limited capital",
    "constraints.3": "Must prioritize leverage and efficiency",
    "constraints.4": "Solo operator — automation is critical",

    // AI Usage
    "aiusage.title": "AI Usage Model",
    "aiusage.1": "Product building",
    "aiusage.2": "Automation",
    "aiusage.3": "Coding",
    "aiusage.4": "Business thinking and strategy",
    "aiusage.5": "Not just chat — AI is embedded in the workflow",

    // Now
    "now.title": "Now",
    "now.1": "Growing Palvad.dk and acquiring real clients",
    "now.2": "Building and launching the Palvad Clubs mobile app",
    "now.3": "Developing SaaS and automation tools under Palvad Tools",
    "now.4": "Using AI and automation to build faster products",

    // Projects
    "projects.title": "Projects",
    "projects.palvad.desc": "Digital studio building simple, effective websites and digital solutions for small businesses.",
    "projects.clubs.desc": "Mobile app platform for sports clubs with communication, scheduling, notifications and scalable club infrastructure.",
    "projects.tools.desc": "Future SaaS and internal tools for small business operations, automation and AI-powered workflows.",
    "projects.other.desc": "Affiliate sites, AI dashboards, automation systems, growth experiments and small digital products.",

    // Tech
    "tech.title": "Tech Stack",
    "tech.subtitle": "Tools I use to build, automate and ship products fast.",
    "tech.build": "Build",
    "tech.deploy": "Deploy",
    "tech.automate": "Automate",
    "tech.ai": "AI",

    // Goals
    "goals.title": "Goals",
    "goals.short": "Short-term",
    "goals.medium": "Medium-term",
    "goals.long": "Long-term",
    "goals.short.1": "Grow Palvad.dk client base",
    "goals.short.2": "Launch Palvad Clubs apps",
    "goals.short.3": "Get real paying clients",
    "goals.medium.1": "Build scalable SaaS products",
    "goals.medium.2": "Generate recurring revenue",
    "goals.medium.3": "Establish stronger brand credibility",
    "goals.long.1": "Build a successful tech business",
    "goals.long.2": "Achieve financial independence",
    "goals.long.3": "Maintain freedom to build and explore",

    // Contact
    "contact.title": "Contact",

    // Context page
    "context.title": "AI Context",
    "context.copy": "Copy Markdown",
    "context.copied": "Copied",
    "context.desc": "Structured context for AI tools. Copy this markdown to give any AI assistant full context about Alexander.",
  },
  da: {
    // Nav
    "nav.about": "Om",
    "nav.now": "Nu",
    "nav.projects": "Projekter",
    "nav.tech": "Teknologi",
    "nav.goals": "Mål",
    "nav.context": "AI Kontekst",

    // Hero
    "hero.greeting": "Hej, jeg er",
    "hero.subtitle": "Studerende Iværksætter — Websites, Apps & AI-værktøjer",
    "hero.quote": '"Jeg gør ikke noget halvt."',

    // About
    "about.title": "Om",
    "about.p1": "17 år, bosat i København/Gentofte, Danmark. HTX-elev på H.C. Ørsted Gymnasiet (TEC), med studieretningen Bioteknologi & Idræt og Matematik A.",
    "about.p2": "Analytisk, iværksætter og direkte. Jeg bygger digitale produkter til små virksomheder — websites, apps, SaaS-værktøjer og automatiseringssystemer. AI er mit primære eksekveringsværktøj; jeg bruger det til at arbejde hurtigt, løse problemer og shippe rigtige produkter.",

    // Mission
    "mission.title": "Mission",
    "mission.text": "Byg skalerbare teknologiprodukter og en profitabel tech-virksomhed mens jeg stadig er studerende. Fokus på reel eksekvering, rigtige brugere og rigtige produkter — ikke teori.",

    // Decision Framework
    "decision.title": "Beslutningsramme",
    "decision.1": "Hastighed > perfektion",
    "decision.2": "Shipping > planlægning",
    "decision.3": "Rigtige brugere > hypotetiske idéer",
    "decision.4": "Simple løsninger > komplekse arkitekturer",
    "decision.5": "Byg hurtigt → test → iterér → forbedr",

    // Strategy
    "strategy.title": "Forretningsstrategi",
    "strategy.1": "Byg servicevirksomhed (Palvad.dk)",
    "strategy.2": "Skaf rigtige kunder",
    "strategy.3": "Brug indtjening og erfaring til at bygge SaaS-værktøjer",
    "strategy.4": "Bevæg dig mod skalerbare produkter med tilbagevendende indtjening",

    // Constraints
    "constraints.title": "Begrænsninger",
    "constraints.1": "Studerende med begrænset tid",
    "constraints.2": "Begrænset kapital",
    "constraints.3": "Skal prioritere gearing og effektivitet",
    "constraints.4": "Solo-operatør — automatisering er kritisk",

    // AI Usage
    "aiusage.title": "AI-brugsmodel",
    "aiusage.1": "Produktudvikling",
    "aiusage.2": "Automatisering",
    "aiusage.3": "Kodning",
    "aiusage.4": "Forretningsanalyse og strategi",
    "aiusage.5": "Ikke bare chat — AI er integreret i workflowet",

    // Now
    "now.title": "Nu",
    "now.1": "Vækster Palvad.dk og skaffer rigtige kunder",
    "now.2": "Bygger og lancerer Palvad Clubs mobilappen",
    "now.3": "Udvikler SaaS- og automatiseringsværktøjer under Palvad Tools",
    "now.4": "Bruger AI og automatisering til at bygge hurtigere produkter",

    // Projects
    "projects.title": "Projekter",
    "projects.palvad.desc": "Digitalt studio der bygger simple, effektive websites og digitale løsninger til små virksomheder.",
    "projects.clubs.desc": "Mobilapp-platform til sportsklubber med kommunikation, planlægning, notifikationer og skalerbar klubinfrastruktur.",
    "projects.tools.desc": "Fremtidige SaaS- og interne værktøjer til små virksomheders drift, automatisering og AI-drevne workflows.",
    "projects.other.desc": "Affiliate-sites, AI-dashboards, automatiseringssystemer, væksteksperimenter og små digitale produkter.",

    // Tech
    "tech.title": "Teknologi",
    "tech.subtitle": "Værktøjer jeg bruger til at bygge, automatisere og shippe produkter hurtigt.",
    "tech.build": "Byg",
    "tech.deploy": "Deploy",
    "tech.automate": "Automatisér",
    "tech.ai": "AI",

    // Goals
    "goals.title": "Mål",
    "goals.short": "Kort sigt",
    "goals.medium": "Mellemlang sigt",
    "goals.long": "Lang sigt",
    "goals.short.1": "Vækst Palvad.dk kundebase",
    "goals.short.2": "Lancér Palvad Clubs apps",
    "goals.short.3": "Få rigtige betalende kunder",
    "goals.medium.1": "Byg skalerbare SaaS-produkter",
    "goals.medium.2": "Generér tilbagevendende indtjening",
    "goals.medium.3": "Etablér stærkere brandtroværdighed",
    "goals.long.1": "Byg en succesfuld tech-virksomhed",
    "goals.long.2": "Opnå finansiel uafhængighed",
    "goals.long.3": "Bevar frihed til at bygge og udforske",

    // Contact
    "contact.title": "Kontakt",

    // Context page
    "context.title": "AI Kontekst",
    "context.copy": "Kopiér Markdown",
    "context.copied": "Kopieret",
    "context.desc": "Struktureret kontekst til AI-værktøjer. Kopiér denne markdown for at give enhver AI-assistent fuld kontekst om Alexander.",
  },
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    return (saved === "da" ? "da" : "en") as Lang;
  });

  const updateLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (key: string) => translations[lang][key] ?? key;

  return (
    <LangContext.Provider value={{ lang, setLang: updateLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
};
