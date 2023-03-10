import React from "react";
import { Outlet } from "react-router-dom";
// start import for Drawer
import Appbar from "MUI-components/Appbar";
import Drawerr from "MUI-components/Drawer";
import { Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import getDesignTokens from "style/MyTheme";

const drawerWidth = 240;
const Root = () => {
  const [mode, setmyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );

  const [noneORblock, setnoneORblock] = useState("none");
  const [drawerType, setdrawerType] = useState("permanent");
  const showDrwer = () => {
    setdrawerType("temporary");
    setnoneORblock("block");
  };

  const hideDrawer = () => {
    setdrawerType("permanent");
    setnoneORblock("none");
  };

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Appbar 
        {...{drawerWidth,showDrwer}}
        />
        {/* start drawer */}
        <Drawerr
          {...{
            drawerWidth,
            setmyMode,
            noneORblock,
            drawerType,
            setnoneORblock,
          }}
          setnoneORblock={setnoneORblock}
          setdrawerType={setdrawerType}
          hideDrawer={hideDrawer}
        />
        {/* start Box >>> "the part contain remind data in center group of lists" */}

        <Box
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: " flex",
            justifyContent: "center",
            mt: "66px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
