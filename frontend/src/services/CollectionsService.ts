import { fetcher } from "@/lib/api";

export async function fetchCollections(locale: string) {
  try {
    const result = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/categories`,
      { populate: "*", locale }
    );
    const collections = result.data?.map((collection: any) => {
      const coverImage = collection.attributes.coverImage?.data
        ? `${collection.attributes.coverImage.data.attributes.url}`
        : "";
      return { ...collection.attributes, coverImage, id: collection.id };
    });
    return collections;
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
    const tags = result.data?.map((tag: Tag) => {
      const categories = tag.attributes.categories?.data?.map(
        (category: any) => category?.attributes?.name
      );
      return { ...tag.attributes, id: tag.id, categories, isChecked: false };
    });
    return tags;
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
    const data: Image[] = result.data;
    const newPagination = result.meta.pagination;
    const images: any[] = data?.map((image) => {
      const url = image?.attributes?.image?.data
        ? `${image?.attributes?.image?.data?.attributes?.url}`
        : "";
      const tags: string[] = image.attributes.tags?.data?.map(
        (tag) => tag?.attributes?.name
      );
      return { ...image.attributes, id: image.id, image: url, tags };
    });
    return { images, imagesPagination: newPagination };
  } catch (err) {
    console.log("err", err);
  }
}
