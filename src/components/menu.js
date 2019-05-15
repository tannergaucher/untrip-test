import React, { useState } from "react"
import { Menu, Close } from "grommet-icons"
import styled from "styled-components"

import PlainButton from "../components/styles/plain-button"
import Layer from "../components/styles/layer"

const StyledMenu = styled.div`
  margin-top: var(--one);
`

export default function MenuLayer() {
  const [show, setShow] = useState(false)

  return (
    <StyledMenu>
      <PlainButton onClick={() => setShow(true)}>
        <Menu color="var(--dark-1)" />
      </PlainButton>
      {show && (
        <Layer
          position="right"
          full="vertical"
          onClickOutside={() => setShow(false)}
          onEsc={() => setShow(false)}
        >
          <PlainButton className="close" onClick={() => setShow(false)}>
            <Close color="var(--dark-1)" />
          </PlainButton>
          <h1>Menu</h1>
        </Layer>
      )}
    </StyledMenu>
  )
}
