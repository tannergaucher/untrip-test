import React from "react"
import styled from "styled-components"

import Card from "./card"
import { useAllMarkdownPosts } from "../../hooks/use-allMarkdown-posts"

const StyledPostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: var(--two);
  max-width: var(--max-width);
  margin: 0 auto;
`

export default function IndexPosts() {
  const { edges } = useAllMarkdownPosts()

  return (
    <StyledPostsGrid>
      {edges.map(edge => (
        <Card key={edge.node.id} edge={edge} />
      ))}
    </StyledPostsGrid>
  )
}
