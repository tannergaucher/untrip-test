import React, { useState } from "react"
import { Query } from "react-apollo"
import { Menu, Close } from "grommet-icons"
import Link from "gatsby-link"

import PlainButton from "../styles/plain-button"
import Layer from "../styles/layer"
import Logout from "../user/logout"

import { IS_LOGGED_IN } from "../apollo/graphql"

export default function MenuLayer() {
  const [show, setShow] = useState(false)

  return (
    <>
      <PlainButton onClick={() => setShow(true)}>
        <Menu color="var(--dark-1)" />
      </PlainButton>
      {show && (
        <Layer
          position="right"
          full="vertical"
          onClickOutside={() => setShow(false)}
          onEsc={() => setShow(false)}
          responsive={false}
        >
          <PlainButton
            onClick={() => setShow(false)}
            style={{ margin: `var(--half)` }}
          >
            <Close color="var(--dark-1)" />
          </PlainButton>
          <ToggleAuth />
        </Layer>
      )}
    </>
  )
}

function ToggleAuth() {
  return (
    <Query query={IS_LOGGED_IN}>
      {({ data }) => <>{data.isLoggedIn ? <Logout /> : <Login />}</>}
    </Query>
  )
}

const Login = () => <Link to="/login">Login</Link>
