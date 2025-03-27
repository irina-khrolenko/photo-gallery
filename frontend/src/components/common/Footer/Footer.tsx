"use client";
import { ChatMessage, PhonesInstagram } from "@/components";
import useMainDataStore, { MainData } from "@/stores/MainDataStore";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export const Footer = ({ mainData }: { mainData?: MainData }) => {
  const t = useTranslations("Messages");
  const { setMainData, mainAvatar, phoneMockup, instaLikes, instaMockup } =
    useMainDataStore((state) => state);

  useEffect(() => {
    if (typeof setMainData === "function" && mainData) {
      try {
        setMainData(mainData);
      } catch (error) {
        console.error("Failed to set main data", error);
      }
    }
  }, [mainData]);

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
