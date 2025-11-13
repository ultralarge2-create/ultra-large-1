import { Globe, Shield, Clock, Users } from 'lucide-react'

export default function FeaturesSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-12 px-6">
                <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-semibold">Global Reach, Personal Touch</h2>
                    <p className="max-w-sm sm:ml-auto">We combine international expertise with personalized service to ensure your immigration journey is smooth and successful.</p>
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Globe className="size-4" />
                            <h3 className="text-sm font-medium">50+ Countries</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Access to top destinations worldwide with expert local knowledge.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Shield className="size-4" />
                            <h3 className="text-sm font-medium">100% Secure</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Your documents and personal information are fully protected.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Clock className="size-4" />
                            <h3 className="text-sm font-medium">Fast Processing</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Quick turnaround times with efficient application handling.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Users className="size-4" />
                            <h3 className="text-sm font-medium">Expert Team</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Certified immigration consultants with years of experience.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
