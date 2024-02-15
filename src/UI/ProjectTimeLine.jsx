/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5rem;
  margin-top: 5rem !important;
  margin-bottom: 5rem !important;
  color: var(--color-header-color);
  max-width: 800px !important;
  align-items: end;

  & h4 {
    margin-bottom: 1rem;
  }
`;

function ProjectTimeLine({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default ProjectTimeLine;
