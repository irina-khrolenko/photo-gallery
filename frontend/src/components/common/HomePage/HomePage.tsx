"use client";
import { useEffect } from "react";
import useMainDataStore from "@/stores/MainDataStore";
import {
  AboutInfo,
  AvatarBlock,
  ChatMessage,
  Collections,
  ParallaxImage,
  SmartphoneVideo,
  ViewAllSlider,
} from "../..";
import { useLocale, useTranslations } from "next-intl";

export const HomePage = () => {
  const t = useTranslations("Messages");
  const {
    setMainData,
    parallaxImages,
    mainText,
    mainAvatar,
    mainVideo,
    phoneMockup,
    sliderImage,
    sliderText,
  } = useMainDataStore((state) => state);
  const locale = useLocale();

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
    <div className="w-full overflow-hidden ">
      <ParallaxImage textureUrls={parallaxImages} />
      <div className="flex items-center space-x-4 justify-between px-[15%] py-[150px]">
        <AvatarBlock mainAvatar={mainAvatar} />
        <AboutInfo mainText={mainText} />
        <SmartphoneVideo mainVideo={mainVideo} phoneMockup={phoneMockup} />
      </div>
      <ViewAllSlider sliderImage={sliderImage} sliderText={sliderText} />
      <div className="mt-10 ml-20">
        <ChatMessage mainAvatar={mainAvatar} messagesList={[t("portfolio")]} />
      </div>
      <div className="flex items-center space-x-4 justify-center px-20 py-20">
        <Collections />
      </div>
    </div>
  );
};
