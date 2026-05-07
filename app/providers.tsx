'use client'

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeSwitch from "@/components/switch/ThemeSwitch";

export default function Providers({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, []);

    return (
        <div className="all_wrap">
            <ThemeProvider attribute="class">
                <ThemeSwitch />
                {children}
            </ThemeProvider>
            <ToastContainer />
        </div>
    );
}
