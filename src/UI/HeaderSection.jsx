/* eslint-disable react/prop-types */

import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  color: var(--color-header-color);
  margin-bottom: ${(props) => (props.$pad_bottom ? props.$pad_bottom : "0")};

  & h2 {
    font-family: "acorn-bold", sans-serif;
    font-size: 9rem;
    text-align: center;
    line-height: 10rem;
  }

  & p {
    font-size: 2rem;
    text-align: center;
    margin-top: 3rem;
  }
`;

function HeaderSection({ children, pad_bottom }) {
  return <StyledDiv $pad_bottom={pad_bottom}>{children}</StyledDiv>;
}

export default HeaderSection;
