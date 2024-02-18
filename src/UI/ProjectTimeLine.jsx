/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 5rem;
  margin-top: 5rem !important;
  margin-bottom: 5rem !important;
  color: var(--color-header-color);
  max-width: 800px !important;

  & h4 {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 950px) {
    flex-direction: column !important;
    gap: 5rem;
  }
`;

function ProjectTimeLine({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default ProjectTimeLine;
