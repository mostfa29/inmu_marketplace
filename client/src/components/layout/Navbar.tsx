import  {useState} from "react"
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  SettingsOutlined,
  ArrowDropDownOutlined
} from "@mui/icons-material"

// import FlexBetween from "./FlexBetween"
import {useDispatch} from "react-redux"
import profileImage from "../../assets/images/profile .jpeg"
import {AppBar,useTheme, Toolbar,IconButton, Box, Button, Menu, MenuItem} from "@mui/material"
import FlexBetween from "../common/FlexBetween"
import { toggleTheme } from "../../store/reducers/themeSlice"
import { toggleSideBar } from "../../store/reducers/sideBarSlice"



function Navbar() {
  const dispatch = useDispatch()
  const theme = useTheme()

  const [anchorEl, setAnchorEl] = useState(null)
  const isOpen = Boolean(anchorEl)
  const handleClick = (event:any)=> setAnchorEl(event.currentTarget)
  const handleClose = ()=> setAnchorEl(null)

  return (
    <AppBar
    sx={{
      position: "static",
      background:"none",
      boxShadow: "none",
      maxWidth:"100vw"
    }}
    >
     <Toolbar sx={{justifyContent: "space-between"}}>
      {/* Left Side */}
      <FlexBetween sx={{width:"60%"}}>
       <IconButton onClick={()=> dispatch(toggleSideBar())/*setIsSidebarOpen(!isSidebarOpen)*/}>
        <MenuIcon/>
       </IconButton>


      </FlexBetween>

      {/* Right Side */}
      <FlexBetween sx={{width:"40%", justifyContent:"end", gap:"1rem"}} >
        <IconButton onClick={()=>dispatch(toggleTheme())}>
          {theme.palette.mode === "dark"? (
            <DarkModeOutlined sx={{ fontSize:"25px"}}/>
          ):
          (
            <LightModeOutlined sx={{fontSize:'25px'}}/>
          )
          }
        </IconButton>
        <IconButton>
          <SettingsOutlined sx={{ fontSize:"25px"}}/>
        </IconButton>

        <FlexBetween>
          <Button 
          onClick={handleClick}
          sx={{
            display:"flex",
            justifyContent: "space-between",
            alignItems:'center',
            textTransform:"none",
            gap:"1rem"
          }}
          >
            <Box
            component="img"
            alt='profile'
            src={profileImage}
            height="32px"
            width='32px'
            borderRadius='50%'
            sx={{objectFit:"cover"}}/>

            {/* <Box textAlign="left">
              <Typography
              fontWeight="bold"
              fontSize="0.85rem"
              sx={{color:theme.palette.secondary[100]}}
            >
              {user.name}
            </Typography>

            <Typography
              fontSize="0.75rem"
              sx={{color:theme.palette.secondary[200]}}
            >
              {user.occupation}
            </Typography>
            </Box> */}
            <ArrowDropDownOutlined
            sx={{color:theme.palette.secondary[300], fontSize:'25px'}}
            />
          </Button>

          <Menu
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleClose}
          anchorOrigin={{vertical:"bottom", horizontal:'center'}}
          >
            <MenuItem onClick={handleClose}>Log Out</MenuItem>
          </Menu>
        </FlexBetween>
      </FlexBetween>
     </Toolbar>
    </AppBar>
  )
}

export default Navbar