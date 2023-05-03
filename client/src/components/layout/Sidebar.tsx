import React from 'react'
import{
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material"

import {
    SettingsOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined
} from "@mui/icons-material"

import {useEffect,useState} from "react";
import {useLocation, useNavigate} from "react-router-dom"
import FlexBetween from "../common/FlexBetween"
import profileImage from "../../assets/images/profile .jpeg"
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

import { useSelector } from 'react-redux';



const navItems = [
    // {
    //     text:"Dashboard",
    //     icon:<HomeOutlined/>
    // },
    // {
    //     text:"Client Facing",
    //     icon:null
    // },
    // {
    //     text:"Products",
    //     icon:<ShoppingCartOutlined/>
    // },
    {
        text:"Marketplace",
        icon:<GroupOutlinedIcon/>
    },
    // {
    //     text:"Transactions",
    //     icon:<ReceiptLongOutlined/>
    // },
    // {
    //     text:"Geography",
    //     icon:<PublicOutlined/>
    // },
    // {
    //     text:"Sales",
    //     icon: null
    // },
    // {
    //     text:"Overview",
    //     icon:<PointOfSaleOutlined/>
    // },
    // {
    //     text:"Daily",
    //     icon:<TodayOutlined/>
    // },
    // {
    //     text:"Monthly",
    //     icon:<CalendarMonthOutlined/>
    // },
    // {
    //     text:"Breakdown",
    //     icon:<PieChartOutlined/>
    // },

]

function Sidebar(
    {
  drawerWidth='220px',
  isNonMobile=true
}
) {
   const isSidebarOpen= useSelector((state:any) => state.sideBar.isSideBarOpen);
//    const t = useSelector((state:any) => state.sideBar.isSideBarOpen);
//    console.log(t)

   const {pathname} = useLocation()
   const [active, setActive] = useState('')
   const navigate = useNavigate()
   const theme = useTheme()

   
   useEffect(()=>{
    setActive(pathname.substring(1))
   },[pathname])
 
  return (
    <Box component="nav">
        {isSidebarOpen && (
            <Drawer 
            open={isSidebarOpen}
            // onClose={()=> setIsSidebarOpen(false)}
            variant="persistent"
            anchor="left"
            sx={{
                width: drawerWidth,
                "& .MuiDrawer-paper":{
                    color: theme.palette.secondary[200],
                    backgroundColor: theme.palette.background.alt,
                    boxSixing: "border-box",
                    borderWidth: isNonMobile ? 0 : "2px",
                    width: drawerWidth
                }
            }}
            >
                <Box width="100%">
                    <Box m="1rem 1.5rem 1.5rem 2.5rem">
                        <FlexBetween color={theme.palette.secondary.main}>
                            <Box display="flex" alignItems="center" gap="0.5rem">
                                <Typography variant="h2" fontWeight="bold">
                                    INMU
                                </Typography>
                            </Box>
                            {!isNonMobile && (
                                <IconButton /*onClick={()=> setIsSidebarOpen(!isSidebarOpen)}*/>
                                    <ChevronLeftOutlinedIcon/>
                                </IconButton>
                            )}
                        </FlexBetween>   
                    </Box>

                    <List>
                        {
                            navItems.map(({text,icon})=>{
                                if(!icon){
                                    return(
                                        <Typography key={text} sx={{ m:"2.25rem 0 1rem 3rem"}}>
                                            {text}
                                        </Typography>
                                    )
                                }
                                const lcText = text.toLowerCase()

                                return(
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton
                                         onClick={()=>{
                                            navigate(`/${lcText}`)
                                            setActive(lcText)
                                         }}
                                         sx={{
                                            backgroundColor: active === lcText? theme.palette.secondary[300] : "transparent",
                                            color: active === lcText? theme.palette.primary[600]: theme.palette.secondary[200],

                                         }}
                                         >
                                            <ListItemIcon
                                            sx={{
                                                ml:"2rem",
                                                color:
                                                active == lcText?
                                                theme.palette.primary[600]
                                                : theme.palette.secondary[200]
                                            }} >
                                                {icon}
                                            </ListItemIcon>

                                            <ListItemText primary={text}/>

                                            {active === lcText && (
                                                <ChevronRightOutlinedIcon sx={{ml:"auto"}} />
                                            )}

                                         </ListItemButton>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Box>

                <Box  m="0rem 0 1rem 0">
                    <Divider/>
                    <FlexBetween textTransform="none" gap='1rem' m="1.5rem 2rem 0 3rem">
                        <Box
                        component="img"
                        alt="profile"
                        src={profileImage}
                        height="40px"
                        width="40px"
                        borderRadius="50%"
                        sx={{objectFit:"cover"}}
                        />

                   

                         <SettingsOutlined
                         sx={{color:theme.palette.secondary[300],
                            fontSize: "25px"
                        }}
                        />

                        
                    </FlexBetween>
{/* 
                    <Box textAlign='center'>
                            <Typography
                             fontWeight="bold"
                             fontSize="0.9rem"
                             sx={{color:theme.palette.secondary[100]}}
                         >
                            {user.name}   
                         </Typography> 

                         <Typography
                             fontSize="0.8rem"
                             sx={{color:theme.palette.secondary[200]}}
                         >
                            {user.occupation}   
                         </Typography> 
                        </Box> */}
                </Box>
            </Drawer>
        )}
    </Box>
  )
}

export default Sidebar