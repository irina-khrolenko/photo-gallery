import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { LanguageButton } from "../..";

export const Header = () => {
  const navItems = ["Gallery", "Blog", "Галерея", "Блог"];
  return (
    <AppBar component="nav" className="bg-black">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Iryna Khrolenko
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "#fff" }}>
              {item}
            </Button>
          ))}
          <LanguageButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
