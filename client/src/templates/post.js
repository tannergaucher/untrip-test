import React from "react"
import styled from "styled-components"

import { Author, Tags, Share, ListsDropdown } from "../components/post"
import {
  FullBannerPost,
  AlmostFullBannerPost,
  HalfBannerPost,
  BasicImagePost,
} from "../components/post/layouts"

const Container = styled.div`
  display: flex;
  max-width: var(--container);
  padding-left: var(--half);
  padding-right: var(--half);

  @media (max-width: 600px) {
    margin: var(--one) auto;
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
    Layout = FullBannerPost
  } else if (layout === "Almost Full Banner") {
    Layout = AlmostFullBannerPost
  } else if (layout === "Half Banner") {
    Layout = HalfBannerPost
  } else if (layout === "Basic Image") {
    Layout = BasicImagePost
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
            <ListsDropdown postId={data.markdownRemark.id} />
          </div>
          <StyledPost
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
          <div className="flex">
            <Share />
            <ListsDropdown />
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
