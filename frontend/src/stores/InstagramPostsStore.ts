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
  setPosts: () => void;
  clearPostsData: () => void;
}

const getInstagramFeeds = async (
  set: (partial: Partial<InstagramPostsState>) => void
) => {
  try {
    const response: any = await fetchInstagramFeeds();
    const feeds = response?.map((feed: InstagramFeed) => ({
      feedId: feed.attributes.feedId,
      tagName: feed.attributes.tagName,
    }));
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

const useInstagramPostsStore = create<InstagramPostsState>((set) => ({
  posts: [],
  setPosts: async () => await getInstagramFeeds(set),
  clearPostsData: () => clearPostsData(set),
}));

export default useInstagramPostsStore;
