import { fetcher } from "@/lib/api";

export async function fetchCollections(locale: string) {
  try {
    const result = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories`,
      { populate: "*", locale }
    );
    return result.data;
  } catch (err) {
    console.log("err", err);
  }
}

export async function fetchTags(locale: string, category?: string) {
  try {
    const result = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/tags`,
      {
        populate: "*",
        locale,
        ...(category && { filters: { categories: { category } } }),
      }
    );
    return result.data;
  } catch (err) {
    console.log("err", err);
  }
}

export async function fetchImages(locale: string, tags?: string[]) {
  try {
    const result = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/images`,
      {
        populate: "*",
        locale,
        ...(tags?.length && { filters: { tags: { name: { $in: tags } } } }),
      }
    );
    return result.data;
  } catch (err) {
    console.log("err", err);
  }
}
