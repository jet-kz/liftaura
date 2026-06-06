export default function AboutVisionSection() {
  return (
    <section className="section bg-dark" id="vision">
      <div className="container">
        <div className="text-center mb-10">
          <span className="eyebrow">Our Vision</span>
          <h2 className="section-title text-white">Transparency. Merit. Impact.</h2>
          <p className="section-desc mx-auto">
            Building a future where opportunities are accessible to everyone with the drive to pursue them.
          </p>
        </div>

        <div className="card-grid cols-2 max-w-800 mx-auto">
          {[
            { title: "Community Support",  desc: "Members voluntarily support the initiative to create a pool of resources that lifts others." },
            { title: "Merit Selection",    desc: "Applications are evaluated on need, quality, and potential — ensuring fair distribution." },
            { title: "Verified Impact",    desc: "We follow up with all supported individuals to verify real, lasting impact." },
            { title: "Open Reporting",     desc: "Regular public updates keep our community informed and our process accountable." },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="mb-2 text-primary" style={{ fontSize: "1rem", fontWeight: 700 }}>{item.title}</h3>
              <p className="text-secondary" style={{ fontSize: "0.875rem" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
