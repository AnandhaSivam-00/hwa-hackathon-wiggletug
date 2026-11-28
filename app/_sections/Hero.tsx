'use client'

import Image from "next/image";
import { useRef } from "react";
import { Button } from "../_components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, ChevronDownIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";

const HeroSection = () => {
    const heroSectionRef = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={heroSectionRef}
            className="relative dvh"
        >
            {/* Background video  */}
            <div className="w-full absolute inset-0 select-none bg-amber-100">
                {/* Video comes here */}
            </div>

            <div className="container-hd relative z-10 flex h-full flex-col justify-center pb-12 pt-12 lg:pb-0 lg:pt-0">
                <div className="max-w-xl">
                    {/* 1 · CTA buttons (top of stack, per sketch) */}
                    <div
                        data-hero-cta
                        className="flex flex-wrap items-center gap-x-6 gap-y-4"
                    >
                        <Button asChild size="lg">
                            <Link href="/product/wiggletug-core">
                                Shop WiggleTug Core - ₹6,500
                                <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2.2} />
                            </Link>
                        </Button>
                        <button
                            // onClick={() => scrollTo("#how-it-works")}
                            className="cursor-pointer text-[15px] font-semibold text-caramel underline-offset-4 transition-colors hover:text-forest hover:underline"
                        >
                            See How It Works
                        </button>
                    </div>

                    {/* 2 · Subheading */}
                    <p
                        data-hero-sub
                        className="mt-8 max-w-md text-lg leading-[1.65] text-forest-soft"
                    >
                        Meet WiggleTug: a motorized zig-zag rope and smart spring tug that
                        mimics real human play and paces enrichment all day.
                    </p>

                    {/* 3 · Main heading (bottom of stack, per sketch) */}
                    <h1
                        data-hero-head
                        className="mt-6 font-display text-[40px] leading-[1.08] text-forest sm:text-[50px] lg:text-[56px] xl:text-[64px]"
                    >
                        Keep Your Dog <span className="text-tangerine">Happily Busy</span>{" "}
                        for Hours-Even When You&apos;re Away.
                    </h1>

                    {/* Signature zig-zag accent */}
                    <svg
                        data-hero-zig
                        width="210"
                        height="12"
                        viewBox="0 0 210 12"
                        fill="none"
                        aria-hidden="true"
                        className="mt-6"
                    >
                        <path
                            d="M2 9 L19 3 L36 9 L53 3 L70 9 L87 3 L104 9 L121 3 L138 9 L155 3 L172 9 L189 3 L206 9"
                            stroke="#DDA15E"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray="12 10"
                            className="animate-zig"
                        />
                    </svg>
                </div>

                {/* Mobile / tablet visual */}
                <div
                    data-hero-img
                    className="mt-10 overflow-hidden rounded-3xl border border-sand shadow-soft lg:hidden"
                >
                    <Image
                        src="/images/hero.jpg"
                        alt="Golden retriever puppy tugging the WiggleTug rope beside the charcoal motor unit"
                        width={1080}
                        height={1080}
                        priority
                        className="h-auto w-full object-cover"
                    />
                </div>
            </div>

            {/* Scroll cue */}
            <button
                // onClick={() => scrollTo("#why")}
                aria-label="Scroll to next section"
                className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 cursor-pointer flex-col items-center gap-1 text-[11px] font-bold uppercase tracking-[0.2em] text-forest-soft/60 transition-colors hover:text-olive lg:flex"
            >
                Scroll
                <HugeiconsIcon
                    icon={ChevronDownIcon}
                    size={18}
                    className="animate-bounce-soft"
                />
            </button>
        </section>
    )
}

export default HeroSection