import React from "react"
import { MemoryRouter as Router } from "react-router"

import TopBar from "./components/TopBar"
import withRoot from "./lib/withRoot"
import Pages from "./pages"

const App: React.SFC = () => (
  <>
    <TopBar />
    <Router>
      <Pages />
    </Router>
  </>
)

export default withRoot(App)
