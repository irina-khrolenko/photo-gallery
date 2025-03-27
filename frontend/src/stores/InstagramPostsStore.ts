// InstagramPostsStore
import { fetchInstagramFeeds } from "@/services/InstagramPostsService";
import { create } from "zustand";

export interface PostData {
  tagName: string;
  feedId: string;
}

interface InstagramPostData {
  posts: PostData[];
}

export interface InstagramPostsState extends InstagramPostData {
  setPosts: (posts: PostData[]) => void;
  fetchPosts: () => void;
  clearPostsData: () => void;
}

const getInstagramFeeds = async (
  set: (partial: Partial<InstagramPostsState>) => void
) => {
  try {
    const feeds: any = await fetchInstagramFeeds();
    set({ posts: feeds });
  } catch (error: any) {
    console.log("error", error);
  }
};

const clearPostsData = (
  set: (partial: Partial<InstagramPostsState>) => void
) => {
  set({ posts: [] });
};
const setPosts = (
  set: (partial: Partial<InstagramPostsState>) => void,
  posts: PostData[]
) => {
  set({ posts });
};

const useInstagramPostsStore = create<InstagramPostsState>((set) => ({
  posts: [],
  setPosts: (posts: PostData[]) => setPosts(set, posts),
  fetchPosts: async () => await getInstagramFeeds(set),
  clearPostsData: () => clearPostsData(set),
}));

export default useInstagramPostsStore;
