import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

import { useSiteMetadata } from "../hooks/use-site-metadata"

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h3 {
    margin: var(--one);
  }

  a {
    text-decoration: none;
  }
`

function Header() {
  const { title } = useSiteMetadata()

  return (
    <StyledHeader>
      <Link to="/">
        <h3>{title}</h3>
      </Link>
      <h3>Menu</h3>
    </StyledHeader>
  )
}

export default Header
