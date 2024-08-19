import { fetchMainInfoData } from "@/services/MainDataService";
import { create } from "zustand";

interface MainData {
  mainImage: string;
  mainText: string[];
  mainAvatar: string;
  sliderImage: string;
  sliderText: string;
}

export interface MainDataState extends MainData {
  setMainData: () => void;
  clearMainData: () => void;
}

const getMainInfoData = async (
  set: (partial: Partial<MainDataState>) => void
) => {
  try {
    const data = await fetchMainInfoData();
    console.log("data fetchMainInfoData", data);
    const mainAvatar = `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.avatar.data.attributes.url}`;
    const mainImage = data.mainImage?.data
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.mainImage.data.attributes.url}`
      : "";
    const sliderImage = data.sliderImage?.data
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.sliderImage.data.attributes.url}`
      : "";
    const mainData = {
      mainImage,
      mainText: data.mainText,
      mainAvatar,
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
  mainImage: "",
  mainText: [],
  mainAvatar: "",
  sliderImage: "",
  sliderText: "",
  setMainData: async () => await getMainInfoData(set),
  clearMainData: () => clearMainData(set),
}));

export default useMainDataStore;
