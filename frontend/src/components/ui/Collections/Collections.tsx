"use client";

import { useEffect } from "react";
import useCollectionsStore from "@/stores/CollectionsStore";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export const Collections = () => {
  const t = useTranslations();
  const locale = useLocale();
  const { collections, setCollections } = useCollectionsStore((state) => state);
  const fetchData = async () => {
    if (typeof setCollections === "function") {
      try {
        await setCollections(locale);
      } catch (error) {
        console.error("Failed to set main data", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [locale]);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "80%",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "80%",
            height: "80%",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#394023",
            borderRadius: "20px",
            zIndex: -1,
          }}
        />
        <ImageList
          sx={{
            width: "100%",
            height: "auto",
            padding: "20px",
          }}
          cols={3}
          gap={15}
        >
          <ImageListItem key="Subheader" cols={3}>
            <ListSubheader
              component="div"
              sx={{
                fontSize: "1.5rem",
                color: "white",
                textAlign: "center",
                paddingBottom: "20px",
                backgroundColor: "transparent",
              }}
            >
              {t("Collections")}
            </ListSubheader>
          </ImageListItem>
          {collections?.map((item) => (
            <ImageListItem
              key={item.id}
              sx={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                ".MuiImageListItemBar-root": {
                  opacity: 0,
                  transition: "opacity 0.3s ease-in-out",
                },
                "&:hover .MuiImageListItemBar-root": {
                  opacity: 1,
                },
                "&:hover img": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <img
                srcSet={`${item.coverImage}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item?.coverImage}?w=248&fit=crop&auto=format`}
                alt={item.name}
                loading="lazy"
              />
              <Link href={`/gallery/${item.category}`}>
                <ImageListItemBar
                  title={item.name}
                  position="top"
                  sx={{
                    background: "rgba(0, 0, 0, 0.5);",
                    height: "100%",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};
