import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Goals from "../components/Goals";
import Contact from "../components/Contact";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Goals />
      <Contact />
    </main>
    <footer className="container py-8 border-t border-border">
      <p className="text-xs text-muted-foreground font-mono">
        © {new Date().getFullYear()} Alexander Rieck Palvad
      </p>
    </footer>
  </div>
);

export default Index;
