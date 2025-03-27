"use client";

import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import BeholdWidget from "@behold/react";
import { ChatMessage } from "@/components/ui/ChatMessage/ChatMessage";
import { useTranslations } from "next-intl";
import useMainDataStore from "@/stores/MainDataStore";
import useInstagramPostsStore, { PostData } from "@/stores/InstagramPostsStore";

export const InstagramGallery = ({ postsData }: { postsData?: PostData[] }) => {
  const t = useTranslations("Messages");
  const { mainAvatar } = useMainDataStore((state) => state);
  const { posts, setPosts } = useInstagramPostsStore((state) => state);
  useEffect(() => {
    const beholdScript = document.createElement("script");
    beholdScript.src = "https://behold.so/widget.js";
    beholdScript.async = true;
    document.body.appendChild(beholdScript);

    return () => {
      document.body.removeChild(beholdScript);
    };
  }, []);

  useEffect(() => {
    if (typeof setPosts === "function" && postsData?.length) {
      setPosts(postsData);
    }
  }, [postsData]);

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
