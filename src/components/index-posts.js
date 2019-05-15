import React from "react"
import styled from "styled-components"

import Card from "../components/card"
import { useAllMarkdownPosts } from "../hooks/use-allMarkdown-posts"

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: var(--one);
`

export default function IndexPosts() {
  const { edges } = useAllMarkdownPosts()

  return (
    <>
      {/* FEATURED POSTS */}
      {/* REGULAR POSTS */}
      <PostsGrid>
        {edges.map(edge => (
          <Card key={edge.node.id} edge={edge} />
        ))}
      </PostsGrid>
    </>
  )
}
