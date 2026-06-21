import type { ReactNode } from "react";

export function Marquee({
  items,
  className = "",
  variant = "electric",
}: {
  items: ReactNode[];
  className?: string;
  variant?: "electric" | "magenta" | "black" | "white";
}) {
  const bg =
    variant === "magenta" ? "bg-[#fb00e4] text-white" :
    variant === "black"   ? "bg-[#070708] text-white border-y border-white/10" :
    variant === "white"   ? "bg-[#f3e9d6] text-black" :
                            "bg-[#0100f4] text-white";
  const track = (kind: string) => (
    <div className="marquee-track">
      {items.map((it, i) => (
        <span key={`${kind}-${i}`} className="flex items-center gap-12 font-display italic text-4xl md:text-6xl whitespace-nowrap">
          {it}
          <span aria-hidden className="opacity-50 not-italic">✧</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className={`marquee py-6 ${bg} ${className}`}>
      {track("a")}
      {track("b")}
    </div>
  );
}
