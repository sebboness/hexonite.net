import Image from "next/image";

interface ArticleBannerProps {
    image: string;
    alt?: string;
    caption?: string;
}

const ArticleBanner = ({ image, alt = "", caption }: ArticleBannerProps) => {
    return (
        <div className="article-banner">
            <Image
                src={image}
                alt={alt}
                fill
                sizes="(max-width: 1200px) 100vw, 900px"
                className="article-banner__img"
            />
            {caption && <div className="article-banner__caption">{caption}</div>}
        </div>
    );
};

export default ArticleBanner;
