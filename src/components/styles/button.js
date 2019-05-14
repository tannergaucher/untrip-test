import styled from "styled-components"

const Button = styled.button`
  margin: var(--one);
  padding-left: var(--two);
  padding-right: var(--two);
  padding-top: var(--one);
  padding-bottom: var(--one);
  font-size: 16px;

  font-weight: lighter;
  font-family: var(--serif);
  background: var(--light-1);
  border: var(--border) solid var(--dark-1);

  &:hover {
    background: var(--dark-1);
    color: var(--light-1);
  }
`

export default Button
