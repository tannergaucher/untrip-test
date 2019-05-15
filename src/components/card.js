import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Bookmark } from "grommet-icons"

import PlainButton from "../components/styles/plain-button"

const StyledCard = styled.div`
  .category {
    margin-top: var(--half);
    margin-bottom: var(--half);
    color: var(--dark-4);
    font-weight: 400;
  }

  .title {
    margin-top: var(--half);
    line-height: 1;
  }

  a {
    text-decoration: none;
  }

  img {
    filter: var(--darken-filter);
  }
`

export default function Card({ edge }) {
  const { slug } = edge.node.fields
  const { category, title, featuredImage } = edge.node.frontmatter

  return (
    <StyledCard>
      <Link to={slug}>
        <h5 className="category">{category}</h5>
        <div className="relative">
          {/* add responsive image heights */}
          <Img fluid={featuredImage.childImageSharp.fluid} />
        </div>
        <h1 className="title">{title}</h1>
      </Link>
    </StyledCard>
  )
}

// CARD FRAGMENT
