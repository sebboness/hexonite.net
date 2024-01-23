import Head from "next/head";

const Seo = ({ pageTitle }) => {
  return (
    <Head>
      <title>
        {(pageTitle ? `${pageTitle} || Hexonite` : "Hexonite") + " - Softare Services"}
      </title>
    </Head>
  );
};

export default Seo;
