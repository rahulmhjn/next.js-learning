import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          A passionate Software Developer 🚀 having an experience of building
          Web and Mobile applications with JavaScript / Reactjs / Nodejs / React
          Native / Angular and some other cool libraries and frameworks.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn" target="_blank">
            our Next.js tutorial
          </a>
          .)
        </p>
      </section>
    </Layout>
  );
}
