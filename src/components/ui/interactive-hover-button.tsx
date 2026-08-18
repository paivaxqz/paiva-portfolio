import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export function InteractiveHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group relative isolate w-auto cursor-pointer overflow-hidden rounded-full border border-ink bg-paper px-6 py-3 text-center font-medium text-ink",
        className,
      )}
      {...props}
    >
      <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out group-hover:scale-x-100" />
      <span className="relative z-10 flex items-center justify-center gap-2">
        <span className="size-2 rounded-full bg-ink transition-colors duration-300 group-hover:bg-[#f3eee4]" />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </span>
      <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-[#f3eee4] opacity-0 transition-all duration-300 group-hover:opacity-100">
        <span className="translate-x-6 transition-transform duration-300 group-hover:translate-x-0">
          {children}
        </span>
        <ArrowRight className="size-4 translate-x-6 transition-transform duration-300 group-hover:translate-x-0" />
      </span>
    </button>
  );
}
