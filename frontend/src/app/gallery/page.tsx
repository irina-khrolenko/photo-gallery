import { GalleryPage } from "@/components";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Gallery",
    description: "Welcome to Gallery",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

const Gallery = (): JSX.Element => {
  return (
    <>
      <GalleryPage />
    </>
  );
};

export default Gallery;
