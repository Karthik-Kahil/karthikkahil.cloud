/* eslint-disable react/prop-types */

import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$leftGrid ? ".5fr 1fr" : "1fr .5fr"};
  grid-column-gap: 4rem;
  padding: 0 5%;
  max-width: 1500px;
  margin: auto;
  margin-bottom: 10rem;

  @media only screen and (max-width: 1005px) {
    grid-template-columns: 1fr;
    grid-row-gap: 4rem;
  }
`;

function TwoColumnGrid({ children, leftGrid }) {
  return <StyledDiv $leftGrid={leftGrid}>{children}</StyledDiv>;
}

export default TwoColumnGrid;
