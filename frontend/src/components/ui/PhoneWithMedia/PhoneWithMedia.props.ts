export interface PhoneWithMediaProps {
  phoneMockup: string;
  media: string;
  instaMockup?: string;
  mediaType: "image" | "video" | "instagramPost";
  styles?: { [key: string]: string };
}
