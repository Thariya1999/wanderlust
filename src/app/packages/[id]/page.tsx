"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { packages } from "@/data";
import { BsArrowRight, BsStarFill, BsCheckCircleFill } from "react-icons/bs";
import { FiClock, FiUsers, FiBarChart2, FiMapPin } from "react-icons/fi";
import { useState } from "react";
import { useReveal } from "@/lib/useReveal";

export default function PackageDetailPage() {
  const { id } = useParams();
  const pkg = packages.find((p) => p.id === id);
  const [mainImg, setMainImg] = useState(0);
  const [fading, setFading] = useState(false);
  useReveal();

  if (!pkg) return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center">
        <h2 className="font-cormorant text-4xl text-ink mb-4">Package not found</h2>
        <Link href="/packages" className="text-copper underline">Back to Packages</Link>
      </div>
    </div>
  );

  const changeImg = (idx: number) => {
    setFading(true);
    setTimeout(() => { setMainImg(idx); setFading(false); }, 300);
  };

  return (
    <div className="page-enter">
      {/* Page Hero */}
      <div
        className="relative h-[38vh] flex items-end pb-12 px-8 md:px-16"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(26,21,16,0.9) 0%, rgba(26,21,16,0.3) 100%), url('${pkg.gallery[0]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pt-20">
          <div className="text-white/45 text-xs tracking-widest uppercase mb-2">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/packages" className="hover:text-gold transition-colors">Packages</Link>
            <span className="mx-2">/</span>
            <span className="text-gold">{pkg.name}</span>
          </div>
          <h1 className="font-cormorant text-white font-light leading-none"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            {pkg.name}
          </h1>
        </div>
      </div>

      <section className="bg-cream py-16 px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-start">
          {/* Gallery */}
          <div className="reveal-left">
            <div className={`relative h-[420px] mb-1.5 overflow-hidden gallery-main-img ${fading ? "fading" : ""}`}>
              <Image
                src={pkg.gallery[mainImg]}
                alt={pkg.name}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {pkg.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => changeImg(i)}
                  className={`relative h-24 overflow-hidden transition-opacity duration-300 ${mainImg === i ? "ring-2 ring-copper" : "opacity-70 hover:opacity-100"}`}
                >
                  <Image src={img} alt={`Gallery ${i + 1}`} fill sizes="120px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="reveal-right">
            {/* Meta row */}
            <div className="flex flex-wrap gap-4 mb-4 text-xs text-mist uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><FiClock /> {pkg.duration}</span>
              <span className="flex items-center gap-1.5"><FiMapPin /> {pkg.destination}</span>
              <span className="flex items-center gap-1.5"><FiUsers /> {pkg.groupSize}</span>
              <span className="flex items-center gap-1.5"><FiBarChart2 /> {pkg.difficulty}</span>
            </div>

            {/* Price & Rating */}
            <div className="flex items-end justify-between mb-4">
              <div>
                <span className="font-cormorant text-copper" style={{ fontSize: "3rem", fontWeight: 300 }}>
                  <sup className="text-lg">$</sup>{pkg.price.toLocaleString()}
                </span>
                <span className="text-mist text-sm ml-2">/ person</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <BsStarFill className="text-gold text-xs" />
                <span className="text-ink font-medium">{pkg.rating}</span>
                <span className="text-mist text-xs">({pkg.reviewCount} reviews)</span>
              </div>
            </div>

            <span className="inline-block bg-copper text-white text-[0.6rem] tracking-widest uppercase px-3 py-1 mb-5">{pkg.badge}</span>

            <p className="text-bark text-sm leading-relaxed mb-6">{pkg.fullDescription}</p>

            {/* Highlights */}
            <h4 className="text-[0.68rem] tracking-[0.18em] uppercase text-copper mb-4 flex items-center gap-2">
              <span className="w-5 h-px bg-copper" /> Trip Highlights
            </h4>
            <ul className="mb-7">
              {pkg.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 py-2.5 border-b border-black/6 text-sm text-bark">
                  <BsCheckCircleFill className="text-copper text-xs mt-0.5 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            {/* Meta grid */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              <div className="bg-sand p-4 text-center">
                <div className="text-[0.65rem] tracking-widest uppercase text-mist mb-1">Group Size</div>
                <div className="font-cormorant text-ink text-xl">{pkg.groupSize}</div>
              </div>
              <div className="bg-sand p-4 text-center">
                <div className="text-[0.65rem] tracking-widest uppercase text-mist mb-1">Difficulty</div>
                <div className="font-cormorant text-ink text-xl">{pkg.difficulty}</div>
              </div>
            </div>

            {/* Booking CTA */}
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 w-full bg-copper text-white text-[0.78rem] tracking-[0.15em] uppercase py-4 hover:bg-bark transition-all duration-300 group"
            >
              Book This Package
              <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <p className="text-center text-mist text-xs mt-3">
              Free cancellation up to 30 days before departure
            </p>
          </div>
        </div>

        {/* Related packages */}
        <div className="mt-20">
          <h3 className="font-cormorant text-ink text-2xl font-light mb-8">
            You May Also <em className="text-copper">Like</em>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {packages.filter((p) => p.id !== pkg.id).slice(0, 3).map((p) => (
              <Link key={p.id} href={`/packages/${p.id}`} className="group relative h-52 overflow-hidden block cursor-hover">
                <Image src={p.image} alt={p.name} fill sizes="30vw" className="object-cover transition-transform duration-600 group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-white/60 text-xs mb-1">{p.duration}</div>
                  <div className="font-cormorant text-white text-lg">{p.name}</div>
                  <div className="text-gold text-sm font-medium">${p.price.toLocaleString()}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
