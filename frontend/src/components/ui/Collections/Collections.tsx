"use client";
import { useEffect } from "react";
import useCollectionsStore from "@/stores/CollectionsStore";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";

export const Collections = () => {
  const { collections, setCollections } = useCollectionsStore((state) => state);
  const fetchData = async () => {
    if (typeof setCollections === "function") {
      try {
        await setCollections();
      } catch (error) {
        console.error("Failed to set main data", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClickCollection = (collection: any) => {
    console.log("collection", collection);
    // navigate to collection
  };

  return (
    <ImageList sx={{ width: "80%", height: "auto" }} cols={3}>
      <ImageListItem key="Subheader" cols={3}>
        <ListSubheader component="div">Collections</ListSubheader>
      </ImageListItem>
      {collections?.map((item) => (
        <ImageListItem
          key={item.img}
          sx={{
            position: "relative",
            ".MuiImageListItemBar-root": {
              opacity: 0,
            },
            "&:hover .MuiImageListItemBar-root": {
              opacity: 1,
            },
          }}
        >
          <img
            srcSet={`${item.coverImage}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item?.coverImage}?w=248&fit=crop&auto=format`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.name}
            position="top"
            onClick={() => handleClickCollection(item)}
            sx={{
              background: "rgba(0, 0, 0, 0.5);",
              height: "100%",
              textAlign: "center",
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
