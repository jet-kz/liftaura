import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-dark hero-wrapper hero-fullscreen w-full overflow-hidden min-h-[650px] md:min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/empowerment.jpg"
          alt="Community Support"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="
            object-cover
            object-center
            md:object-[center_20%]
            scale-100
          "
        />
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 z-10 hero-gradient-home" />

      {/* Subtle pattern dots */}
      <div
        className="absolute inset-0 z-10 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="container relative z-20 hero-content w-full text-center mt-4 md:mt-16 px-4">
        {/* Eyebrow */}
        <span className="eyebrow">
          Community · Opportunity · Impact
        </span>

        <h1 className="hero-title mb-4">
          <span className="gradient-text">Liftaura</span> Initiative
        </h1>

        <p
          className="section-desc max-w-[700px] mx-auto mb-8"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          Big dreams start small. We are a community-driven platform
          lifting people through collective support, opportunity, and
          meaningful impact.
        </p>

        <div className="flex-wrap-center gap-4">
          <Link
            href="#apply"
            className="btn btn-gold flex items-center justify-center gap-2"
          >
            Apply for Support <ArrowRight size={15} />
          </Link>

          <Link href="#about" className="btn btn-outline">
            Join Our Community
          </Link>
        </div>
      </div>
    </section>
  );
}