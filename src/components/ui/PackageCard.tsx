import Image from "next/image";
import Link from "next/link";
import { FiClock } from "react-icons/fi";
import { BsStarFill, BsArrowRight } from "react-icons/bs";

interface PackageCardProps {
  id: string;
  name: string;
  destination: string;
  duration: string;
  price: number;
  badge: string;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  delay?: string;
}

export default function PackageCard(props: PackageCardProps) {
  const { id, name, duration, price, badge, rating, reviewCount, image, description, delay } = props;

  return (
    <div
      className={`reveal bg-white group overflow-hidden hover:-translate-y-2 transition-all duration-400 hover:shadow-[0_30px_60px_rgba(26,21,16,0.12)]`}
      style={{ transitionDelay: delay }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-600 group-hover:scale-[1.05]"
        />
        <span className="absolute top-4 right-4 bg-copper text-white text-[0.6rem] tracking-[0.1em] uppercase px-3 py-1">
          {badge}
        </span>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="flex items-center gap-1.5 text-mist text-[0.7rem] tracking-[0.1em] uppercase">
            <FiClock className="text-xs" /> {duration}
          </span>
          <span className="font-cormorant text-copper text-2xl font-semibold">
            <sup className="text-base font-normal">$</sup>{price.toLocaleString()}
          </span>
        </div>

        <h3 className="font-cormorant text-ink text-xl leading-snug mb-2">{name}</h3>
        <p className="text-mist text-sm leading-relaxed mb-5">{description}</p>

        <div className="flex justify-between items-center pt-4 border-t border-black/7">
          <div className="flex items-center gap-1.5 text-gold text-sm">
            <BsStarFill className="text-xs" />
            <span className="text-ink font-medium">{rating}</span>
            <span className="text-mist text-xs">({reviewCount})</span>
          </div>
          <Link
            href={`/packages/${id}`}
            className="flex items-center gap-2 text-copper text-[0.68rem] tracking-[0.1em] uppercase border border-copper/50 px-4 py-2 hover:bg-copper hover:text-white hover:border-copper transition-all duration-300"
          >
            View Details <BsArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </div>
  );
}
