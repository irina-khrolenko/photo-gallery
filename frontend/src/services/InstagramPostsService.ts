import { fetcher } from "@/lib/api";

export async function fetchInstagramFeeds() {
  try {
    const result = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/instagram-feeds`
    );
    return result.data;
  } catch (err) {
    console.log("err", err);
  }
}
