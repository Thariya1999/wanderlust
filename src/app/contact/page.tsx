"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaTripadvisor } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { useReveal } from "@/lib/useReveal";

const socials = [
  { icon: <FaInstagram />, href: "#", label: "Instagram" },
  { icon: <FaFacebookF />, href: "#", label: "Facebook" },
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
  { icon: <FaYoutube />, href: "#", label: "YouTube" },
  { icon: <FaTripadvisor />, href: "#", label: "TripAdvisor" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  useReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="page-enter">
      {/* Page Hero */}
      <div
        className="relative h-[42vh] flex items-end pb-12 px-8 md:px-16"
        style={{
          backgroundImage: "linear-gradient(to top, rgba(26,21,16,0.88) 0%, rgba(26,21,16,0.3) 100%), url('https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pt-20">
          <div className="text-white/45 text-xs tracking-widest uppercase mb-2">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gold">Contact</span>
          </div>
          <h1 className="font-cormorant text-white font-light leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            Let&apos;s Plan Your <em className="text-gold">Journey</em>
          </h1>
        </div>
      </div>

      <section className="bg-sand py-16 px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-14">
          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-copper" />
              <span className="text-copper text-[0.68rem] tracking-[0.22em] uppercase">Get in touch</span>
            </div>
            <h2 className="reveal font-cormorant text-ink leading-tight mb-4"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 300 }}>
              We&apos;d love to hear<br /><em className="text-copper">from you</em>
            </h2>
            <p className="reveal text-mist text-sm leading-relaxed mb-10">
              Ready to embark on the adventure of a lifetime? Reach out and one of our travel specialists will craft a bespoke itinerary just for you within 24 hours.
            </p>

            {/* Contact details */}
            {[
              { icon: <FiMapPin />, label: "Office", value: "12 Harbour Lane, Colombo 03, Sri Lanka" },
              { icon: <FiMail />, label: "Email", value: "hello@wanderlust.travel" },
              { icon: <FiPhone />, label: "Phone", value: "+94 11 234 5678" },
            ].map((d, i) => (
              <div key={d.label} className={`reveal flex items-start gap-4 mb-7`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-10 h-10 bg-copper flex items-center justify-center text-white text-base flex-shrink-0">
                  {d.icon}
                </div>
                <div>
                  <div className="text-[0.65rem] tracking-[0.14em] uppercase text-mist mb-1">{d.label}</div>
                  <div className="text-ink text-sm">{d.value}</div>
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="reveal mb-6 overflow-hidden" style={{ filter: "sepia(15%) saturate(85%)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58898037765!2d79.8211606!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="200"
                allowFullScreen
                loading="lazy"
                style={{ border: "none" }}
              />
            </div>

            <div className="reveal flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-ink/15 flex items-center justify-center text-bark text-sm hover:bg-copper hover:text-white hover:border-copper transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal bg-white p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="font-cormorant text-2xl text-ink mb-2">Message Sent!</h3>
                <p className="text-mist text-sm">We&apos;ll be in touch within 24 hours to craft your dream journey.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[0.65rem] tracking-[0.14em] uppercase text-bark mb-2">First Name</label>
                    <input type="text" placeholder="John" className="w-full bg-sand border border-transparent px-4 py-3 text-sm text-ink outline-none focus:border-copper focus:bg-white transition-all" />
                  </div>
                  <div>
                    <label className="block text-[0.65rem] tracking-[0.14em] uppercase text-bark mb-2">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full bg-sand border border-transparent px-4 py-3 text-sm text-ink outline-none focus:border-copper focus:bg-white transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-[0.65rem] tracking-[0.14em] uppercase text-bark mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-sand border border-transparent px-4 py-3 text-sm text-ink outline-none focus:border-copper focus:bg-white transition-all" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[0.65rem] tracking-[0.14em] uppercase text-bark mb-2">Destination</label>
                    <select className="w-full bg-sand border border-transparent px-4 py-3 text-sm text-ink outline-none focus:border-copper focus:bg-white transition-all appearance-none">
                      <option value="">Select destination</option>
                      <option>Bali, Indonesia</option>
                      <option>Paris, France</option>
                      <option>Santorini, Greece</option>
                      <option>Maldives</option>
                      <option>Sydney, Australia</option>
                      <option>Custom trip</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[0.65rem] tracking-[0.14em] uppercase text-bark mb-2">Travel Month</label>
                    <select className="w-full bg-sand border border-transparent px-4 py-3 text-sm text-ink outline-none focus:border-copper focus:bg-white transition-all appearance-none">
                      <option value="">Select month</option>
                      {["January","February","March","April","May","June","July","August","September","October","November","December"].map(m => (
                        <option key={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[0.65rem] tracking-[0.14em] uppercase text-bark mb-2">Number of Travelers</label>
                  <select className="w-full bg-sand border border-transparent px-4 py-3 text-sm text-ink outline-none focus:border-copper focus:bg-white transition-all appearance-none">
                    <option>1 person</option>
                    <option>2 people</option>
                    <option>3-5 people</option>
                    <option>6-10 people</option>
                    <option>10+ people</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[0.65rem] tracking-[0.14em] uppercase text-bark mb-2">Your Message</label>
                  <textarea
                    placeholder="Tell us about your dream trip — budget, interests, anything special you want..."
                    rows={4}
                    className="w-full bg-sand border border-transparent px-4 py-3 text-sm text-ink outline-none focus:border-copper focus:bg-white transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-copper text-white text-[0.75rem] tracking-[0.16em] uppercase py-4 flex items-center justify-center gap-3 hover:bg-bark transition-all duration-300 group"
                >
                  Send Enquiry
                  <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
