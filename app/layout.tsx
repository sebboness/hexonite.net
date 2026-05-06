import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "./providers";

const interTight = Inter_Tight({
    subsets: ["latin"],
    variable: "--font-inter-tight",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Hexonite - by Sebastian Stefaniuk",
        template: "%s || Hexonite",
    },
    description: "Software engineer with a good eye for design, attention to detail, and a SOLID understanding of how good code runs your business",
    metadataBase: new URL("https://www.hexonite.net"),
    openGraph: {
        type: "website",
        url: "https://www.hexonite.net/",
        title: "Hexonite.net - by Sebastian Stefaniuk",
        description: "Software engineer with a good eye for design, attention to detail, and a SOLID understanding of how good code runs your business",
        images: [{ url: "/img/landing-image.jpg" }],
    },
    twitter: {
        card: "summary_large_image",
        site: "https://www.hexonite.net/",
        title: "Hexonite.net - by Sebastian Stefaniuk",
        description: "Software engineer with a good eye for design, attention to detail, and a SOLID understanding of how good code runs your business",
        images: ["https://www.hexonite.net/img/landing-image.jpg"],
    },
    icons: {
        apple: "/img/logo/favicon-180.png",
        icon: [
            { url: "/favicon.ico" },
            { url: "/img/logo/favicon-16.png", sizes: "16x16", type: "image/png" },
            { url: "/img/logo/favicon-32.png", sizes: "32x32", type: "image/png" },
            { url: "/img/logo/favicon-96.png", sizes: "96x96", type: "image/png" },
            { url: "/img/logo/favicon-192.png", sizes: "192x192", type: "image/png" },
        ],
    },
    other: {
        "msapplication-TileColor": "#00a7ff",
    },
    robots: "noindex, follow",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#00a7ff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={interTight.variable} suppressHydrationWarning>
            <body>
                <Providers>{children}</Providers>
                <Script src="https://js.hcaptcha.com/1/api.js" strategy="lazyOnload" />
                <Script
                    src="https://kit.fontawesome.com/67e614e582.js"
                    crossOrigin="anonymous"
                    strategy="lazyOnload"
                />
            </body>
        </html>
    );
}
