import { ArrowUpRight } from "lucide-react";

const Hero = () => (
  <section className="container py-24 md:py-32">
    <p className="text-sm text-primary font-mono mb-4">Hi, I'm</p>
    <h1 className="font-display font-900 text-4xl md:text-6xl tracking-tight leading-[1.1] mb-4">
      Alexander Rieck
      <br />
      Palvad
    </h1>
    <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-lg">
      Student Entrepreneur — Websites, Apps & AI Tools
    </p>
    <blockquote className="border-l-2 border-primary pl-4 text-foreground font-medium text-lg mb-8 italic">
      "I don't do anything halfway."
    </blockquote>
    <a
      href="https://palvad.dk"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline transition-colors duration-150"
    >
      palvad.dk <ArrowUpRight className="w-4 h-4" />
    </a>
  </section>
);

export default Hero;
