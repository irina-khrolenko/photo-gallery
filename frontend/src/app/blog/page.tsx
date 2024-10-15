import { InstagramGallery } from "@/components";
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
  return (
    <div className="p-20">
      <InstagramGallery />
    </div>
  );
}

