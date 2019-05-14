import React from "react"
import { Bookmark } from "grommet-icons"

import IconButton from "../components/styles/icon-button"

export default function TogglePlace() {
  return (
    <IconButton>
      <span>Add</span>
      <Bookmark color="var(--dark-1)" className="svg-icon" />
    </IconButton>
  )
}
