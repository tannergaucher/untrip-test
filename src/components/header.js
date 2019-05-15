import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

import Menu from "../components/menu"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  .site-title {
    margin: var(--one);
  }

  a {
    text-decoration: none;
  }

  .full-menu {
    display: flex;

    .nav-link {
      margin-right: var(--one);
    }
  }

  .auth {
    h3 {
      margin-right: var(--one);
    }
  }

  @media (max-width: 600px) {
    .mobile-menu {
      display: inline;
    }

    .full-menu {
      display: none;
    }

    .auth {
      display: none;
    }
  }

  @media (min-width: 600px) {
    /* background: blue; */

    .mobile-menu {
      display: none;
    }
  }
`

const StyledDrop = styled(DropMenu)`
  color: var(--dark-1);
`

function Header() {
  const { title } = useSiteMetadata()

  return (
    <StyledHeader>
      <Link to="/">
        <h3 className="site-title">{title}</h3>
      </Link>

      <div className="mobile-menu">
        <Menu />
      </div>

      <div className="full-menu">
        {/* <DropMenu /> */}
        {/*  */}
      </div>
      <div className="auth">
        <h3>Sign In</h3>
      </div>
    </StyledHeader>
  )
}

export default Header

const StyledDropMenu = styled.div`
  display: flex;

  button {
    font-size: var(--font-size);
    background: none;
    border: none;
    color: var(--dark-one);
    padding-left: var(--one);
    padding-right: var(--one);
    padding-top: var(--one);
    padding-bottom: var(--one);

    &:hover {
      background: var(--dark-1);
      color: var(--light-1);
    }
  }
`

function DropMenu() {
  return (
    <StyledDropMenu>
      <button>Food & Drink</button>
      <button>Music</button>
      <button>Music</button>
    </StyledDropMenu>
  )
}
