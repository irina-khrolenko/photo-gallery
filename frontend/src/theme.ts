"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: "dark",
    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: () => ({
          background: "transparent",
        }),
      },
    },
    MuiStack: {
      styleOverrides: {
        root: () => ({
          color: "#fff",
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: () => ({
          color: "#fff",
        }),
      },
    },
  },
});

export default theme;
