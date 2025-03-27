import { ImagePlainData } from "@/stores/CollectionsStore";

export interface DetailedImageProps {
  isImageOpen: boolean;
  handleCloseModal: () => void;
  image: ImagePlainData;
}
