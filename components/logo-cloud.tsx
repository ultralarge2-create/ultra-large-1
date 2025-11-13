import { InfiniteSlider } from '@/components/ui/infinite-slider'

export const LogoCloud = () => {
    return (
        <section className="bg-background pb-16 md:pb-32">
            <div className="group relative m-auto max-w-6xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="inline md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Trusted destinations worldwide</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={48}>
                            <div className="flex items-center">
                                <span className="text-2xl font-bold">🇨🇦</span>
                                <span className="ml-2 text-sm font-medium">Canada</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl font-bold">🇬🇧</span>
                                <span className="ml-2 text-sm font-medium">UK</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl font-bold">🇺🇸</span>
                                <span className="ml-2 text-sm font-medium">USA</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl font-bold">🇦🇺</span>
                                <span className="ml-2 text-sm font-medium">Australia</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl font-bold">🇦🇪</span>
                                <span className="ml-2 text-sm font-medium">UAE</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl font-bold">🇩🇪</span>
                                <span className="ml-2 text-sm font-medium">Germany</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl font-bold">🇫🇷</span>
                                <span className="ml-2 text-sm font-medium">France</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl font-bold">🇳🇿</span>
                                <span className="ml-2 text-sm font-medium">New Zealand</span>
                            </div>
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>

                    </div>
                </div>
            </div>
        </section>
    )
}
