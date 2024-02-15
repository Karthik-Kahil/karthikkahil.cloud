import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: var(--footer-text);
  margin: 2rem 0 5rem 0;
`;

function FooterCopyRight() {
  return (
    <StyledDiv>
      <h4>2024 Karthik Kahil • Madras</h4>
    </StyledDiv>
  );
}

export default FooterCopyRight;
