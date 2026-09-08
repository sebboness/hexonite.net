import Home from "@/components/home/Home";
import LatestPosts from "@/components/blog/LatestPosts";
import Seo from "@/components/Seo";
import Sidebar from "@/components/sidebar/Sidebar";

export default function HomePage() {
    return (
        <>
            <Seo pageTitle="" />

            <Sidebar />

            <div className="rightpart">
                <div className="rightpart_in">
                    <div className="section">
                        <div data-aos="fade-right" data-aos-duration="1200">
                            <Home />
                        </div>
                    </div>

                    <div className="section">
                        <div data-aos="fade-right" data-aos-duration="1200">
                            <LatestPosts />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
