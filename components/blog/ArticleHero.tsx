import React from "react";

interface ArticleHeroProps {
    label: string;
    title: string;
    date: string;
    readTimeMinutes: number;
    heroImage?: string;
}

const ArticleHero = ({ label, title, date, readTimeMinutes, heroImage }: ArticleHeroProps) => {
    return (
        <div
            className="article-hero"
            style={heroImage ? { backgroundImage: `url(${heroImage})` } : undefined}
        >
            <div className="article-hero__overlay" />
            <div className="container">
                <div className="article-hero__content">
                    <span className="article-hero__label">{label}</span>
                    <h1 className="article-hero__title">{title}</h1>
                    <div className="article-hero__meta">
                        <span>{date}</span>
                        <span className="article-hero__sep">·</span>
                        <span>{readTimeMinutes} min read</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleHero;
