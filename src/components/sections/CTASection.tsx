"use client";
export default function CTASection() {
  return (
    <section
      className="relative py-32 px-8 md:px-16 text-center overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,21,16,0.74), rgba(61,43,31,0.77)), url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-7 h-px bg-gold" />
          <span className="text-gold text-[0.68rem] tracking-[0.22em] uppercase">Start your journey</span>
          <span className="w-7 h-px bg-gold" />
        </div>
        <h2 className="reveal font-cormorant text-white leading-tight mb-5"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", fontWeight: 300 }}>
          The World is <em className="text-gold">Waiting</em><br />for You
        </h2>
        <p className="reveal text-white/55 text-sm leading-relaxed mb-10 max-w-md mx-auto">
          Subscribe for exclusive travel deals, hidden gem destinations, and curated itineraries delivered to your inbox.
        </p>
        <div className="reveal flex flex-col sm:flex-row max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-white/10 border border-white/25 sm:border-r-0 px-5 py-3.5 text-white placeholder-white/35 text-sm outline-none focus:border-gold focus:bg-white/15 transition-all"
          />
          <button className="bg-copper text-white border border-copper px-6 py-3.5 text-[0.72rem] tracking-[0.14em] uppercase hover:bg-gold hover:border-gold transition-all duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
