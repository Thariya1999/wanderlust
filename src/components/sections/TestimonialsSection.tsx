import Image from "next/image";
import { testimonials } from "@/data";
import { BsStarFill } from "react-icons/bs";

export default function TestimonialsSection() {
  return (
    <section className="bg-cream py-24 px-8 md:px-16">
      <div className="text-center max-w-xl mx-auto mb-14">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="w-7 h-px bg-copper" />
          <span className="text-copper text-[0.68rem] tracking-[0.22em] uppercase">What travelers say</span>
          <span className="w-7 h-px bg-copper" />
        </div>
        <h2 className="reveal font-cormorant text-ink leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300 }}>
          Stories from <em className="text-copper">Real</em> Travelers
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            className={`reveal bg-white p-8 relative hover:-translate-y-1.5 transition-transform duration-400`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            {/* Big quote mark */}
            <div className="absolute top-4 left-6 font-cormorant text-8xl text-copper/10 leading-none select-none">
              &ldquo;
            </div>

            <div className="flex mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <BsStarFill key={j} className="text-gold text-xs mr-0.5" />
              ))}
            </div>

            <p className="text-bark text-sm leading-relaxed italic mb-7 relative z-10">
              &ldquo;{t.text}&rdquo;
            </p>

            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-sand flex-shrink-0">
                <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="44px" />
              </div>
              <div>
                <div className="text-ink text-sm font-medium">{t.name}</div>
                <div className="text-mist text-xs mt-0.5">
                  {t.flag} {t.location}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-black/6">
              <span className="text-[0.62rem] tracking-[0.1em] uppercase text-copper/70">{t.package}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
