import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Apple, Dumbbell, Calendar, Pill, Check, ArrowRight } from "lucide-react";

const services = [
  { icon: Apple, title: "Diet Consultation", price: "From $89", desc: "Personalised nutrition guidance from certified specialists.", features: ["1:1 video sessions", "Custom action plan", "Lab report review", "Ongoing support"] },
  { icon: Dumbbell, title: "Fitness Nutrition", price: "From $129", desc: "Optimise performance, recovery and body composition.", features: ["Performance fueling", "Pre/post workout", "Body composition", "Athlete-grade plans"] },
  { icon: Calendar, title: "Meal Planning", price: "From $59/mo", desc: "Weekly meal plans matched to your taste and lifestyle.", features: ["Curated weekly menus", "Smart shopping lists", "Allergy aware", "Mobile-friendly"] },
  { icon: Pill, title: "Supplement Guidance", price: "From $69", desc: "Evidence-based supplement stacks built for you.", features: ["Personal stack design", "Quality screening", "Interaction check", "30-day follow-up"] },
];

export default function Services() {
  return (
    <Layout>
      <section className="relative bg-hero-gradient pt-36 pb-20">
        <div className="glow-orb h-[500px] w-[500px] -top-40 left-1/2 -translate-x-1/2" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-deep">Services</span>
            <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold tracking-tight text-balance max-w-3xl mx-auto leading-[1.05]">
              Wellness, tailored to <span className="bg-primary-gradient bg-clip-text text-transparent">you</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Personalised programs led by certified nutritionists and coaches.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group relative glass-strong rounded-3xl p-8 lg:p-10 h-full hover:shadow-glow hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-primary-gradient flex items-center justify-center shadow-soft">
                      <s.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-semibold rounded-full bg-primary-soft text-primary-deep px-3 py-1.5">{s.price}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm">
                        <span className="h-5 w-5 rounded-full bg-primary/15 flex items-center justify-center">
                          <Check className="h-3 w-3 text-primary-deep" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:gap-3 transition-all">
                    Book now <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
