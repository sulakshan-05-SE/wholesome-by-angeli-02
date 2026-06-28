import { Link } from "react-router-dom";
import { Facebook, Instagram, Leaf, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="dark relative mt-32 border-t border-border bg-background text-foreground">
      <div className="absolute inset-0 bg-hero-gradient opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2 max-w-md">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-gradient shadow-glow">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold">Angeli</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Nutrition</span>
              </div>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Crafting clean, science-backed nutrition for a vibrant life. Plant-powered formulas, transparent sourcing, beautiful results.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full glass-strong hover:bg-primary/20 hover:scale-110 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Explore</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Products", to: "/products" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover:text-primary-deep transition">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Weekly nutrition tips &amp; exclusive drops.</p>
            <form className="flex gap-2 glass-strong rounded-full p-1.5" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@email.com" className="flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-muted-foreground" />
              <button type="submit" className="rounded-full bg-foreground text-background px-4 py-2 text-xs font-semibold">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary/15 flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 Angeli Nutrition. All rights reserved.</p>
          <p>Designed for a vibrant, healthier you.</p>
        </div>
      </div>
    </footer>
  );
}
