/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled(Link)`
  width: 100%;
  height: 100%;
  min-height: 450px;
  background-color: ${(props) =>
    props.$bgColor ? props.$bgColor : "var(--grid-box-1)"};
  overflow: hidden;
  border-radius: 50px;
  text-align: right;
  padding: 4rem;
  cursor: pointer;
  transition: 0.5s ease all;

  &:hover {
    transform: translate(0, -5px);
    transition: 0.5s ease all;
    -webkit-box-shadow: 0px 0px 26px -4px rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 0px 0px 26px -4px rgba(0, 0, 0, 0.18);
    box-shadow: 0px 0px 26px -4px rgba(0, 0, 0, 0.18);
  }

  &:hover > figure > img {
    top: 10px;
    transition: 0.5s ease all;
  }

  & p {
    font-size: 2rem;
    line-height: 3rem;
    color: var(--grid-section-text);
  }

  & h4 {
    font-size: 4rem;
    line-height: 5rem;
    font-family: "acorn-bold", sans-serif;
    color: var(--grid-section-text);
  }

  & figure {
    position: relative;
    margin-top: 5rem;
    width: 800px;
  }

  & figure > img {
    position: absolute;
    left: 10px;
    bottom: 0;
    top: 0;
    transition: 0.5s ease all;
  }
`;

function GridSectionBox({ children, bgColor, to }) {
  return (
    <StyledDiv $bgColor={bgColor} to={to}>
      {children}
    </StyledDiv>
  );
}

export default GridSectionBox;
