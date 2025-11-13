import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'

export default function SuccessStoriesPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-6xl px-6">
                        <h1 className="text-4xl font-semibold lg:text-5xl mb-8 text-center">Success Stories</h1>
                        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                            Read inspiring stories from our clients who achieved their dreams of studying, working, and living abroad with Ultra Large.
                        </p>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <blockquote className="border-l-4 pl-4">
                                        <p className="text-sm mb-4">Ultra Large made my dream of studying in Canada a reality. Their team handled everything professionally and I got my visa approved in record time!</p>
                                        <cite className="block font-medium">Sarah M.</cite>
                                        <span className="text-sm text-muted-foreground">Student Visa - Toronto, Canada</span>
                                    </blockquote>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <blockquote className="border-l-4 pl-4">
                                        <p className="text-sm mb-4">The work permit process seemed overwhelming until I found Ultra Large. They guided me through every step and I'm now working in the UK!</p>
                                        <cite className="block font-medium">James K.</cite>
                                        <span className="text-sm text-muted-foreground">Work Permit - London, UK</span>
                                    </blockquote>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <blockquote className="border-l-4 pl-4">
                                        <p className="text-sm mb-4">Thanks to Ultra Large, my family and I received our permanent residency in Canada. The process was smooth and stress-free.</p>
                                        <cite className="block font-medium">Aisha N.</cite>
                                        <span className="text-sm text-muted-foreground">Permanent Residency - Vancouver, Canada</span>
                                    </blockquote>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <blockquote className="border-l-4 pl-4">
                                        <p className="text-sm mb-4">I was skeptical about Express Entry, but Ultra Large maximized my CRS score and I received my ITA within 3 months!</p>
                                        <cite className="block font-medium">David L.</cite>
                                        <span className="text-sm text-muted-foreground">Express Entry - Calgary, Canada</span>
                                    </blockquote>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <blockquote className="border-l-4 pl-4">
                                        <p className="text-sm mb-4">The car rental experience was seamless from start to finish. Professional service, well-maintained vehicles, and competitive pricing made our trip unforgettable.</p>
                                        <cite className="block font-medium">Uwase Aline</cite>
                                        <span className="text-sm text-muted-foreground">Car Rental - Kigali, Rwanda</span>
                                    </blockquote>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <blockquote className="border-l-4 pl-4">
                                        <p className="text-sm mb-4">Ultra Large helped reunite my family. Their expertise in family sponsorship made the impossible possible. Forever grateful!</p>
                                        <cite className="block font-medium">Maria P.</cite>
                                        <span className="text-sm text-muted-foreground">Family Reunification - Toronto, Canada</span>
                                    </blockquote>
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
