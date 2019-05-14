import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const StyledFooter = styled.footer`
  background: var(--dark-1);
  color: var(--light-1);
  padding: var(--one);

  h3 {
    padding: var(--one);
  }
`

export default function footer() {
  const { title } = useSiteMetadata()

  return (
    <StyledFooter>
      <h3>{title}</h3>
    </StyledFooter>
  )
}
