import React from "react"
import { Mail, FacebookOption, Pinterest, Twitter, Link } from "grommet-icons"
import styled from "styled-components"

const StyledShare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--half);
  margin-bottom: var(--half);

  a {
    margin-right: var(--one);
  }
`

export default function share() {
  return (
    <StyledShare>
      <a href="#">
        <FacebookOption color="var(--dark-1)" />
      </a>
      <a href="#">
        <Twitter color="var(--dark-1)" />
      </a>
      <a href="#">
        <Pinterest color="var(--dark-1)" />
      </a>
      <a href="#">
        <Mail color="var(--dark-1)" />
      </a>
      <a href="#">
        <Link color="var(--dark-1)" />
      </a>
    </StyledShare>
  )
}
