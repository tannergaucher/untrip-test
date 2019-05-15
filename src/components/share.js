import React from "react"
import { Mail, Facebook, Pinterest, Twitter, Link } from "grommet-icons"
import styled from "styled-components"

const StyledShare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--one);
  margin-bottom: var(--one);

  a {
    margin-right: var(--one);
  }
`

export default function share() {
  return (
    <StyledShare>
      <a href="#">
        <Link color="var(--dark-1)" />
      </a>

      <a href="#">
        <Mail color="var(--dark-1)" />
      </a>

      <a href="#">
        <Pinterest color="var(--dark-1)" />
      </a>

      <a href="#">
        <Twitter color="var(--dark-1)" />
      </a>

      <a href="#">
        <Facebook color="var(--dark-1)" />
      </a>
    </StyledShare>
  )
}
