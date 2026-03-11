"use client";
import { useState } from "react";
import Link from "next/link";
import { packages } from "@/data";
import PackageCard from "@/components/ui/PackageCard";
import { useReveal } from "@/lib/useReveal";

const categories = ["All", "Cultural", "Adventure", "Luxury", "Romantic"];

export default function PackagesPage() {
  const [active, setActive] = useState("All");
  useReveal();

  const filtered = active === "All"
    ? packages
    : packages.filter((p) => p.category === active);

  return (
    <div className="page-enter">
      {/* Page Hero */}
      <div
        className="relative h-[42vh] flex items-end pb-12 px-8 md:px-16"
        style={{
          backgroundImage: "linear-gradient(to top, rgba(26,21,16,0.88) 0%, rgba(26,21,16,0.25) 100%), url('https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pt-20">
          <div className="text-white/45 text-xs tracking-widest uppercase mb-2">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gold">Tour Packages</span>
          </div>
          <h1 className="font-cormorant text-white font-light leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            All <em className="text-gold">Packages</em>
          </h1>
        </div>
      </div>

      <section className="bg-sand py-16 px-8 md:px-16">
        {/* Filters */}
        <div className="flex gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-[0.68rem] tracking-[0.12em] uppercase px-4 py-2 border transition-all duration-300
                ${active === cat
                  ? "bg-copper text-white border-copper"
                  : "border-ink/20 text-bark hover:border-copper hover:text-copper"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((pkg, i) => (
            <PackageCard key={pkg.id} {...pkg} delay={`${(i % 3) * 0.12}s`} />
          ))}
        </div>
      </section>
    </div>
  );
}
