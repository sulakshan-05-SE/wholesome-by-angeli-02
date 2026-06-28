import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
     <section className="relative overflow-hidden bg-hero-gradient pt-40 pb-24">
  <div className="glow-orb h-[500px] w-[500px] -top-32 left-1/2 -translate-x-1/2" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center">
    <Reveal>
      <span className="inline-flex items-center rounded-full border border-primary/20 bg-white/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary-deep backdrop-blur-sm">
        Contact Us
      </span>

      <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
        Let's Build
        <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-lime-400 bg-clip-text text-transparent">
          Something Amazing
        </span>
      </h1>

      <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
        Have questions about our products or need personalized guidance?
        Our team is ready to help you achieve your wellness goals.
      </p>
    </Reveal>
  </div>
</section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Mail, label: "Email", value: "hello@angeli.com" },
            { icon: Phone, label: "Phone", value: "+1 (555) 555-0142" },
            { icon: MapPin, label: "Studio", value: "221 Wellness Ave, NYC" },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <div className="glass-strong rounded-3xl p-7 h-full hover:shadow-glow transition-all">
                <div className="h-12 w-12 rounded-2xl bg-primary-gradient flex items-center justify-center shadow-soft">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="mt-1 font-display text-lg font-semibold">{c.value}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-3">
            <form className="glass-strong rounded-3xl p-8 lg:p-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <h2 className="font-display text-3xl font-bold">Send us a message</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" placeholder="Your full name" />
                <Field label="Email" type="email" placeholder="you@email.com" />
              </div>
              <Field label="Subject" placeholder="How can we help?" />
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea rows={5} placeholder="Tell us a little more..." className="mt-2 w-full rounded-2xl bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary transition" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition shadow-soft">
                Send message <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="glass-strong rounded-3xl overflow-hidden h-full flex flex-col">
              <iframe
                title="map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.01%2C40.70%2C-73.96%2C40.74&layer=mapnik"
                className="w-full h-72 border-0"
                loading="lazy"
              />
              <div className="p-7 flex-1">
                <h3 className="font-display text-xl font-bold">Visit our studio</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Drop by Monday–Friday, 9am–6pm. Walk-in consultations available on Saturdays.
                </p>
                <div className="mt-6">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Follow us</div>
                  <div className="flex gap-2">
                    {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                      <a key={i} href="#" className="h-10 w-10 rounded-full bg-primary-soft flex items-center justify-center hover:bg-primary/30 hover:scale-110 transition">
                        <Icon className="h-4 w-4 text-primary-deep" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input type={type} placeholder={placeholder}
        className="mt-2 w-full rounded-2xl bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary transition" />
    </div>
  );
}
