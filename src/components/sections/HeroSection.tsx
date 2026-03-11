import Link from "next/link";
import { BsArrowRight, BsPlayCircle } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* BG */}
      <div
        className="absolute inset-0 animate-hero-zoom"
        style={{
          backgroundImage:
            "linear-gradient(160deg, rgba(26,21,16,0.58) 0%, rgba(61,43,31,0.32) 50%, rgba(26,21,16,0.72) 100%), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Floating location pills */}
      <div className="absolute top-1/4 right-12 hidden lg:flex flex-col gap-3 animate-float">
        {["Bali, Indonesia", "Santorini, Greece", "Maldives"].map((loc, i) => (
          <div
            key={loc}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-white text-xs tracking-wide"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            <FiMapPin className="text-gold text-sm" />
            {loc}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 max-w-5xl">
        <div className="animate-fade-up flex items-center gap-3 mb-6">
          <span className="w-10 h-px bg-gold" />
          <span className="text-gold text-[0.7rem] tracking-[0.26em] uppercase">Explore the extraordinary</span>
        </div>

        <h1 className="animate-fade-up-d1 font-cormorant text-white leading-[0.92] mb-6"
          style={{ fontSize: "clamp(3.8rem, 9vw, 7.5rem)", fontWeight: 300 }}>
          Discover<br />the World&apos;s<br />
          <em className="text-gold not-italic">Hidden Gems</em>
        </h1>

        <p className="animate-fade-up-d2 text-white/70 text-base leading-relaxed max-w-md mb-10 font-light">
          Curated journeys to the world&apos;s most breathtaking destinations. Every trip crafted with intention, wonder, and soul.
        </p>

        <div className="animate-fade-up-d3 flex flex-wrap gap-5 items-center">
          <Link
            href="/packages"
            className="group bg-copper text-white text-[0.75rem] tracking-[0.14em] uppercase px-7 py-4 border border-copper hover:bg-transparent transition-all duration-300 flex items-center gap-3"
          >
            Explore Tours
            <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/destinations"
            className="group flex items-center gap-3 text-white/75 text-[0.75rem] tracking-[0.14em] uppercase hover:text-gold transition-colors duration-300"
          >
            <BsPlayCircle className="text-xl" />
            View Destinations
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-up-d4 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/50 animate-scroll-line" />
        <span className="text-white/40 text-[0.62rem] tracking-[0.24em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
