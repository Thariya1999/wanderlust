import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data";
import { BsArrowRight } from "react-icons/bs";

const featured = destinations.filter((d) => d.featured).slice(0, 5);

export default function DestinationsSection() {
  return (
    <section className="bg-cream py-24 px-8 md:px-16">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-7 h-px bg-copper" />
          <span className="text-copper text-[0.68rem] tracking-[0.22em] uppercase">Where to go</span>
        </div>
        <h2 className="reveal font-cormorant text-ink leading-tight"
          style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 300 }}>
          Iconic <em className="text-copper">Destinations</em><br />Await You
        </h2>
      </div>

      {/* Masonry Grid */}
      <div className="reveal grid gap-px"
        style={{ gridTemplateColumns: "1.5fr 1fr 1fr", gridTemplateRows: "340px 260px" }}>
        {featured.map((dest, i) => (
          <div
            key={dest.id}
            className={`group relative overflow-hidden cursor-hover ${i === 0 ? "row-span-2" : ""}`}
          >
            <Image
              src={dest.image}
              alt={dest.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent transition-all duration-400 group-hover:from-ink/90 group-hover:via-ink/30" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-gold text-[0.62rem] tracking-[0.2em] uppercase block mb-1.5">{dest.tag}</span>
              <h3 className={`font-cormorant text-white font-normal leading-tight mb-1 ${i === 0 ? "text-3xl" : "text-xl"}`}>
                {dest.name}
              </h3>
              <p className="dest-card-desc text-white/60 text-sm leading-relaxed">{dest.description}</p>
              <Link href={`/destinations`} className="dest-card-btn inline-flex items-center gap-2 text-gold text-[0.68rem] tracking-[0.14em] uppercase mt-3 hover:gap-3 transition-all duration-300">
                View Details <BsArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/destinations"
          className="inline-flex items-center gap-3 text-copper text-[0.75rem] tracking-[0.14em] uppercase border border-copper/40 px-8 py-3.5 hover:bg-copper hover:text-white hover:border-copper transition-all duration-300"
        >
          View All Destinations <BsArrowRight />
        </Link>
      </div>
    </section>
  );
}
