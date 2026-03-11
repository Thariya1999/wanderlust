"use client";
import { useCounter } from "@/lib/useReveal";
import { stats } from "@/data";

export default function StatsBar() {
  useCounter();
  return (
    <div className="bg-ink grid grid-cols-2 md:grid-cols-4">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`py-8 px-6 text-center ${i < stats.length - 1 ? "border-r border-white/8" : ""}`}
        >
          <span
            className="font-cormorant text-gold block leading-none mb-1 stat-appear"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            data-count={s.num}
            data-suffix={s.suffix}
          >
            0{s.suffix}
          </span>
          <span className="text-white/35 text-[0.65rem] tracking-[0.18em] uppercase">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
