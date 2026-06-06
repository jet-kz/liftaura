import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="section bg-white overflow-hidden">
      <div className="container">
        <div className="grid-2 items-center gap-12">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-50 rounded-2xl -z-10 transition-transform group-hover:scale-105 duration-500" />
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/founder.jpeg"
                alt="Okorote Chimkwanum"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <span className="eyebrow">About the Founder</span>
            <h2 className="section-title mb-6">Okorote <span className="gradient-text">Chimkwanum</span></h2>
            <div className="divider mb-8" />

            <p className="text-lg font-medium text-dark mb-4">
              Okorote Chimkwanum is the Founder of Liftaura Initiative Concept, a CAC-registered organization dedicated to creating opportunities and empowering individuals to achieve their full potential.
            </p>

            <p className="text-muted leading-relaxed mb-4">
              Driven by a passion for service, community development, and human empowerment, she established Liftaura Initiative Concept with a vision to bridge the gap between potential and opportunity. She believes that many talented and hardworking individuals only need the right support, guidance, and resources to transform their lives and make meaningful contributions to society.
            </p>

            <p className="text-muted leading-relaxed mb-6">
              With a background in healthcare and a strong commitment to helping others, Chimkwanum is focused on building sustainable programs that promote education, career advancement, entrepreneurship, and community impact. Through Liftaura Initiative Concept, she hopes to inspire hope, create opportunities, and help individuals turn their aspirations into reality.
            </p>


          </div>
        </div>
      </div>
    </section>
  );
}
