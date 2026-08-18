"use client";

type LiveSafariProps = {
  href: string;
  url: string;
  poster: string;
};

export function LiveSafari({ href, url, poster }: LiveSafariProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-[#e4dfd3]">
      <div className="flex items-center gap-3 px-3 py-2">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-[#d0c9bb]" />
          <span className="size-2.5 rounded-full bg-[#d0c9bb]" />
          <span className="size-2.5 rounded-full bg-[#d0c9bb]" />
        </div>
        <p className="mx-auto flex h-7 min-w-0 max-w-md flex-1 items-center truncate rounded-md bg-white/70 px-3 font-mono text-[11px] text-muted">
          {url}
        </p>
      </div>
      <div className="relative h-[min(72vh,680px)] overflow-hidden bg-[#111] [overscroll-behavior:contain]">
        <img
          src={poster}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-40"
        />
        <iframe
          title={url}
          src={href}
          className="relative z-[1] h-full w-full border-0 bg-[#111]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="px-3 py-2 font-mono text-[10px] tracking-wide text-muted uppercase">
        Rola aí dentro · o site é o de verdade
      </p>
    </div>
  );
}
