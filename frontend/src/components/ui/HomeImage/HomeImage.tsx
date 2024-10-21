import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { HomeImageProps } from "./HomeImage.props";

export const HomeImage = ({ mainImage }: HomeImageProps) => {
  return (
    <Box
      component="div"
      className="w-screen h-[70vh] flex justify-center items-center"
    >
      {mainImage ? (
        <Box
          component="div"
          className="w-full h-[70vh]"
          sx={{
            backgroundImage: `url(${mainImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ) : (
        <Skeleton width="100%" sx={{ height: "70vh" }} />
      )}
    </Box>
  );
};
