import { ThemeProvider } from "@mui/material/styles"
import { Home } from "./pages/index"
import theme from "./styles/theme"

function App() {

  return (

    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>

  )
}

export default App
