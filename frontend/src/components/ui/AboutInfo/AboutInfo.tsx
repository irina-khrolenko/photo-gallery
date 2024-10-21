import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { AboutInfoProps } from "./AboutInfo.props";
import Box from "@mui/material/Box";
import BlockRendererClient from "../BlockRendererClient/BlockRendererClient";

export const AboutInfo = ({ mainText }: AboutInfoProps) => {
  return (
    <>
      {mainText?.length ? (
        <Stack direction="row" justifyContent="space-between" spacing={1}>
          <Box component="div" width="80%" maxWidth={700}>
            <BlockRendererClient content={mainText} />
          </Box>
        </Stack>
      ) : (
        <Stack direction="row" justifyContent="space-between" spacing={1}>
          <Skeleton variant="rectangular" width={700} height={500} />
          <Skeleton variant="rectangular" width={400} height={500} />
        </Stack>
      )}
    </>
  );
};
