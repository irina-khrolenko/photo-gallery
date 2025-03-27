"use client";

import useMainDataStore from "@/stores/MainDataStore";
import { ChatMessage, GalleryImages, GalleryPagination, Tags } from "../..";
import useCollectionsStore, {
  CollectionsData,
} from "@/stores/CollectionsStore";
import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";

export const GalleryPage = ({
  collectionsData,
}: {
  collectionsData?: CollectionsData;
}) => {
  const t = useTranslations("Messages");
  const locale = useLocale();
  const collectionsStore = useCollectionsStore((state) => state);
  const { mainAvatar } = useMainDataStore((state) => state);

  const fetchImages = async () => {
    if (typeof collectionsStore.fetchImages === "function") {
      try {
        await collectionsStore.fetchImages(locale);
      } catch (error) {
        console.error("Failed to set main data", error);
      }
    }
  };

  useEffect(() => {
    if (collectionsData) {
      if (
        typeof collectionsStore.setCollections === "function" &&
        collectionsData.collections
      ) {
        try {
          collectionsStore.setCollections(collectionsData.collections);
        } catch (error) {
          console.error("Failed to set main data", error);
        }
      }
      if (
        typeof collectionsStore.setTags === "function" &&
        collectionsData.tags
      ) {
        try {
          collectionsStore.setTags(collectionsData.tags);
        } catch (error) {
          console.error("Failed to set main data", error);
        }
      }
      if (
        typeof collectionsStore.setImages === "function" &&
        collectionsData.images
      ) {
        try {
          collectionsStore.setImages(collectionsData.images);
        } catch (error) {
          console.error("Failed to set main data", error);
        }
      }
    }
  }, [collectionsData]);

  useEffect(() => {
    fetchImages();
  }, [
    collectionsStore.tags,
    collectionsStore.imagesPagination.page,
    collectionsStore.imagesPagination.pageSize,
  ]);

  const handleChangePage = (page: number) => {
    collectionsStore.setImagesPagination({
      ...collectionsStore.imagesPagination,
      page,
    });
  };
  const handleChangePageSize = (pageSize: number) => {
    collectionsStore.setImagesPagination({
      ...collectionsStore.imagesPagination,
      pageSize,
    });
  };

  return (
    <div className="p-20 pt-0">
      <ChatMessage mainAvatar={mainAvatar} messagesList={[t("hashTags")]} />
      <Tags
        tags={collectionsStore.tags}
        changeTagsSelection={collectionsStore.changeTagsSelection}
        collections={collectionsStore.collections}
      />
      <GalleryPagination
        pageSize={collectionsStore.imagesPagination.pageSize}
        pagesCount={collectionsStore.imagesPagination.pageCount}
        currentPage={collectionsStore.imagesPagination.page}
        handleChangePage={handleChangePage}
        handleChangePageSize={handleChangePageSize}
      />
      <GalleryImages images={collectionsStore.images} />
      <GalleryPagination
        pageSize={collectionsStore.imagesPagination.pageSize}
        pagesCount={collectionsStore.imagesPagination.pageCount}
        currentPage={collectionsStore.imagesPagination.page}
        handleChangePage={handleChangePage}
        handleChangePageSize={handleChangePageSize}
      />
    </div>
  );
};
