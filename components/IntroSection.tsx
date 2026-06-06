import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function IntroSection() {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="grid-2 items-center">
          {/* Text side */}
          <div className="flex flex-col justify-center">
            <span className="eyebrow">Introduction</span>
            <h2 className="section-title">Liftaura Initiative</h2>
            <div className="divider" />
            <p className="mb-3">
              Liftaura Initiative is a{" "}
              <strong style={{ color: "var(--blue-600)" }}>community-driven platform</strong>{" "}
              focused on creating opportunities and meaningful impact through collective support and transparency.
            </p>
            <p className="mb-3">
              We support education, healthcare career opportunities, small businesses, and community projects through community support and meaningful collaboration.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }} className="mb-6">
              &ldquo;By joining our community, you become part of something meaningful and impactful.&rdquo;
            </p>
            <Link href="#apply" className="btn btn-outline text-[0.8125rem]" style={{ width: "fit-content" }}>
              Join Our Community <ArrowRight size={14} className="inline ml-1" />
            </Link>
          </div>

          {/* Featured Image side */}
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/communityservice.jpg"
              alt="Community Service"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
