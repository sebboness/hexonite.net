import Link from "next/link";
import blogData from "@/data/blogData";

const BlogList = () => {
    const posts = [...blogData].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    return (
        <div className="section">
            <div data-aos="fade-right" data-aos-duration="1200">
                <div className="container">
                    <div className="blog">
                        <div className="title">
                            <div className="title_flex">
                                <div className="left">
                                    <span>Blog</span>
                                    <h3>Latest posts</h3>
                                </div>
                            </div>
                        </div>
                        <div className="blog-list">
                            {posts.map((post) => (
                                <Link key={post.id} href={`/blog/${post.id}`} className="blog-list__card">
                                    {post.heroImage && (
                                        <div
                                            className="blog-list__image"
                                            style={{ backgroundImage: `url(${post.heroImage})` }}
                                        />
                                    )}
                                    <div className="blog-list__body">
                                        <span className="blog-list__label">{post.label}</span>
                                        <h3 className="blog-list__title">{post.title}</h3>
                                        <p className="blog-list__description">{post.description}</p>
                                        <div className="blog-list__meta">
                                            <span>{post.date}</span>
                                            <span className="blog-list__sep">•</span>
                                            <span>{post.readTimeMinutes} min read</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogList;
