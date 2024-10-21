import { PhoneWithMediaProps } from "./PhoneWithMedia.props";
import { Box } from "@mui/material";

export const PhoneWithMedia = ({
  phoneMockup,
  media,
  mediaType,
  styles,
  instaMockup,
}: PhoneWithMediaProps) => {
  return (
    <Box
      component="div"
      className="relative flex justify-center items-center min-w-[160px]"
      sx={styles || {}}
    >
      {mediaType === "image" && (
        <img
          src={media}
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            zIndex: 1,
            borderRadius: "20px",
            width: "96%",
            height: "97%",
            objectFit: "cover",
            top: "1%",
            left: "3%",
            position: "absolute",
          }}
        />
      )}
      {mediaType === "video" && (
        <video
          src={media}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            zIndex: 1,
            borderRadius: "20px",
            width: "96%",
            height: "97%",
            objectFit: "cover",
            top: "1%",
            left: "3%",
            position: "absolute",
          }}
        />
      )}
      {mediaType === "instagramPost" && (
        <>
          <div className="absolute top-[17%] left-[2%] w-[160px] h-[170px] overflow-hidden">
            <img
              src={media}
              alt="Phone Frame"
              className="absolute top-0 left-0 w-full h-full"
              style={{
                zIndex: 3,
                width: "90%",
                height: "90%",
                objectFit: "cover",
                top: "1%",
                left: "3%",
                position: "absolute",
              }}
            />
          </div>
          <img
            src={instaMockup}
            alt="Phone Frame"
            className="absolute top-0 left-0 w-full h-full"
            style={{
              zIndex: 1,
              borderRadius: "20px",
              width: "95%",
              height: "97%",
              objectFit: "cover",
              top: "1%",
              left: "3%",
              position: "absolute",
            }}
          />
        </>
      )}
      <img
        src={phoneMockup}
        alt="Phone Frame"
        className="absolute top-0 left-0 w-full h-full"
        style={{
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};
