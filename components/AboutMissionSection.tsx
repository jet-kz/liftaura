import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutMissionSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid-2 items-center">
          <div className="flex flex-col justify-center">
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-title">Liftaura Initiative</h2>
            <div className="divider" />
            <p className="mb-3">
              Liftaura Initiative is a <strong style={{ color: "var(--blue-600)" }}>community-driven platform</strong> focused on creating opportunities and meaningful impact through collective support and transparency.
            </p>
            <p className="mb-3">
              We were founded on the simple but powerful idea that when communities pool their support, extraordinary things happen. Every contribution — big or small — helps lift someone toward their dream.
            </p>
            <p className="about-quote mb-6">
              &ldquo;By joining our community, you become part of something meaningful and impactful.&rdquo;
            </p>
            <Link href="/contact" className="btn btn-outline text-[0.8125rem]" style={{ width: "fit-content" }}>
              Partner With Us <ArrowRight size={14} className="inline ml-1" />
            </Link>
          </div>

          {/* Image side */}
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/hand.webp"
              alt="A giving hand"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
