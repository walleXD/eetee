import { AppBar, Toolbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import React from "react"

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
})

const TopBar = () => {
  const classes = useStyles({})
  return (
    <AppBar position="static" color="primary" className={classes.root}>
      <Toolbar variant="dense" />
    </AppBar>
  )
}

export default TopBar
