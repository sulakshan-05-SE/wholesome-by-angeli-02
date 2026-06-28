import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Sparkles, ShieldCheck, Heart, Apple, Dumbbell, Calendar, Pill, Star, Quote } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/hero.jpg";
import fishpie from "@/assets/product-fishpie.jpg";
import moussaka from "@/assets/product-moussaka.jpg";
import granolaGhee from "@/assets/product-granola-ghee.jpg";
import fishpieBox from "@/assets/product-fishpie-box.jpg";
import { products } from "@/lib/products";
import { Hero3D } from "@/components/site/Hero3D";

const heroImages = [fishpie, moussaka, granolaGhee, fishpieBox, hero];

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Featured />
      <Services />
      <WhyUs />
      <Testimonials />
      <BlogPreview />
      <CTA />
    </Layout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-24 lg:pt-44 lg:pb-32">
      <div className="glow-orb h-[500px] w-[500px] -top-40 -left-40" />
      <div className="glow-orb h-[400px] w-[400px] top-1/2 -right-32" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5 text-primary-deep" />
            <span>New: Adaptogen Matcha Collection</span>
          </motion.div>

         <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mt-6 text-5xl md:text-6xl lg:text-8xl font-bold leading-[1.05]"
>
  Feel Better.
  <br />
  <span className="bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent">
    Live Stronger.
  </span>
</motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
            Clean, plant-powered supplements and personalised nutrition crafted for the way you live, train and thrive.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-semibold shadow-soft hover:shadow-glow transition-all">
              Shop Collection
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full glass-strong px-7 py-3.5 text-sm font-semibold hover:bg-primary/15 transition">
              Book Consultation
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="mt-12 flex items-center gap-8 text-sm">
            <div><div className="font-display text-2xl font-bold">120K+</div><div className="text-muted-foreground text-xs">Happy clients</div></div>
            <div className="h-10 w-px bg-border" />
            <div><div className="font-display text-2xl font-bold">4.9</div><div className="text-muted-foreground text-xs">⭐ Reviews</div></div>
            <div className="h-10 w-px bg-border" />
            <div><div className="font-display text-2xl font-bold">100%</div><div className="text-muted-foreground text-xs">Plant-based</div></div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }}
          className="relative">
          <div className="animate-float">
            <Hero3D images={heroImages} alt="Angeli Nutrition lifestyle" />
          </div>

          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
            className="absolute -left-4 lg:-left-10 top-12 glass-strong rounded-2xl p-4 shadow-soft flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary-gradient flex items-center justify-center">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="text-sm">
              <div className="font-semibold">100% Organic</div>
              <div className="text-xs text-muted-foreground">Third-party tested</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
            className="absolute -right-2 lg:-right-6 bottom-16 glass-strong rounded-2xl p-4 shadow-soft">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />)}
            </div>
            <div className="text-xs text-muted-foreground">"Life-changing energy"</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">Featured</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">Loved by the wellness obsessed.</h2>
          </div>
          <Link to="/products" className="text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <div className="group relative rounded-3xl bg-card border border-border/60 p-3 hover:shadow-soft transition-all duration-500 hover:-translate-y-2" style={{ perspective: "1000px" }}>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted/40" style={{ transformStyle: "preserve-3d" }}>
                  <Hero3D images={[p.image, heroImages[(i + 1) % heroImages.length], heroImages[(i + 2) % heroImages.length]]} alt={p.name} />
                  {p.badge && (
                    <span className="absolute top-3 left-3 z-10 glass-strong rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">{p.badge}</span>
                  )}
                </div>
                <div className="p-4">
                  <div className="text-xs text-muted-foreground">{p.category}</div>
                  <h3 className="mt-1 font-display font-semibold">{p.name}</h3>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-display text-lg font-bold">${p.price}</span>
                    <button className="rounded-full bg-foreground text-background text-xs font-semibold px-4 py-2 hover:opacity-90">Add</button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const serviceItems = [
  { icon: Apple, title: "Diet Consultation", desc: "1:1 sessions with certified nutritionists tailored to your goals." },
  { icon: Dumbbell, title: "Fitness Nutrition", desc: "Performance fueling for athletes and everyday movers." },
  { icon: Calendar, title: "Meal Planning", desc: "Weekly curated meal plans built around your taste & lifestyle." },
  { icon: Pill, title: "Supplement Guidance", desc: "Personalised stacks backed by clinical evidence." },
];

function Services() {
  return (
    <section className="py-24 lg:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">What we offer</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">A complete wellness ecosystem.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceItems.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group glass-strong rounded-3xl p-7 h-full hover:shadow-glow hover:-translate-y-2 transition-all duration-500">
                <div className="h-12 w-12 rounded-2xl bg-primary-gradient flex items-center justify-center shadow-soft">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all text-primary-deep">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    { icon: Leaf, title: "100% Plant-Based", desc: "Vegan formulas with organic, traceable ingredients." },
    { icon: ShieldCheck, title: "Clinically Backed", desc: "Every product validated by independent labs." },
    { icon: Heart, title: "Made with Care", desc: "Small-batch crafted in our certified facility." },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">Why Angeli</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">Wellness, redefined for modern life.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We believe nutrition should feel as good as it works. Every Angeli product is engineered with intention — clean ingredients, beautiful design, real results.
          </p>
          <div className="mt-10 space-y-5">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className="h-12 w-12 shrink-0 rounded-2xl bg-primary-soft flex items-center justify-center">
                  <p.icon className="h-5 w-5 text-primary-deep" />
                </div>
                <div>
                  <h3 className="font-display font-bold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "120K+", l: "Clients" },
              { v: "50+", l: "Products" },
              { v: "98%", l: "Satisfaction" },
              { v: "15", l: "Years" },
            ].map((s, i) => (
              <div key={i} className={`glass-strong rounded-3xl p-7 ${i % 2 ? "mt-8" : ""}`}>
                <div className="font-display text-4xl md:text-5xl font-bold bg-primary-gradient bg-clip-text text-transparent">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Sofia M.", role: "Yoga instructor", text: "The greens capsules transformed my mornings. I feel light, focused and unstoppable.", rating: 5 },
  { name: "Daniel K.", role: "Marathon runner", text: "Recovery blend is my secret weapon. Less soreness, faster comebacks.", rating: 5 },
  { name: "Priya R.", role: "Working mom", text: "Finally a brand that fits my life — beautiful packaging and real results.", rating: 5 },
];

function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">Testimonials</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">Real people. Real glow.</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass-strong rounded-3xl p-8 h-full relative">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <p className="text-foreground/90 leading-relaxed">"{t.text}"</p>
                <div className="mt-6 pt-6 border-t border-border/60">
                  <div className="font-display font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const posts = [
  { tag: "Nutrition", title: "5 morning habits for sustained energy", time: "4 min read" },
  { tag: "Recipes", title: "The ultimate plant-based protein bowl", time: "6 min read" },
  { tag: "Mindset", title: "How sleep transforms your metabolism", time: "5 min read" },
];

function BlogPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">Journal</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Nutrition tips &amp; stories.</h2>
          </div>
          <a href="#" className="text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">All articles <ArrowRight className="h-4 w-4" /></a>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="group rounded-3xl overflow-hidden border border-border/60 bg-card hover:shadow-glow hover:-translate-y-1 transition-all duration-500">
                <div className="aspect-[4/3] bg-primary-gradient relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,white_0%,transparent_60%)] opacity-40" />
                  <span className="absolute top-4 left-4 glass-strong rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">{p.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold group-hover:text-primary-deep transition-colors">{p.title}</h3>
                  <div className="mt-4 text-xs text-muted-foreground">{p.time}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary-gradient p-12 lg:p-20 text-center shadow-glow">
            <div className="glow-orb h-[400px] w-[400px] -top-32 -left-32 opacity-60" />
            <div className="glow-orb h-[400px] w-[400px] -bottom-32 -right-32 opacity-60" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground text-balance max-w-3xl mx-auto leading-tight">
                Start your healthier chapter today.
              </h2>
              <p className="mt-5 text-primary-foreground/80 max-w-xl mx-auto">
                Join 120,000+ wellness enthusiasts powering their days with Angeli.
              </p>
              <Link to="/products" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-sm font-semibold hover:scale-105 transition shadow-soft">
                Shop the Collection <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
