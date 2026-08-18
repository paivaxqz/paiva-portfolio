import { site } from "@/lib/content";

export function Contact() {
  return (
    <section id="contato" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-24">
        <h2 className="font-serif text-3xl font-light md:text-5xl lg:text-6xl">E-mail</h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:mt-4 md:text-base">
          Se for site, escreve. Manda o que já existe e o que precisa.
        </p>
        <div className="mt-6 flex flex-col gap-3 font-serif text-xl md:mt-8 md:text-2xl lg:text-3xl">
          <a 
            href={`mailto:${site.email}`} 
            className="w-fit underline-offset-4 transition-all duration-200 hover:underline hover:opacity-70"
          >
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="w-fit text-muted underline-offset-4 transition-all duration-200 hover:underline hover:text-ink"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
