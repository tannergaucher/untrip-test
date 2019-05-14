import styled from "styled-components"

const IconButton = styled.button`
  background: none;
  border: var(--border) solid var(--dark-1);
  border-radius: 50px;
  font-family: var(--serif);
  font-size: var(--font-size);
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: var(--one);
  padding-right: var(--one);
  transition-duration: 0.2s;

  span {
    margin-right: var(--one);
  }

  &:hover {
    transform: scale(1.1);
    background: var(--dark-1);
    color: var(--light-1);

    .svg-icon {
      transition-duration: 0.2s;
      polygon {
        fill: papayawhip;
      }
    }
  }
`

export default IconButton
