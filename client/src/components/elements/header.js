import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

import { Menu } from "."
import { useSiteMetadata } from "../../hooks/use-site-metadata"

function Header() {
  const { title } = useSiteMetadata()

  return (
    <header>
      <div
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
          margin: `var(--half)`,
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: `inherit`,
          }}
        >
          <h4 className="site-title" style={{ margin: `0` }}>
            {title}
          </h4>
        </Link>
        <div className="only-full">
          <Navbar />
        </div>
        <div className="only-mobile">
          <Menu />
        </div>
      </div>
    </header>
  )
}

export default Header

const StyledNavbar = styled.div`
  display: flex;
  flex-direction: row;

  a {
    text-decoration: none;
    color: inherit;
    margin-right: var(--one);
  }

  h4 {
    margin-top: 0;
    margin-bottom: 0;
  }
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link>
        <h4>Guide</h4>
      </Link>
      <Link>
        <h4>Lists</h4>
      </Link>
      {/* QUERY IS_LOGGED_IN */}
      <Link>
        <button>Log In</button>
      </Link>
    </StyledNavbar>
  )
}
