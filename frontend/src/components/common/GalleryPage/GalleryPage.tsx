"use client";

import useMainDataStore from "@/stores/MainDataStore";
import { ChatMessage, GalleryImages, Tags } from "../..";
import useCollectionsStore from "@/stores/CollectionsStore";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const GalleryPage = () => {
  const t = useTranslations("Messages");
  const locale = useLocale();
  const pathname = usePathname();
  const { tags, images, setTags, changeTagSelection, setImages } =
    useCollectionsStore((state) => state);
  const { setMainData, mainAvatar } = useMainDataStore((state) => state);
  const fetchData = async () => {
    let category = "";
    if (!pathname.endsWith("gallery")) {
      category = pathname.replace("/gallery/", "");
    }
    if (typeof setTags === "function") {
      try {
        await setTags(locale, category);
      } catch (error) {
        console.error("Failed to set main data", error);
      }
    }
  };

  const fetchImages = async (tags: string[]) => {
    if (typeof setImages === "function") {
      try {
        await setImages(locale, tags);
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
    const selectedTags = tags?.some((tag) => tag.isChecked)
      ? tags?.filter((tag) => tag.isChecked).map((tag) => tag.name)
      : tags?.map((tag) => tag.name);
    fetchImages(selectedTags);
  }, [tags, locale]);

  return (
    <div className="p-20 pt-0">
      <ChatMessage mainAvatar={mainAvatar} messagesList={[t("hashTags")]} />
      <Tags tags={tags} changeTagSelection={changeTagSelection} />
      <GalleryImages images={images} />
    </div>
  );
};
