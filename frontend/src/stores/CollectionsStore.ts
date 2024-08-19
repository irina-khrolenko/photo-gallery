import { fetchCollections } from "@/services/CollectionsService";
import { create } from "zustand";

interface CollectionsData {
  collections: any[];
  tags: any[];
}

export interface CollectionsDataState extends CollectionsData {
  setCollections: () => void;
  clearCollections: () => void;
}

const getCollectionsData = async (
  set: (data: Partial<CollectionsDataState>) => void
) => {
  try {
    const data = await fetchCollections();
    console.log("data fetchCollections", data);
    const collections = data?.map((collection: any) => {
      const coverImage = collection.attributes.coverImage?.data
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${collection.attributes.coverImage.data.attributes.url}`
        : "";
      return { ...collection.attributes, coverImage };
    });
    console.log("collections", collections);
    set({ collections });
  } catch (error) {
    console.error("Error fetching main data:", error);
  }
};

const clearCollectionsData = (
  set: (partial: Partial<CollectionsDataState>) => void
) => {
  set({ collections: [] });
};

const useCollectionsStore = create<CollectionsDataState>((set) => ({
  collections: [],
  tags: [],
  setCollections: async () => await getCollectionsData(set),
  clearCollections: () => clearCollectionsData(set),
}));

export default useCollectionsStore;
