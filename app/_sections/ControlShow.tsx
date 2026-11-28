'use client'

import ControlBox from '@/app/_components/control-box'

const ControlShowSection = () => {
    return (
        <section
            id="how-it-works"
            className="relative isolate flex min-h-dvh w-full flex-col justify-center overflow-hidden bg-forest py-20 text-cream sm:py-24 lg:py-28"
        >
            <div className="u-container u-container--pad relative w-full flex flex-col lg:flex-row gap-10 lg:gap-0">
                <div className="lg:h-full lg:max-w-4/10 container-title flex flex-col item-start justify-start gap-4 text-center">
                    <h2 className="text-cream text-center lg:text-left">
                        <span className="text-tangerine">Engineered</span> for Heavy Tuggers &amp; Curious Paws
                    </h2>
                    <p className="text-cream/60 text-center lg:text-left">
                        Try the live simulator below. Tap the tactile control buttons to switch modes,
                        cycle the daily timer, or engage the triple-press paw lock.
                    </p>
                </div>

                <div className='h-full w-full'>
                    <ControlBox />
                </div>
            </div>
        </section>
    )
}

export default ControlShowSection