import styled from "styled-components"
import { Layer } from "grommet"

const StyledLayer = styled(Layer)`
  /* override grommet defaults */
  color: var(--dark--1);
  font-size: var(--font-size);

  /* for plain button  */
  .close {
    align-self: flex-end;
    margin-top: var(--one);
  }

  .menu-body {
    margin: var(--one);
  }
`
export default StyledLayer
