import React, { useState } from "react"
import { Query, Mutation } from "react-apollo"
import styled from "styled-components"
import { DropButton } from "grommet"
import { Bookmark } from "grommet-icons"

import { CreateList } from "../user"
import { CURRENT_USER_QUERY } from "../apollo/graphql"

const StyledDropButton = styled(DropButton)`
  font-family: var(--serif);
`
export default function ListDropdown({ postId }) {
  return (
    <StyledDropButton
      label={`List`}
      reverse={true}
      icon={<Bookmark color="var(--dark-1)" />}
      plain
      dropAlign={{ top: "bottom", right: "right" }}
      dropContent={
        <div>
          <UserLists postId={postId} />
        </div>
      }
    />
  )
}

const StyledUserLists = styled.div`
  width: 100%;
`

function UserLists({ postId }) {
  return (
    <StyledUserLists>
      <Query query={CURRENT_USER_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading</p>
          if (error) return <p>{error.message}</p>

          return (
            <>
              {data.me.lists.map(list => (
                <UserList key={list.id} list={list} />
              ))}
              <CreateList postId={postId} />
            </>
          )
        }}
      </Query>
    </StyledUserLists>
  )
}

const StyledList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--one);

  h5 {
    margin: 0;
  }

  button {
    margin-left: var(--one);
    padding-left: var(--one);
    padding-right: var(--one);
    padding-top: var(--half);
    padding-bottom: var(--half);
    background: var(--light-1);
    border: var(--border) solid var(--dark-1);
    color: var(--dark-1);
    font-family: var(--serif);
  }

  &:hover {
    background: var(--light-2);

    button {
      border: var(--border) solid var(--red);
    }
  }
`

function UserList({ list }) {
  return (
    <StyledList>
      <h5>{list.title}</h5>
      <button
        onClick={() => {
          console.log("toggle mutation")
        }}
      >
        Add
      </button>
    </StyledList>
  )
}
