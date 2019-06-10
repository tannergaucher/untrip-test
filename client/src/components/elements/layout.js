import React from "react"

import { Header, Footer } from "."
// import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
