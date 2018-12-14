import {
  colors,
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider
} from "@material-ui/core"
import { install } from "@material-ui/styles"
import * as React from "react"
import "typeface-roboto/index.css" // tslint:disable-line:no-submodule-imports

install()
// A theme with custom primary and secondary color.
// It's optional.
const { amber, purple } = colors
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: amber
  },
  typography: {
    useNextVariants: true
  }
})

function withRoot<P>(Component: React.ComponentType<P>) {
  function WithRoot(props: P) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot
