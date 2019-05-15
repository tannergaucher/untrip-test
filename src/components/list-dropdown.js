import React from "react"
import styled from "styled-components"
import { DropButton, Button } from "grommet"
import { Bookmark } from "grommet-icons"

const StyledDropButton = styled(DropButton)`
  font-family: var(--serif);
`

export default function ListSelect() {
  return (
    <StyledDropButton
      label={`List`}
      reverse={true}
      icon={<Bookmark color="var(--dark-1)" />}
      plain
      dropAlign={{ top: "bottom", right: "right" }}
      dropContent={
        <div>
          <UserLists />
        </div>
      }
    />
  )
}

function UserLists() {
  return (
    <>
      <UserList />
      <UserList />
      <UserList />
    </>
  )
}

const StyledList = styled.div`
  display: flex;
  align-items: center;
  padding: var(--one);

  h5 {
    margin: 0;
  }

  button {
    margin-left: var(--one);
  }
`

function UserList() {
  return (
    <StyledList>
      {/* IMAGE */}
      <h5>List Title</h5>
      <Button label="Add" />
    </StyledList>
  )
}
