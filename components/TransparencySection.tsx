const pillars = [
  { title: "Openness",       desc: "Clear guidelines and communication throughout our entire process." },
  { title: "Accountability", desc: "Every application and contribution is handled with the utmost integrity." },
  { title: "Real Impact",    desc: "Updates, impact stories, and community activities shared on our platforms." },
];

export default function TransparencySection() {
  return (
    <section id="transparency" className="section bg-white">
      <div className="container">
        <div className="grid-2 items-center">
          {/* Left: pillars */}
          <div className="card-grid cols-1" style={{ maxWidth: 460, margin: "0 auto" }}>
            {pillars.map((p, i) => (
              <div key={i}>
                <div className={`icon-box ${i === 1 ? "icon-box-gold" : "icon-box-blue"}`}>
                  <span style={{ fontWeight: 900, fontSize: "1rem" }}>{i + 1}</span>
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-dark)", marginBottom: "0.4rem" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Right: text */}
          <div className="flex flex-col justify-center">
            <span className="eyebrow">Transparency</span>
            <h2 className="section-title">
              Openness,{" "}
              <span style={{ color: "var(--gold-500)" }}>accountability</span>,<br />
              and real impact.
            </h2>
            <div className="divider" />
            <p className="mb-3">
              We believe in openness, accountability, and real impact. Building trust within our community is our highest priority.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
              Updates about projects, beneficiaries, and community activities will be shared here regularly. Every step of our process is transparent so support reaches those who truly need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
