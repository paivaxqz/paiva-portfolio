import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StackStrip } from "@/components/stack-strip";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col">
      <div className="grain" />
      <ScrollProgress />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[70vh] overflow-hidden">
        <div className="hero-dots" />
      </div>
      <SiteHeader />
      <main className="relative z-10 flex-1">
        <Hero />
        <StackStrip />
        <SelectedWork />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
