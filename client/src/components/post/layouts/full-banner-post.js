import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { Header, Footer } from "../../elements"
import "./layout.css"

export default function FullBannerPost({ children, title, fluid }) {
  return (
    <>
      <FullBanner fluid={fluid} title={title} />
      {children}
      <Footer />
    </>
  )
}

const StyledFullBanner = styled.div`
  position: relative;

  header {
    position: absolute;
    top: 0;
    z-index: 4;
    width: 100%;
    color: var(--light-1);

    a {
      color: var(--light-1);
    }
  }

  .post-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--light-1);
  }
`

function FullBanner({ title, fluid }) {
  return (
    <StyledFullBanner>
      <Header />
      <Img
        fluid={fluid}
        style={{ height: "100vh", filter: "var(--darken-filter)" }}
      />
      <h1 className="post-title">{title}</h1>
    </StyledFullBanner>
  )
}
