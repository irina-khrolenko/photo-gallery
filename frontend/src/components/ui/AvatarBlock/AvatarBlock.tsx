import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";
import { AvatarBlockProps } from "./AvatarBlock.props";

export const AvatarBlock = ({ mainAvatar }: AvatarBlockProps) => {
  return (
    <div style={{ transform: "scale(0.8)" }}>
      {mainAvatar ? (
        <div className="relative inline-block mr-10">
          <div
            className="absolute bg-gallery-grass rounded-full"
            style={{
              width: 300,
              height: 300,
              bottom: "-10%",
              left: "-10%",
              zIndex: -1,
              boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)",
            }}
          />
          <Avatar
            alt="Remy Sharp"
            src={mainAvatar}
            sx={{ width: 300, height: 300 }}
          />
        </div>
      ) : (
        <Skeleton variant="circular" width={400} height={400} />
      )}
    </div>
  );
};
