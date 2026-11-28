import type { Metadata } from "next";
import { Open_Sans, Bubblegum_Sans } from "next/font/google";

import { cn } from "@/lib/utils";

import DependenciesCheckProvider from "@/lib/providers/DependenciesCheckProvider";
import PluginProvider from "@/lib/providers/PluginProvider";

import "./globals.css";
import Header from "./_components/layout/header";
import Footer from "./_components/layout/footer";


const opensans = Open_Sans({
    subsets: ["latin"],
    style: ["italic", "normal"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-open-sans",
    display: "swap"
});

const bubblegum = Bubblegum_Sans({
    subsets: ["latin"],
    style: ["normal"],
    weight: "400",
    variable: "--font-bubblegum",
    display: "swap"
});

export const metadata: Metadata = {
    title: {
        default: "Happy Dogs - WiggleTug | Automated Zig-Zag Tug & Chase",
        template: "%s · Happy Dogs",
    },
    description: "Meet WiggleTug: a motorized zig-zag rope and smart spring tug that mimics real human play and paces enrichment all day. Keep your dog happily busy for hours-even when you're away.",
    authors: [{ name: "Anandhasivam Sambathkumar" }],
    creator: "Anandhasivam Sambathkumar",
    publisher: "Anandhasivam Sambathkumar",
    alternates: {
        canonical: "/",
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            className={cn("h-full", "antialiased", opensans.variable, bubblegum.variable)}
            suppressHydrationWarning
        >
            <body className="w-auto h-auto relative">
                <DependenciesCheckProvider>
                    <PluginProvider>
                        <Header />
                        <main className="w-auto h-auto relative overflow-x-hidden overflow-y-auto">
                            {children}
                        </main>
                        <Footer />
                    </PluginProvider>
                </DependenciesCheckProvider>
            </body>
        </html>
    );
}