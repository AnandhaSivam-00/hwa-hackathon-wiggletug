'use client'

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

import { Button } from "../ui/button";

import { useDependenciesCheck } from "@/lib/providers/DependenciesCheckProvider";
import { SHOP_LINKS, SOCIAL_LINKS, SUPPORT_LINKS } from "@/data/data";

const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);
    const footerHeadingRef = useRef<HTMLParagraphElement>(null);

    const [copyrightYear, setCopyrightYear] = useState<string | null>(null);

    const { isFontLoaded } = useDependenciesCheck();

    useGSAP(() => {
        if(!footerRef.current || !footerHeadingRef.current || !isFontLoaded) return;
        if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        gsap.set(footerHeadingRef.current, {
            yPercent: 100
        })

        gsap.to(footerHeadingRef.current, {
            yPercent: 0,
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 50%",
                end: "center 50%",
                markers: process.env.NEXT_PUBLIC_ENV === 'development' ? true : false,
                scrub: true,
                toggleActions: "play pause resume reset"
            }
        })

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 88%",
                once: true,
            },
            defaults: { ease: "power3.out" },
        });

        timeline
            .from("[data-footer-card]", {
                y: 48,
                opacity: 0,
                duration: 0.8,
            }, "-=0.55")
            .from("[data-footer-item]", {
                y: 18,
                opacity: 0,
                duration: 0.55,
                stagger: 0.08,
            }, "-=0.4");
    }, {
        scope: footerRef,
        dependencies: [isFontLoaded]
    });

    useEffect(() => {
        setCopyrightYear(new Date().getFullYear().toString())
    }, [])

    return (
        <footer
            ref={footerRef}
            className="relative min-h-dvh pb-6 pt-16 sm:pb-8 sm:pt-20 lg:pt-24"
        >
            <div className="u-container u-container--pad relative">
                <p
                    ref={footerHeadingRef}
                    aria-hidden="true"
                    className="text-wordmark pointer-events-none relative text-center select-none"
                >
                    Happy Dogs
                </p>

                <div
                    data-footer-card
                    className="relative flex flex-col -mt-5 rounded-2xl border border-border/70 bg-sand/60 shadow-soft backdrop-blur-lg"
                >
                    <div className="grid grid-cols-1 gap-8 px-5 pt-5 pb-3 sm:px-8 sm:pt-8 lg:grid-cols-12 lg:gap-10 lg:px-12 lg:pt-12">
                        <div className="relative flex w-full flex-col items-center justify-center gap-5 lg:col-span-4">
                            <Image
                                src="/wiggle-tug-icon.png"
                                alt="WiggleTug Core kit with motor unit, spring, rope and chew attachments"
                                width={100}
                                height={100}
                                sizes="(max-width: 1023px) 92vw, 30vw"
                                className="hidden h-auto w-full max-w-80 object-contain md:block"
                            />

                            <ul className="flex w-full flex-wrap items-center justify-center gap-2 sm:gap-3 lg:justify-between">
                                {SOCIAL_LINKS.map((item) => (
                                    <li key={item.id}>
                                        <Button
                                            size="default"
                                            variant="secondary"
                                            aria-label={item.label}
                                            className="p-2 sm:px-3 sm:py-2 hover:bg-forest-soft hover:text-background transition-all duration-500 ease-in-out"
                                        >
                                            <HugeiconsIcon
                                                icon={item.icon}
                                                strokeWidth={1.5}
                                            />
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
                            <nav
                                data-footer-item
                                aria-labelledby="footer-shop-heading"
                            >
                                <h2
                                    id="footer-shop-heading"
                                    className="font-display text-2xl text-forest"
                                >
                                    Shop
                                </h2>
                                <ul className="mt-5 flex flex-col gap-4">
                                    {SHOP_LINKS.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="nav-link-indicator text-base font-medium text-forest-soft transition-colors hover:text-olive"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <nav
                                data-footer-item
                                aria-labelledby="footer-support-heading"
                            >
                                <h2
                                    id="footer-support-heading"
                                    className="font-display text-2xl text-forest"
                                >
                                    Support
                                </h2>
                                <ul className="mt-5 flex flex-col gap-4">
                                    {SUPPORT_LINKS.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="nav-link-indicator text-base font-medium text-forest-soft transition-colors hover:text-olive"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <div
                                data-footer-item
                                className="flex w-full justify-center sm:col-span-2 sm:justify-end items-end"
                            >
                                <Button asChild size="lg" className="w-full sm:w-auto">
                                    <Link href="/product/wiggletug-core">
                                        Shop Now
                                        <HugeiconsIcon
                                            icon={ArrowUpRight01Icon}
                                            size={18}
                                            strokeWidth={2.2}
                                        />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-forest/10 h-0.5 w-8/10 self-center"></div>

                    <div className="px-5 py-5 sm:px-8 lg:px-12">
                        <p className="text-center text-sm font-normal text-forest-soft/80">
                            &copy; {copyrightYear ? `${copyrightYear} ` : null}Happy Dogs Robotics - All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;