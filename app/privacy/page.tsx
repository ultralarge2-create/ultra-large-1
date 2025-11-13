import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'

export default function PrivacyPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-4xl px-6">
                        <h1 className="text-4xl font-semibold lg:text-5xl mb-8">Privacy Policy</h1>
                        
                        <div className="space-y-6 text-muted-foreground">
                            <p>At Ultra Large, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, and safeguard your data.</p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Information We Collect</h2>
                            <p>We collect personal information that you provide to us, including name, email address, phone number, passport details, and other information necessary for visa and immigration applications.</p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How We Use Your Information</h2>
                            <p>Your information is used to process visa applications, communicate with you about your case, provide customer support, and improve our services. We do not sell your personal information to third parties.</p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Security</h2>
                            <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. All sensitive data is encrypted and stored securely.</p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Sharing Information</h2>
                            <p>We may share your information with government authorities, embassies, and consulates as required for visa processing. We may also share information with trusted service providers who assist us in operating our business.</p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Your Rights</h2>
                            <p>You have the right to access, correct, or delete your personal information. You may also object to processing or request data portability. Contact us to exercise these rights.</p>

                            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact Us</h2>
                            <p>If you have questions about this Privacy Policy, contact us at info@ultralarge.com or call +250 788 918 653.</p>

                            <p className="mt-8 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
