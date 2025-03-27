import { GalleryPage } from "@/components";
import { fetchImages, fetchTags } from "@/services/CollectionsService";
import { ImagePlainData } from "@/stores/CollectionsStore";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Gallery",
    description: "Welcome to Gallery",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function Gallery({
  params,
}: {
  params: { category: string };
}) {
  const locale = await getLocale();
  const tags = await fetchTags(locale, params?.category);
  const imagesData = await fetchImages(locale, { page: 1, pageSize: 10 });

  return (
    <>
      <GalleryPage
        collectionsData={{
          collections: [],
          tags,
          images: imagesData?.images as ImagePlainData[],
          imagesPagination: imagesData?.imagesPagination,
        }}
      />
    </>
  );
}
