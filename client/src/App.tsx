import {createTheme} from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import {ThemeProvider, CssBaseline} from '@mui/material'
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "./store/reducers/themeSlice"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Layout from "./components/layout/Layout"
import LandingPage from "./pages/landing-page/LandingPage"
import Marketplace from "./pages/marketplace/Marketplace"

function App() {


  const dispatch = useDispatch();
  const darkMode = useSelector((state:any) => state.theme.darkMode);
  const theme = useMemo(()=> createTheme(themeSettings(darkMode? "dark": "light")), [darkMode])

  return (
    <>
<BrowserRouter>

<ThemeProvider theme={theme}>
<CssBaseline/>
<Routes>
 <Route element={<Layout/>}>
  {/* <Route path="/" element={<Navigate to='/dashboard' replace />} /> */}
  {/* <Route path="/dashboard" element={<Marketplace/>} /> */}
  <Route path="/marketplace" element={<Marketplace/>} />
</Route>
</Routes>
</ThemeProvider>
</BrowserRouter>
    </>
  )
}

export default App
