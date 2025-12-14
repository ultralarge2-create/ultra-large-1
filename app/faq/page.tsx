import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-4xl px-6">
                        <h1 className="text-4xl font-semibold lg:text-5xl mb-4 text-center">Frequently Asked Questions</h1>
                        <p className="text-center text-muted-foreground mb-16">
                            Find answers to common questions about immigration and visa services
                        </p>

                        <div className="space-y-12">
                            <div>
                                <h2 className="text-2xl font-semibold mb-6">🇨🇦 Canada PR & Express Entry</h2>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>What is Express Entry?</AccordionTrigger>
                                        <AccordionContent>
                                            Express Entry is Canada's main immigration system for skilled workers. It manages applications for Federal Skilled Worker Program (FSWP), Federal Skilled Trades Program (FSTP), and Canadian Experience Class (CEC). Candidates are ranked using the Comprehensive Ranking System (CRS).
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>What is a good CRS score?</AccordionTrigger>
                                        <AccordionContent>
                                            CRS scores vary with each draw. Generally, scores above 470 are competitive. Factors include age, education, work experience, language proficiency (IELTS/TEF), and Canadian experience. We help maximize your CRS score.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>How long does Canada PR take?</AccordionTrigger>
                                        <AccordionContent>
                                            Processing time is typically 6-12 months after receiving an Invitation to Apply (ITA). The timeline includes profile creation, receiving ITA, document submission, and final approval. We guide you through each step.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>Do I need a job offer for Express Entry?</AccordionTrigger>
                                        <AccordionContent>
                                            No, a job offer is not mandatory for most Express Entry programs. However, a valid job offer with LMIA can add 50-200 points to your CRS score, significantly improving your chances.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-6">🇺🇸 USA Visas</h2>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="usa-1">
                                        <AccordionTrigger>What is the DV Lottery?</AccordionTrigger>
                                        <AccordionContent>
                                            The Diversity Visa (DV) Lottery is a US government program that provides 55,000 immigrant visas annually to people from countries with low immigration rates to the USA. Winners can apply for permanent residency (Green Card).
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="usa-2">
                                        <AccordionTrigger>How do I apply for a US student visa?</AccordionTrigger>
                                        <AccordionContent>
                                            First, get admission from a SEVP-approved US school. Then apply for F-1 visa by completing DS-160 form, paying SEVIS fee, scheduling embassy interview, and preparing required documents. We assist with the entire process.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="usa-3">
                                        <AccordionTrigger>What is a K1 Fiancé visa?</AccordionTrigger>
                                        <AccordionContent>
                                            K1 visa allows a foreign fiancé(e) of a US citizen to enter the USA for marriage. You must marry within 90 days of entry. Requirements include proof of relationship, meeting in person within 2 years, and financial support.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-6">🇪🇺 Europe Work Visas & Schengen</h2>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="eu-1">
                                        <AccordionTrigger>What is a Schengen visa?</AccordionTrigger>
                                        <AccordionContent>
                                            A Schengen visa allows travel to 27 European countries for up to 90 days within 180 days. It's used for tourism, business, family visits, or medical purposes. We help with document preparation and embassy appointments.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="eu-2">
                                        <AccordionTrigger>Which European countries offer work visas?</AccordionTrigger>
                                        <AccordionContent>
                                            Germany, Poland, Czech Republic, Slovakia, Malta, and others offer work visas for various sectors including warehouse, factory, construction, caregiving, and hospitality. We connect you with employers and handle visa applications.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="eu-3">
                                        <AccordionTrigger>Can I bring my family on a work visa?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes, most European countries allow family reunification. Once you have a valid work permit and meet income requirements, you can sponsor your spouse and children. Processing time varies by country.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="eu-4">
                                        <AccordionTrigger>How long does Schengen visa processing take?</AccordionTrigger>
                                        <AccordionContent>
                                            Standard processing is 15 calendar days, but can extend to 30-60 days in some cases. Apply at least 3 weeks before travel. We ensure your documents are complete to avoid delays.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-6">Student Visas</h2>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="study-1">
                                        <AccordionTrigger>Which countries are best for studying abroad?</AccordionTrigger>
                                        <AccordionContent>
                                            Popular destinations include Canada, USA, UK, Germany, France, and Australia. Each offers quality education, work opportunities, and potential pathways to permanent residency. We help you choose based on your goals and budget.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="study-2">
                                        <AccordionTrigger>Do I need IELTS for all countries?</AccordionTrigger>
                                        <AccordionContent>
                                            Most English-speaking countries require IELTS or TOEFL. Some accept Duolingo. For France and Belgium, TEF/TCF French tests are needed. Germany may require TestDaF. We provide language test registration support.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="study-3">
                                        <AccordionTrigger>Can I work while studying?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes! Canada allows 20 hours/week during studies, full-time during breaks. USA allows on-campus work and CPT/OPT. Most European countries allow 20 hours/week. This helps cover living expenses.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-6">General Questions</h2>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="gen-1">
                                        <AccordionTrigger>How much do your services cost?</AccordionTrigger>
                                        <AccordionContent>
                                            Fees vary by service type and complexity. We offer free initial consultations and eligibility assessments. Contact us for detailed pricing for your specific immigration needs.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="gen-2">
                                        <AccordionTrigger>How long does the visa process take?</AccordionTrigger>
                                        <AccordionContent>
                                            Processing times vary: Canada PR (6-12 months), USA visas (2-6 months), Schengen visa (15-30 days), Student visas (4-8 weeks). We keep you updated throughout the process.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="gen-3">
                                        <AccordionTrigger>Do you help with flight booking and car rental?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes! We offer complete travel services including flight booking, car rentals, and travel insurance. This makes us your one-stop solution for immigration and travel needs.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
