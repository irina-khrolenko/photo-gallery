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

interface CollectionsData {
  collections: Category_Plain[];
  tags: (Tag_Plain & { isChecked: boolean })[];
  images: (Image_Plain & { tags: string[]; image: string })[];
  imagesPagination: Pagination;
}

export interface CollectionsDataState extends CollectionsData {
  setCollections: (locale: string) => void;
  setTags: (locale: string, category?: string) => void;
  setImages: (locale: string, filters?: any) => void;
  changeTagsSelection: (tags: string[]) => void;
  setImagesPagination: (pagination: Pagination) => void;
  clearData: () => void;
}

const getCollectionsData = async (
  set: (data: Partial<CollectionsDataState>) => void,
  locale: string
) => {
  try {
    const data = await fetchCollections(locale);
    const collections = data?.map((collection: any) => {
      const coverImage = collection.attributes.coverImage?.data
        ? `${collection.attributes.coverImage.data.attributes.url}`
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
  get: () => CollectionsDataState,
  locale: string
) => {
  try {
    const selectedTags = get().tags?.some((tag) => tag.isChecked)
      ? get()
          .tags?.filter((tag) => tag.isChecked)
          .map((tag) => tag.name)
      : get().tags?.map((tag) => tag.name);
    const result = await fetchImages(
      locale,
      get().imagesPagination,
      selectedTags
    );
    const data: Image[] = result.data;
    const pagination = result.meta.pagination;
    const images = data?.map((image) => {
      const url = image?.attributes?.image?.data
        ? `${image?.attributes?.image?.data?.attributes?.url}`
        : "";
      const tags: string[] = image.attributes.tags?.data?.map(
        (tag) => tag?.attributes?.name
      );
      return { ...image.attributes, id: image.id, image: url, tags };
    });
    set({
      images,
      imagesPagination: pagination,
    } as any);
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
  setCollections: async (locale: string) =>
    await getCollectionsData(set, locale),
  setTags: async (locale: string, category?: string) =>
    await getTagsData(set, locale, category),
  setImages: async (locale: string) => await getImagesData(set, get, locale),
  clearData: () => clearData(set),
  changeTagsSelection: (tags: any[]) => changeTagsSelection(set, tags),
}));

export default useCollectionsStore;
