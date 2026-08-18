import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SafariProps = HTMLAttributes<HTMLDivElement> & {
  url?: string;
  imageSrc: string;
};

export function Safari({ url, imageSrc, className, ...props }: SafariProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-black/8 bg-[#e8e4db] shadow-lg transition-shadow duration-300 hover:shadow-2xl md:rounded-xl",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2 px-2.5 py-1.5 md:px-3 md:py-2">
        <div className="flex gap-1 md:gap-1.5" aria-hidden>
          <span className="size-1.5 rounded-full bg-[#cfc9bc] md:size-2" />
          <span className="size-1.5 rounded-full bg-[#cfc9bc] md:size-2" />
          <span className="size-1.5 rounded-full bg-[#cfc9bc] md:size-2" />
        </div>
        {url ? (
          <p className="min-w-0 flex-1 truncate rounded bg-white/80 px-1.5 py-0.5 font-mono text-[9px] text-muted md:rounded-md md:px-2 md:py-1 md:text-[10px]">
            {url}
          </p>
        ) : null}
      </div>
      <div className="overflow-hidden">
        <img
          src={imageSrc}
          alt=""
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
}
