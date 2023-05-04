import { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";

import {
  AppBar,
  useTheme,
  Toolbar,
  IconButton,
  Box,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import FlexBetween from "../common/FlexBetween";
import { useDispatch, useSelector } from "react-redux";
import profileImage from "../../assets/images/profile .jpeg"
import logoImage from "../../assets/images/profile .jpeg"
import {
  selectIsSidebarOpen,
} from "../../store/selectors/sidebarSelectors";
import { selectIsDarkMode } from "../../store/selectors/themeSelector";
import {
  setIsSidebarOpen,
} from "../../store/actions/sidebarActions";
import { setIsDarkMode } from "../../store/actions/themeActions";
import { selectIsAuthenticated } from "../../store/selectors/authSelectors";

function Navbar() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSidebarOpen = useSelector(selectIsSidebarOpen);
  const isDarkMode = useSelector(selectIsDarkMode);
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isAuthenticated = useSelector(selectIsAuthenticated)



  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
        maxWidth: "100vw",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: isSmallScreen ? "center" : "flex-start",
          padding: isSmallScreen ? "8px" : "16px",
        }}
      >
        {/* Left Side */}
        {isAuthenticated ? (
          <FlexBetween sx={{ width: "60%" }}>
            <IconButton onClick={()=> dispatch(setIsSidebarOpen(!isSidebarOpen))}>
              <MenuIcon />
            </IconButton>
          </FlexBetween>
        ) : (
          <Box component="img" alt="logo" src={logoImage} height="32px" />
        )}
  
        {/* Right Side */}
        {isAuthenticated ? (
          <FlexBetween
            sx={{
              width: "40%",
              justifyContent: "end",
              gap: "1rem",
              alignItems: isSmallScreen ? "center" : "flex-start",
            }}
          >
            <IconButton onClick={() => dispatch(setIsDarkMode(!isDarkMode))}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlined sx={{ fontSize: "25px" }} />
              ) : (
                <LightModeOutlined sx={{ fontSize: "25px" }} />
              )}
            </IconButton>
            <IconButton>
              <SettingsOutlined sx={{ fontSize: "25px" }} />
            </IconButton>
  
            <FlexBetween>
              <Button
                onClick={handleClick}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textTransform: "none",
                  gap: "1rem",
                }}
              >
                <Box
                  component="img"
                  alt="profile"
                  src={profileImage}
                  height="32px"
                  width="32px"
                  borderRadius="50%"
                  sx={{ objectFit: "cover" }}
                />
  
                <ArrowDropDownOutlined
                  sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
                />
              </Button>
  
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </FlexBetween>
          </FlexBetween>
        ) : (
          <Button color="inherit">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
  
}

export default Navbar