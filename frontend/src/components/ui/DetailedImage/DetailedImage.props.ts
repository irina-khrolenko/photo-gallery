export interface DetailedImageProps {
  isImageOpen: boolean;
  handleCloseModal: () => void;
  image: Image_Plain & { tags: string[]; image: string };
}
