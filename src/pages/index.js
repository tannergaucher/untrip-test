import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layouts/index-page-layout"
// INDEX LAYOUT

const IndexPage = () => (
  // index layout
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi People</h1>
  </Layout>
)

export default IndexPage
