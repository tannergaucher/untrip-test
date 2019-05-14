import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StyledAuthor = styled.div`
  font-family: var(--serif);
  display: flex;

  .gatsby-image-wrapper {
    border-radius: 50%;
  }

  .author-info {
    margin-left: var(--one);
  }

  .author-name,
  .date-published {
    margin: 0;
    color: var(--dark-2);
    font-weight: lighter;
  }
`

export default function Author({ avatarUrl, name, datePublished }) {
  //
  const { file } = useStaticQuery(graphql`
    query AUTHOR_AVATAR_QUERY {
      file(relativePath: { regex: "/avatar/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  //

  return (
    <StyledAuthor>
      <Img fixed={file.childImageSharp.fixed} />
      <div className="author-info">
        <h6 className="author-name">Tanner Gaucher</h6>
        <h6 className="date-published">6/23/2019</h6>
      </div>
    </StyledAuthor>
  )
}
