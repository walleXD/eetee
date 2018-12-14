import React from "react"
import { MemoryRouter as Router } from "react-router"

import Pages from "./pages"

const App: React.SFC = () => (
  <Router>
    <Pages />
  </Router>
)

export default App
