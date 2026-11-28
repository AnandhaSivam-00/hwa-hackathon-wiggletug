import ControlShowSection from "./_sections/ControlShow";
import HeroSection from "./_sections/Hero";
import TimelineSection from "./_sections/Timeline";
import WhySection from "./_sections/Why";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <WhySection />
            <ControlShowSection />
        </>
    );
}