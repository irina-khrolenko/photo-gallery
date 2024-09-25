"use client";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { GalleryImagesProps } from "./GalleryImages.props";
import { DetailedImage } from "../DetailedImage/DetailedImage";
import { useState } from "react";

export const GalleryImages = ({ images }: GalleryImagesProps) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const handleOpenImage = (
    image: Image_Plain & { tags: string[]; image: string }
  ) => {
    console.log("image", image);
    setIsImageOpen(true);
  };
  const handleCloseImage = () => {
    setIsImageOpen(false);
  };
  return (
    <>
      <DetailedImage
        isImageOpen={isImageOpen}
        handleCloseModal={handleCloseImage}
      />
      <ImageList variant="masonry" cols={5} gap={10}>
        {images?.map((item) => (
          <ImageListItem
            key={item.id}
            sx={{
              ".MuiImageListItemBar-root": {
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
              },
              "&:hover .MuiImageListItemBar-root": {
                opacity: 1,
              },
            }}
            onClick={() => handleOpenImage(item)}
          >
            <img
              srcSet={`${item.image}?auto=format&dpr=2 2x`}
              src={`${item.image}?auto=format`}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar
              subtitle={
                <div className="flex flex-wrap">
                  {item.tags?.map((v: string, index: number) => (
                    <span className="mr-1">
                      #{v}
                      {index !== item.tags?.length - 1 && ","}
                    </span>
                  ))}
                </div>
              }
              sx={{
                background: "rgba(0, 0, 0, 0.5);",
                textAlign: "center",
                cursor: "pointer",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};
