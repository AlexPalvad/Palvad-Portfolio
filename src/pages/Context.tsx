import { useState } from "react";
import { Copy, Check } from "lucide-react";
import Header from "../components/Header";
import { useLang } from "@/lib/i18n";

const contextMarkdown = `# Alexander Rieck Palvad — AI Context

## Identity
- **Name:** Alexander Rieck Palvad
- **Age:** 17
- **Location:** Copenhagen / Gentofte, Denmark
- **Education:** HTX student at H.C. Ørsted Gymnasiet (TEC) — Biotechnology & Sports, Mathematics A
- **Role:** Student entrepreneur, founder of Palvad.dk
- **LinkedIn:** https://www.linkedin.com/in/alexander-rieck-palvad-8a8534357/

## Personality & Work Style
- Analytical, entrepreneurial, and direct
- Execution-focused — ships fast, iterates often
- Uses AI as a core execution tool
- Prefers building over planning
- Treats projects as real business opportunities

## Communication Preferences
- Be direct and concise
- Skip fluff
- Prefer actionable feedback
- Comfortable with technical language
- Danish native, fluent in English

## Current Focus
- Growing Palvad.dk and acquiring more clients
- Launching Palvad Clubs mobile app
- Building future SaaS tools
- Using AI and automation for leverage

## Projects
- **Palvad.dk** — Web studio for small businesses (Active) — https://palvad.dk
- **Palvad Clubs** — Mobile app platform for sports clubs (In Development) — https://clubs.palvad.dk
- **Palvad Tools** — Future SaaS and internal tools (Planned)
- **Other Projects** — AI dashboards, automations, affiliate sites

## Tech Stack
- **Build:** Lovable, Supabase, Capacitor
- **Deploy:** Xcode, Android Studio
- **Automate:** Make.com
- **AI:** ChatGPT, Claude

## Goals
- **Short-term:** grow Palvad.dk, launch apps, acquire clients
- **Medium-term:** build scalable SaaS products, generate recurring revenue
- **Long-term:** build a successful tech business and achieve financial independence

## How to Work With Alexander
- Give concrete solutions
- Prioritize execution
- Assume technical context
- Help evaluate scalability and business viability
- Suggest automation where possible

## Default Response Style
- Be concise
- Be practical
- Be structured
- Focus on useful output

## Website
- [palvad.dk](https://palvad.dk)
- [Palvad Clubs](https://clubs.palvad.dk)
- [LinkedIn](https://www.linkedin.com/in/alexander-rieck-palvad-8a8534357/)
`;

const ContextPage = () => {
  const [copied, setCopied] = useState(false);
  const { t } = useLang();

  const handleCopy = () => {
    navigator.clipboard.writeText(contextMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-16 max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-display font-bold text-2xl tracking-tight">{t("context.title")}</h1>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-sm font-mono px-3 py-1.5 rounded-md border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors duration-150"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? t("context.copied") : t("context.copy")}
          </button>
        </div>
        <p className="text-sm text-muted-foreground mb-8">
          {t("context.desc")}
        </p>
        <div className="border border-border rounded-lg bg-card p-6 overflow-x-auto">
          <pre className="font-mono text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed">
            {contextMarkdown}
          </pre>
        </div>
      </main>
    </div>
  );
};

export default ContextPage;
