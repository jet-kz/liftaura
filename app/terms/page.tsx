import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, FileText, Info, Scale, Mail } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function TermsPage() {
  const sections = [
    {
      title: "About Liftaura Initiative Concept",
      content: "Liftaura Initiative Concept is a community-focused organization committed to creating opportunities through education support, healthcare career advancement, business empowerment, and community impact initiatives.",
    },
    {
      title: "Eligibility",
      content: "Applicants must provide accurate and complete information when applying for any program or support opportunity offered by Liftaura Initiative Concept.",
    },
    {
      title: "Application and Selection",
      items: [
        "Submission of an application does not guarantee selection, sponsorship, financial assistance, or participation in any program.",
        "Applications may be evaluated based on merit, eligibility, need, impact potential, assessment results, interviews, and availability of resources.",
        "The decision of Liftaura Initiative Concept regarding selection and support is final."
      ],
    },
    {
      title: "Verification",
      items: [
        "Liftaura Initiative Concept reserves the right to verify any information, documents, or claims submitted by applicants.",
        "Providing false, misleading, or fraudulent information may result in immediate disqualification or termination from any program."
      ],
    },
    {
      title: "Contributions and Donations",
      items: [
        "All contributions made to Liftaura Initiative Concept are voluntary and support the organization's mission and activities.",
        "Unless otherwise stated by law, contributions and donations are non-refundable."
      ],
    },
    {
      title: "Use of Information",
      items: [
        "Information submitted through our website, forms, or official platforms will be used for application review, communication, program administration, monitoring, and impact reporting.",
        "Personal information will be handled in accordance with our Privacy Policy."
      ],
    },
    {
      title: "Publicity and Impact Stories",
      content: "Beneficiaries may be invited to share testimonials, success stories, photographs, or impact updates for reporting and awareness purposes. Participation will be voluntary unless otherwise agreed.",
    },
    {
      title: "Intellectual Property",
      content: "All content on the Liftaura Initiative Concept website, including text, logos, graphics, and materials, remains the property of Liftaura Initiative Concept unless otherwise stated.",
    },
    {
      title: "Limitation of Liability",
      content: "Liftaura Initiative Concept shall not be held responsible for losses, damages, delays, or disruptions arising from circumstances beyond its reasonable control.",
    },
    {
      title: "Changes to These Terms",
      content: "Liftaura Initiative Concept reserves the right to update or modify these Terms and Conditions at any time. Updated versions will be published on our website.",
    },
    {
      title: "Contact Information",
      content: "For questions regarding these Terms and Conditions, please contact Liftaura Initiative Concept through our official communication channels.",
    }
  ];

  return (
    <main>
      {/* HERO */}
      <section className="bg-dark hero-wrapper w-full hero-half">
        <div className="absolute inset-0 z-0">
          <Image
            src="/community.jpg"
            alt="Community"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        </div>
        <div className="absolute inset-0 hero-radial-bg pointer-events-none z-0" />
        <div className="absolute inset-0 z-0 hero-gradient-home" />
        <div className="container hero-content w-full text-center mt-8">
          <span className="eyebrow">Policies</span>
          <h1 className="hero-title mb-4 max-w-600 mx-auto text-primary">
            Terms and <span className="gradient-text">Conditions</span>
          </h1>
          <div className="divider mx-auto" />
          <p className="section-desc max-w-500 mx-auto text-secondary">
            Last Updated: June 2026. Please read these terms carefully before participating in our programs.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="section bg-white">
        <div className="container text-left">
          <div className="max-w-800 mx-auto">
            {sections.map((section, i) => (
              <div key={i} className="mb-12 last:mb-0">
                <div className="flex gap-5 items-start">
                  <div className="icon-box icon-box-blue" style={{ marginBottom: 0, width: "2.5rem", height: "2.5rem", flexShrink: 0 }}>
                    <span style={{ fontWeight: 900, fontSize: "0.875rem" }}>{i + 1}</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-dark mb-4" style={{ marginTop: "0.4rem" }}>
                      {section.title}
                    </h2>
                    {section.content && (
                      <p className="text-muted leading-relaxed" style={{ fontSize: "0.9375rem" }}>
                        {section.content}
                      </p>
                    )}
                    {section.items && (
                      <ul className="flex-col gap-3 mt-2" style={{ listStyle: "none" }}>
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex gap-3 text-muted" style={{ fontSize: "0.9375rem" }}>
                            <ArrowRight size={14} className="text-blue-500 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCEPTANCE SECTION */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-600 mx-auto text-center">
            <div className="icon-box icon-box-gold mx-auto">
              <ShieldCheck size={24} />
            </div>
            <h3 className="mb-4">Agreement</h3>
            <p className="text-muted">
              By using our website, submitting an application, or participating in any of our programs, 
              you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
            </p>
            <div className="mt-8">
              <Link href="/apply" className="btn btn-primary">
                Proceed to Application <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
