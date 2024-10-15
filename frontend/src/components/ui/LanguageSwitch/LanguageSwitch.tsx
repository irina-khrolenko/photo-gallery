"use client";

import { styled } from "@mui/material/styles";
import Switch, { switchClasses } from "@mui/material/Switch";

export const LanguageSwitch = styled(Switch)(() => ({
  width: 80,
  height: 48,
  padding: 8,
  [`& .${switchClasses.switchBase}`]: {
    padding: 11,
    color: "#ff6a00",
    [`&.${switchClasses.checked}`]: {
      [`& .${switchClasses.thumb}`]: {
        width: 26,
        height: 26,
        backgroundImage: `url(/flag_ua-1x1.svg)`,
        opacity: 0.75,
        backgroundSize: "cover",
      },
    },
  },
  [`& .${switchClasses.thumb}`]: {
    width: 26,
    height: 26,
    backgroundImage: `url(/flag_us-1x1.svg)`,
    opacity: 0.75,
    backgroundSize: "cover",
  },
  [`& .${switchClasses.track}`]: {
    background: "linear-gradient(to right, #313131, #1f1f1f)",
    opacity: "1 !important",
    borderRadius: 20,
    position: "relative",
    "&:before, &:after": {
      display: "inline-block",
      position: "absolute",
      top: "50%",
      width: "50%",
      transform: "translateY(-50%)",
      color: "#fff",
      textAlign: "center",
      fontSize: "1rem",
      fontWeight: 500,
    },
    "&:before": {
      content: '"UA"',
      left: 4,
      opacity: 0,
    },
    "&:after": {
      content: '"EN"',
      right: 4,
    },
  },
  [`& .${switchClasses.checked}`]: {
    [`&.${switchClasses.switchBase}`]: {
      color: "#185a9d",
      transform: "translateX(32px)",
      "&:hover": {
        backgroundColor: "rgba(24,90,257,0.08)",
      },
    },
    [`& .${switchClasses.thumb}`]: {
      backgroundColor: "#fff",
    },
    [`& + .${switchClasses.track}`]: {
      background: "linear-gradient(to right, #1f1f1f, #313131)",
      "&:before": {
        opacity: 1,
      },
      "&:after": {
        opacity: 0,
      },
    },
  },
}));
