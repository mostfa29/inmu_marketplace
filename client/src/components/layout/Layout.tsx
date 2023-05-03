import {Box, useMediaQuery} from "@mui/material"
import  {useState} from "react"
import {Outlet} from "react-router-dom"
import {useSelector} from "react-redux"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

function Layout() {
  const isNonMobile = useMediaQuery("(min-width:600px");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
//   const userId = useSelector((state)=> state.global.userId)
//   const {data} = useGetUserQuery(userId)
//   console.log('data ',data)

  return (
    <Box display={'flex'} width="100%" height="100%" >
        <Sidebar
        //  user={data || {}}
         isNonMobile={isNonMobile}
         drawerWidth="250px"
        //  isSidebarOpen={isSidebarOpen}
        //  setIsSidebarOpen={setIsSidebarOpen}
         />
        <Box flexGrow={1}>
            <Navbar
            // user={data || {}}
            // isSidebarOpen={isSidebarOpen}
            // setIsSidebarOpen={setIsSidebarOpen}
            />
            <Outlet/>
        </Box>
    </Box>
  )
}

export default Layout