"use client";
import useInstagramPostsStore from "@/stores/InstagramPostsStore";
import { useEffect } from "react";

export const InstagramGallery = () => {
  const { posts, setPosts } = useInstagramPostsStore((state) => state);

  const fetchData = async () => {
    if (typeof setPosts === "function") {
      try {
        await setPosts();
      } catch (error) {
        console.error("Failed to set main data", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-between p-20">
        {posts?.map((post) => (
          <div className="border rounded-lg shadow-lg p-1 w-full md:w-1/4 min-w-[270px]">
            <iframe
              width="100%"
              height="auto"
              src={post.url}
              allowFullScreen
              scrolling="no"
              className="overflow-hidden rounded-lg"
              style={{ aspectRatio: post.aspectRatio }}
            ></iframe>
          </div>
        ))}
      </div>
    </>
  );
};
