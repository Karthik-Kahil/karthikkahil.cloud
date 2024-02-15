/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;

  & h4 {
    font-size: 1.5rem;
  }

  & p {
    font-size: 1.3rem;
    line-height: 2rem;
  }
`;

function GridTwo({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default GridTwo;
