import { GraduationCap, Stethoscope, Briefcase, HeartHandshake, Eye, Shield } from "lucide-react";

const pillars = [
  { icon: GraduationCap, title: "Education Access", desc: "Breaking barriers to quality education through scholarships and academic support." },
  { icon: Stethoscope,   title: "Healthcare Careers", desc: "Opening pathways into the healthcare sector for aspiring professionals." },
  { icon: Briefcase,     title: "Business Growth",   desc: "Empowering entrepreneurs with resources to launch and scale their ventures." },
  { icon: HeartHandshake,title: "Community Projects", desc: "Funding initiatives that uplift entire communities from within." },
  { icon: Shield,        title: "Verified Process",  desc: "A rigorous but fair merit-based selection that ensures genuine impact." },
  { icon: Eye,           title: "Full Transparency", desc: "Regular updates on projects, beneficiaries, and community activities." },
];

export default function AboutValuesSection() {
  return (
    <section className="section bg-light">
      <div className="container">
        <div className="text-center mb-10">
          <span className="eyebrow">What We Stand For</span>
          <h2 className="section-title">Our Values & Focus Areas</h2>
          <p className="section-desc mx-auto">
            Six pillars that guide every decision we make and every life we touch.
          </p>
        </div>
        <div className="card-grid cols-3">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <div key={i}>
              <div className={`icon-box ${i % 2 === 0 ? "icon-box-blue" : "icon-box-gold"}`}>
                <Icon size={22} />
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-dark)", marginBottom: "0.5rem" }}>{title}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
