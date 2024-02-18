/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem 10% 0 10%;

  & h2 {
    font-family: "acorn-bold", sans-serif;
    font-size: 4rem;
    text-align: center;
    line-height: 5rem;
    text-align: left;
    color: var(--color-header-color);
  }

  & p {
    font-size: 2rem;
    text-align: center;
    margin-top: 3rem;
    text-align: left;
    color: var(--color-header-color);
  }
`;

function OverView({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default OverView;
