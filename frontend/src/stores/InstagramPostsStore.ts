// InstagramPostsStore
import { create } from "zustand";

export interface PostData {
  url: string;
  width: number;
  height: number;
  aspectRatio: number;
}

interface InstagramPostData {
  posts: PostData[];
}

export interface InstagramPostsState extends InstagramPostData {
  setPosts: () => void;
  clearPostsData: () => void;
}

const getPostsData = async (
  set: (partial: Partial<InstagramPostsState>) => void
) => {
  try {
    set({ posts: [] });
  } catch (error: any) {
    console.log("error", error);
  }
};

const clearPostsData = (
  set: (partial: Partial<InstagramPostsState>) => void
) => {
  set({ posts: [] });
};

const useInstagramPostsStore = create<InstagramPostsState>((set) => ({
  posts: [],
  setPosts: async () => await getPostsData(set),
  clearPostsData: () => clearPostsData(set),
}));

export default useInstagramPostsStore;
