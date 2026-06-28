import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Target, Eye, Heart, Users } from "lucide-react";
import about from "@/assets/about-1.jpg";

const team = [
  { name: "Dr. Angeli Rao", role: "Founder & Chief Nutritionist", initial: "AR" },
  { name: "Marco Lin", role: "Head of Product Science", initial: "ML" },
  { name: "Sienna Park", role: "Wellness Coach Lead", initial: "SP" },
  { name: "Olivia Bennett", role: "Brand & Creative", initial: "OB" },
];

export default function About() {
  return (
    <Layout>
      <section className="relative bg-hero-gradient pt-36 pb-20">
        <div className="glow-orb h-[500px] w-[500px] -top-40 right-0" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">About us</span>
            <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold tracking-tight text-balance max-w-3xl mx-auto leading-[1.05]">
              A new era of wellness, rooted in nature.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Angeli was born from a simple belief: that nutrition should be honest, beautiful and built for real life.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-glow">
              <img src={about} alt="Yoga at sunrise" width={1024} height={1280} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">Our story</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">From a kitchen experiment to a global movement.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Founded in 2014 by Dr. Angeli Rao, our brand started as a personal mission to create supplements she could trust for her own family. A decade later, we power the wellness journeys of over 120,000 people worldwide — all without compromising on what matters: purity, science and beauty.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every formula is thoughtfully developed, third-party tested and crafted in small batches to ensure freshness and potency.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-primary-soft/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          {[
            { icon: Target, title: "Our Mission", desc: "To empower every person to live with vibrant energy through clean, science-backed nutrition." },
            { icon: Eye, title: "Our Vision", desc: "A world where wellness is accessible, beautiful and effortlessly integrated into daily life." },
          ].map((m, i) => (
            <Reveal key={m.title} delay={i * 0.1}>
              <div className="glass-strong rounded-3xl p-10 h-full">
                <div className="h-14 w-14 rounded-2xl bg-primary-gradient flex items-center justify-center shadow-soft">
                  <m.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">{m.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">By the numbers</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">A decade of impact.</h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { v: "120K+", l: "Active customers", icon: Users },
              { v: "50+", l: "Premium products", icon: Heart },
              { v: "98%", l: "Repeat satisfaction", icon: Target },
              { v: "15", l: "Years of trust", icon: Eye },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="glass-strong rounded-3xl p-7 text-center">
                  <s.icon className="h-6 w-6 mx-auto text-primary-deep" />
                  <div className="mt-4 font-display text-4xl font-bold bg-primary-gradient bg-clip-text text-transparent">{s.v}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary-soft/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">The team</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">The minds behind the magic.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="group rounded-3xl bg-card p-6 border border-border/60 hover:shadow-glow hover:-translate-y-1 transition-all">
                  <div className="aspect-square rounded-2xl bg-primary-gradient flex items-center justify-center text-primary-foreground font-display text-4xl font-bold shadow-soft">
                    {m.initial}
                  </div>
                  <h3 className="mt-5 font-display font-bold text-lg">{m.name}</h3>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
