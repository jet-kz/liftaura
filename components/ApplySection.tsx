import Link from "next/link";
import { ArrowRight } from "lucide-react";

const supports = [
  "Education support",
  "Healthcare opportunities",
  "Business support",
  "Community projects",
];

export default function ApplySection() {
  return (
    <section id="apply" className="section bg-dark text-center" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="container max-w-600 mx-auto">
        <span className="eyebrow">Apply for Support</span>
        <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-extrabold mb-4 text-white">
          Need support for your next step?
        </h2>
        <p style={{ fontSize: "0.9375rem", marginBottom: "1.5rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
          Applications are open for:
        </p>

        <div className="card-grid cols-2" style={{ maxWidth: 480, margin: "0 auto 2rem" }}>
          {supports.map((s, i) => (
            <div key={i} style={{ textAlign: "left", padding: "1.25rem 1.5rem" }}>
              <span style={{ color: "var(--gold-300)", fontWeight: 600, fontSize: "0.9rem" }}>✦ {s}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/apply" className="btn btn-gold inline-flex items-center gap-2">
            Click below to apply <ArrowRight size={15} />
          </Link>
          <Link href="#about" className="btn btn-outline">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
