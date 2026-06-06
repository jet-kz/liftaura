import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutHeroSection() {
  return (
    <section className="bg-dark hero-wrapper w-full hero-half">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/empowerment.jpg"
          alt="Empowerment"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>
      <div className="absolute inset-0 hero-radial-bg pointer-events-none z-0" />
      <div className="absolute inset-0 z-0 hero-gradient-home" />
      <div className="container hero-content w-full text-left mt-8">
        <span className="eyebrow">About Us</span>
        <h1 className="hero-title mb-4 max-w-600 text-primary">
          We Lift People <span className="gradient-text">Together</span>
        </h1>
        <div className="divider" />
        <p className="section-desc max-w-500 text-secondary">
          Liftaura Initiative is built on the belief that collective support and transparency can unlock opportunities for anyone willing to take the next step.
        </p>
        <div className="flex-wrap-start mt-8">
          <Link href="#apply" className="btn btn-gold flex-center" style={{ gap: "0.5rem" }}>
            Apply for Support <ArrowRight size={15} />
          </Link>
          <Link href="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
