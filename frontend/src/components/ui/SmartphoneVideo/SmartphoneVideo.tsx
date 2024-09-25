import { SmartphoneVideoProps } from "./SmartphoneVideo.props";
import { PhoneWithMedia } from "../PhoneWithMedia/PhoneWithMedia";

export const SmartphoneVideo = ({
  mainVideo,
  phoneMockup,
}: SmartphoneVideoProps) => {
  return (
    <div>
      {mainVideo && phoneMockup ? (
        <PhoneWithMedia
          phoneMockup={phoneMockup}
          media={mainVideo}
          mediaType="video"
          styles={{
            width: "160px",
            height: "320px",
            transform: "rotate(10deg)",
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
