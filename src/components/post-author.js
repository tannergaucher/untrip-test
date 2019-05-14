import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StyledAuthor = styled.div`
  margin-top: var(--one);
  margin-bottom: var(--one);
  font-family: var(--serif);
  display: flex;

  align-items: center;

  .gatsby-image-wrapper {
    border-radius: 50%;
  }

  .author-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: var(--one);
  }

  .author-name,
  .date-published {
    margin: 0;
    color: var(--dark-1);
    font-weight: lighter;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      /* css var not working here */
      text-decoration-color: black;
    }
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
        <a href="/author=social">
          <h5 className="author-name">Tanner Gaucher</h5>
          <h5 className="date-published">6/23/2019</h5>
        </a>
      </div>
    </StyledAuthor>
  )
}
