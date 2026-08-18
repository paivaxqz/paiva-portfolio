import { site } from "@/lib/content";

export function Contact() {
  return (
    <section id="contato" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="font-mono text-xs tracking-[0.22em] text-muted uppercase">
          003
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
          E-mail
        </h2>
        <p className="mt-6 max-w-lg text-muted">
          Se for site ou interface, escreve. Manda o que já existe e o que
          precisa.
        </p>
        <div className="mt-10 flex flex-col gap-3 font-serif text-2xl md:text-3xl">
          <a
            href={`mailto:${site.email}`}
            className="w-fit underline decoration-transparent underline-offset-4 transition-colors hover:text-rust hover:decoration-rust"
          >
            {site.email}
          </a>
          <a
            href={site.github}
            className="w-fit text-muted underline decoration-transparent underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
