"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight, GraduationCap, Stethoscope, Briefcase,
  HeartHandshake, CheckCircle2, FileText, ShieldCheck, Gift, Eye,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CTASection from "@/components/CTASection";

export default function ApplyPage() {
  const [form, setForm] = useState({ 
    name: "", email: "", phone: "", 
    supportArea: "", story: "", impact: "" 
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Liftaura Initiative Application Form
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Support Area: ${form.supportArea}
Story & Need: ${form.story}
Impact: ${form.impact}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2348089842759?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", supportArea: "", story: "", impact: "" });
  };

  return (
    <main>
      {/* HERO */}
      <section className="bg-dark hero-wrapper w-full hero-half">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/students.jpg"
            alt="Students"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        </div>
        <div className="absolute inset-0 hero-radial-bg pointer-events-none z-0" />
        <div className="absolute inset-0 z-0 hero-gradient-home" />
        <div className="container hero-content w-full text-center mt-8">
          <span className="eyebrow">Apply for Support</span>
          <h1 className="hero-title mb-4 max-w-600 mx-auto text-primary">
            Need Support for Your <span className="gradient-text">Next Step?</span>
          </h1>
          <div className="divider mx-auto" />
          <p className="section-desc max-w-500 mx-auto text-secondary">
            Applications are open. Our merit-based, transparent process ensures support reaches those who truly need it.
          </p>
        </div>
      </section>

      {/* WHAT WE SUPPORT */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <span className="eyebrow">What We Support</span>
            <h2 className="section-title">Choose Your Support Area</h2>
            <p className="section-desc mx-auto">Applications are open across four key categories.</p>
          </div>
          <div className="card-grid cols-2 cols-4" style={{ maxWidth: 960, margin: "0 auto" }}>
            {[
              { icon: GraduationCap,  title: "Education Support",        desc: "Scholarships, school fees, learning resources, and academic mentorship." },
              { icon: Stethoscope,    title: "Healthcare Opportunities",  desc: "Pathways and resources for aspiring healthcare professionals." },
              { icon: Briefcase,      title: "Business Support",          desc: "Startup capital, business training, and market access support." },
              { icon: HeartHandshake, title: "Community Projects",        desc: "Funding for projects that create lasting community impact." },
            ].map(({ icon: Icon, title, desc }, i) => (
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

      {/* HOW IT WORKS */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-10">
            <span className="eyebrow">Our Process</span>
            <h2 className="section-title">How It Works</h2>
            <p className="section-desc mx-auto">Five clear steps from application to impact.</p>
          </div>
          <div className="max-w-800 mx-auto px-4 mt-8">
            <Accordion type="single" collapsible className="w-full">
              {[
                { icon: FileText,    num: "1", title: "Submit Application", desc: "Fill out our application form with clear, honest details about your need and goals." },
                { icon: CheckCircle2,num: "2", title: "Merit Review",       desc: "Our team reviews every application based on need, eligibility, and impact potential." },
                { icon: ShieldCheck, num: "3", title: "Assessment (CBT)",   desc: "Shortlisted applicants may be invited for a short assessment test or brief interview." },
                { icon: Gift,        num: "4", title: "Support Delivered",  desc: "Verified applicants receive support tailored to their specific need area." },
                { icon: Eye,         num: "5", title: "Impact Reported",    desc: "We follow up and share your story (with permission) to inspire the community." },
              ].map(({ icon: Icon, num, title, desc }, i) => (
                <AccordionItem key={i} value={`step-${i}`} className="mb-6 lg:mb-8 border-none group">
                  <AccordionTrigger className="hover:no-underline lg:py-6 group-data-[state=open]:pb-2 mt-4">
                    <div className="flex items-center gap-4">
                      <Icon size={22} className="text-blue-600 flex-shrink-0" />
                      <span className="text-lg lg:text-xl font-bold text-dark">
                        {title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 pt-2">
                    <div className="ml-3 pl-6 lg:pl-8 border-l-2 border-gray-200 text-base lg:text-lg text-muted leading-relaxed">
                      {desc}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-700 mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow">Ready?</span>
              <h2 className="section-title">Start Your Application</h2>
              <p className="section-desc mx-auto">
                Fill in the form below. Honest, clear applications have the best chance.
              </p>
            </div>

            <div className="contact-box" style={{ padding: "2.5rem" }}>
              {submitted && (
                <div className="mb-5" style={{ background: "var(--blue-100)", border: "1px solid var(--blue-200)", borderRadius: "6px", padding: "0.75rem 1rem", color: "var(--blue-600)", fontSize: "0.8125rem", fontWeight: 500 }}>
                  ✓ Your application details have been formatted. Please send them via WhatsApp.
                </div>
              )}
              <form onSubmit={handleSubmit} className="flex-col gap-4">
                <div className="form-row">
                  <div>
                    <label className="form-label">Full Name</label>
                    <input className="form-input" type="text" required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="form-label">Email Address</label>
                    <input className="form-input" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="your@email.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div>
                    <label className="form-label">Phone Number</label>
                    <input className="form-input" type="tel" required value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="0808 000 0000" />
                  </div>
                  <div>
                    <label className="form-label">Support Area</label>
                    <select className="form-input" required value={form.supportArea} onChange={(e) => update("supportArea", e.target.value)} style={{ cursor: "pointer" }}>
                      <option value="" disabled>Select support type</option>
                      <option value="education">Education Support</option>
                      <option value="healthcare">Healthcare Opportunities</option>
                      <option value="business">Business Support</option>
                      <option value="community">Community Project</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="form-label">Your Story & Need</label>
                  <textarea className="form-input" required rows={5} value={form.story} onChange={(e) => update("story", e.target.value)} style={{ resize: "vertical" }} placeholder="Describe your situation, what support you need, and how it will help you. Be specific and honest." />
                </div>
                <div>
                  <label className="form-label">How Will This Support Change Your Life?</label>
                  <textarea className="form-input" required rows={4} value={form.impact} onChange={(e) => update("impact", e.target.value)} style={{ resize: "vertical" }} placeholder="Tell us your goals and the impact this support will have..." />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "0.875rem", fontSize: "0.9375rem" }}>
                  Submit Application <ArrowRight size={16} className="inline ml-1" />
                </button>
                <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", textAlign: "center" }}>
                  Final selection is not automatic and is based on overall evaluation and available resources.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
