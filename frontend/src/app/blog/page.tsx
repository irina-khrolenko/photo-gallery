import { InstagramGallery } from "@/components";
import { fetchInstagramFeeds } from "@/services/InstagramPostsService";
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

export default async function Blog() {
  const feeds = await fetchInstagramFeeds();
  return (
    <div className="p-20">
      <InstagramGallery postsData={feeds} />
    </div>
  );
}

