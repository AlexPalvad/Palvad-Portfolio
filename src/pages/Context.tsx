import { useState } from "react";
import { Copy, Check } from "lucide-react";
import Header from "../components/Header";

const contextMarkdown = `# Alexander Rieck Palvad — AI Context

## Identity
- **Name:** Alexander Rieck Palvad
- **Age:** 17
- **Location:** Copenhagen / Gentofte, Denmark
- **Education:** HTX student at H.C. Ørsted Gymnasiet (TEC) — Communication & IT
- **Role:** Student Entrepreneur, Founder of Palvad.dk

## Personality & Work Style
- Analytical, entrepreneurial, and direct
- Execution-focused — ships fast, iterates often
- Uses AI (ChatGPT, Claude) as a core execution tool, not just an assistant
- Prefers building over planning; learns by doing
- Treats every project as a business opportunity

## Communication Preferences
- Direct and concise — skip the fluff
- Prefers actionable feedback over theoretical advice
- Comfortable with technical language
- Danish native, fluent in English

## Projects
- **Palvad.dk** — Web agency building websites for small businesses (Active)
- **Palvad Clubs** — Mobile app platform for sports clubs: scheduling, payments, member management (In Development, using Lovable + Supabase + Capacitor)
- **Palvad Tools** — Future SaaS products for small business operations (Planned)
- **Other** — Automation systems, affiliate sites, AI dashboards, internal tools

## Tech Stack
- **Frontend/Full-stack:** Lovable (AI-first web builder)
- **Backend:** Supabase (PostgreSQL, Auth, Edge Functions, Storage)
- **Mobile:** Capacitor, Xcode, Android Studio
- **Automation:** Make.com
- **AI:** ChatGPT, Claude

## Goals
- **Short-term:** Grow Palvad.dk, launch apps, acquire real clients
- **Medium-term:** Build scalable products, generate recurring revenue
- **Long-term:** Run a successful tech business, achieve financial independence

## How to Work With Alexander
- Be direct — give concrete solutions, not vague suggestions
- Prioritize speed and shipping over perfection
- Assume technical context — he knows Lovable, Supabase, Capacitor
- Help him think about scalability and business model viability
- He values efficiency: automate what can be automated

## Website
- [palvad.dk](https://palvad.dk)
`;

const ContextPage = () => {
  const [copied, setCopied] = useState(false);

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
          <h1 className="font-display font-bold text-2xl tracking-tight">AI Context</h1>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-sm font-mono px-3 py-1.5 rounded-md border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors duration-150"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Copied" : "Copy Markdown"}
          </button>
        </div>
        <p className="text-sm text-muted-foreground mb-8">
          Structured context for AI tools. Copy this markdown to give any AI assistant full context about Alexander.
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
