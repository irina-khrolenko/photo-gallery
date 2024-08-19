import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blog",
    description: "Welcome to Blog",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

const Blog = (): JSX.Element => {
  return <h1>Blog</h1>;
};

export default Blog;
