import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Link from "gatsby-link"

const StyledFooter = styled.footer`
  background: var(--dark-1);
  color: var(--light-1);
  padding: var(--one);

  a {
    text-decoration: none;
    h3 {
      color: var(--light-1);
      padding: var(--one);
    }
  }
`

export default function Footer() {
  const { title } = useSiteMetadata()

  return (
    <StyledFooter>
      <Link to="/">
        <h3>{title}</h3>
      </Link>
    </StyledFooter>
  )
}
