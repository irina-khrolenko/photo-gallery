import { fetchMainInfoData } from "@/services/MainDataService";
import { create } from "zustand";

interface MainData {
  mainImage: string;
  mainText: string[];
  mainAvatar: string;
  mainVideo: string;
  sliderImage: string;
  sliderText: string;
  phoneMockup?: string;
  instaLikes: string;
  instaMockup: string;
}

export interface MainDataState extends MainData {
  setMainData: (locale: string) => void;
  clearMainData: () => void;
}

const getMainInfoData = async (
  set: (partial: Partial<MainDataState>) => void,
  locale: string
) => {
  try {
    const data = await fetchMainInfoData(locale);
    const mainAvatar = `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.avatar.data.attributes.url}`;
    const mainImage = data.mainImage?.data
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.mainImage.data.attributes.url}`
      : "";
    const mainVideo = data.mainVideo?.data
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.mainVideo.data.attributes.url}`
      : "";
    const phoneMockup = data.phoneMockup?.data
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.phoneMockup.data.attributes.url}`
      : "";
    const sliderImage = data.sliderImage?.data
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.sliderImage.data.attributes.url}`
      : "";
    const instaLikes = data.instaLikes?.data
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.instaLikes.data.attributes.url}`
      : "";
    const instaMockup = data.instaMockup?.data
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.instaMockup.data.attributes.url}`
      : "";
    const mainData = {
      mainImage,
      mainText: data.mainText,
      mainAvatar,
      mainVideo,
      phoneMockup,
      instaLikes,
      instaMockup,
      sliderImage,
      sliderText: data.sliderText,
    };
    set(mainData);
  } catch (error) {
    console.error("Error fetching main data:", error);
  }
};

const clearMainData = (set: (partial: Partial<MainDataState>) => void) => {
  set({ mainImage: "", mainText: [], mainAvatar: "" });
};

const useMainDataStore = create<MainDataState>((set) => ({
  locale: "uk",
  mainImage: "",
  mainText: [],
  mainAvatar: "",
  mainVideo: "",
  phoneMockup: "",
  sliderImage: "",
  sliderText: "",
  instaMockup: "",
  instaLikes: "",
  setMainData: async (locale: string) => await getMainInfoData(set, locale),
  clearMainData: () => clearMainData(set),
}));

export default useMainDataStore;
