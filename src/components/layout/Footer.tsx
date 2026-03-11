import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaTripadvisor } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";

const destLinks = ["Bali, Indonesia", "Paris, France", "Santorini, Greece", "Maldives", "Sydney, Australia"];
const pkgLinks = ["Bali Spiritual Escape", "Greek Islands Odyssey", "Maldives Luxury Villa", "Paris Romantic Getaway", "Tokyo Culture Dive"];
const companyLinks = ["About Us", "Our Story", "Travel Blog", "Careers", "Contact", "Privacy Policy"];

const socials = [
  { icon: <FaInstagram />, href: "#", label: "Instagram" },
  { icon: <FaFacebookF />, href: "#", label: "Facebook" },
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
  { icon: <FaYoutube />, href: "#", label: "YouTube" },
  { icon: <FaTripadvisor />, href: "#", label: "TripAdvisor" },
];

export default function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-8 px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaCompass className="text-gold text-xl" />
            <span className="font-cormorant text-2xl font-light tracking-widest text-white">
              Wander<span className="text-gold">lust</span>
            </span>
          </div>
          <p className="text-sm text-white/35 leading-relaxed mb-6">
            We craft transformative journeys to the world's most extraordinary places. Every adventure is thoughtfully curated with passion and local expertise.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 border border-white/12 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all duration-300 text-sm"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Destinations */}
        <div>
          <h4 className="text-[0.68rem] tracking-[0.22em] uppercase text-gold mb-6">Destinations</h4>
          <ul className="space-y-3">
            {destLinks.map((d) => (
              <li key={d}>
                <Link href="/destinations" className="text-sm text-white/35 hover:text-white hover:pl-1.5 transition-all duration-300 block">
                  {d}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Packages */}
        <div>
          <h4 className="text-[0.68rem] tracking-[0.22em] uppercase text-gold mb-6">Tour Packages</h4>
          <ul className="space-y-3">
            {pkgLinks.map((p) => (
              <li key={p}>
                <Link href="/packages" className="text-sm text-white/35 hover:text-white hover:pl-1.5 transition-all duration-300 block">
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[0.68rem] tracking-[0.22em] uppercase text-gold mb-6">Company</h4>
          <ul className="space-y-3">
            {companyLinks.map((c) => (
              <li key={c}>
                <Link href="/contact" className="text-sm text-white/35 hover:text-white hover:pl-1.5 transition-all duration-300 block">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/7 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs text-white/25">
          © 2025 <span className="text-copper">Wanderlust</span>. Crafted with ♥ for curious souls.
        </p>
        <p className="text-xs text-white/25">
          Licensed Travel Operator · IATA Certified · BBB Accredited
        </p>
      </div>
    </footer>
  );
}
