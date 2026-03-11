import Link from "next/link";
import { packages } from "@/data";
import PackageCard from "@/components/ui/PackageCard";
import { BsArrowRight } from "react-icons/bs";

export default function PackagesSection() {
  const featured = packages.slice(0, 3);

  return (
    <section className="bg-sand py-24 px-8 md:px-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-px bg-copper" />
            <span className="text-copper text-[0.68rem] tracking-[0.22em] uppercase">Curated journeys</span>
          </div>
          <h2 className="reveal font-cormorant text-ink leading-tight"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 300 }}>
            Featured <em className="text-copper">Tour</em><br />Packages
          </h2>
        </div>
        <Link
          href="/packages"
          className="self-start md:self-end flex items-center gap-2 text-copper text-[0.72rem] tracking-[0.14em] uppercase hover:gap-4 transition-all duration-300"
        >
          View All Packages <BsArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map((pkg, i) => (
          <PackageCard key={pkg.id} {...pkg} delay={`${i * 0.15}s`} />
        ))}
      </div>
    </section>
  );
}
