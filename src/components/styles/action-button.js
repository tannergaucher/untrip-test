import styled from "styled-components"

const ActionButton = styled.button`
  background: none;
  border: none;
  border-radius: 50px;
  font-family: var(--serif);
  font-size: var(--font-size);
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: var(--one);
  padding-right: var(--half);
  transition-duration: 0.2s;

  span {
    margin-right: var(--half);
    color: var(--dark-1);
  }

  .left {
    margin-left: var(--half);
  }

  &:hover {
    transform: scale(1.07);
    background: var(--dark-1);
    color: var(--light-1);

    span {
      color: var(--light-1);
    }

    .svg-icon {
      transition-duration: 0.2s;

      polygon {
        fill: white;
      }
    }
  }
`

export default ActionButton
