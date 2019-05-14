import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    margin-right: var(--one);
    color: var(--dark-1);
    font-family: var(--serif);
    /* text-decoration: none; */

    h5 {
      font-weight: lighter;
    }
  }
`

export default function PostTags() {
  return (
    <StyledTags>
      <Link>
        <h5>#Tag</h5>
      </Link>
      <Link>
        <h5>#Tag</h5>
      </Link>
      <Link>
        <h5>#Tag</h5>
      </Link>
    </StyledTags>
  )
}
