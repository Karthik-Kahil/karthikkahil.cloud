/* eslint-disable react/prop-types */

import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-nav);
  padding: 4rem 3rem;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;

  @media only screen and (max-width: 950px) {
    flex-direction: column-reverse;
    gap: 3rem;

    & figure {
      align-items: center;
      text-align: center;
    }
  }

  &:hover {
    background-color: var(--color-white);
  }

  & h4 {
    font-size: 2rem;
    color: var(--color-header-color);
    padding-bottom: 0.8rem;
    max-width: 400px;
  }

  & p {
    font-size: 1.7rem;
    color: var(--grid-section-text);
    max-width: 700px;
  }

  & figure {
    background-color: ${(props) => (props.$color ? props.$color : "#000")};
    border-radius: 50%;
    padding: 1rem;
    width: 100%;
    height: 80px;
    max-width: 80px;
    max-height: 80px;
    overflow: hidden;
  }

  & img {
    width: 100%;
    height: 100%;
    max-width: 60px;
    max-height: 60px;
    object-fit: contain;
  }
`;

function SkillList({ children, color }) {
  return <StyledDiv $color={color}>{children}</StyledDiv>;
}

export default SkillList;
