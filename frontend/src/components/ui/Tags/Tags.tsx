import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { TagsProps } from "./Tags.props";

export const Tags = ({ tags, changeTagSelection }: TagsProps) => {
  return (
    <Box className="relative my-10">
      <Stack direction="row" flexWrap={"wrap"} gap={1}>
        {tags?.map((tag) => (
          <Chip
            key={tag.id}
            label={tag.name}
            color="primary"
            variant="filled"
            onClick={() => changeTagSelection(tag.name)}
            style={{
              backgroundColor: tag.isChecked ? "#323d04" : "#383737",
              color: "#fff",
              border: "1px solid #fff",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};
