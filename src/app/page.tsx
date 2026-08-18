import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col">
      <div className="grain" />
      <ScrollProgress />
      <SiteHeader />
      <main className="relative z-10 flex-1">
        <Hero />
        <SelectedWork />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
