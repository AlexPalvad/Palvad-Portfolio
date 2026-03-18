const items = [
  "Growing Palvad.dk and acquiring real clients",
  "Building and launching the Palvad Clubs mobile app",
  "Developing SaaS and automation tools under Palvad Tools",
  "Using AI and automation to build faster products",
];

const Now = () => (
  <section id="now" className="container py-16 border-t border-border">
    <h2 className="font-display font-bold text-2xl mb-6 tracking-tight">Now</h2>
    <ul className="space-y-3 max-w-2xl">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </section>
);

export default Now;
