import { Target, TrendingUp, Rocket } from "lucide-react";

const goals = [
  {
    icon: Target,
    label: "Short-term",
    items: ["Grow Palvad.dk client base", "Launch Palvad Clubs apps", "Get real paying clients"],
  },
  {
    icon: TrendingUp,
    label: "Medium-term",
    items: ["Build scalable SaaS products", "Generate recurring revenue", "Establish stronger brand credibility"],
  },
  {
    icon: Rocket,
    label: "Long-term",
    items: ["Build a successful tech business", "Achieve financial independence", "Maintain freedom to build and explore"],
  },
];

const Goals = () => (
  <section id="goals" className="container py-16 border-t border-border">
    <h2 className="font-display font-bold text-2xl mb-6 tracking-tight">Goals</h2>
    <div className="grid gap-6 md:grid-cols-3">
      {goals.map((g) => (
        <div key={g.label} className="border border-border rounded-lg p-5 bg-card">
          <div className="flex items-center gap-2 mb-3">
            <g.icon className="w-4 h-4 text-primary" />
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              {g.label}
            </p>
          </div>
          <ul className="space-y-2">
            {g.items.map((item) => (
              <li key={item} className="text-sm text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Goals;
