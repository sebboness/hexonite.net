import type { Metadata } from "next";
import News from "@/components/news/News";
import Sidebar from "@/components/sidebar/Sidebar";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
    return (
        <>
            <Sidebar />

            <div className="rightpart">
                <div className="rightpart_in">
                    <div className="section">
                        <div data-aos="fade-right" data-aos-duration="1200">
                            <div className="container">
                                <News />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
