import blogData from "@/data/blogData";
import ArticleHero from "./ArticleHero";

interface ArticlePageProps {
    id: string;
}

const ArticlePage = ({ id }: ArticlePageProps) => {
    const article = blogData.find((a) => a.id === id);
    if (!article) return null;

    return (
        <>
            <ArticleHero
                label={article.label}
                title={article.title}
                date={article.date}
                readTimeMinutes={article.readTimeMinutes}
                heroImage={article.heroImage}
            />
            <div className="section">
                <div data-aos="fade-right" data-aos-duration="1200">
                    <div className="container">
                        <div
                            className="article-body"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArticlePage;
