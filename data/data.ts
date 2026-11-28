import type { BtnId } from "@/lib/types";
import {
    AlarmClockIcon,
    ArrowExpand01Icon,
    BatteryCharging01Icon,
    DashboardSpeed01Icon,
    Facebook02Icon,
    InstagramIcon,
    LockKeyholeIcon,
    Magnet01Icon,
    NewTwitterIcon,
    PowerIcon,
    PuzzleIcon,
    SpiralsIcon,
    YoutubeIcon,
} from "@hugeicons/core-free-icons";

export const BASE_PRICE = 6500;
export const FREE_EXPRESS_THRESHOLD = 7500;
export const EXPRESS_FEE = 450;
export const PROMO_CODES: Record<string, number> = {
    GOODBOY10: 0.1,
    HAPPY10: 0.1,
};

export type StrengthId = "standard" | "heavy";
export type RopeId = "apartment" | "extended";
export type AddonId = "chew-pack" | "rope-kit" | "suction-pack";

export const STRENGTH_OPTIONS: {
    id: StrengthId;
    name: string;
    badge?: string;
    weight: string;
    spring: string;
    delta: number;
}[] = [
        {
            id: "standard",
            name: "Standard Tugger",
            badge: "Most Popular",
            weight: "Under 25 kg · Small & medium breeds",
            spring: "Balanced medium coil",
            delta: 0,
        },
        {
            id: "heavy",
            name: "Heavy Power Tugger",
            weight: "25 kg+ · Large / strong breeds",
            spring: "High-tensile reinforced coil",
            delta: 750,
        },
    ];

export const ROPE_OPTIONS: {
    id: RopeId;
    name: string;
    detail: string;
    delta: number;
}[] = [
        {
            id: "apartment",
            name: "Apartment Standard",
            detail: "1.2 m braided safety rope",
            delta: 0,
        },
        {
            id: "extended",
            name: "Living Room Extended",
            detail: "2.0 m rope + extension coupler sleeve",
            delta: 600,
        },
    ];

export const ADDONS: {
    id: AddonId;
    name: string;
    detail: string;
    price: number;
    image: string;
}[] = [
        {
            id: "chew-pack",
            name: "Extra Chew Pack",
            detail: "Mint Dental Bone + Ribbed Orange Ball",
            price: 900,
            image: "/images/addon-chew.jpg",
        },
        {
            id: "rope-kit",
            name: "Rope Extension Kit",
            detail: "+1.0 m braided rope + connector sleeve",
            price: 700,
            image: "/images/addon-rope.jpg",
        },
        {
            id: "suction-pack",
            name: "Suction Cup 4-Pack",
            detail: "Replacement floor & wall mounts",
            price: 800,
            image: "/images/addon-suction.jpg",
        },
    ];

export const CORE_IMAGE = "/images/gallery-studio.jpg";

export function corePrice(strength: StrengthId, rope: RopeId): number {
    return (
        BASE_PRICE +
        (STRENGTH_OPTIONS.find((s) => s.id === strength)?.delta ?? 0) +
        (ROPE_OPTIONS.find((r) => r.id === rope)?.delta ?? 0)
    );
}

export const strengthName = (id: StrengthId) =>
    STRENGTH_OPTIONS.find((s) => s.id === id)?.name ?? id;
export const ropeName = (id: RopeId) =>
    ROPE_OPTIONS.find((r) => r.id === id)?.name ?? id;
export const addonById = (id: AddonId) => ADDONS.find((a) => a.id === id)!;

export const GALLERY = [
    {
        src: "/images/gallery-studio.jpg",
        label: "Multi-Angle Engineering Showcase",
        alt: "WiggleTug Core full kit - motor unit, spring, zig-zag rope, mint bone and ribbed ball",
    },
    {
        src: "/images/gallery-top.jpg",
        label: "Top-Down Control Panel & Box-Shaped Spring Bay",
        alt: "Top-down view of the OLED control panel, five tactile buttons and wide spring bay",
    },
    {
        src: "/images/gallery-side.jpg",
        label: "Side Profile & Manual Flip-Lock Suction Cups",
        alt: "Side profile of the trapezoid base with orange flip-lock suction levers",
    },
    {
        src: "/images/gallery-attachments.jpg",
        label: "Modular Sleeves, Chew Bone, Ball & Extension Coupler",
        alt: "Flat lay of rope sleeves, mint chew bone, ribbed orange ball and extension rope",
    },
];

export type WhyIcon = "wave" | "spring" | "timer";
export type WhyIllustrationId = "zigzag" | "spring" | "rhythm";

export const WHY_CARDS: {
    icon: WhyIcon;
    title: string;
    body: string;
    illustration: WhyIllustrationId;
}[] = [
        {
            icon: "wave",
            title: "Prey-Like Zig-Zag Motion",
            body: "Instead of rolling aimlessly into walls, the wide box-shaped sweep bay oscillates the braided rope side-to-side like a real human handler.",
            illustration: "zigzag",
        },
        {
            icon: "spring",
            title: "Smart Toggleable Spring Tug",
            body: "Turn Spring Mode ON for live expand-and-contract tug-of-war resistance, or toggle it OFF for pure chase and chew sessions.",
            illustration: "spring",
        },
        {
            icon: "timer",
            title: "All-Day Enrichment Pacing",
            body: "The Auto-Day timer alternates gentle play with calm rest breaks across your 8-hour workday - engaged, never overstimulated.",
            illustration: "rhythm",
        },
    ];

export const HARDWARE = [
    {
        icon: "suction",
        title: "Military-Grade Manual Suction Cups",
        body: "4 corner bases with flip-lock levers grip tile, hardwood, or smooth walls against intense pulling.",
        stat: "40 kg hold per cup",
    },
    {
        icon: "bay",
        title: "Wide Box-Shaped Sweep Bay",
        body: "Generous rectangular exit channel allows wide left-to-right spring and rope travel without pinching.",
        stat: "22 cm wide channel",
    },
    {
        icon: "battery",
        title: "2–3 Day Battery + USB-C",
        body: "No disposable batteries - recharge with any standard phone charger.",
        stat: "USB-C 5V / 2A",
    },
    {
        icon: "modular",
        title: "Modular Sleeve & Extender System",
        body: "Slide cylindrical sleeves onto the rope to clip in chew bones, ribbed balls, or link a second rope for larger rooms.",
        stat: "3 sleeves included",
    },
];

export const TIMELINE = [
    {
        time: "9:00 AM",
        title: "Morning Chase",
        desc: "Gentle zig-zag tease wakes your dog for a 10-minute chase session.",
        icon: "sun",
    },
    {
        time: "11:30 AM",
        title: "Midday Tug-of-War",
        desc: "Spring mode engages - your dog bites the ribbed ball and tugs against realistic resistance.",
        icon: "spring",
    },
    {
        time: "2:30 PM",
        title: "Afternoon Nap",
        desc: "WiggleTug automatically powers down for a calm, restorative nap.",
        icon: "nap",
    },
    {
        time: "5:30 PM",
        title: "You Come Home",
        desc: "A happy, mentally fulfilled dog - and zero chewed furniture.",
        icon: "home",
    },
];

export const FAQS = [
    {
        q: "Will the suction cups hold against a strong puller?",
        a: "Each military-grade cup is rated to a 40 kg static hold on clean, smooth surfaces. Flip the four orange levers down and the trapezoid base stays planted through intense tug sessions. For the strongest pullers, choose the Heavy Power Tugger tier and mount on tile, sealed hardwood, or a smooth wall.",
    },
    {
        q: "Is it safe to leave my dog alone with WiggleTug?",
        a: "WiggleTug is designed for solo play: the Auto-Day timer paces sessions with rest breaks, the triple-press paw lock blocks accidental button presses, and attachments clip into locking sleeves with no small detachable parts. We recommend one supervised introduction session so your dog learns the rope comes from the bay, not the housing.",
    },
    {
        q: "What if my dog is an aggressive chewer?",
        a: "The braided cotton rope is machine-washable and the reinforced coil on the Heavy Power Tugger tier is built for 25 kg+ breeds. Chew attachments are consumables by design - swap in the Extra Chew Pack whenever the mint bone or ribbed ball shows heavy wear.",
    },
    {
        q: "How long does the battery last?",
        a: "A typical Auto-Day schedule runs 2–3 days per charge. Top up with any standard USB-C phone charger (5V/2A) - a full charge takes about 3 hours, and the OLED shows live battery status.",
    },
    {
        q: "Can I use it on carpet?",
        a: "Suction cups need a smooth, non-porous surface, so carpet alone won't hold. Use the included wall-mount pads on a smooth wall or window, or place the unit on a tile or hardwood zone. The Replacement Suction Cup 4-Pack includes both floor and wall mounts.",
    },
    {
        q: "What's the return policy?",
        a: "Every WiggleTug ships free with a 30-day “Happy Dog” guarantee - if your dog doesn't love it, send it back for a full refund, no questions asked. The motor and spring carry a 1-year warranty.",
    },
];

export const IN_THE_BOX = [
    "WiggleTug Motor Unit",
    "4 Military-Grade Manual Suction Cups",
    "1.2 m Braided Safety Rope",
    "3 Cylindrical Sleeves",
    "Mint Chew Bone",
    "Ribbed Orange Ball",
    "USB-C Charging Cable",
];

export const SPECS: [string, string][] = [
    ["Dimensions", "38 × 26 × 18 cm (trapezoid base)"],
    ["Weight", "2.9 kg with suction bases"],
    ["Battery life", "2–3 days on Auto-Day pacing"],
    ["Charging input", "USB-C 5V / 2A · ~3 h full charge"],
    ["Suction hold rating", "40 kg per cup on smooth surfaces"],
    ["Sweep bay width", "22 cm box-shaped channel"],
    ["Rope", "Machine-washable braided cotton"],
];

export const SHIPPING_COPY =
    "Free standard shipping across India (3–5 business days), with Express Next-Day available at checkout. Every order includes the 30-day “Happy Dog” return guarantee and a 1-year motor & spring warranty. Returns are free - we email a prepaid pickup label.";


export const TIMERS = ["15M", "30M", "60M", "AUTO"] as const;
export const SPEEDS = [
    { name: "GENTLE", level: 1, dur: "1.7s" },
    { name: "ACTIVE", level: 2, dur: "1.05s" },
    { name: "PREY-CHASE", level: 3, dur: "0.6s" },
] as const;

export const BUTTONS = [
    { id: "power", label: "Power", icon: PowerIcon },
    { id: "lock", label: "Lock", icon: LockKeyholeIcon },
    { id: "timer", label: "Timer", icon: AlarmClockIcon },
    { id: "spring", label: "Spring", icon: SpiralsIcon },
    { id: "speed", label: "Speed", icon: DashboardSpeed01Icon },
] as const;

export const INFO: Record<BtnId, { title: string; desc: string }> = {
    power: {
        title: "Power",
        desc: "Wakes WiggleTug with a friendly greeting and lights up the live status OLED.",
    },
    lock: {
        title: "Lock · 3× press",
        desc: "Paw-proof lock guards every button against accidental presses. Three quick presses unlock it.",
    },
    timer: {
        title: "Timer",
        desc: "Cycles 15m / 30m / 60m / Auto-Day - calm rest breaks between sessions keep your dog engaged across an 8-hour workday.",
    },
    spring: {
        title: "Spring",
        desc: "Toggles the coil's live tug resistance: ON for expand-and-contract tug-of-war, OFF for fixed-rope chase and chew.",
    },
    speed: {
        title: "Speed",
        desc: "Sets zig-zag oscillation and vibration intensity - Gentle, Active, or full Prey-Chase.",
    },
};

export const HARDWARE_ICONS = {
    suction: Magnet01Icon,
    bay: ArrowExpand01Icon,
    battery: BatteryCharging01Icon,
    modular: PuzzleIcon,
} as const;

export const BAR_HEIGHTS = [45, 70, 100, 78, 58];

export const SHOP_LINKS = [
    { label: "WiggleTug Core", href: "/product/wiggletug-core" },
    { label: "Chew Attachments", href: "/product/wiggletug-core#addons" },
    { label: "Rope Extension Kits", href: "/product/wiggletug-core#addons" },
    { label: "Replacement Suction Cups", href: "/product/wiggletug-core#addons" },
] as const;

export const SUPPORT_LINKS = [
    { label: "Setup & Suction Guide", href: "#setup-suction-guide" },
    { label: "Triple-Press Lock Manual", href: "#triple-press-lock" },
    { label: "Battery & USB-C Care", href: "#battery-care" },
    { label: "Warranty and Returns", href: "#warranty-returns" },
] as const;

export const SOCIAL_LINKS = [
    { id: "facebook", label: "Facebook", href: "#facebook-link", icon: Facebook02Icon },
    { id: "insta", label: "Instagran", href: "#instagram-link", icon: InstagramIcon },
    { id: "x", label: "X", href: "#twitter-link", icon: NewTwitterIcon },
    { id: "youtube", label: "YouTube", href: "#youtube-link", icon: YoutubeIcon },
] as const;