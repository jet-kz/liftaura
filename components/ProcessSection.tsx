import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const steps = [
  {
    num: "1",
    title: "Community Support",
    desc: "Members of our community support the initiative through voluntary contributions and participation.",
  },
  {
    num: "2",
    title: "Review, Merit Assessment & Selection",
    desc: "All applications are carefully reviewed through a structured process. Selection is based on merit and eligibility, quality and clarity of application, level of need and impact potential, and performance in a short assessment (CBT or interview).",
  },
  {
    num: "3",
    title: "Verification",
    desc: "Selected applicants may be contacted for verification and additional information before support is provided.",
  },
  {
    num: "4",
    title: "Support & Impact",
    desc: "Support may include educational assistance, career support, business assistance, or community aid. Final selection is based on overall evaluation and available resources.",
  },
  {
    num: "5",
    title: "Transparency",
    desc: "We are committed to accountability. Updates, impact stories, and community progress will be shared through our official platforms.",
  },
];

export default function ProcessSection() {
  return (
    <>
      {/* How We Operate intro */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-600 mx-auto text-center">
            <span className="eyebrow">How We Operate</span>
            <h2 className="section-title">Our Process</h2>
            <div className="divider mx-auto" />
            <p>
              Liftaura Initiative is a community-driven platform focused on creating opportunities and meaningful impact through collective support and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="process" className="section bg-light">
        <div className="container">
          <div className="max-w-800 mx-auto px-4 mt-8">
            <Accordion type="single" collapsible className="w-full">
              {steps.map((step, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="mb-6 lg:mb-8 border-none group">
                  <AccordionTrigger className="hover:no-underline lg:py-6 group-data-[state=open]:pb-2 mt-4">
                    <div className="flex items-center gap-4">
                      <span className="text-lg lg:text-xl font-bold text-blue-600">{step.num}.</span>
                      <span className="text-lg lg:text-xl font-bold text-dark">
                        {step.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 pt-2">
                    <div className="ml-2 pl-6 lg:pl-8 border-l-2 border-gray-200 text-base lg:text-lg text-muted leading-relaxed">
                      {step.desc}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
