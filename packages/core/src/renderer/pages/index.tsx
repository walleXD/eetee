import React from "react"
import { Route, Switch } from "react-router"

import HomePage from "./Home"
import NotFoundPage from "./NotFound"

const Pages: React.SFC = () => (
  <Switch>
    <Route exact={true} path="/" component={HomePage} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
)

export default Pages
