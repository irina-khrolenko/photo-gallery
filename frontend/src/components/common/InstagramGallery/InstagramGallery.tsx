"use client";

import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import BeholdWidget from "@behold/react";
import { ChatMessage } from "@/components/ui/ChatMessage/ChatMessage";
import { useLocale, useTranslations } from "next-intl";
import useMainDataStore from "@/stores/MainDataStore";
import useInstagramPostsStore from "@/stores/InstagramPostsStore";

export const InstagramGallery = () => {
  const t = useTranslations("Messages");
  const locale = useLocale();
  const { setMainData, mainAvatar } = useMainDataStore((state) => state);
  const { posts, setPosts } = useInstagramPostsStore((state) => state);
  useEffect(() => {
    fetchInstaFeeds();
    fetchMainData();
    const beholdScript = document.createElement("script");
    beholdScript.src = "https://behold.so/widget.js";
    beholdScript.async = true;
    document.body.appendChild(beholdScript);

    return () => {
      document.body.removeChild(beholdScript);
    };
  }, []);

  const fetchMainData = async () => {
    if (typeof setMainData === "function") {
      try {
        await setMainData(locale);
      } catch (error) {
        console.error("Failed to set main data", error);
      }
    }
  };
  const fetchInstaFeeds = async () => {
    if (typeof setPosts === "function") {
      try {
        await setPosts();
      } catch (error) {
        console.error("Failed to set main data", error);
      }
    }
  };

  return (
    <div className="w-full">
      <ChatMessage mainAvatar={mainAvatar} messagesList={[t("newPosts")]} />
      <ImageList variant="masonry" cols={1} gap={10} className="my-10">
        {posts?.map((tag) => (
          <ImageListItem key={tag.tagName}>
            <div className="mb-10">
              <Typography variant="h5">{tag.tagName}</Typography>
            </div>
            <div className="mb-10">
              <BeholdWidget feedId={tag.feedId} />
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};
