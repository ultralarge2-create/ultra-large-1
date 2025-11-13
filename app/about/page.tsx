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
                        <h1 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">About Ultra Large</h1>
                        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                            <div className="relative space-y-4">
                                <p className="text-muted-foreground">
                                    <span className="text-accent-foreground font-bold">Ultra Large</span> is your trusted partner for international immigration, study abroad, and travel services. We specialize in helping individuals and families achieve their dreams of living, working, and studying abroad.
                                </p>
                                <p className="text-muted-foreground">With expert guidance for Canada, the UK, Europe, the USA, and the UAE, we handle every detail from your first assessment to your final approval. Our mission is to make your journey seamless and successful.</p>
                            </div>
                            <div className="relative mt-6 sm:mt-0">
                                <Image src="/heroimage3.png" className="rounded-2xl w-full h-auto" alt="About Ultra Large" width={1207} height={929} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-32 bg-zinc-50 dark:bg-transparent">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-semibold lg:text-5xl">Why Choose Ultra Large?</h2>
                            <p className="mt-4 text-muted-foreground">We provide comprehensive immigration and travel solutions with expertise and dedication.</p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardHeader className="text-center">
                                    <Globe className="size-12 mx-auto text-blue-600 mb-4" />
                                    <h3 className="text-xl font-semibold">Global Reach</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground text-center">Access to 50+ countries with expert local knowledge and partnerships.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="text-center">
                                    <Users className="size-12 mx-auto text-blue-600 mb-4" />
                                    <h3 className="text-xl font-semibold">Expert Team</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground text-center">Certified immigration consultants with years of experience.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="text-center">
                                    <Award className="size-12 mx-auto text-blue-600 mb-4" />
                                    <h3 className="text-xl font-semibold">Proven Success</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground text-center">Thousands of successful visa applications and satisfied clients.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="text-center">
                                    <Target className="size-12 mx-auto text-blue-600 mb-4" />
                                    <h3 className="text-xl font-semibold">Personalized Service</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground text-center">Tailored solutions to meet your unique immigration goals.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-5xl px-6">
                        <h2 className="text-4xl font-semibold lg:text-5xl mb-8">Our Mission</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            At Ultra Large, our mission is to empower individuals and families to achieve their international dreams. We believe that everyone deserves the opportunity to live, work, and study in the country of their choice.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            We are committed to providing transparent, efficient, and personalized immigration services that make the complex process simple and stress-free. Your success is our success.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
