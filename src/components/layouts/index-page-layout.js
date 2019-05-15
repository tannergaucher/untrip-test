import React from "react"
import styled from "styled-components"

import Header from "../header"
import Footer from "../footer"

import "./layout.css"

const StyledApp = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;

  a {
    color: var(--dark-1);
  }
`

const Main = styled.main`
  padding: var(--one);
  max-width: var(--max-width);
  /* add responsive margin-y */
  margin: var(--three) auto;
`

const Layout = ({ children }) => (
  <StyledApp>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </StyledApp>
)

export default Layout
