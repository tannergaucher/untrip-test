import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background: var(--dark-1);
  color: var(--light-1);
  padding: var(--one);
  width: 100%;

  h3 {
    padding: var(--one);
  }
`

export default function footer() {
  return (
    <StyledFooter>
      <h3>Footer</h3>
    </StyledFooter>
  )
}
