import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { TagsProps } from "./Tags.props";

export const Tags = ({ tags, changeTagsSelection, collections }: TagsProps) => {
  const getCollectionTags = (collection: string) => {
    return tags?.filter((tag) => tag.categories?.includes(collection as any));
  };
  return (
    <Box component="div" className="relative my-10">
      <Stack direction="row" flexWrap={"wrap"} gap={1}>
        {collections?.length ? (
          <Paper
            sx={{
              listStyle: "none",
              background: "none",
            }}
            component="ul"
          >
            {collections?.map((collection) => (
              <span key={collection.id}>
                <Chip
                  key={collection.id}
                  label={collection.name}
                  color="primary"
                  variant="filled"
                  sx={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${collection.coverImage}) `,
                    backgroundSize: "cover",
                    color: "#fff",
                    border: "1px solid #fff",
                    padding: "20px  ",
                    borderRadius: "100px",
                    margin: "10px",
                  }}
                  onClick={() =>
                    changeTagsSelection(
                      getCollectionTags(collection.name)?.map((tag) => tag.name)
                    )
                  }
                />
                {getCollectionTags(collection.name)?.map((tag) => (
                  <Chip
                    key={tag.id}
                    label={tag.name}
                    color="primary"
                    variant="filled"
                    onClick={() => changeTagsSelection([tag.name])}
                    style={{
                      backgroundColor: tag.isChecked
                        ? "#323d04"
                        : "transparent",
                      color: "#fff",
                      border: "1px solid #fff",
                      margin: "5px",
                    }}
                  />
                ))}
              </span>
            ))}
          </Paper>
        ) : (
          tags?.map((tag) => (
            <Chip
              key={tag.id}
              label={tag.name}
              color="primary"
              variant="filled"
              onClick={() => changeTagsSelection([tag.name])}
              style={{
                backgroundColor: tag.isChecked ? "#323d04" : "#383737",
                color: "#fff",
                border: "1px solid #fff",
              }}
            />
          ))
        )}
      </Stack>
    </Box>
  );
};
