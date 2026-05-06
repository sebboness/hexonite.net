import Home from "@/components/home/Home";
import Sidebar from "@/components/sidebar/Sidebar";

export default function HomePage() {
    return (
        <>
            <Sidebar />

            <div className="rightpart">
                <div className="rightpart_in">
                    <div className="section">
                        <div data-aos="fade-right" data-aos-duration="1200">
                            <Home />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
