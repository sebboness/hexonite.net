import type { Metadata } from "next";
import Sidebar from "@/components/sidebar/Sidebar";
import BlogList from "@/components/blog/BlogList";

export const metadata: Metadata = {
    title: "Blog",
    description: "Thoughts and stories behind the projects I've built.",
};

export default function BlogPage() {
    return (
        <>
            <Sidebar />
            <div className="rightpart">
                <div className="rightpart_in">
                    <BlogList />
                </div>
            </div>
        </>
    );
}
