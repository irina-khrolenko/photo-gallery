import { fetchMainInfoData } from "@/services/MainDataService";
import { create } from "zustand";

export interface MainData {
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
  fetchMainData: (locale: string) => void;
  setMainData: (mainData: MainData) => void;
  clearMainData: () => void;
}

const getMainInfoData = async (
  set: (partial: Partial<MainDataState>) => void,
  locale: string
) => {
  try {
    const mainData = await fetchMainInfoData(locale);
    if (mainData) set(mainData);
  } catch (error) {
    console.error("Error fetching main data:", error);
  }
};

const clearMainData = (set: (partial: Partial<MainDataState>) => void) => {
  set({ mainImage: "", mainText: [], mainAvatar: "", parallaxImages: [] });
};

const setMainData = (
  set: (partial: Partial<MainDataState>) => void,
  mainData: MainData
) => {
  set(mainData);
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
  setMainData: (mainData: MainData) => setMainData(set, mainData),
  fetchMainData: async (locale: string) => await getMainInfoData(set, locale),
  clearMainData: () => clearMainData(set),
}));

export default useMainDataStore;
