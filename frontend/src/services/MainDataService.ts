import { fetcher } from "@/lib/api";

export async function fetchMainInfoData() {
  try {
    const result = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/main`,
      { populate: "*", locale: "en" }
    );

    return result.data.attributes;
  } catch (err) {
    console.log("err", err);
  }
}
