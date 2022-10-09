import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Traversy Media | Learn Web Development</title>
      </Head>
      <section className="text-md">
        <p>
          A passionate Software Developer 🚀 having an experience of building
          Web and Mobile applications with JavaScript / Reactjs / Nodejs / React
          Native / Angular and some other cool libraries and frameworks.
        </p>
        <p>
          (This is my workspace for building clones of popular websites using{" "}
          <a
            className="text-blue hover:underline"
            href="https://nextjs.org"
            target="_blank"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            className="text-blue hover:underline"
            href="https://tailwindcss.com"
            target="_blank"
          >
            tailwindcss
          </a>
          .)
        </p>
      </section>
    </Layout>
  );
}
