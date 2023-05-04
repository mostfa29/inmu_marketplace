import {createTheme} from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import {ThemeProvider, CssBaseline} from '@mui/material'
import { useSelector } from "react-redux"
import {BrowserRouter,Routes,Route, Navigate, } from "react-router-dom"
import Layout from "./components/layout/Layout"
import LandingPage from "./pages/landing-page/LandingPage"
import Marketplace from "./pages/marketplace/Marketplace"
import { selectIsDarkMode } from "./store/selectors/themeSelector"
import { selectIsAuthenticated } from "./store/selectors/authSelectors"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  console.log(isAuthenticated)
  // const navigate = useNavigate()



  const darkMode = useSelector(selectIsDarkMode);
  const theme = useMemo(()=> createTheme(themeSettings(darkMode? "dark": "light")), [darkMode])
 console.log(isAuthenticated)

  return (
    <>
<BrowserRouter>

<ThemeProvider theme={theme}>
<CssBaseline/>
<Routes>

 {/* {isAuthenticated? */}
 
(<Route   element={<Layout/>}>
<Route path="/marketplace" element={<Marketplace/>} />
</Route>) 

<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Register/>}/>
<Route path="/" element={<LandingPage/>} />

</Routes>
</ThemeProvider>
</BrowserRouter>
    </>
  )
}

export default App
