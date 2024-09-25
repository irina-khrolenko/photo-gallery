export interface GalleryImagesProps {
  images: (Image_Plain & { tags: string[]; image: string })[];
}
