import { PhoneWithMedia } from "../PhoneWithMedia/PhoneWithMedia";
import { PhonesInstagramProps } from "./PhonesInstagram.props";

export const PhonesInstagram = ({
  phoneMockup,
  mediaOne,
  mediaTwo,
  instaLikes,
  instaMockup,
}: PhonesInstagramProps) => {
  return mediaOne && phoneMockup && mediaTwo ? (
    <div className="relative flex flex-col items-center  ">
      <div
        className="absolute inset-0 bg-gallery-white rounded-full w-[350px] h-[350px]  opacity-5"
        style={{ transform: "translate(-50%, -50%)", top: "50%", left: "20%" }}
      />
      <div
        className="absolute inset-0 bg-gallery-white rounded-full w-[280px] h-[280px]  opacity-5"
        style={{ transform: "translate(-50%, -50%)", top: "50%", left: "20%" }}
      />
      <div className="relative">
        <PhoneWithMedia
          phoneMockup={phoneMockup}
          media={mediaOne}
          mediaType="instagramPost"
          instaMockup={instaMockup}
          styles={{
            width: "160px",
            height: "320px",
            transform: "scale(0.8)",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "-5%",
            left: "-5%",
            transform: "translate(-50%, 0)",
          }}
        >
          <PhoneWithMedia
            phoneMockup={phoneMockup}
            media={mediaTwo}
            mediaType="instagramPost"
            instaMockup={instaMockup}
            styles={{
              width: "160px",
              height: "320px",
              transform: "scale(0.8)",
            }}
          />
        </div>
      </div>
      <div
        className="absolute "
        style={{
          transform: "translate(-50%, -50%) scale(0.8)",
          top: "60%",
          left: "-60%",
        }}
      >
        <img src={instaLikes} />
      </div>
    </div>
  ) : (
    <></>
  );
};
