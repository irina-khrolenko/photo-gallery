import { fetcher } from "@/lib/api";

export async function fetchCollections() {
  try {
    const result = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories`,
      { populate: "*", locale: "en" }
    );
    console.log("result", result);
    return result.data;
  } catch (err) {
    console.log("err", err);
  }
}

export async function fetchTags() {
  try {
    const result = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/tags`,
      { populate: "*", locale: "en" }
    );
    console.log("result", result);
    return result.data;
  } catch (err) {
    console.log("err", err);
  }
}
