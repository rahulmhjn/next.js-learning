import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
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
      <section className="text-md pt-[1px]">
        <h2 className="text-lg my-4 mx-0">Blog</h2>
        <ul className="m-0 p-0 list-none">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mt-0 mx-0 mb-[1.25rem] text-blue" key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className="text-[#666]">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
