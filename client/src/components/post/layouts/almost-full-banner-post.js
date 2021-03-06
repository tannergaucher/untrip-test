import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { Header, Footer } from "../../elements"

import "./layout.css"

export default function AlmostFullBannerPost({ children, title, fluid }) {
  return (
    <>
      <AlmostFullBanner fluid={fluid} title={title} />
      {children}
      <Footer />
    </>
  )
}

const StyledAlmostFullBanner = styled.div`
  position: relative;

  header {
    width: 100%;
    color: var(--dark-1);

    a {
      color: var(--dark-1);
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

function AlmostFullBanner({ title, fluid }) {
  return (
    <StyledAlmostFullBanner>
      <Header />
      <Img
        fluid={fluid}
        style={{
          height: "calc(100vh - 128px)",
          filter: "var(--darken-filter)",
        }}
      />
      <h1 className="post-title">{title}</h1>
    </StyledAlmostFullBanner>
  )
}
