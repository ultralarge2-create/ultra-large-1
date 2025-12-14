import { HeroHeader } from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plane, MapPin, GraduationCap, Briefcase, Users, Globe } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
    return (
        <>
            <HeroHeader />
            <main className="pt-32 pb-16">
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-6xl px-6">
                        <h1 className="text-4xl font-semibold lg:text-5xl mb-4 text-center">Our Services</h1>
                        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                            Comprehensive immigration and travel solutions for Canada, USA, and Europe
                        </p>

                        <div className="space-y-16">
                            <div id="canada">
                                <h2 className="text-3xl font-semibold mb-8">🇨🇦 Canada Immigration & Visa Services</h2>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <Card>
                                        <CardHeader>
                                            <h3 className="text-xl font-semibold">Permanent Residency (Express Entry)</h3>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                                                <li>Federal Skilled Worker Program (FSWP)</li>
                                                <li>Federal Skilled Trades Program (FSTP)</li>
                                                <li>Canadian Experience Class (CEC)</li>
                                                <li>Provincial Nominee Programs (PNP)</li>
                                                <li>Atlantic Immigration Program (AIP)</li>
                                            </ul>
                                            <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700"><Link href="/immigration/express-entry">Learn More</Link></Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <h3 className="text-xl font-semibold">Work Permits</h3>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                                                <li>Francophone Mobility Program</li>
                                                <li>LMIA-based work permits</li>
                                                <li>Open Work Permits</li>
                                                <li>Employer-specific permits</li>
                                            </ul>
                                            <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700"><Link href="/immigration/work-permit">Learn More</Link></Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <h3 className="text-xl font-semibold">Study in Canada</h3>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                                                <li>Admission support</li>
                                                <li>Student visa application</li>
                                                <li>Statement of Purpose (SOP) writing</li>
                                            </ul>
                                            <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700"><Link href="/study-abroad/canada">Learn More</Link></Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <h3 className="text-xl font-semibold">Temporary Residency</h3>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                                                <li>Visitor visa</li>
                                                <li>Super visa</li>
                                                <li>Family visit visa</li>
                                                <li>Tourist visa</li>
                                            </ul>
                                            <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700"><Link href="/immigration/tourist-visa">Learn More</Link></Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div id="usa">
                                <h2 className="text-3xl font-semibold mb-8">🇺🇸 USA Visa Services</h2>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <Card>
                                        <CardHeader>
                                            <h3 className="text-xl font-semibold">DV Lottery Support</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">Complete support for Diversity Visa Lottery application and processing</p>
                                            <Button asChild className="bg-blue-600 hover:bg-blue-700"><Link href="/immigration/visit-visa">Learn More</Link></Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <h3 className="text-xl font-semibold">Student Visas (F1/M1)</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">F1 and M1 student visa applications for US universities</p>
                                            <Button asChild className="bg-blue-600 hover:bg-blue-700"><Link href="/study-abroad/usa">Learn More</Link></Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <h3 className="text-xl font-semibold">K1 Fiancé Visa</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">K1 visa for fiancé(e)s of US citizens</p>
                                            <Button asChild className="bg-blue-600 hover:bg-blue-700"><Link href="/contact">Contact Us</Link></Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <h3 className="text-xl font-semibold">B1/B2 & Family Visas</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">Tourist, business, and family-based visa applications</p>
                                            <Button asChild className="bg-blue-600 hover:bg-blue-700"><Link href="/contact">Contact Us</Link></Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div id="europe">
                                <h2 className="text-3xl font-semibold mb-8">🇪🇺 Europe Immigration & Visa Programs</h2>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <Card>
                                        <CardHeader>
                                            <h3 className="text-xl font-semibold">Family Sponsor Visas</h3>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                                                <li>Spouse visas</li>
                                                <li>Dependent visas</li>
                                                <li>Parent family reunification</li>
                                                <li>Countries: Germany, France, Sweden, Netherlands, Belgium</li>
                                            </ul>
                                            <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700"><Link href="/immigration/family-reunification">Learn More</Link></Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <h3 className="text-xl font-semibold">Study in Europe</h3>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                                                <li>University admissions</li>
                                                <li>Student visa applications</li>
                                                <li>Countries: Germany, Norway, Belgium, France, Italy, Spain</li>
                                            </ul>
                                            <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700"><Link href="/study-abroad/europe">Learn More</Link></Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <h3 className="text-xl font-semibold">Work Opportunities</h3>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                                                <li>Warehouse & factory workers</li>
                                                <li>Construction workers</li>
                                                <li>Caregivers & health assistants</li>
                                                <li>Hospitality sector</li>
                                                <li>Countries: Slovakia, Poland, Germany, Czech Republic, Malta</li>
                                            </ul>
                                            <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700"><Link href="/job-seekers/europe">Learn More</Link></Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <h3 className="text-xl font-semibold">Schengen Visas</h3>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                                                <li>Tourist visa</li>
                                                <li>Business visa</li>
                                                <li>Medical visa</li>
                                                <li>Family visit</li>
                                                <li>Document preparation & embassy appointments</li>
                                            </ul>
                                            <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700"><Link href="/immigration/sponsorship-visa">Learn More</Link></Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div id="travel">
                                <h2 className="text-3xl font-semibold mb-8">Travel & Agency Services</h2>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <Card>
                                        <CardHeader>
                                            <Plane className="size-8 text-blue-600 mb-2" />
                                            <h3 className="text-xl font-semibold">Flight Booking</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">International flight booking services at competitive rates</p>
                                            <Button asChild className="bg-blue-600 hover:bg-blue-700"><Link href="/flight-booking">Book Now</Link></Button>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <MapPin className="size-8 text-blue-600 mb-2" />
                                            <h3 className="text-xl font-semibold">Car Rental</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">Reliable car rental services in Rwanda and abroad</p>
                                            <Button asChild className="bg-blue-600 hover:bg-blue-700"><Link href="/car-rental">Rent Now</Link></Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 text-center bg-blue-50 dark:bg-blue-950/20 rounded-3xl p-12">
                            <h2 className="text-3xl font-semibold mb-4">Ready to Start Your Journey?</h2>
                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Book a free consultation with our immigration experts to discuss your options</p>
                            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700"><Link href="/contact">Book Free Consultation</Link></Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
