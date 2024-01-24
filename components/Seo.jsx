import Head from "next/head";

const Seo = ({ pageTitle }) => {
  return (
    <Head>
      <title>
        {(pageTitle ? `${pageTitle} || Hexonite` : "Hexonite - by Sebastian Stefaniuk")}
      </title>
    </Head>
  );
};

export default Seo;
