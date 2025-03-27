"use client";
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
import { useTranslations } from "next-intl";

export const HomePage = ({
  collections,
}: {
  collections?: Category_Plain[];
}) => {
  const t = useTranslations("Messages");
  const {
    parallaxImages,
    mainText,
    mainAvatar,
    mainVideo,
    phoneMockup,
    sliderImage,
    sliderText,
  } = useMainDataStore((state) => state);

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
        <Collections collectionsList={collections} />
      </div>
    </div>
  );
};
