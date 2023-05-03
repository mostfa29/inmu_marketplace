import {createTheme} from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import {ThemeProvider, CssBaseline} from '@mui/material'
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "./store/reducers/themeSlice"
import Navbar from "./components/layout/Navbar"


function App() {


  const dispatch = useDispatch();
  const darkMode = useSelector((state:any) => state.theme.darkMode);
  const theme = useMemo(()=> createTheme(themeSettings(darkMode? "dark": "light")), [darkMode])

  return (
    <>
<ThemeProvider theme={theme}>
<CssBaseline/>
<Navbar/>
</ThemeProvider>
    </>
  )
}

export default App
