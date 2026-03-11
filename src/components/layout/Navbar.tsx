"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { FaCompass } from "react-icons/fa";

const links = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/packages", label: "Packages" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On homepage: transparent until scrolled. On other pages: always solid cream.
  const solidBg = scrolled || !isHome;
  const navBg = solidBg
    ? "bg-cream/95 backdrop-blur-md border-b border-copper/10 py-3"
    : "py-6";

  // Link color logic:
  // - Active page → always copper
  // - Homepage (not scrolled) → white (on dark hero image)
  // - Solid bg (scrolled or inner page) → ink/dark so readable on cream
  const getLinkColor = (href: string) => {
    if (pathname === href) return "text-copper";
    if (!solidBg) return "text-white/85"; // homepage transparent nav
    return "text-ink/70";                  // solid cream nav
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-16 flex items-center justify-between transition-all duration-500 ${navBg}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <FaCompass className="text-copper text-xl transition-transform duration-500 group-hover:rotate-45" />
          <span className={`font-cormorant text-2xl font-light tracking-widest transition-colors duration-400 ${solidBg ? "text-ink" : "text-white"}`}>
            Wander<span className="text-gold">lust</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`hover-underline text-[0.75rem] tracking-[0.14em] uppercase transition-colors duration-300 hover:text-copper ${getLinkColor(l.href)}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="bg-copper text-white text-[0.72rem] tracking-[0.12em] uppercase px-5 py-2.5 border border-copper hover:bg-transparent hover:text-copper transition-all duration-300"
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden text-2xl transition-colors ${solidBg ? "text-ink" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-ink flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {links.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className={`font-cormorant text-4xl font-light transition-colors hover:text-gold
              ${pathname === l.href ? "text-gold" : "text-white"}`}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="mt-4 bg-copper text-white text-sm tracking-widest uppercase px-8 py-3"
        >
          Book Now
        </Link>
      </div>
    </>
  );
}
