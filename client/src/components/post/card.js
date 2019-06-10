import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

// change edge to post
export default function Card({ edge }) {
  const { slug } = edge.node.fields
  const { category, title, featuredImage } = edge.node.frontmatter

  return (
    <Link to={slug} style={{ textDecoration: `none`, color: `inherit` }}>
      <Img
        fluid={featuredImage.childImageSharp.fluid}
        style={{
          height: `250px`,
          borderRadius: `var(--radius)`,
        }}
        className="res-card-img"
      />
      <div>
        <h6
          style={{
            textTransform: `uppercase`,
            color: `var(--dark-3)`,
            marginTop: `var(--half)`,
            marginBottom: `var(--half)`,
            fontWeight: `300`,
          }}
        >
          {category}
        </h6>
        <h3 className="title" style={{ marginTop: `var(--half)` }}>
          {title}
        </h3>
      </div>
    </Link>
  )
}
