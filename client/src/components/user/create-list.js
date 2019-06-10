import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks"
import styled from "styled-components"

import { CREATE_LIST_MUTATION } from "../apollo/graphql"

const StyledCreateList = styled.div`
  width: 100%;

  .new-list-btn {
    background: var(--light-3);
    color: var(--dark-1);
    font-size: var(--font-size);
    font-family: var(--serif);
    width: 100%;
    padding: var(--one);
    border: none;
  }

  form {
    display: flex;
    padding: var(--half);

    button {
      background: var(--dark-1);
      color: var(--light-1);
    }
  }

  input {
    font-size: var(--font-size);
    font-family: var(--serif);
  }
`

export default function CreateList({ postId }) {
  const [show, setShow] = useState(false)
  const [title, setTitle] = useState("")
  const [createList] = useMutation(CREATE_LIST_MUTATION, {
    variables: { title, postId, name: "place name", image: "avatar.com" },
  })

  return (
    <StyledCreateList>
      {!show && (
        <button className="new-list-btn" onClick={() => setShow(true)}>
          New List
        </button>
      )}

      {show && (
        <form
          onSubmit={async e => {
            e.preventDefault()
            setShow(false)
            const res = await createList()
            console.log(res)
          }}
        >
          <input value={title} onChange={e => setTitle(e.target.value)} />
          <button type="submit">save</button>
        </form>
      )}
    </StyledCreateList>
  )
}
