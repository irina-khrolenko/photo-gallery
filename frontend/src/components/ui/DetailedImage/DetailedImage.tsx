import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import CloseIcon from "@mui/icons-material/Close";
import { DetailedImageProps } from "./DetailedImage.props";

export const DetailedImage = ({
  isImageOpen,
  handleCloseModal,
  image,
}: DetailedImageProps) => {
  return (
    <Modal
      open={isImageOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        component="div"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          boxShadow: 24,
          backgroundColor: "#000000db",
          border: "none",
          p: 4,
          padding: "150px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <ImageList variant="woven">
              <ImageListItem key={image.id}>
                <img
                  srcSet={`${image.image}?auto=format&dpr=2 2x`}
                  src={`${image.image}?auto=format`}
                  alt={image.name}
                  loading="lazy"
                />
              </ImageListItem>
            </ImageList>
          </Grid>
          <Grid item xs={6} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography>
                  <span className="text-2xl">{image.name}</span>
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography>
                  <span className="text-base">{image.description}</span>
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant="h6">
                  {image.tags?.map((v: string, index: number) => (
                    <span className="mr-1 text-sm">
                      #{v}
                      {index !== (image.tags?.length || 0) - 1 && ","}
                    </span>
                  ))}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <CloseIcon
          color="action"
          fontSize="large"
          className="absolute top-[10%] right-[10%]"
          onClick={handleCloseModal}
        />
      </Box>
    </Modal>
  );
};
