import { useStaticQuery, graphql } from "gatsby"

export const useAllMarkdownPosts = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query allMarkdownRemark {
        allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                category
                featuredImage {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark
}
