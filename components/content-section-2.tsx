import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ContentSection2() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">Ready to Make Your Move?</h2>
                    <div className="space-y-6">
                        <p>The first step with Ultra Large is simple, free, and puts you directly on the path to approval. Don't wait—get immediate clarity on your eligibility and a personalized plan crafted by our experts.</p>
                        <p>
                            Whether you're looking to study abroad, advance your career internationally, or secure permanent residency, <span className="font-bold">Ultra Large has the expertise and track record</span> to make it happen.
                        </p>
                        <Button
                            asChild
                            variant="secondary"
                            size="sm"
                            className="gap-1 pr-1.5">
                            <Link href="#">
                                <span>Get Your Ultra Large Assessment Now</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}