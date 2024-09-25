"use client";
import { ChatMessage, PhonesInstagram } from "@/components";
import useMainDataStore from "@/stores/MainDataStore";
import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";

export const Footer = () => {
  const t = useTranslations("Messages");
  const locale = useLocale();
  const { setMainData, mainAvatar, phoneMockup, instaLikes, instaMockup } =
    useMainDataStore((state) => state);
  const fetchData = async () => {
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
  }, [locale]);

  return (
    <div className="w-full bg-gallery-darkGreen overflow-hidden flex justify-between items-center px-20">
      <ChatMessage
        mainAvatar={mainAvatar}
        messagesList={[t("instagram"), t("visitInstagram")]}
      />
      <div className="p-10">
        <PhonesInstagram
          phoneMockup={phoneMockup}
          mediaOne={mainAvatar}
          mediaTwo={mainAvatar}
          instaLikes={instaLikes}
          instaMockup={instaMockup}
        />
      </div>
    </div>
  );
};
