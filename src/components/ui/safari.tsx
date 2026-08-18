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
        "overflow-hidden rounded-xl border border-black/8 bg-[#e8e4db]",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2 px-3 py-2">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2 rounded-full bg-[#cfc9bc]" />
          <span className="size-2 rounded-full bg-[#cfc9bc]" />
          <span className="size-2 rounded-full bg-[#cfc9bc]" />
        </div>
        {url ? (
          <p className="min-w-0 flex-1 truncate rounded-md bg-white/80 px-2 py-1 font-mono text-[10px] text-muted">
            {url}
          </p>
        ) : null}
      </div>
      <img
        src={imageSrc}
        alt=""
        className="aspect-[16/10] w-full object-cover object-top"
      />
    </div>
  );
}
