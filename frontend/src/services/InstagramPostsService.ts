import { fetcher } from "@/lib/api";

export async function fetchInstagramFeeds() {
  try {
    const result = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/instagram-feeds`
    );
    const feeds = result.data?.map((feed: InstagramFeed) => ({
      feedId: feed.attributes.feedId,
      tagName: feed.attributes.tagName,
    }));
    return feeds;
  } catch (err) {
    console.log("err", err);
  }
}
