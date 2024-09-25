"use client";

import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

export const LanguageSwitch = styled(Switch)(() => ({
  width: 90,
  height: 44,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(45px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url(/flag_ua-1x1.svg)`,
        borderRadius: "50%",
        backgroundSize: "cover",
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#005BBB",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#83c7ff",
    width: 38,
    height: 38,
    borderRadius: "50%",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      borderRadius: "50%",
      backgroundSize: "cover",
      backgroundImage: `url(/flag_us-1x1.svg)`,
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: "50px",
    backgroundColor: "#FF4B55",
    opacity: 1,
    "&::before, &::after": {
      position: "absolute",
      top: "70%",
      transform: "translateY(-50%)",
      width: 38,
      height: 38,
      fontSize: "16px",
      fontWeight: "bold",
      color: "#fff",
    },
    "&::before": {
      content: '"UA"',
      left: 10,
      backgroundColor: "transparent",
    },
    "&::after": {
      content: '"EN"',
      right: 10,
      backgroundColor: "transparent",
    },
  },
}));
