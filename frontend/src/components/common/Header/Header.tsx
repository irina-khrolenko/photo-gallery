import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { LanguageButton } from "../..";
import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations("Header");
  const navItems = [
    { name: t("gallery"), url: "/gallery" },
    { name: t("blog"), url: "/blog" },
  ];

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "space-between",
      }}
      className="w-full px-20 py-4"
    >
      <Box component="div" className="w-fit">
        <Link href="/">
          <Typography
            variant="h6"
            component="div"
            className="w-fit"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Iryna Khrolenko
          </Typography>
        </Link>
      </Box>
      <Box
        component="div"
        sx={{ display: { xs: "none", sm: "block" } }}
        className="w-fit"
      >
        {navItems.map((item) => (
          <Link href={item.url} key={item.url}>
            <Button key={item.url} sx={{ color: "#fff" }}>
              {item.name}
            </Button>
          </Link>
        ))}
        <LanguageButton />
      </Box>
    </Box>
  );
};
