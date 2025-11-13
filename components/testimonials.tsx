import { Card, CardContent } from '@/components/ui/card'

type Testimonial = {
    name: string
    role: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Uwase',
        role: 'Student Visa - Canada',
        image: '',
        quote: 'Ultra Large made my dream of studying in Canada a reality. Their team handled everything professionally and I got my visa approved in record time!',
    },
    {
        name: 'Mugisha',
        role: 'Work Permit - UK',
        image: '',
        quote: 'I was struggling with my UK work visa application until I found Ultra Large. They simplified the entire process and I landed my dream job in London.',
    },
    {
        name: 'Ishimwe',
        role: 'Permanent Residency - Australia',
        image: '',
        quote: 'The permanent residency process seemed impossible until Ultra Large stepped in. Now my family and I are happily settled in Sydney!',
    },
    {
        name: 'Niyonzima',
        role: 'Student Visa - USA',
        image: '',
        quote: 'From university selection to visa approval, Ultra Large guided me every step of the way. I\'m now pursuing my Master\'s at a top US university.',
    },
    {
        name: 'Umutoni',
        role: 'Work Visa - UAE',
        image: '',
        quote: 'Ultra Large\'s expertise in UAE immigration is unmatched. They secured my work visa quickly and I\'m now thriving in Dubai.',
    },
    {
        name: 'Habimana',
        role: 'Family Sponsorship - Canada',
        image: '',
        quote: 'Bringing my family to Canada was a complex process, but Ultra Large made it seamless. We\'re finally together and couldn\'t be happier.',
    },
    {
        name: 'Mukamana',
        role: 'Student Visa - UK',
        image: '',
        quote: 'The team at Ultra Large is incredibly knowledgeable and supportive. They helped me get into my dream university in London.',
    },
    {
        name: 'Nkurunziza',
        role: 'Permanent Residency - Canada',
        image: '',
        quote: 'Ultra Large turned my Canadian PR dream into reality. Their attention to detail and expertise made all the difference.',
    },
    {
        name: 'Uwera',
        role: 'Work Permit - Germany',
        image: '',
        quote: 'I highly recommend Ultra Large for anyone looking to work in Europe. They handled my German work permit flawlessly.',
    },
    {
        name: 'Bizimana',
        role: 'Student Visa - Australia',
        image: '',
        quote: 'Ultra Large\'s comprehensive support from application to arrival made my Australian study journey stress-free and successful.',
    },
    {
        name: 'Ingabire',
        role: 'Work Visa - Canada',
        image: '',
        quote: 'The professionalism and dedication of Ultra Large is outstanding. They secured my Canadian work visa in just 3 months!',
    },
    {
        name: 'Nsengimana',
        role: 'Permanent Residency - UK',
        image: '',
        quote: 'Ultra Large guided me through the complex UK immigration system with ease. I now have my permanent residency and a bright future ahead.',
    },
]

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export default function WallOfLoveSection() {
    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold">Success Stories from Around the World</h2>
                        <p className="mt-6">Real people, real results. See how Ultra Large has helped thousands achieve their international dreams.</p>
                    </div>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
                        {testimonialChunks.map((chunk, chunkIndex) => (
                            <div
                                key={chunkIndex}
                                className="space-y-3">
                                {chunk.map(({ name, role, quote }, index) => (
                                    <Card key={index}>
                                        <CardContent className="pt-6">
                                            <h3 className="font-medium">{name}</h3>
                                            <span className="text-muted-foreground block text-sm tracking-wide">{role}</span>
                                            <blockquote className="mt-3">
                                                <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                                            </blockquote>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
