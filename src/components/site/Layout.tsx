import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MessageCircle } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <a
        href="https://wa.me/15555555555"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[oklch(0.72_0.18_145)] text-white px-5 py-3.5 shadow-glow hover:scale-105 transition-transform animate-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
      </a>
    </div>
  );
}
