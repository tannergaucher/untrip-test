import React from "react"

import { SEO, Layout } from "../components/elements"
import { PostsGrid } from "../components/post"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <PostsGrid />
    </Layout>
  )
}

export default IndexPage
