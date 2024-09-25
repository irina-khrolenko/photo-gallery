import {
  fetchCollections,
  fetchImages,
  fetchTags,
} from "@/services/CollectionsService";
import { create } from "zustand";

interface CollectionsData {
  collections: Category_Plain[];
  tags: (Tag_Plain & { isChecked: boolean })[];
  images: (Image_Plain & { tags: string[]; image: string })[];
}

export interface CollectionsDataState extends CollectionsData {
  setCollections: (locale: string) => void;
  setTags: (locale: string, category?: string) => void;
  setImages: (locale: string, filters?: any) => void;
  changeTagSelection: (tag: string) => void;
  clearCollections: () => void;
}

const getCollectionsData = async (
  set: (data: Partial<CollectionsDataState>) => void,
  locale: string
) => {
  try {
    const data = await fetchCollections(locale);
    const collections = data?.map((collection: any) => {
      const coverImage = collection.attributes.coverImage?.data
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${collection.attributes.coverImage.data.attributes.url}`
        : "";
      return { ...collection.attributes, coverImage, id: collection.id };
    });
    set({ collections });
  } catch (error) {
    console.error("Error fetching main data:", error);
  }
};

const getTagsData = async (
  set: (data: Partial<CollectionsDataState>) => void,
  locale: string,
  category?: string
) => {
  try {
    const data: Tag[] = await fetchTags(locale, category);
    const tags = data?.map((tag) => {
      const categories = tag.attributes.categories?.data?.map(
        (category: any) => category?.attributes?.name
      );
      return { ...tag.attributes, id: tag.id, categories, isChecked: false };
    });
    set({ tags } as any);
  } catch (error) {
    console.error("Error fetching main data:", error);
  }
};

const getImagesData = async (
  set: (data: Partial<CollectionsDataState>) => void,
  locale: string,
  tags?: string[]
) => {
  try {
    const data: Image[] = await fetchImages(locale, tags);
    const images = data?.map((image) => {
      const url = image?.attributes?.image?.data
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${image?.attributes?.image?.data?.attributes?.url}`
        : "";
      const tags: string[] = image.attributes.tags?.data?.map(
        (tag) => tag?.attributes?.name
      );
      return { ...image.attributes, id: image.id, image: url, tags };
    });
    set({ images } as any);
  } catch (error) {
    console.error("Error fetching main data:", error);
  }
};

const changeTagSelection = (
  set: (
    data:
      | Partial<CollectionsDataState>
      | ((state: CollectionsDataState) => Partial<CollectionsDataState>)
  ) => void,
  selectedTag: string
) => {
  set((state) => ({
    ...state,
    tags: state.tags.map((tag) => {
      return {
        ...tag,
        isChecked: tag.name === selectedTag ? !tag.isChecked : tag.isChecked,
      };
    }),
  }));
};

const clearCollectionsData = (
  set: (partial: Partial<CollectionsDataState>) => void
) => {
  set({ collections: [] });
};

const useCollectionsStore = create<CollectionsDataState>((set) => ({
  collections: [],
  tags: [],
  images: [],
  setCollections: async (locale: string) =>
    await getCollectionsData(set, locale),
  setTags: async (locale: string, category?: string) =>
    await getTagsData(set, locale, category),
  setImages: async (locale: string, filters: any) =>
    await getImagesData(set, locale, filters),
  clearCollections: () => clearCollectionsData(set),
  changeTagSelection: (tag: any) => changeTagSelection(set, tag),
}));

export default useCollectionsStore;
