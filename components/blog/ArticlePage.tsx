import blogData from "@/data/blogData";
import ArticleHero from "./ArticleHero";
import ArticleBanner from "./ArticleBanner";

interface ArticlePageProps {
    id: string;
}

const ArticlePage = ({ id }: ArticlePageProps) => {
    const article = blogData.find((a) => a.id === id);
    if (!article) return null;

    return (
        <>
            <ArticleHero
                author={article.author}
                label={article.label}
                title={article.title}
                date={article.date}
                readTimeMinutes={article.readTimeMinutes}
                heroImage={article.heroImage}
            />
            {article.content.map((block, index) =>
                block.type === "banner" ? (
                    <ArticleBanner key={index} image={block.image} alt={block.alt} caption={block.caption} />
                ) : (
                    <div className="section" key={index}>
                        <div data-aos="fade-right" data-aos-duration="1200">
                            <div className="container">
                                <div
                                    className="article-body"
                                    dangerouslySetInnerHTML={{ __html: block.html }}
                                />
                            </div>
                        </div>
                    </div>
                )
            )}
        </>
    );
};

export default ArticlePage;
