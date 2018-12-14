import React from "react"
import { MemoryRouter as Router } from "react-router"

import withRoot from "./lib/withRoot"
import Pages from "./pages"

const App: React.SFC = () => (
  <Router>
    <Pages />
  </Router>
)

export default withRoot(App)
