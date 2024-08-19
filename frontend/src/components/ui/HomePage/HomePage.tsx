"use client";
import { useEffect } from "react";
import useMainDataStore from "@/stores/MainDataStore";
import {
  AboutInfo,
  AvatarBlock,
  Collections,
  HomeImage,
  ViewAllSlider,
} from "../..";

export const HomePage = () => {
  const {
    setMainData,
    mainImage,
    mainText,
    mainAvatar,
    sliderImage,
    sliderText,
  } = useMainDataStore((state) => state);
  const fetchData = async () => {
    if (typeof setMainData === "function") {
      try {
        await setMainData();
      } catch (error) {
        console.error("Failed to set main data", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <HomeImage mainImage={mainImage} />
      <AvatarBlock mainAvatar={mainAvatar} />
      <AboutInfo mainText={mainText} />
      <ViewAllSlider sliderImage={sliderImage} sliderText={sliderText} />
      <Collections />
    </div>
  );
};
