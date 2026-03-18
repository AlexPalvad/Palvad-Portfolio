import { useState } from "react";
import { Copy, Check } from "lucide-react";
import Header from "../components/Header";
import { useLang } from "@/lib/i18n";

const contextMarkdown = `# Alexander Rieck Palvad — AI Context

## Identity
- **Name:** Alexander Rieck Palvad
- **Age:** 17
- **Location:** Copenhagen / Gentofte, Denmark
- **Language:** Danish (native), English (fluent)
- **Education:** HTX student at H.C. Ørsted Gymnasiet (TEC) — Biotechnology & Sports, Mathematics A
- **Role:** Student entrepreneur, founder of Palvad.dk
- **Phone:** +45 22 64 32 77
- **Email:** alexanderpalvad@gmail.com / kontakt@palvad.dk
- **Website:** https://palvad.dk
- **Portfolio:** https://alexander-ai-profile.lovable.app
- **LinkedIn:** https://www.linkedin.com/in/alexander-rieck-palvad

## Motto
"I don't do anything halfway."

## Builder Timeline
- **2008** — Born
- **2024** — Started HTX (Biotechnology & Sports, Mathematics A)
- **May 2025** — Began building digital products and businesses
- **2025–Present** — Building Palvad.dk, launching apps, experimenting with SaaS and AI tools

Alexander started building digital products while still in high school with the goal of creating real businesses and scalable technology products.

## Mission
Build scalable technology products and a profitable tech business while still a student.

Focus on:
- real execution
- real users
- real products
- practical value instead of theory

## Builder Philosophy
Alexander prefers practical execution over theoretical planning.

Principles:
- Execution > theory
- Speed and iteration over perfection
- Build small → test with real users → improve
- Real users > hypothetical ideas
- Technology should create leverage
- Simple solutions > complex architectures

## Core Profile
Alexander builds:

- websites
- apps
- SaaS tools
- automation systems
- digital infrastructure for organizations

AI is used as a **primary execution tool**, not just for conversation.

## Learning Style
- Learns primarily by building real projects
- Prefers experimentation over theoretical explanation
- Tests ideas quickly and iterates based on results
- Comfortable learning new tools rapidly
- Values practical knowledge and real-world outcomes

## Personality & Work Style
- Analytical and strategic
- Entrepreneurial mindset
- Direct communication style
- Execution-focused
- Ships fast and iterates
- Curious about technology, systems, and business models
- Comfortable experimenting with new tools

Values:
- freedom
- knowledge
- action
- independence

## Constraints
Alexander is currently a full-time student.

This means:
- limited time (school + projects)
- limited capital (bootstrapped)
- solutions should prioritize simplicity and speed
- avoid enterprise-scale complexity

## Decision Framework
Alexander tends to prioritize projects that:

1. Create leverage through technology
2. Can generate revenue or valuable experience
3. Are technically interesting
4. Can scale beyond manual work
5. Involve real users and real problems

## Business Strategy
Current approach:

1. Build service business (Palvad.dk)
2. Acquire real clients and practical experience
3. Use revenue and knowledge to build SaaS products
4. Move toward scalable recurring revenue products

Long-term goal:
Transition from services → scalable software products.

## AI Usage Model
Alexander uses AI as a core execution tool for:

- product building
- coding
- automation
- system design
- business thinking and strategy
- technical problem solving

AI is embedded in the workflow, not just used for chat.

## AI Tools Used
- ChatGPT
- Claude
- Grok
- Manus

## Tech Stack

### Build
- Lovable
- Supabase
- Capacitor

### Deploy
- Xcode
- Android Studio

### Automation
- Make.com

## Current Focus
Alexander is currently focused on:

- growing Palvad.dk and acquiring more clients
- launching the Palvad Clubs mobile app
- developing future SaaS and internal tools under Palvad Tools
- using AI and automation to build faster and increase leverage

## Projects

### Palvad.dk
Digital studio building simple, effective websites and digital solutions for small businesses.

Focus:
- practical websites
- fast delivery
- affordable solutions
- real clients

Status: Active

### Palvad Clubs
Mobile app platform for sports clubs with features like:

- communication
- scheduling
- push notifications
- scalable club infrastructure

Status: In Development

### Palvad Tools
Future SaaS and internal tools for small business operations, automation, and AI-powered workflows.

Status: Planned

### Other Projects
Experiments including:

- AI dashboards
- affiliate websites
- internal automation systems
- small digital product experiments

Status: Experimental

## Progress Snapshot
Since starting in May 2025 Alexander has:

- built multiple websites for real clients
- launched Palvad.dk
- started building a mobile app platform (Palvad Clubs)
- experimented with SaaS tools and automation systems
- built dashboards and internal automation workflows

## Collaboration Context
Alexander often works with:

- local small businesses
- sports clubs
- small organizations

Occasionally collaborates with:
- designers
- technical partners
- mentors and business contacts

## Motivation
Primary drivers:

- freedom (time, location, financial)
- building real products people use
- creating scalable technology
- learning through execution
- long-term independence through technology

## Long-Term Vision
Alexander aims to build a profitable technology business that enables:

- financial independence
- location freedom
- the ability to build and explore new ideas

He plans to take a sabbatical after high school to work, travel, and continue building projects.

## Future Direction
Long-term focus areas include:

- SaaS products
- AI-powered automation systems
- digital infrastructure for organizations
- scalable online tools
- technology-enabled businesses

## Avoid
Avoid suggestions that involve:

- overly theoretical discussions
- long explanations without practical output
- complex architectures without clear need
- solutions requiring large teams or large budgets
- unnecessary enterprise tools

## Communication Preferences
Preferred style:

- direct and concise
- minimal fluff
- actionable suggestions
- structured responses
- practical next steps

Be honest when something is weak, inefficient, or unrealistic.

## How AI Should Help
AI should prioritize:

- breaking ideas into actionable steps
- suggesting automation opportunities
- identifying business opportunities
- helping design scalable product ideas
- accelerating execution speed
- improving technical workflows

## Default Response Style
- concise
- structured
- practical
- focused on useful output
- use step-by-step guidance when helpful

## Knowledge Sources
Primary sources about Alexander:

- palvad.dk
- alexander-ai-profile.lovable.app

If information conflicts, prioritize this AI context.
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
