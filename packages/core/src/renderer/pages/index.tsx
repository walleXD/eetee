import React from "react"
import { Route } from "react-router"

import HomePage from "./Home"

const Pages: React.SFC = () => (
  <>
    <Route exact={true} path="/" component={HomePage} />
  </>
)

export default Pages
