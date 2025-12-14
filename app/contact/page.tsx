import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Phone, Mail } from 'lucide-react'
import ContactForm from '@/components/contact-form'

export default function ContactPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-6xl px-6">
                        <h1 className="text-4xl font-semibold lg:text-5xl mb-8 text-center">Contact ULTRALARGE LTD</h1>
                        <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
                            Get in touch with Rwanda's trusted travel and immigration experts.
                        </p>
                        <p className="text-center text-sm text-muted-foreground mb-16 max-w-2xl mx-auto">
                            Working Hours: Monday - Friday: 8:00 AM - 6:00 PM | Saturday: 9:00 AM - 2:00 PM
                        </p>

                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="space-y-8">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <MapPin className="size-6 text-blue-600 shrink-0 mt-1" />
                                            <div>
                                                <h3 className="font-semibold mb-2">Our Office</h3>
                                                <p className="text-muted-foreground">Kigali, Rwanda</p>
                                                <p className="text-sm text-muted-foreground mt-1">Business Registration: RW-ULTRALARGE-LTD</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <Phone className="size-6 text-blue-600 shrink-0 mt-1" />
                                            <div>
                                                <h3 className="font-semibold mb-2">Phone & WhatsApp</h3>
                                                <p className="text-muted-foreground">+250 788 918 653</p>
                                                <a href="https://wa.me/250788918653" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                                                    Chat on WhatsApp
                                                </a>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <Mail className="size-6 text-blue-600 shrink-0 mt-1" />
                                            <div>
                                                <h3 className="font-semibold mb-2">Email</h3>
                                                <a href="mailto:info@ultralarge.rw" className="text-muted-foreground hover:text-blue-600">
                                                    info@ultralarge.rw
                                                </a>
                                                <p className="text-sm text-muted-foreground mt-2">For inquiries about Canada, USA, Europe visas, study abroad, or travel services</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <Card>
                                <CardContent className="p-8">
                                    <ContactForm />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
