import React from "react"

import { Layout } from "../components/elements"
import { Login, Signup } from "../components/user"

export default function login() {
  return (
    <Layout>
      <h1>Please Log In</h1>
      <Login />
      <Signup />
    </Layout>
  )
}
