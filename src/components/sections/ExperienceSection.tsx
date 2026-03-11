import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FiCompass, FiShield, FiStar, FiGlobe } from "react-icons/fi";

const features = [
  { icon: <FiCompass />, title: "Expert Guides", desc: "Local experts who know every hidden corner" },
  { icon: <FiShield />, title: "Safe Travel", desc: "Vetted operators and 24/7 global support" },
  { icon: <FiStar />, title: "Bespoke Trips", desc: "No two journeys are ever the same" },
  { icon: <FiGlobe />, title: "Sustainable", desc: "Carbon-offset, responsible tourism" },
];

export default function ExperienceSection() {
  return (
    <section className="bg-bark py-24 px-8 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Visual */}
        <div className="relative h-[480px] reveal-left hidden lg:block">
          <div className="absolute top-0 right-0 w-[68%] h-[78%] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=700&q=80"
              alt="Travel experience"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-[54%] h-[52%] overflow-hidden border-4 border-bark">
            <Image
              src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=500&q=80"
              alt="Travel guide"
              fill
              sizes="30vw"
              className="object-cover"
            />
          </div>
          {/* Badge */}
          <div className="absolute top-1/2 right-[-1.5rem] -translate-y-1/2 bg-gold p-5 text-center w-24">
            <div className="font-cormorant text-ink text-3xl leading-none">15+</div>
            <div className="text-ink text-[0.58rem] tracking-wider uppercase mt-1">Years of Excellence</div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-px bg-gold" />
            <span className="text-gold text-[0.68rem] tracking-[0.22em] uppercase">Why choose us</span>
          </div>
          <h2 className="reveal font-cormorant text-white leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300 }}>
            Travel with Purpose,<br /><em className="text-gold">Return with Stories</em>
          </h2>
          <p className="reveal text-white/50 text-sm leading-relaxed mb-8">
            We don&apos;t just plan vacations — we architect transformations. Each journey is tailored to your soul, woven from authentic local experiences, hidden pathways, and moments that stay with you forever.
          </p>

          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-5 mb-9">
            {features.map((f) => (
              <div key={f.title} className="flex gap-3 items-start">
                <div className="w-9 h-9 bg-gold/10 border border-gold/25 flex items-center justify-center text-gold text-base flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <div className="text-white text-sm font-medium mb-0.5">{f.title}</div>
                  <div className="text-white/45 text-xs leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="reveal inline-flex items-center gap-3 bg-copper text-white text-[0.75rem] tracking-[0.14em] uppercase px-7 py-4 border border-copper hover:bg-transparent transition-all duration-300 group"
          >
            Plan My Journey
            <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
