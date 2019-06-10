import React from "react"
import Link from "gatsby-link"

import { useSiteMetadata } from "../../hooks/use-site-metadata"

export default function Footer() {
  const { title } = useSiteMetadata()

  return (
    <footer style={{ margin: `var(--half)` }}>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
          color: `inherit`,
        }}
      >
        <h3 style={{ margin: `0` }}>{title}</h3>
      </Link>
    </footer>
  )
}
