import { ArrowUpRight } from "lucide-react";

const Contact = () => (
  <section id="contact" className="container py-16 border-t border-border">
    <h2 className="font-display font-bold text-2xl mb-4 tracking-tight">Contact</h2>
    <div className="flex flex-col gap-3">
      <a
        href="https://palvad.dk"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-primary hover:underline transition-colors duration-150"
      >
        palvad.dk <ArrowUpRight className="w-4 h-4" />
      </a>
      <a
        href="https://linkedin.com/in/alexanderpalvad"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-primary hover:underline transition-colors duration-150"
      >
        LinkedIn <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  </section>
);

export default Contact;
