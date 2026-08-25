interface ArticleBannerProps {
    image: string;
    alt?: string;
    caption?: string;
}

const ArticleBanner = ({ image, alt = "", caption }: ArticleBannerProps) => {
    return (
        <div className="article-banner">
            <img src={image} alt={alt} className="article-banner__img" />
            {caption && <div className="article-banner__caption">{caption}</div>}
        </div>
    );
};

export default ArticleBanner;
