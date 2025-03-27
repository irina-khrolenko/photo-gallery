import {
  fetchCollections,
  fetchImages,
  fetchTags,
} from "@/services/CollectionsService";
import { create } from "zustand";

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface TagData extends Tag_Plain {
  isChecked: boolean;
}
export interface ImagePlainData extends Omit<Image_Plain, "tags" | "image"> {
  tags?: string[];
  image: string;
}

export interface CollectionsData {
  collections: Category_Plain[];
  tags: TagData[];
  images: ImagePlainData[];
  imagesPagination: Pagination;
}

export interface CollectionsDataState extends CollectionsData {
  fetchCollections: (locale: string) => void;
  fetchTags: (locale: string, category?: string) => void;
  fetchImages: (locale: string, filters?: any) => void;
  setCollections: (collections: Category_Plain[]) => void;
  setTags: (tags: TagData[]) => void;
  setImages: (images: ImagePlainData[]) => void;
  changeTagsSelection: (tags: string[]) => void;
  setImagesPagination: (pagination: Pagination) => void;
  clearData: () => void;
}

const getCollectionsData = async (
  set: (data: Partial<CollectionsDataState>) => void,
  locale: string
) => {
  try {
    const collections = await fetchCollections(locale);
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
    const tags: TagData[] = await fetchTags(locale, category);
    set({ tags });
  } catch (error) {
    console.error("Error fetching main data:", error);
  }
};

const getImagesData = async (
  set: (data: Partial<CollectionsDataState>) => void,
  get: () => CollectionsDataState,
  locale: string
) => {
  try {
    const selectedTags = get().tags?.some((tag) => tag.isChecked)
      ? get()
          .tags?.filter((tag) => tag.isChecked)
          .map((tag) => tag.name)
      : get().tags?.map((tag) => tag.name);
    const result:
      | { images: ImagePlainData[]; imagesPagination: Pagination }
      | undefined = await fetchImages(
      locale,
      get().imagesPagination,
      selectedTags
    );
    if (result) set(result);
  } catch (error) {
    console.error("Error fetching main data:", error);
  }
};

const changeTagsSelection = (
  set: (
    data:
      | Partial<CollectionsDataState>
      | ((state: CollectionsDataState) => Partial<CollectionsDataState>)
  ) => void,
  selectedTags: string[]
) => {
  set((state) => ({
    ...state,
    tags: state.tags.map((tag) => {
      return {
        ...tag,
        isChecked: selectedTags.includes(tag.name)
          ? !tag.isChecked
          : tag.isChecked,
      };
    }),
  }));
};

const clearData = (set: (partial: Partial<CollectionsDataState>) => void) => {
  set({ collections: [], images: [], tags: [] });
};
const setCollections = (
  set: (partial: Partial<CollectionsDataState>) => void,
  collections: Category_Plain[]
) => {
  set({ collections });
};
const setImages = (
  set: (partial: Partial<CollectionsDataState>) => void,
  images: ImagePlainData[]
) => {
  set({ images });
};
const setTags = (
  set: (partial: Partial<CollectionsDataState>) => void,
  tags: TagData[]
) => {
  set({ tags });
};
const setImagesPagination = (
  set: (partial: Partial<CollectionsDataState>) => void,
  pagination: Pagination
) => {
  set({ imagesPagination: pagination });
};

const useCollectionsStore = create<CollectionsDataState>((set, get) => ({
  collections: [],
  tags: [],
  images: [],
  imagesPagination: { page: 1, pageSize: 10 } as Pagination,
  setImagesPagination: (pagination: Pagination) =>
    setImagesPagination(set, pagination),
  fetchCollections: async (locale: string) =>
    await getCollectionsData(set, locale),
  fetchTags: async (locale: string, category?: string) =>
    await getTagsData(set, locale, category),
  fetchImages: async (locale: string) => await getImagesData(set, get, locale),
  setCollections: (collections: Category_Plain[]) =>
    setCollections(set, collections),
  setTags: (tags: TagData[]) => setTags(set, tags),
  setImages: (images: ImagePlainData[]) => setImages(set, images),
  clearData: () => clearData(set),
  changeTagsSelection: (tags: any[]) => changeTagsSelection(set, tags),
}));

export default useCollectionsStore;
