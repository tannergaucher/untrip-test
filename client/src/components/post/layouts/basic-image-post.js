import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { Header, Footer } from "../../elements"

const StyledLayout = styled.div`
  header {
    a {
      color: var(--dark-1);
    }
  }
  .post-title {
    padding-left: var(--half);
    padding-right: var(--half);
  }

  .gatsby-image-wrapper {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
  }

  @media (min-width: 600px) {
    .post-title {
      text-align: center;
    }
  }
`

export default function BasicImageLayout({ children, title, fluid }) {
  return (
    <StyledLayout>
      <Header />
      <h1 className="post-title">{title}</h1>
      <Img fluid={fluid} />
      {children}
      <Footer />
    </StyledLayout>
  )
}
