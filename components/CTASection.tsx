import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section bg-dark text-center" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="container max-w-600 mx-auto">
        <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-extrabold mb-4 text-white">
          Be Part of the Movement
        </h2>
        <p style={{ fontSize: "0.9375rem", marginBottom: "2rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
          Join us in creating opportunities and meaningful impact. Together, we can lift dreams and build a future where everyone has a chance.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/apply" className="btn btn-gold inline-flex items-center gap-2">
            Apply for Support <ArrowRight size={15} />
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
