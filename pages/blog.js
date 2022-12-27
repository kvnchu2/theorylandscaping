import Link from "next/link";
import Head from "next/head";
import { getAllPosts } from "../lib/contentful";

export default function Blog({ posts }) {
  return (
    <div className="yes">

        {posts.map((post) => (
        <div className="yessir">
          <p>{post.title}</p>
          <p>{post.subtitle}</p>
          <p>{post.sys.publishedAt}</p>
        </div>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

