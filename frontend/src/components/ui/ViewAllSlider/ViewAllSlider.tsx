import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ViewAllSliderProps } from "./ViewAllSlider.props";
import Link from "next/link";
export const ViewAllSlider = ({
  sliderImage,
  sliderText,
}: ViewAllSliderProps) => {
  return (
    <>
      <Box
        component="div"
        className="w-screen h-[30vh] flex justify-center items-center"
      >
        <Box
          component="div"
          className="w-full h-[30vh]"
          sx={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(${sliderImage})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            component="div"
            className="w-full h-full flex flex-col justify-center items-center"
          >
            <Button>
              <Link href="/gallery">
                <Typography variant="h5" component="h2">
                  {sliderText}
                </Typography>
              </Link>
            </Button>
            <hr className="w-1/3 border-2 text-gallery-white my-4" />
          </Box>
        </Box>
      </Box>
    </>
  );
};
