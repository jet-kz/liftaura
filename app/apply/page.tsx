"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ArrowLeft, GraduationCap, Stethoscope, Briefcase,
  HeartHandshake, CheckCircle2, FileText, ShieldCheck, Gift, Eye,
  User, MapPin, Calendar, BriefcaseIcon, HelpCircle, Target,
  AlertCircle, FileUp, ClipboardCheck, Info
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CTASection from "@/components/CTASection";

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    // Section 1
    fullName: "", gender: "", dob: "", phone: "", email: "", state: "", lga: "", occupation: "",
    // Section 2
    supportCategory: "", otherCategory: "",
    // Section 3
    aboutSelf: "", goals: "", challenges: "",
    // Section 4
    specificSupport: "", supportHelp: "", impact: "",
    // Section 5
    whySelected: "", stepsTaken: "", receivedSupportBefore: "no", previousSupportDetails: "",
    // Section 6
    documents: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: any) => setForm({ ...form, [field]: value });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `*Liftaura Initiative Application Form*
    
*Section 1: Personal Information*
- Full Name: ${form.fullName}
- Gender: ${form.gender}
- DOB: ${form.dob}
- Phone: ${form.phone}
- Email: ${form.email}
- Residence: ${form.lga}, ${form.state}
- Occupation: ${form.occupation}

*Section 2: Category*
- Area: ${form.supportCategory === "other" ? form.otherCategory : form.supportCategory}

*Section 3: Background*
- About: ${form.aboutSelf}
- Goals: ${form.goals}
- Challenges: ${form.challenges}

*Section 4: Support Request*
- Specifics: ${form.specificSupport}
- Help: ${form.supportHelp}
- Impact: ${form.impact}

*Section 5: Merit Assessment*
- Why Selected: ${form.whySelected}
- Steps Taken: ${form.stepsTaken}
- Previous Support: ${form.receivedSupportBefore} ${form.receivedSupportBefore === "yes" ? `(${form.previousSupportDetails})` : ""}

*Section 6: Documents Prepared*
${form.documents.length > 0 ? form.documents.map(d => `- ${d}`).join("\n") : "- None specified"}
`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2348089842759?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    // Don't reset state immediately so they can see the message
  };

  const categories = [
    { id: "education", label: "Education / Scholarship Support", icon: GraduationCap },
    { id: "healthcare", label: "Healthcare Career Opportunity Support", icon: Stethoscope },
    { id: "business", label: "Business Support", icon: Briefcase },
    { id: "community", label: "Community Project Support", icon: HeartHandshake },
    { id: "other", label: "Other (Specify)", icon: HelpCircle },
  ];

  const docOptions = {
    education: ["Admission letter", "Student ID", "Academic records"],
    healthcare: ["Professional license", "Certificates", "CV"],
    business: ["Business Plan", "Registration Docs", "Financial Records"],
    community: ["Project Proposal", "Community Support Letters", "Photographs of Area"],
    other: ["Identity Document", "Supporting Evidence", "Detailed Statement"],
  };

  const toggleDoc = (doc: string) => {
    const fresh = form.documents.includes(doc)
      ? form.documents.filter(d => d !== doc)
      : [...form.documents, doc];
    update("documents", fresh);
  };

  return (
    <main>
      {/* HERO */}
      <section className="bg-dark hero-wrapper w-full hero-half">
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
            Empowering Your <span className="gradient-text">Journey.</span>
          </h1>
          <div className="divider mx-auto" />
          <p className="section-desc max-w-500 mx-auto text-secondary">
            Our multi-stage application process ensures that every request is evaluated fairly and transparently.
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
              { icon: GraduationCap, title: "Education Support", desc: "Scholarships, school fees, learning resources, and academic mentorship.", boxClass: "icon-box-blue" },
              { icon: Stethoscope, title: "Healthcare Opportunities", desc: "Pathways and resources for aspiring healthcare professionals.", boxClass: "icon-box-gold" },
              { icon: Briefcase, title: "Business Support", desc: "Startup capital, business training, and market access support.", boxClass: "icon-box-blue" },
              { icon: HeartHandshake, title: "Community Projects", desc: "Funding for projects that create lasting community impact.", boxClass: "icon-box-gold" },
            ].map(({ icon: Icon, title, desc, boxClass }, i) => (
              <div key={i}>
                <div className={`icon-box ${boxClass}`}>
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
                { icon: FileText, num: "1", title: "Submit Application", desc: "Fill out our application form with clear, honest details about your need and goals." },
                { icon: CheckCircle2, num: "2", title: "Merit Review", desc: "Our team reviews every application based on need, eligibility, and impact potential." },
                { icon: ShieldCheck, num: "3", title: "Assessment (CBT)", desc: "Shortlisted applicants may be invited for a short assessment test or brief interview." },
                { icon: Gift, num: "4", title: "Support Delivered", desc: "Verified applicants receive support tailored to their specific need area." },
                { icon: Eye, num: "5", title: "Impact Reported", desc: "We follow up and share your story (with permission) to inspire the community." },
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

      {/* FORM SECTION */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-800 mx-auto">

            <div className="text-center mb-10">
              <span className="eyebrow">Apply</span>
              <h2 className="section-title">Initial Application</h2>
              <p className="section-desc mx-auto">Please fill out the form below to begin your application process.</p>
            </div>

            {/* PROGRESS BAR */}
            {!submitted && (
              <div className="mb-12">
                <div className="flex justify-between mb-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step >= i ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400"
                        }`}>
                        {i}
                      </div>
                      <span className={`text-[10px] mt-2 font-medium uppercase tracking-tight ${step >= i ? "text-blue-600" : "text-gray-300"
                        }`}>
                        {["Info", "Type", "Ref", "Need", "Merit", "Docs"][i - 1]}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all duration-500 ease-out"
                    style={{ width: `${(step / 6) * 100}%` }}
                  />
                </div>
              </div>
            )}

            <div className="contact-box" style={{ padding: "2rem" }}>
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ClipboardCheck size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-dark mb-4">Application Ready!</h2>
                  <p className="text-muted mb-8 max-w-400 mx-auto">
                    We have formatted your application details. To finalize, please click the button below to send it to our verification team via WhatsApp.
                  </p>
                  <button
                    onClick={handleSubmit}
                    className="btn btn-primary px-8 py-4 text-lg"
                  >
                    Send via WhatsApp <ArrowRight size={20} className="ml-2" />
                  </button>
                  <p className="mt-6 text-sm text-gray-400">
                    If you've already sent it, you can safely close this page.
                  </p>
                </div>
              ) : (
                <form className="flex-col gap-6">

                  {/* STEP 1: PERSONAL INFO */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-4">
                        <User className="text-blue-600" size={24} />
                        <h3 className="text-xl font-bold">Section 1: Personal Information</h3>
                      </div>
                      <div className="form-row">
                        <div>
                          <label className="form-label">Full Name</label>
                          <input className="form-input" type="text" placeholder="John Doe" value={form.fullName} onChange={(e) => update("fullName", e.target.value)} required />
                        </div>
                        <div>
                          <label className="form-label">Gender</label>
                          <select className="form-input" value={form.gender} onChange={(e) => update("gender", e.target.value)} required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div>
                          <label className="form-label">Date of Birth</label>
                          <input className="form-input" type="date" value={form.dob} onChange={(e) => update("dob", e.target.value)} required />
                        </div>
                        <div>
                          <label className="form-label">Phone Number</label>
                          <input className="form-input" type="tel" placeholder="080 0000 0000" value={form.phone} onChange={(e) => update("phone", e.target.value)} required />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="flex-1">
                          <label className="form-label">Email Address</label>
                          <input className="form-input" type="email" placeholder="john@example.com" value={form.email} onChange={(e) => update("email", e.target.value)} required />
                        </div>
                      </div>
                      <div className="form-row">
                        <div>
                          <label className="form-label">State of Residence</label>
                          <input className="form-input" type="text" placeholder="Lagos" value={form.state} onChange={(e) => update("state", e.target.value)} required />
                        </div>
                        <div>
                          <label className="form-label">Local Govt Area (LGA)</label>
                          <input className="form-input" type="text" placeholder="Ikeja" value={form.lga} onChange={(e) => update("lga", e.target.value)} required />
                        </div>
                      </div>
                      <div>
                        <label className="form-label">Occupation</label>
                        <input className="form-input" type="text" placeholder="Student / Professional / Business Owner" value={form.occupation} onChange={(e) => update("occupation", e.target.value)} required />
                      </div>
                    </div>
                  )}

                  {/* STEP 2: CATEGORY */}
                  {step === 2 && (
                    <div className="space-y-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Target className="text-blue-600" size={24} />
                        <h3 className="text-xl font-bold">Section 2: Category of Support</h3>
                      </div>
                      <p className="text-muted text-sm -mt-4">Which category are you applying for?</p>
                      <div className="grid grid-cols-1 gap-4">
                        {categories.map((cat) => (
                          <label
                            key={cat.id}
                            className={`flex items-center p-4 rounded-xl border-2 transition-all cursor-pointer ${form.supportCategory === cat.id ? "border-blue-600 bg-blue-50" : "border-gray-100 hover:border-gray-200"
                              }`}
                          >
                            <input
                              type="radio"
                              name="category"
                              className="hidden"
                              checked={form.supportCategory === cat.id}
                              onChange={() => update("supportCategory", cat.id)}
                            />
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${form.supportCategory === cat.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"
                              }`}>
                              <cat.icon size={20} />
                            </div>
                            <span className={`font-bold ${form.supportCategory === cat.id ? "text-blue-600" : "text-dark"}`}>
                              {cat.label}
                            </span>
                          </label>
                        ))}
                      </div>
                      {form.supportCategory === "other" && (
                        <div className="mt-4 animate-in fade-in slide-in-from-top-1">
                          <label className="form-label">Please Specify</label>
                          <input className="form-input" type="text" placeholder="Tell us the specific category..." value={form.otherCategory} onChange={(e) => update("otherCategory", e.target.value)} />
                        </div>
                      )}
                    </div>
                  )}

                  {/* STEP 3: BACKGROUND */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-4">
                        <HelpCircle className="text-blue-600" size={24} />
                        <h3 className="text-xl font-bold">Section 3: Applicant Background</h3>
                      </div>
                      <div>
                        <label className="form-label">Tell us about yourself</label>
                        <textarea className="form-input" rows={4} placeholder="Brief details about your background, family, etc..." value={form.aboutSelf} onChange={(e) => update("aboutSelf", e.target.value)} required />
                      </div>
                      <div>
                        <label className="form-label">What are your current goals or aspirations?</label>
                        <textarea className="form-input" rows={4} placeholder="Where do you see yourself in the next 2-5 years?" value={form.goals} onChange={(e) => update("goals", e.target.value)} required />
                      </div>
                      <div>
                        <label className="form-label">What challenge are you currently facing?</label>
                        <textarea className="form-input" rows={4} placeholder="Be specific about the difficulties you are navigating..." value={form.challenges} onChange={(e) => update("challenges", e.target.value)} required />
                      </div>
                    </div>
                  )}

                  {/* STEP 4: SUPPORT REQUEST */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-4">
                        <HeartHandshake className="text-blue-600" size={24} />
                        <h3 className="text-xl font-bold">Section 4: Support Request</h3>
                      </div>
                      <div>
                        <label className="form-label">What specific support are you requesting?</label>
                        <textarea className="form-input" rows={4} placeholder="E.g. Part payment of tuition, business equipment, medical exam fees..." value={form.specificSupport} onChange={(e) => update("specificSupport", e.target.value)} required />
                      </div>
                      <div>
                        <label className="form-label">How will this support help you?</label>
                        <textarea className="form-input" rows={4} placeholder="Explain how the support bridges the gap between your current situation and goals..." value={form.supportHelp} onChange={(e) => update("supportHelp", e.target.value)} required />
                      </div>
                      <div>
                        <label className="form-label">What impact will this support have on your life, career, business, or community?</label>
                        <textarea className="form-input" rows={4} placeholder="Describe the positive change this would bring..." value={form.impact} onChange={(e) => update("impact", e.target.value)} required />
                      </div>
                    </div>
                  )}

                  {/* STEP 5: MERIT */}
                  {step === 5 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-4">
                        <AlertCircle className="text-blue-600" size={24} />
                        <h3 className="text-xl font-bold">Section 5: Merit Assessment</h3>
                      </div>
                      <div>
                        <label className="form-label">Why should you be selected for this opportunity?</label>
                        <textarea className="form-input" rows={4} placeholder="Highlight your commitment, potential, and dedication..." value={form.whySelected} onChange={(e) => update("whySelected", e.target.value)} required />
                      </div>
                      <div>
                        <label className="form-label">What steps have you already taken toward achieving this goal?</label>
                        <textarea className="form-input" rows={4} placeholder="Show us your proactivity..." value={form.stepsTaken} onChange={(e) => update("stepsTaken", e.target.value)} required />
                      </div>
                      <div className="space-y-4">
                        <label className="form-label">Have you received similar support before?</label>
                        <div className="flex gap-8">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="prevSupport" checked={form.receivedSupportBefore === "yes"} onChange={() => update("receivedSupportBefore", "yes")} />
                            <span>Yes</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="prevSupport" checked={form.receivedSupportBefore === "no"} onChange={() => update("receivedSupportBefore", "no")} />
                            <span>No</span>
                          </label>
                        </div>
                      </div>
                      {form.receivedSupportBefore === "yes" && (
                        <div className="animate-in fade-in slide-in-from-top-1">
                          <label className="form-label">If yes, explain</label>
                          <textarea className="form-input" rows={3} value={form.previousSupportDetails} onChange={(e) => update("previousSupportDetails", e.target.value)} />
                        </div>
                      )}
                    </div>
                  )}

                  {/* STEP 6: DOCUMENTS */}
                  {step === 6 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-4">
                        <FileUp className="text-blue-600" size={24} />
                        <h3 className="text-xl font-bold">Section 6: Documents Upload (Optional)</h3>
                      </div>
                      <p className="text-muted text-sm">
                        Please check the documents you have ready. You may be asked to present these during verification.
                      </p>

                      <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                        <h4 className="font-bold text-dark flex items-center gap-2">
                          <ClipboardCheck size={18} className="text-blue-600" />
                          Recommended for your category:
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {/* @ts-ignore */}
                          {(docOptions[form.supportCategory] || docOptions.other).map((doc) => (
                            <label key={doc} className="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer border border-transparent hover:border-gray-200 transition-all">
                              <input
                                type="checkbox"
                                className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500"
                                checked={form.documents.includes(doc)}
                                onChange={() => toggleDoc(doc)}
                              />
                              <span className="text-dark font-medium">{doc}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-xl flex gap-4 items-start">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">
                          <Info size={18} />
                        </div>
                        <p className="text-xs text-blue-800 leading-relaxed">
                          Note: Since we use WhatsApp for application processing, you will be invited to send digital copies or photographs of these documents directly to our verification account after this initial submission.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* NAVIGATION BUTTONS */}
                  <div className="flex gap-4 pt-4">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn bg-gray-100 hover:bg-gray-200 text-dark px-6 py-4 flex-1 transition-all"
                      >
                        <ArrowLeft size={18} className="mr-2" /> Back
                      </button>
                    )}
                    {step < 6 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn btn-primary px-6 py-4 flex-[2] transition-all"
                        disabled={
                          (step === 1 && !form.fullName) ||
                          (step === 2 && !form.supportCategory)
                        }
                      >
                        Continue <ArrowRight size={18} className="ml-2" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSubmitted(true)}
                        className="btn btn-primary px-6 py-4 flex-[2] transition-all"
                      >
                        Format Application <CheckCircle2 size={18} className="ml-2" />
                      </button>
                    )}
                  </div>

                  <p className="text-[10px] text-gray-400 text-center mt-4">
                    By submitting, you agree to our <Link href="/terms" className="text-blue-600 hover:underline">Terms and Conditions</Link>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SUMMARY */}
      <section className="section bg-light pt-0">
        <div className="container">
          <div className="card-grid cols-3 max-w-1000 mx-auto">
            <div>
              <div className="icon-box icon-box-blue">
                <FileText size={20} />
              </div>
              <h4 className="font-bold mb-2">Honesty First</h4>
              <p className="text-sm text-muted">We verify all details. Inaccurate information results in immediate disqualification.</p>
            </div>
            <div>
              <div className="icon-box icon-box-gold">
                <ShieldCheck size={20} />
              </div>
              <h4 className="font-bold mb-2">Merit Based</h4>
              <p className="text-sm text-muted">Impact potential and genuine need are our primary evaluation criteria.</p>
            </div>
            <div>
              <div className="icon-box icon-box-blue">
                <Calendar size={20} />
              </div>
              <h4 className="font-bold mb-2">Rolling Basis</h4>
              <p className="text-sm text-muted">Applications are reviewed periodically. We will contact you if shortlisted.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
