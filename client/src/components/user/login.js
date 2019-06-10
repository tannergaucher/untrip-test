import React, { useState } from "react"
import { navigate } from "@reach/router"
import { useMutation, useApolloClient } from "@apollo/react-hooks"

import { LOG_IN_MUTATION } from "../apollo/graphql"
import { Error } from "../elements"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const client = useApolloClient()
  const [login, { loading, error }] = useMutation(LOG_IN_MUTATION, {
    variables: {
      email,
      password,
    },
  })

  return (
    <form
      method="post"
      onSubmit={async e => {
        e.preventDefault()
        const res = await login()
        client.writeData({ data: { isLoggedIn: true } })
        localStorage.setItem("token", res.data.login.token)
        navigate(`/`)
      }}
    >
      <fieldset disabled={loading}>
        <h2>Log in to your accout</h2>
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
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" disabled={loading}>
          Login
        </button>
      </fieldset>
    </form>
  )
}
