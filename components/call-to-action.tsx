import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16 px-4">
            <div className="mx-auto max-w-5xl border px-6 py-12 md:py-20 lg:py-32" style={{ backgroundColor: '#036eff', borderRadius: '40px' }}>
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-light text-white lg:text-5xl">Book Your Free Consultation</h2>
                    <p className="mt-4 text-white/90">Speak with our immigration experts about Canada, USA, or Europe opportunities. Free eligibility assessment included.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-blue-600 hover:bg-gray-100 rounded-full font-semibold">
                            <Link href="/contact">
                                <span>Book Free Consultation</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-600 rounded-full font-semibold">
                            <Link href="https://wa.me/250788918653" target="_blank">
                                <span>WhatsApp Us</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
