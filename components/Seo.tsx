import Head from "next/head";

interface SeoProps {
    pageTitle?: string;
}

const Seo = ({ pageTitle }: SeoProps) => {
    return (
        <Head>
            <title>
                {pageTitle ? `${pageTitle} || Hexonite` : "Hexonite - by Sebastian Stefaniuk"}
            </title>
        </Head>
    );
};

export default Seo;
