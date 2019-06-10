import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

export default function PostTags() {
  return (
    <StyledTags>
      <Link to="/">
        <h5>#Tag</h5>
      </Link>
      <Link to="/">
        <h5>#Tag</h5>
      </Link>
      <Link to="/">
        <h5>#Tag</h5>
      </Link>
    </StyledTags>
  )
}

const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    margin-right: var(--one);
    color: var(--dark-1);
    font-family: var(--serif);

    h5 {
      font-weight: lighter;
    }
  }
`
