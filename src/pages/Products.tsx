import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, Search } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { products, categories, type Product } from "@/lib/products";

export default function Products() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);
  const [qty, setQty] = useState(1);

  const filtered = useMemo(
    () =>
      products.filter(
        (p) => (cat === "All" || p.category === cat) && p.name.toLowerCase().includes(q.toLowerCase()),
      ),
    [cat, q],
  );

  return (
    <Layout>
      <section className="relative bg-hero-gradient pt-36 pb-16">
        <div className="glow-orb h-[400px] w-[400px] -top-20 right-10" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">Shop</span>
            <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold tracking-tight text-balance">
              The collection.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
              Crafted in small batches. Loved by thousands.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="sticky top-20 z-30 glass-strong rounded-2xl p-3 mb-10 flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-transparent pl-11 pr-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition ${
                    cat === c ? "bg-foreground text-background" : "hover:bg-primary/15 text-muted-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 0.06}>
                <div
                  onClick={() => { setSelected(p); setQty(1); }}
                  className="group cursor-pointer rounded-3xl bg-card border border-border/60 p-3 hover:shadow-glow hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-primary-soft/40">
                    <img src={p.image} alt={p.name} width={800} height={800} loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-[900ms]" />
                    {p.badge && (
                      <span className="absolute top-3 left-3 glass-strong rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">
                        {p.badge}
                      </span>
                    )}
                    <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <button
                        onClick={(e) => { e.stopPropagation(); }}
                        className="w-full rounded-full bg-foreground text-background py-2.5 text-xs font-semibold flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="h-3.5 w-3.5" /> Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-muted-foreground">{p.category}</div>
                    <h3 className="mt-1 font-display font-semibold">{p.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{p.tagline}</p>
                    <div className="mt-3 font-display text-lg font-bold">${p.price}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">No products match your search.</div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-[2rem] bg-card shadow-glow overflow-hidden grid md:grid-cols-2"
            >
              <button onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full glass-strong flex items-center justify-center hover:bg-primary/20">
                <X className="h-4 w-4" />
              </button>
              <div className="aspect-square md:aspect-auto bg-primary-soft/40">
                <img src={selected.image} alt={selected.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-8 lg:p-10 flex flex-col">
                <div className="text-xs uppercase tracking-wider text-primary-deep font-semibold">{selected.category}</div>
                <h2 className="mt-2 font-display text-3xl font-bold">{selected.name}</h2>
                <p className="mt-1 text-muted-foreground">{selected.tagline}</p>
                <div className="mt-5 font-display text-4xl font-bold">${selected.price}</div>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{selected.description}</p>
                <div className="mt-auto pt-8">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 glass-strong rounded-full p-1">
                      <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="h-8 w-8 rounded-full hover:bg-primary/15 flex items-center justify-center"><Minus className="h-3 w-3" /></button>
                      <span className="w-8 text-center text-sm font-semibold">{qty}</span>
                      <button onClick={() => setQty((q) => q + 1)} className="h-8 w-8 rounded-full hover:bg-primary/15 flex items-center justify-center"><Plus className="h-3 w-3" /></button>
                    </div>
                    <button className="flex-1 rounded-full bg-foreground text-background py-3 text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90">
                      <ShoppingBag className="h-4 w-4" /> Add to cart — ${selected.price * qty}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
