import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'

export default function TermsPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-4xl px-6">
                        <h1 className="text-4xl font-semibold lg:text-5xl mb-8">Terms of Service</h1>
                        
                        <div className="space-y-6 text-muted-foreground">
                            <p>Welcome to Ultra Large. By using our services, you agree to these Terms of Service. Please read them carefully.</p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Services Provided</h2>
                            <p>Ultra Large provides immigration consulting, visa application assistance, car rental services, and related travel services. We act as consultants and facilitators but do not make immigration decisions.</p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Client Responsibilities</h2>
                            <p>Clients must provide accurate and complete information, respond promptly to requests, pay fees on time, and comply with all applicable laws and regulations.</p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Fees and Payment</h2>
                            <p>Service fees are outlined in your service agreement. Fees are non-refundable once work has commenced, except as required by law. Government fees are separate and non-refundable.</p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">No Guarantee of Results</h2>
                            <p>While we provide professional services, we cannot guarantee visa approval or specific outcomes. Immigration decisions are made by government authorities.</p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Confidentiality</h2>
                            <p>We maintain strict confidentiality of client information, except as required by law or necessary for service delivery.</p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Termination</h2>
                            <p>Either party may terminate services with written notice. Fees for work completed remain due upon termination.</p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact</h2>
                            <p>For questions about these Terms, contact us at info@ultralarge.com or +250 788 918 653.</p>

                            <p className="mt-8 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
