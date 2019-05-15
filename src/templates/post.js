import React from "react"
import styled from "styled-components"

import Author from "../components/post-author"
import Tags from "../components/post-tags"
import Share from "../components/share"

import ListDropdown from "../components/list-dropdown"

// LAYOUTS
import FullBanner from "../components/layouts/full-banner-layout"
import AlmostFullBanner from "../components/layouts/almost-full-banner-layout"
import HalfBanner from "../components/layouts/half-banner-layout"
import BasicImage from "../components/layouts/basic-image-layout"

const Container = styled.div`
  display: flex;
  max-width: var(--container);
  padding-left: var(--one);
  padding-right: var(--one);

  @media (max-width: 600px) {
    margin: var(--three) auto;
  }

  @media (min-width: 600px) {
    margin: var(--four) auto;
  }

  @media (min-width: 1200px) {
    margin: var(--eight) auto;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .post-frontmatter {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sticky {
    position: sticky;
    top: 0;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  .post-frontmatter {
    display: flex;
  }

  .author {
    margin-top: var(--one);
    margin-bottom: var(--one);
  }
`

const StyledPost = styled.article`
  margin-top: var(--one);
  margin-bottom: var(--one);
`

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
          <div className="flex">
            <Share />
            <ListDropdown />
          </div>
          <StyledPost
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
          <div className="flex">
            <Share />
            <ListDropdown />
          </div>
          <div className="author">
            <Author />
            <Tags />
          </div>
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
