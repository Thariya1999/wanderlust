"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { destinations } from "@/data";
import { BsArrowRight } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { useReveal } from "@/lib/useReveal";

const categories = ["All", "Asia", "Europe", "Mediterranean", "Indian Ocean", "Oceania", "South America", "East Asia"];

export default function DestinationsPage() {
  const [active, setActive] = useState("All");
  useReveal();

  const filtered = active === "All"
    ? destinations
    : destinations.filter((d) => d.tag.toLowerCase().includes(active.toLowerCase()) || d.name.toLowerCase().includes(active.toLowerCase()));

  return (
    <div className="page-enter">
      {/* Page Hero */}
      <div
        className="relative h-[42vh] flex items-end pb-12 px-8 md:px-16"
        style={{
          backgroundImage: "linear-gradient(to top, rgba(26,21,16,0.85) 0%, rgba(26,21,16,0.2) 100%), url('https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pt-20">
          <div className="text-white/45 text-xs tracking-widest uppercase mb-2">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gold">Destinations</span>
          </div>
          <h1 className="font-cormorant text-white font-light leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            All <em className="text-gold">Destinations</em>
          </h1>
        </div>
      </div>

      {/* Filter + Grid */}
      <section className="bg-cream py-16 px-8 md:px-16">
        {/* Filter */}
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1.5">
          {filtered.map((dest, i) => (
            <div
              key={dest.id}
              className="reveal group relative overflow-hidden cursor-hover"
              style={{ height: "300px", transitionDelay: `${(i % 4) * 0.1}s` }}
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent transition-all duration-400 group-hover:via-ink/35" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-1.5 text-gold text-[0.6rem] tracking-[0.18em] uppercase mb-1.5">
                  <FiMapPin className="text-xs" /> {dest.tag}
                </div>
                <h3 className="font-cormorant text-white text-xl leading-tight mb-1">{dest.name}</h3>
                <p className="dest-card-desc text-white/55 text-xs leading-relaxed">{dest.description}</p>
                <Link href="/packages" className="dest-card-btn inline-flex items-center gap-1.5 text-gold text-[0.64rem] tracking-wider uppercase mt-2 hover:gap-2.5 transition-all duration-300">
                  View Details <BsArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
