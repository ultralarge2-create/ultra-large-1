import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Globe, Users, Award, Target } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                        <h1 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">About ULTRALARGE LTD</h1>
                        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                            <div className="relative space-y-4">
                                <p className="text-muted-foreground">
                                    <span className="text-accent-foreground font-bold">ULTRALARGE LTD</span> is Rwanda's trusted travel and immigration agency. We specialize in Canada immigration, USA visas, Europe work permits, Schengen visas, study abroad programs, and travel services including flight booking and car rentals.
                                </p>
                                <p className="text-muted-foreground">Based in Kigali, Rwanda, we provide fast, trusted, and experienced immigration consulting services. From Express Entry to DV Lottery, from student visas to work permits, we handle every step of your journey abroad.</p>
                            </div>
                            <div className="relative mt-6 sm:mt-0">
                                <Image src="/New folder/visaimage.jpg" className="rounded-2xl w-full h-64 object-cover shadow-xl" alt="About Ultra Large" width={1207} height={929} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-32 bg-zinc-50 dark:bg-transparent">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Why Choose ULTRALARGE LTD?</h2>
                            <p className="mt-4 text-muted-foreground">Fast, trusted, and experienced immigration experts in Rwanda.</p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                                        <Globe className="size-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
                                    <p className="text-sm text-muted-foreground">Canada, USA, Europe immigration and visa services with global partnerships.</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                                        <Users className="size-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                                    <p className="text-sm text-muted-foreground">Expert team specializing in visas, immigration, and travel services.</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                                        <Award className="size-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Proven Success</h3>
                                    <p className="text-sm text-muted-foreground">Thousands of successful visa applications and satisfied clients.</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                                        <Target className="size-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Personalized Service</h3>
                                    <p className="text-sm text-muted-foreground">Tailored solutions to meet your unique immigration goals.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-semibold lg:text-5xl mb-6">Our Mission & Vision</h2>
                                <p className="text-muted-foreground mb-4">
                                    Our mission is to provide fast, reliable, and professional immigration and travel services to Rwandans seeking opportunities in Canada, USA, and Europe. We simplify complex visa processes and ensure successful outcomes.
                                </p>
                                <p className="text-muted-foreground mb-6">
                                    Our vision is to be Rwanda's leading travel and immigration agency, known for excellence in Express Entry, work permits, student visas, Schengen visas, and comprehensive travel services.
                                </p>
                            </div>
                            <div>
                                <Image src="/New folder/canadavisa2.jpg" alt="Immigration Services" width={600} height={400} className="rounded-2xl shadow-lg" />
                            </div>
                        </div>
                        
                        <div className="mt-16 bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-8 md:p-12">
                            <h3 className="text-3xl font-semibold mb-8 text-center">Our Expertise</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-blue-600 font-bold text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Canada Express Entry</h4>
                                        <p className="text-sm text-muted-foreground">Provincial Nominee Programs & PR pathways</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-blue-600 font-bold text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">USA Visas</h4>
                                        <p className="text-sm text-muted-foreground">DV Lottery, Student & Work Visas</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-blue-600 font-bold text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Europe Immigration</h4>
                                        <p className="text-sm text-muted-foreground">Work Permits & Schengen Visas</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-blue-600 font-bold text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Study Abroad</h4>
                                        <p className="text-sm text-muted-foreground">Programs in Canada, USA, Europe</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-blue-600 font-bold text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Travel Services</h4>
                                        <p className="text-sm text-muted-foreground">Flight Booking & Car Rental</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-blue-600 font-bold text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Expert Consultation</h4>
                                        <p className="text-sm text-muted-foreground">Free assessment & guidance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
