import { WHY_CARDS } from '@/data/data'
import {
    ScheduledRhythmVisual,
    TensionSpringVisual,
    ZigZagRopeVisual,
} from '@/app/_assets/Illustrations'
import { AudioWave01Icon, SpiralsIcon, TimeScheduleIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react'

const ICONS = {
    wave: AudioWave01Icon,
    spring: SpiralsIcon,
    timer: TimeScheduleIcon,
} as const;

const ILLUSTRATIONS = {
    zigzag: ZigZagRopeVisual,
    spring: TensionSpringVisual,
    rhythm: ScheduledRhythmVisual,
} as const;

const WhySection = () => {
    return (
        <section className='section-container min-dvh flex flex-col items-center justify-center gap-5 md:gap-10 py-20 sm:py-24 lg:py-28'>
            <div className='container-title flex flex-col items-center justify-center gap-5'>
                <h2 className='text-center'>Built for Real Dog Instincts, <span className="text-tangerine">Not 5-Minute Distractions</span></h2>
                <p className='text-center text-forest-soft'>
                    Motorized balls get stuck behind couches. Static suction toys get abandoned the second the
                    rope goes limp. WiggleTug uses dynamic human-motion kinetics to sustain curiosity and exercise
                    natural canine prey drive safely.
                </p>
            </div>

            <div className='grid grid-rows-auto sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6'>
                {WHY_CARDS.map((card, index) => {
                    const Illustration = ILLUSTRATIONS[card.illustration];

                    return (
                        <article
                            key={card.title}
                            className={`group bg-card p-5 rounded-lg transition-all shadow-[0_8px_24px_rgba(40,54,24,0.06)] hover:shadow-[0_12px_32px_rgba(40,54,24,0.10)] ${index === 2 ? "sm:col-span-2 lg:col-span-1 flex flex-col sm:flex-row lg:flex-col justify-between" : "flex flex-col justify-between"}`}
                        >
                            <div>
                                <span className="grid size-12 place-items-center rounded-md bg-honey/25 text-caramel group-hover:scale-105 transition-transform">
                                    <HugeiconsIcon
                                        icon={ICONS[card.icon]}
                                        size={24}
                                        strokeWidth={1.9}
                                    />
                                </span>
                                <h3 className="mt-5 font-display text-2xl leading-[1.25] text-forest">
                                    {card.title}
                                </h3>
                                <p className="mt-2 flex-1 text-[15px] leading-[1.6] text-forest-soft">
                                    {card.body}
                                </p>
                                <div className="mt-6">
                                    <Illustration />
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    )
}

export default WhySection