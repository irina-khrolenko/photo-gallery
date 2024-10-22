import { fetcher } from "@/lib/api";

export async function fetchCollections(locale: string) {
  try {
    const result = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/categories`,
      { populate: "*", locale }
    );
    return result.data;
  } catch (err) {
    console.log("err", err);
  }
}

export async function fetchTags(locale: string, category?: string) {
  try {
    const result = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/tags`, {
      populate: "*",
      locale,
      ...(category && { filters: { categories: { category } } }),
      sort: "createdAt",
    });
    return result.data;
  } catch (err) {
    console.log("err", err);
  }
}

export async function fetchImages(
  locale: string,
  pagination: any,
  tags?: string[]
) {
  try {
    const result = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/images`,
      {
        populate: "*",
        locale,
        ...(tags?.length && { filters: { tags: { name: { $in: tags } } } }),
        sort: "createdAt",
        pagination: {
          withCount: true,
          pageSize: pagination.pageSize,
          page: pagination.page,
        },
      }
    );
    return result;
  } catch (err) {
    console.log("err", err);
  }
}
