import { WorkIndex } from "@/components/work-index";

export function SelectedWork() {
  return (
    <section id="trabalho" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-8 md:px-8 md:pt-24">
        <p className="font-mono text-xs tracking-[0.22em] text-muted uppercase">
          001
        </p>
        <h2 className="mt-2 font-serif text-4xl md:text-5xl">Trabalho</h2>
      </div>
      <WorkIndex />
    </section>
  );
}
