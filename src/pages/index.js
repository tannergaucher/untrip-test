import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layouts/index-page-layout"
import Posts from "../components/index-posts"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Posts />
    {/* NEWSLETTER */}
    {/* ABOUT */}
  </Layout>
)

export default IndexPage
