import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Why Ultra Large?</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <Image src="/heroimage3.png" className="rounded-2xl" alt="Why Ultra Large" width={1207} height={929} />
                    </div>

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            With expert guidance for <span className="text-accent-foreground font-bold">Canada, the UK, Europe, the USA, and the UAE</span>, we handle every detail from your first assessment to your final approval.
                        </p>
                        <p className="text-muted-foreground">It's time to think bigger—it's time to go Ultra Large. We provide a clear and direct path to your next big success, ensuring you can focus on what matters most.</p>

                        <div className="pt-6">
                            <blockquote className="border-l-4 pl-4">
                                <p>Ultra Large made my dream of studying in Canada a reality. Their team handled everything professionally and I got my visa approved in record time!</p>

                                <div className="mt-6 space-y-3">
                                    <cite className="block font-medium">Sarah M., Student Visa</cite>
                                    <span className="text-sm text-muted-foreground">Toronto, Canada</span>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}