import React, { useState } from "react"
import { navigate } from "@reach/router"
import { useMutation, useApolloClient } from "@apollo/react-hooks"

import { Error } from "../elements"
import { SIGN_UP_MUTATION } from "../apollo/graphql"

export default function Signup() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [signup, { loading, error }] = useMutation(SIGN_UP_MUTATION, {
    variables: { email, name, password },
  })
  const client = useApolloClient()

  return (
    <form
      method="post"
      onSubmit={async e => {
        e.preventDefault()
        const res = await signup()
        // todo: write data.me to cache too
        client.writeData({ data: { isLoggedIn: true } })
        localStorage.setItem("token", res.data.signup.token)
        setEmail("")
        setName("")
        setPassword("")
        navigate(`/`)
      }}
    >
      <fieldset disabled={loading}>
        <h2>Sign up for an account</h2>
        {error && <Error error={error} />}
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <button type="submit" disabled={loading}>
          sign up
        </button>
      </fieldset>
    </form>
  )
}
