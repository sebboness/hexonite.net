import type { Metadata } from "next";
import Service from "@/components/service";
import Sidebar from "@/components/sidebar/Sidebar";

export const metadata: Metadata = { title: "Service" };

export default function ServicesPage() {
    return (
        <>
            <Sidebar />

            <div className="rightpart">
                <div className="rightpart_in">
                    <div className="section">
                        <div data-aos="fade-right" data-aos-duration="1200">
                            <Service />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
