import { GraduationCap, Briefcase, Home } from 'lucide-react'

export default function FeaturesSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold lg:text-5xl">Our Services</h2>
                    <p className="mt-6 text-lg">Canada | USA | Europe | Schengen | Study Abroad | Work Permits | Travel Services</p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="border rounded-3xl p-8 space-y-4">
                        <GraduationCap className="size-5" />
                        <h3 className="text-2xl font-semibold">Study Abroad</h3>
                        <p className="text-sm">Canada, USA, Europe</p>
                        <p>Admission support, student visa applications, and Statement of Purpose writing for top universities in Canada, USA, UK, Germany, France, and more.</p>
                    </div>
                    <div className="border rounded-3xl p-8 space-y-4">
                        <Briefcase className="size-5" />
                        <h3 className="text-2xl font-semibold">Work Permits</h3>
                        <p className="text-sm">Express Entry & Work Visas</p>
                        <p>Canada Express Entry, LMIA work permits, Europe work opportunities in warehouse, factory, construction, caregiving, and hospitality sectors.</p>
                    </div>
                    <div className="border rounded-3xl p-8 space-y-4">
                        <Home className="size-5" />
                        <h3 className="text-2xl font-semibold">Immigration & Travel</h3>
                        <p className="text-sm">Visas & Travel Services</p>
                        <p>Schengen visas, family reunification, DV Lottery, tourist visas, plus flight booking and car rental services.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
