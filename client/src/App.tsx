import {createTheme} from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import {ThemeProvider, CssBaseline} from '@mui/material'
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "./store/reducers/themeSlice"


function App() {


  const dispatch = useDispatch();
  const darkMode = useSelector((state:any) => state.theme.darkMode);
  const theme = useMemo(()=> createTheme(themeSettings(darkMode? "dark": "light")), [darkMode])

  return (
    <>
<ThemeProvider theme={theme}>
<CssBaseline/>
<button onClick={()=>dispatch(toggleTheme())}>toggle</button>
</ThemeProvider>
    </>
  )
}

export default App
