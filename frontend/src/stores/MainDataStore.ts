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
  parallaxImages: string[];
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
    const mainAvatar = `${data.avatar.data.attributes.url}`;
    const mainImage = data.mainImage?.data
      ? `${data.mainImage.data.attributes.url}`
      : "";
    const mainVideo = data.mainVideo?.data
      ? `${data.mainVideo.data.attributes.url}`
      : "";
    const phoneMockup = data.phoneMockup?.data
      ? `${data.phoneMockup.data.attributes.url}`
      : "";
    const sliderImage = data.sliderImage?.data
      ? `${data.sliderImage.data.attributes.url}`
      : "";
    const instaLikes = data.instaLikes?.data
      ? `${data.instaLikes.data.attributes.url}`
      : "";
    const instaMockup = data.instaMockup?.data
      ? `${data.instaMockup.data.attributes.url}`
      : "";
    const parallaxImages = data.parallaxImages?.data?.length
      ? data.parallaxImages.data
          ?.sort((a: Media, b: Media) =>
            a.attributes.name.localeCompare(b.attributes.name)
          )
          ?.map((image: Media) => image.attributes?.url)
      : [];
    const mainData = {
      mainImage,
      mainText: data.mainText,
      mainAvatar,
      mainVideo,
      phoneMockup,
      instaLikes,
      instaMockup,
      sliderImage,
      parallaxImages,
      sliderText: data.sliderText,
    };
    set(mainData);
  } catch (error) {
    console.error("Error fetching main data:", error);
  }
};

const clearMainData = (set: (partial: Partial<MainDataState>) => void) => {
  set({ mainImage: "", mainText: [], mainAvatar: "", parallaxImages: [] });
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
  parallaxImages: [],
  setMainData: async (locale: string) => await getMainInfoData(set, locale),
  clearMainData: () => clearMainData(set),
}));

export default useMainDataStore;
