"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `Liftaura Initiative Contact Form
Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}
Message: ${form.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2348089842759?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactItems = [
    { icon: <Mail size={18} />, title: "Email Us", info: "Liftaura_initiative@gmail.com" },
    { icon: <Phone size={18} />, title: "Call Us", info: "08089842759" },
    { icon: <MapPin size={18} />, title: "Find Us", info: "Delta State, Nigeria" },
  ];

  const getInvolved = [
    "Partner as an organization",
    "Sponsor an applicant cohort",
    "Volunteer as a reviewer",
    "Donate to the initiative",
    "Host a community event",
  ];

  return (
    <main>
      {/* HERO */}
      <section className="bg-dark hero-wrapper w-full hero-half">
        {/* Background Image */}
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
          <span className="eyebrow">Contact</span>
          <h1 className="hero-title mb-4 max-w-600 mx-auto text-primary">
            Let&apos;s Build the <span className="gradient-text">Future Together</span>
          </h1>
          <div className="divider mx-auto" />
          <p className="section-desc max-w-500 mx-auto text-secondary">
            Whether you&apos;re interested in partnering, volunteering, or learning more — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2">
            {/* Left — Info */}
            <div>
              <div className="contact-box">
                {contactItems.map((item, i) => (
                  <div key={i} className="contact-box-item">
                    <div className="icon-box icon-box-blue" style={{ marginBottom: 0 }}>{item.icon}</div>
                    <div>
                      <h3 className="contact-box-header">{item.title}</h3>
                      <p className="text-secondary" style={{ fontSize: "0.8125rem" }}>{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-card-alt">
                <h3 className="mb-3" style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-dark)" }}>
                  Ways to Get Involved
                </h3>
                <div className="flex-col gap-2">
                  {getInvolved.map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", color: "var(--text-body)" }}>
                      <ArrowRight size={12} style={{ color: "var(--blue-500)", flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="contact-box" style={{ padding: "2rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-dark)", marginBottom: "0.4rem" }}>
                Send a Message
              </h3>
              <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                We&apos;ll get back to you soon.
              </p>

              {submitted && (
                <div className="mb-5" style={{ background: "var(--blue-100)", border: "1px solid var(--blue-200)", borderRadius: "6px", padding: "0.75rem 1rem", color: "var(--blue-600)", fontSize: "0.8125rem", fontWeight: 500 }}>
                  ✓ Thank you! We&apos;ll be in touch.
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex-col gap-4">
                <div className="form-row">
                  <div>
                    <label className="form-label">Name</label>
                    <input className="form-input" type="text" required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="form-label">Email</label>
                    <input className="form-input" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="your@email.com" />
                  </div>
                </div>

                <div>
                  <label className="form-label">Subject</label>
                  <select required value={form.subject} onChange={(e) => update("subject", e.target.value)} className="form-input" style={{ cursor: "pointer" }}>
                    <option value="" disabled>Select a topic</option>
                    <option value="partnership">Corporate Partnership</option>
                    <option value="sponsor">Sponsor an Applicant</option>
                    <option value="volunteer">Volunteer / Review</option>
                    <option value="donate">Donation Inquiry</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">Message</label>
                  <textarea className="form-input" required rows={4} style={{ resize: "vertical" }} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us how you'd like to get involved..." />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "0.6875rem", gap: "0.5rem" }}>
                  <Send size={14} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
