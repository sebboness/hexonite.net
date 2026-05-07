import type { Metadata } from "next";
import Sidebar from "@/components/sidebar/Sidebar";
import ArticlePage from "@/components/blog/ArticlePage";
import blogData from "@/data/blogData";

const article = blogData.find((a) => a.id === "lyricsray")!;

export const metadata: Metadata = {
    title: article.title,
    description: article.description,
    openGraph: {
        title: article.title,
        description: article.description,
        type: "article",
        publishedTime: article.publishedAt,
        authors: [article.author],
        ...(article.heroImage ? { images: [article.heroImage] } : {}),
    },
    twitter: {
        card: "summary_large_image",
        title: article.title,
        description: article.description,
        ...(article.heroImage ? { images: [article.heroImage] } : {}),
    },
};

export default function LyricsRayPage() {
    return (
        <>
            <Sidebar />
            <div className="rightpart">
                <div className="rightpart_in">
                    <ArticlePage id="lyricsray" />
                </div>
            </div>
        </>
    );
}
