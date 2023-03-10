import {
  Toolbar,
  AppBar,
  Avatar,
  Link,
  Typography,
  IconButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

const Appbar = ({ drawerWidth, showDrwer }) => {


  return (
    <AppBar
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { xs: 0, sm: `${drawerWidth}px` },
      }}
      position="static"
    >
      <Toolbar>
        <IconButton
          onClick={() => {
            showDrwer();
          }}
          sx={{ display: { sm: "none" }, color: "#fff" }}
        >
          <Menu />
        </IconButton>
        <Link
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            "&:hover": { fontSize: "16.5px" },
          }}
          href="/"
          color="inherit"
        >
          My expenses
        </Link>

        <Typography variant="body1" color="inherit" mr={2}>
          HAMADA
        </Typography>

        <Avatar alt="Cindy Baker" src="./images/22.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
