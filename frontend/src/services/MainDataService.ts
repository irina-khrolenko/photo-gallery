import { fetcher } from "@/lib/api";

export async function fetchMainInfoData(locale: string) {
  try {
    const result = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/main`, {
      populate: "*",
      locale,
    });

    const data = result.data.attributes;
    const mainAvatar = `${data.avatar.data.attributes.url}`;
    const mainImage = data.mainImage?.data
      ? `${data.mainImage.data.attributes.url}`
      : "";
    const mainVideo = data.mainVideo?.data
      ? `${data.mainVideo.data.attributes.url}`
      : "";
    const phoneMockup = data.phoneMockup?.data
      ? `${data.phoneMockup.data.attributes.url}`
      : "";
    const sliderImage = data.sliderImage?.data
      ? `${data.sliderImage.data.attributes.url}`
      : "";
    const instaLikes = data.instaLikes?.data
      ? `${data.instaLikes.data.attributes.url}`
      : "";
    const instaMockup = data.instaMockup?.data
      ? `${data.instaMockup.data.attributes.url}`
      : "";
    const parallaxImages = data.parallaxImages?.data?.length
      ? data.parallaxImages.data
          ?.sort((a: Media, b: Media) =>
            a.attributes.name.localeCompare(b.attributes.name)
          )
          ?.map((image: Media) => image.attributes?.url)
      : [];
    const mainData = {
      mainImage,
      mainText: data.mainText,
      mainAvatar,
      mainVideo,
      phoneMockup,
      instaLikes,
      instaMockup,
      sliderImage,
      parallaxImages,
      sliderText: data.sliderText,
    };
    return mainData;
  } catch (err) {
    console.log("err", err);
  }
}
