import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { DetailedImageProps } from "./DetailedImage.props";

export const DetailedImage = ({
  isImageOpen,
  handleCloseModal,
}: DetailedImageProps) => {
  return (
    <Modal
      open={isImageOpen}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        Detailed Image
      </Box>
    </Modal>
  );
};
