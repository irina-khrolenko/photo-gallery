"use client";

import useMainDataStore from "@/stores/MainDataStore";
import { ChatMessage, GalleryImages, GalleryPagination, Tags } from "../..";
import useCollectionsStore from "@/stores/CollectionsStore";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const GalleryPage = () => {
  const t = useTranslations("Messages");
  const locale = useLocale();
  const pathname = usePathname();
  const collectionsStore = useCollectionsStore((state) => state);
  const { setMainData, mainAvatar } = useMainDataStore((state) => state);
  const fetchData = async () => {
    let category = "";
    collectionsStore.clearData();
    if (!pathname.endsWith("gallery")) {
      category = pathname.replace("/gallery/", "");
    } else {
      if (typeof collectionsStore.setCollections === "function") {
        try {
          await collectionsStore.setCollections(locale);
        } catch (error) {
          console.error("Failed to set main data", error);
        }
      }
    }
    if (typeof collectionsStore.setTags === "function") {
      try {
        await collectionsStore.setTags(locale, category);
      } catch (error) {
        console.error("Failed to set main data", error);
      }
    }
  };

  const fetchImages = async () => {
    if (typeof collectionsStore.setImages === "function") {
      try {
        await collectionsStore.setImages(locale);
      } catch (error) {
        console.error("Failed to set main data", error);
      }
    }
  };

  const fetchMainData = async () => {
    if (typeof setMainData === "function") {
      try {
        await setMainData(locale);
      } catch (error) {
        console.error("Failed to set main data", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
    fetchMainData();
  }, [locale]);

  useEffect(() => {
    fetchImages();
  }, [
    collectionsStore.tags,
    locale,
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
