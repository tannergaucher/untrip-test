import React from "react"
import styled from "styled-components"

import Author from "../components/post-author"
import Tags from "../components/post-tags"

// LAYOUTS
import FullBanner from "../components/layouts/full-banner-layout"
import AlmostFullBanner from "../components/layouts/almost-full-banner-layout"
import HalfBanner from "../components/layouts/half-banner-layout"
import BasicImage from "../components/layouts/basic-image-layout"

const Container = styled.div`
  background: lime;
  max-width: var(--container);
  margin: var(--one) auto;
  padding-left: var(--one);
  padding-right: var(--one);
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: pink;
  align-items: flex-start;
`

const StyledPost = styled.article``

export default function post({ data }) {
  const { layout } = data.markdownRemark.frontmatter

  let Layout

  if (layout === "Full Banner") {
    Layout = FullBanner
  } else if (layout === "Almost Full Banner") {
    Layout = AlmostFullBanner
  } else if (layout === "Half Banner") {
    Layout = HalfBanner
  } else if (layout === "Basic Image") {
    Layout = BasicImage
  }

  return (
    <Layout
      fluid={
        // handle when post has no image
        data.markdownRemark.frontmatter.featuredImage
          ? data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid
          : ""
      }
      title={data.markdownRemark.frontmatter.title}
    >
      <Container>
        <Wrapper>
          <StyledPost
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
          <Author />
        </Wrapper>
      </Container>
    </Layout>
  )
}

export const postPageQuery = graphql`
  query POST_PAGE_QUERY($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        layout
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
