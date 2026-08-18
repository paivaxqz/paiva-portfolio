import { site } from "@/lib/content";

export function Contact() {
  return (
    <section id="contato" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <h2 className="font-serif text-4xl font-light md:text-6xl">E-mail</h2>
        <p className="mt-4 max-w-md text-muted">
          Se for site, escreve. Manda o que já existe e o que precisa.
        </p>
        <div className="mt-8 flex flex-col gap-3 font-serif text-2xl md:text-3xl">
          <a href={`mailto:${site.email}`} className="w-fit underline-offset-4 hover:underline">
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="w-fit text-muted underline-offset-4 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
