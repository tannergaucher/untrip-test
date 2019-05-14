import React from "react"
import styled from "styled-components"

const StyledTags = styled.div`
  display: flex;
`

const Tag = styled.h6`
  margin: var(--one);
  font-weight: lighter;
  font-family: var(--serif);
`

export default function PostTags() {
  return (
    <StyledTags>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
    </StyledTags>
  )
}
