import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { HomeImageProps } from "./HomeImage.props";

export const HomeImage = ({ mainImage }: HomeImageProps) => {
  return (
    <>
      <Box className="w-screen h-screen flex justify-center items-center">
        {mainImage ? (
          <Box
            className="w-full h-[80vh]"
            sx={{
              backgroundImage: `url(${mainImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ) : (
          <Skeleton width="90%" height="90vh" />
        )}
      </Box>
    </>
  );
};
