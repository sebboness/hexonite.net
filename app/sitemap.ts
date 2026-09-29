import type { MetadataRoute } from "next";
import blogData from "@/data/blogData";

const baseUrl = "https://www.hexonite.net";

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = ["", "/sebastian", "/services", "/contact", "/blog"].map((path) => ({
        url: `${baseUrl}${path}`,
    }));

    const articles = blogData.map((a) => ({
        url: `${baseUrl}/blog/${a.id}`,
        lastModified: new Date(a.publishedAt),
    }));

    return [...pages, ...articles];
}
