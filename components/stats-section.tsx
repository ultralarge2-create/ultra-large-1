export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Ultra Success, Simplified</h2>
                    <p>Trust is built on results. For over a decade, Ultra Large has been the secure choice for ambitious migrants. We handle the complexity of international requirements; you focus on the outcome.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-4 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">10+ Years</div>
                        <p>Experience</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">50+</div>
                        <p>Global Destinations</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">300+</div>
                        <p>Visas Approved</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">400+</div>
                        <p>Lives Launched</p>
                    </div>
                </div>
            </div>
        </section>
    )
}