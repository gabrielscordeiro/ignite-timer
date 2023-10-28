import { ThemeProvider } from 'styled-components'

import { defaultTheme } from "./styles/themes/default.ts";
import { GlobalStyle } from "./styles/globals.ts";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
        Ignite Timer
        <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
