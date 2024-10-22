import { fetcher } from "@/lib/api";

export async function fetchMainInfoData(locale: string) {
  try {
    const result = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/main`, {
      populate: "*",
      locale,
    });

    return result.data.attributes;
  } catch (err) {
    console.log("err", err);
  }
}
