import { GraduationCap, Stethoscope, Briefcase, HeartHandshake } from "lucide-react";

const categories = [
  {
    icon: GraduationCap,
    title: "Education & Scholarships",
    desc: "Supporting academic dreams and access to quality learning opportunities.",
    boxClass: "icon-box-blue",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Career Opportunities",
    desc: "Pathways into healthcare for aspiring professionals who need a lift.",
    boxClass: "icon-box-gold",
  },
  {
    icon: Briefcase,
    title: "Small Business Support",
    desc: "Empowering entrepreneurs with resources to start and grow their ventures.",
    boxClass: "icon-box-blue",
  },
  {
    icon: HeartHandshake,
    title: "Community Impact Projects",
    desc: "Funding and executing projects that uplift entire communities.",
    boxClass: "icon-box-gold",
  },
];

export default function SupportCategoriesSection() {
  return (
    <section id="support" className="section bg-light">
      <div className="container">
        <div className="text-center mb-10">
          <span className="eyebrow">What We Support</span>
          <h2 className="section-title">Skills That Change Lives</h2>
          <p className="section-desc mx-auto">
            Our initiatives are focused on four key areas that create sustainable growth and meaningful impact.
          </p>
        </div>

        <div className="card-grid cols-2 cols-4" style={{ maxWidth: 960, margin: "0 auto" }}>
          {categories.map(({ icon: Icon, title, desc, boxClass }, i) => (
            <div key={i}>
              <div className={`icon-box ${boxClass}`}>
                <Icon size={22} />
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-dark)" }}>
                {title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
