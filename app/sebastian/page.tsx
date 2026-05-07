import type { Metadata } from "next";
import About from "@/components/about";
import Sidebar from "@/components/sidebar/Sidebar";

export const metadata: Metadata = { title: "About" };

export default function SebastianPage() {
    return (
        <>
            <Sidebar />

            <div className="rightpart">
                <div className="rightpart_in">
                    <div className="section">
                        <div data-aos="fade-right" data-aos-duration="1200">
                            <About />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
