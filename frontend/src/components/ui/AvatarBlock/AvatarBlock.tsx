import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";
import { AvatarBlockProps } from "./AvatarBlock.props";

export const AvatarBlock = ({ mainAvatar }: AvatarBlockProps) => {
  return (
    <>
      {mainAvatar ? (
        <Avatar
          alt="Remy Sharp"
          src={mainAvatar}
          sx={{ width: 300, height: 300 }}
        />
      ) : (
        <Skeleton variant="circular" width={400} height={400} />
      )}
    </>
  );
};
